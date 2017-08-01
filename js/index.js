var game = {
    // Counts the level of the game
    level: 0,
    // Stores the four colors
    colors: ["#blue", "#red", "#green", "#yellow"],
    // Stores the computer pattern
    computerPattern: [],
    // Stores the player's pattern
    playerPattern: [],
    // sounds for the game
    
    // strict mode on/off
    strictMode: false, 
  };  


  
  
  
  
  
 
 


 
  
  function showEachUnitOfPattern(id){     
    // Target a component and add animated shake 
   //  console.log(id);    
    $(id).addClass("animated shake");
    // Stop the animation after 300ms 
    setTimeout(function() { $(id).removeClass("animated shake") }, 300);
  }
  
  function clearPlayer(){
    // clear all the player patterns
    game.playerPattern = [];
   // console.log(game.playerPattern);
  }
  
  function showPatterns(){
    var i = 0;
    console.log("shiva");  
    // call the inner-function for every 600ms until the entire computer generated pattern is shown to the player
    var patternscall = setInterval(function(){
      // if i is less than the length of computer-generated patterns array
      if(i < game.computerPattern.length){
        
        // shows each part of the pattern to the player
        showEachUnitOfPattern(game.computerPattern[i]);
        i++;
      }
      else
        // After showing the entire pattern, stop executing the inner-function
        clearInterval(patternscall);
      
    }, 1000);
    
    clearPlayer();
  }
  

  /* function playerPatternCheck(id){   
   
    
    if(game.playerPattern[game.playerPattern.length-1] !== game.computerPattern[game.computerPattern.length - 1]){ 
    //  console.log("Hey"); 
      if(game.strictMode)
        alert("Game Over! Try again!!"); 
      else{
      //  console.log("Shiva");  
        alert("Wrong move! Please follow the pattern"); 
        showPatterns(); } 
    /*  }
      else{
        alert("Good move");
        if(game.playerPattern.length === game.computerPattern.length){ 
          if(game.level === 20)
          alert("Congrats!! You won");
          else{
            alert("Next Level");
          //  addLevel();
          }
            
          
        }
          
        
      }
      }
     */   
     
   // }
  //}
 */
  
  playerPatternCheck(){
    game.playerPattern.
    
  }
  
  
// invoked by the player on clicking the buttons    
    function addToPlayerPattern(id){     
    console.log("Into it");  
    game.playerPattern.push("#" + id);
      if(game.playerPattern.length === )
   // playerPatternCheck("#" + id);
  }




  
  function generatePatterns(){
    // computer generated patterns are pushed into computerPatterns array
    
    game.computerPattern.push(game.colors[(Math.random()*3).toFixed()]);
    // console.log(game);
    // show the patterns to the player 
    showPatterns();
  }
  
  
  function addLevel(){
    // incrementing the current level-count
    game.level++;
    // Update and Display the current level to the player
    $("#level").html(game.level);
    //console.log(game);
    // generate patterns and show them to the player
    generatePatterns();
  } 
  
  
  function newGame(){
   // Setting level equal to 0
   game.level = 0;
    // Overwriting the array such that it has no generated patterns in it
   game.computerPattern = [];
   // console.log("shiva");
    // Incrementing the level
    addLevel();
  }




$(document).ready(function(){
  
  newGame();
});