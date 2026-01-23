import type { Plugin } from 'unified';
import { selectAll } from 'unist-util-select';
import type { Root } from 'myst-spec';
import type { GenericNode } from 'myst-common';


export async function greenTextTransform(tree: Root): Promise<void> {

  const textNodes = selectAll('mystRole', tree) as GenericNode[];

  textNodes.forEach(async node => {

    // Change the node type to div

    node['type'] = 'span';
    node['style'] = { color: 'green'}  

    node.children = [];
    const child = { type : 'text',
      value : 'verde? ' + node.value as string,
    }
    node.children[0] = child;
  });
}

export const greenTextPlugin: Plugin<[], Root, Root> =

  () => (tree) => {

    greenTextTransform(tree);

  };