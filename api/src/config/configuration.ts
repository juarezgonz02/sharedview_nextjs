import {config} from 'dotenv';

config();

const dbhost = process.env.MONGODB_HOST || "localhost";
const dbport = parseInt(process.env.MONGODB_PORT) || 27017;
const dbname = process.env.MONGODB_NAME || "shared-view-db";
const dburi = process.env.MONGODB_URI || `mongodb://${dbhost}:${dbport}`;

export default () => ({
    port: parseInt(process.env.API_PORT, 10) || 3000,
    database: {
        uri: dburi,
        host: dbhost,
        port: dbport,
        name: dbname        
    }
})