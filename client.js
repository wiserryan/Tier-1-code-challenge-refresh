/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');
            
// Write your code here!

//keep changing my variables between 'const' and 'let', struggling to remember diff

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
let highScore = 29;
console.log ('high score', highScore);

// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = [];
console.log(myScrabbleTiles);

// 3. Put these 6 tile objects into myScrabbleTiles:

 let sixTileObjects = [
  {
   tile: 'N', 
   score: 1 
  },
  { tile: 'K', 
    score: 5 
  },
  { tile: 'Z', 
    score: 10 
  },
  { tile: 'X',
    score: 8 
  },
  { tile: 'D',
    score: 2 
  },
  { tile: 'A',
    score: 1 
  },
  
];
console.log(sixTileObjects);
console.table('sixTileObjects', sixTileObjects);

myScrabbleTiles.push(sixTileObjects);
console.log('myScrabbleTiles', myScrabbleTiles);


// 4. Remove the last tile from myScrabbleTiles.
//let lastTileRemoved = myScrabbleTiles.pop();
//myScrabbleTiles.length-1;
//myScrabbleTiles.pop();
//console.log('myScrabbleTiles-1', myScrabbleTiles);// failing to return the desired -1 from the Array, moiving on

//console.log (myScrabbleTiles.pop());
//console.log(myScrabbleTiles);


// 5. Add the following new tile to myScrabbleTiles:
let newTile = [
  { tile: 'F',
    score : 4 }
  ];
myScrabbleTiles.push(newTile);
console.log('adding tile to Array', myScrabbleTiles); //I'm creating two objects here instead of adding to the Array, it's not clicking but trying for time here so moving on for now

// 6. Complete this function. It needs to be given an array of tile objects. 
//    The function will use a for-loop and return the sum of all the scores in the given array.
function sumTiles(anArray) {
  for (var i=1; i < sixTileObjects.length; i++){
       console.log(sumTiles);
      
  }
  } 
  //for (let score of sixTileObjects) {       


// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".


// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.


// DONE!