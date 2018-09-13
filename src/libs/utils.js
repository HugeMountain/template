
/**
 * @param {Array} routerList 通过路由列表得到左侧菜单列表
 * @param {Array} access 当前用户的权限列表
 * @returns {Array}
 */
export const getMenuByRouter = (routerList, access) => {
  let leftNav = []
  routerList.forEach(route => {
    if (route.meta) {
      let children = route.children
      let nav = {
        path: route.path,
        name: route.name,
        component: route.component,
        meta: route.meta
      }
      if (children && children.length > 0 && route.meta.single) {
        nav.redirect = { name: children[0].name }
      } else if (children && children.length > 0 && !route.meta.single) {
        nav.children = getMenuByRouter(children, access)
      }
      leftNav.push(nav)
    }
  })
  console.log(leftNav)
  return leftNav
}

/**
 * @param {Array} routeMatched 当前路由matched
 * @returns {Array}
 */
export const getBreadCrumbList = (routeMatched) => {
  console.log(routeMatched)
  return routeMatched.slice(1)
}
