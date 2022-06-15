import { ColumnFormat } from './CSVObjectStream';

export const levelCSVSchema: ColumnFormat = {
	data_id: 'int',
	name: 'string',
	description: 'string',
	uploaded: 'int',
	course_id: 'string',
	gamestyle: 'int',
	theme: 'int',
	difficulty: 'int',
	tag1: 'int',
	tag2: 'int',
	world_record: 'int',
	upload_time: 'int',
	num_comments: 'int',
	clear_condition: 'int',
	clear_condition_magnitude: 'int',
	clears: 'int',
	attempts: 'int',
	clear_rate: 'real',
	plays: 'int',
	versus_matches: 'int',
	coop_matches: 'int',
	likes: 'int',
	boos: 'int',
	unique_players_and_versus: 'int',
	weekly_likes: 'int',
	weekly_plays: 'int',
	uploader_pid: 'string',
	first_completer_pid: 'string',
	record_holder_pid: 'string',
};

export interface LevelCSVRow {
	data_id: number,
	name: string,
	description: string,
	uploaded: number,
	course_id: string,
	gamestyle: number,
	theme: number,
	difficulty: number,
	tag1: number,
	tag2: number,
	world_record: number,
	upload_time: number,
	num_comments: number,
	clear_condition: number,
	clear_condition_magnitude: number,
	clears: number,
	attempts: number,
	clear_rate: number,
	plays: number,
	versus_matches: number,
	coop_matches: number,
	likes: number,
	boos: number,
	unique_players_and_versus: number,
	weekly_likes: number,
	weekly_plays: number,
	uploader_pid: string,
	first_completer_pid: string,
	record_holder_pid: string,
}

export const userCSVSchema: ColumnFormat = {
	pid: 'string',
	data_id: 'int',
	code: 'string',
	region: 'int',
	name: 'string',
	country: 'string',
	last_active: 'int',
	mii_image: 'string',
	mii_studio_code: 'string',
	courses_played: 'int',
	courses_cleared: 'int',
	courses_attempted: 'int',
	courses_deaths: 'int',
	likes: 'int',
	maker_points: 'int',
	easy_highscore: 'int',
	normal_highscore: 'int',
	expert_highscore: 'int',
	super_expert_highscore: 'int',
	versus_rating: 'int',
	versus_rank: 'int',
	versus_won: 'int',
	versus_lost: 'int',
	versus_win_streak: 'int',
	versus_lose_streak: 'int',
	versus_plays: 'int',
	versus_disconnected: 'int',
	coop_clears: 'int',
	coop_plays: 'int',
	recent_performance: 'int',
	versus_kills: 'int',
	versus_killed_by_others: 'int',
	first_clears: 'int',
	world_records: 'int',
	unique_super_world_clears: 'int',
	uploaded_levels: 'int',
	weekly_maker_points: 'int',
	last_uploaded_level: 'int',
	is_nintendo_employee: 'int',
	comments_enabled: 'int',
	tags_enabled: 'int',
	super_world_id: 'string',
};

export interface UserCSVRow {
	pid: string,
	data_id: number,
	code: string,
	region: number,
	name: string,
	country: string,
	last_active: number,
	mii_image: string,
	mii_studio_code: string,
	courses_played: number,
	courses_cleared: number,
	courses_attempted: number,
	courses_deaths: number,
	likes: number,
	maker_points: number,
	easy_highscore: number,
	normal_highscore: number,
	expert_highscore: number,
	super_expert_highscore: number,
	versus_rating: number,
	versus_rank: number,
	versus_won: number,
	versus_lost: number,
	versus_win_streak: number,
	versus_lose_streak: number,
	versus_plays: number,
	versus_disconnected: number,
	coop_clears: number,
	coop_plays: number,
	recent_performance: number,
	versus_kills: number,
	versus_killed_by_others: number,
	first_clears: number,
	world_records: number,
	unique_super_world_clears: number,
	uploaded_levels: number,
	weekly_maker_points: number,
	last_uploaded_level: number,
	is_nintendo_employee: number,
	comments_enabled: number,
	tags_enabled: number,
	super_world_id: string,
}

export const badgeCSVSchema: ColumnFormat = {
	pid: 'string',
	type: 'int',
	rank: 'int',
};

export interface BadgeCSVRow {
	pid: string,
	type: number,
	rank: number,
}

export const worldCSVSchema: ColumnFormat = {
	pid: 'string',
	world_id: 'string',
	worlds: 'int',
	levels: 'int',
	planet_type: 'int',
	created: 'int',
};

export interface WorldCSVRow {
	pid: string,
	world_id: string,
	worlds: number,
	levels: number,
	planet_type: number,
	created: number,
}

export const worldLevelCSVSchema: ColumnFormat = {
	pid: 'string',
	data_id: 'int',
	ninjis: 'int',
};

export interface WorldLevelCSVRow {
	pid: string,
	data_id: number,
	ninjis: number,
}