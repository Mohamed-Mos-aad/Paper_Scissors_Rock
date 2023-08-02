// Score
let score = document.getElementById('score');
let scorenum = 0;

// Show And Close Rules Page
document.getElementById('rulesButton').addEventListener('click',showRules);
document.getElementById('rulesClose').addEventListener('click',closeRules);

function showRules()
{
    document.getElementById('rulesPage').style.display = 'block';
}

function closeRules()
{
    document.getElementById('rulesPage').style.display = 'none';
}





// Computer Option
let computer = 0;
computerOption();

function computerOption()
{
    computer = Math.floor((Math.random() * 3) + 1);
    if(window.innerWidth < 767)
    {
        if(computer == 1)
        {
            computer = "paper";
            document.getElementById('pcpicked').style.border = "solid 10px rgb(86, 113, 245)";
            document.getElementById('pcpicked').style.boxShadow =  "0 4px 0 hsl(230, 89%, 40%)";
            document.getElementById('pcoption').innerHTML = `<img src="images/icon-paper.svg" alt="">`;
        }
        else if(computer == 2)
        {
            computer = "scissors";
            document.getElementById('pcpicked').style.border = "solid 10px hsl(39, 89%, 49%)";
            document.getElementById('pcpicked').style.boxShadow =  "0 4px 0 hsl(39, 89%, 29%)";
            document.getElementById('pcoption').innerHTML = `<img src="images/icon-scissors.svg" alt="">`;
        }
        else if(computer == 3)
        {
            computer = "rock";
            document.getElementById('pcpicked').style.border = "solid 10px hsl(349, 71%, 52%)";
            document.getElementById('pcpicked').style.boxShadow =  "0 4px 0 hsl(349, 71%, 27%)";
            document.getElementById('pcoption').innerHTML = `<img src="images/icon-rock.svg" alt="">`;
        }
    }
    else
    {
        if(computer == 1)
        {
            computer = "paper";
            document.getElementById('pcpicked').style.border = "solid 30px rgb(86, 113, 245)";
            document.getElementById('pcpicked').style.boxShadow =  "0 10px 0 hsl(230, 89%, 40%)";
            document.getElementById('pcoption').innerHTML = `<img src="images/icon-paper.svg" alt="">`;
        }
        else if(computer == 2)
        {
            computer = "scissors";
            document.getElementById('pcpicked').style.border = "solid 30px hsl(39, 89%, 49%)";
            document.getElementById('pcpicked').style.boxShadow =  "0 10px 0 hsl(39, 89%, 29%)";
            document.getElementById('pcoption').innerHTML = `<img src="images/icon-scissors.svg" alt="">`;
        }
        else if(computer == 3)
        {
            computer = "rock";
            document.getElementById('pcpicked').style.border = "solid 30px hsl(349, 71%, 52%)";
            document.getElementById('pcpicked').style.boxShadow =  "0 10px 0 hsl(349, 71%, 27%)";
            document.getElementById('pcoption').innerHTML = `<img src="images/icon-rock.svg" alt="">`;
        }
    }
}







// Select option
document.getElementById('options').addEventListener('click',getOption);
let me = 0;

function getOption(e)
{
    computerOption();
    let meOption = e.target.id;
    document.getElementById('play').style.display = 'none';
    document.getElementById('bite').style.display = 'flex';
    document.getElementById('mepicked').innerHTML = `<img src="images/${meOption}" alt="">`;
    if(window.innerWidth < 767)
    {
        if(meOption == "icon-paper.svg")
        {
            document.getElementById('mepicked').style.border = "solid 10px rgb(86, 113, 245)";
            document.getElementById('mepicked').style.boxShadow =  "0 4px 0 hsl(230, 89%, 40%)";
            me = "paper";
        }
        else if(meOption == "icon-scissors.svg")
        {
            document.getElementById('mepicked').style.border = "solid 10px hsl(39, 89%, 49%)";
            document.getElementById('mepicked').style.boxShadow =  "0 4px 0 hsl(39, 89%, 29%)";
            me = "scissors";
        }
        else if(meOption == "icon-rock.svg")
        {
            document.getElementById('mepicked').style.border = "solid 10px hsl(349, 71%, 52%)";
            document.getElementById('mepicked').style.boxShadow =  "0 4px 0 hsl(349, 71%, 27%)";
            me = "rock";
        }
    }
    else
    {
        if(meOption == "icon-paper.svg")
        {
            document.getElementById('mepicked').style.border = "solid 30px rgb(86, 113, 245)";
            document.getElementById('mepicked').style.boxShadow =  "0 10px 0 hsl(230, 89%, 40%)";
            me = "paper";
        }
        else if(meOption == "icon-scissors.svg")
        {
            document.getElementById('mepicked').style.border = "solid 30px hsl(39, 89%, 49%)";
            document.getElementById('mepicked').style.boxShadow =  "0 10px 0 hsl(39, 89%, 29%)";
            me = "scissors";
        }
        else if(meOption == "icon-rock.svg")
        {
            document.getElementById('mepicked').style.border = "solid 30px hsl(349, 71%, 52%)";
            document.getElementById('mepicked').style.boxShadow =  "0 10px 0 hsl(349, 71%, 27%)";
            me = "rock";
        }
    }
    winner();
}





// // Select Winner
function winner()
{
    document.getElementById('mepicked').classList.remove('show-before');
    document.getElementById('pcpicked').classList.remove('show-before');
    document.getElementById('meFix').classList.remove('me-fix');
    if(me == "paper" && computer == "rock")
    {
        document.getElementById('mepicked').classList.add('show-before');
        nextGame()
    }
    else if(me == "scissors" && computer == "paper")
    {
        document.getElementById('mepicked').classList.add('show-before');
        nextGame();
    }
    else if(me == "rock" && computer == "scissors")
    {
        document.getElementById('mepicked').classList.add('show-before');
        nextGame();
    }
    else if(me == computer)
    {
        tiedState();
    }
    else if(computer == "paper" && me == "rock")
    {
        document.getElementById('pcpicked').classList.add('show-before');
        document.getElementById('meFix').classList.add('me-fix');
        gameAgain();
    }
    else if(computer == "scissors" && me == "paper")
    {
        document.getElementById('pcpicked').classList.add('show-before');
        document.getElementById('meFix').classList.add('me-fix');
        gameAgain();
    }
    else if(computer == "rock" && me == "scissors")
    {
        document.getElementById('pcpicked').classList.add('show-before');
        document.getElementById('meFix').classList.add('me-fix');
        gameAgain();
    }
    showResult();
}




// // Show result
function showResult()
{
    if(window.innerWidth < 767)
    {
        document.getElementById('game').style.gap = '50px';
        document.getElementById('smResult').style.display = 'flex';
    }
    else
    {
        document.getElementById('lgResult').style.display = 'flex';
    }
}




// // next Game
function nextGame()
{
    scorenum++;
    document.getElementById('score').innerHTML = scorenum;
    if(window.innerWidth < 767)
    {
        document.getElementById('smplayBtn').innerHTML = 'Next';
        document.getElementById('smResultWord').innerHTML = 'YOU WIN';
        document.getElementById('smplayBtn').addEventListener('click' , nextPlay);
    }
    else
    {
        document.getElementById('lgplayBtn').innerHTML = 'Next';
        document.getElementById('lgResultWord').innerHTML = 'YOU WIN';
        document.getElementById('lgplayBtn').addEventListener('click' , nextPlay);
    }
}

function nextPlay()
{
    document.getElementById('play').style.display = 'flex';
    document.getElementById('bite').style.display = 'none';
    if(window.innerWidth < 767)
    {
        document.getElementById('game').style.gap = '100px';
        document.getElementById('smResult').style.display = 'none';
    }
    else
    {
        document.getElementById('lgResult').style.display = 'none';
    }
}





// // Tied State
function tiedState()
{
    if(window.innerWidth < 767)
    {
        document.getElementById('smplayBtn').innerHTML = 'Next';
        document.getElementById('smResultWord').innerHTML = 'TIED';
        document.getElementById('smplayBtn').addEventListener('click' , nextPlay);
    }
    else
    {
        document.getElementById('lgplayBtn').innerHTML = 'Next';
        document.getElementById('lgResultWord').innerHTML = 'TIED';
        document.getElementById('lgplayBtn').addEventListener('click' , nextPlay);
    }
}




// // Play Again
function gameAgain()
{
    if(window.innerWidth < 767)
    {
        document.getElementById('smplayBtn').innerHTML = 'Again';
        document.getElementById('smResultWord').innerHTML = 'YOU LOSE';
        document.getElementById('smplayBtn').addEventListener('click' , playAgain);
    }
    else
    {
        document.getElementById('lgplayBtn').innerHTML = 'Again';
        document.getElementById('lgResultWord').innerHTML = 'YOU LOSE';
        document.getElementById('lgplayBtn').addEventListener('click' , playAgain);
    }
}

function playAgain()
{
    scorenum = 0;
    document.getElementById('score').innerHTML = scorenum;
    document.getElementById('play').style.display = 'flex';
    document.getElementById('bite').style.display = 'none';
    if(window.innerWidth < 767)
    {
        document.getElementById('game').style.gap = '100px';
        document.getElementById('smResult').style.display = 'none';
        document.getElementById('smplayBtn').removeEventListener('click' , playAgain);
    }
    else
    {
        document.getElementById('lgResult').style.display = 'none';
        document.getElementById('lgplayBtn').removeEventListener('click' , playAgain);
    }
}

