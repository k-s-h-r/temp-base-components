// propsをtailwind-variantsのvariantsとその他に分離する関数
function splitTvObject(obj: { [key: string]: any }, tv: { variants?: { [key: string]: any } }) {
  const keys: string[] = tv?.variants ? Object.keys(tv.variants) : []
  const tvVariants: { [key: string]: any } = {}
  const rest: { [key: string]: any } = {}

  for (const prop in obj) {
    if (keys.includes(prop)) {
      tvVariants[prop] = obj[prop]
    } else {
      rest[prop] = obj[prop]
    }
  }

  return { tvVariants, rest }
}

export { splitTvObject }
