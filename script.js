// Data Structure Exercise

// 1a
const jedi = [];

// 1b
jedi[0] = 'Luke';

// 1c
jedi.push('Obi-wan Kenobi');

// 1d
jedi.unshift('Yoda');

// 1e
console.log(jedi[1]);

// 1f
console.log(jedi);
jedi.pop();
console.log(jedi);

// 1g
jedi.splice(0, 1);
console.log(jedi);

// 2a
const sithLords = [
    "Darth Vader",
    "Darth Sidious",
    "Darth Maul"
];

// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

// 2c
const starWarVillians = sithLords.concat(imperialOfficers, jedi);
console.log(starWarsVillians);

// 2d
console.log(starsWarsVillians.slice(0, 2));

// 3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3P0",
    assassin: "IG-88"
};

// 3b
console.log(droids['astromech']);

// 3c
console.log(droids.protocol);

// 3d
droids.assassin = 'IG-11';
droids['assassin'] = 'IG-11';
console.log(droids);

// Bonus
console.log(starWarsVillians[0][6]);

console.log(sithLords.slice(-2, -1));

const starWarsMovies = [
    {
        episodeOne: 'The Phantom Menace',
        episodeTwo: 'Attack of the a Clone',
        episodeThree: 'Revenge of the Sith'
    },
    {
        episodeFour: 'A New Hope',
        episodeFive: 'The Empire Strikes Back',
        episodeSix: 'Return of the Jedi'
    },
    {
        episodeSeven: 'The Force Awakens',
        episodeEight: 'The Last Jedi',
        episodeNine: 'The Rise of Skywalker'
    }
];

starWarsMovies.splice(1, 0, {soloMovie: 'Solo', rougeOne: 'Rogue One'});



