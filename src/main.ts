import { bootstrap } from './core/bootstrap'
import { query } from './utils/query'
import './style.scss'

const input = query<'input'>('#file')
const button = query<'button'>('#sorter')

if (input && button) {
  bootstrap(input, button)
}
