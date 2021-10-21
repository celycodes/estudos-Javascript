interface Animal {
  sex: 'male' | 'female'
}

interface Human extends Animal{
  name: string
  age: number
}

const me: Human = {
  name: 'celenny',
  age: 19,
  sex: 'female'
}