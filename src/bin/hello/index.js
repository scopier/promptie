import paint from '../system/paint'
import progress from '../system/progress'
export default function (screen, args) {
  return new Promise((resolve, reject) => {
    let index = 0
    screen.push(paint('Hello and welcome to "hello" command', {styles: ['blue', 'bold']}))
    screen.push(paint('You will be presented with a dummy determinate loading..', {styles: ['magenta', 'underline', 'white-bg']}))
    screen.push(paint('hello', {styles: ['command']}))
    screen.push(paint('google', {link: 'http://google.ca'}))
    let interval = setInterval(() => {
      index += 0.02
      if (index < 1) {
        progress.pushProgressDeterminate(index, '_', 'O')
      } else {
        progress.removeProgress()
        clearInterval(interval)
        resolve(paint('Process Finished', {styles: ['green']}))
      }
    }, 100)
  })
}
