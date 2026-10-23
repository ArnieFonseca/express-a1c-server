# Typescript with ExpressJS framework setup 

## Initialize project node  
> npm init -y

### Change the *type* in **package.json**  from commonJs to module
> "type": "module",

## Install Express Framework
> npm install express

## Add **typescript** and **tsx** for run typescript on the NodeJS
> npm i typescript tsx --save-dev

## Add type declaration to help TS with Node and Express Framework
> npm i @types/node @types/express

## Initialize TS
> npx tsc --init

### Add to the TS Config
>     "moduleResolution":"bundler",
>     "esModuleInterop": true,

### Change the TS Config
>     "module": "es2022",

### Modify *TS Config* **verbatimModuleSyntax** to **false**
>     "verbatimModuleSyntax": false,

### Add to the *Scripts Section*
>     "dev": "tsx watch src/index.ts",
>     "build": "tsc",
>     "start": "node dist/index.js",

### Add Include tp the *TS Config* at the end
>     "include": ["src/**/*"],
>     "exclude": ["node_modules", "dist"]