import * as mqtt from 'mqtt'

/**
 * convert to env before git push...+
 */
const url = 'mqtt://13.65.37.32/mqtt'
const options = {
  clean: true,
  connectTimeout: 4000,
  clientId: 'test1212',
  username: 'kelvin',
  password: 'kelvin',
  port: 28883,
}

let res = 'not connected'
let msg: any
let pay: any

const client = mqtt.connect(url, options)
const topic = 'Hal/ACE/EquipmentState/Outstream'

client.on('connect', () => {
  res = 'connected'
  client.subscribe(topic, (err: any) => {
    if (!err)
      res = 'subscribed!'
  })
})

export default defineEventHandler(() => ({
  res,
  topic,
  msg,
  pay,
}))

/**
 * Server API Route
 * @server /server/api/mqtt
 */
/*

// payload base64 decrypt
// make decrypted version avail as server api route
// connect that route to a pinia store for the eq state outstream
// top level objs... manifolds, pumps...

// then use api.messages to subscribe/publish/resp api communication model

// position pump...
// manifold stuff...

*/
