---
title: Pokerify
description: A REST API for simulating Texas Hold'em poker games with JWT authentication, AI opponents, and full game logic including hand evaluation and betting rounds.
date: "2025-11-28"
tags: ["NestJS", "MongoDB", "TypeScript", "Docker"]
repo: "https://github.com/rchrdkvcs/pokerify"
link: ""
featured: true
---

## A Poker Engine, Not a Poker Game

Pokerify is a backend-only API. No frontend, no UI — just pure game logic exposed through REST endpoints. Any client can plug into it. The idea was to build a robust Texas Hold'em engine that handles the hard parts: deck management, betting rounds, hand evaluation, and AI opponents.

## How a Game Works

1. Register an account → you get 1000€ and a JWT token
2. Create a table with custom blinds, or join an existing one
3. If you're alone, an AI player joins automatically
4. Start the game → cards are dealt, blinds are placed
5. Play through PRE_FLOP → FLOP → TURN → RIVER → SHOWDOWN
6. The API evaluates hands and distributes the pot

Every action goes through `POST /tables/:id/action` with a simple body: `{ "action": "raise", "amount": 50 }`. The API handles turn order, phase transitions, and the AI responds on its own turn.

## The Hand Evaluator

This was the fun part. The evaluator ranks every possible hand from High Card to Royal Flush, compares them properly (including kickers), and determines winners — even in split-pot scenarios.

```
Royal Flush > Straight Flush > Four of a Kind > Full House >
Flush > Straight > Three of a Kind > Two Pair > Pair > High Card
```

## Under the Hood

- **NestJS** with a clean modular architecture (`auth/`, `tables/`, `poker/`, `ai/`)
- **MongoDB + Mongoose** for flexible game state — poker tables have complex, nested state that fits NoSQL well
- **JWT + bcrypt** for auth
- **Swagger** for interactive API docs at `/api`
- **Docker Compose** for both dev and prod environments

## The AI

Keeps it simple: checks when possible, calls if it can afford it, folds otherwise. Not a poker genius — but good enough to give you someone to play against when testing alone.
