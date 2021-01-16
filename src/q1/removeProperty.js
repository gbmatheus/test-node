
function removeProperty(obj, propName) {

  if (obj[propName] === undefined) {
    return false;
  }

  delete(obj[propName])
  
  if(obj[propName] !== undefined) {
    return false;
  }

  return true;
}
  
module.exports = removeProperty;