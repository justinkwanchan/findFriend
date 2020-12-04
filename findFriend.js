// W02D4 (Stretch) - findFriend - Kata
// a function that will take in three parameters.

// The first parameter is the contact data itself,
// The second is the name of a contact, and,
// The third parameter will be specifying the field (property) of the friend we want
// back. The function will take these parameters and return the name and specified field of
// the first friend listed in the contact's friends list. So, using the data shown above,
// specifying "Laurel" as the first parameter, and "email" as the second would look at
// Laurel's list of friends, and return an object with Hardy's name and e-mail address.

// If the contact requested or if the field requested is not found, then return "Not found".


// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const findFriend = (data, contactName, field) => {
  // Contact list does not contain contact name
  const nameArray = data.map(obj => obj.name);
  if (!nameArray.includes(contactName)) {
    return 'Not found';
  }
  
  const firstFriend = data.filter(obj => obj.name === contactName)[0].friends[0];

  // Person's friend does not have specified field
  if (!(field in data.filter(obj => obj.name === firstFriend)[0])) {
    return 'Not found';
  }

  /*************************************************************/
  /******************** ES6 SYNTAX MAGIC!!! ********************/
  /*************************************************************/
  const firstFriendObj = data.filter(obj => obj.name === firstFriend);
  const { name, [field]: _ } = firstFriendObj[0];

  return { name, [field]: _ };
};

console.log(findFriend(contacts, 'Buster', 'email'));

module.exports = { findFriend };