---
title: PlaceholderAPI Placeholders
sidebar_label: Placeholders
sidebar_position: 2.5
---
Placeholders that can be used on supported plugins.

| Placeholder                               | Description                                                                                                                             |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `%bw2023_group_count_<group>%`            | Show the amount of players in an arena group.                                                                                           |
| `%bw2023_stats_firstplay%`                | Show a player first play date.                                                                                                          |
| `%bw2023_stats_lastplay%`                 | Show a player last play date.                                                                                                           |
| `%bw2023_stats_kills%`                    | Show player kills.                                                                                                                      |
| `%bw2023_stats_wins%`                     | Show player wins.                                                                                                                       |
| `%bw2023_stats_finalkills%`               | Show player final kills.                                                                                                                |
| `%bw2023_stats_deaths%`                   | Show player deaths.                                                                                                                     |
| `%bw2023_stats_losses%`                   | Show player losses.                                                                                                                     |
| `%bw2023_stats_finaldeaths%`              | Show player final deaths.                                                                                                               |
| `%bw2023_stats_bedsdestroyed%`            | Show player beds destroyed.                                                                                                             |
| `%bw2023_stats_gamesplayed%`              | Show player games played.                                                                                                               |
| `%bw2023_current_online%`                 | Show amount of players in arenas.                                                                                                       |
| `%bw2023_current_arenas%`                 | Show amount of active arenas.                                                                                                           |
| `%bw2023_player_level%`                   | Show a player level number.                                                                                                             |
| `%bw2023_player_progress%`                | Show a player progress bar.                                                                                                             |
| `%bw2023_player_xp_formatted%`             | Show a player formatted xp.                                                                                                             |
| `%bw2023_player_xp%`                      | Show a player xp number.                                                                                                                |
| `%bw2023_player_req_xp_formatted%`        | Show a player required xp, formatted.                                                                                                   |
| `%bw2023_player_req_xp%`                  | Show a player required xp number.                                                                                                       |
| `%bw2023_team_letter%`                    | Returns the first letter of the display name of the team the player is in.                                                              |
| `%bw2023_team_color%`                     | Returns the colour of the team the player is in.                                                                                        |
| `%bw2023_team_status%`                    | Returns the status (✓, or ×) of the team the player is in.                                                                              |
| `%bw2023_team_players_amount%`            | Returns the number of players in the team.                                                                                              |
| `%bw2023_team_players%`                   | Returns the players in the team, which the player is in, in the form of a String with names separated by ", ".                          |
| `%bw2023_team_letter_%`                   | Returns the first letter of the display name of the teM the player specified is in.                                                     |
| `%bw2023_team_color_%`                    | Returns the colour of the team the player specified is in.                                                                              |
| `%bw2023_team_status_%`                   | Returns the status (✓, or ×) of the team the player specified is in.                                                                    |
| `%bw2023_team_players_amount_%`           | Returns the number of players in the team the player specified is in.                                                                   |
| `%bw2023_team_players_%`                  | Returns the players in the team, which the player specified is in, in the form of a String with names separated by ", ".                |
| `%bw2023_arena_nextevent_name%`           | Returns the name of the next event of the arena the player is in.                                                                       |
| `%bw2023_arena_nextevent_time%`           | Returns the time left till the next event of the arena the player is in, in raw form as String.                                         |
| `%bw2023_arena_nextevent_time_formatted%` | Returns the time left till the next event of the arena the player is in, in formatted form as String.                                   |
| `%bw2023_arena_name%`                     | Returns the name of the arena the player is in.                                                                                         |
| `%bw2023_arena_displayName%`              | Returns the display name of the arena the player is in.                                                                                 |
| `%bw2023_arena_group%`                    | Returns the group the arena, which the player is in, is in.                                                                             |
| `%bw2023_arena_world%`                    | Returns the world the arena, which the player is in, is in.                                                                             |
| `%bw2023_arena_status_plocale%`           | Returns the status of the arena in the player's chosen language.                                                                        |
| `%bw2023_arena_status%`                   | Returns the status of the arena in the default language.                                                                                |
| `%bw2023_player_kills%`                   | Returns the number of kills the player has done in that particular game.                                                                |
| `%bw2023_player_kills_final%`             | Returns the number of final kills the player has done in that particular game.                                                          |
| `%bw2023_player_kills_total%`             | Returns the total number of kills (kills + final kills) the player has done in that particular game.                                    |
| `%bw2023_player_deaths%`                  | Returns the number of times the player has died in that particular game.                                                                |
| `%bw2023_player_deaths_final%`            | Returns the number of times the player has died the final time in that particular game. (Supposed to be always less than or equal to 1) |
| `%bw2023_player_deaths_total%`            | Returns the total number of times the player has died (deaths + final deaths) in that particular game.                                  |
| `%bw2023_player_beds%`                    | Returns the number of beds the player has broken in that particular game.                                                               |
| `%bw2023_players%`                        | Returns the players in the arena, which the player is in, in the form of a String with names separated by ", ".                         |
| `%bw2023_players_amount%`                 | Returns the number of players in the arena the player is in.                                                                            |
| `%bw2023_party_has%`                      | Returns "true" if the player is in a party and "false" if the player is not.                                                            |
| `%bw2023_party_members%`                  | Returns the members of the party, which the player is in, in the form of a String with names separated by ", ".                         |
| `%bw2023_party_members_amount%`           | Returns the number of members of the party the player is in.                                                                            |
| `%bw2023_party_in_yours_%`                | Returns "true" if the target specified is in the player's party and "false" if not.                                                     |
| `%bw2023_party_in_his_%`                  | Returns "true" if the player is in the target's party and "false" if not.                                                               |
| `%bw2023_party_is_owner%`                 | Returns "true" if the player is the owner of his party and "false" if not.                                                              |
