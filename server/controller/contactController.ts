import { Request, Response } from 'express';
import sendContact from '../model/contactModel';

const contact = (req: Request, res: Response) => {
  sendContact(req, res);
}

export default contact;