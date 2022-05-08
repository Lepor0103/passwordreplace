export function isPasswordValid(password) {
    console.log(password)
    let result = password
    result = result.replace(/\s/g, "")
    console.log(result)
   
    if (result.length >= 10) {
      return true
    }
    if (result.length)
      return false
    
  }
      
  