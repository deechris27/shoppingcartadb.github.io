import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import ShopItemPage from './pages/shoppinglist-page/ShopItemPage';

function App() {
  return (
    <div>
      <HeaderComponent />
      <ShopItemPage />
    </div>
  );
}

export default App;
