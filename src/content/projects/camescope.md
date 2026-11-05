---
name: "Camescope"
description: "A WebRTC streaming tool for esports broadcasts: remote players share their camera from a link, and an admin panel composes them into OBS layouts in real time."
tags: ["AdonisJS", "Vue", "Inertia.js", "WebRTC", "mediasoup", "Socket.IO", "Docker"]
github: "https://github.com/rchrdkvcs/camescope"
order: 6
---

## Context

During online tournaments, casters want to show player cameras on stream. Asking every player to set up their own streaming software does not scale. Camescope gives each player a link: they open it, allow their camera, and the production team gets the feed directly in OBS.

## How it works

The app has three views:

- **Guest**: the player page, reached from a room link or QR code, that publishes the camera
- **Admin**: the control panel to create tournament sessions, pick a layout and switch what goes on air
- **OBS**: a browser source that renders the live composition for the broadcast

Sessions move from draft to active to finished. Layouts are stored as JSON configurations (camera positions, sizes, background), with presets and custom layouts that can be duplicated and edited.

## Real-time media

Video goes through a mediasoup SFU on the server instead of peer-to-peer connections, so one player feed can reach several viewers without extra upload. Socket.IO handles signaling. TURN credentials come from Cloudflare Realtime and are cached for an hour, so players behind strict NATs can still connect.

## Stack

AdonisJS 6, Inertia.js, Vue 3, mediasoup, Socket.IO, Lucid ORM and Docker, with a UDP port range exposed for media traffic.
