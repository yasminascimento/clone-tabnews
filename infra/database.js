import {Client} from "pg";
async function query(queryObject) {
    const client = new Client ({
        host:process.POSTGRES_HOST,
        port:process.POSTGRES_PORT,
        user:process.POSTGRES_USER,
        database:process.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
    });
    await client.connect ();
    const result = await client.query(queryObject);
    
}