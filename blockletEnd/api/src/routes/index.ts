import middleware from '@blocklet/sdk/lib/middlewares';
import { Router } from 'express';
import { query } from '../db/db';

const router = Router();

router.use('/user', middleware.user(), (req, res) => res.json(req.user || {}));

router.post('/users', async (req, res) => {
  const { userName, email, phone } = req.body;
  const createdAt = new Date();

  try {
    const queryText = 'INSERT INTO users (username, email, phone, created_at) VALUES ($1, $2, $3, $4) RETURNING *';
    const { rows } = await query(queryText, [userName, email, phone, createdAt]);
    res.status(200).json(rows[0]);
  } catch (err) {
    console.error('创建用户时出错:', err);
    res.status(500).json({ error: '创建用户时出错' });
  }
});

export default router;
