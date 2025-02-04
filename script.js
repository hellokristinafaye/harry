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


[3, 2,  1]
// function gimme(triplet) {

//     if (triplet[0] < triplet[1] && triplet[0] > triplet[2]) {
//         return 0;
//     } else if (triplet[0] > triplet[1] && triplet[1] > triplet[2] && triplet[1] > triplet[2]) {
//         return 1;
//     } else {
//         return 2;
//     }
// }

function gimme(a) {
    return a.indexOf(a.concat().sort(function (a, b) { return a - b })[1])
}

// OK I think I get it??? 
// the prompt is asking for the index of something (the middle number), so that's why you put ".indexOf".  So inside those parentheses, you sort the array as normal, and then the [1] is calling for the MIDDLE number after the sort. THEN the a.indexOf() returns the index of that MIDDLE number.  Very cool! 

gimme([2, 3, 1])

console.log(gimme([2, 3, 1]))
