interface obj {
    breed: string;
    age: number;
  }
  
  const dog: obj = {
    breed: "poodle",
    age: 6,
  };
  
  // Getting both keys and values from object
  for (const[key, value] of Object.entries(dog)) {
      /* console.log(`${key}: ${value}`) */
  }
  
  // Getting only keys from object
  for (const key of Object.keys(dog)){
      console.log(`${key}`)
  }
  
  // Getting only values from object
  for (const value of Object.values(dog)){
      console.log(`${value}`)
  }
  