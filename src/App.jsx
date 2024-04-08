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
import ThemeProvider from './components/ThemeProvider';
import ThemedButton from './components/ThemedButton';
import Compo from './components/Compo'
import Count from './components/Count';
import RequestExample from './components/RequestExample';
import Form from './components/Form';
function App() {
  // const text = 'hello world';
  return (
    <>
    <ThemeProvider>
      <Navigation />
      <CarouselPage/>
      <AnotherComponent/>
      <Cards/>  
      <Main/>
      <MovingImages/>
      <GoogleMeet/>
      <Eventpage/>
      <Compo/>
      <Count/>
      <Form/>
      <RequestExample/>
      <ThemedButton/>
    </ThemeProvider>
    </>
  )
}

export default App
