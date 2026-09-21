const Account = require("./Account");

/**
 * Quick and dirty DAO for retrieving accounts' details
 */
class AccountMgr {

  constructor() {
    this.accounts = {
      "apple.2026": new Account("apple.2026", "Apple TAN", "apple.2026.pwd"),
      "orange.2026": new Account("orange.2026", "Orange CHAN", "orange.2026.pwd"),
    };
  }

  /**
   * @return {Account|null} Account object
   * If not found, null
   */
  get(userid) {
    return this.accounts[userid] ?? null;
  }
}

module.exports = AccountMgr;

// Testing
if (require.main === module) {
  const mgr = new AccountMgr();

  console.log("Get Apple");
  console.log(mgr.get("apple"));

  console.log("Get unknown");
  console.log(mgr.get("unknown"));
}