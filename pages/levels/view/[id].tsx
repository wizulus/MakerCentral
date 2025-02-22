import React, { useEffect, useState } from 'react';
import AppFrame from '@components/AppFrame';
import Page404 from 'pages/404';
import BookmarkButton from '@components/pages/browser/BookmarkButton';
import { getLevelThumbnailUrl, initAnalytics } from '@scripts/site/FirebaseUtil';
import { useRouter } from 'next/router';
import { MCLevelDocData } from '@data/types/MCBrowserTypes';
import useCloudFn from '@components/hooks/useCloudFn';
import useLevelThumbnailStates from '@components/hooks/useLevelThumbnailStates';
import LevelThumbnail from '@components/pages/browser/LevelThumbnail';
import { countryCodeToName } from '@data/types/CountryTypes';
import TagDisplay from '../../../src/components/pages/browser/TagDisplay';
import { getlevel } from '@scripts/browser/MeilisearchUtil';

/**
 * Displays details about a level. The id URL parameter specifies the level ID in the database.
 */
function LevelPage(props: {
	level: MCLevelDocData | null,
	initThumbnailUrl: string | undefined,
}) {
	const level = props.level;
	if (level === null) {
		return <Page404 />;
	}

	const thumbnails = useLevelThumbnailStates({
		[level.id]: {
			state: props.initThumbnailUrl === undefined || props.initThumbnailUrl === ''
				? 'Not Uploaded' : 'Loaded',
			url: props.initThumbnailUrl !== undefined ? props.initThumbnailUrl : null,
		},
	});

	const formattedLevelCode = `${props.level!.id.substring(0, 3)}-${props.level!.id.substring(3, 6)}-${props.level!.id.substring(6, 9)}`;

	const imgThumbnailUrl = Object.keys(thumbnails).length > 0 ? thumbnails[level.id].url! : '';

	return (
		<AppFrame
			title={`${props.level!.name} - MakerCentral Levels`}
			description={`"${props.level!.description}" Tags: ${props.level!.tags.join(', ')}. ${props.level!.makerName}'s level on MakerCentral.`}
			imageUrl={props.initThumbnailUrl}
		>
			<div className="level-page-content">
				<div className="level-page-header">
					<BookmarkButton
						level={level}
						left="calc(100% - 50px)"
						top="15px"
					/>
					<LevelThumbnail
						url={imgThumbnailUrl}
						status={thumbnails[level.id].state}
						style={{
							height: '50px',
						}}
					/>
					<div>
						<h3 className="level-page-title">{level.name}</h3>
						<p className="level-code">{formattedLevelCode}</p>
					</div>
				</div>
				<div className="level-page-info-group">
					<div
						className="level-page-info-container"
						style={{
							flexGrow: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center',
						}}
					>
						<table className="info-table">
							<tr>
								<td>Course ID</td>
								<td>{formattedLevelCode}</td>
							</tr>
							<tr>
								<td>Maker</td>
								<td><a href={`/users/${level.makerId}`}>{level.makerName}</a></td>
							</tr>
							<tr>
								<td>Upload Date</td>
								<td>{new Date(level.uploadTime).toLocaleDateString()}</td>
							</tr>
							<tr>
								<td>Country</td>
								<td>{countryCodeToName[level.country]}</td>
							</tr>
							<tr>
								<td>Likes</td>
								<td>{level.numLikes.toLocaleString()}</td>
							</tr>
							<tr>
								<td>Boos</td>
								<td>{level.numBoos.toLocaleString()}</td>
							</tr>
							<tr>
								<td>Plays</td>
								<td>{level.numPlays.toLocaleString()}</td>
							</tr>
							<tr>
								<td>Game Style</td>
								<td>{level.gameStyle}</td>
							</tr>
							<tr>
								<td>Theme</td>
								<td>{level.theme}</td>
							</tr>
							<tr>
								<td>Clear Rate</td>
								<td>{(level.clearRate * 100).toLocaleString(undefined, {
									minimumFractionDigits: 3,
									maximumFractionDigits: 3,
								})}%{level.clearRate === 0 ? ' (Uncleared)' : ''}
								</td>
							</tr>
						</table>
					</div>
					<div
						className="level-page-info-container"
						style={{
							width: '300px',
						}}
					>
						<div className="level-page-info-container-section">
							<h4>Description</h4>
							<p>{level.description}</p>
						</div>
						<div className="level-page-info-container-section">
							<h4>Tags</h4>
							<TagDisplay tags={level.tags} />
						</div>
						<div className="level-page-info-container-section">
							<h4>Level Viewer</h4>
							<a
								style={{
									display: 'block',
									width: '100%',
									textAlign: 'left',
									margin: '5px',
								}}
								target="_blank"
								href={`https://smm2.wizul.us/smm2/level/${level.id}`}
								rel="noreferrer"
							>View in Wizulus's SMM2 Viewer
							</a>
						</div>
						<div
							className="level-page-info-container-section"
							style={{
								marginTop: 'auto',
							}}
						>
							{level.updatedTime >= 1673479800000 && (
								// Only show if the level was updated after the backup was restored
								<p style={{
									textAlign: 'right',
								}}
								><i>{`Last updated: ${new Date(level.updatedTime).toLocaleDateString()}`}</i>
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</AppFrame>
	);
}

/**
 * Fetches level data at request time.
 * @param context The context of the request. Includes the URL parameters.
 * @returns The props to render at request time.
 */
export async function getServerSideProps(context: { params: {
	id: string,
}}) {
	const levelId = context.params.id;
	const loadedLevel = await getlevel(levelId);

	const thumbnailUrl = await getLevelThumbnailUrl(levelId);
	return {
		props: {
			level: loadedLevel,
			initThumbnailUrl: thumbnailUrl,
		},
	};
}

export default LevelPage;
