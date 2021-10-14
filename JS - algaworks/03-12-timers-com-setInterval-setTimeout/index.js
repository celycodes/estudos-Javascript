const interval = setInterval(() => {
  console.log('executou')
}, 5000);

setTimeout(() => {
  clearInterval(interval)
}, 20000);

/*
setTimeout - Executa um código apenas uma vez após determinado tempo.
setInterval - Executa um código apenas varias vezes após determinado tempo.
*/