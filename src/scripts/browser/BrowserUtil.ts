import { db } from '@scripts/site/FirebaseUtil';
import {
	collection, doc, FieldPath, getDoc, getDocs, limit,
	OrderByDirection, query, QueryConstraint, Timestamp, WhereFilterOp,
} from 'firebase/firestore/lite';

export interface QueryFilter {
	fieldPath: string | FieldPath;
	opStr: WhereFilterOp;
	value: any;
}

export interface QueryOrder {
	fieldPath: string | FieldPath;
	order: OrderByDirection;
}

const userLevelTags = [
	'Standard',
	'Puzzle',
	'Music',
	'Autoscroll',
	'Speedrun',
	'Precision',
	'Auto',
	'Multiplayer',
	'Themed',
	'Boss Fight',
	'Glitch',
	'Technical',
	'Exploration',
	'Troll',
	'Story',
] as const;

export interface UserLevel {
	name: string;
	id: string;
	timestamp: Timestamp;
	thumbnailUrl: string;
	levelCode: string;
	makerName: string;
	makerUid: string;
	difficulty: 'Easy' | 'Normal' | 'Expert' | 'Super Expert';
	gameStyle: 'SMB1' | 'SMB3' | 'SMW' | 'NSMBU' | 'SM3DW';
	numLikes: number;
	numComments: number;
	shortDescription: string;
	description: string;
	tags: UserLevelTag[];
}

export type UserLevelTag = typeof userLevelTags[number];

/**
 * Runs a query through the set of levels.
 * @param filter The query filter to apply or null if none.
 * @param orders The orders to sort the results by.
 * @param numLevels The number of levels to get.
 * @returns The levels returned from the query.
 */
export async function queryLevels(queryConstraints: QueryConstraint[],
	numLevels: number): Promise<UserLevel[]> {
	const levelsRef = collection(db, 'levels');
	const constraints = [
		...queryConstraints,
		limit(numLevels),
	];
	const q = query(levelsRef, ...constraints);
	const queryDocs = await getDocs(q);

	return queryDocs.docs.map((levelDoc) => ({
		...levelDoc.data(),
		id: levelDoc.id,
	} as UserLevel));
}

/**
 * Retrieves a level from the database.
 * @param id The ID of the level.
 * @returns A UserLevel object containing level data or null if no data was found.
 */
export async function getLevel(id: string): Promise<UserLevel | null> {
	const levelRef = doc(db, `levels/${id}`);
	const levelDoc = await getDoc(levelRef);
	if (!levelDoc.exists()) return null;
	return {
		...levelDoc.data(),
		id: levelDoc.id,
	} as UserLevel;
}
