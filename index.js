// Code your solution here
function findMatching(array, string){
    return array.filter(name => name.toLowerCase() === string.toLowerCase())
   
  }

  function fuzzyMatch(array, string){
    return array.filter(name => name.charAt(0) === string.charAt(0) && name.charAt(1) === string.charAt(1))
  }


  function matchName(array, string) {
    return array.filter(object => object.name === string)
  }