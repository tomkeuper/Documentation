---
sidebar_label: Custom Database
title: Custom Database
sidebar_position: 5.5
---
Developers can create their own "Database Manager" by implementing the `com.tomkeuper.bedwars.api.levels.IDatabase` interface.
Those methods are used by the plugin to save or get stats/levels etc.

### How to create
```java
public class CustomDatabaseManager implements IDatabase {
    
    @Override
    public IPlayerStats fetchStats(UUID uuid) {
        // Get the player stats from the given UUID
    }

    @Override
    public int getColumn(UUID player, String column) {
        // Get the value of a statistics column for the given player
    }

    @Override
    public Object getCustomStat(String columnName, UUID player) {
        // Get a custom player stat from the given column name and UUID
    }

    @Override
    public String getLanguage(UUID player) {
        // Get the player language
    }

    @Override
    public Object[] getLevelData(UUID player) {
        // Get the player level and experience
    }

    @Override
    public String getQuickBuySlots(UUID p, int slot {
        // Get the value of the quick buy slot for a player
    }
    
    @Override
    public HashMap<Integer, String> getQuickBuySlots(UUID uuid, int[] slot) {
        // Get the values of multiple quick buy slots for a player.
    }

    @Override
    public boolean hasQuickBuy(UUID uuid) {
        // Check if a player has any quick buy slots
    }

    @Override
    public boolean hasStats(UUID uuid) {
        // Check if a player has remote statistics
    }

    @Override
    public void init() {
        // Initialize and create the database
    }

    @Override
    public void pushQuickBuyChanges(HashMap<Integer, String> updateSlots, UUID uuid, List<IQuickBuyElement> elements) {
        // Push the changes to the quick buy slots for a player
    }

    @Override
    public void saveCustomStat(String columnName, UUID player, Object value, String dataType) {
        // Save a custom player stat inside the remote database
    }

    @Override
    public void saveStats(IPlayerStats stats) {
        // Create or replace player stats
    }

    @Override
    public void setLanguage(UUID player, String iso) {
        // Set the language for a player
    }

    @Override
    public void setLevelData(UUID player, int level, int xp, String displayName, int nextCost) {
        // Set the level data for a player
    }
    
}
```

### How to register
This will safe-disable the BedWars2023 internal Levels System and will register yours.
```java
BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars .class).getProvider();
bedwarsAPI.setRemoteDatabase(new CustomDatabaseManager());
```