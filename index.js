// IMPLEMENTATION OF A CONSTRUCTOR FUNCTION...

/* console.log('hi')
function Waiter(name,age, bhasha){
    this.name=name,
    this.age=age,
    this.language=bhasha
}
let w1=new Waiter('abdul',null,['hindi','english'])
let w2=new Waiter('rashid',19,['hindi','english'])
let w3=new Waiter('anu',19,['hindi','english'])
console.log(w1) */

let listofbuttons = document.querySelectorAll(".drum");
for (let i = 0; i < listofbuttons.length; i++) {
    listofbuttons[i].addEventListener('click', function () {

        switch (this.innerHTML) {
            case 'w': {
                crash = new Audio("sounds/crash.mp3")
                crash.play()
            }
                break;
            case 'a': {
                tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
            }
                break;
            case 's': {
                kickbass = new Audio("sounds/kick-bass.mp3")
                kickbass.play()
            }
                break;
            case 'd': {
                snare = new Audio("sounds/snare.mp3")
                snare.play()
            }
                break;
            case 'k': {
                tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play()
            }
                break;
            case 'j': {
                tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play()
            }
                break;
                case 'l':{
                    tom4=new Audio("sounds/tom-4.mp3")
                    tom4.play()
                }
                    break;

            default:

                
        }

    })

}
//document.addEventListener('keydown',function(event){console.log(event.key)})
for (let i = 0; i < listofbuttons.length; i++) {
    listofbuttons[i].addEventListener('keydown', function (event) {
console.log(event.key)
        switch (event.key) {
            case 'w': {
                crash = new Audio("sounds/crash.mp3")
                crash.play()
            }
                break;
            case 'a': {
                tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
            }
                break;
            case 's': {
                kickbass = new Audio("sounds/kick-bass.mp3")
                kickbass.play()
            }
                break;
            case 'd': {
                snare = new Audio("sounds/snare.mp3")
                snare.play()
            }
                break;
            case 'k': {
                tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play()
            }
                break;
            case 'j': {
                tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play()
            }
                break;
                case 'l':{
                    tom4=new Audio("sounds/tom-4.mp3")
                    tom4.play()
                }
                    break;

            default:

                alert("key is not there")
        }

    })

}
























