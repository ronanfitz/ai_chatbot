# AI Chatbot

Welcome to the AI Chatbot repository! This repository hosts the source code and assets for an AI Chatbot website.

## About

The AI Chatbot is an interactive chatbot designed to provide assistance and answer questions related to various topics. Powered by advanced natural language processing (NLP) algorithms, the chatbot offers a seamless conversational experience.

## Features

- **Interactive Chat Interface**: Engage in conversations with the AI chatbot in real-time.
- **Multi-Topic Support**: Get answers to questions across different domains and topics.
- **Natural Language Understanding**: The chatbot is equipped with advanced NLP capabilities to understand and respond to user queries effectively.
- **Responsive Design**: The chatbot website is optimized for various devices, including desktops, tablets, and smartphones.
- **Secure Environment**: The chatbot website is secure with bcrypt encryption and no storage of user's chats.

## Getting Started

To get started with the AI Chatbot, must create a new .env file in the `/backend` directory. It must contain all of these fields.
```
OPEN_AI_SECRET=
OPEN_AI_ORGANIZATION_ID=
MONGODB_URL=
JWT_SECRET=
COOKIE_SECRET=
PORT=
```

Next, using your command line/terminal, go into `/backend` and run `npm install` then `npm run dev`. This will start the backend service.

With that running, open another command line/terminal window, go into `/frontend`, and run the same commands, `npm install` and `npm run dev`. This will start the front end service.

Access the app at http://localhost:8080.

## Contributing

Contributions to the AI Chatbot project are welcome! If you'd like to contribute enhancements or report issues, please feel free to open a pull request or submit an issue on GitHub.

## License

This project is licensed under the [MIT License](https://github.com/ronanfitz

## TODO

- Deploy to an environment
- Add testing and documentation
- Add support for more databases
- Add lists of previous chats you've had
- Clean up constants and move them out
