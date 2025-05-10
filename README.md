# VidSecure - Video Calls and Language Exchange Platform

VidSecure is a full-stack web application designed to connect language learners worldwide. It provides features like video calls, chat, friend requests, and user onboarding to facilitate language exchange and communication.

## Features

- **User Authentication**: Sign up, log in, and OTP-based email verification.
- **Onboarding**: Users can set up their profiles with details like bio, native language, learning language, and location.
- **Friend Requests**: Send, accept, and manage friend requests.
- **Chat**: Real-time messaging powered by Stream Chat.
- **Video Calls**: Seamless video calling using Stream Video SDK.
- **Notifications**: Get notified about friend requests and new connections.
- **Theme Selector**: Choose from multiple themes to personalize the UI.
- **Developer Info**: Meet the developers behind the project.

## Tech Stack

### Frontend
- **React**: Component-based UI development.
- **Vite**: Fast development server and build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Stream SDKs**: For chat and video call functionalities.
- **React Query**: Data fetching and state management.
- **Zustand**: Lightweight state management for theme selection.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Stream Chat & Video SDKs**: For chat and video call integration.
- **JWT**: Secure user authentication.
- **Nodemailer**: Email service for sending OTPs.

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB instance
- Stream API Key and Secret
- Email credentials for OTP service

### Steps to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/VidSecure.git
   cd VidSecure
   ```

2. **Setup Backend**
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and configure the following:
     ```properties
     PORT=5001
     MONGO_URI=<your-mongodb-uri>
     STEAM_API_KEY=<your-stream-api-key>
     STEAM_API_SECRET=<your-stream-api-secret>
     JWT_SECRET_KEY=<your-jwt-secret>
     EMAIL_USER=<your-email>
     EMAIL_PASS=<your-email-password>
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Setup Frontend**
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `frontend` directory and configure the following:
     ```properties
     VITE_STREAM_API_KEY=<your-stream-api-key>
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

4. **Access the Application**
   - Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```
VidSecure-video-calls/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.jsx
│   ├── .env
│   └── package.json
└── README.md
```

## Environment Variables

### Backend
- `PORT`: Port for the backend server.
- `MONGO_URI`: MongoDB connection string.
- `STEAM_API_KEY`: Stream API key for chat and video calls.
- `STEAM_API_SECRET`: Stream API secret for token generation.
- `JWT_SECRET_KEY`: Secret key for JWT authentication.
- `EMAIL_USER`: Email address for sending OTPs.
- `EMAIL_PASS`: Password for the email account.

### Frontend
- `VITE_STREAM_API_KEY`: Stream API key for frontend integration.

## Developers

- **Mahesh Jadhao** - [GitHub](https://github.com/MAHESH94944/) | [LinkedIn](https://www.linkedin.com/in/mahesh-jadhao-521959279/)
- **Rohan More** - [GitHub](https://github.com/rename2222) | [LinkedIn](http://linkedin.com/in/rohan-more-0a8177278)
- **Hemant Nandane** - [GitHub](https://github.com/hemantgnandane) | [LinkedIn](https://www.linkedin.com/in/hemant-nandane-8a7034262)
- **Tanmay Mali** - [GitHub](https://github.com/TanmayMali5404) | [LinkedIn](https://www.linkedin.com/in/tanmay-mali/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Stream SDKs](https://getstream.io/) for chat and video call functionalities.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [React Query](https://tanstack.com/query/latest) for state management.
- [MongoDB](https://www.mongodb.com/) for database services.
