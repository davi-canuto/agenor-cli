# Agenor

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g agenor-cli
$ agenor COMMAND
running command...
$ agenor (--version)
agenor-cli/1.2.1 linux-x64 node-v16.16.0
$ agenor --help [COMMAND]
USAGE
  $ agenor COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`agenor init`](#agenor-init)
- [`agenor preview`](#agenor-preview)
- [`agenor push`](#agenor-push)

## `agenor init`

Init JSON form to create your portifolio..

```
USAGE
  $ agenor init [--code]

FLAGS
  --code  Open JSON directory with Visual Studio Code

DESCRIPTION
  Init JSON form to create your portifolio..
```

_See code: [dist/commands/init.ts](https://github.com/davi-canuto/agenor-cli/blob/v1.2.1/dist/commands/init.ts)_

## `agenor preview`

View your portfolio by current JSON.

```
USAGE
  $ agenor preview

DESCRIPTION
  View your portfolio by current JSON.
```

_See code: [dist/commands/preview.ts](https://github.com/davi-canuto/agenor-cli/blob/v1.2.1/dist/commands/preview.ts)_

## `agenor push`

Push your current JSON to create portifolio.

```
USAGE
  $ agenor push

DESCRIPTION
  Push your current JSON to create portifolio.
```

_See code: [dist/commands/push.ts](https://github.com/davi-canuto/agenor-cli/blob/v1.2.1/dist/commands/push.ts)_

<!-- commandsstop -->
