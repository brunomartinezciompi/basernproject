const admin = require("firebase-admin");
const twilio = require("./twilio");

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422).send({error: "You must provide a phone number"});
  }

  const userPhone = String(req.body.phone).replace(/[^\d]/g, "");

  admin
      .auth()
      .getUser(userPhone)
      .then((userRecord) => {
        const code = Math.floor(Math.random() * 8999 * 1000);
        twilio.messages.create(
            {
              body: "Your code is " + code,
              to: userPhone,
              from: "+15125883991",
            },
            (err) => {
              if (err) {
                res.status(422).send({error: err});

                admin
                    .database()
                    .ref("users/" + userPhone)
                    .update({code: code, codeValid: true}, () => {
                      res.send({success: true});
                    });
              }
            }
        );
      })
      .catch((err) => res.status(422).send({error: "User not found"}));
};
