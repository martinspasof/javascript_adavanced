// Given is an array of users: users = ["Maria", "Ada", "Ivan"];
// Task: write the code which will create a NEW ARRAY (i.e. do not change the users array), with alphabetically sorted (in ascending order) elements of users array.

users = ["Maria", "Ada", "Ivan"];

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */
function sortUserNames(users) {
    for (let i = 0; i < users.length - 1; i++) {
        for (let j = i + 1; j < users.length; j++) {
            if (users[i] > users[j]) {
                [users[i], users[j]] = [users[j], users[i]];
            }
        }
    }
    return users;
}

let deepCopyArrUsers = JSON.parse(JSON.stringify(users));
let usersSortedAlphabetically = sortUserNames(deepCopyArrUsers);

/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// TEST CASE (do not modify):
console.log(`users:\n\t${users}\n`);
console.log(`usersSortedAlphabetically:\n\t${usersSortedAlphabetically}`);

/* -------------------------------------------------------------------------- */
/*                              EXPECTED OUTPUT:                              */
/* -------------------------------------------------------------------------- */
// users:
//  Maria,Ada,Ivan
//
// usersSortedAlphabetically:
//  Ada,Ivan,Maria