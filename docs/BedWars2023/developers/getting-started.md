---
sidebar_label: Getting Started
title: Getting Started
sidebar_position: 5.1
---
## First step
If you want to create an addon for BedWars2023 make sure to use the following steps.
1. Add it as softdepend in [plugin.yml](https://www.spigotmc.org/wiki/plugin-yml/): `softdepend: [BedWars2023]`
2. Check if [BedWars2023](https://github.com/tomkeuper/BedWars2023) is on the server:
    ```java
    @Override
    public void onEnable() {
        //Disable if plugin is not found
        if (Bukkit.getPluginManager().getPlugin("BedWars2023") == null) {
                getLogger().severe("BedWars2023 was not found. Disabling...");
                Bukkit.getPluginManager().disablePlugin(this);
                return;
        }
    }
    ```
3. Register your addon within BedWars2023 by extending the Addon class. (This can be done within the main class or a separate class.)
    ```java
    public class BW2023 extends Addon {
    
        @Override
        public String getAuthor() {
            //This gets the information directly from the plugin.yml file.
            return Main.getInstance().getDescription().getAuthors().get(0);
        }
    
        @Override
        public Plugin getPlugin() {
            return Main.getInstance();
        }
    
        @Override
        public String getVersion() {
            return Main.getInstance().getDescription().getVersion();
        }
    
        @Override
        public String getDescription() {
            return Main.getInstance().getDescription().getDescription();
        }
    
        @Override
        public String getName() {
            return Main.getInstance().getDescription().getName();
        }
    
        @Override
        public void load() {
            Bukkit.getPluginManager().enablePlugin(Main.getInstance());
        }
    
        @Override
        public void unload() {
            Bukkit.getPluginManager().disablePlugin(Main.getInstance());
        }
    }
    ```
4. In your main class, after getting the API Methods, you need to register your addon.
    ```java
    BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars.class).getProvider();
    bedwarsAPI.getAddonsUtil.registerAddon(this);
    ```

## Getting API Methods
Initializing the API:
```java
BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars.class).getProvider();
```

## JavaDoc
[Click here](https://javadocs.tomkeuper.com/) for JavaDocs.

## Configuration
If you want to create a config file for your add-on, you should use the build in config manager and create it in `plugins/BedWars2023/Addons/{addonName}/config.yml`.
