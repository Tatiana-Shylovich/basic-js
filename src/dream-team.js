const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let sortedMembers = []
  let letters = []
  if (Array.isArray(members) === false) {
    return false
  } else {
    sortedMembers = members.filter(item => typeof item === 'string')
  }
  for (let i = 0; i < sortedMembers.length; i++) {
    let names = sortedMembers[i].trim().toUpperCase()
    letters.push(names[0])
  }
  return letters.sort().join('')
}

module.exports = {
  createDreamTeam
};
