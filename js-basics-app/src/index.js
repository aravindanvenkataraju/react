const person = {
  name: "Aravindan",
  walk() {
    console.log(this);
  },
  talk() {}
};
person.talk();
console.log(person);
person.name = "";
console.log(person);
const targetMember = "name";
person[targetMember] = "New Aravindan";
console.log(person);
person.walk();
const walk = person.walk;
console.log(walk);
walk();
const walk2 = person.walk.bind(person);
console.log(walk2);
walk2();
