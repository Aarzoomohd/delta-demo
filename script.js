//change text using timeout
// const hitesh = function(){
//     console.log("aarjoo");
// }

// const changeText = () =>{
//     document.querySelector('h1').innerHTML ="javascript series";
// }
// const changeMe= setTimeout(changeText, 2000);

// document.querySelector("button").addEventListener("click",() =>{
//    clearTimeout(changeMe,3000);
//    console.log("stopeed");
// });

//change random color using interval

// const randomColor = () =>{
//     const hex="0123456789ABCDEF";
//     let color ="#";
//     for(let i=0;i<6;i++){
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// let intervalid;
// const startChangingColor = () =>{

//     if(!intervalid){
//         intervalid = setInterval(changeBgColor,1000);
//     }
//     function changeBgColor(){
//          document.body.style.backgroundColor =randomColor();
//     }
// }
// const stopChangingColor = ()=>{
//    clearInterval(intervalid);
//    intervalid =null;
// }

// document.querySelector('#start').addEventListener("click",startChangingColor);
// document.querySelector('#stop').addEventListener("click",stopChangingColor);
// function func(){
//     let a=5;
//     function func1(){
//         console.log(a);
//     }
//     func1();
// }
// func();
const obj1={
    add: function(a,b){
        return a+b;
    }
}
[3,6,9].every((el)=>{
   el%3==0;
})