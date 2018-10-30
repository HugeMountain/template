
/**
 * @param {Array} routerList 通过路由列表得到左侧菜单列表
 * @param {Array} access 当前用户的权限列表
 * @param {String} activeContent 当前路由
 * @returns {Array}
 */
export const getMenuByRouter = (routerList, access, activeContent) => {
  let leftNav = []
  routerList.forEach(route => {
    if (route.meta) {
      let children = route.children
      let nav = {
        path: route.path,
        name: route.name,
        meta: route.meta
      }
      if (children && children.length > 0 && route.meta.single) {
        nav.name = children[0].name
        nav.path = children[0].path
      } else if (children && children.length > 0 && !route.meta.single) {
        nav.open = nameContain(route.name, activeContent)
        nav.children = getMenuByRouter(children, access, activeContent)
      }
      leftNav.push(nav)
    }
  })
  console.log('leftNav', leftNav)
  return leftNav
}

/**
 * @param {Array} list 当前左侧边栏列表
 * @param {String} activeContent 当前路由
 * @returns {Array}
 */
export const getMenuByActive = (list, activeContent) => {
  let leftNav = list
  leftNav.forEach(item => {
    let children = item.children
    if (item.hasOwnProperty('open')) {
      item.open = nameContain(item.name, activeContent)
    }
    if (children && children.length > 0) {
      item.children = getMenuByActive(children, activeContent)
    }
  })
  return leftNav
}

/**
 * @param {Array} routeMatched 当前路由matched
 * @returns {Array}
 */
export const getBreadCrumbList = (routeMatched) => {
  console.log(routeMatched)
  if (routeMatched.length > 1 && routeMatched[0].meta.single) {
    return routeMatched.slice(1)
  }
  return routeMatched
}

export const getTagsTitle = (routeMatched) => {
  let titleArr = []
  if (routeMatched.length > 1 && routeMatched[0].meta.single) {
    return routeMatched.slice(1)
  }
  routeMatched.forEach(item => {
    item.meta && titleArr.push(item.meta.title)
  })
  return titleArr.join('/')
}

export const willOpen = (activeContent) => {
  let active = activeContent
  let activeArray = active ? active.split('_') : []
  return activeArray.length > 1
}
/**
 * 判断当前判断节点是否属于当前选中路由
 * @param prev 判断节点的路由名称
 * @param current  当前选中路由名称
 * @returns {boolean}
 */
export const nameContain = (prev, current) => {
  if (prev.length > current.length) {
    return false
  }
  let res = true
  let prevArr = prev ? prev.split('_') : []
  let currArr = current ? current.split('_') : []
  let length = prevArr.length
  for (let i = 0; i < length; i++) {
    if (prevArr[i] !== currArr[i]) {
      res = false
      break
    }
  }
  return res
}
