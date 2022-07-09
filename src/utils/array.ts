export {}

declare global {
  interface Array<T> {
    sortByKey<T>(this: T[], key: keyof T, direction?: 'asc' | 'desc'): T[]
    deepCopy<T>(this: T[]): T[]
  }
}

Array.prototype.sortByKey = function <T>(
  this: T[],
  key: keyof T,
  direction?: 'asc' | 'desc'
): T[] {
  const d: 1 | -1 = !direction || direction === 'asc' ? 1 : -1
  const n: T[] = [...this]
  return n.sort(
    (a: any, b: any) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0) * d
  )
}

Array.prototype.deepCopy = function <T>(this: T[]): T[] {
  return JSON.parse(JSON.stringify(this))
}
