# Railway setup — King Rudro

## 1. GitHub
Upload this project to your own GitHub repository.

## 2. Railway
Create a new Railway service from the GitHub repository. Railway will use the included Dockerfile.

## 3. Variables
Copy `.env.example` values into Railway Variables.
At minimum set:
- `OWNER_NUMBER` = your WhatsApp number, digits only, with country code
- `OWNER_NAME` = `𓆩⎯⃪꯭̽𝐑᪵͢𝐮᪳ᷱ𝚍֟ؖ۬𝐫σ𝆭•𝚵꯭̽𓆪᪴`
- `BOT_NAME` = ` 𓆩⎯⃪꯭̽𝐑᪵͢𝐮᪳ᷱ𝚍֟ؖ۬𝐫σ𝆭•𝚵꯭̽ 𝐱 𝐦𝐝𓆪᪴`
- `OFFTELEBOT` = `false`

Do not put Telegram bot tokens or API keys in GitHub.

## 4. Persistent Volume
Add a Railway Volume and mount it at:
`/app/storage`

The bot stores WhatsApp sessions and its local database there. Without persistent storage, a redeploy/restart can require pairing again.

## 5. Deploy
Deploy/redeploy the service. The health endpoint is `/`.
After the service is running, use the existing `/pair/<number>` endpoint if you need to generate a pairing code.

Example:
`https://YOUR-RAILWAY-DOMAIN/pair/YOUR_WHATSAPP_NUMBER`

Use only your own WhatsApp account/number.

## Important
- `package.json` starts the bot directly with Node, which is more suitable for Railway than PM2.
- Telegram integration is disabled by default.
- Old Miku/X-Miku owner branding and hardcoded owner contacts have been removed from the main bot branding.
