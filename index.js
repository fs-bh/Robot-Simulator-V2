document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!

  // make an array of the things we want to capture
  let arrowKeys = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];

  // capture keypress event and send to function
  document.addEventListener('keydown', function(event){
    if (arrowKeys.includes(event.key)){

      event.preventDefault();
      createMoveItem(event.key);

    } else {

      console.log('some other key');

    }
   
  });

  // grab the parent/container to put the li's in
  const movesContainer = document.querySelector('#moves-container');

  // define a function to create li's (commandLi's)
  function createMoveItem(eventKey){
    commandString = eventKey.slice(5);
    // create the li
    let commandLi = document.createElement("li")
    // append the commandstring into it as text
    commandLi.append(commandString);
    // append the list item in to the container
    movesContainer.append(commandLi);
  }

  // listen for clicks on the Move! button
  document.querySelector('#move-button').addEventListener('click', function(event){
    if (movesContainer.childElementCount > 0){
      autoMove();
    } else {
      console.log('no moves to make!');
    }
  });

  function autoMove(){
    const mover = setInterval(function(){
      if (movesContainer.childElementCount > 0){
        makeMove();
      } else {
        clearInterval(mover);
        console.log('moves finished!');
      }
    }, 250);
  }

  function makeMove(){
    // grab the first list item
    const commandLi = movesContainer.firstElementChild;

    // grab the text from that item
    let command = commandLi.innerText || commandLi.textContent;

    // delete the list item after capuring the text
    commandLi.remove();

    // make it lowercase
    command = command.toLowerCase();

    // use the move command in movement.js
    move(command);
  }

});
