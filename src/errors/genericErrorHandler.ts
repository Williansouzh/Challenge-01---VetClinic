import { Request, Response } from 'express';

const genericErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
};

export default genericErrorHandler;
