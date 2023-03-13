import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentAdminUserRouter } from './routes/current-admin-user';
import { signinAdminRouter } from './routes/signin';
import { signoutAdminRouter } from './routes/signout';
import { signupAdminRouter } from './routes/signup';
import { indexUsersRouter } from './routes/index'
import { errorHandler, NotFoundError } from '@vkticketing1/common';

const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    name: 'adminSession',
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentAdminUserRouter);
app.use(signinAdminRouter);
app.use(signoutAdminRouter);
app.use(signupAdminRouter);
app.use(indexUsersRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };