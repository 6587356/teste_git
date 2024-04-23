const lifePhase = (age) => {
  if(age >= 0 && age <= 3){
   return "baby";
   } 
   else if (age >= 4 && age <= 12){
   return "child";
   }
  else if(age >= 13 && age <= 19){
   return "teen";
   }
  else if (age >= 20 && age <= 64){ 
  return "adult";
  }
   else if(age >= 65 && age <= 140){
   return "senior citizen";
   } else{
   return "This is not a valid age";
  }
}


const finalGrade = (grade1, grade2, grade3) => {
  let average = 0;
  
  average = (grade1 + grade2 + grade3) / 3;
  
  if((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)){
    return 'You have entered an invalid grade.'
  } 
  else if(average >= 0 && average <= 59){
    return 'F';
  } 
  else if(average >= 60 && average<= 69){
    return 'D';
  }
  else if(average >= 70 && average <= 79){
    return 'C';
  }
  else if(average >= 80 && average <= 89){
    return 'B';
  }
  else if(average >= 90 && average <= 100){
    return 'A';
  } else {
    return 'You have entered an invalid grade.'
  }

}

const reportingForDuty = (rank, lastName) => {
   return `${rank} ${lastName} reporting for duty!`
}

function rollTheDice() {
  let die1 = Math.random() * 6 + 1;
  let die2 = Math.random() * 6 + 1;
  return Math.floor(die1) + Math.floor(die2);
}

const calculateWeight = (eartWeight, planet) => {
  let peso = 0;
  switch(planet){
    case 'Mercury':
      peso = eartWeight * 0.378
      return peso;
    case 'Venus':
      peso = eartWeight * 0.907
      return peso;
    case 'Mars':
      peso = eartWeight * 0.377
      return peso;
    case 'Jupiter':
      peso = eartWeight * 2.36
      return peso;
    case 'Saturn':
      peso = eartWeight * 0.916
      return peso;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
}

const truthyOrFalsy = (valor) => {
 if(valor){
  return true;
 } else {
  return false;
 }
}

const numImaginaryFriends = (amigos) => {
  let amigosImaginarios = amigos / 4;
  return Math.round(amigosImaginarios);
  }

const sillySentence = (adjective, verb, string) => {
   
  return `I am so ${adjective} because! ${verb} coding!Time to write some more awesome ${string}!`
}


const howOld = (age, year) => {
let anoAtual = 2024;
let anoNascimento = anoAtual - age
let anoNaoNascido = anoNascimento - year

if(year < anoNascimento){
  return `The year ${year} was ${anoNaoNascido} years before you were born`
}
else if(year > anoAtual){
let anoFuturo = year - anoAtual
age = age + anoFuturo;
 return `You will be ${age} in the year ${year}`

} 
else if (year < anoAtual) {
 let anoPassado = anoAtual - year
 age = age - anoPassado;
 return `You were ${age} in the year ${year}`
} 
}

const whatRelation = (percentSharedDNA) => {
  if (percentSharedDNA === 100) {
      return 'You are likely identical twins.'
  }
  else if(percentSharedDNA >= 35 && percentSharedDNA <= 99) {
      return 'You are likely parent and child or full siblings.'
  }
  else if(percentSharedDNA >= 14 && percentSharedDNA <= 34) {
      return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
  }
  else if(percentSharedDNA >= 6 && percentSharedDNA <= 13)  {
      return 'You are likely 1st cousins.'
  }
  else if(percentSharedDNA >= 3 && percentSharedDNA <= 5) {
      return 'You are likely 2nd cousins.'
  }
  else if(percentSharedDNA >= 1 && percentSharedDNA <= 2)  {
      return 'You are likely 3rd cousins'
  } else if(percentSharedDNA === 0){
  return 'You are likely not related.'
}
}

const tipCalculator = (quality, total) => {
  let gorgeta = 0
  
  switch (quality){
    case 'bad':
      gorgeta = 5
      break;
    case 'ok':
      gorgeta = 15
      break;
    case 'good':
      gorgeta = 20
      break;
    case 'excellent':
      gorgeta = 30
      break;
    default:
      gorgeta = 18
    }

  let percent = (total * gorgeta) / 100;
  return percent;
}

const toEmoticon = (string) => {
  switch (string){
    case "shrug":
      return '|_{"}_|';
    case "smiley face":
      return ':)';
    case 'frowny face':
      return ':(';
    case 'winky face':
      return ';)';
    case 'heart':
      return '<3';
    default:
      return '|_(* ~ *)_|'
  }
}

const colorMessage = (favoritColor, shirtColor) => {
 if(favoritColor === shirtColor){
  return 'The shirt is your favorite color!'
 } else {
   return 'That is a nice color.'
 }
}

const isEven = (number) => {
if(number % 2 === 0){
  return true;
} else {
  return false;
}
}

const numberDigits = (x) => {
 if( x >= 0 && x <=9){
  return `One digit: ${x}`;
 } else if(x >= 10 && x <= 99){
  return `Two digits: ${x}`;
 } else {
  return `The number is: ${x}`
 }
}



