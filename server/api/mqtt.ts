import * as mqtt from 'mqtt'

const config = useRuntimeConfig()
/**
 * convert to env before git push...+

    mqttBrokerUrl: process.env.BROKER_URL,
    mqttBrokerUsername: process.env.BROKER_USERNAME,
    mqttBrokerPassword: process.env.BROKER_PASSWORD,
    mqttBrokerProtocol: process.env.BROKER_PROTOCOL,
    mqttBrokerProtocolPath: process.env.BROKER_PROTOCOL_PATH,
    mqttBrokerProtocolPort: process.env.BROKER_PROTOCOL_PORT,
*/

// const url = 'mqtt://13.65.37.32/mqtt'

const brokerUrl = config.mqttBrokerUrl
const brokerUsername = config.mqttBrokerUsername
const brokerPassword = config.mqttBrokerPassword
const brokerProtocol = config.mqttBrokerProtocol
const brokerProtocolPath = config.mqttBrokerProtocolPath
const brokerProtocolPort = config.mqttBrokerProtocolPort

const url = `${brokerProtocol}:${brokerUrl}:${brokerProtocolPort}/${brokerProtocolPath}`

const options = {
  clean: true,
  connectTimeout: 4000,
  clientId: 'ds_one_111',
  username: brokerUsername,
  password: brokerPassword,
  port: brokerProtocolPort,
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
