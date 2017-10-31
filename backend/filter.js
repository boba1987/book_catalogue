module.exports = {
  Filter: function Filter(filterBy, filterStr = "", array) {
    let toReturn = {};
    for (let book in array) {
      if (array[book][filterBy].toLowerCase().indexOf(filterStr.toLowerCase()) != -1) {
        toReturn[book] = array[book];
      }
    }

    return toReturn;
  }
};
