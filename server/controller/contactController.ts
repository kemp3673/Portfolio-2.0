import { Request, Response } from 'express';


const contact = (req: Request, res: Response) => {
  res.status(200).send('contact page');
}

export default contact;