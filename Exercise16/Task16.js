// TASK #16 (More Guests:)
var Guests = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
var dinner_invitation = "You are invited to dinner.";
//Cannot attend
var Cannot_Attend = "Shadab";
//guest replace
var new_guest = "Haseeb";
Guests[Guests.indexOf(Cannot_Attend)] = new_guest;
//print statment
console.log("Wellcome all we found a bigger dinner table");
//Add new Guest in the start of the list.
Guests.unshift("Hamza");
//Add new Guest in middle of the list.
var middle_guest = "Aqeel";
var middleindex = Guests.length / 2;
Guests.splice(middleindex, 0, middle_guest);
//Add new Guest in end of the list.
Guests.push("Behroz");
//Send massage.
Guests.map(function (item) { return console.log("Dear ".concat(item, ", ").concat(dinner_invitation)); });
