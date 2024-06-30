---
sidebar_label: PlaceholderAPI Support
title: PlaceholderAPI Support
sidebar_position: 3.2
---
**BedWars2023** provides support for [PlaceholderAPI](https://www.spigotmc.org/resources/6245/). Support is loaded when BedWars2023 Plugin is enabled. You do not have to download it from PAPI e-cloud.

If you want Per Arena Group Stats Placeholder, you can use I6y's [GroupStats](https://polymart.org/resource/3184/) Addon for Per Arena Group Stats Placeholders. 

If you need help with using [PlaceholderAPI](https://www.spigotmc.org/resources/6245/) join their <a href="https://discord.gg/7sndK3q"><img src="https://discordapp.com/api/guilds/164280494874165248/widget.png"/></a>

## Player Level
Get the player level. FORMATTED.

Placeholder: `%bw2023_player_level%`
## Player Level Trimmed
Get the player level. FORMATTED. Removes `[` and `]`.

Placeholder: `%bw2023_player_level_trim%`
## Player Level Stripped
Get the player level. FORMATTED. 

Placeholder: `%bw2023_player_level_strip%`
## Player Level Stripped + Trimmed
Get the player level. FORMATTED. Removes `[` and `]`.

Placeholder: `%bw2023_player_level_strip_trim%`

## Player Level Raw
Get the player level NUMBER.
Can be used for tops.

Placeholder: `%bw2023_player_level_raw%`

## Progress Bar (Level)
Get the player progress bar (formatted).

Placeholder: `%bw2023_player_progress%`

## Player Xp (Formatted)
Get the player current xp.
Large numbers are shortened: 1000 -> 1k

Placeholder: `%bw2023_player_xp_formatted%`

## Player Xp
Get the player current xp.

Placeholder: `%bw2023_player_xp%`

## Required Xp for Rankup (Formatted)
Get the player required xp for rankup.
Large numbers are shortened: 1000 -> 1k

Placeholder: `%bw2023_player_rerq_xp_formatted%`

## Required Xp for Rankup
Get the player required xp for rankup.

Placeholder: `%bw2023_player_rerq_xp%`

## First Play
Get first play date using the player's language date-format.

Placeholder: `%bw2023_stats_firstplay%`

## Last Play
Get last play date using the player's language date-format.

Placeholder: `%bw2023_stats_lastplay%`

## Regular Kills
Get a player's regular kills count.

Placeholder: `%bw2023_stats_kills%`

## Total Kills
Get a player's kills. (regular + final).

Placeholder: `%bw2023_stats_total_kills%`;

## Total Wins
Get a player's total wins count.

Placeholder: `%bw2023_stats_wins%`

## Final Kills
Get a player's total final kills count.

Placeholder: `%bw2023_stats_finalkills%`

## Total Deaths
Get a player's total deaths count.

Placeholder: `%bw2023_stats_deaths%`

## Total Losses
Get a player's total losses count.

Placeholder: `%bw2023_stats_losses%`

## Final Deaths
Get a player's total final deaths count.

Placeholder: `%bw2023_stats_finaldeaths%`

## Beds Destroyed
Get a player's total beds destroyed count.

Placeholder: `%bw2023_stats_bedsdestroyed%`

## Games Played
Get a player's total games played count.

Placeholder: `%bw2023_stats_gamesplayed%`

## Players In Game
Get current players (playing) count.

Placeholder: `%bw2023_current_playing%`

## Arenas Count
Get total arenas count.

Placeholder: `%bw2023_current_arenas%`

## Player Team
This returns the player's team if he is a player. [SPECTATOR] if he is a spectator or an empty string if he is not in an arena. [SHOUT] if is a /shout or !message.

Placeholder: `%bw2023_player_team%`

## Player Status
This return's the player's status. Meant for conditional placeholders

<details><summary>Values</summary>

`NONE` - The player is not in an arena at all<br/>
`WAITING` - The player is in a waiting lobby, waiting for the game to start<br/>
`PLAYING` - The player is playing (not spectating)<br/>
`SPECTATING` - The player is spectating

</details>

Placeholder: `%bw2023_player_status%`

## Arena Status
This returns arena display status based on the server's default language. Since BedWars2023 v0.8.5beta.
Will return "Restarting" if the arena is offline or if it does not exist.

Placeholder: `%bw2023_arena_status_[arenaName]%`

## Arena Player Count
This returns arena player count. Replace `[arenaName]` with the arena name.

**It also supports + operator:** `%bw2023_arena_count_arena1+arena2%`

Placeholder: `%bw2023_arena_count_[arenaName]%`

## Arena Group Count
Get the total players amount in a group. Replace `[groupName]` with its name.

**It also supports + operator:** `%bw2023_group_count_group1+group2%`

Placeholder: `%bw2023_group_count_[groupName]%`

## Get Current Arena Group
Get the group of the arena you're playing on.

Placeholder: `%bw2023_current_arena_group%`

## Get an Arena Group
Get the group of the given arena.

Placeholder: `%bw2023_arena_group_[arena]%`

## Elapsed Time
Get game elapsed time.

Placeholder: `%bw2023_elapsed_time%`

## Team Letter
Returns the first letter of the display name of the team the player is in.

Placeholder: `%bw2023_team_letter%`

## Team Color
Returns the color of the team the player is in.

Placeholder: `%bw2023_team_color%`

## Team Status
Returns the status (✓ or ×) of the team the player is in.

Placeholder: `%bw2023_team_status%`

## Team Players Amount
Returns the number of players in the team the player is in.

Placeholder: `%bw2023_team_players_amount%`

## Team Players
Returns the players in the team the player is in, with names separated by ", ".

Placeholder: `%bw2023_team_players%`

## Team Letter (Specified)
Returns the first letter of the display name of the specified team.

Placeholder: `%bw2023_team_letter_[teamName]%`

## Team Color (Specified)
Returns the color of the specified team.

Placeholder: `%bw2023_team_color_[teamName]%`

## Team Status (Specified)
Returns the status (✓ or ×) of the specified team.

Placeholder: `%bw2023_team_status_[teamName]%`

## Team Players Amount (Specified)
Returns the number of players in the specified team.

Placeholder: `%bw2023_team_players_amount_[teamName]%`

## Team Players (Specified)
Returns the players in the specified team, with names separated by ", ".

Placeholder: `%bw2023_team_players_[teamName]%`

## Arena Next Event Name
Returns the name of the next event in the arena the player is in.

Placeholder: `%bw2023_arena_nextevent_name%`

## Arena Next Event Time
Returns the time left until the next event in raw form as a string.

Placeholder: `%bw2023_arena_nextevent_time%`

## Arena Next Event Time Formatted
Returns the time left until the next event in formatted form as a string.

Placeholder: `%bw2023_arena_nextevent_time_formatted%`

## Arena Name
Returns the name of the arena the player is in.

Placeholder: `%bw2023_arena_name%`

## Arena Display Name
Returns the display name of the arena the player is in.

Placeholder: `%bw2023_arena_displayName%`

## Arena Group
Returns the group the arena the player is in belongs to.

Placeholder: `%bw2023_arena_group%`

## Arena World
Returns the world the arena the player is in is located in.

Placeholder: `%bw2023_arena_world%`

## Arena Status (Player Locale)
Returns the status of the arena in the player's chosen language.

Placeholder: `%bw2023_arena_status_plocale%`

## Arena Status
Returns the status of the arena in the default language.

Placeholder: `%bw2023_arena_status%`

## Player Kills
Returns the number of kills the player has in the current game.

Placeholder: `%bw2023_player_kills%`

## Player Kills (Final)
Returns the number of final kills the player has in the current game.

Placeholder: `%bw2023_player_kills_final%`

## Player Kills (Total)
Returns the total number of kills (regular + final) the player has in the current game.

Placeholder: `%bw2023_player_kills_total%`

## Player Deaths
Returns the number of times the player has died in the current game.

Placeholder: `%bw2023_player_deaths%`

## Player Deaths (Final)
Returns the number of times the player has died the final time in the current game (always <= 1).

Placeholder: `%bw2023_player_deaths_final%`

## Player Deaths (Total)
Returns the total number of deaths (regular + final) the player has in the current game.

Placeholder: `%bw2023_player_deaths_total%`

## Player Beds
Returns the number of beds the player has broken in the current game.

Placeholder: `%bw2023_player_beds%`

## Players
Returns the players in the arena the player is in, with names separated by ", ".

Placeholder: `%bw2023_players%`

## Players Amount
Returns the number of players in the arena the player is in.

Placeholder: `%bw2023_players_amount%`

## Party Has
Returns "true" if the player is in a party and "false" if the player is not.

Placeholder: `%bw2023_party_has%`

## Party Members
Returns the members of the party the player is in, with names separated by ", ".

Placeholder: `%bw2023_party_members%`

## Party Members Amount
Returns the number of members in the party the player is in.

Placeholder: `%bw2023_party_members_amount%`

## Party In Yours (Specified)
Returns "true" if the target specified is in the player's party and "false" if not.

Placeholder: `%bw2023_party_in_yours_[target]%`

## Party In His (Specified)
Returns "true" if the player is in the target's party and "false" if not.

Placeholder: `%bw2023_party_in_his_[target]%`

## Party Is Owner
Returns "true" if the player is the owner of their party and "false" if not.

Placeholder: `%bw2023_party_is_owner%`
