const express = require("express");
const cors = require("cors");
const AccountMgr = require("./model/AccountMgr");

const app = express();

// Allow requests from any website
app.use(cors());

// Allow JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Authenticate a user
function doLogin(userid, pwd, results) {
  // Create account manager
  const mgr = new AccountMgr();

  // Retrieve account by userid
  const account = mgr.get(userid);

  // Check that the account exists and password matches
  if (account && account.getPassword() === pwd) {
    results.status = true;
    results.userid = userid;
    results.name = account.getName();
  }

  return results;
}

// Handle login requests
app.post("/login", (req, res) => {
  // Default response
  let results = {
    status: false,
  };

  // Read userid and password from request body
  const { userid, pwd } = req.body;

  results = doLogin(userid, pwd, results);

  // Return authentication failed (401 Unauthorized)
  if (!results.status) {
    return res.status(401).json({
      status: false,
      message: "Invalid user ID or password.",
    });
  }

  // Return authentication succeeded (200 OK)
  res.json(results);
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});