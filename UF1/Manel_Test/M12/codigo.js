console.log(obj.name) //edinson
console.log(obj.surname) //carranza saldaña
console.log(obj.age) //24
console.log(obj.developer) //true
console.log(email) 

var obj = [
    {
      'name': 'Edinson', 
      'email': 'edinsoncode@example.com',
      'job': 'developer',
      'age': 24 
    },
    {
      'name': 'Richard', 
      'email': 'richard@example.com',
      'job': 'developer',
      'age': 24 
    },
    {
      'name': 'Luis', 
      'email': 'luis@example.com',
      'job': 'developer',
      'age': 24 
    },    
for (x of obj) {
  console.log(x.name + ' ' + x.email);
}