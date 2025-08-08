const firstName = 'Carlos'
const lastName = 'Stevenson'
const thisYear = 1965
const birthYear = 1947
const fullName = firstName.concat(' ' + lastName)
const age = thisYear - birthYear
const greeting = "Hello! My name is "+ fullName +" and I am "+ age +" years old."


// Add your code right below, good luck!





// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
