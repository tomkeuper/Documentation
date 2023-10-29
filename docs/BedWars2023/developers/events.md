---
sidebar_label: Events
title: Events
sidebar_position: 5.3
---

:::info

If you are looking for an event that doesn't exist yet, make sure to create a [Feature Request](https://github.com/tomkeuper/BedWars2023/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=)

:::

BedWars2023 has a lot of different events, examples of these events are: 
- **Gameplay events**: EggBridgeBuild, GameEnd, GeneratorDrop
- **Player events**: PlayerAfk, PlayerBaseEnter, PlayerKill
- **Server events**: ArenaDisable, ArenaSpectate, SetupSessionStart
- **Shop events**: ShopBuy, ShopOpen
- **Spectator events**: SpectatorFirstPersonEnter, SpectatorTeleportToPlayer
- **Team events**: TeamEliminated
- **Upgrade events**: UpgradeBuyEvent 

:::tip

For a full list of events make sure to check the [JavaDocs](https://javadocs.tomkeuper.com/)

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
