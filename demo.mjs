import {readFile} from 'node:fs/promises';console.log(await readFile(new URL('scenarios.json',import.meta.url),'utf8'));
