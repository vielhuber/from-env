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
VARIABLE2=have
VARIABLE3=variables
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

## alternative

this also works without any package (also on windows with wsl):

```package.json```
```json
{
    "scripts": {
        "yo": "from-env your-command --that $(grep VARIABLE1 .env | cut -d '=' -f2) --to $(grep VARIABLE2 .env | cut -d '=' -f2) --some $(grep VARIABLE3 .env | cut -d '=' -f2)"
    }
}
```
