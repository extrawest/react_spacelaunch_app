# Spacelaunch App

This project was generated using [Nx](https://nx.dev).

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

### Deployed Project

Live: [budget-tracker-3da85.web.app](https://spacelaunch-9d930.web.app/)

### Documentation

Here is a short description of all main scripts, commands, and other things that will allow you to start developing this project

#### How to set up your Local Environment?

To start project development you need to have correct node and npm versions. The correct version of the node is in the .nvmrc file. To use it you must, to have nvm(node version manager) installed [(installation guide)](https://github.com/nvm-sh/nvm#installing-and-updating). When you have it installed you can use `nvm use` command from the project root, and it will use version from .nvmrc

```bash
# Use node version specified in .nvmrc
nvm use

# Show current node version
nvm current
```

If you want to update node version you have to do it in .nvmrc

#### How to write correct and meaningful commit messages?

Everyone should write good commit messages, to be able in the future understands what and when was created

Specification: [www.conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/)

Message rules for this project: [conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint#what-is-commitlint)

#### Project Scripts (from package.json)

```bash
# Start development server for default app
yarn start

# Build default app for production
yarn build

# Create service-worker.js for client app (automatically run after build)
yarn postbuild

# Run unit tests for default app
yarn test

# Lint code for default app
yarn lint

# Run end-to-end tests for default app
yarn e2e

# Run unit tests for all apps and libs
yarn test:all

# Lint code for all apps and libs
yarn lint:all

# Update all Nx plugins and generate migrations.json file
yarn migrate

# Run migrations.json to tweak your code
yarn migrations:run

# Build and deploy client app to live
yarn deploy:client:live
```

#### Nx CLI Cheat Sheet

```bash
# Generate an application
nx g @nrwl/react:app <my-app>

# Generate a library
nx g @nrwl/react:lib <my-lib>

# Start dev server
nx serve <my-app>

# Generate a new component
nx g @nrwl/react:component <my-component> --project=<my-app>

# Build a project
nx build <my-app>

# Execute the unit tests via Jest
nx test <my-app>

# Execute the unit tests affected by a change
nx affected:test

# Execute the end-to-end tests via Cypress
nx e2e <my-app>

# Execute the end-to-end tests affected by a change
nx affected:e2e

# See a diagram of the dependencies of your projects
nx graph
```

### List of Tools

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![Nx](https://img.shields.io/badge/workspace-143157?style=for-the-badge&logo=NX&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCB2B?style=for-the-badge&logo=firebase&logoColor=333333)
