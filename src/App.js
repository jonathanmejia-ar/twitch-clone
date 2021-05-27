import { useState } from 'react';
import './App.css';
import FollowedChannels from './components/FollowedChannels';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [collapseFollowers, setCollapseFollowers] = useState(true);

  return (
    <div className="App">
      <Header />
      <FollowedChannels collapseFollowers={collapseFollowers} setCollapseFollowers={setCollapseFollowers} />
      <Home collapseFollowers={collapseFollowers} />
    </div>
  );
}

export default App;
