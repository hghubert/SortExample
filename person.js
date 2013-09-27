/* Sample person object:
{
  "name": "John W. Smith",
  "familyName": "Smith",
  "birthDayNumber": 2418938.000000, // Julian Calendar Day. It's just a floating-point number. Higher values are later dates.
  "birthCountry": "United States"
}*/

/* Requirements - Write a reusable library that allows users to sort lists of persons by multiple keys. 
	 For example, users may wish to sort by name only. Some may sort by last name and 
	 birth day (matching last names would be together in the result and sub-sorted by birth day).
*/	 

function Person(name, familyName, birthDayNumber, birthCountry){
  this.name = name;
  this.familyName = familyName;
  this.birthDayNumber = birthDayNumber;
  this.birthCountry = birthCountry;
}

var sortBy = function(){
    var numArgs = arguments[0].length;
    var args = arguments[0];
    var retVal = 0;
    
    // start at the parameter after the list
    return function(a, b){
      // keep outside the loop of performance
      var arg;
      for(var i=0;i<numArgs;i++){
        arg = args[i];
        retVal = ((a[arg] < b[arg]) ? -1 : ((a[arg] > b[arg]) ? 1 : 0));
        if (retVal !== 0){
          break;
        }
      }
      
      return retVal;
    }
};

Array.prototype.sortBy = function(){
  this.sort(sortBy(arguments));
}

// enhancements include
// * ascending versus descending
// * allow custom function to pre-process the data before running the sort