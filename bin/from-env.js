#! /usr/bin/env node
let env_file = '.env';
if (process.env.FROM_ENV) {
    env_file = process.env.FROM_ENV;
}
const spawn = require('cross-spawn'),
    exit = require('exit');

require('dotenv').config({ path: require('find-config')(env_file) });
let values = Object.assign({}, process.env);

let var_pattern = /(?:.+)?%(?<var>[A-Z]+(?:_[A-Z]+)*)/;

const args = process.argv.slice(2);
args.forEach((args__value, args__key) => {
    let res = var_pattern.exec(args__value);
    if (res && res.groups?.var in values) {
        if (res[0][0] === '%') {
            args[args__key] = values[args__value.substring(1)];
        }
        else {
            args[args__key] = args[args__key].replace('%'+res.groups?.var, values[res.groups?.var]);
        }
    }
});

const command = args.shift(),
    proc = spawn.sync(command, args, { stdio: 'inherit' });
exit(proc.status);
