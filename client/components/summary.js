import { h } from 'hyperapp'
import Link, { goBack } from './link';
import backArrow from '../img/back.png'

function Summary (state, actions) {
  return <div>
    <div class="header">
      <Link actions={actions} href={goBack}>
        <img alt="Volver" src={backArrow} class="header-detail-back-arrow"/>
      </Link>

      <span>POKE</span><span class="header-si">SI</span>
    </div>
  </div>
}

export { Summary }
export default Summary
