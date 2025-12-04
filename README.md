# 🚚 ZapShift – Parcel Delivery App

![GitHub Repo stars](https://img.shields.io/github/stars/sohancse53/ZapShift-Client?style=flat-square) 
![GitHub forks](https://img.shields.io/github/forks/sohancse53/ZapShift-Client?style=flat-square) 
![GitHub issues](https://img.shields.io/github/issues/sohancse53/ZapShift-Client?style=flat-square) 
![GitHub license](https://img.shields.io/github/license/sohancse53/ZapShift-Client?style=flat-square)

A full-stack **parcel delivery management system** built with **React**, **Node.js**, **Express**, and **MongoDB**. ZapShift provides **separate dashboards for Users, Riders, and Admins**, allowing:

- Users to book parcels  
- Riders to manage deliveries  
- Admins to control the entire platform  

Secure authentication and **real-time updates** make the platform reliable and efficient.

🌐 **Live Demo:** [https://zapshift50.netlify.app/](https://zapshift50.netlify.app/)

---

## 📖 Table of Contents

- [Features](#-features)
  - [User Features](#user-features)
  - [Rider Features](#rider-features)
  - [Admin Features](#admin-features)
  - [System Features](#system-features)
- [Tech Stack](#-tech-stack)
- [Frontend Dependencies](#-frontend-dependencies)
- [Installation & Setup](#-installation--setup)
  - [Frontend Setup](#-frontend-setup-client)
  - [Backend Setup](#-backend-setup-server)
- [Screenshots / Demo](#-screenshots--demo)
- [Summary](#-summary)

---

## 🚀 Features

### User Features
- Create parcel delivery requests
- Add pickup & drop-off details
- Track parcel delivery status
- View delivery history

### Rider Features
- Accept/decline delivery requests
- Mark deliveries as "In-Progress" or "Completed"
- View assigned deliveries

### Admin Features
- Manage all users (User/Rider/Admin)
- Assign riders to parcels
- Manage parcel database
- Platform-wide dashboard analytics

### System Features
- Role-based authentication (User / Rider / Admin)
- JWT-secured API
- Responsive dashboard UI
- Real-time delivery status updates
- Error-handled backend API
- Clean modern UI with TailwindCSS

---

## 🛠 Tech Stack

**Frontend:**
React, React Router, TailwindCSS, Firebase Auth, Axios, React Query, React Hook Form, Recharts, Swiper, React Icons, Marquee, React Leaflet, Responsive Carousel

**Backend:**
Node.js, Express.js, MongoDB

---

## 📦 Frontend Dependencies

"dependencies": {
  "@tailwindcss/vite": "^4.1.17",
  "@tanstack/react-query": "^5.90.10",
  "axios": "^1.13.2",
  "firebase": "^12.6.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-fast-marquee": "^1.6.5",
  "react-hook-form": "^7.66.0",
  "react-icons": "^5.5.0",
  "react-leaflet": "^5.0.0-rc.2",
  "react-responsive-carousel": "^3.2.23",
  "react-router": "^7.9.6",
  "recharts": "^3.5.1",
  "sweetalert2": "^11.26.3",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.17"
}





## 💻 Installation & Setup

### Frontend Setup (Client)

**Clone the repository**
```bash
git clone https://github.com/sohancse53/ZapShift-Client
cd ZapShift-Client


**Install dependencies
npm install


Create environment file

touch .env.local


--Add your Firebase and backend configuration in .env.local:

VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_message_sender_id
VITE_appId=your_firebase_app_id

VITE_BACKEND_URL=http://localhost:5000


--Run the frontend
  npm run dev

Backend Setup (Server)

Clone the backend repository

git clone https://github.com/sohancse53/ZapShift-Server
cd ZapShift-Server


Install dependencies

npm install


Create environment file

touch .env


Add your backend configuration in .env:

PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret


Start the backend server

npm start


Backend will run at: http://localhost:5000

