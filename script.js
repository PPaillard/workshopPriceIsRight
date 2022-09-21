const playerName = prompt("Joueur, quel est ton nom?");
const randomNumber = Math.floor(Math.random() * 100) + 1;
let playerNumber;

do{
   // Je demande à l'utilisateur un nombre entre 1 & 100
   do{
      playerNumber= parseInt(prompt("Choisissez un nombre entre 1 & 100"))
   } 
   // tant que l'utisateur ne rentre pas un nombre
   // on un nombre non compris entre 1 & 100
   while(!Number.isInteger(playerNumber) || playerNumber < 1 || playerNumber > 100)

   if(playerNumber > randomNumber) console.log("Its less!")
   else if(playerNumber < randomNumber) console.log("Its more!")
   else alert(`${playerName}, vous avez gagné !`)
}
while(playerNumber !== randomNumber)



