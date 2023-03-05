function findMissingPrime(arr) {
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);
    
    for (let i = minVal; i <= maxVal; i++) {
      if (isPrime(i) && !arr.includes(i)) {
        return i;
      }
    }
    
    return "No missing prime numbers";
  }
  
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  // Example usage:
  const arr1 = [2, 3, 7, 11, 13, 17, 19, 23, 29];
  console.log(findMissingPrime(arr1)); 
  