let hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let part5 = document.getElementById("part5");
let part6 = document.getElementById("part6");
let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let circle4 = document.getElementById("circle4");
let circle5 = document.getElementById("circle5");
let circle6 = document.getElementById("circle6");
let circle7 = document.getElementById("circle7");
let circle8 = document.getElementById("circle8");
let circle9 = document.getElementById("circle9");
let circle10 = document.getElementById("circle10");
let circle11 = document.getElementById("circle11");
let circle12 = document.getElementById("circle12");

part1.addEventListener("click",function () {
    let hexcolor = "#";
    for(var i = 0; i < 6; i++){
        hexcolor = hexcolor + hex[getRandom()]
    }
    part1.style.background = hexcolor;
    part1.style.boxShadow = "10px -2px 70px" + hexcolor;
    circle1.style.background = hexcolor;
    circle2.style.background = hexcolor;
})
part2.addEventListener("click",function () {
    let hexcolor = "#";
    for(var i = 0; i < 6; i++){
        hexcolor = hexcolor + hex[getRandom()]
    }
    part2.style.background = hexcolor;
    part2.style.boxShadow = "10px -2px 70px" + hexcolor;
    circle3.style.background = hexcolor;
    circle4.style.background = hexcolor;
})
part3.addEventListener("click",function () {
    let hexcolor = "#";
    for(var i = 0; i < 6; i++){
        hexcolor = hexcolor + hex[getRandom()]
    }
    part3.style.background = hexcolor;
    part3.style.boxShadow = "10px -2px 70px" + hexcolor;
    circle5.style.background = hexcolor;
    circle6.style.background = hexcolor;
})
part4.addEventListener("click",function () {
    let hexcolor = "#";
    for(var i = 0; i < 6; i++){
        hexcolor = hexcolor + hex[getRandom()]
    }
    part4.style.background = hexcolor;
    part4.style.boxShadow = "10px -2px 70px" + hexcolor;
    circle7.style.background = hexcolor;
    circle8.style.background = hexcolor;
})
part5.addEventListener("click",function () {
    let hexcolor = "#";
    for(var i = 0; i < 6; i++){
        hexcolor = hexcolor + hex[getRandom()]
    }
    part5.style.background = hexcolor;
    part5.style.boxShadow = "10px -2px 70px" + hexcolor;
    circle9.style.background = hexcolor;
    circle10.style.background = hexcolor;
})
part6.addEventListener("click",function () {
    let hexcolor = "#";
    for(var i = 0; i < 6; i++){
        hexcolor = hexcolor + hex[getRandom()]
    }
    part6.style.background = hexcolor;
    part6.style.boxShadow = "10px -2px 70px" + hexcolor;
    circle11.style.background = hexcolor;
    circle12.style.background = hexcolor;
})

function getRandom(){
   return Math.floor(Math.random()*hex.length);
}