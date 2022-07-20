import WeatherWidget from './components/weatherWidget';

function App() {
 return (
  <div className='App'>
   <div style={{ display: 'flex' }}>
    <WeatherWidget identifer={'first'} />
   </div>
  </div>
 );
}

export default App;
