---
sidebar_label: Tab Config
title: Tab List Configuration
sidebar_position: 3.65
---

Since we decided to use [TAB](https://github.com/NEZNAMY/TAB) plugin by Neznamy, we support almost all features they have to offer. Below you can find some commonly used features.

### Tab Sorting
It is possible to sort the tab list by any registered placeholder. If you want to sort the tab list by teams you will have to change the TAB config.
Goto: TAB -> `config.yml` -> `scoreboard-teams` and set or add `PLACEHOLDER_A_TO_Z:%bw_team%` to `sorting-types` to sort the tab list by teams.
#### Example config
```yaml
scoreboard-teams:
  enabled: true
  enable-collision: true
  invisible-nametags: false
  anti-override: true
  sorting-types:
  - PLACEHOLDER_A_TO_Z:%bw_team%
```

### Health behind player
There are 2 methods to accomplish this. The first one would be to use the `yellow-number-in-tablist` feature of TAB, the second option would be to align the player suffix to the right. Both methods have their own advantages and disadvantaged.

#### Yellow number in tablist
This feature supports 2 display types (`yellow number` and `hearts`). To enable this feature go to: TAB -> `config.yml` -> `yellow-number-in-tablist`, and set `enabled` to `true`. After this you will have to use the correct placeholder to show the player health.
By using the `%health%` it will show the player health as a healthbar, when only the number is required set the placeholder to `0%health%` (note the `0` in front of the placeholder).

#### Player suffix
To use this feature you will have to change the suffix of players to anything you want (this is not limited to only a health placeholder). After this you have to change the `align-tabsuffix-on-the-right` setting in the TAB config. This setting can be found in: TAB -> `config.yml` -> `tablist-name-formatting`. Then set `align-tabsuffix-on-the-right` to `true`. Make sure to double check if the `tablist-name-formatting` feature is enabled.
