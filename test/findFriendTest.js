const chai = require('chai');
const assert = chai.assert;

const { findFriend } = require('../findFriend');

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

describe('findFriend', function() {
  it('should return Not found when person does not exist', function() {
    const name = '';
    const field = 'email';
    const expectedOutput = 'Not found';
    assert.equal(findFriend(contacts, name, field), expectedOutput);
  });
  
  it('should return Not found when person\'s friend does not have specified field', function() {
    const name = 'Costello';
    const field = 'birthday';
    const expectedOutput = 'Not found';
    assert.equal(findFriend(contacts, name, field), expectedOutput);
  });
  
  it('should return { name: "Costello", phone: "767 676 7676" } for Abbott and phone', function() {
    const name = 'Abbott';
    const field = 'phone';
    const expectedOutput = '{ name: "Costello", phone: "767 676 7676" }';
    assert.equal(findFriend(contacts, name, field), expectedOutput);
  });
});