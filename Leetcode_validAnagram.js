/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const sArraySort = s.split("").sort().join("");
    const tArraySort = t.split("").sort().join("");
    return sArraySort === tArraySort;
  };










