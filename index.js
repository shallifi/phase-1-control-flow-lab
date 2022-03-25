function scuberGreetingForFeet(a) {
  if (a > 2500) {
    return `No can do.`
  }
  else if (a >= 2000) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (a <= 400) {
    return `This one is on me!`
  }

  /*var myFunc;
  if (num === 0) {
    myFunc = function(theObject) {
      theObject.make = 'Toyota';
    }
  }*/

}



function ternaryCheckCity(city){
  return city === `NYC`? 'Ok, sounds good.' : `No go.`
}

function switchOnCharmFromTip(money){
  switch(money){
    case `generous`:
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}

console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(2000));
console.log(scuberGreetingForFeet(2501));
console.log(ternaryCheckCity(`NYC`));
console.log(ternaryCheckCity(`Pittsburgh`))