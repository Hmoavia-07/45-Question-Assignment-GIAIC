// TASK #15 (Changing Guest List:)
var guests0 = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
var dinnerInvitation = "You are invited to dinner.";
//Cannot attend
var cannotAttend = "Shadab";
console.log("".concat(cannotAttend, " cannot attend make it, for dinner."));
//Guest replace
var newguest = "Haseeb";
guests0[guests0.indexOf(cannotAttend)] = newguest;
//updated massage
guests0.map(function (item) { return console.log("Hi ".concat(item, ", ").concat(dinnerInvitation)); });
