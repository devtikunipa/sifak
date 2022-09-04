import ScrollTop from "./components/ScrollTop";
import ThemeRoutes from "./configs/routes";
import ThemeCustomization from "./configs/ThemeCustomization";


const App = () => {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <ThemeRoutes />
      </ScrollTop>
    </ThemeCustomization>
  )
}

export default App;
