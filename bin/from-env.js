#! /usr/bin/env node
let env_file = '.env';
if (process.env.FROM_ENV) {
    env_file = process.env.FROM_ENV;
}
const spawn = require('cross-spawn'),
    exit = require('exit');

require('dotenv').config({ path: require('find-config')(env_file) });
let values = Object.assign({}, process.env);

const args = process.argv.slice(2);
args.forEach((args__value, args__key) => {
    if (args__value[0] === '%' && args__value.substring(1) in values) {
        args[args__key] = values[args__value.substring(1)];
    }
});

const command = args.shift(),
    proc = spawn.sync(command, args, { stdio: 'inherit' });
exit(proc.status);
