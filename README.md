# node-typescript-tutorial

## Setup

### ▼ First of all

```bash
$ git clone https://github.com/keisuke071411/node-typescript-tutorial.git
$ npm install
```

## Commands

```bash:package.json
"test": "echo \"Error: no test specified\" && exit 1",
"dev": "ts-node src/index.ts",
"dev:watch": "ts-node-dev --respawn src/index.ts",
"build": "npm-run-all clean tsc",
"start": "node ."
```
