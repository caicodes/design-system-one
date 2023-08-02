import * as mqtt from 'mqtt'

const client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', () => {
  client.subscribe('presence', (err: any) => {
    if (!err)
      client.publish('presence', 'Hello mqtt')
  })
})

/**
 * use Hive MQTT
 */

/**
 * use Mosquitto
 */

/**
 * use EMX
 */
