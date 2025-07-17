---

# 🛒 E-Commerce Platform (Frontend Only)

A modern and responsive **e-commerce frontend** application built with **React**, **Redux Toolkit**, and **Vite**.
🔐 Includes user authentication, product browsing, shopping cart, and wishlist — all stored in **localStorage** for a seamless experience.

> 🚧 **Note:** This is a **frontend-only project**. No backend or database is connected yet.

---
> 🌐 **Live Demo**: [https://tania-shopease.netlify.app/](https://tania-shopease.netlify.app/)

---
## ✨ Features

* 🔐 **User Authentication** (Sign In / Sign Up via LocalStorage)
* 🛍️ **Add to Cart** and 🧡 **Wishlist** support
* 🔎 **Search** and **Filter** products
* 🔒 **Protected Routes** for secure navigation
* 💻 **Responsive UI** for mobile and desktop
* ⚡ **Fast development** with Vite and HMR (Hot Module Reloading)

---

## 🛠 Tech Stack

* **Frontend**: React.js (with Hooks)
* **State Management**: Redux Toolkit
* **Routing**: React Router DOM
* **Styling**: CSS Modules
* **Build Tool**: Vite
* **Storage**: LocalStorage for auth, cart, and wishlist

---

## 🚀 Getting Started

### 🔧 Prerequisites

* Node.js (v14+)
* npm or yarn

### 📥 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Tania2607/E-Commerce_.git
   cd E-Commerce
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🗂️ Project Structure

```
src/
├── components/       # Shared and reusable UI components
├── pages/            # Route-based pages (Home, Login, Cart, etc.)
├── Redux/            # Redux store configuration and slices
├── main.jsx          # App entry point
├── App.jsx           # Main App component with routing
└── index.html        # HTML template for Vite
```

---

## 📦 Development Notes

* 💡 Uses **Vite** for blazing-fast builds and dev server
* 🔁 Hot Module Reloading (HMR) for instant UI updates
* 🧠 Logic and user data are stored in **localStorage** — no database or backend required

---

## 🤝 Contributing

Want to contribute? Awesome!

1. Fork the repository
2. Create a new feature branch:

   ```
   git checkout -b feature/YourFeature
   ```
3. Commit your changes
4. Push the branch:

   ```
   git push origin feature/YourFeature
   ```
5. Open a Pull Request 🚀

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

