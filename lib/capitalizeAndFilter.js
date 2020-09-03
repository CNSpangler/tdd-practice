const capitalizeAndFilter = (arr) => {
  return arr
    .filter(string => string.charAt(0) !== 'f')
    .map(string => string.charAt(0).toUpperCase() + string.slice(1));

  // const result = [];
  // for(let i = 0; i < arr.length; i++) {
  //   const string = arr[i];

  //   if(string.charAt(0) !== 'f') {
  //     result.push(string.charAt(0).toUpperCase() + string.slice(1));
  //   }
  // }
  // return result;
};

module.exports = capitalizeAndFilter;
