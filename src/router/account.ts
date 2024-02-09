import { Router } from 'express';
import pool from '@config/database/postgreSQL';
import inputCheck from '@module/inputCheck';
const router = Router();

//postgreSQL 연결체크
const btreeAPI = '/log-in';
router.post(btreeAPI, async (req, res, next) => {
  const { mail, pw } = req.body;
  inputCheck(mail).isMinSize(10);

  try {
    const sql = `SELECT 
                        count(*) 
                    FROM account 
                        WHERE id=$1;`;
    const values = [mail];
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
