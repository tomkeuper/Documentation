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

When adding a tier to `upgrades.yml` you should add another line in each of the language files used. and replace the `x` with the corresponding tier number.

#### Global placeholders:
- `%bw_date%` - shows the date with the player's date format taken from his language file.
- `%bw_level%` - shows the player level. Does not auto-refresh.
- `%bw_level_unformatted%` - shows the plain player level without formatting. Does not auto-refresh.
- `%bw_current_xp%` - shows the player's current xp. Does not auto-refresh.
- `%bw_required_xp%` - shows the required xp to rankup. Does not auto-refresh.
- `%bw_progress%` - shows the progress bar. Does not auto-refresh.
- `%bw_losses%` - shows the player's losses. Does not auto-refresh.
- `%bw_kills%` - shows the player's total kills (when not used in game). Does not auto-refresh.
- `%bw_player%` - shows the player name.
- `%bw_deaths%` - shows the player's total deaths (when not used in game). Does not auto-refresh.
- `%bw_money%` - shows the player's money (Vault).
- `%bw_final_kills%` - show player's total final kills (when not used in game). Does not auto-refresh.
- `%bw_final_deaths%` - show player's total final deaths (when not used in game). Does not auto-refresh.
- `%bw_beds%` - show total beds destroyed by player (when not used in game). Does not auto-refresh.
- `%bw_wins%` - show the number of games won by player.
- `%bw_on%` - show the number of players on the server (when not used in game).
- `%bw_server_ip%` - shows the server IP taken from config.yml.
- `%bw_server_id%` - shows the server ID taken from config.yml.
- `%bw_version%` - shows the plugin version.

#### In Game placeholders:
- `%bw_deaths%` - shows the player's deaths in current game (when used in game).
- `%bw_kills%` - shows the player's kills in current game (when used in game).
- `%bw_final_kills%` - show player's final kills in current game (when used in game).
- `%bw_beds%` - show beds destroyed by player in current game (when used in game).
- `%bw_on%` - show the number of players in current game (when used in game).
- `%bw_map%` - shows the map name of the current arena.
- `%bw_max%` - shows the slots of the current arena.
- `%bw_time%` - shows the time remaining before the arena starts.
- `%bw_next_event%` - shows the Next Event of the game (Generator upgrades, Beds destroy etc.).
- `%bw_time%` - shows the time when the Next Event will happen.
- `%bw_group%` - shows the arena group in the waiting lobby.
- `%bw_map_name%` - the map you're playing on (for arena display name use {map%).
- `%bw_team% and %bw_team_color%` - shows the player team and its corresponding colors on the teleporter.

#### Kill/Bed-Destroy Message placeholders:
- `%bw_player_color%` - shows the player's team color.
- `%bw_player%` - shows the name of the player .
- `%bw_playername%` - shows the name of the player without formatting.
- `%bw_killer_color%` - shows the color of the killer's team.
- `%bw_killer_name%` - shows the name of the killer.
- `%bw_Killer_playername%` - shows the name of the killer without formatting.
- `%bw_killer_team_name%` - shows the name of the killer's team.


### Animations and timers
For more configuration options check the [config.yml](main-configuration) wiki.


Custom title/ sub-title for arena countdown
---------
You can add a custom title for certain second by adding this to the language file `arena-start-countdown-title-[second]` where `[second]` can be 4 etc. For adding a custom subTitle use this path: `arena-start-countdown-subtitle-[second]`. Available placeholder: `%bw_seconds%`.

Countdown titles and subtitles are shown when the current second is `currentSecond % 10 == 0 || currentSecond <= 5`.
