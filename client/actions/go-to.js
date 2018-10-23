const goTo = pathname => state => {
  window.history.pushState(null, null, pathname)
  return { route: { pathname } }
};

export { goTo };
export default goTo;
