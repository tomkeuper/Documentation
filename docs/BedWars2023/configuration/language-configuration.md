---
sidebar_label: Language Config
title: Language Configuration
sidebar_position: 3.99
---
## Scoreboard Configuration
### Creating custom scoreboards
You can create custom scoreboards per [Arena Groups](../setup/arena-groups). So, let's suppose you have an arena group called `4v4v4v4`, then you can create a custom scoreboard for the arenas using this arena group. You can edit the scoreboard for each arena state (waiting, starting, playing). So let's suppose you want to have a custom playing scoreboard. Just go in the language file, under the `scoreboard` section and add your arena group name and under it, the arena status name:
```yaml
scoreboard:
  4v4v4v4:
    playing:
    - "&f&lBED WARS"
    - "&7%bw_date%"
    - ""
    - "%bw_team_1%"
    - "%bw_team_2%"
    - "%bw_team_3%"
    - "%bw_team_4%"
    - ""
    - "&6%bw_server_ip%"
```

### Scoreboard team format
You can change the team format by editing the `format-sb-team-generic` path in the language file. By default, it is set to: `%bw_team_color%%bw_team_letter%&f %bw_team_name%: %bw_team_status%`. The plugin will automatically update the placeholders for the team color, letter, name and status. 

## Tab List Configuration
### Multiple line formatting
It is possible to add multiple lines to the header and footer of the player list by adding more lines as shown below.
Make sure to add `|-` on the first row.
```yaml
format-sb-tab-header:
  lobby: |-
    just put anything.
    &bplaying on: &a{serverIp}
    it
    can
    go
    quite
    far 
    down
    And you dont need to use quotes like this: ""
```

![Multiline Scoreboard example](/uploads/scoreboard_example_multiline.png)

All placeholders that are listed under [Global Placeholders](#global-placeholders) are supported.

### Tab List animations.
Scoreboard animations use the animations feature build into the TAB plugin. You can find more information about this feature [here](https://github.com/NEZNAMY/TAB/wiki/Animations)
To add animations to your tab list you will have to add the animation to the `animations.yml` file, found in the TAB config folder. After this you can use the animation in the language file by adding the animation name to the `format-sb-tab-header` or `format-sb-tab-footer` path. You can also add multiple animations to the header or footer by adding more animations as shown below. (Make sure to add `|-` on the first row.)
```yaml
format-sb-tab-header:
  waiting: |-
    %animation:Welcome%
    %animation:TestAnimation%
    %animation:Rainbow%
    %animation:Scroll%
```
![Scoreboard Animations](/uploads/scoreboard_animated.gif)

### Scoreboard placeholders

#### Team placeholders:
Scoreboard team placeholders are automatically generated with the following format `%bw_team_{number}%` where `{number}` is the team number. More info about the format can be found in the [scoreboard configuration](#creating-custom-scoreboards) section. The following placeholders are available for each team:
- `%bw_team_letter%` - shows the team letter.
- `%bw_team_color%` - shows the team color.
- `%bw_team_name%` - shows the team name.
- `%bw_team_status%` - shows the team status. (alive, dead etc.)

#### Upgrade placeholders:
Upgrades are divided in tiers each upgrade will have a corresponding line containing the cost and currency and the tier color, this makes the tier show up as purchased or not. 
All variables mentioned below are gathered from `upgrades.yml`.
- `{tier_x_color}` - changes the color based on purchased or not.
- `{tier_x_cost}` - shows the cost of the upgrade.
- `{tier_x_currency}` - shows the currency used to buy the upgrade.

When adding a tier to `upgrades2.yml` you should add another line in each of the language files used. and replace the `x` with the corresponding tier number.

#### Global placeholders:
- `{date}` - shows the date with the player's date format taken from his language file.
- `{level}` - shows the player level. Does not auto-refresh.
- `{levelUnformatted}` - shows the plain player level without formatting. Does not auto-refresh.
- `{currentXp}` - shows the player's current xp. Does not auto-refresh.
- `{requiredXp}` - shows the required xp to rankup. Does not auto-refresh.
- `{progress}` - shows the progress bar. Does not auto-refresh.
- `{losses}` - shows the player's losses. Does not auto-refresh.
- `{kills}` - shows the player's total kills (when not used in game). Does not auto-refresh.
- `{player}` - shows the player name.
- `{deaths}` - shows the player's total deaths (when not used in game). Does not auto-refresh.
- `{money}` - shows the player's money (Vault).
- `{finalKills}` - show player's total final kills (when not used in game). Does not auto-refresh.
- `{finalDeaths}` - show player's total final deaths (when not used in game). Does not auto-refresh.
- `{bedsDestroyed}` - show total beds destroyed by player (when not used in game). Does not auto-refresh.
- `{wins}` - show the number of games won by player.
- `{on}` - show the number of players on the server (when not used in game).
- `{serverIp}` - shows the server IP taken from config.yml.
- `{server}` - shows the server ID taken from config.yml.
- `{version}` - shows the plugin version.

#### In Game placeholders:
- `{deaths}` - shows the player's deaths in current game (when used in game).
- `{kills}` - shows the player's kills in current game (when used in game).
- `{finalKills}` - show player's final kills in current game (when used in game).
- `{beds}` - show beds destroyed by player in current game (when used in game).
- `{on}` - show the number of players in current game (when used in game).
- `{map}` - shows the map name of the current arena.
- `{max}` - shows the slots of the current arena.
- `{time}` - shows the time remaining before the arena starts.
- `{nextEvent}` - shows the Next Event of the game (Generator upgrades, Beds destroy etc.).
- `{time}` - shows the time when the Next Event will happen.
- `{group}` - shows the arena group in the waiting lobby.
- `{map_name}` - the map you're playing on (for arena display name use {map}).
- `{team} and {teamColor}` - shows the player team and its corresponding colors on the teleporter.

#### Kill/Bed-Destroy Message placeholders:
- `{PlayerColor}` - shows the player's team color.
- `{PlayerName}` - shows the name of the player .
- `{PlayerNameUnformatted}` - shows the name of the player without formatting.
- `{KillerColor}` - shows the color of the killer's team.
- `{PlayerTeamName}` - shows the name of the player's team.
- `{KillerName}` - shows the name of the killer.
- `{KillerNameUnformatted}` - shows the name of the killer without formatting.
- `{KillerTeamName}` - shows the name of the killer's team.


### Animations and timers
For more configuration options check the [config.yml](main-configuration) wiki.


Custom title/ sub-title for arena countdown
---------
You can add a custom title for certain second by adding this to the language file `arena-start-countdown-title-[second]` where `[second]` can be 4 etc. For adding a custom subTitle use this path: `arena-start-countdown-subtitle-[second]`. Available placeholder: `{second}`.

Countdown titles and subtitles are shown when the current second is `currentSecond % 10 == 0 || currentSecond <= 5`.
