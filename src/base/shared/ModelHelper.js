import { Map, List } from 'immutable'

export function generateMap (data, Model) {
  return data.reduce((acc, item) => {
    return acc.set(item.id, new Model(item))
  }, new Map()
  )
}

export function generateList (data, Model) {
  const arr = data.map((item) => {
    return new Model(item)
  }
  )
  return new List(arr)
}

export function generateListWithSummary (data, Model) {
  const arr = data.map((item) => {
    let i = 0
    let max = 30
    const words = item.html.split(' ')
    item.summary = ''
    for (i; i <= max; i++) {
      item.summary += `${words[i]} `
    }
    item.summary += '...</p>'
    item.html = null
    return new Model(item)
  }
  )
  return new List(arr)
}

export function generateImmutable (data, Model) {
  return Object.keys(data).reduce((acc, key) => {
    let item = data[key]
    return acc.set(item.id, new Model(item))
  }, new Map()
  )
}
