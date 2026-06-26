# 🎟️ Booking Events — Backend

A RESTful API server built with **Express.js** and **MongoDB** for the Booking Events web application. Handles all data operations including event management and bookings.

🔗 **Frontend Repo:** [aartisingh07/events-FE](https://github.com/aartisingh07/events-FE)

---

## 🛠️ Tech Stack

| Layer        | Technology              |
|--------------|-------------------------|
| Runtime      | Node.js                 |
| Framework    | Express.js v5           |
| Database     | MongoDB (Native Driver) |
| Environment  | dotenv                  |
| CORS         | cors                    |

---

## 📁 Project Structure

```
events-BE/
├── controllers/      # Request handlers / business logic
├── models/           # MongoDB collection schemas & queries
├── routes/           # Express route definitions
├── server.js         # App entry point
├── .env              # Environment variables (not committed)
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local instance or MongoDB Atlas cluster)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/aartisingh07/events-BE.git
cd events-BE

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

> **Never commit your `.env` file.** It is already in `.gitignore`.

### Running the Server

```bash
node server.js
```

The server will start on `http://localhost:5000` (or the port defined in your `.env`).

---

## 📡 API Endpoints

> Base URL: `http://localhost:5000`

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/events`         | Fetch all events         |
| GET    | `/events/:id`     | Fetch a single event     |
| POST   | `/events`         | Create a new event       |
| POST   | `/bookings`       | Book an event            |
| GET    | `/bookings`       | Fetch all bookings       |

> Exact routes depend on the route files in `/routes`. Update this table if endpoints differ.

---

## 🗂️ MVC Architecture

This project follows the **MVC (Model-View-Controller)** pattern:

- **Models** — Define data structure and interact with MongoDB
- **Controllers** — Contain the business logic for each route
- **Routes** — Map HTTP methods + endpoints to controllers

---

## 🌐 Deployment

This backend can be deployed on platforms like **Render**, **Railway**, or **Cyclic**.

Set the following environment variable on your hosting platform:

```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

---

## 🤝 Related Repository

| Repo | Description |
|------|-------------|
| [events-FE](https://github.com/aartisingh07/events-FE) | React + Vite frontend |

---

## 👩‍💻 Author

**Aarti Singh**
[GitHub](https://github.com/aartisingh07)