import Colorbox from "./components/Colorbox";
import { ColorProvider } from "./contexts/color";
import SelectColor from "./components/SelectColor";

// value must be provided when use Provider
function App() {
  return (
    <ColorProvider value={{ color: "green" }}>
      <div>
        <SelectColor></SelectColor>
        <Colorbox></Colorbox>
      </div>
    </ColorProvider>
  );
}

export default App;
