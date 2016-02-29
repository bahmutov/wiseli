/*
connected an output stream to the bottom box input
*/
const spawn = require('cross-spawn-async')
const blessed = require('blessed')

const screen = blessed.screen({
  smartCSR: true,
  dockBorders: true,
  ignoreDockContrast: true
})
screen.title = 'my window title'

const topOutput = blessed.box({
  label: 'top',
  left: 0,
  top: 0,
  border: 'line',
  content: 'top output',
  style: {
    width: '100%',
    height: '50%'
  }
})

const npmOutput = blessed.log({
  label: 'NPM output',
  left: 0,
  top: '50%-1',
  border: 'line',
  keys: true,
  style: {
    width: '100%',
    height: '50%'
  }
})

screen.append(topOutput)
screen.append(npmOutput)

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  console.log('escaped')
  process.exit(0)
})

npmOutput.focus()
screen.render()

const proc = spawn('npm', ['help'])
proc.stdout.on('data', (data) => {
  npmOutput.add(data.toString())
})
