const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')

const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1q2w3e4r',
  database: 'email',
})

const promisePool = pool.promise()

const SENDGRID_URL = 'https://api.sendgrid.com/v3/contactdb/recipients'
const SENDGRID_API_KEY = ''

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const app = express()

app.use('/img', express.static('img'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({ origin: ['https://bluewhale.foundation'], optionSuccessStatus: 200 })
)

/**
 * request body example
 * [{'email': 'tester@naver.com'}]
 */
app.post('/subscribe', async function(req, res) {
  try {
    const { email } = req.body[0]

    if (!validateEmail(email)) {
      throw new Error('이메일 양식이 틀렸습니다')
    }

    const _result = await axios.post(SENDGRID_URL, req.body, {
      headers: { Authorization: 'Bearer ' + SENDGRID_API_KEY },
    })

    const sendgrid_key = _result.data.persisted_recipients[0]

    await promisePool.query(
      `INSERT INTO subscribe (email, sendgrid_key) VALUES ('${email}', '${sendgrid_key}')`
    )

    console.log(email, '회원을 성공적으로 구독 시켰습니다.')

    res.send({ result: 'success' })
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
})

/**
 * request body example
 * [{'email': 'tester@naver.com'}]
 */
app.delete('/subscribe', async function(req, res) {
  try {
    const { email } = req.body[0]

    if (!validateEmail(email)) {
      throw new Error('이메일 양식이 틀렸습니다')
    }

    const [rows] = await promisePool.query(
      `SELECT sendgrid_key FROM subscribe WHERE email='${email}'`
    )

    if (rows.length === 0) {
      throw new Error('구독 회원이 아닙니다.')
    }

    const { sendgrid_key } = JSON.parse(JSON.stringify(rows))[0]

    const result = await axios.delete(SENDGRID_URL, {
      data: [sendgrid_key],
      headers: { Authorization: 'Bearer ' + SENDGRID_API_KEY },
    })

    await promisePool.query(`DELETE FROM subscribe WHERE email='${email}'`)

    console.log(email, '회원을 성공적으로 구독 취소했습니다.')

    res.send({ result: 'sucess' })
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
})

app.listen(5001, function() {
  console.log('블루웨일 메일 서버를 시작합니다.! (5001)')
})
