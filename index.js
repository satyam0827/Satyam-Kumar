const a = 5
const b = 6

function add( a ,  b){
    return a+b;
}

//function to return diff of two numbers
function diff(a,b){
    if(a>b){
        return a-b;
    }else{
        return b-a;
    }
}
console.log(add(a,b));