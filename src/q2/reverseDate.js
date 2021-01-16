
function reverseDate (userDate) {

  if(new Date(userDate) == 'Invalid Date') {
    return 'Invalid format'
  }
  
  const [mouth, day, year] = userDate.split('/')
  
  return `${year}${mouth}${day}`;
}

module.exports = reverseDate;