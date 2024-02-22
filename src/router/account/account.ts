import { Router } from 'express';
import pool from 'configs/database/postgreSQL';
import inputCheck from 'modules/inputCheck';
import { PrismaClient } from '@prisma/client';
import { max } from 'moment';
const router = Router();

const prisma = new PrismaClient();

const signInWithQuery: string = '/sign-in1';
router.post(signInWithQuery, async (req, res, next) => {
  // const { mail, pw, temp }: { mail: string; pw: string; temp: number } =
  // req.body;

  try {
    // inputCheck(mail).isNotEmpty().isLength({ min: 4, max: 100 }).isMail();
    //inputCheck(temp).isInt();
    // inputCheck(temp).isContact();
    // inputCheck(temp).isDate();
    // inputCheck(temp).isIP();
    // inputCheck(temp).isEqual('123456');
    // inputCheck(temp).isFloat();

    const sql = `SELECT 
                  *
                FROM 
                  account
                WHERE
                  id < 500011`;
    const data = await pool.query(sql);
    const row = data.rows;
    const result = {
      data: row[0],
      message: 'success',
    };
    res.locals.result = result;
    next();
  } catch (err) {
    next(err);
  }
});

const signInWithPrisma: string = '/sign-in2';
router.post(signInWithPrisma, async (req, res, next) => {
  // const { mail, pw, temp }: { mail: string; pw: string; temp: number } =
  // req.body;

  try {
    // inputCheck(mail).isNotEmpty().isLength({ min: 4, max: 100 }).isMail();
    //inputCheck(temp).isInt();
    // inputCheck(temp).isContact();
    // inputCheck(temp).isDate();
    // inputCheck(temp).isIP();
    // inputCheck(temp).isEqual('123456');
    // inputCheck(temp).isFloat();

    const data = await prisma.account.findMany({
      where: {
        id: {
          lt: 500011,
        },
      },
    });
    console.log(data[0].id);
    const result = {
      data: data,
      message: 'success',
    };
    res.locals.result = result;
    next();
  } catch (err) {
    next(err);
  }
});

const signUpApi: string = '/sign-up';
router.post(signUpApi, async (req, res, next) => {
  const { mail, pw, nickname }: { mail: string; pw: string; nickname: string } =
    req.body;
  try {
    inputCheck(mail).isNotEmpty().isMail().isLength({ min: 4, max: 100 });
    inputCheck(pw).isNotEmpty().isLength({ min: 4, max: 32 });
    inputCheck(nickname).isInt().isLength({ min: 3, max: 32 });

    await prisma.account.create({
      data: {
        mail: mail,
        pw: pw,
        nickname: nickname,
      },
    });
    res.locals.result = {
      messsage: 'success',
    };
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
//export default router;
// This code is for import, but I will use this as router. I think It is better to use with require on this export.
