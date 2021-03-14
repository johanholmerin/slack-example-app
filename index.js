const querystring = require('querystring');

async function slash(event) {
  // TODO verify command
  // https://api.slack.com/authentication/verifying-requests-from-slack

  const body = querystring.parse(event.body);
  console.log(body);

  return {
    statusCode: 200,
    // https://api.slack.com/reference/surfaces/formatting
    body: `${body.text} <@${body.user_id}>`,
  };
}

module.exports = { slash };
