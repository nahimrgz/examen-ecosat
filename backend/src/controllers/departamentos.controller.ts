import {Request, Response } from 'express';
import { Connect } from './../database'

export async function traerTodosDepartamentos(req: Request, res: Response): Promise<Response> {
    
    const connection = await Connect();

    try {

        const [rows, fields] = await connection.query('SELECT * FROM departamentos');
        return res.json({
            error:false,
            message: '',
            data: rows
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error:true,
            message: err.message,
            data: null
        });
    } finally {
        connection.end();
    }
}