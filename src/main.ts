import { bootstrap } from './core/bootstrap'
import { query } from './utils/query'
import './style.scss'

const input = query('input')
const button = query('button')

if (input && button) {
  bootstrap(input, button)
}
