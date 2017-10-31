module.exports = {
  Filter: function Filter(filterBy, filterStr = "", array) {
    let toReturn = {};
    let queryString = "array[book]";
    for (let i=0;i<filterBy.length;i++) { // Build filter query
      queryString += '["' + filterBy[i] + '"]';
    }

    for (let book in array) {
      if (eval(queryString).toLowerCase().indexOf(filterStr.toLowerCase()) != -1) {
        toReturn[book] = array[book];
      }
    }

    return toReturn;
  }
};
