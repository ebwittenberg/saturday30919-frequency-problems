
const combinedString = 'fgiceric'; 

// return combined frequency when passed one string

function createFrequency(firstHalf, secondHalf) {

    let frequency = {};

    // create frequency of letters in the firstHalfString

    // loop through letters in the first half string
    for (let i = 0; i < firstHalf.length; i++) {
        // if letter exists already in the frequency
        if (frequency[firstHalf[i]]) {
            frequency[firstHalf[i]] += 1
        } else {
            // initialize the key value pair with value of 1
            frequency[firstHalf[i]] = 1;
        }
    }

    // loop through letters in second half string
    for (let i = 0; i < secondHalf.length; i++) {
        // if letter exists already in the frequency
        if (frequency[secondHalf[i]]) {
            frequency[secondHalf[i]] -= 1
        } else {
            // initialize the key value pair with value of 1
            frequency[secondHalf[i]] = 1;
        }
    }
    return frequency;

}

function isAnagramPossible(string) {
    // if string length is not even
    if (string.length % 2 !== 0) {
        return false;
    }

    let firstHalfString = string.substring(0, string.length / 2);
    let secondHalfString = string.substring((string.length / 2), string.length);

    let frequency = createFrequency(firstHalfString, secondHalfString);
    let count = 0;

    // for each key in the frequency
    for (key in frequency) {
        // if there are letters that don't already match one another
        if (frequency[key] !== 0) {
            count++;
        }
    }
    let result = count / 2;

    return result;

}

let string = "Eric Wittenberg Erric Mauldin"
function mostLetter(string) {
    let noSpaces = string.replace(/ /g, "");
    let frequency = {};

    // loop through each letter in string
    for (let i = 0; i < noSpaces.length; i++) {
        // if letter exists in frequency already
        if (frequency[noSpaces[i]]) {
            frequency[noSpaces[i]] += 1;
        } else {
            frequency[noSpaces[i]] = 1;
        }
    }
    console.log(frequency);

    let highestValue = 0;
    // check for highest value in frequency
    for (key in frequency) {
        // if current value in loop is greater than highest value
        if (frequency[key] > highestValue) {
            // reassign highest value
            highestValue = frequency[key];
        }
    }
    for (key in frequency) {
        if (frequency[key] === highestValue) {
            // if there is a tie and we wanted to include all the most used letters, instead of returning put each key into an array and return the array
            return key;
        }
    }
}

let ar = [1,2,1,2,1,3,2,2];

function pairedSocks(array) {
    // create frequency of socks
    let sockFrequency = {};
    // loop through array of socks
    array.forEach(function(sock) {
        // if sock color exists in array already, add 1 to it
        if (sockFrequency[sock]) {
            sockFrequency[sock] += 1;
        } else {
            // else initialize key value pair with value of 1
            sockFrequency[sock] = 1;
        }
    })
    console.log(sockFrequency);

    let numberOfPairs = 0;
    
    
    // loop through each colored sock group in the frequency
    for (key in sockFrequency) {
        // increment number of pairs by the rounded down total socks in color group / 2
        numberOfPairs += Math.floor(sockFrequency[key] / 2)
    }
    return numberOfPairs;


}
console.log(pairedSocks(ar));