const findTheOldest = function(peoples) {
    for(people of peoples){
        if (people.yearOfDeath == undefined){
            const today = new Date()
            people.alive = today.getFullYear()
            console.log(people.alive, today, today.getFullYear())
        }
    }
    let arrayByAge = peoples.sort((first, second) => {
        const firstAge = (first.yearOfDeath ||first.alive) - first.yearOfBirth
        const secondAge = (second.yearOfDeath || second.alive) - second.yearOfBirth
        return firstAge - secondAge
    })
    return arrayByAge.at([-1])
};

// Do not edit below this line
module.exports = findTheOldest;
