const edFriends = (name1, name2, name3) => {
  console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
};

const ageFriends = (age) => new Date().getFullYear() - age;

const greetings = (name1, age1, name2, age2, name3, age3) => {
  console.log(
    `Welcome ${name1}, you are ${ageFriends(
      age1
    )}. Welcome ${name2}, you are ${ageFriends(
      age2
    )}. Welcome ${name3}, you are ${ageFriends(age3)}.`
  );
};

greetings("Thong", 200, "Smith", 1994, "Chit", 2000);
