---
sidebar_label: Citizens Support
title: Citizens Support
sidebar_position: 3.4
---
**BedWars2023** adds [Citizens](https://spigotmc.org/resources/13811/) support by installing it on your server. After this, you will have access to the sub-command `/bw npc` to create or remove join-NPCs. Make sure you have installed the correct version of Citizens compatible with your server in order to have this command listed in `/bw`.

**Note: Citizens is a paid plugin on [SpigotMC](https://spigotmc.org/resources/13811/). But you can get the free version of it on the [Citizens Jenkins](https://ci.citizensnpcs.co/job/Citizens2/) website.**

# Video tutorial

[![Video tutorial](https://img.youtube.com/vi/6aluXVNN--Q/0.jpg)](https://youtu.be/6aluXVNN--Q "Tutorial")

# Creating an NPC
Join your server and use the following command: `/bw npc create <skinName> <groupName> <Line1>\n<Line2>`

Available placeholders: `%bw_players%` - shows the player amount on this [arena group](../setup/arena-groups).

**Example:** `/bw npc create MrCeasar Solo &9&lSolo Games\n%bw_players% playing`
![Solo join npc demo](/uploads/2018-09-02_03.07.28.png)

# Removing an NPC
In order to remove a join-NPC's, just look at it and type `/bw npc remove`. You can also remove it using the Citizens command: `/npc remove`.
