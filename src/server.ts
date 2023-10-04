'use strict'

import Hapi, {Request, Server, ServerRegisterPluginObject} from '@hapi/hapi'
import hapiSentry from 'hapi-sentry'
import routes from './routes'
import Sentry from './sentry'
import hapiOnKubernetes from './plugins/hapi-on-kubernetes'
import HapiPino from 'hapi-pino'

const pinoDevOptions = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
}

const pinoProdOptions = {
  redact: ['req.headers.authorization'],
}

export const init = async () => {
  const server: Server = Hapi.server({port: process.env['PORT'] || 4000, host: '0.0.0.0'})

  await server.register([
    {
      plugin: HapiPino,
      options:
        process.env['NODE_ENV'] !== 'production' ? Object.assign(pinoProdOptions, pinoDevOptions) : pinoProdOptions,
    },
    {plugin: hapiSentry, options: {client: Sentry}},
    {plugin: hapiOnKubernetes},
  ] as Array<ServerRegisterPluginObject<any>>)

  server.route({method: 'GET', path: '/', handler: index})
  server.route(routes)

  await server.initialize()
  return server
}

export const start = async (server: Server) => {
  await server.start()
  server.log([], `Listening on ${server.info.uri}`)
  return server
}

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection')
  console.error(err)
  process.exit(1)
})

function index(request: Request) {
  request.log('Processing request', request.info.id)
  return 'Hello! Nice to have met you.'
}
