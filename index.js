// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in
let number="90"

// Prompt the user to guess the number
let user=prompt("guess the number")

// Cast the user input to a number
user=parseInt(user)


// Create a new variable called attempts and set it to 0
let attemppts=0

// Create a while loop that runs while the user guess is not equal to your number
while(user !== 90){
  // In the while loop, prompt the user to guess the number again (remember to cast)
  user =prompt("guess the number")


// In the while loop, increase the attempts by 1
attemppts++

// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"

  if(user === 90)
    console.log("too high")
  
   

}





// After the while loop, print "It took (attempts) attempts" 

