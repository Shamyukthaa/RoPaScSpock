var userChoice= prompt("Do you choose rock, spock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.25) {
	computerChoice = "rock";
} else if(computerChoice <= 0.50) {
	computerChoice = "paper";
} else if(computerChoice <=0.75) {
	computerChoice = "scissors";
}
else {
    computerChoice="spock";
    } 
    
    console.log("Computer: " + computerChoice);

var compare= function(choice1,choice2){
    // tie function
    if(choice1 === choice2)
    {
        return "The result is a tie!";
    }
    // rock function
    else if(choice1=== "rock")
    {
        if(choice2=== "scissors")
        {
            return "rock wins";
        }
        else if(choice2=== "paper")
        {
            return "paper wins";
        }
        else
        {
            return "spock wins";
        }
    }
    // paper function
    else if(choice1=== "paper")
    {
        if(choice2=== "rock")
        {
            return "paper wins";
            
        }
        else if(choice1=== "scissors")
        {
            return "scissors wins";
            
        }
        else 
        {
            return "paper wins";
        }
    }
    // scissors function
    else if(choice1=== "scissors")
    {
        if(choice2=== "rock")
        {
            return "rock wins";
        }
        else if(choice2=== "paper")
        {
            return "scissors wins";
        }
        else 
        {
            return "scissors wins wins";
        }
    }
    // spock function
    else if(choice1=== "spock")
    {
        if(choice2=== "rock")
        {
            return "spock wins";
        }
        else if(choice2=== "paper")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";
        }
    }
};
compare(userChoice, computerChoice);
