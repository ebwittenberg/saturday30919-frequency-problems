// Given two arrays write a function to find out if two arrays have the same frequency of digits.

const one = [[1,2,3,4], [1,2,3,4,5]];

function frequencyCounter(singleArray) {
    // returns dictionary of frequencies for one array
    // initialize empty dictionary
    let frequencyObj = {};

    singleArray.forEach(function(num) {
        // for each number in the array
        // if the number key exists in frequency object
        if (frequencyObj[num]) {
            // increment value
            frequencyObj[num] += 1
        // if number not already in frequency object
        } else {
            // initialize that key value pair with value of one
            frequencyObj[num] = 1;
        }
    })

    return frequencyObj;
}


function compareFrequencies(combinedArray) {
    // gets passed the combined array, returns true or false

    // create a frequency obj for both arrays
    const frequency1 = frequencyCounter(combinedArray[0]);
    const frequency2 = frequencyCounter(combinedArray[1]);

    // if length of both frequencies is not the same, return false right away
    if (frequency1.length !== frequency2.length) {
        return false;
    }

    // compare both frequency objs
    
    // loop through each pair in first frequency
    for (key in frequency1) {
        // if that key does not exist in second frequency, returns false
        if (!frequency2[key]) {
            return false
        }
        // if both key's values are not the same, return false
        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }
    return true;

}


// // Given two arrays write a function to find out if two arrays have the same frequency of digits BUT using only one frequency


// returns combined frequency of BOTH arrays
function frequencyCounter(combinedArray) {
    let combinedFrequency = {};
    // for each number in first array
    combinedArray[0].forEach(function(num) {
        // if that key already exists in the combined frequency
        if (combinedFrequency[num]) {
            combinedFrequency[num] += 1;
        // if that key doesn't already exist, initiailize the key value pair
        } else {
            combinedFrequency[num] = 1;
        }
    })
    // do the same for second array
    combinedArray[1].forEach(function(num) {
        // if that key already exists in the combined frequency
        if (combinedFrequency[num]) {
            combinedFrequency[num] -= 1;
        // if that key doesn't already exist, initiailize the key value pair
        } else {
            combinedFrequency[num] = 1;
        }
    })
    return combinedFrequency;
}

// passed the combined frequency from frequencyCounter
function sameFrequencies(combinedArray) {

    if (combinedArray[0].length !== combinedArray[1].length) {
        return false;
    }

    let combinedFrequency = frequencyCounter(combinedArray);


    // loop through keys in the combined frequency
    for (key in combinedFrequency) {
        // if the key's value is not even return false
        if (combinedFrequency[key] !== 0) {
            return false;
        }
    }
    return true;
}







const two = [[1,2,3,5], [1,4,9,25,50]];

// Given two arrays write a function to determine if each value in our first array contains a corrsponding value to the second power in the second array.


// return a frequency
function frequencyCounter(combinedArray) {
    // initialize empty object for combined frequency
    let combinedFrequency = {};
    // look at values in first array, add squared values to the combined frequency
    combinedArray[0].forEach(function(number) {
        // if the number to the second power exists in frequency already
        if (combinedFrequency[number ** 2]) {
            // increment
            combinedFrequency[number ** 2] += 1;
        }
        else {
            // initialize the key value pair
            combinedFrequency[number ** 2] = 1;
        }
    })
    // look at values in second array, check if values already exist in frequency
    combinedArray[1].forEach(function(number) {
        // if number exists in frequency already
        if (combinedFrequency[number]) {
            // decrement that key's value by one
            combinedFrequency[number] -= 1;
        // else if number doesn't exist already
        } else {
            combinedFrequency[number] = 1;
        }
        
    })
    return combinedFrequency;
}

// return true if each value in first array contains corresponding value to second power in second array
function compareSquaredFrequencies(combinedArray) {
    if (combinedArray[0].length !== combinedArray[1].length) {
        return false;
    }
    // creates combined frequency using function above called frequencyCounter
    let newFrequency = frequencyCounter(combinedArray);

    // loop through each key in the frequency, if not equal to zero, return false
    for (key in newFrequency) {
        // if the value at that key in the frequency is not zero
        if (newFrequency[key] !== 0) {
            return false;
        }
    }
    // if the above for loop manages to run all the way through
    return true;
}







// Given two positive integers write a function to find out if two numbers have the same frequency of digits. 

const number1 = 123;
const number2 = 123;

// returns combined frequency
function combineNumbers(num1, num2) {
    // initialize empty frequency
    let frequency = {};

    // convert numbers to strings
    stringNum1 = num1.toString();
    stringNum2 = num2.toString();

    // loop through each number in stringNum1
    for (let i = 0; i < stringNum1.length; i++) {
        // if that number exists in the frequency already
        if (frequency[stringNum1[i]]) {
            frequency[stringNum1[i]] += 1
        } else {
            frequency[stringNum1[i]] = 1;
        }
    }

    // loop through each number in stringNum2
    for (let i = 0; i < stringNum2.length; i++) {
        // if that number exists in the frequency already
        if (frequency[stringNum2[i]]) {
            frequency[stringNum2[i]] -= 1
        } else {
            frequency[stringNum2[i]] = 1;
        }
    }
    return frequency;
}

function sameFrequenciesNumbersVersion(num1, num2) {

    if (num1.toString().length !== num2.toString().length) {
        return false;
    }

    // creating combined frequency of numbers converted to strings
    let combinedFrequency = combineNumbers(num1, num2);

    // loop through keys in the combined frequency
    for (key in combinedFrequency) {
        // if the key's value is not even return false
        if (combinedFrequency[key] !== 0) {
            return false;
        }
    }
    return true;
}









const stringOne = 'pie';
const stringTwo = 'pip';


// returns combined frequency
function combineStrings(string1, string2) {
    // initialize empty frequency
    let frequency = {};

    // loop through each number in stringNum1
    for (let i = 0; i < string1.length; i++) {
        // if that number exists in the frequency already
        if (frequency[string1[i]]) {
            frequency[string1[i]] += 1
        } else {
            frequency[string1[i]] = 1;
        }
    }

    // loop through each number in stringNum2
    for (let i = 0; i < string2.length; i++) {
        // if that number exists in the frequency already
        if (frequency[string2[i]]) {
            frequency[string2[i]] -= 1
        } else {
            frequency[string2[i]] = 1;
        }
    }
    return frequency;
}
// console.log(combineStrings(stringOne,stringTwo));

function checkIfAnagram(string1, string2) {

    if (string1.length !== string2.length) {
        return false;
    }

    // creating combined frequency of numbers converted to strings
    let combinedFrequency = combineStrings(string1, string2);

    // loop through keys in the combined frequency
    for (key in combinedFrequency) {
        // if the key's value is not even return false
        if (combinedFrequency[key] !== 0) {
            return false;
        }
    }
    return true;
}


// return combined frequency when passed one string
const combinedString = 'ericerik';











