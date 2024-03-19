#!/usr/bin/node
const fs = require('fs');

const [, , fileA, fileB, fileC] = process.argv;

const dataA = fs.readFileSync(fileA, 'utf8');
const dataB = fs.readFileSync(fileB, 'utf8');
const concatenatedData = `${dataA}${dataB}`;

fs.writeFileSync(fileC, concatenatedData);

