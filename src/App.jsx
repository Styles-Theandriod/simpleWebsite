import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import CarouselPage from './components/CarouselPage';
import AnotherComponent from './components/AnotherComponent';
import Cards from './components/Cards';
import Main from './components/Main';
import MovingImages from './components/MovingImages';
import GoogleMeet from './components/GoogleMeet';
import Eventpage from './components/Eventpage';

function App() {
  // const text = 'hello world';
  return (
    <>
      <Navigation />
      <CarouselPage/>
      <AnotherComponent/>
      <Cards/>  
      <Main/>
      <MovingImages/>
      <GoogleMeet/>
      <Eventpage/>
    </>
  )
}

export default App
