import { saveNewHistoryState } from '../to-do/navigation'

const goTo = pathname => state => {
  saveNewHistoryState(pathname)
  return { route: { pathname } }
};

const updatePathname = pathname => () => {
  return { route: { pathname } }
};

const goBack = () => () => {
  requestAnimationFrame(() => window.scrollTo(0, 0))
  window.history.back();
  return {};
}

export { goTo, updatePathname, goBack };
export default goTo;
