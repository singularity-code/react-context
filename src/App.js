import Colorbox from "./components/Colorbox";
import { ColorProvider } from "./contexts/color";

// value must be provided when use Provider
function App() {
  return (
    <ColorProvider value={{ color: "green" }}>
      <div>
        <Colorbox></Colorbox>
      </div>
    </ColorProvider>
  );
}

export default App;
