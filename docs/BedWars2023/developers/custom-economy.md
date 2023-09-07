---
sidebar_label: Custom Economy
title: Custom Economy
sidebar_position: 5.5
---
Developers can create their own "Player Economy Manager" by implementing the `com.tomkeuper.bedwars.api.economy.IEconomy` interface.
Those methods are used by the plugin to display the player money in the scoreboard etc.

### How to create
```java
public class CustomEconomyManager implements IEconomy {

    @Override
    public boolean isEconomy() {
        // Check if economy is enabled
    }

    @Override
    public double getMoney(Player p) {
        // Return the player balance
    }

    @Override
    public void giveMoney(Player p, double money) {
        // Give the money amount to the player
        // When using this method within your own addon, it is suggested that you call
        // the PlayerMoneyGainEvent event immediately after using this method.
    }

    @Override
    public void buyAction(Player p, double cost) {
        // Get player money from balance to buy an item shop
    }
    
}
```

### How to register
This will safe-disable the BedWars2023 internal Levels System and will register yours.
```java
BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars .class).getProvider();
bedwarsAPI.setEconomyAdapter(new CustomEconomyManager());
```
