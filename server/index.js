const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')

const SENDGRID_URL = 'https://api.sendgrid.com/v3/contactdb/recipients'
const SENDGRID_API_KEY =
  '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'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/subscribe', async function(req, res) {
  console.log('구독 요청!', req.body)
  try {
    const result = await axios.post(SENDGRID_URL, req.body, {
      headers: { Authorization: 'Bearer ' + SENDGRID_API_KEY },
    })

    res.send({ result: 'sucess' })
  } catch (err) {
    res.sendStatus(400)
  }
})

app.delete('/subscribe', async function(req, res) {
  try {
    const result = await axios.delete(SENDGRID_URL, {
      data: req.body,
      headers: { Authorization: 'Bearer ' + SENDGRID_API_KEY },
    })

    res.send({ result: 'sucess' })
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
})

app.listen(5001, function() {
  console.log('블루웨일 메일 서버를 시작합니다.! (5001)')
})
