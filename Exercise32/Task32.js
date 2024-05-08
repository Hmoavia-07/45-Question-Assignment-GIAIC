// TASK #32 (Checking Usernames:)
var Current_Users = ["admin", "User1", "User2", "user3", "User4"];
var new_users = ["admin", "user3", "User5", "User6", "User7"];
var Current_Users_lower = Current_Users.map(function (user) {
    return user.toLowerCase();
});
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (Current_Users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("yeah ".concat(new_user, ", is still in list"));
    }
}
;
