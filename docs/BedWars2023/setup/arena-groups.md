---
sidebar_label: Grouping Arenas
title: How to group arenas
sidebar_position: 2.4
---
### Why use a group?
You can group arenas by type, like solo, duels, 4v4, etc. Groups can have custom [scoreboards](../configuration/scoreboard-configuration), custom [team upgrades](../configuration/upgrades-configuration), and custom [generators](../configuration/generators-configuration). Let's suppose that you've just created a new arena with `max-in-team = 1`. This means that it could be grouped as a *"Solo"* arena. Players could want to play alone in a team, and they will just search for an arena in the join gui with _"Solo"_ in its lore. Or they may click on a [join NPC](../hooks/citizens-hook) called _"Solo"_ or maybe via command ```/bw join Solo```. An arena added to the *"Solo"* group will show like this on [join GUI](../setup/how-to-join-arenas#join-gui).

![new-gui](/uploads/new-gui.png)


### How to create an arena group
Type ```/bw arenaGroup create <name>```, where *name* is the group name.

### How to add an arena to a group
Type ```/bw arenaGroup  set <arenaName> <groupName>```, where *groupName* is the group's name and *arenaName* is the arena's name.

### How to delete an arena group
Type ```/bw arenaGroup remove <groupName>```, where *groupName* is the group's name.

### Video tutorial

[![Video tutorial](https://img.youtube.com/vi/FJj1SvbIBA4/0.jpg)](https://youtu.be/FJj1SvbIBA4 "Tutorial")
