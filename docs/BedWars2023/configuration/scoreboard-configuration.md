---
sidebar_label: Scoreboard Config
title: Scoreboard Configuration
sidebar_position: 3.6
---

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