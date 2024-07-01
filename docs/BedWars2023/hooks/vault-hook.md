---
sidebar_label: Vault Support
title: Vault Support
sidebar_position: 3.3
---
## Chat
**BedWars2023** has been providing [Vault](https://dev.bukkit.org/projects/vault) support since the first version ever released. 

You can add rank prefixes and suffixes in chat by adding [Vault](https://dev.bukkit.org/projects/vault), your permissions plugin like [LuckPerms](https://www.spigotmc.org/resources/28140/), and any other permissions plugin based on [Vault](https://dev.bukkit.org/projects/vault).



### Placeholders
Prefix placeholder: `{vPrefix}`

Suffix placeholder: `{vSuffix}`

You can use these placeholders in the **chat** section in `messages_<country>.yml`

```yaml
chat:
  lobby: '{vPrefix}&7{player}{vSuffix}: {message}'
  waiting: '{vPrefix}&7{player}{vSuffix}: {message}'
  global: '{vPrefix}&6[SHOUT] {team} &7{player}&f{vSuffix}: {message}'
  team: '{vPrefix}&f{level}{team}&7 {player}{vSuffix} {message}'
  spectator: '{vPrefix}&7[SPECTATOR] {player}{vSuffix}: {message}'
```

## Economy
**BedWars2023** has also provided support for Vault Economy plugins since the first version ever released.

You can use all the economy plugins with [Vault](https://dev.bukkit.org/projects/vault) support, like [Coins](https://www.spigotmc.org/resources/48536/), and any other economy plugins based on [Vault](https://dev.bukkit.org/projects/vault).

### Placeholders
BedWars total money placeholder: {money}

You can also use the %vault_eco_balance% placeholder or the placeholder of your eco plugin.
