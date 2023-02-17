// console.log(a);
// var a = 10; 
// var a = 100;
// var a = 1000;
// console.log(a);
// keyword car definescariables comiin in all parts of JS
// function f(a){
//     console.log(a, this.a);
// }
// let b = 20;
// setTimeout(f.bind({a:"Hello"}, b),1000);
// f.call({a : "World"}, b)
 function getId(){
    return new Promise(resolve =>{
        setTimeout(()=>resolve(100), 1000);
    })
 }
 function getusername(){
    return new Promise(resolve => {
        setTimeout(()=>resolve("user123"),500);
    })
 }

// 1. scenario - we should get id and only after that user name

// async function f1(){
//     const id = await getId();
// console.log(id);
// const username = await getusername();
// console.log(username)
// }
// f1();
//2. scenario simultanius performing getId and getUserName
// const promisId = getId();
// const promisUser = getusername();
// Promise.all([promisId,promisUser])
// .then(idUser =>console.log(`id:${idUser[0]},username :${idUser[1]}`))

// 3. scrnario there will be considered only one result ffrom promise mooving in resolve state first

const promisId = getId();
const promisUser = getusername();
Promise.race([promisId, promisUser]).then(res => console.log(res))
