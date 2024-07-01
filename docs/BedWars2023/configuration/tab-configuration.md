---
sidebar_label: Tab Config
title: Tab List Configuration
sidebar_position: 3.65
---

Since we decided to use [TAB](https://github.com/NEZNAMY/TAB) plugin by Neznamy, we support almost all the features they have to offer. Below, you can find some commonly used features.

### Tab Sorting
It is possible to sort the tab list by any registered placeholder. If you want to sort the tab list by teams, you will have to change the TAB config.
Go to: TAB -> `config.yml` -> `scoreboard-teams` and set or add `PLACEHOLDER_A_TO_Z:%bw_team%` to `sorting-types` to sort the tab list by teams.

#### Example Config
```yaml
scoreboard-teams:
  enabled: true
  enable-collision: true
  invisible-nametags: false
  anti-override: true
  sorting-types:
  - PLACEHOLDER_A_TO_Z:%bw_team%
```

### Health Behind Player
There are two methods to accomplish this. The first one would be to use the `yellow-number-in-tablist` feature of TAB; the second option would be to align the player suffix to the right. Both methods have their own advantages and disadvantages.

### Yellow Number in Tablist
This feature supports two display types (`yellow numbers` and `hearts`). To enable this feature, go to: TAB -> `config.yml` -> `yellow-number-in-tablist`, and set `enabled` to `true`. After this, you will have to use the correct placeholder to show the player's health.
By using `%health%` it will show the player's health as a health bar. When only the number is required, set the placeholder to `0%health%` (note the `0` in front of the placeholder).

### Player Suffix
To use this feature, you will have to change the suffix of players to anything you want (this is not limited to only a health placeholder). After this, you have to change the `align-tabsuffix-on-the-right` setting in the TAB config. This setting can be found in: TAB -> `config.yml` -> `tablist-name-formatting`. Then set `align-tabsuffix-on-the-right` to `true`. Make sure to double-check if the `tablist-name-formatting` feature is enabled.

### Multiple-line formatting
It is possible to add multiple lines to the header and footer of the player list by adding more lines, as shown below.
Make sure to add `|-` on the first row.
#### Example config
```yaml
format-sb-tab-header:
  lobby: |-
    just put anything.
    &bplaying on: &a%bw_server_ip%
    it
    can
    go
    quite
    far 
    down
    And you dont need to use quotes like this: ""
```

![Multiline Scoreboard example](/uploads/scoreboard_example_multiline.png)

:::tip

All placeholders that are listed under [Global Placeholders](#global-placeholders) are supported.

:::

### Tab List Animations
Scoreboard animations use the animations feature built into the TAB plugin. You can find more information about this feature [here](https://github.com/NEZNAMY/TAB/wiki/Animations).
To add animations to your tab list, you will have to add the animation to the `animations.yml` file, found in the TAB config folder. After this, you can use the animation in the language file by adding the animation name to the `format-sb-tab-header` or `format-sb-tab-footer` path. You can also add multiple animations to the header or footer by adding more animations, as shown below. (Make sure to add `|-` on the first row.)
```yaml
format-sb-tab-header:
  waiting: |-
    %animation:Welcome%
    %animation:TestAnimation%
    %animation:Rainbow%
    %animation:Scroll%
```
![Scoreboard Animations](/uploads/scoreboard_animated.gif)
