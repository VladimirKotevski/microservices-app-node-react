import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  const { origin } = req.headers;

  if (origin === 'https://admin.ticketing.dev') {
    delete req.session!['adminJwt'];
    } else {
      delete req.session!['userJwt'];
    }

  res.send({});
});

export { router as signoutRouter };
