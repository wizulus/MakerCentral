import { LevelSearchResults, numResultsPerPage } from '@scripts/browser/MeilisearchUtil';
import React from 'react';
import LevelPreview from '../browser/LevelPreview';
import LevelSearchPageControl from './LevelSearchPageControl';

/**
 * Displays level search results.
 * @param props The props:
 * - results: The results of the search.
 */
function LevelSearchResultView(props: {
	results: LevelSearchResults,
}) {
	return (
		<div style={{
			minHeight: '100px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: '20px',
		}}
		>
			<span>{`Found about ${props.results.numResults.toLocaleString()} results in ${props.results.computeTimeMs / 1000} seconds`}</span>
			<div style={{
				minHeight: '100px',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				gap: '20px',
				flexWrap: 'wrap',
				width: '90vw',
				maxWidth: '1000px',
				justifyContent: 'center',
			}}
			>{props.results.results.slice(0, numResultsPerPage)
					.map((level) => <LevelPreview level={level} key={level.id} />)}
			</div>
			<LevelSearchPageControl curSearchResults={props.results} />
		</div>
	);
}

export default LevelSearchResultView;