import { h } from 'hyperapp'
import { goBack, Link } from './link'
import backArrow from '../img/back.png'
import shareIcon from '../img/share.png'

/**
 * @param {object} props
 * @param {object} props.actions
 * @param {boolean} [props.showBackButton=false]
 * @param {string} [props.title='']
 * @param {string} [props.showShareButton=false]
 */
function Header (props) {
  let backButton = ''
  let title = ''
  let shareButton = ''

  if (props.showBackButton) {
    backButton = <Link actions={props.actions} href={goBack}>
      <img alt="Volver" src={backArrow} class="header-detail-back-arrow"/>
    </Link>
  }

  if (props.title) {
    title = <span>{props.title}</span>
  } else {
    title = <div class="header__logo" role="image">
      <span>POKE</span>
      <span class="header__logo__si">SI</span>
    </div>
  }

  if (props.showShareButton) {
    shareButton = <img alt="Compartir" onclick={() => props.actions.share()} src={shareIcon} class="header-detail-share-button"/>
  }

  return <header class="header">
    {backButton}
    {title}
    {shareButton}
  </header>
}

export { Header }
export default Header
