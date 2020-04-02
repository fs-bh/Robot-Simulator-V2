document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!

  // make an array of the things we want to capture
  let arrowKeys = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];

  // capture keypress event and delegate to function
  document.addEventListener('keydown', function(event){
    if (arrowKeys.includes(event.key)){

      event.preventDefault();
      createMoveItem(event.key);

    } else {

      console.log('some other key');

    }
   
  });

  function createMoveItem(eventKey){
    
  }

});
