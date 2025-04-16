# Peer Support Website API

This is the backend API for the Peer Support website, handling email submissions and storing them in MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
PORT=3000
```

3. Start the server:
```bash
npm start
```

## API Endpoints

- `POST /api/send-email`
  - Body: `{ "email": "user@example.com", "message": "Your message here" }`
  - Sends an email to peer.support@dartmouth.edu and stores the submission in MongoDB

## Environment Variables

- `MONGO_URI`: MongoDB connection string
- `EMAIL_USER`: Gmail address for sending emails
- `EMAIL_PASS`: Gmail app password (not your regular password)
- `PORT`: Server port (default: 3000)