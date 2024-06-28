
const { Pool } = require('pg')

const pool = new Pool ({
  user: 'lancelote',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432
})


export const query = (text: string, params: any) => pool.query(text, params)

export default pool