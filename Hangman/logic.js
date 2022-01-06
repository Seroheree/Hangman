class Hangman{
    getData(){
        confirmButton.addEventListener('click',()=>{
        this.passwordInput=document.querySelector('.password-input').value
        this.displayHidePass(this.passwordInput)
        })
    }

    displayHidePass(pass){
        this.createbox=document.createElement('div')
        lyricsBox.innerHTML=''
        lyricsBox.appendChild(this.createbox)
        for(let i=0;i<pass.length;i++){
            encryptionArray.push("_ ")
            this.createbox.textContent+=encryptionArray[i]
        }
        dividedPassArray=pass.split('')
    }

    keyboardValues(){
        letterButtons.forEach((el)=>{
            el.addEventListener('click',()=>{
                dividedPassArray.forEach((letter)=>{
                    if(letter===el.textContent) encryptionArray[z]=dividedPassArray[z]
                    z++
                })
                z=0;
                decision=dividedPassArray.includes(el.textContent)
                if(decision!=true)
                this.HangmanUpdate()
                this.display()
            })
        })
       
    }

    display(){
        this.createbox.innerHTML=''
        for(let i=0;i<encryptionArray.length;i++){
            this.createbox.textContent+=encryptionArray[i]
        }
        
    }
    
    HangmanUpdate(){
            gameBox.style.background=`url("IMG/${HangmanUp}.png")`
            HangmanUp++
            if(HangmanUp>=12) alert("You lose!")
    }

}

const gameBox=document.querySelector('.container')
const confirmButton=document.querySelector('.confirm-button')
const lyricsBox=document.querySelector('.lyrics')
const letterButtons=document.querySelectorAll('.keyboard button')
let dividedPassArray
let encryptionArray=[]
let z=0;
let HangmanUp=1
let decision
const game= new Hangman()
game.getData()
game.keyboardValues()

