import ScrollTop from "./components/ScrollTop";
import ThemeRoutes from "./configs/routes";
import ThemeCustomization from "./configs/ThemeCustomization";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 0, easing: 'ease-in-back', once: true });
    Aos.refresh();
  })
  return (
    <ThemeCustomization>
      <ScrollTop>
        <ThemeRoutes />
      </ScrollTop>
    </ThemeCustomization>
  )
}

export default App;
