import { Response } from 'express';

export const handleSuccessResponse = (res: Response, data: any): void => {
  res.status(200).json(data);
};

export const handleCreateSuccessResponse = (res: Response, data: any): void => {
  res.status(201).json(data);
};

export const handleErrorResponse = (res: Response): void => {
  res.status(500).json({ error: 'Internal Server Error' });
};
