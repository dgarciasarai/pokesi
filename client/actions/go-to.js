import { saveNewHistoryState } from '../to-do/navigation'

const goTo = pathname => state => {
  saveNewHistoryState(pathname)
  return { route: { pathname } }
};

const updatePathname = pathname => () => {
  return { route: { pathname } }
};

export { goTo, updatePathname };
export default goTo;
