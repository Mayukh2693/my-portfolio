import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Testimonials from "./Components/Testimonials/Testimonials";
import TopBar from "./Components/TopBar/TopBar";
import Work from "./Components/Work/Work";

function App() {
  return (
    <>
      <TopBar />
      <Intro />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
