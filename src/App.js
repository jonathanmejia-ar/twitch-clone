import './App.css';
import FollowedChannels from './components/FollowedChannels';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <FollowedChannels />
    </div>
  );
}

export default App;
