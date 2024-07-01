---
title: Getting Started
sidebar_position: 1
---

## Installation

BWProxy2023 is a plugin that can be installed on lobby/hub servers. Do not install it on arena servers.

:::info Note before we start

**BWProxy2023 only** goes on the **lobby** server(s)<br/>
**BedWars2023 only** goes on the **arena** server(s)

:::

1. Copy the BWProxy2023.jar in the plugins folder for your lobby server and restart your server.
2. Open BWProxy2023's config.yml and set your desired port that will be used to receive data from the arenas.
   * This **can not** be the same as the server's port (from server.properties)
   * Note that the port must be open, available, and accessible from your arena server(s)
3. Still in BWProxy2023's config.yml, insert your database credentials to sync bed-wars statistics from arenas.
   * If you skip this step, BWProxy2023 will still function, however any stats you get from BWProxy2023 will be incorrect.
4. Restart the lobby server
5. Go on each BedWars arena server's files and open `plugins/BedWars2023/config.yml`.
   1. Add the lobby's ip and BWProxy2023 port under `lobby-sockets`.
   2. For example, if your lobby's ip is `51.77.158.119`,
      and the BWProxy2023 port you set in step 2 is `25569`, then this would be your config:<br/>![](/img/immagine.png)
   3. Next, change `server-id` to be the name of the arena server in your BungeeCord/Velocity config.
      In the example above, the server name in the BungeeCord config is `bw1`.
      1. An easy way to double-check that you set this correctly is to do `/server <server>`,
         replacing `<server>` with what you put in `server-id`
   4. Now, set the `lobbyServer` option to the name of your lobby server
      1. This is similar to how you set `server-id`, but with your lobby server instead of the arena server.
   5. Set the `serverType` to `BUNGEE`
   6. Restart the arena server
   7. Repeat steps `i-vi` for each of your arena servers
6. Make sure you've restarted each of the servers (after configuring them), and enjoy!

## Usage
To open the arena selector, you can use `/bw gui`

BWProxy2023 does not have a built-in scoreboard, so you will need to use an external scoreboard plugin and the
[PlaceHolderAPI placeholders](features/placeholders) if you want a scoreboard.
