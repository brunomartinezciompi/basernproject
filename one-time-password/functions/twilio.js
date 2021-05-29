const twilio = require("twilio");

const accountSid = "ACe433da435aac96a8c42aaa046eaf09c7";
const authToken = "777a9c7ea4927593547f95f02753156e";

module.exports = new twilio.Twilio(accountSid, authToken);
