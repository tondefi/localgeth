# Localgeth

Ethereum and block explorer for development purpose using docker compose. Do not use for production.

## Setup environment

Copy `local.env.example` to `local.env`

```
cd hardhat && npm install && node genkey.js
```

## Start/stop
Start:

```
docker compose up -d
```

Stop:

```
docker compose down
```