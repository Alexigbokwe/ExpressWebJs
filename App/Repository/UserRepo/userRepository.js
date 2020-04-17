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

  numbers() {
    var record = [
      { name: "IJ", number: "08024027420" },
      { name: "Beauty", number: "08107223596" }
    ];
    return users;
  }

  getAllUsers(res) {
    db.query("SELECT * FROM `users` WHERE `status` = ?", 1, function(
      error,
      results,
      fields
    ) {
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
      res.json(results);
    });
  }
}

module.exports = UserRepository;
