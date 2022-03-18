import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import next from 'next';

// Exports from other source files
export * from './levels';
export * from './social';
export * from './rewards';

// IMPORTANT: RUN 'npx ttsc -w' after changes are made!! (ttsc isn't a typo!)

admin.initializeApp();

const isDev = process.env.NODE_ENV !== 'production';

const server = next({
	dev: isDev,
	conf: { distDir: '.next' },
});

const nextjsHandle = server.getRequestHandler();
export const nextServer = functions.https.onRequest(
	(request, response) => server.prepare().then(() => nextjsHandle(request, response)).catch((e) => {
		console.error(e);
	}),
);
export const initUser = functions.https.onCall(async (_data, context) => {
	if (context.auth === undefined) return { success: false, msg: 'User is not logged in.' };
	const userDocRef = admin.firestore().doc(`users/${context.auth.uid}`);
	const userDocSnap = await userDocRef.get();
	const userAccessDocRef = admin.firestore().doc(`users/${context.auth.uid}/priv/access`);
	const userAccessDocSnap = await userAccessDocRef.get();
	const userSocialDocRef = admin.firestore().doc(`users/${context.auth.uid}/priv/social`);
	const userSocialDocSnap = await userSocialDocRef.get();

	if (!userDocSnap.exists) {
		await userDocRef.set({
			name: `New User ${context.auth.uid.substring(0, 4)}`,
		});
	} else if (userDocSnap.data()!.name === undefined) {
		await userDocRef.set({
			name: `New User ${context.auth.uid.substring(0, 4)}`,
		});
	}
	if (!userAccessDocSnap.exists) {
		await userAccessDocRef.set({
			patronUntil: new admin.firestore.Timestamp(0, 0),
		});
	} else {
		const userAccessData = userAccessDocSnap.data()!;
		// Update old patreon data to new schema
		if (userAccessData.earlyAccessUntil !== undefined) {
			await userAccessDocRef.set({
				patronUntil: userAccessData.earlyAccessUntil,
				patronStatus: 'Fire Flower',
			});
		}
	}
	if (!userSocialDocSnap.exists) {
		await userSocialDocRef.set({
			points: 0,
			lastLevelUploadTime: new admin.firestore.Timestamp(0, 0),
		});
	}

	return { success: true, msg: '' };
});
