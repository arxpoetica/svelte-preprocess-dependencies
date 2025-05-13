import { EOL } from 'os';
import { readFile } from 'fs/promises';
import path from 'path';
import postcss from 'postcss';
import { Logger } from './logger.js';

const dependencies_regex = /@dependency\s+['"](.+?)['"];/g;

async function inline_dependencies(code, filename) {
	const baseDir = path.dirname(filename);
	const matches = [...code.matchAll(dependencies_regex)];
	const dependencies = [];
	for (const match of matches) {
		try {
			const importPath = match[1];
			const resolvedPath = path.resolve(baseDir, importPath);
			const fileContents = await readFile(resolvedPath, 'utf8');
			code = code.replace(match[0], fileContents + EOL);
			// dependencies.push('./' + path.relative(process.cwd(), resolvedPath));
			// console.log({ importPath });
			dependencies.push(importPath);
		} catch (e) {
			Logger.error(`Failed to inline @dependency: ${e.message}`);
			code = code.replace(match[0], '');
		}
	}
	return { code, dependencies };
}

export const preprocess_style = async ({ filename, content }) => {
	// inline dependency imports before anything else
	let { code, dependencies } = await inline_dependencies(content, filename);

	console.log('dependencies', dependencies);

	const result = await postcss().process(code, { from: 'src' });
	if (result.css && typeof result.css === 'string') code = result.css.toString();

	if (dependencies.length) console.log({ dependencies });
	return { code, dependencies };
};
