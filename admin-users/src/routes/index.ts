import express, { Request, Response } from 'express';
import { User } from '../models/user';
import { requireAdminAuth } from '@vkticketing1/common';
const router = express.Router();

router.get('/api/users/all', requireAdminAuth,  async (req: Request, res: Response) => {
  const users = await User.find();

  res.send(users);
});

export { router as indexUsersRouter };
