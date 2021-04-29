const {
  strData,
  replace
} = require('@submarin/generator')

const dict = {
  main: require("./dict/main.json"),
  taiy: require("./dict/taiy.json")
}

const generate = (text = '') => {
  if (typeof text !== 'string') throw new Error('Invalid Text')
  if (!text) return ''

  let data = new strData({
    text
  })
  data = replace(data, dict.main)
  //data = replace(data, dict.taiy)

  return data.text
}

module.exports = {
  strData,
  generate
}