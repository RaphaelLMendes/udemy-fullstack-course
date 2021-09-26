window.onload = function() {
    
    let randNum = Math.ceil(Math.random() * 10);

    console.log(randNum);

    while(true) {

        
        let guess = Number(prompt("What is the number?"));

        if (randNum === guess) {
            alert("You win!");
            break;
        }
    }

    const arrowFunc = () => {
        console.log("Im an arrow func!");
    }

    const anonFunc = function() {
        console.log("Im an anonymous func!");
    }


    function normal() {
        console.log("Im a regular func!");
    }

    arrowFunc();
    anonFunc();
    normal();

}

