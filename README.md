# `zlinter`

Nueva configuración de linter para proyectos zenon, con soporte Typescript y prettier integrado...

> TODO: Convertir esto en algo que se instale en segundos en un proyecto...

## Cómo he activado prettier en este repositorio

```bash
npm i --save-dev prettier
```

```json
# .prettierrc
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "bracketSpacing": true,
  "arrowParens": "always",
  "printWidth": 150,
  "semi": true,
  "trailingComma": "none"
}
```

```json
# .vscode/settings.json
{
  "editor.formatOnSave": true,
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Cómo se inicializó este repositorio para eslint

https://eslint.org/docs/latest/use/getting-started

### Inicializamos `package.json`

```txt
> npm init
package name: (zlinter)
version: (1.0.0)
description: zlinter (with ts support)
entry point: (index.js) index.mts
test command:
git repository:
keywords:
author:
license: (ISC) MIT
type: (commonjs) module
About to write to C:\Users\antonio\source\zlinter\package.json:

{
  "name": "zlinter",
  "version": "1.0.0",
  "description": "zlinter (with ts support)",
  "main": "index.mts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "type": "module"
}
```

### Creamos `eslint.config.ts`

```bash
> npm init @eslint/config@latest

zlinter@1.0.0 npx
create-config
@eslint/create-config: v1.11.0

√ What do you want to lint? · javascript
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ Which language do you want your configuration file be written in? · ts
i Jiti is required for Node.js <24.3.0 to read TypeScript configuration files.
√ Would you like to add Jiti as a devDependency? · No / Yes
i The config that you've selected requires the following dependencies:

eslint, @eslint/js, globals, typescript-eslint, jiti
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
☕️Installing...

added 89 packages, and audited 90 packages in 3s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
√ Successfully created C:\Users\antonio\source\zlinter\eslint.config.ts file.
```

### El eslint.config.ts generado es el siguiente:

```ts
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  tseslint.configs.recommended
]);
```

### Probamos que se ejecuta

```bash
npx eslint *
```
