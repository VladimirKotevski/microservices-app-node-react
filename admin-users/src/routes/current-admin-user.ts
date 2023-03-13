import express from 'express';
import { currentAdminUser } from '@vkticketing1/common';

const router = express.Router();

router.get('/api/users/current-admin-user', currentAdminUser, (req, res) => {
  res.send({ currentAdminUser: req.currentAdminUser || null });
});

export { router as currentAdminUserRouter };
