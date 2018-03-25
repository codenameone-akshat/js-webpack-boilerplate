# Webpack 4 BoilerPlate for ES6 JS

## Requirements
**node.js** will be required for the following to work.
ES6 linting is included with Google Standards. If not required, it can be removed from the _webpack config_ file

## Setup
Download and copy into your working folder.
Install dependencies with:-
```
$ npm install
```
Put all the files in the **src** folder and create the hierarchy as you wish.

Reference the main file in **index.js**

## Development
Run **Development** build server by:-
```
$ npm run server:dev
```
Acess the autocompile on http://localhost:9000/

Hot-Reload functionality implemented.

To run the **distribution** server:-
```
$ npm run server:dist
```

## Deployment
Build the project in **development** configuration by:-
```
$ npm run build:dev
```

Build the project in **distribution** configuration by:-
```
$ npm run build:dist
```

All the comipled files can be found is the newly created **dist** folder.

## <a href="https://webpack.js.org">Webpack.js</a>
If you're not familiar with the webpack, please follow this link to learn more.
