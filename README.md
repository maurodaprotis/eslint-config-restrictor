# Opinionated Eslint Setup

Eslint modularized config based on [Andres Troinano](https://github.com/andres-troiano-globant) rules.

Support for React, Typescript and Node projects with or without Prettier.

## What it does

- Lints JavaScript and Typescript based with our opinionated rules
- Fixes issues and formatting errors with Prettier

## Installing

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev eslint-config-restrictor
```

3. You can see in your package.json there are now a few list of devDependencies.

4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```json
{
  "extends": ["restrictor"]
}
```

Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig":`. This makes one less file in your project.

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint './**/*.{js,jsx,ts,tsx}'",
  "lint:fix": "eslint './**/*.{js,jsx,ts,tsx}' --fix"
},
```

6. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Add additional configuration

A few extra configuration files are available but they require additionals dependencies. You can combine them.

### React

For react projects you should also extend this configuration.

```
npm install -D eslint-config-react-app eslint-plugin-react eslint-plugin-flowtype eslint-plugin-import eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

And extend your `.eslintrc` file.

```json
{
  "extends": ["restrictor", "restrictor/react"]
}
```

### Typescript

For Typescript project you should also extend this configuration.

```
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

And extend your `.eslintrc` file

```json
{
  "extends": ["restrictor", "restrictor/typescript"]
}
```

### Node.js

For use in a node.js project you should also extend this configuration.

```
npm install -D eslint-plugin-import eslint-plugin-node eslint-plugin-promise
```

And extend your `.eslintrc` file.

```json
{
  "extends": ["restrictor", "restrictor/node"]
}
```

### Prettier

For use prettier in your project you should also extend this configuration.

```
npm install -D prettier eslint-plugin-prettier eslint-config-prettier
```

And extend your `.eslintrc` file.

```json
{
  "extends": ["restrictor", "restrictor/prettier"]
}
```

_Important note:_ `restrictor/prettier` should be placed last because overrides some rules from the other config files.

### All of them!

You can use them all together if the project requires.

Install all `devDependencies` together.

```
npm install -D eslint-config-react-app eslint-plugin-react eslint-plugin-flowtype eslint-plugin-import eslint-plugin-react-hooks eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-plugin-prettier eslint-config-prettier
```

And add all the config files to `.eslintrc`.

```json
{
  "extends": [
    "restrictor",
    "restrictor/react",
    "restrictor/typescript",
    "restrictor/prettier"
  ]
}
```

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [prettier options](https://prettier.io/docs/en/options.html) can be defined in a `.prettierrc` file or go under `"prettier/prettier"`. Note that prettier rules overwrite anything in my config (trailing comma, and single quote), so you'll need to include those as well.

```js
{
  "extends": [
    "restrictor"
  ],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true
      }
    ]
  }
}
```

OR in a `.prettierrc`.

```js
{
  "semi": false,
  "singleQuote": true
}
```

## With VS Code

Once you have done the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```js
// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"eslint.autoFixOnSave": true,
// turn on eslint on .js,.jsx,.ts and .tsx files
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
],
```
