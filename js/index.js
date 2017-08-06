var game = { 
    // Counts the level of the game
    level: 0,
    // Stores the four colors
    colors: ["#blue", "#red", "#green", "#yellow"],
    // Stores the computer pattern
    computerPattern: [],
    // Stores the player's pattern
    playerPattern: [],
    // strict mode on/off
    strictMode: false, 
  };  

  function showEachUnitOfPattern(id){     
    // Target a component and add animated shake 
   //  console.log(id);  
    $(id).addClass("animated shake");
    // Stop the animation after 300ms 
    //sound(id);
   switch(id) {
    case "#blue":       $("#beep1")[0].play();
                        break;
    case "#red":        $("#beep2")[0].play();
                        break;
    case "#green":      $("#beep3")[0].play();
                        break;  
    case "#yellow":     $("#beep4")[0].play();
                        break; 
    }                                                      
    setTimeout(function() { $(id).removeClass("animated shake") }, 300);
}
  
  function clearPlayer(){
    // clear all the player patterns
    game.playerPattern = [];
   // console.log(game.playerPattern);
  }
  
  function showPatterns(){
    var i = 0;
   // console.log("shiva");  
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
   
  function generatePatterns(){
    // computer generated patterns are pushed into computerPatterns array
    game.computerPattern.push(game.colors[(Math.random()*3).toFixed()]);
    // console.log(game);
    // show the patterns to the player 
    showPatterns();
  }
  
  
  function addLevel(){
    // incrementing the current level-count
    //console.log("AddLevel");  
    game.level++;
    // Update and Display the current level to the player
    $("#level").html(game.level);
    //console.log(game);
    // generate patterns and show them to the player
    generatePatterns();
  } 
  
  
  function newGame(){
   // Setting level equal to 0
    console.log("shiva");
   game.level = 0;
    // Overwriting the array such that it has no generated patterns in it
   game.computerPattern = [];
    
    // Incrementing the level
    addLevel();
  }

  function playerPatternCheck(){
  var a = game.playerPattern.toString();
  var b = game.computerPattern.toString();
  console.log('a: ' + a);
  console.log('b'  + b);
  
    if(a === b){
        alert("Good Move!");
        addLevel();
    }
  else{
    alert("Wrong Move! Try again");
    showPatterns();  
    }
  }
  
// invoked by the player on clicking the buttons    
    function addToPlayerPattern(id){     
   // console.log("Into it"); 
    game.playerPattern.push("#" + id);

     $(id).addClass("animated shake");
    console.log("animated shake");
    // Stop the animation after 300ms 
    //sound(id);
   switch(id) {
    case "#blue":       $("#beep1")[0].play();
                        break;
    case "#red":        $("#beep2")[0].play();
                        break;
    case "#green":      $("#beep3")[0].play();
                        break;  
    case "#yellow":     $("#beep4")[0].play();
                        break; 
    }                                                      
    setTimeout(function() { $(id).removeClass("animated shake") }, 300);

    //animateOnClick(id);
      if(game.playerPattern.length === game.computerPattern.length){
        playerPatternCheck();  
      }
  }


$(document).ready(function(){
  //console.log("Hey I'm in");  
  $("#start").on("click", function(){
    newGame();
  });

  $("#levelUp").on("click", function(){
    addLevel();
  });
  
});