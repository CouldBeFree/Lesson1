function f(x) { // function
    console.time('Execution time took');
    let text = `switch(x){`;
    for(let z = 0; z < 1000; z++){
        text+=`case ${z}:alert("true");break;`;
    }
    text+=`}`;
    eval(text);
    console.timeEnd("Execution time took");
}
f(999);//true
//f(1001); //nothing