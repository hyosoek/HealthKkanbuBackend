import dotenv from 'dotenv';
import { Router } from 'express';

dotenv.config({ path: '../../.env' });
const router = Router();
import pool from '../config/database/postgreSQL';

//postgreSQL 연결체크
const btreeAPI = '/log-in';
router.post(btreeAPI, async (req, res, next) => {
  console.log('good');
  const { mail } = req.query;
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
