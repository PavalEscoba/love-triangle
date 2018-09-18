/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation


    var result = 0;
    for(var i=0; i<preferences.length; i++){


      var firstBeloved = preferences[i] -1;

      var secondBeloved = preferences[firstBeloved] - 1;

      var thirdBeloved = preferences[secondBeloved] - 1;
      if(thirdBeloved == i){
        result +=1;
      }

    }
    return Math.floor(result/3);
};