// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ];

const findTheOldest = function(arr) {
    let oldest = 0;
    let eldest = "";

    for (const obj of arr) {
        if (!obj.yearOfDeath) {
            const date = new Date();
            obj.yearOfDeath = date.getFullYear();
        }

        obj.age = obj.yearOfDeath - obj.yearOfBirth;
        // console.log(obj.age);

        if (oldest <= obj.age) {
            oldest = obj.age;
            eldest = obj.name;
            // console.log(eldest);
        }
    }
    
    return eldest;
};

// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
