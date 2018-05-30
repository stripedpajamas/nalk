const os = require('os')
const cp = require('child_process')

const mac = os.platform()

module.exports.copy = (data) => {
  if (mac) {
    const proc = cp.spawn('pbcopy')
    proc.stdin.write(data)
    proc.stdin.end()
  }
}

module.exports.paste = () => {
  if (mac) {
    return cp.spawnSync('pbpaste').stdout.toString()
  }
}
