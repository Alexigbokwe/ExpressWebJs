/** =========================================================================================
    Author: Lexigbokwe
    File Name: UserRepo.js
    Description: The User Repository creates an abstraction layer between the 
                data access layer and the business logic layer of an application.
========================================================================================== **/
const users = [
  {
    id: 1,
    name: "Alex",
    email: "alex@yahoo.com"
  },
  {
    id: 2,
    name: "Prince",
    email: "prince@yahoo.com"
  },
  {
    id: 3,
    name: "Ambrose",
    email: "ambrose@yahoo.com"
  },
  {
    id: 4,
    name: "Obinna",
    email: "obinna@yahoo.com"
  }
];

class UserRepository {
  getAUser(id) {
    let user = users.find(element => {
      if (element.id === id) {
        return element;
      }
    });
    return user;
  }

  getAllUsers() {
    var record = [
      { name: "IJ", number: "08024027420" },
      { name: "Beauty", number: "08107223596" }
    ];
    return users;
  }
}

module.exports = UserRepository;
