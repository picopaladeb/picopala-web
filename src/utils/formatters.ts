export const formatAsCurrency = (value: number) => {
  return `₿${value}`
}

export const convertSatoshiBitcoin = (value: number) => {
  return value / 100000000
}

export const convertBitcoinToSatoshi = (value: number) => {
  return value * 100000000
}

export const capitalizeFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
