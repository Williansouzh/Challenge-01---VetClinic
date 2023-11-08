import { Response, Request } from 'express'

export class tutorsControllers {
  static getAll(req: Request, res: Response): void {
    res.status(200).json({})
  }
}
