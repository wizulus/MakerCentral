import AppFrame from '@components/AppFrame';
import SuperWorldPreview from '@components/pages/browser/SuperWorldPreview';
import LevelSearchResultWidget from '@components/pages/search/LevelSearchResultWidget';
import { CloudFunction } from '@data/types/FirebaseUtilTypes';
import { MCUserDocData } from '@data/types/MCBrowserTypes';
import { getUser } from '@scripts/browser/MeilisearchUtil';
import { functions, getLevelThumbnailUrl } from '@scripts/site/FirebaseUtil';
import Page404 from 'pages/404';
import React from 'react';

interface UserPageProps {
	userDocData: MCUserDocData | null,
	superWorldThumbnailUrls: { [levelId: string]: string },
}

/**
 * The page used to display the user's public profile.
 * @param props The props:
 * * userDocData The user's data.
 * * superWorldThumbnailUrls The URLs of the thumbnails of
 * the showcased levels in the user's super world.
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
			<div className="user-profile">
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
				{userData.world !== null && (
					<>
						<h2 className="user-profile-header">Super World</h2>
						<SuperWorldPreview
							world={userData.world}
							makerName={userData.name}
							makerId={userData.id}
							thumbnailUrls={props.superWorldThumbnailUrls}
						/>
					</>
				)}
				<h2 className="user-profile-header">Levels ({userData.levels})</h2>
				<LevelSearchResultWidget searchParams={{
					searchMode: 'Levels',
					q: '',
					sortType: 'By Date',
					sortOrder: 'Descending',
					gameStyle: 'Any',
					difficulty: 'Any',
					tags: 'Any',
					theme: 'Any',
					page: 0,
					makerId: userData.id,
				}}
				/>
			</div>
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

	try {
		// Get the user's data.
		const data = await getUser(context.params.uid);
		if (!data) throw new Error('User not found.');

		// Load the the thumbnails of the user's most popular super world levels.
		const superWorldThumbnailUrls: { [levelId: string]: string } = {};
		const promises = [];
		if (data.world !== null) {
			for (const levelId of data.world.showcasedLevelIds) {
				promises.push(getLevelThumbnailUrl(levelId));
			}
		}
		const thumbnails = await Promise.all(promises);

		// Map the thumbnails to the level IDs.
		for (let i = 0; i < thumbnails.length; i++) {
			superWorldThumbnailUrls[data.world!.showcasedLevelIds[i]] = thumbnails[i];
		}

		return {
			props: {
				userDocData: data,
				superWorldThumbnailUrls,
			},
		};
	} catch (err) {
		console.error(err);
		return {
			props: {
				userDocData: null,
				superWorldThumbnailUrls: {},
			},
		};
	}
}

export default UserPage;
