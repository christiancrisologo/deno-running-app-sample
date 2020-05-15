# Deno Chat App

# Overview

Simple app created with Deno and based from this simple tutorial : https://dev.to/aralroca/learn-deno-chat-app-37f0?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email
then added some icing on top.

# Pre-requisite

I made in Windows environment so you have to setup your Deno with Windows setup

- Install Chocolately (https://chocolatey.org/install)
- The install deno using choco
  \$ choco install deno
- Install `make` to run your deno runnable with shortcut like `npm start`
  \$ choco make
- (optional) Install denon on deno - (works like nodemon for hot-reloading)
  \$ deno install -Af --unstable https://deno.land/x/denon/denon.ts

# Usage

`make run` - run deno server and other args
`make test` - run deno test
`make debug` - run debug
`denon` - run deno with hot reload

# TODO

- Replace the chat app with better styling or other widgets
