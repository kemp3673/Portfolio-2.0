import { Request, Response } from 'express';
import sendContact from '../model/contactModel';

const contact = (req: Request, res: Response) => {
  console.log(req.body);
  sendContact(req, res);
}

export default contact;