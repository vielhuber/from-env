#! /usr/bin/env node
let env_file = '.env';
if (process.env.FROM_ENV) {
    env_file = process.env.FROM_ENV;
}
const spawn = require('cross-spawn'),
    exit = require('exit');

require('dotenv').config({ path: require('find-config')(env_file) });
let values = Object.assign({}, process.env);

// Pattern for matching embedded variables (variables that do not stand alone)
// Example:
//   Before: --parameter-overrides BucketName=%BucketName
//   After:  --parameter-overrides BucketName=my-bucket-00000
let var_pattern = /(?:.+)?%(?<var>[A-Z]+(?:_[A-Z]+)*)/;
let embedded_vars = false;

const args = process.argv.slice(2);

if (args[0] === '--embedded-vars') {
    embedded_vars = true;
    args.shift();
}

args.forEach((args__value, args__key) => {
    let res = var_pattern.exec(args__value);
    if (res && res.groups?.var in values) {
        if (res[0][0] === '%') {
            args[args__key] = values[args__value.substring(1)];
        }
        else if (embedded_vars || values['FROM_ENV_EMBEDDED'] === 'true') {
            args[args__key] = args[args__key].replace('%'+res.groups?.var, values[res.groups?.var]);
        }
    }
});

const command = args.shift(),
    proc = spawn.sync(command, args, { stdio: 'inherit' });
exit(proc.status);
