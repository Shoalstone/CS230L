import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 01</h2>
      <p>WVU ID: 800336452</p>
      <p>Hi I am James</p>
      <Card title="Card 1" content="lorem ipsum" />
      <Card title="Card 2" content="lorem ipsum" />
      <Card title="Card 3" content="lorem ipsum" />
    </div>
  );
}

export default App;
