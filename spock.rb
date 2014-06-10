print "Do you choose rock, spock, paper or scissors?"
UserChoice = gets.chomp


CompChoice = rand(0..10)

if CompChoice <= 3
	CompChoice == "rock"
elsif CompChoice <= 5
	CompChoice == "paper"
elsif CompChoice <= 7
	CompChoice == "scissors"
elsif CompChoice <= 9
	CompChoice == "lizard"
else
   CompChoice == "spock"
end
	

def compare(c1, c2)
	#TIE BRAKER
	if c1 == c2  
		print "Its a tie"
	elsif c1 == "rock"
		if c2 == "paper"
			print "Paper wins"
		elsif c2 == "spock \n"
			print "spock wins \n"
		else
			print "rock wins \n"
        end
       




	elsif c1 == "paper"
		if c2 == "scissors"
			print "scissors wins"
		elsif c2 ==  "lizard"
			print "lizard wins"
		else
			print "paper wins"
        end

	elsif c1 == "scissors"
		if c2 == "rock"
			print "rock wins"
		elsif c2 == "spock"
			print "spokc wins"
        else
        	print "scissors wins"
		end



	elsif c1 == "lizard"
		if c2 == "scissors"
			print "scissors wins"
		elsif c2 == "rock"
			print "rock wins"
		else
			print "lizard wins"
        end


	else c1 == "spock"
        if c2 == "lizard"
        	print "lizard wins"

        elsif c2 == "paper"
        	print "paper wins"
        else
        	print "spock wins"
        end
     end
end

compare(UserChoice, CompChoice)