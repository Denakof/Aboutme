'user strict'
let userNAme = prompt('enter your name please').toLowerCase();
console.log('hello' + userNAme)
alert("hello " + userNAme)

alert("answer using yes or no y or n")

let Q1 = prompt("Do you think i love sushi?").toLowerCase();
let score = 0;
switch (Q1) {
    case "yes":
    case "y":
        console.log("it is correct")
        alert("its correct")
        score = score + 1
        break;
    case "no":
    case "n":
        console.log("false, i love sushii")
        alert("false i love sushii")
        break;



}

let Q2 = prompt("do you think i can cook?").toLowerCase();
switch (Q2) {
    case "yes":
    case "y":
        console.log("wrong, i don't know how to cook")
        alert("wrong, i don't know how to cook")
        score = score + 1
        break;
    case "no":
    case "n":
        console.log("you know me")
        alert("you know me")
    default:
        break;
}


let Q3 = prompt("Do you think i love pets?").toLowerCase();
switch (Q3) {
    case "yes":
    case "y":
        console.log("correct, i adore pets")
        alert("correct, i adore pets")
        score = score + 1
        break;
    case "no":
    case "n":

        console.log("noo, i love them");
        alert("No!, i love them")
        break;
}

let Q4 = prompt("Does dena love kick-boxing?").toLowerCase();
switch (Q4) {
    case "yes":
    case "y":
        console.log("correct, i love kick-boxing")
        alert("correct, i love kick-boxing")
        score = score + 1
        break;

    case "no":
    case "n":
        console.log("wrong. it is one of my fav sports");
        alert("wrong. it is one of my fav sports")
        break
}


let Q5 = prompt("Does dena know how to swim?").toLowerCase();
switch (Q5) {
    case "yes":
    case "y":
        console.log("yes i know how to swim")
        alert("yes i know how to swim")
        score = score + 1
        break;
    case "no":
    case "n":
        console.log("no i know how to swim");
        alert("no i know how to swim")
    default:
        break;
}


let myAge = Number(prompt("guess my age"))
for (let i = 0; i < 5; i++) {
    if (myAge == 22) {
        alert("correct")
        score = score + 1
        break;
    }

    else if (i == 3) {
        alert('the correct answer is 22')
        break;
    }

    else if (myAge < 22) {
        alert("too low")
        myAge = Number(prompt("guess my age"))


    } else {
        alert("too high")
        myAge = Number(prompt("guess my age"))
    }
}


let Q7 = ['tennis', 'badminton', 'swimming', 'kickboxing', 'tabletennis', 'bowling'];
let A7 = prompt("what is my fav sports");
let flag = false;
for (let a = 1; a < 6; a++) {
    for (let i = 0; i < Q7.length; i++) {
        if (A7 === Q7[i]) {
            alert('yes this is one of them')
            flag = true;
            score = score + 1;


            break;
        }


    }
    if (flag == true) {
        break;

    }
    if (flag === false) {
        alert('sorry it is not one of them')
        A7 = prompt("what is my fav sports");


    }


}
alert('the correct answers are:  ' + ' tennis ' + ' badminton ' + ' swimming ' + 'kickboxing' + 'tabletennis  ' + 'bowling')

alert("YOUR SCORE IS =" + score)








