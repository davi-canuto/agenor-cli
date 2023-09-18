oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
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
* [`backendcraft help [COMMANDS]`](#backendcraft-help-commands)
* [`backendcraft init`](#backendcraft-init)
* [`backendcraft plugins`](#backendcraft-plugins)
* [`backendcraft plugins:install PLUGIN...`](#backendcraft-pluginsinstall-plugin)
* [`backendcraft plugins:inspect PLUGIN...`](#backendcraft-pluginsinspect-plugin)
* [`backendcraft plugins:install PLUGIN...`](#backendcraft-pluginsinstall-plugin-1)
* [`backendcraft plugins:link PLUGIN`](#backendcraft-pluginslink-plugin)
* [`backendcraft plugins:uninstall PLUGIN...`](#backendcraft-pluginsuninstall-plugin)
* [`backendcraft plugins:uninstall PLUGIN...`](#backendcraft-pluginsuninstall-plugin-1)
* [`backendcraft plugins:uninstall PLUGIN...`](#backendcraft-pluginsuninstall-plugin-2)
* [`backendcraft plugins update`](#backendcraft-plugins-update)
* [`backendcraft preview`](#backendcraft-preview)
* [`backendcraft push`](#backendcraft-push)

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

Init YML form to create portifolio.

```
USAGE
  $ backendcraft init [--code]

FLAGS
  --code  Open YAML file with Visual Studio Code

DESCRIPTION
  Init YML form to create portifolio.
```

_See code: [dist/commands/init.ts](https://github.com/davi-canuto/backendcraft-cli/blob/v0.0.0/dist/commands/init.ts)_

## `backendcraft plugins`

List installed plugins.

```
USAGE
  $ backendcraft plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ backendcraft plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/index.ts)_

## `backendcraft plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ backendcraft plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ backendcraft plugins add

EXAMPLES
  $ backendcraft plugins:install myplugin 

  $ backendcraft plugins:install https://github.com/someuser/someplugin

  $ backendcraft plugins:install someuser/someplugin
```

## `backendcraft plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ backendcraft plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ backendcraft plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/inspect.ts)_

## `backendcraft plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ backendcraft plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ backendcraft plugins add

EXAMPLES
  $ backendcraft plugins:install myplugin 

  $ backendcraft plugins:install https://github.com/someuser/someplugin

  $ backendcraft plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/install.ts)_

## `backendcraft plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ backendcraft plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ backendcraft plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/link.ts)_

## `backendcraft plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ backendcraft plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ backendcraft plugins unlink
  $ backendcraft plugins remove
```

## `backendcraft plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ backendcraft plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ backendcraft plugins unlink
  $ backendcraft plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/uninstall.ts)_

## `backendcraft plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ backendcraft plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ backendcraft plugins unlink
  $ backendcraft plugins remove
```

## `backendcraft plugins update`

Update installed plugins.

```
USAGE
  $ backendcraft plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/update.ts)_

## `backendcraft preview`

Preview portofilio by your JSON.

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
