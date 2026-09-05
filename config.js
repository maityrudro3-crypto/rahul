import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const envPath = path.join(__dirname, "config.env");
if (existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

// Set NODE_ENV to production if not already set
process.env.NODE_ENV = process.env.NODE_ENV || "production";

// Helper to parse boolean values
const isTrue = (x) => x === "true" || x === true;

// Database URL
const DB_URL = process.env.DATABASE_URL || "";

// Auth directory - use writable location for hosting environments
// Default to /tmp/auth (writable in most environments) or configurable via AUTH_DIR env var
const AUTH_DIR =
  process.env.AUTH_DIR || path.join(process.cwd(), "tmp", "auth");

// Export config
export default {
  prefix: process.env.PREFIX || ".",
  owner: process.env.OWNER_NUMBER || "919382951134",
  sudo: process.env.SUDO || process.env.OWNER_NUMBER || "919382951134",
  packname: process.env.PACKNAME || "𓆩⎯⃪꯭̽𝐑᪵͢𝐮᪳ᷱ𝚍֟ؖ۬𝐫σ𝆭•𝚵꯭̽𓆪᪴",
  author: process.env.AUTHOR || "𓆩⎯⃪꯭̽𝐑᪵͢𝐮᪳ᷱ𝚍֟ؖ۬𝐫σ𝆭•𝚵꯭̽𓆪᪴",
  botName: process.env.BOT_NAME || " 𓆩⎯⃪꯭̽𝐑᪵͢𝐮᪳ᷱ𝚍֟ؖ۬𝐫σ𝆭•𝚵꯭̽ 𝐱 𝐦𝐝𓆪᪴",
  ownerName: process.env.OWNER_NAME || "𓆩⎯⃪꯭̽𝐑᪵͢𝐮᪳ᷱ𝚍֟ؖ۬𝐫σ𝆭•𝚵꯭̽𓆪᪴",
  SESSION_ID: process.env.SESSION_ID || "",
  THEME: process.env.THEME || "t",
  maxFileSize: parseInt(process.env.MAX_FILE_SIZE, 10) || 100 * 1024 * 1024, // 100MB default
  timezone: process.env.TIMEZONE || "UTC",
  GIST_URL: process.env.GIST_URL || "",
  MONGODB_URI: process.env.MONGODB_URI || "",
  WORK_TYPE: process.env.WORK_TYPE || "public",
  STATUS_REACT: isTrue(process.env.STATUS_REACT) || false,
  AUTH_DIR,
  SESSION_DIR: process.env.SESSION_DIR || path.join(process.cwd(), "sessions"),
  META_FILE: process.env.META_FILE || path.join(process.cwd(), "data", "sessions.json"),
  CONCURRENCY: Number(process.env.CONCURRENCY) || 5,
  START_DELAY_MS: Number(process.env.START_DELAY_MS) || 500,
  RECONNECT_LIMIT: Number(process.env.RECONNECT_LIMIT) || 10,
};
