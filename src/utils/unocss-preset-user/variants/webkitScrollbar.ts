import type { Variant } from 'unocss'

// https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar
const variantScrollbarMap = {
  // 整个滚动条.
  'scrollbar': ['-webkit-scrollbar:horizontal', '-webkit-scrollbar'],
  'scrollbar-x': '-webkit-scrollbar:horizontal',
  'scrollbar-y': '-webkit-scrollbar',
  // 滚动条上的按钮 (上下箭头).
  'scrollbar-button': '-webkit-scrollbar-button',
  // 滚动条上的滚动滑块.
  'scrollbar-thumb': '-webkit-scrollbar-thumb',
  // 滚动条轨道.
  'scrollbar-track': '-webkit-scrollbar-track',
  // 滚动条没有滑块的轨道部分.
  'scrollbar-track-piece': '-webkit-scrollbar-track-piece',
  // 当同时有垂直滚动条和水平滚动条时交汇的部分.
  'scrollbar-corner': '-webkit-scrollbar-corner',
  // 某些元素的corner部分的部分样式(例:textarea的可拖动按钮).
  'scrollbar-resizer': '-webkit-resizer'
}

const variants: Variant[] = []

Object.entries(variantScrollbarMap).forEach(([key, value]) => {
  variants.push((matcher) => {
    const prefix = `${key}:`
    const values = Array.isArray(value) ? value : [value]

    if (!matcher.startsWith(prefix)) return matcher

    return {
      matcher: matcher.slice(prefix.length),
      selector: s => values.map(v => `${s}::${v}`).join(',')
    }
  })
})

export default variants
