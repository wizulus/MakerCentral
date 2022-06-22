import fs from 'fs';

/**
 * Iterates over the text files in a directory.
 */
export default class TextDirIterator {
	private dir: string;

	private fileNames: string[];

	/**
	 * Creates a new TextDirIterator.
	 * @param dir The path to the directory to read text files from.
	 */
	constructor(dir: string) {
		this.dir = dir;
		this.fileNames = fs.readdirSync(dir);
	}

	/**
	 * Iterates over the text files.
	 * @param cb A callback to be called with the data for every file in the directory.
	 * @param startIndex (Optional) The zero-indexed file index to start at.
	 * It returns a Promise that resolves when the work is done.
	 */
	async iterate(cb: (data: string, i: number) => Promise<void>,
		startIndex: number = 0): Promise<void> {
		for (let i = startIndex; i < this.fileNames.length; i++) {
			const data = fs.readFileSync(`${this.dir}/${this.fileNames[i]}`, 'utf8');
			await cb(data, i);
		}
	}
}
