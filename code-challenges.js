// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// declare function removeFirstItemThenShuffle that takes an array as argument
const removeFirstItemThenShuffle = (array) => {
    // // remove the first item at index 0 in the array using .shift method and assign to new array
    array.shift()
    // go through entire array until you get to the last value
    // decrement length becuase the number of random numbers assigned will decrease with every iteration of the loop
    for(let i = array.length - 1; i > 0; i--) {
        // make a variable that holds a random number from 0 to array.length - 1
        const j = Math.floor(Math.random() * i)
        // hold the value of the current index as a temporary variable
        const temp = array[i]
        // set the value of the current index to another value in the array using the random index generated in line 22
        array[i] = array[j]
        // set the temp varaible to the random index value of array
        array[j] = temp
    }
    return array
}

console.log(removeFirstItemThenShuffle(collections))
console.log(removeFirstItemThenShuffle(collections))
console.log(removeFirstItemThenShuffle(collections))

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// declare function cubeNumThenSUm to take an array as argument
const cubeNumThenSum = (array) => {
    let totalSum = 0
    // first map through array and cube all numbers
    // reduce the array to get the sum
    let cubedThenSumArray = array.map(value => value ** 3).reduce((accumulator, currentValue) => accumulator + currentValue)
    return cubedThenSumArray
}

// console.log(cubeNumThenSum(cubeAndSum1))
// console.log(cubeNumThenSum(cubeAndSum2))

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// declare a function that will accept array as argument
const minMaxOnly = (array) => {
    // create a new array that will hold the min and max
    let singleMinMaxArray = []
    // use push method to push min and max values into the empty array
    // using the push method will return the new length of the array
    singleMinMaxArray.push(Math.min(...array), Math.max(...array))
    // return the array with min and max
    return singleMinMaxArray
}

// console.log(minMaxOnly(nums1))
// console.log(minMaxOnly(nums2))


// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

// declare a function that takes string as argument
const everyOtherCharUpCase = (string) => {
    // convert string to an array
    let stringToArray = string.split("")
    // map through the entire array and look at value and index
    return stringToArray.map((character, index) => {
        // if the index value is odd, uppercase
        if(index % 2 === 1) {
            return character.toUpperCase()
        // else just return character
        } else {
            return character
        }
    // then join the elements in array to form back to string
    }).join("")
}

// console.log(everyOtherCharUpCase(testString1))
// console.log(everyOtherCharUpCase(testString2))

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// declare function noDuplicates that takes 2 arrays
const noDuplicates = (array1, array2) => {
    // concat both arrays first and assign that array to new array variable
    let concatArray = array1.concat(array2)
    // filter through the new array
    return concatArray.filter((value, index) => {
        // use indexOf to get the first instance of that variable
        // if the index of that first instance is equal to the current index, keep that number in the array; otherwise filter it out
        return concatArray.indexOf(value) === index
    })
}

// console.log(noDuplicates(arr1,arr2))

//  S T R E T C H   R E F A C T O R  //

const noDuplicates2 = (...array) => {
    // assign new variable who hold concat array--use spread operator
    let concatArray = [].concat(...array)
    // filter through the new array
    return concatArray.filter((value, index) => {
        // use indexOf to get the first instance of that variable
        // if the index of that first instance is equal, keep that number in the array
        return concatArray.indexOf(value) === index
    })
}

var arr3 = [8, 9, 2, 3, 4, 5, 2, 1]
// console.log(noDuplicates2(arr1,arr2))
// testing with addition of 3rd array
// console.log(noDuplicates2(arr1,arr2,arr3))