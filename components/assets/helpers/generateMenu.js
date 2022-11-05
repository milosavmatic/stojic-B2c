export const generateMenu = (menu, startPath) => {
  const ret = []
  for (const item of menu) {
    let path = startPath + '/' + item.id //item.slug
    let name = item.name
    let children =
      (item?.children ?? []).length > 0 ? generateMenu(item.children, path) : []
    ret.push({ name, path, children, id: item.id })
  }

  return ret
}
