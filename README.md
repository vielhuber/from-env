# 🕶 envhelper 🕶
envhelper is helper script that reads environment variables into command line statements.

## installation

```bash
npm install envhelper
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
        "yo": "envhelper your-command --that %VARIABLE1 --needs %VARIABLE2 --some %VARIABLE3 --variables %VARIABLE1"
    }
}
```

```package.json``` (after)
```json
{
    "scripts": {
        "yo": "envhelper your-command --that %VARIABLE1 --needs %VARIABLE2 --some %VARIABLE3 --variables %VARIABLE1"
    }
}
```