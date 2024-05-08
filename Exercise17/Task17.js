// TASK #17 (Shrinking Guest List:)
var Guests_ = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
var dinner_Invitation = "You are invited to dinner.";
var cannotAttend = "Shadab";
//Guest replace
var newGuest = "Haseeb";
Guests_[Guests_.indexOf(cannotAttend)] = newGuest;
//Add new Guest in the start of the list.
Guests_.unshift("Hamza");
//Add new Guest in middle of the list.
var middle_guest = "Aqeel";
var middleindex = Guests_.length / 2;
Guests_.splice(middleindex, 0, middle_guest);
//Add new Guest in end of the list.
Guests_.push("Behroz");
console.log(Guests_);
//New statment.
console.log("We can invite only two persons for dinner!");
//Removing Guests in list.
while (Guests_.length > 2) {
    var remove_guests = Guests_.pop();
    console.log("Sorry ".concat(remove_guests, ", We cannot invite you for dinner."));
}
//2 persons left
Guests_.map(function (item) { return console.log("Dear ".concat(item, ", You are still invited for dinner.")); });
//Ending program
Guests_.splice(0, Guests_.length);
console.log(Guests_);
