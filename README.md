# Hotel Booking Platform

Welcome to my Hotel Booking Web Application project, this is a modern, user-friendly platform designed to simplify the process of booking hotel accommodations. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
---

# Features
## User Features

- **Hotel Browsing:** Search and filter hotels based on location, price, rating, and amenities.

- **Room Booking:** View available rooms, check details, and book them.

- **User Authentication:** Sign up, log in, and manage your profile.

- **Booking History:** View past and upcoming bookings.

- **Secure Payments:** Integration with secure payment gateways for hassle-free transactions.

## Admin Features

- **Dashboard:** View booking statistics and manage hotel listings.

- **Room Management:** Add, update, or delete rooms and availability.

- **Booking Management:** Monitor and manage user bookings.

# Tech Stack

## Frontend:
- **React.js:** For building a dynamic and responsive user interface.

- **React Router:** For managing navigation and routing.

- **CSS/Bootstrap:** For styling the application.

## Backend:
- **Node.js:** For server-side programming.

- **Express.js:** For building RESTful APIs.

---
## 📂 Project Structure ##

```plaintext
healthcare-platform 📂
├── frontend 📂        
├── backend 📂         
├── docs 🧾            
├── .github 📂       
├── LICENSE 🪪            
├── .gitignore         
├── README.md 🗃️       
└── package.json 📦  
```
---

## 💻 Frontend Directory Structure ##
```plaintext
frontend 📂
├── public 📂                   
│   ├── favicon.ico
│   └── index.html          
│
├── src 📂                      
│   ├── assets 📂               
│   │   ├── styles 📂          
│   │   └── images 🖼️          
│   │
│   ├── components 📂          
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   │
│   ├── pages 🧾              
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── services 📂              
│   │   └── api.js
│   │
│   ├── App.jsx               
│   ├── index.js              
│   └── config.js             
│
├── .env 📂                     
├── package.json              
└── vite.config.js            
```
---
## 🛠 Backend Directory Structure ##
```plaintext
backend 📂
├── src 📂                      
│   ├── config 📂              
│   │   ├── db.js             
│   │   └── env.js            
│   │
│   ├── controllers 📂         
│   │   ├── authController.js 
│   │   └── userController.js 
│   │
│   ├── middlewares 📂          
│   │   └── authMiddleware.js 
│   │
│   ├── models 📂              
│   │   ├── User.js
│   │   └── Appointment.js
│   │
│   ├── routes 📂              
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── index.js
│   │
│   ├── services 📂           
│   │   └── emailService.js   
│   │
│   ├── app.js                
│   └── server.js             
│
├── .env 📂                    
├── package.json              
└── nodemon.json              
```
---

## 🚀 Running the Application ##
#### **Frontend**  (using Vite): ####
```bash
cd frontend
npm run dev

```
#### **Backend**  (using Nodemon): ####
```bash
cd backend
nodemon app.js
```
---
## 🧰 Technologies Used ##
| Category           | Technologies                                                                |
| ----------------- | ----------------------------------------------------------------------- |
| Frontend| React, Vite, CSS |
|Backend  | Node.js, Express.js|
|Database |MongoDB|