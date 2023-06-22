console.log('hello world');


let firstname = "samiha"
let lastname = "sher"
let finalString = firstname + "," + " " + lastname
console.log('finalString:', finalString);

console.log('\n===\n');


import { getUsers, addUser } from "./users.js";

const users = getUsers();
console.log(users);

const newUser = {
  userId: 3,
  username: "sara_aldo",
  email: "sara@example.com",
  role: "user",
};

addUser(newUser);
console.log(users);

import {
    janeAMSkincare,
    johnPMSkincare,
    johnAMSkincare,
  } from "./routines.js";
  
  console.log("Jane's AM Skincare Routine:");
  console.log(janeAMSkincare);
  
  console.log("John's PM Skincare Routine:");
  console.log(johnPMSkincare);
  
  console.log("John's AM Skincare Routine:");
  console.log(johnAMSkincare);

  

