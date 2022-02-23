#!/usr/bin/env -S ts-node-script -O "{\"module\": \"commonjs\"}"
import fs from 'node:fs/promises';
import path from 'node:path';

import { getAllStackoverflowData } from './stackexchange';

(async function main() {
    const data = await getAllStackoverflowData();

    const file = path.join(__dirname, '../src/assets/stackexchange.json');

    fs.writeFile(file, JSON.stringify(data, null, 2), { encoding: 'utf-8' });
})();