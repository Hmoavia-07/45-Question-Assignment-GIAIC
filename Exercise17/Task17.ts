// TASK #17 (Shrinking Guest List:)

let Guests_:string[] = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
let dinner_Invitation:string = "You are invited to dinner.";
let cannotAttend:string = "Shadab";
//Guest replace
let newGuest:string = "Haseeb";
Guests_[Guests_.indexOf(cannotAttend)]=newGuest;
//Add new Guest in the start of the list.
Guests_.unshift("Hamza");
//Add new Guest in middle of the list.
let middle_guest:string = "Aqeel";
let middleindex = Guests_.length/2;
Guests_.splice(middleindex,0,middle_guest);
//Add new Guest in end of the list.
Guests_.push("Behroz");
console.log(Guests_);
//New statment.
console.log("We can invite only two persons for dinner!");
//Removing Guests in list.
while(Guests_.length>2){
let remove_guests = Guests_.pop();
console.log(`Sorry ${remove_guests}, We cannot invite you for dinner.`);
}
//2 persons left
Guests_.map((item)=>console.log(`Dear ${item}, You are still invited for dinner.`));
//Ending program
Guests_.splice(0, Guests_.length);
console.log(Guests_);