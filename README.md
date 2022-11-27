<p align="center">
<a href="https://aoi.js.org">
    <img width="300" src="https://cdn.discordapp.com/attachments/804813961190572093/1013150967379808296/aoijs-v6.png" alt="aoijs">
  </a>
</p>

<h1 align="center">aoi.js</h1>

<div align="center">

**The most powerful string package to create a simple and fast Discord Bot.**

[![NPM version][npm-image]][npm-url]
[![AoiJS Server][aoijs-server]][aoijs-server-url]
[![NPM downloads][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/aoi.js.svg?style=flat-square
[npm-url]: http://npmjs.org/package/aoi.js
[download-image]: https://img.shields.io/npm/dt/aoi.js.svg?style=flat-square
[download-url]: https://npmjs.org/package/aoi.js
[aoijs-server]: https://img.shields.io/discord/773352845738115102?color=5865F2&logo=discord&logoColor=white
[aoijs-server-url]: https://aoi.js.org/invite

[Preview](https://aoi.js.org/docs/guides/setup)

</div>

## Features

- Built-in support of [database](https://www.npmjs.com/package/dbdjs.db) by default and ready for multipurpose.
- Built-in 600+ functions, simple and easy to learn.
- Simple to learn, all in string-based and compact.
- Support of extensions available to be used by the community.

## Installation

**node.js 16.9.0 or newer is required.**

```shell
npm install aoi.js
```

```shell
yarn add aoi.js
```

## Setup

```javascript
// Importing AoiClient
import { AoiClient } from 'aoi.js';

// Creating Our Bot
const bot = new AoiClient({
  token: 'DISCORD_BOT_TOKEN', // process.env.TOKEN || config.token
  prefix: 'DISCORD_BOT_PREFIX',
  intents: ['MessageContent', 'Guilds', 'GuildsMessages'],
});

// Adding Events
bot.addEvent(['onMessage', 'onInteractionCreate']);

// Creating Slash Commands on Ready Event
bot.addEvent('onReady', {
  channel: '',
  code: `
  $log[Created "Ping" Slash Command.]
  $createApplicationCommand[$guildID;ping;Pong!;true;slash]
  `
});

// Ping Slash Command
bot.commands.add('interaction', {
  name: 'ping',
  prototype: 'slash',
  code: `$interactionReply[Pong! $ping ms!]`
});

// And Lastly Starting Our Bot
bot.start();
```

### Optional Packages

- [@akarui/aoi.music](https://www.npmjs.com/package/@akarui/aoi.music) to enable Music Functions compatibility. (`npm install @akarui/aoi.music`)

>  Use this on your precaution, we do not endorse anything or affiliated with, we only add support towards it.
>
> Do you want to make your Discord Bot different from others, possibly with the ability to play/stream music, it's simple and easy to use!

```php
$playTrack[type;name] // to play a track from the available third parties supported. 
```

> More information in our [documentation](https://aoi.js.org/docs/advanced-guides/aoimusic/)

### Function usage Example

```php
$authorID // return the author ID/the userID who executed the function
```

## Disclaimer
    
aoi.js is not affiliated or associated with Discord or any other services.
    
## Links
- [Website](https://aoi.js.org)
- [NPM](https://www.npmjs.com/package/aoi.js)
- [Github](https://github.com/AkaruiDevelopment/aoi.js)
- [Discord Support Server](https://discord.gg/HMUfMXDQsV)
- [Documentation](https://aoi.js.org/docs/)
