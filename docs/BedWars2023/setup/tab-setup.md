---
sidebar_label: TAB setup
title: How to group arenas
sidebar_position: 2.5
---

## Why TAB?
We chose to implement [TAB](https://github.com/NEZNAMY/TAB/) by Neznamy for scoreboard, tab, bossbar, and player name handling in our BedWars2023 plugin because it offers reliable functionality, customization options, and enhances the overall player experience. By utilizing TAB, we eliminate the need to develop and maintain our own system for these features, saving us valuable time and resources. TAB provides a robust and proven solution that mostly meets our needs and ensures a seamless and polished gameplay experience for our players.

### Limitations
Certain features have limitations. These limitations can also be found on the TAB [wiki](https://github.com/NEZNAMY/TAB/wiki/Limitations), but here is a short list of things to keep in mind.

#### Below Name Health
Below name can be used in two modes: `Native Health` and `Unlimited Nametags`.

**Native Health**: This mode uses the build-in Minecraft objective to display another line below the nametag of players. This line is only visible within 8 blocks of the target. This value is client-sided and cannot be changed. 

When enabled, the below name line automatically appears on all player entities. Therefore, it is not possible to only display it on some players or not display it on NPCs. To prevent this from happening, we set the name tags of NPC's to invisible, as this also hides the below name line.

For more info about this method, Read: [Feature Guide: Belowname](https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Belowname)

**Unlimited Nametags**: This mode uses the unlimited name tags feature of TAB to remove the built-in nametag and show invisible armor stands instead. When a player uses a modified client, there is a possibility of encountering double nametags. One is the vanilla nametag, while the other utilizes armor stands. Modified clients often disregard the visibility settings set by TAB, resulting in the nametags being visible despite attempts to make them invisible. This should be fixed by the players themselves.

Please note that there may be a delay in the movement of armor stands. This delay is influenced by ping and the absence of self-movement animations. However, this delay is not apparent when observing other players, as they animate along with the armor stands.

In spectator game mode, the client renders invisible entities as transparent armor stands above everyone. This behavior cannot be modified by the plugin. Due to this limitation, spectator mode is not used in BedWars2023 and also not when spectating an arena.

For more info about this method, Read: [Feature Guide: Unlimited Nametag Mode](https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Unlimited-nametag-mode)


### Recommended Configuration
Enough with the limitations. Let's discuss the options! To make good use of TAB, there are a couple of recommended settings to change within the TAB config.
- `scoreboard` -> `enabled: true`, enable the scoreboard; the plugin won't start without it.
- `tablist-name-formatting` -> `align-tabsuffix-on-the-right: true`, show health on the right,
  - Disable if using a yellow number.
  - This value can be anything you want. For details on how to configure: [configure tab health](../configuration/tab-configuration.md)
- `yellow-number-in-tablist` -> `enabled: false` to prevent double values. This can be set to %health%, but then make sure to remove the %health% placeholder from the BedWars lang suffix.
  - If you don't want to show health in the tab, leave it `false`.
- `unlimited-nametag-mode` -> `enabled: true`
  - When using ServerType: BUNGEE, it is recommended that people use the native health objective. But make sure you understand the limitations. The only drawback to this is that the health will also be displayed while in the waiting lobby. Read more [here](../configuration/tab-configuration.md).
