
# Minecraft Inventory Inspector

Inspect the inventories and ender chests of players on a Vanilla Minecraft server, rendering results as Markdown.


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

To contribute to this library, clone this repo locally and commit your code on a separate branch. Please write unit tests for your code, and run the linter before opening a pull-request:

```sh
make test    # run all tests
make verify  # run all linters
```


## License

Licensed under the [MIT](LICENSE) license.<br/>
Copyright &copy; 2020, Rowan Manning
