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

const bottomOutput = blessed.box({
  content: 'bottom output',
  label: 'bottom',
  left: 0,
  top: '50%-1',
  border: 'line',
  style: {
    width: '100%',
    height: '50%'
  }
})

screen.append(topOutput)
screen.append(bottomOutput)

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  console.log('escaped')
  return process.exit(0)
})

topOutput.focus()
screen.render()

setTimeout(function () {
  bottomOutput.setText('new bottom text')
  screen.render()
}, 2000)
