
// TASK #21 (Write a program that creates Objects containing these items:)

interface item{
    name:string
    price:number
}
// creating object 1:
const book:item = {
    name:"Computer Science",
    price:450
}
// creating object 2:
const Syrup:item = {
    name:"Panadol",
    price:140
}
console.log(`Book name: ${book.name}, price: $${book.price}`);
console.log(`Syrup name: ${Syrup.name}, price: $${Syrup.price}`);