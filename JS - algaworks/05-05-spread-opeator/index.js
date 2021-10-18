const parts = ['ombro', 'joelho']
const sentence = ['cabeça', ...parts, 'pés']

function createUser ({name, age, ...contacts}) {
  return {
    name, 
    age, 
    contacts
  }
}

console.log(sentence)