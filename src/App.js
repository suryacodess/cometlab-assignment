import Home from "./components/home/Home";
import AppointmentForm from "./components/appointment-form/AppointmentForm";
import Video from "./components/video/Video";
import Testimonial from "./components/testimonial/Testimonial";
import Feature from "./components/feature/Feature";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Home />
      <AppointmentForm />
      <Video />
      <Testimonial />
      <Feature />
      <About />
    </div>
  );
}

export default App;
