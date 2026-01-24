import { defineConfig } from 'mdsx';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import path from 'node:path';

const codeMetaPlugin = () => {
	return (tree) => {
		visit(tree, 'code', (node) => {
			if (typeof node.meta !== 'string' || node.meta.length === 0) {
				return;
			}

			const attributes = parseCodeMeta(node.meta);
			if (Object.keys(attributes).length === 0) {
				return;
			}

			node.data ||= {};
			node.data.hProperties = {
				...(node.data.hProperties ?? {}),
				...attributes,
			};
		});
	};
};

const parseCodeMeta = (meta) => {
	const attributes = {};
	const regex = /([A-Za-z0-9_-]+)=("([^"]*)"|'([^']*)'|([^\s]+))/g;
	let match;

	while ((match = regex.exec(meta)) !== null) {
		const key = match[1];
		const value = match[3] ?? match[4] ?? match[5] ?? '';

		if (key === 'title') {
			attributes['data-title'] = value;
		} else if (key === 'collapsible') {
			attributes['data-collapsible'] = value;
		}
	}

	return attributes;
};
 
export const mdsxConfig = defineConfig({
	extensions: ['.md'],
	remarkPlugins: [remarkGfm, codeMetaPlugin],
	blueprints: {
		default: {
			path: path.resolve('src/lib/components/markdown/blueprint.svelte')
		}
	}
});
