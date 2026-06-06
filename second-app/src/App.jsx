import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

const iceCreamData = [
  {
    name: "Strawberry Bliss",
    flavor: "Strawberry",
    description: "A delightful blend of creamy strawberry goodness with real fruit chunks.",
    imageUrl: "https://i.postimg.cc/hPLj8bKL/straw.webp"
  },
  {
    name: "Choco Heaven",
    flavor: "Chocolate",
    description: "Rich, velvety chocolate ice cream that melts in your mouth.",
    imageUrl: "https://i.postimg.cc/8C5zV2M4/choco.webp"
  },
  {
    name: "Minty Magic",
    flavor: "Mint Chocolate Chip",
    description: "Refreshing mint ice cream with crunchy dark chocolate chips.",
    imageUrl: "https://i.postimg.cc/8zwz9pJs/mint.jpg"
  },
  {
    name: "Vanilla Dream",
    flavor: "Vanilla",
    description: "Smooth and classic vanilla bean ice cream, perfect in every scoop.",
    imageUrl: "https://i.postimg.cc/YqK0myB2/van.webp"
  }
];

function App() {
  return (
    <div className="app-container">
      <div className="cards-grid">
        {iceCreamData.map((iceCream, index) => (
          <ProfileCard key={index} profileData={iceCream} />
        ))}
      </div>
    </div>
  );
}

export default App;
