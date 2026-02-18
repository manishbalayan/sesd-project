// config/index.js
// Loads environment variables and exports them as a single config object.
// Defaults are provided so the app doesn't crash if .env is missing.

const config = {
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL || '',
    JWT_SECRET: process.env.JWT_SECRET || '',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',
};

module.exports = config;
