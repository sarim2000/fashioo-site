import "./App.css";
import ThirdComponent from "./3rd-section/third.component";

import Header from "./section1/Header";
import Section1 from "./section1/Section1";
 import Second from './2nd-section/Second'
import Section5 from "./section5/Section5";
function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
    		<Second/>
      <ThirdComponent />
      <Section5 />
    </div>
  );
}

export default App;
