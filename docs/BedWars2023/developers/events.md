---
sidebar_label: Events
title: Events
sidebar_position: 5.3
---

:::info

If you are looking for an event that doesn't exist yet, make sure to create a [feature request](https://github.com/tomkeuper/BedWars2023/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=).

:::

BedWars2023 has a lot of different events. Examples of these events are: 
- **Gameplay Events**: EggBridgeBuild, GameEnd, GeneratorDrop
- **Player Events**: PlayerAfk, PlayerBaseEnter, PlayerKill
- **Server Events**: ArenaDisable, ArenaSpectate, SetupSessionStart
- **Shop Events**: ShopBuy, ShopOpen
- **Spectator Events**: SpectatorFirstPersonEnter, SpectatorTeleportToPlayer
- **Team Events**: TeamEliminated
- **Upgrade Events**: UpgradeBuyEvent 

:::tip

For a full list of events, make sure to check the [JavaDocs](https://javadocs.tomkeuper.com/).

:::

### Examples
```java
@EventHandler
public void onEnemyEnter(PlayerBaseEnterEvent e) {
  //stuff
}

@EventHandler
public void onTeamAssign(TeamAssignEvent e) {
  //stuff
}

@EventHandler
public void onArenaJoin(PlayerJoinArenaEvent e) {
  //stuff
}
