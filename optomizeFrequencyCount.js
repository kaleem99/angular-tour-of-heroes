const optomizeFrequencyCount = (arr) => {
    let objCount = {};
    let valCount = 0;
    let val = 0;
    for (let i = 0; i < arr.length; i++) {
      if (objCount[arr[i]]) {
        objCount[arr[i]]++;
      } else {
        objCount[arr[i]] = 1;
      }
    }
    for (let key in objCount) {
      if (objCount[key] > valCount) {
        valCount = objCount[key];
        val = key;
      }
    }
    return val;
  };
  
  let arr = [4, 1, 2, 2, 3, 1, 4, 4, 2]
  console.log(optomizeFrequencyCount(arr));
  