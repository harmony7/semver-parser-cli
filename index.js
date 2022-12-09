#!/usr/bin/env node

import commandLineArgs from 'command-line-args';
import { parseSemVer } from 'semver-parser';

const optionDefinitions = [
  { name: 'version', type: String, defaultOption: true },
  { name: 'field', type: String },
];

const options = commandLineArgs(optionDefinitions)

const { version, field } = options;

if (version == null) {
  throw new Error("version required");
}

const semVer = parseSemVer(version);

let value;
if (field != null) {
  if (field === 'preid') {
    value = semVer.pre?.[0];
  } else {
    value = semVer[field];
  }
  if(Array.isArray(value)) {
    value = value.join(',');
  }
} else {
  value = JSON.stringify(semVer);
}
console.log(value);
