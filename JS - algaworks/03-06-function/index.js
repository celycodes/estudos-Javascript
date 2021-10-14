function greet () {
  console.log(this)
}

const me = {
  name: 'celenny',
  greet () {
    console.log(this)
  }
}

me.greet()