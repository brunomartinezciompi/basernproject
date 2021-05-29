const admin = require("firebase-admin");

module.exports = function(req, res) {
  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({error: "Phone and code must be provided"});
  }

  const userPhone = String(req.body.phone);
  const userCode = parseInt(req.body.code);

  admin
      .auth()
      .getUser(userPhone)
      .then(() => {
        const ref = admin.database().ref("users/" + userPhone);
        ref.on("value", (snapshot) => {
          ref.off();
          const user = snapshot.val();
          if (user.code !== userCode || !user.codeValid) {
            res.status(422).send({err: "Code not valid"});
          }
          ref.update({codeValid: false});
          admin
              .auth()
              .createCustomToken(userPhone)
              .then((token) => res.send({token: token}));
        });
      })
      .catch((err) => res.status(422).send({error: err}));
};
