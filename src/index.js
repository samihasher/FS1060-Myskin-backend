
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
    janePMSkincare,
    johnAMSkincare,
  } from "./routines.js";
  
  console.log("Jane's AM Skincare Routine:");
  console.log(janeAMSkincare);
  
  console.log("Jane's PM Skincare Routine:");
  console.log(janePMSkincare);
  
  console.log("John's AM Skincare Routine:");
  console.log(johnAMSkincare);

  

