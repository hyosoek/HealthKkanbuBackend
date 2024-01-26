// Declare
import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import https from 'https';
import cookieParser from 'cookie-parser';
import { errorPass, error404Pass } from './middleware/errorhandling';
import cors from 'cors';
import * as redis from 'redis';

const sslOptions: { key: Buffer; cert: Buffer; passphrase: string } = {
  key: fs.readFileSync(path.join(__dirname, '../ssl/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../ssl/cert.pem')),
  passphrase: '1234',
};
const app: Express = express();
const port: number = 8080;
const server: https.Server = https.createServer(sslOptions, app);

const redisClient: redis.RedisClientType = redis.createClient();
redisClient.connect();

app.use(
  cors({
    // origin: 'http://localhost:8000',
    origin: '*',
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('../'));
app.use(cookieParser());

app.get('*', (req: Request, res: Response, next: NextFunction) => {
  const protocol: string = req.protocol;
  if (protocol == 'https') {
    next();
  } else {
    const destination: string = `https://${req.hostname}:8443${req.url}`;
    res.redirect(destination);
  }
});

//API
// app.use("/postgre", require("./router/postgresql"))

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  errorPass(err, req, res);
});
app.use(error404Pass);

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버가 동작하고 있습니다.`);
});
