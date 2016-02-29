/*
Parsing CLI arguments
*/
function findModuleToInstall() {
  var found
  process.argv.slice(2).forEach(function (arg) {
    if (arg !== 'i' &&
      arg !== 'install' &&
      arg !== '--save' &&
      arg !== '--save-dev' &&
      arg !== '-S' &&
      arg !== '-D' &&
      arg !== '-g') {
      found = arg
    }
  })
  return found
}
const name = findModuleToInstall()
if (!name) {
  console.error('<wiseli> <module name> [--save|--save-dev]')
  process.exit(-1)
}
const spawn = require('cross-spawn-async')
const blessed = require('blessed')

const screen = blessed.screen({
  smartCSR: true,
  dockBorders: true,
  ignoreDockContrast: true
})
screen.title = 'wiseli'

const npmOutput = blessed.log({
  label: 'NPM output',
  left: 0,
  top: 0,
  border: 'line',
  padding: {
    top: 1,
    bottom: 1
  },
  style: {
    width: '100%',
    height: '30%',
    fg: 'white',
    border: {
      fg: '#f0f0f0'
    }
  }
})

const manpmOutput = blessed.log({
  label: 'manpm output (scrollable). Press ESC or Q to exit',
  left: 0,
  top: '30%-1',
  border: 'line',
  keys: true,
  padding: {
    top: 1,
    bottom: 1
  },
  style: {
    width: '100%',
    height: '70%',
    fg: 'white',
    border: {
      fg: '#f0f0f0'
    }
  }
})

screen.append(npmOutput)
screen.append(manpmOutput)

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  process.exit(0)
})

manpmOutput.focus()
screen.render()

;(function () {
  const proc = spawn('npm', ['install'].concat(process.argv.slice(2)))
  proc.stdout.on('data', (data) => {
    npmOutput.add(data.toString())
  })
  proc.stderr.on('data', (data) => {
    npmOutput.add(data.toString())
  })
}())

;(function () {
  const proc = spawn('manpm', [name, 'example'])
  proc.stdout.on('data', (data) => {
    manpmOutput.add(data.toString())
  })
}())
