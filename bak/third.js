/*
connected manpm to the top output area
*/
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
  style: {
    width: '100%',
    height: '25%',
    border: {
      fg: '#f0f0f0'
    }
  }
})

const manpmOutput = blessed.log({
  label: 'manpm output (scrollable)',
  left: 0,
  top: '25%-1',
  border: 'line',
  keys: true,
  style: {
    width: '100%',
    height: '75%',
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

// npmOutput.focus()
manpmOutput.focus()
screen.render()

;(function () {
  const proc = spawn('npm', ['help'])
  proc.stdout.on('data', (data) => {
    npmOutput.add(data.toString())
  })
}())

;(function () {
  const proc = spawn('manpm', ['obind', 'example'])
  proc.stdout.on('data', (data) => {
    manpmOutput.add(data.toString())
  })
}())
