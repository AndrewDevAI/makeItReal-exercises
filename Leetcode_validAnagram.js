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









/*var isAnagram = function(s, t) {
    /*if(s.length !== t.length){
        return false
    }
};
    function sorter (str){
        console.log(str.split('').sort())
    }

    //const sSorted = s.split("").sort("").join("")
    //const tSorted = s.split("").sort("").join("")
    //return sSorted === tSorted


sorter('hello')*/
