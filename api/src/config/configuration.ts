const dbhost = process.env.MONGODB_HOST || "localhost";
const dbport = parseInt(process.env.MONGODB_PORT) || 27017;
const dbname = process.env.MONGODB_NAME || "shared-view-db";

export default () => ({
    port: parseInt(process.env.API_PORT, 10) || 3000,
    database: {
        uri: `mongodb://${dbhost}:${dbport}`,
        host: dbhost,
        port: dbport,
        name: dbname        
    }
})