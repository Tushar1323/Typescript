Steps -

1-  tsc --init  ( Typescript Compiler)
2-  npm init -y
3-  make index.html 
4-  mkdir src ( create index.ts )
5-  mkdir dist
6-  change tsconfig.json ->   "outDir": "./dist", ( un-comment it )
7-  tsc ./src/index.ts will not work so use tsc -w ( watch )
8-  Now you have two option to run thml . 1 ) simple open live server in index.html 
    2 ) npm i lite-server ( inside 03_setup)
        change package.json ->   
        "scripts": {
        "start": "lite-server"
        },
        run -> npm start
9-  