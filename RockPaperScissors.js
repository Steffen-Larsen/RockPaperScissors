const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput==='rock') {return userInput}
    else if (userInput==='paper') {return userInput}
    else if (userInput==='scissors') {return userInput}
    else (console.log('Error'));
  };
  
  const getComputerChoice = () => {
   let randomNumber = (Math.floor(Math.random()*3))
   if(randomNumber === 0) {return 'rock'}
   else if (randomNumber === 1) {return 'paper'}
   else if (randomNumber === 2) {return 'scissors'}
   else (console.log('whoops'));
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';}
  
    else if (userChoice ==='rock') {
      if(computerChoice ==='paper') {
        return 'The computer won!';}
        else {return 'You won!';}
    }
  
    else if (userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'The computer won!'}
        else {return 'You won!';}
    }
  
    else if (userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'The computer won!'}
        else {return 'You won!';}
      }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  