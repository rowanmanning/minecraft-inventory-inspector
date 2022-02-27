
# Minecraft Inventory Inspector

Inspect the inventories and ender chests of players on a Vanilla Minecraft server, rendering results as Markdown.

Caveats:

1. I probably don't maintain this any more, I needed it once and don't care about it a lot
2. I tested this with Minecraft 1.15, 1.16, 1.17, and 1.18. It may break in future
3. This only works for servers, it will ignore the player data for single player worlds and probably output nothing


## Table of Contents

  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)


## Requirements

This library requires the following to run:

  * [Node.js](https://nodejs.org/) 12+


## Usage

Install globally with [npm](https://www.npmjs.com/):

```sh
npm install -g @rowanmanning/minecraft-inventory-inspector
```

Then run:

```sh
mii /path/to/minecraft/world/save
```

Alternatively use `npx`:

```sh
npx @rowanmanning/minecraft-inventory-inspector /path/to/minecraft/world/save
```

These commands will output Markdown which represents the player inventories. To view this nicely rendered, you'll need to process it yourself or paste it in a [Gist](https://gist.github.com/) or something.


## Contributing

[The contributing guide is available here](docs/contributing.md). All contributors must follow [this library's code of conduct](docs/code_of_conduct.md).


## License

Licensed under the [MIT](LICENSE) license.<br/>
Copyright &copy; 2020, Rowan Manning