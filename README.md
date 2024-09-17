# Voice-Powered React News Companion With Aarav AI

## Overview

The **Voice-Powered React News Companion** is a dynamic, AI-powered web application that allows users to access and interact with the latest news using voice commands. Leveraging the power of Aarav AI (based on Alan AI), this application listens to user queries and responds with relevant news articles, making the news consumption experience hands-free and more interactive.

## Live Demo

Check out the live demo of the project: [Voice-Powered News Companion](https://tak-news-companion-with-aarav-ai.netlify.app)

## Features

- **Voice Commands:** Users can speak to the app to request news, navigate between articles, or ask for specific topics.
- **Latest News Updates:** Fetches up-to-date news from various sources using third-party news APIs.
- **Interactive Voice Responses:** Aarav AI responds to user queries in real time, reading out headlines, summaries, and more.
- **Customizable News Feed:** Users can specify categories like technology, sports, health, and more to receive tailored news updates.
- **Accessible UI:** Built with accessibility in mind, the app can be used by visually impaired individuals, thanks to its voice-driven interface.

## Tech Stack

- **Frontend:** React.js
- **Voice AI Integration:** Alan AI (Aarav AI)
- **API:** News API (or other third-party news service)
- **Styling:** CSS (with potential use of frameworks like Material-UI or Bootstrap for UI components)
- **Deployment:** Hosted on [Netlify](https://tak-news-companion-with-aarav-ai.netlify.app)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/voice-powered-react-news-companion
   cd voice-powered-react-news-companion
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up API keys:

   - **Alan AI Key:** Sign up on [Alan AI](https://alan.app) and obtain an API key. Add it to your `.env` file as:
     ```
     REACT_APP_ALAN_AI_KEY=your-alan-ai-key
     ```

   - **News API Key:** Get an API key from [NewsAPI](https://newsapi.org). Add it to your `.env` file as:
     ```
     REACT_APP_NEWS_API_KEY=your-news-api-key
     ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

- **Voice Commands:** Speak commands such as:
  - "Give me the latest news."
  - "Show news about technology."
  - "Next article" or "Previous article."
  
  Aarav AI will respond to your voice commands, fetching and reading news articles for you.

- **Categories:** You can ask for specific news categories like business, health, sports, entertainment, etc.

## Contribution

Feel free to fork this repository and submit pull requests. Any contributions, improvements, or bug fixes are welcome!

1. Fork the project.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- **Alan AI (Aarav AI):** For the voice integration.
- **NewsAPI:** For providing the news data.
```

This version includes the link to the hosted demo on Netlify. Let me know if you'd like any further changes!
