const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

function getSoftware(userAgent){
  return userAgent.replace(/.*?\(/, '').replace(/\).*/, '');
}
function getLang(acceptLang){
  return acceptLang.replace(/,.*/, '');
}

app.get('*', (req, res) => {

  res.send(`{
            "ipaddress": "${req.ip}",
            "language": "${getLang(req.headers['accept-language'])}",
            "software": "${getSoftware(req.headers['user-agent'])}"
            }`);

});

app.listen(port);
