# Portfolio Template - Bit | React | AWS

This repository contains a composable frontend application that can serve as a portfolio project designed by React.
Currently, it deploys on Netlify. It also uses AWS Lambda as a backend for contact us page.

**Note:** You can swap the backend from AWS Lambda to anything you prefer.

## Development Setup

- Clone the repository via the `SSH` url
- Install Bit Version Manager - `npm i -g @teambit/bvm` | `yarn global add @teambit/bvm`
- Install Bit - `bvm install`
- Install Project Dependencies - `bit install && bit install`
- Compile components - `bit compile`
- Update Heap Size to about 4GB - `export NODE_OPTIONS="--max-old-space-size=4096"`
- Launch Development Server - `bit start`

## Deployment

Before deploying the application, setup the following environment variables.

```
export NETLIFY_AUTH_TOKEN=<Your Netlify Token>
export AWS_ACCESS_KEY_ID=<Your AWS Access Key ID>
export AWS_SECRET_ACCESS_KEY=<Your AWS Access Key Secret>
```

## Scopes

Design Scope - https://bit.cloud/showoff/design

Portfolio Scope - https://bit.cloud/showoff/personal-portfolio

Contact Scope - https://bit.cloud/showoff/contact-me

Dev Scope - https://bit.cloud/showoff/dev

Starter Scope - https://bit.cloud/showoff/starters
