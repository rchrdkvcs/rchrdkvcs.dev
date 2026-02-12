---
title: Stream Board
description: A web application for creating FAQ overlays for live streaming, with a dashboard to manage questions and answers displayed on your stream in real-time.
date: "2025-01-15"
tags: ["AdonisJS", "PostgreSQL", "Tailwind CSS", "Framer Motion"]
repo: "https://github.com/rchrdkvcs/stream-board"
link: ""
featured: true
---

## Overview

**Stream Board** is a real-time web application designed for streamers who want to display FAQ overlays directly on their streams. Built with performance and simplicity in mind, it provides a clean dashboard to manage questions and answers while streaming.

## The Problem

Streamers often receive repetitive questions in their chat. Manually answering these questions disrupts the flow of the stream and takes time away from content creation. Existing solutions were either too complex or lacked real-time capabilities.

## The Solution

Stream Board provides a streamlined dashboard where streamers can:

- **Create and manage FAQ entries** with a simple interface
- **Display real-time overlays** on their stream using browser sources
- **Customize the appearance** of the overlay to match their stream's branding
- **Toggle visibility** of individual questions during the stream

## Technical Stack

| Technology | Purpose |
|-----------|---------|
| AdonisJS | Backend API and server-side rendering |
| PostgreSQL | Database for storing FAQ entries and user data |
| Tailwind CSS | Responsive UI styling |
| Framer Motion | Smooth animations for overlay transitions |

## Key Features

### Real-Time Dashboard
The dashboard provides instant updates when new questions are added or modified. Changes are reflected on the stream overlay immediately without requiring a page refresh.

### OBS Integration
Stream Board generates a browser source URL that can be directly added to OBS Studio or any streaming software. The overlay automatically adapts to the configured dimensions.

### Customization
Streamers can customize:
- Font styles and sizes
- Background colors and opacity
- Animation styles (fade, slide, bounce)
- Display duration for each question

## Architecture

```
┌─────────────────┐     ┌─────────────────┐
│   Dashboard UI  │────▶│   AdonisJS API  │
└─────────────────┘     └────────┬────────┘
                                 │
                        ┌────────▼────────┐
                        │   PostgreSQL    │
                        └────────┬────────┘
                                 │
┌─────────────────┐     ┌────────▼────────┐
│  Stream Overlay │◀────│  WebSocket Hub  │
└─────────────────┘     └─────────────────┘
```

## Lessons Learned

This project taught me a lot about real-time communication patterns and WebSocket management. Handling concurrent connections from multiple streaming sessions required careful consideration of resource management and error handling.
