/*
 * Max entry in array
 */
var maxValue = function( array ){
	return Math.max.apply( Math, array );
};
console.log('Max - Original Array: ', [1,2,3], ' max: ', maxValue([1,2,3]));

/*
 * Unique entries of array
 */

var unique = function(array) {
	return array.filter(function(entry, index, array){
		return array.indexOf(entry) === index;
	});
};
console.log('Unique - Original Array: ', ['a','b','c','a'], ' Unique: ', unique(['a','b','c','a']));

/*
 * First elem of array
 */
var first = ['a','b','c','a'].shift();
console.log('First Elem - Original Array: ', ['a','b','c','a'], ' First: ', first);

/*
 * Last elem of array
 */

var last = ['a','b','c','a'].pop();
console.log('Last Elem - Original Array: ', ['a','b','c','a'], ' Last: ', last);	 

/*
 * Add at front of array
 */
var front = ['a','b','c','a'].unshift('1');
console.log('Add in front - Original Array: ', ['a','b','c','a'], ' Result: ', front);	 	

/*
 * Last n of array
 */
var myArray = ['a','b','c','a'],
	tempArray = [],
	n =3;
for(var i=1; i <= n; i++) {
	var ind = myArray.length - i;
	tempArray.push(myArray[ind]);
}
console.log('Last n (3) of array - Original Array: ', ['a','b','c','a'], ' Result: ', tempArray.reverse());	

/*
 * Rest in array after index n
 */

var n = 2,
	myArray = ['a','b','c','a'],
	tempArray = [];
	//check if n+1 > myArray.length
for(var i=n+1; i < myArray.length; i++) {
	tempArray.push(myArray[i]);
}
console.log('Rest after index (2) - Original Array: ', myArray, ' Result: ', tempArray);	

/*
 * IndexOf and customIndexOf
 */
Array.prototype.customIndexOf = function(item) {
     for (var i = 0; i < this.length; i++) {
         if (this[i] === item) { return i; }
     }
     return -1;
}
console.log('IndefOf/customIndexOf - Original Array: ', myArray, ' indexOf: ', myArray.indexOf('c'), ' customIndexOf ', myArray.customIndexOf('c'));


/*
 * Flatten array
 _.flatten([1, [2], [3, [[4]]]]);
	=> [1, 2, 3, 4];
 */
var flatten = function(arr, currentValue){
	this.temp = [];
	function flattenArray(arr, currentValue){
		this.temp = this.temp || [];
    	var arrfunc = function(val){

				if (val instanceof Array) { flattenArray(val); }
	    		else { return val; }

    		}
    	for(var i = 0; i < arr.length; i++){
			var res = arrfunc(arr[i]);
			if(res){
				this.temp.push(res);
			}
    	}
    	return this.temp;
	}
	
	return flattenArray(arr, currentValue);
};

var flatten1 = flatten([1, [2], [3, [[4]]]]);
console.log('flatten- Original Array: ', [1, [2], [3, [[4]]]], ' res: ', flatten1);


/*
 * Arrays to object
 object(['a', 'b', 'c'], [1, 2, 3]);
 object(['a', 1], ['b', 2], ['c', 3]);
	=> {a:1, b:2, c:3};
 */
var object = function() {
	function toObject() {
		var args = Array.prototype.slice.call(arguments, 0)[0];
		
		var tempObj = {};
		if(args.length == 2){
			var keys = args[0];
			var vals = args[1];
			for(var i=0; i<keys.length; i++){
				if(keys[i] && vals[i]){
					tempObj[keys[i]] = vals[i];
				}
			}
			
		} else if(args.length > 2){
			for(var i=0; i<args.length; i++){
				if(args[i][0] && args[i][1]){
					tempObj[args[i][0]] = args[i][1];
				}
				
			}
		}

		return tempObj;
	}
	return toObject(arguments);
};

var obj = object(['a', 'b', 'c'], [1, 2, 3]);
console.log('to object - Original Array: [a,b,c] [1, 2, 3] res: ', obj); 

var obj1 = object(['a', 1], ['b', 2], ['c', 3]);
console.log('to object - Original Array: [a,b,c] [1, 2, 3] res: ', obj); 

/*
 * Without 
 *
 */
var myArray = [1, 2, 1, 0, 3, 1, 4];
var without = function() {
	var tempArray =  tempArray  || arguments[0],
	arr = arr || arguments[0];
	var value = arguments.length <=2 ? arguments[1] : Array.prototype.slice.call(arguments, 1);

	var recFunc = function() {
		var index = arr.indexOf(value);
		if(index != -1){
			tempArray.splice(index, 1);
			return tempArray;
		}
	}

	for(var i = 0; i < arr.length; i++){
		if(value instanceof Array){
			for(var j =0; j < value.length; j++){
				without(tempArray, value[j]);
			}
		}
		else{
			recFunc();
		}
	}
	return tempArray;
}

console.log("without: ", without([1, 2, 3, 4, 5], [5, 2, 10],[8,1]));

/*
 * Union 
 *
 */
var union = function(){
	tempArray = [];
	var args = Array.prototype.slice.apply(arguments);
	
	for(var i=0; i<args.length; i++){
		
		tempArray = tempArray.concat(args[i])
	}
	
	var uniqueArray = tempArray.filter(function(currentElement, arrayIndex, array) {
		
    	return array.indexOf(currentElement) == arrayIndex;
	})
	return uniqueArray;
}

console.log("Union: ",union([1,2,3], [3,4,5], [5,6,7] ));

/*
 * Array Intersection 
 *
 */

var intersection = function() {
	
	var	args = Array.prototype.slice.apply(arguments),
		currentArray = tempArray ||  args[0],
		tempArray = tempArray || [],
		index=index || 0;

		var findIntersection = function() {
			if(args[index+1]){
				
				for(var i=0; i<currentArray.length; i++){


					if(args[index+1].indexOf(currentArray[i]) !=-1 && tempArray.indexOf(currentArray[i]) == -1){
						tempArray.push(currentArray[i]);
					}
				}
			}
			return tempArray;
		}
	
	
		for(var j =0; j<args.length; j++){
			findIntersection();
		}
	return tempArray
	
}

console.log("intersection: ", intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) );