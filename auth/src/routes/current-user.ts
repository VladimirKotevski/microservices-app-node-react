import express, { json } from 'express';
import { currentUser } from '@vkticketing1/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null, currentAdminUser: req.currentAdminUser || null });
});

export { router as currentUserRouter };
