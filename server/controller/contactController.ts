import { Request, Response } from 'express';


const contact = (req: Request, res: Response) => {
  console.log('contact page: ' + req.url + ' ' + req.method + ' ' + req.body )
  res.status(200).send('contact page');
}

export default contact;