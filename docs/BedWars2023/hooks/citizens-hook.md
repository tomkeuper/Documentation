---
sidebar_label: Citizens Support
title: Citizens Support
sidebar_position: 3.4
---
**BedWars2023** is adds [Citizens](https://www.spigotmc.org/resources/citizens.13811/) support by installing it on your server, after this you will have access to the sub-command `/bw npc` to create or remove join-NPCs. Make sure you have installed the correct version of Citizens compatible with your server in order to have this command listed in `/bw`.

# Video tutorial

[![Video tutorial](https://img.youtube.com/vi/6aluXVNN--Q/0.jpg)](https://www.youtube.com/watch?v=6aluXVNN--Q "Tutorial")

# Creating a NPC
Join your server and use the following command `/bw npc create <skinName> <groupName> <Line1>\n<Line2>`

Available placeholders: `%bw_players%` - shows the players amount on this [Arena Group](../setup/arena-groups).

**Example:** `/bw npc create MrCeasar Solo &9&lSolo Games\n%bw_players% playing`
![Solo join npc demo](/uploads/2018-09-02_03.07.28.png)

# Removing a NPC
In order to remove a join-NPCs, just look at it and type `/bw npc remove`. You can also remove it using the Citizens command: `/npc remove`.
