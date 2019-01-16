# 🕶 from-env 🕶

from-env is helper script that makes environment variables from a local ``.env``-file inside command line statements available.

## installation

```bash
npm install --save-dev from-env
```

## usage

``.env``
```.env
VARIABLE1=needs
VARIABLE1=have
VARIABLE1=variables
```

```package.json``` (before)
```json
{
    "scripts": {
        "yo": "your-command --that needs --to have --some variables"
    }
}
```

```package.json``` (after)
```json
{
    "scripts": {
        "yo": "from-env your-command --that %VARIABLE1 --to %VARIABLE2 --some %VARIABLE3"
    }
}
```