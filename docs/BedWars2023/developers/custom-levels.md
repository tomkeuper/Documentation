---
sidebar_label: Custom Levels
title: Custom Levels
sidebar_position: 5.5
---
Developers can create their own "Player Level Manager" by implementing the `com.tomkeuper.bedwars.api.levels.Level` interface.
Those methods are used by the plugin to display the player level on the scoreboard, etc.

### How to Create
```java
public class CustomLevelsManager implements Level {
    
    @Override
    public String getLevel(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getLevelName();
    }

    @Override
    public int getPlayerLevel(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getPlayerLevel();
    }

    @Override
    public String getRequiredXpFormatted(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getFormattedRequiredXp();
    }

    @Override
    public String getProgressBar(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getProgress();
    }

    @Override
    public int getCurrentXp(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getCurrentXp();
    }

    @Override
    public String getCurrentXpFormatted(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getFormattedCurrentXp();
    }

    @Override
    public int getRequiredXp(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getNextLevelCost();
    }
    
}
```

### How to Register
This will disable the BedWars2023 internal levels system and register yours.
```java
BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars .class).getProvider();
bedwarsAPI.setLevelAdapter(new CustomLevelsManager());
```
