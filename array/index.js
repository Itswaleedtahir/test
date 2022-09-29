
  var myArray = [7, -2,1, 3, 4, 5, -1, 6];
  for (i=0;i<myArray.length;i++) 
  {
   if (myArray[i]<0)
    myArray.splice(i, 1);
}
myArray.sort();

//console.log(myArray);
console.log("Min Positive value : "+ myArray[0])