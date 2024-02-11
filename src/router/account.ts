import { Router } from 'express';
import pool from '@config/database/postgreSQL';
import inputCheck from '@module/inputCheck';
const router = Router();

const testApi: string = '/testApi';
router.post(testApi, async (req, res, next) => {
  const { mail, pw, temp }: { mail: string; pw: string; temp: number } =
    req.body;
  try {
    inputCheck(mail).isNotEmpty().isLength({ min: 4, max: 100 }).isMail();
    inputCheck(temp).isInt();
    // inputCheck(temp).isContact();
    // inputCheck(temp).isDate();
    // inputCheck(temp).isIP();
    // inputCheck(temp).isEqual('123456');
    // inputCheck(temp).isFloat();

    const sql = `SELECT 
                  id,location
                FROM 
                  account
                WHERE
                  mail=$1 AND pw=$2`;
    const values = [mail, pw];
    const data = await pool.query(sql, values);
    const row = data.rows;
    const result = {
      data: row[0],
    };
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
//export default router;
// This code is for import, but I will use this as router. I think It is better to use with require on this export.
