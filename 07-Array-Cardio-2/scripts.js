const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

/* === Some and Every Checks === */
const currYear = new Date().getFullYear();

// Is at least one person 19 or older?
const isNineteenOrOlderThere = people.some(
  (person) => currYear - person.year >= 19
);
console.log(isNineteenOrOlderThere);

// Is everyone 19 or older?
const isAllNineteenOrOlder = people.every(
  (person) => currYear - person.year >= 19
);
console.log(isAllNineteenOrOlder);

/* === Find Method === */

// Find the comment with ID = 823423
const personWithSpecificId = comments.find((comment) => comment.id === 823423);
console.log(personWithSpecificId);

/* === Find Index Method === */

// Find the index of the comment with ID = 823423
const indexOfId = comments.findIndex((comment) => comment.id === 823423);
console.log(indexOfId);

// Delete the comment with the index found in last step
const newComments = [
  ...comments.slice(0, indexOfId),
  ...comments.slice(indexOfId + 1),
];
console.log(newComments);
