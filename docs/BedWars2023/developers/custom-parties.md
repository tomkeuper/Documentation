---
sidebar_label: Custom Parties
title: Custom Parties
sidebar_position: 5.5
---
Developers can create their own "Party Manager" by implementing the `com.tomkeuper.bedwars.api.party.Party` interface.
Those methods are used by the plugin to manage the party system.

### How to Create
```java
public class CustomPartiesManager implements Party {
    
    @Override
    public void addMember(Player owner, Player member) {
        // Add a member to owner party
    }

    @Override
    public void createParty(Player owner, Player... members) {
        // Create a party with an owner and members
    }

    @Override
    public void disband(Player owner) {
        // Disband the owner party
    }

    @Override
    public List<Player> getMembers(Player owner) {
        // Get the members list of party owner
    }

    @Override
    public Player getOwner(Player member) {
        // Get the party owner
    }

    @Override
    public boolean hasParty(Player p) {
        // Check if the player is inside a party
    }

    @Override
    public boolean isInternal() {
        // Check if the party system is internal to bedwars
        //In the case of custom party systems, return false is suggested
    }

    @Override
    public boolean isMember(Player owner, Player check) {
        // Check if the player check is a member of the owner's party
    }

    @Override
    public boolean isOwner(Player p) {
        // Check if player is a party owner
    }

    @Override
    public int partySize(Player p) {
        // Return the size of the player's party
    }

    @Override
    public void promote(@NotNull Player owner, @NotNull Player target) {
        // Promote the target player to party owner
    }

    @Override
    public void removeFromParty(Player member) {
        // Remove a member from the party
    }

    @Override
    public void removePlayer(Player owner, Player target) {
        // Remove a player from the party
    }
    
}
```

### How to Register
This will safe-disable the BedWars2023 internal levels system and register yours.
```java
BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars .class).getProvider();
bedwarsAPI.setPartyAdapter(new CustomPartiessManager());
```
