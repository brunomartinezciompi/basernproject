const admin = require("firebase-admin");

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422).send({error: "You must provide a phone number"});
  }

  const userPhone = String(req.body.phone);

  admin.auth().createUser({uid: userPhone})
      .then((user) => res.send(user))
      .catch((err) => res.status(422).send({error: err}));
};
