# slack-example-app

## 0. Requirements

- [AWS CLI](https://aws.amazon.com/cli/)
- [node.js](https://nodejs.org/en/)
- [A Slack Workspace](https://slack.com/create)

## 1. Setup

```sh
git clone git@github.com:johanholmerin/slack-example-app.git
cd slack-example-app
yarn
```

## 2. Create Slack app

1. Deploy lambda to AWS: `yarn serverless deploy`
2. Copy the lambda endpoint
3. [Create a Slack app](https://api.slack.com/apps?new_app=1)
4. Create a slash command, with the copied endpoint as Request URL
5. Install the app
6. Test it

## Helpful links

- [Enabling interactivity with Slash Commands](https://api.slack.com/interactivity/slash-commands)
- [Using the Slack Events API](https://api.slack.com/apis/connections/events-api)
- [Using the Slack Web API](https://api.slack.com/web)
- [Installing with OAuth](https://api.slack.com/authentication/oauth-v2)
