import './tracer' // must come before importing any instrumented module.
import {init, start} from './server'

init().then(start)
