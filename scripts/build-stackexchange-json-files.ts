#!/usr/bin/env -S ts-node-script -O "{\"module\": \"commonjs\"}"
import fs from 'node:fs/promises';
import path from 'node:path';

import { getAllStackoverflowData, getAllProfilesStats } from './stackexchange';

(async function main() {
    const [featuredData, profiles] = await Promise.all([
        getAllStackoverflowData(),
        getAllProfilesStats()
    ]);

    await Promise.all([
        writeJson(path.join(__dirname, '../src/assets/stackexchange.json'), featuredData),
        writeJson(path.join(__dirname, '../src/assets/stackexchange-profiles.json'), profiles)
    ]);
})();

async function writeJson(filePath: string, data: object) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), { encoding: 'utf-8' });
}