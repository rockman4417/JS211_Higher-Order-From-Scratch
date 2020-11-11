//.map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.
//.reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
//.filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.


let array = [1,2,6,3,4,5,6,12]


const mapFromScratch = (arr, func) => {
  let newArray = []
  
  for(let i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i]))
  }
  console.log("mapFromScratch" + newArray)
}

const addTwo = (x) => {
 
  return x + 2
}

mapFromScratch(array, addTwo)


const reduceFromScratch = (arr) => {

}

const filterFromScratch = (arr, searchTerm) => {
  let newArray = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === searchTerm){
      newArray.push(arr[i])
    }
    
  }
  console.log("filterFromScratch" + newArray)
}

filterFromScratch(array, 6)

