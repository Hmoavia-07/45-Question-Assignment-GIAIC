// TASK #15 (Changing Guest List:)
let guests0:string[] = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
let dinnerInvitation:string = "You are invited to dinner.";
//Cannot attend
let cannotAttend:string = "Shadab";
console.log(`${cannotAttend} cannot attend make it, for dinner.`);
//Guest replace
let newguest:string = "Haseeb";
guests0[guests0.indexOf(cannotAttend)]=newguest;
//updated massage
guests0.map((item)=>console.log(`Hi ${item}, ${dinnerInvitation}`));