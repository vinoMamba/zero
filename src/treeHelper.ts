export interface TreeHelperOpt {
  id: string
  children: string
  pid: string
}

const defaultOpt: TreeHelperOpt = {
  id: 'id',
  children: 'children',
  pid: 'parentId',
}

function getOpt(opt?: TreeHelperOpt) {
  return Object.assign({}, defaultOpt, opt)
}

/**
 *
 * @param tree
 * @param opt
 * @returns
 * @description 将树转换成数组
 */
export function treeToList<T = any>(tree: Array<T>, opt?: TreeHelperOpt): Array<T> {
  const { children: c } = getOpt(opt)
  const cloneTree = [...tree]
  cloneTree.forEach((item, index) => {
    const children = item[c]
    if (children)
      cloneTree.splice(index + 1, 0, ...children)
  })
  return cloneTree as Array<T>
}

export function listToTree<T = any>(list: Array<T>, opt?: TreeHelperOpt) {
  const { children, id, pid } = getOpt(opt)
  const cloneList = [...list]
  const treeMap = new Map()
  const result: Array<T> = []

  for (const item of cloneList) {
    item[children] = item[children] || []
    treeMap.set(item[id], item)
  }

  for (const item of cloneList) {
    const parent = treeMap.get(item[pid])
    parent ? parent[children].push(item) : result.push(item)
  }
  return result
}
