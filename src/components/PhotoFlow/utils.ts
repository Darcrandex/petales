/**
 * 异步加载图片
 */
export function loadImageAsync(src: string) {
  return new Promise<string | undefined>((resolve) => {
    const img = new Image()

    img.onload = () => resolve(src)
    img.onerror = () => resolve(undefined)

    img.src = src
  })
}

/**
 * 打乱数组
 */
export function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // 当还有元素未被处理时
  while (currentIndex !== 0) {
    // 随机选择一个未处理的元素
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // 交换当前元素和随机选择的元素
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

/**
 * 生成网格布局数据
 * @param columns - 列数量
 * @param items - 用于填充网格的元素
 */
export function generateGrid(columns: number, items: string[]): (string | null)[][] {
  const result: (string | null)[][] = []
  let itemIndex = 0

  while (itemIndex < items.length) {
    const row: (string | null)[] = new Array(columns).fill(null)

    // 每一行的有效元素数量（1 ~ columns 的一半）
    const randomNum = 1 + Math.floor(0.5 * columns * Math.random())
    const numElementsInRow = Math.min(randomNum, items.length - itemIndex)
    const availableIndices = Array.from({ length: columns }, (_, i) => i)

    for (let i = 0; i < numElementsInRow; i++) {
      const randomIndex = Math.floor(Math.random() * availableIndices.length)
      const colIndex = availableIndices[randomIndex]
      row[colIndex] = items[itemIndex]
      itemIndex++
      availableIndices.splice(randomIndex, 1)
    }

    result.push(row)
  }

  return result
}
