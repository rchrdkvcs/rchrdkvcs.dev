---
name: "Luminar"
description: "A Windows desktop utility that turns monitor screens into adjustable soft lights for streaming, with per-display controls and OBS capture exclusion."
tags: ["Vue", "TypeScript", "Windows", "Desktop", "Streaming"]
github: "https://github.com/rchrdkvcs/luminar"
order: 8
---

## Context

I built Luminar to give streamers a software lighting panel using the monitors they already own. Each display can show an independently configured light bar that illuminates the room while staying out of OBS captures.

## What's inside

Luminar supports per-monitor positioning, size, color temperature, tint, and intensity controls, plus named presets, global shortcuts, and a tray interface. The windows are click-through and excluded from capture; a pixel shift and timer help protect the display.

## What I learned

The project combines desktop window behavior with visual controls for multiple screens. Handling capture exclusion, click-through windows, and per-display settings makes the operating system behavior part of the product design.
