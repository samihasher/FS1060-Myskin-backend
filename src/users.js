// This is an array of user objects
let users = [
    {
      userId: 1,
      username: "john_doe",
      email: "john@example.com",
      role: "user",
    },
    {
      userId: 2,
      username: "jane_smith",
      email: "jane@example.com",
      role: "user",
    },
    // More user objects...
  ];
  
  // Function to get the users array
  export const getUsers = () => {
    return users;
  };
  
  // Function to add a new user to the array
  export const addUser = (user) => {
    users.push(user);
  };
  
  
  