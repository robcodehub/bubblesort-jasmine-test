
function bubbleSort(array) {


  for (let i=0; i<array.length; ++i) {

    if(typeof array[i] !== 'number') {
      return "please enter an array of numbers"
    }

    if(array.length === 1) {
      return array;
    }

    let current = array[i];
    let next = array[i+i];

    if (current > next) {
      array[i] = next;
      array[i+i] = current;
    }

  

    console.log("array i====", array[i])
    console.log("array i+1====", array[i+1])

    console.log(`current array loop ${i} ===`, array)

  }

  return array;

}


module.exports = bubbleSort;
