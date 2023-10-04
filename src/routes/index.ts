import type {ServerRoute} from '@hapi/hapi'
import {helloWorldRoutes} from './helloworld'

const defaultRoutes: ServerRoute[] = []

const allRoutes: ServerRoute[] = defaultRoutes.concat(helloWorldRoutes)

export default allRoutes
