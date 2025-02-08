console.log("Expelliarumus");

// function addBinary(a, b) {
//     var c = a + b;
//     var res = '';
//     while (c >= 1) {
//         var res = c % 2 + res;
//         c = Math.floor(c / 2);
//     }
//     return res;
// }

// let answer = addBinary(132, 3);

// console.log(answer);


// [3, 2,  1]
// function gimme(triplet) {

//     if (triplet[0] < triplet[1] && triplet[0] > triplet[2]) {
//         return 0;
//     } else if (triplet[0] > triplet[1] && triplet[1] > triplet[2] && triplet[1] > triplet[2]) {
//         return 1;
//     } else {
//         return 2;
//     }
// }

// function gimme(a) {
//     return a.indexOf(a.concat().sort(function (a, b) { return a - b })[1])
// }

// OK I think I get it??? 
// the prompt is asking for the index of something (the middle number), so that's why you put ".indexOf".  So inside those parentheses, you sort the array as normal, and then the [1] is calling for the MIDDLE number after the sort. THEN the a.indexOf() returns the index of that MIDDLE number.  Very cool! 

// gimme([2, 3, 1])

// console.log(gimme([2, 3, 1]))

// function repeatStr(n, s) {
//     return s.repeat(n);
// }

// console.log(repeatStr(3, "hello"))

// TIL about the .repeat() method! 


// function nbYear(p0, percent, aug, p) {

//     for (var years = 0; p0 < p; years++) {
//         p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//     }
//     return years
// }

// console.log(nbYear(1500, 5, 100, 5000));

// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
// }

// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));


function whatday(num) {
    switch (num) {
        case 1:
            return = "Sunday";
        case 2:
            return = "Monday";
        case 3:
            return = "Tuesday";
        case 4:
            return = "Wednesday";
        case 5:
            return = "Thursday";
        case 6:
            return = "Friday";
        case 7:
            return = "Saturday";
        default:
            return = "Wrong, please enter a number between 1 and 7";
    }
}

console.log(whatday(2));

function whatdays(num) {
    switch (num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return 'Wrong, please enter a number between 1 and 7';
    }
}

// WOW let’s NEVER again use W3Schoools.Like, I don’t know wtf their goal is but their content does NOT fit in our process. eff that. 

console.log(whatdays(2));
