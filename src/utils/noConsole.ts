export default function setNoConsole() {
  if (process.env.NODE_ENV === 'production') {
    console.log = function no_console() {
      return
    }
    console.warn = function no_console() {
      return
    }
  }
}
