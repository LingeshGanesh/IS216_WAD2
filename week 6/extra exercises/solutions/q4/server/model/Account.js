/**
 * Account class
 */
class Account {
  // Constructor
  constructor(userid, name, password) {
    this.userid = userid;
    this.name = name;
    this.password = password;
  }

  // Getters
  getUserid() {
    return this.userid;
  }

  getName() {
    return this.name;
  }

  getPassword() {
    return this.password;
  }

  // Setters
  setUserid(userid) {
    this.userid = userid;
  }

  setName(name) {
    this.name = name;
  }

  setPassword(password) {
    this.password = password;
  }

  // Convert object to JSON string
  toString() {
    return JSON.stringify({
      userid: this.userid,
      name: this.name,
      password: this.password,
    });
  }
}

module.exports = Account;