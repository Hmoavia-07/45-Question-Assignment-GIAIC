// TASK #30 (Hello Admin:)
let userNames:string[]=["admin", "user1", "user2", "user3", "user4"];
userNames.forEach(userNames => {
    if (userNames === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${userNames}, would you like to see a status report?`);
    }
});