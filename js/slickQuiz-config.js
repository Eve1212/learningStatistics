// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your understanding of concepts and transfer of knowledge",
        "main":   "<p>Show us what you have learned from the game.</p>",
        "results": "<h5>Learn More. We are happy for you if you scored high. Don't feel discouraged if your level is not as high as you wanted. This is why we would like to invite you to our game.</h5><p>We are trying hard to develop game-based applications that you can learn through gaming!</p>",
        "level1":  "PhD",
        "level2":  "College",
        "level3":  "High school",
        "level4":  "Middle school",
        "level5":  "Elementary school",
        "level6":  "Kindergarten" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "Qid": 1,
            "q": "Kayla wants to see whether undergraduate students at New York University differ from students at Indiana University Bloomington in terms of the amount of money per year they spend on sport events. She can ask a random set of students from each university to say how much they spend, but she obviously can’t ask them all. Let’s say that there really is a difference in how much the two groups spend. For the factor below, say whether it should increase, decrease, or not affect Kayla’s confidence in saying that there is a difference in the two groups’ spending:<br><br> The actual difference in spending between IU and NYU’s students is <u>small</u>",
            "a": [
                {"option": "Increases confidence",      "correct": false},
                {"option": "Decreases confidence",     "correct": true},
                {"option": "Does not affect confidence",      "correct": false}
               // {"option": "23",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> A small mean difference decreases your confidence!</p>",
            "incorrect": "<p><span>Uhh no.</span> The mean difference is so close. It is harder for you to decide!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "Qid": 2,
            "q": "Kayla wants to see whether undergraduate students at New York University differ from students at Indiana University Bloomington in terms of the amount of money per year they spend on sport events. She can ask a random set of students from each university to say how much they spend, but she obviously can’t ask them all. Let’s say that there really is a difference in how much the two groups spend. For the factor below, say whether it should increase, decrease, or not affect Kayla’s confidence in saying that there is a difference in the two groups’ spending:<br><br> The amount of money spent is measured in terms of <u>cents</u> rather than dollars",
            "a": [
                {"option": "Increases confidence",               "correct": false},
                {"option": "Decreases confidence",   "correct": false},
                {"option": "Does not affect confidence",               "correct": true}
               // {"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
           // "select_any": true,
            "correct": "<p><span>Nice!</span> The decision does not depend on the units of measurement.</p>",
            "incorrect": "<p><span>Hmmm.</span> Think about it. Would you become taller if you are measured in meters than in feet?</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "Qid": 3,
            "q": "Kayla wants to see whether undergraduate students at New York University differ from students at Indiana University Bloomington in terms of the amount of money per year they spend on sport events. She can ask a random set of students from each university to say how much they spend, but she obviously can’t ask them all. Let’s say that there really is a difference in how much the two groups spend. For the factor below, say whether it should increase, decrease, or not affect Kayla’s confidence in saying that there is a difference in the two groups’ spending:<br><br> Kayla asks a <u>large</u> number of students at each university about their spending",
            "a": [
                {"option": "Increases confidence",           "correct": true},
                {"option": "Decreases confidence",                  "correct": false},
                {"option": "Does not affect confidence",  "correct": false}
                //{"option": "The Milky Way",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> When you have a larger sample size, you would be more confident in your decision.</p>",
            "incorrect": "<p><span>Not Quite.</span> A larger sample size lowers the variability of sample means. That is, your sample mean will be close to the actual population mean</p>" // no comma here
        },
        { // Question 4
            "Qid": 4,
            "q": "Kayla wants to see whether undergraduate students at New York University differ from students at Indiana University Bloomington in terms of the amount of money per year they spend on sport events. She can ask a random set of students from each university to say how much they spend, but she obviously can’t ask them all. Let’s say that there really is a difference in how much the two groups spend. For the factor below, say whether it should increase, decrease, or not affect Kayla’s confidence in saying that there is a difference in the two groups’ spending:<br><br> The variability across different students’ spending within each university is <u>large</u>",
            "a": [
                {"option": "Increases confidence",    "correct": false},
                {"option": "Decreases confidence",     "correct": true},
                {"option": "Does not affect confidence",      "correct": false}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>You are correct!</span> Higher variability reduces your ability to detect statistical significance.</p>",
            "incorrect": "<p><span>Incorrect.</span> As variability increases, the confidence interval increases. Therefore, it is less likely for you to reject your null hypothesis.</p>" // no comma here
        },
        { // Question 5
            "Qid": 5,
            "q": "Maria, a marine biologist, would like to know whether Sockeye or Atlantic salmon generally eat more food. If she only has one opportunity to observe the food eaten by only <u>one</u> fish sampled from each species, what facts or procedures would help her reach a more accurate conclusion?",
            "a": [
                {"option": "Sockeye salmon differ very little in how much they eat, and neither do Atlantic salmon",    "correct": true},
                {"option": "Different Sockeye salmon eat very different amounts of food, and so do different Atlantic salmon",     "correct": false},
                {"option": "She samples the largest fish of each species that she can find",   "correct": false},
                {"option": "She samples the smallest fish of each species that she can find",  "correct": false}// no comma here
            ],
            "correct": "<p><span>Good Job!</span> When the sample size is small, a small within-population variability can help increases confidence!</p>",
            "incorrect": "<p><span>Incorrect</span> This is a <em>hard</em> one. Remember, when the sample size and variability are both small in the game, we can still be pretty certain about our decision. </p>" // no comma here
        },
        { // Question 6
            "Qid": 6,
            "q": "Brandon wants to know whether eating SuperDannon or UltraChobani yogurt results in more beneficial gut bacteria. He plans to randomly feed half of his subjects SuperDannon and half UltraChobani yogurt for a week and then measure bacterial counts. He is trying to decide how many subjects to test in each condition. What would you advise?",
            "a": [
                {"option": "In general, testing a relatively small number of subjects is better because the variability in their digestive systems will be smaller than for a large number of subjects.",    "correct": false},
                {"option": "In general, testing a relatively small number of subjects is better because the number bacteria each person has in the small group will tend to be smaller.",     "correct": false},
                {"option": "In general, testing a relatively large number of subjects is better because averages from large groups tend to be more reliable than from small groups.",     "correct": true},
                {"option": "In general, testing a relatively large number of subjects is better because they are more likely to spread their bacteria to each other, and so there are multiple chances for each kind of bacteria to be detected.",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Good Job!</span> When the sample size is large, your sample mean will be close to the actual population mean.</p>",
            "incorrect": "<p><span>Incorrect.</span> A large sample size is usually more representative of the population.</p>" // no comma here
        },
        { // Question 7
            "Qid": 7,
            "q": "Brandon then goes on to ask you if he should measure the bacteria from the same part of each subject’s gut or randomly choose a different part of the gut for each subject. What is your advice?",
            "a": [
                {"option": "Choose a different part of the gut for each subject because subjects shouldn’t be able to guess what part of their gut is going to be sampled.",    "correct": false},
                {"option": "Choose a different part of the gut for each subject because it will add variability in the measured counts, which will make it easier for Brandon to tell if the SuperDannon and UltraChobani populations really differ.",     "correct": false},
                {"option": "Choose the same part of the gut for each subject because subjects should know ahead of time what part of their gut is going to be sampled.",     "correct": false},
                {"option": "Choose the same part of the gut for each subject because it will decrease the variability in the measured counts, which will make it easier for Brandon to tell if the SuperDannon and UltraChobani populations really differ.",   "correct": true}// no comma here
            ],
            "correct": "<p><span>You got it!</span> Decreases variability increases confidence.</p>",
            "incorrect": "<p><span>Nice try, but incorrect.</span> One way to increase confidence is to decrease variability.</p>" // no comma here
        },
        { // Question 8
            "Qid": 8,
            "q": "Sofia is interested in whether Pizzagedon or Mission Impizzable serves more pineapple chunks on their Hawaiian pizzas. In fact, scientific investigations have shown that they have exactly the same number of pineapple chunks, although both vary in their number of chunks from pizza to pizza. If Sofia counts the number of chunks on 5 pizzas from each company, she will probably find:",
            "a": [
                {"option": "That all 10 pizzas have exactly the same number of pineapple chunks.",    "correct": false},
                {"option": "That the 10 pizzas vary in their number of pineapple chunks but the average number of chunks of the 5 Pizzagedon pizzas is exactly the same as the average of the 5 Mission Impizzable pizzas.",     "correct": false},
                {"option": "That the average number of chunks of the 5 Pizzagedon pizzas is close to but not exactly the same as the average of the Mission Impizzable pizzas.",     "correct": true},
                {"option": "That the 5 pizzas from Pizzagedon have exactly the same number chunks, and so do the 5 pizzas from Mission Impizzable, but these two numbers are different.",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Excellent!</span> Glad you realize that 5 pizzas is only a small sample of a larger population!</p>",
            "incorrect": "<p><span>Oops, you are wrong.</span> You may consider actually <em>order</em> 5 Hawaiian pizzas from Pizzagedon and Mission Impizzable respectively and compare their pineapple chuncks.</p>" // no comma here
        },
        { // Question 9
            "Qid": 9,
            "q": "The average number of points scored by Indiana University men’s basketball teams is 76. Imagine randomly picking 2 or 20 games and looking at the average number of points scored from those games. What will probably be true?",
            "a": [
            {"option": "The average will be closer to 76 when 20 games are averaged than when only 2 games are averaged.",    "correct": true},
            {"option": "The averages from 2 and 20 randomly picked games will both equally close to the expected average of 76.",     "correct": false},
            {"option": "Both the averages from 2 and 20 randomly picked games will be exactly 76.",     "correct": false},
            {"option": "The average number of points scores will be higher when 20 games are averaged compared to when only 2 games are averaged.",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Excellent!</span> When the sample size is large, your sample mean will be close to the actual population mean.</p>",
            "incorrect": "<p><span>Oops, you are wrong.</span> There is usually more variability in a smaller sample compared to a larger sample.</p>" // no comma here
        },
        { // Question 10
            "Qid": 10,
            "q": "Imagine that you are a teacher trying to figure out whether your students learn more vocabulary words by reading the daily newspaper for a year, or having a daily face-to-face chat with a friend. You randomly assign half your class to each kind of training. At the end of the year, you test their vocabularies by asking them to define words from a list. How many words should you ask them to define",
            "a": [
                {"option": "50 words. The larger number of words will result in less variability in the students’ number of words correctly defined.",    "correct": true},
                {"option": "50 words. By asking students to define more words, their scores will increase, making both groups look better.",     "correct": false},
                {"option": "Only 1 word. If you ask them to define more words, they will get some right and some wrong, and that variability will interfere with your ability to say which group has a higher vocabulary.",     "correct": false},
                {"option": "Only 1 word. Students will either know or not know the word, and if one of the groups results in higher vocabularies than the other group, that difference should show up with that one tested word.",   "correct": false}// no comma here
                ],
                "correct": "<p><span>Awesome!</span> Increasing sample size can usually reduce variability.</p>",
                "incorrect": "<p><span>I am sorry; you missed this question.</span> The average value of successfully learned words nothing to do with the sample size.</p>" // no comma here
        },
        { // Question 11
            "Qid": 11,
            "q": "IWater, a bottled water company, receives an order of 6000 500ml bottles of water from Indiana University for its upcoming parents’ weekend. Water bottles are filled manually by workers. They aim to stop right at the 500 ml line, but <u>small errors</u> are inevitable. If these 6000 bottles are distributed equally at 600 tables (10 bottles at each table), what would the distribution look like?",
            "a": [
                {"option": "The average volume of 10 bottles at each table would be exactly 500ml and each bottle has a perfect volume of 500 ml.",    "correct": false},
                {"option": "The average volume of 10 bottles at each table would be exactly 500ml while each bottle may not be exactly 500 ml.",     "correct": false},
                {"option": "The average volume of 10 bottles at each table would be close to but not exactly at 500ml, so is each bottle at a table.",     "correct": true},
                {"option": "The average volume of 10 bottles at each table would be close to but not exactly at 500ml, but the volume of each bottle at a table differs widely (e.g., some are 100 ml while the other are 900ml).",   "correct": false}// no comma here
            ],
            "correct": "<p><span>That is correct!</span> Small errors imply small variability within a population.</p>",
            "incorrect": "<p><span>Incorrect.</span> It is okay. Just remember that an avergae of 500ml does not mean each instance has to be 500ml.</p>" // no comma here
        },
        { // Question 12
            "Qid": 12,
            "q": "Undergraduate admission statistics indicate that the incoming class of 2017 at MIT and Harvard are both 3280, and the average SAT scores (total) of the two incoming classes are the same, too. Which of the following best describes these two class profiles?",
            "a": [
                {"option": "The two incoming student populations are exactly the same. That is, for each student at MIT, you can find a student at Harvard with the exact same total SAT score.",    "correct": false},
                {"option": "Every student has exact the same total SAT score, which is the same as the incoming class average.",     "correct": false},
                {"option": "If variability of scores among students at each school is small, it is more likely the incoming MIT and Harvard student populations are the same.",     "correct": true},
                {"option": "If variability of scores among students at each school is big, it is more likely the incoming MIT and Harvard student populations are the same.",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Awesome!</span> Knowing population size and average mean alone is not enough to decide whether they are the same. Variability is also a key factor!</p>",
            "incorrect": "<p><span>Close but not correct.</span> Size, mean, and variability are three important factors to decide whether the two populations are the same!</p>" // no comma here
        }
    ]
};

