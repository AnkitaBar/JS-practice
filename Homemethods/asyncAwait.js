async function myFunc(){
    let apicall = fetch('https://official-joke-api.appspot.com/random_joke');
    apicall = await apicall;
    apicall = await apicall.json();
    console.log(apicall);
}
console.log(1);
myFunc();
console.log(2);


const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);