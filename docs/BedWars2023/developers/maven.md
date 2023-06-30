---
sidebar_label: Maven
title: Maven
sidebar_position: 5.2
---
[![Version](https://img.shields.io/nexus/releases/com.tomkeuper.bedwars/bedwars-api?server=https%3A%2F%2Frepo.tomkeuper.com)](https://repo.tomkeuper.com)

##### Repository

```xml
<repositories>
    <repository>
        <id>bedwars2023-releases</id>
        <url>https://repo.tomkeuper.com/repository/releases/</url>
    </repository>
    
    <!--Use for Snapshots only!-->
    <repository>
        <id>bedwars2023-snapshots</id>
        <url>https://repo.tomkeuper.com/repository/snapshots/</url>
    </repository>
    <!-- -->
</repositories>
```

##### Dependency

```xml
<!--BedWars2023 API-->
<dependency>
    <groupId>com.tomkeuper.bedwars</groupId>
    <artifactId>bedwars-api</artifactId>
    <version>{version}</version>
    <scope>provided</scope>
</dependency>
```
