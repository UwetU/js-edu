/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let weekEducation = 800;
      
      weekEducation = weekEducation / config[focus];

      if(knowsProgramming == false){
        let programming = weekEducation;
        weekEducation = weekEducation * 0.625 + programming;
      }
      return Math.ceil(weekEducation);
  };
  