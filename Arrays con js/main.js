let things = ["pablo", "america","musica","rap","mfdoom"];
things.push("kanyewest")
things.unshift("lilia")
things.splice(2, 0,  "jacqueline")

let b = things.pop();
let b2 = things.shift();
console.log(b);
console.log(b2);
showDom("array1",things);


function show(arr){
    for(let i=0 ; i <arr.length; i++){
        console.log(arr[i]);
    }
}


function showDom(element,arr) {
    document.getElementById(element).innerHTML="";
    for(let i=0 ; i <arr.length; i++){
        document.getElementById(element).innerHTML +=
        `<div>${arr[i]}<div> `;
    }
}
// for(let i=numbers.length-1 ; i >=0; i--){ //acomodo de atras hacia adelante
//     console.log(numbers[i]);
// }

// for(let i=0 ; i <numbers.length; i++){ //acomodo de adelnate hacia atras
//     console.log(numbers[i]);
// }
// console.log (numbers.at(-5)); //si pones numeros negativos tomas de los ultimos numeros para atras
// console.log (numbers[numbers.lenght-1]);
// console.log (numbers[0]);
// console.log (numbers.length);