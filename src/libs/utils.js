
/**
 * @param {Array} routerList 通过路由列表得到左侧菜单列表
 * @param {Array} access 当前用户的权限列表
 * @returns {Array}
 */
export const getMenuByRouter = (routerList, access) => {
  let leftNav = []
  routerList.forEach(route => {
    if(route.meta) {
      let children = route.c
    }
  })

}

/**
 * @param {Array} routeMatched 当前路由matched
 * @returns {Array}
 */
export const getBreadCrumbList = (routeMatched) => {
  return routeMatched.slice(1)
}
