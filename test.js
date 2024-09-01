const players = [
    {name: "Ted", points:500},
    {name: "Ron", points:200},
    {name: "Ben", points:300},
];
const top = players
 .sort ((p1, p2) => p1.points + p2.points)
 .map ((p) => p.name + " are punctajul de" + p.points);

console.log(top);

