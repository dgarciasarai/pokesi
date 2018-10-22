import { h } from 'hyperapp'

const linkClickHandler = (actions, href) => (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();

  if (href === goBack) {
    actions.goBack();
  } else {
    actions.goTo(href);
  }
};

function Link(props, children) {
  const actions = props.actions;
  const href = props.href;

  return <a {...props} onclick={linkClickHandler(actions, href)}>
    {children}
  </a>
}

const goBack = "navigateBack"

export { Link, goBack }
export default Link
