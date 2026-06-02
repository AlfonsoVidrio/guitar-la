# 🎸 GuitarLA - Guitar Store

A modern e-commerce web application specialized in guitars, built with React, TypeScript and Vite.

## 📸 Screenshot

<img width="1920" height="2323" alt="screencapture-alfonsovidrio-github-io-guitar-la-2025-07-27-03_33_45" src="https://github.com/user-attachments/assets/7ffd0c0a-e1ef-43f9-9f17-1b6a9a821fb2" />

## ✨ Features

- 🛒 **Shopping Cart**: Complete cart system with localStorage persistence
- 📱 **Responsive Design**: Adaptable design for all devices
- 🎯 **TypeScript**: Static typing for more robust code
- 🔥 **React Hot Toast**: Elegant notifications for user experience
- ⚡ **Vite**: Fast and optimized development tools
- 🎸 **Guitar Catalog**: Collection of premium guitars inspired by legendary guitarists

## 🛠️ Technologies Used

- **Frontend**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.0.4
- **Notifications**: React Hot Toast 2.5.2

## 🚀 Installation and Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AlfonsoVidrio/guitar-la.git
   cd guitar-la
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to see the application

## 📜 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run preview` - Previews the production build
- `npm run lint` - Runs ESLint to check the code
- `npm run deploy` - Deploys the application to GitHub Pages

## 🎸 Cart Features

- ➕ **Add guitars**: Add guitars to cart with maximum limit of 5 per model
- 🔢 **Quantity management**: Increase or decrease the quantity of each guitar
- 🗑️ **Remove products**: Remove individual guitars from cart
- 🧹 **Clear cart**: Empty the entire cart with one click
- 💾 **Persistence**: Cart is automatically saved to localStorage
- 💰 **Total calculation**: Shows cart total in real time

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── GuitarItem.tsx      # Individual guitar component
│   └── Header.tsx          # Header component with cart
├── data/                   # Static data
│   └── db.ts              # Guitar database
├── reducers/               # State management
│   └── cart-reducer.ts    # Cart reducer with useReducer
├── types/                  # TypeScript definitions
│   └── index.ts           # Types and interfaces
├── App.tsx                # Main component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## 🔧 Customization

### Adding new guitars

Edit the `src/data/db.ts` file to add new guitars:

```typescript
{
  id: 13,
  name: 'New Guitar',
  image: 'guitarra_13',
  description: 'Description of the new guitar',
  price: 399,
}
```

### Modify cart limits

In `src/reducers/cart-reducer.ts`, you can change the constants:

```typescript
const MAX_ITEMS = 5  // Máximo por guitarra
const MIN_ITEMS = 1  // Mínimo por guitarra
```