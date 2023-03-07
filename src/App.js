import './App.css';
import InputDisplay from './components/InputDisplay';
import RadioGrid from './components/RadioGrid';
// Icons
import MainIcon from './icons/MainIcon.svg';
import iconPerson from './icons/iconPerson.svg';
import iconDollar from './icons/iconDollar.svg'

function App() {
  return (
    <div className="App">
      <div className="container">
      <img src={MainIcon}  alt="logo" />
        <div className='form'>
          <InputDisplay 
            heading={'Bill'}
            logo={iconDollar}
          />
          <RadioGrid/>
          <InputDisplay 
            heading={'Number of People'}
            logo={iconPerson}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
