# Simple App using Deno with run, test and configs

---

# Overview

Simple app created with Deno and based from this [simple tutorial](https://dev.to/aralroca/learn-deno-chat-app-37f0?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email)
then I added some fancy icing on top.

# Prerequisite

The app is running in Windows environment so here is my setup for windows user, for mac and linux user, you can use `homebrew` instead of `choco`

- Install Chocolately (https://chocolatey.org/install)
- Install deno using choco

  `$ choco install deno`

- Install `make` to run your deno runnable with shortcut like `npm start`

  `$ choco make`

- _(optional)_ Install denon on deno - (works like nodemon for hot-reloading)

  `$ deno install -Af --unstable https://deno.land/x/denon/denon.ts`

# Usage

| Tables       |              Are               |
| ------------ | :----------------------------: |
| `make run`   | run deno server and other args |
| `make test`  |         run deno test          |
| `make debug` |           run debug            |
| `denon`      |    run deno with hot reload    |

# TODO

- Replace the chat app with better styling or other widgets
- Fix issue with importmap on test
