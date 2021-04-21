import { Response, Request } from "express";

export async function getInfo(req: Request, resp: Response): Promise<Response> {
    return resp.status(200).json({resp: 'Servidor OK'})
}