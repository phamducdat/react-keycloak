import { config } from 'dotenv';

const nodeEnv = process.env.NODE_ENV || 'development';
const envFile = `.env.${nodeEnv}`;

config({ path: envFile });
