function f(x) { // function
    console.time('Switch statement');
    let text = `switch(x){`;
    for(let z = 0; z < 1000; z++){
        text+=`case ${z}:alert("true");break;`;
    }
    text+=`}`;
    eval(text);
    console.timeEnd("Switch statement");
}
f(1);//true

function f1(x) {
    console.time('if else statement');
    let text;
    for(let z = 0; z < 1000; z++){
        text = `if(x === ${z}){
            alert(${z})
        }`
    }
    text+=`else if(x){
        false
    }`;
    eval(text);
    console.timeEnd("if else statement");
}

f1(999);