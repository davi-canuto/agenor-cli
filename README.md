# Regina CLI

oclif example Hello World CLI

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
$ npm install -g backendcraft-cli
$ backendcraft COMMAND
running command...
$ backendcraft (--version)
backendcraft-cli/0.0.0 linux-x64 node-v16.16.0
$ backendcraft --help [COMMAND]
USAGE
  $ backendcraft COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`backendcraft help [COMMANDS]`](#backendcraft-help-commands)
- [`backendcraft init`](#backendcraft-init)
- [`backendcraft preview`](#backendcraft-preview)
- [`backendcraft push`](#backendcraft-push)

## `backendcraft help [COMMANDS]`

Display help for backendcraft.

```
USAGE
  $ backendcraft help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for backendcraft.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.19/src/commands/help.ts)_

## `backendcraft init`

Init JSON form to create your portifolio.

```
USAGE
  $ backendcraft init [--code]

FLAGS
  --code  Open YAML file with Visual Studio Code

DESCRIPTION
  Init JSON form to create your portifolio.
```

_See code: [dist/commands/init.ts](https://github.com/davi-canuto/backendcraft-cli/blob/v0.0.0/dist/commands/init.ts)_

## `backendcraft preview`

View your portfolio by current JSON.

```
USAGE
  $ backendcraft preview

DESCRIPTION
  Preview portofilio by your JSON.
```

_See code: [dist/commands/preview.ts](https://github.com/davi-canuto/backendcraft-cli/blob/v0.0.0/dist/commands/preview.ts)_

## `backendcraft push`

Push your current JSON to create portifolio.

```
USAGE
  $ backendcraft push

DESCRIPTION
  Push your current JSON to create portifolio.
```

_See code: [dist/commands/push.ts](https://github.com/davi-canuto/backendcraft-cli/blob/v0.0.0/dist/commands/push.ts)_

<!-- commandsstop -->
