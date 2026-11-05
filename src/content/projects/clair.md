---
name: "Clair"
description: "A personal budgeting app in French: plan income, bills, subscriptions and installment purchases, then optionally sync your bank account and match real transactions against the plan."
tags: ["AdonisJS", "Vue", "Inertia.js", "TypeScript", "PostgreSQL", "shadcn-vue", "Open Banking"]
order: 4
---

## Context

Most budgeting apps either want full access to your bank from day one or stay stuck at a spreadsheet. Clair starts with a plan you enter by hand, and the bank connection is optional. When it is on, real transactions confirm the plan instead of duplicating it.

![Monthly overview with key figures, payment calendar and six-month history](./images/clair-1.png)

## What's inside

- One-off, monthly and yearly income
- Everyday expenses by category, monthly envelopes for variable spending, and savings shown apart from expenses
- Fixed charges and subscriptions with an optional end date
- Installment purchases with fees spread across the schedule, the last payment adjusting the cents
- A monthly overview with a six-month history, upcoming payments and a yearly payment calendar
- Clear figures: what is left to live on after fixed commitments, and what is left to spend this month

![Operations list mixing expenses, subscriptions and fixed charges](./images/clair-2.png)

![Installment plans with progress, monthly payment and fees](./images/clair-3.png)

## Bank sync and matching

An optional Enable Banking connection imports balances and transactions. Each transaction can be matched to a planned payment, including partial payments, refunds, splits, and date or amount gaps. Classification rules file similar transactions automatically, with a preview of the past transactions they would have matched. Clair never initiates a payment.

## Stack

AdonisJS 7, Inertia 3, Vue 3, Lucid and PostgreSQL, Tailwind CSS 4, shadcn-vue and Reka UI. Amounts are stored as integer cents. Oxlint, Oxfmt, unit, functional and Playwright browser tests run in CI.
