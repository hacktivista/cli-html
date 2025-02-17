import { parse } from 'parse5';

import { filterAst, indentify } from './lib/utils.js';
import { getGlobalConfig } from './lib/utils/get-clobal-config.js';
import { renderTag } from './lib/utils/render-tag.js';

const htmlToCli = (rawHTML, theme = {}) => {
  const document = parse(rawHTML);

  // console.dir(
  //   filterAst(document).childNodes[0].childNodes[1].childNodes,
  //   { depth: null },
  // );

  const clobalConfig = getGlobalConfig(document, theme);

  return `\n${indentify(' ')(
    (renderTag(document, clobalConfig) || { value: '' }).value,
  )}\n\n`;
};

export default htmlToCli;
