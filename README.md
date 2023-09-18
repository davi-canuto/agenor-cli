# Regina CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Regina CLI](#regina-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g regina-cli
$ regina COMMAND
running command...
$ regina (--version)
regina-cli/1.0.0 linux-x64 node-v16.16.0
$ regina --help [COMMAND]
USAGE
  $ regina COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`regina init`](#regina-init)
* [`regina preview`](#regina-preview)
* [`regina push`](#regina-push)

## `regina init`

Init JSON form to create your portifolio..

```
USAGE
  $ regina init [--code]

FLAGS
  --code  Open JSON directory with Visual Studio Code

DESCRIPTION
  Init JSON form to create your portifolio..
```

_See code: [dist/commands/init.ts](https://github.com/davi-canuto/regina-cli/blob/v1.0.0/dist/commands/init.ts)_

## `regina preview`

View your portfolio by current JSON.

```
USAGE
  $ regina preview

DESCRIPTION
  View your portfolio by current JSON.
```

_See code: [dist/commands/preview.ts](https://github.com/davi-canuto/regina-cli/blob/v1.0.0/dist/commands/preview.ts)_

## `regina push`

Push your current JSON to create portifolio.

```
USAGE
  $ regina push

DESCRIPTION
  Push your current JSON to create portifolio.
```

_See code: [dist/commands/push.ts](https://github.com/davi-canuto/regina-cli/blob/v1.0.0/dist/commands/push.ts)_
<!-- commandsstop -->
