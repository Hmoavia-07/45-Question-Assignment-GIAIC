// TASK #32 (Checking Usernames:)
let Current_Users: string[] = ["admin", "User1", "User2", "user3", "User4"];
let new_users: string[] = ["admin", "user3", "User5", "User6", "User7"];

let Current_Users_lower: string[] = Current_Users.map((user) =>
  user.toLowerCase()
);

for (let new_user of new_users) {
  if (Current_Users_lower.includes(new_user.toLowerCase())) {
    console.log(`Sorry ${new_user}, that name is taken`);
  } else {
    console.log(`yeah ${new_user}, is still in list`);
  }
};
