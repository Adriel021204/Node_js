//Global

console.log(__dirname)   //gives the path of current directory
console.log(__filename)  //gives the filename

/*
setInterval(() => {      //setInterval
   console.log('hello world')
}, 10)

setTimeout(() => {            //setTimeout
   console.log('hello world')
}, 100)
*/

setTimeout(() => {           //setInterval inside setTImeout works
   setInterval(() => {       // but both seperate dont
       console.log(`hello`);
   }, 10000);
}, 1000)