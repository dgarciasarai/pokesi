import { h } from 'hyperapp'

const linkClickHandler = (goTo, href) => () => {
  event.preventDefault();
  event.stopImmediatePropagation();
  goTo(href);
};

function Link(props, children) {
  const goTo = props.actions.goTo;
  const href = props.href;

  return <a {...props} onclick={linkClickHandler(goTo, href)}>
    {children}
  </a>
}

export { Link }
export default Link
