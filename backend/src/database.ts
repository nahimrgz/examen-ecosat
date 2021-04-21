import { createPool } from 'mysql2/promise';

export async function Connect(){

    const connection = await createPool({
        host: 'localhost',
        user: 'nahim',
        password: 'nahim1313',
        database: 'ecosat-examen',
        connectionLimit: 10,
        timezone: '-06:00',
        dateStrings: true
    });
    return connection;
}