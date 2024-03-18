<img width="1070" alt="GitHub Repo Cover" src="https://github.com/corbado/corbado-php/assets/18458907/aa4f9df6-980b-4b24-bb2f-d71c0f480971">

# Corbado with Remix - Example

[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![Slack](https://img.shields.io/badge/slack-join%20chat-brightgreen.svg)](https://join.slack.com/t/corbado/shared_invite/zt-1b7867yz8-V~Xr~ngmSGbt7IA~g16ZsQ)

## Welcome to Corbado

This example demonstrates how to combine the Corbado React component, `@corbado/react` and integrate it with Remix for a seamless user experience.

## Structure of the Application

```
.
├── .env
├── package.json
└── app
    ├── entry.client.tsx
    ├── root.tsx
    ├── utilities
    │   ├── AuthComponent.client.tsx
    │   └── ProfileComponent.client.tsx
    └── routes
        ├── _index.tsx
        └── profile.tsx
```

## Points to Note

- For the Corbado React package to work with Remix, you need to prevent the Server bundle rom containing any imports from `@corbado/react` when building. This is achieved with putting Corbado imports only inside files that have `.client` in front of their file extension (e.g. `AuthComponent.client.tsx`). Inside your routes SSR of these Components needs to be diabled with the help of (this method)[https://remix.run/docs/en/main/route/hydrate-fallback]


## :speech_balloon: Support & Feedback

### Report an issue

If you encounter any bugs or have suggestions, please [open an issue](https://github.com/corbado/example-passkeys-remix/issues/new).

### Slack channel

Join our Slack channel to discuss questions or ideas with the Corbado team and other developers.

[![Slack](https://img.shields.io/badge/slack-join%20chat-brightgreen.svg)](https://join.slack.com/t/corbado/shared_invite/zt-1b7867yz8-V~Xr~ngmSGbt7IA~g16ZsQ)

### Email

You can also reach out to us via email at vincent.delitz@corbado.com.

### Vulnerability reporting

Please report suspected security vulnerabilities in private to security@corbado.com. Please do NOT create publicly viewable issues for suspected security vulnerabilities.