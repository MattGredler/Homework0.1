

/* write a conditional that alerts 'enter' if the user is 21 or older 
and alerts 'leave' otherwise */
let age = prompt("how old are you?")
if (age < 21) alert("I am not risking jail time for you!");
else (alert("Probably shouldn't drink anyway"))


const nameList = ['sally', 'sarah', 'betsy', 'sam', 'aretha', 'sun'];

/* use a loop and conditional to alert all the names that begin with 's' */
for (i = 0 ; i < nameList.length ; i ++ ) 
if ((nameList[i].charAt(0)) === "s"){
  alert(nameList[i] + " Starts with an S");
}

const userList = [
  {
    name: 'sally',
    age: 20
  },
  {
    name: 'sarah',
    age: 42
  },
  {
    name: 'betsy',
    age: 16
  },
  {
    name: 'sam',
    age: 55
  },
  {
    name: 'aretha',
    age: 32
  },
  {
    name: 'sun',
    age: 3
  },  
  {
    name: 'nus',
    age: 8
  }
]

// for (i = 0 ; userList.length ; i ++ ) 
// if (userList[i].charAt(0)==="s"){
//   alert(userList[i]);
// }
// for (i = 0 ; i < userList.length ; i ++ )
//   if ((userList.name[i].atChar(0)) === "n"){ 
//   // && (userList[i].atChar(1)) === (userList[i].atChar(-2)));
//   alert( userList[i].age );
//   }
/* use a loop and conditional to alert all the names of users who are over 21 */

for ( i = 0 ; i < userList.length ; i ++ ){  
if ( userList[i].age >= 21){
  alert(userList[i].name + ' is over 21');
}
}

// for ( i = 0 ; userList.length ; i ++ ) 
//   if ( userList[i].age >= 21){
//     alert(userList[i].name);
//   };

// for  ( i = 0 ; userList.length ; i ++ ){
//   let userList.age[i] >= 21;
//   alert(userList[i]);
// }

// for ( i = 0 ; userList.length ; i++ ) {
//   if ((userList.age[i]) >= 21){
//     alert(userList.name[i])
//   }
// }


// for ( i = 0 ; userList.length ; i++ ) {
//   if ((userList.age[i]) >= 21){
//     alert(userList[i])
//   }
// }
// alert(userList.age[i]);

// for (i = 0 ; nameList.length ; i ++ ) 
// if (nameList[i].charAt(0) === "s"){
//   alert(nameList[i] + " Starts with an S");
// }