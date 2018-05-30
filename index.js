#!/usr/bin/env node

const fs = require('fs')
const util = require('./util')

const help = () => console.log('Usage: nalk <text> | -f <filename> \n\nIf no text is provided, nalk will pull the clipboard\n\n')

const args = process.argv.slice()

if (args[2] === '-h' || args[2] === '--help') {
  help()
  process.exit(0)
}

let input = args.slice(2).join(' ')

if (args[2] === '-f' && args[3]) {
  input = fs.readFileSync(args[3], 'utf8')
}

if (!input) {
  input = util.paste()
}

if (input) {
  const output = input.split('').map(x => String.fromCharCode(~x.charCodeAt(0))).join('') 
  util.copy(output)
  console.log(output)
} else {
  help()
  process.exit(0)
}
