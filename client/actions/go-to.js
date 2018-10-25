const goTo = pathname => state => {
  window.history.pushState(null, null, pathname)
  return { route: { pathname } }
};

const updatePathname = pathname => () => {
  return { route: { pathname } }
};

export { goTo, updatePathname };
export default goTo;
