import { LevelSearchResults, numResultsPerPage } from '@scripts/browser/MeilisearchUtil';
import { useRouter } from 'next/router';
import React from 'react';
import TriggerButton from '../controls/TriggerButton';
import { getSearchUrl, SearchFilterSettings } from './LevelSearchBar';

/**
 * Displays pagination controls for a search result page.
 * @param props The props:
 * - curSearch: The current search that results are being displayed for.
 */
function LevelSearchPageControl(props: {
	curSearchResults: LevelSearchResults,
}) {
	const history = useRouter();

	const showBackBtn = props.curSearchResults.searchParams.page > 0;
	const showNextBtn = props.curSearchResults.results.length === numResultsPerPage + 1;

	const curPage = parseInt(props.curSearchResults.searchParams.page as unknown as string, 10);

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			gap: '5px',
		}}
		>
			<div style={{ display: showBackBtn ? '' : 'none' }}>
				<TriggerButton
					text="Back"
					type="normal"
					onClick={() => {
						const query = props.curSearchResults.searchParams.q;
						const searchParams = props.curSearchResults.searchParams;
						const newSearchSettings = {
							sortType: searchParams.sortType,
							sortOrder: searchParams.sortOrder,
							difficulty: searchParams.difficulty,
							theme: searchParams.theme,
							gameStyle: searchParams.gameStyle,
							tag: searchParams.tag,
							page: curPage - 1,
						};
						const url = getSearchUrl(query, newSearchSettings);
						history.push(url);
					}}
				/>
			</div>
			<div style={{ display: showNextBtn ? '' : 'none' }}>
				<TriggerButton
					text="Next"
					type="normal"
					onClick={() => {
						const query = props.curSearchResults.searchParams.q;
						const searchParams = props.curSearchResults.searchParams;
						const newSearchSettings: SearchFilterSettings = {
							sortType: searchParams.sortType,
							sortOrder: searchParams.sortOrder,
							difficulty: searchParams.difficulty,
							theme: searchParams.theme,
							gameStyle: searchParams.gameStyle,
							tag: searchParams.tag,
							page: curPage + 1,
						};
						const url = getSearchUrl(query, newSearchSettings);
						history.push(url);
					}}
				/>
			</div>
		</div>
	);
}

export default LevelSearchPageControl;
