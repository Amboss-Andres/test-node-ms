import type {ServerRoute} from '@hapi/hapi'

async function getHelloWorld() {
  return `{message : Hello world route working, success:true}`
}

export const helloWorldRoutes: ServerRoute[] = [{method: 'GET', path: '/helloworld', handler: getHelloWorld}]
