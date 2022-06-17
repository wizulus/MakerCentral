import AppFrame from '@components/AppFrame';
import LevelCategoryFeed from '@components/pages/browser/LevelCategoryFeed';
import LevelSearchResultWidget from '@components/pages/search/LevelSearchResultWidget';
import { CloudFunction } from '@data/types/FirebaseUtilTypes';
import { MCUserDocData } from '@data/types/MCBrowserTypes';
import { db, functions } from '@scripts/site/FirebaseUtil';
import {
	doc, getDoc, QueryConstraint, where,
} from 'firebase/firestore/lite';
import { httpsCallable } from 'firebase/functions';
import Page404 from 'pages/404';
import React from 'react';

interface UserPageProps {
	userDocData: MCUserDocData | null,
}

/**
 * The page used to display the user's public profile.
 * @param props The props:
 * * uid: The User's ID.
 * * userInfo: The user's display name, bio, avatar url, and creator rep.
 */
function UserPage(props: UserPageProps) {
	if (props.userDocData === null) return <Page404 />;
	const userData = props.userDocData;

	const formattedMakerCode = `${userData.id.substring(0, 3)}-${userData.id.substring(3, 6)}-${userData.id.substring(6, 9)}`;

	return (
		<AppFrame
			title={`${userData.name}'s Profile - MakerCentral`}
			description={`${userData.name}'s profile on MakerCentral. ${userData.makerPoints} maker points.`}
		>
			<div className="user-profile-container-upper">
				<div className="user-profile-name-container">
					<span>{userData.name}</span>
					<span>{userData.makerPoints.toLocaleString()} Maker Points</span>
				</div>
				<div className="user-profile-code-container">
					<span>
						Maker ID:&nbsp;&nbsp;
						<span className="level-code">{formattedMakerCode}</span>
					</span>
				</div>
			</div>
			<LevelSearchResultWidget searchParams={{
				q: '',
				sortType: 'By Date',
				sortOrder: 'Descending',
				gameStyle: 'Any',
				difficulty: 'Any',
				tag: 'Any',
				theme: 'Any',
				page: 0,
				makerId: userData.id,
			}}
			/>
		</AppFrame>
	);
}

/**
 * Obtains the server-side props used for rendering the page.
 * @param context The context object.
 * @returns The props.
 */
export async function getServerSideProps(
	context: {params: {uid: string}},
): Promise<{props: UserPageProps}> {
	const userFn: CloudFunction<{
		userId: string,
	}, MCUserDocData> = httpsCallable(functions, 'getUser');

	try {
		const data = (await userFn({
			userId: context.params.uid,
		})).data;
		return {
			props: {
				userDocData: data,
			},
		};
	} catch (err) {
		console.error(err);
		return {
			props: {
				userDocData: null,
			},
		};
	}
}

export default UserPage;
