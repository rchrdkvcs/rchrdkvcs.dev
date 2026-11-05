---
name: "Losyma"
description: "An internal multi-user mail client built with Symfony: users send each other messages with To, Cc and Bcc, stored in PostgreSQL, with real-time notifications through Mercure."
tags: ["Symfony", "PHP", "Twig", "Doctrine", "PostgreSQL", "Mercure"]
github: "https://github.com/rchrdkvcs/losyma"
order: 18
---

## Context

Losyma (Local Symfony Mailer) was my final exam project for the Symfony course at ESGI. It is a mail client for accounts on the same installation: nothing leaves the server.

## What's inside

- Messages with To, Cc and Bcc recipients
- One copy of each message per person, so filing, starring or reading your copy never changes anyone else's
- Folders and favorites for sorting received and sent copies
- Real-time notifications for connected recipients, pushed by a Mercure hub and received with `EventSource`

## Stack

Symfony, Twig, Doctrine and PostgreSQL, with a Mercure hub in Docker Compose. PHPStan, PHP CS Fixer and PHPUnit run in CI. I also presented the architecture as a talk, available on [talks.rchrdkvcs.dev](https://talks.rchrdkvcs.dev).
