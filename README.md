# 🕶 from-env 🕶

from-env is helper script that makes environment variables from a local ``.env``-file inside command line statements available.

## installation

```bash
npm install from-env
```

## usage

```.env``
```.env
ENV1=foo
ENV2=bar
ENV3=baz
ENV4=quux
ENV5=gorge
```

```package.json``` (before)
```json
{
    "scripts": {
        "yo": "your-command --that %VARIABLE1 --needs %VARIABLE2 --some %VARIABLE3 --variables %VARIABLE1"
    }
}
```

```package.json``` (after)
```json
{
    "scripts": {
        "yo": "from-env your-command --that %VARIABLE1 --needs %VARIABLE2 --some %VARIABLE3 --variables %VARIABLE1"
    }
}
```