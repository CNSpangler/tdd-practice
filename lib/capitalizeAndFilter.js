const capitalizeAndFilter = (arr) => {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    const string = arr[i];
    result.push(string.charAt(0).toUpperCase() + string.slice(1));
  }
  return result;
};

module.exports = capitalizeAndFilter;
