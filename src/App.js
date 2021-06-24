import Text from "./components/Text";
import { colors } from "./theme";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <div>
      <NavBar/>
      <Text scale="1" value="Lilyish" color={colors.primary.p1} />
    </div>
  );
}

export default App;
