console.clear()
const readline = require('readline-sync')
let play = ''
let hole = "n"
let playAgain = ''
let hasKey = false
let lookInput = ''
let keepSearchingInput = ''
let deskInput = ''
let lampInput = ''
let pictureInput = ''
let drawerInput = ''
let lockInput = ''
let hasKeyInput = ''
let incorrectInput = ''
console.log(' ')

const userName = readline.question(
    'What would you like me to call you? '
)
console.log(' ')
console.log('Hi ' + userName + '. Nice to meet you.')


function playAgainQuestion(){
    console.log(" ")
    playAgain = readline.question('Would you like to play again? (y/n): ')
    playAgain.toLowerCase()
    playAgainInput()
}

function playAgainInput(){
    console.log(" ")
    if ( playAgain == 'y'){
        holeQuestion()
    }if ( playAgain == 'n'){
        exitPhrase()
    }else{
        console.log( "You don't say that!")
        playAgainQuestion()
    }

}

function exitPhrase(){
    console.log(" ")
    console.log("Good Bye " + userName)
    process.exit()
}

function playQuestion(){
    console.log("")
    play= readline.question('Would you like to play a game? ( y/n ):  ')
    play.toLowerCase()
    playIF()
}

function playIF(){
    console.log(" ")
    if( play === 'y'){
        holeQuestion()
    }if( play === 'n'){
        console.log("Good Bye " + userName)
        process.exit()
    }else{
        console.log( "Boi you tryin' me?")
        playQuestion()
    }
}

function holeQuestion(){
    console.log(" ")
    hole = readline.question('You find yourself locked in a room. There is one door and no windows. The doors seems like it would open with a key. You see a desk with a single drawer and some items place on top of it. Theres also a small hole on the wall to the left of the door knob. ' + userName + ', Would you like to reach into the hole and see if the key is hiding there? ( y/n ): ' )
    hole.toLowerCase()
    if (hole === 'n'){
         look()
    }else if (hole === 'y'){
        console.log(' ')
        console.log(`You hear a *slice* and think to yourself, "that was odd". You pull out your hand because you felt nothing in the hole, only to realize your hand has been cut clean off. You're a bit suprized. You felt nothing , and still feel nothing. You watch the blood spurting from the tip of your now nubbed arm and think what a pretty hue of red it is. You think to yourself that its strange how calm you are in this moment. The state of shock you're experiencing is a blessing compared to the unbareable pain you'd other wise be experiencing. A few moments later, you, ` + userName + `, are no more.`)
        console.log(' ')
        console.log('Better luck next time kid, and stop sticking your hand small random holes!')
        console.log(' ')
        playAgainQuestion()
        
        
    }
}

function look(){
    console.log(" ")
    lookInput = readline.question('Would you like to 1:"Look at the desk" or 2:"Try the door" (1 or 2): ')
    if (lookInput === '1'){
        desk()
    }if (lookInput === '2'){
        door()
    }else{
        console.log( "With all do respect you may want to reconsider your input.") 
        look()
    }
}

function desk(){
    console.log('')
    deskInput = readline.question(`On the desk you find a small lamp and a picture. There is also a small drawer in the middle of the desk. Would you like to 1:"Inspect the lamp", 2:"Inspect the Picture", 3:"Inspect the drawer", 4:"Return to the room" (1, 2, 3, or 4): `) 
    switch(deskInput){
        case "1":
            lampQuestion()
            break;
        case "2":
           pictureQuestion()
            break;
        case "3":
           drawerQuestion()
            break;
        case "4":
            look()
            break;
        default: 
            console.log(' ')
            console.log('Thank you, try again.')
            desk();
            break;


    }
    
}

function lampQuestion(){
    console.log('')
    lampInput = readline.question('The lamp is small yet tasteful. I seems like it was probably purchased from one of those fancy furniture stores. You look closer and see a tag on the lamp shade. The tag reads "AHFS". Would you like to 1:"Keep searching the desk" or 2:"Explore the room" (1 or 2)')
                if( lampInput === "1"){
                    desk();
                }if ( lampInput === "2"){
                    look();
                }else{
                    console.log('Thank you, try again.')
                    lampQuestion();
                }
            
}

function pictureQuestion(){
    console.log('')
    pictureInput = readline.question('You see a picture of four young children standing next to each other smiling. You flip the picture and see an inscription thast reads "Left to right: Nathan, Olivia, Dalton, Elisabeth." Would you like to 1:"Keep searching the desk" or 2:"Explore the room" (1 or 2): ')
    if( pictureInput === "1"){
        desk();
    }if ( pictureInput === "2"){
        look();
    }else{
        console.log(`It's impressive how far you've gotten given that you can't follow simple instructions`)
        pictureQuestion();
    }
}

function drawerQuestion(){
    if (hasKey === false){
        console.log('')
        drawerInput = readline.question(`You try to open the drawer but it doesnt budge. You notice a small lock on the side of the drawer. It looks like it takes a four character combination. Would you like to 1:"Try the lock" or 2:"Keep searching the Desk" (1 or 2): `)
        if (drawerInput === "1"){
            tryLock()
        }if (drawerInput === "2"){
            desk()
        }else{
            console.log("I don't think you understand how this works...")
            drawerQuestion()
        }
    }else if (hasKey === true){
        hasKeyQuestion()
    }
}

function tryLock(){
    console.log('')
    lockInput = readline.question(`Please enter four alphanumerical characters: `)
    lockInput.toLowerCase()
    if (lockInput === "node"){
        hasKey = true;
        hasKeyQuestion()
    }else {
        incorrect()
    }
}

function hasKeyQuestion(){
    console.log('')
    hasKeyInput = readline.question(`The lock pops open and you open the drawer. You find a key inside and a note that reads, "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence." - Confucius. Would you like to 1:"Keep searching the desk" or 2:"Explore the room" (1 or 2): `)
        if( hasKeyInput === "1"){
            desk();
        }if ( hasKeyInput === "2"){
            look();
        }else{
            console.log(`It's impressive how far you've gotten given that you can't follow simple instructions`)
            hasKeyQuestion();
        }
}

function incorrect(){
    console.log('')
    incorrectInput = readline.question(`I'm sorry but it seems you don't yet know the code. Would you like to 1:"Try again" or 2:"Keep searching the desk" (1 or 2): `)
    if (incorrectInput === "1"){
        tryLock()
    }if (incorrectInput === "2"){
        desk()
    }else{
        console.log(`You're just all kinds of wrong today. Please try again`)
        incorrect()
    }
}

function door(){
    console.log(" ")
    if (hasKey === false){
        console.log("You try the door but it seems to be locked. Maybe you should try to find the key.")
        keepSearching()
    }if (hasKey === true){
        console.log("You insert the key and hear a click. The door knob turns and the door opens! " + userName + ", You have made it out alive!!! CONGRATULATIONS!!! YOU WIN!!!!")
        hasKey = false
        playAgainQuestion()
    }
}


function keepSearching(){
    console.log('')
    keepSearchingInput = readline.question('Would you like to 1:"Keep searching room" or 2:"Give up" (1 or 2): ')
    if ( keepSearchingInput === '1'){
        look()
    }if (keepSearchingInput === '2'){
        console.log(' ')
        console.log("Good Bye " + userName)
        process.exit()
    }else{
        console.log('')
        console.log( "With all do respect you may want to reconsider your input.") 
        keepSearching()
    }
}
playQuestion()

