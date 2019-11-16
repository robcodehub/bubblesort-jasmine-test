const bubbleSort = require('./bubblesort.js')

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a simple array of numbers', function(){
    expect( bubbleSort([2,3,1]) ).toEqual( [1,2,3] );
  });

  it('handles a single number', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles strings with an error message', function(){
    expect( bubbleSort(["two", "three", "one"]) ).toEqual( "please enter an array of numbers" );
  });

  it('handles anything that is NaN with an error message', function(){
    expect( bubbleSort([1,  NaN, "one"]) ).toEqual( "please enter an array of numbers" );
  });

  it('handles duplicate numbers in an array', function(){
    expect( bubbleSort([3, 3, 1, 2, 2]) ).toEqual( [1, 2, 2, 3, 3]);
  });


});



