#! /usr/bin/env node

let env_file = '.env'
if (process.env.FROM_ENV) {
    env_file = process.env.FROM_ENV
}
const spawn = require('cross-spawn'),
    exit = require('exit');

// determine diff
const oldEnv = Object.assign({}, process.env);
require('dotenv').config({ path: require('find-config')(env_file) });
const newEnv = Object.assign({}, process.env);

let values = {};
Object.entries(newEnv).forEach(([newEnv__key, newEnv__value]) => {
    if (!(newEnv__key in oldEnv)) {
        values[newEnv__key] = newEnv__value;
    }
});

const args = process.argv.slice(2);
args.forEach((args__value, args__key) => {
    if (args__value[0] === '%' && args__value.substring(1) in values) {
        args[args__key] = values[args__value.substring(1)];
    }
});

const command = args.shift(),
    proc = spawn.sync(command, args, { stdio: 'inherit' });
exit(proc.status);
