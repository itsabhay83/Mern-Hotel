# MERN Hotel Booking System

## [Live Link](https://abhay-portfolio-kappa-one.vercel.app/)


## Preview
![Preview](https://media-hosting.imagekit.io/a44b368e9fcd4c6a/screenshot_1745780443508.png?Expires=1840388445&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KKJO9eBXsCp0-OYnw~v2iVpfS4NdTQfwHOhccb2QSd89uAHmVoxWfvqDURG4Arn62PU7qiO6oeSNEOLBNorAoUQVXu0f2p6fdT8BhAHIqZIhHrQ9TJgsJfb~VDYsreqD3uy1wQyyQr02OfGS8k7kyACx72FBtA-sAACfhgtPOEUBWvYHwBHF-ZXunLL2Mwax-A-D3G0Us801Vr3OmcvgnIntvajqUUFw3oARCYUWiQNj6BnO4jzWUoP9Ciq4PoDYJ0qzURNfFpcTFFdg1xHT~GubA7X5XjqJxcobHjirkDkYQRj~ozSLEZlqZWDsy5PZhLQsA8UaMI3FsDPcqQJPaw__)

The **MERN Hotel** is a full-stack booking application built on the **MERN stack** (MongoDB, Express, React, Node.js).

It provides:
- A responsive **React/Vite** frontend.
- An expected **Node.js/Express** backend with a **MongoDB** database.
- Functionality for users to:
  - Browse available hotels.
  - View room details and availability.
  - Register or log in via google, github , facebook, linkedln.
  - Make room bookings through a rich, interactive UI.
  - Embedded solana and ethereum wallets for users as they register.
  

# Authentication Using Civic Auth
1. Integrated ***Civic Auth*** for secure, **decentralized login** with **embedded Ethereum and Solana wallets**.

2. Simplified **user authentication**, eliminating the need for private key management.

3. Enhanced security with a **smooth wallet connection**, ensuring seamless app interaction.

4. Positioned the app as a decentralized solution for bookings and payments, aligning with the future of **blockchain-enabled** applications.

# Installation
## Clone the Repository

First, clone the repository and navigate into the project directory:

```bash
git clone https://github.com/itsabhay83/Mern-Hotel.git
cd Mern-Hotel
```
## Frontend Setup:


- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install dependencies in the project root (this is a Vite + React app):

```bash
npm install
```

## Environment Variables Setup

Create a `.env.local` file in the project root. At minimum, define the following:

```ini
VITE_CIVIC_CLIENT_ID=YOUR_CIVIC_CLIENT_ID       # Your Civic Auth Web3 client ID
VITE_SERVICE=YOUR_EMAILJS_SERVICE_ID            # Your EmailJS service ID
VITE_TEMPLATE=YOUR_EMAILJS_TEMPLATE_ID          # Your EmailJS template ID
VITE_SECRET=YOUR_EMAILJS_PUBLIC_KEY             # Your EmailJS public key
```

## Start the Frontend Development Server

After setting up the environment variables and installing dependencies, start the Vite development server:

```bash
npm run dev
```

This will launch the Vite development server (e.g. on http://localhost:5173 by default).


# Features 
 ### 1. Full MERN Architecture: 
 - React/Vite frontend and Node/Express backend with MongoDB (JavaScript end-to-end).

 ### 2. User Authentication: 
-  Secure signup and login system to access protected pages.

### 3. Hotel Browsing: 
-  Browse hotels and cities; detailed hotel pages show available rooms.

 ### 4.  Room Availability & Booking:

- View room details (photos, description, price).

- Select dates and create bookings.

- Backend checks for date collisions.

 ### 5. User Profile & Bookings:

- View "My Bookings" list.

- See booking details and cancel bookings.

### 6. Contact & Blog Pages: 
- Includes About, Contact form (with EmailJS), and Blog posts.

### 7.  Responsive UI:
 - Built with TailwindCSS for mobile-friendly design, hero images, and slideshows.
 ### 8.  Civic Auth & Web3 Wallet Integration:

- Users can login via Google , Github , Linkedln , facebook using **Civic Auth SDK**.
- Integrated ***Civic Auth*** for secure, **decentralized login** with **embedded Ethereum and Solana wallets**.
-  Positioned the app as a decentralized solution for bookings and payments, aligning with the future of **blockchain-enabled** applications.


### 9.  Rich Component Library:

- React Query (@tanstack/react-query)

- Skeleton loaders

- Toast notifications



## Modern Technology Stack: Vite, Tailwind, PostCSS, ESLint, Civic sdk etc.