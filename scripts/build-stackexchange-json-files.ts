#!/usr/bin/env -S ts-node-script -O "{\"module\": \"commonjs\"}"
import fs from 'node:fs/promises';
import path from 'node:path';

import { getAllStackoverflowData } from './stackexchange';

(async function main() {
    const data = await getAllStackoverflowData();

    // console.log(data)

    // data['es.stackoverflow'].questions.forEach(({ title }: StackOverflowQuestion) => console.log(title))

    const file = path.join(__dirname, '../src/assets/stackexchange.json');

    fs.writeFile(file, JSON.stringify(data, null, 2), { encoding: 'utf-8' });
})();