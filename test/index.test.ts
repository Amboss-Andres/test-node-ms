import type {Server} from '@hapi/hapi'

import {init} from '../src/server'

describe('Smoke test', () => {
  let server: Server

  beforeEach(async () => {
    server = await init()
  })
  afterEach(async () => {
    await server.stop()
  })

  it('index responds', async () => {
    const res = await server.inject({method: 'get', url: '/'})
    expect(res.statusCode).toBe(200)
    expect(res.result).toBe('Hello! Nice to have met you.')
  })
})
