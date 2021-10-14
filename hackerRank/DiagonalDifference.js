/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = 1 + 5 + 9 = 15. 
The right to left diagonal = 3 + 5 + 9 = 17. 
Their absolute difference is |15 - 17| = 2.
*/

{
    function diagonalDifference(arr) {
        var num1 = 0;
        var num2 = 0;
      
      for(var i = 0; i < arr.length; i++){
        num1 += arr[i][i];
        num2 += arr[i][arr.length-1-i];
      }
      return Math.abs(num1 - num2);
    };
}