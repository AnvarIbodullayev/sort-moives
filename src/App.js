import './App.css';
import Category from './Components/Category/Category';
import Menu from './Components/Menu/Menu';
import items from './Components/Data/Data';
import { useState } from 'react';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='header text-center'>
          <h2>Our Movies</h2>
          <hr/>
          <div className='category'>
            <Category categories={categories} filterItems={filterItems} />
          </div>
        </div>
        <div className='section'>
          <div className='row m-0 p-0'>
            <Menu items={menuItems} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
