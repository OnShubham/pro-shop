import { Container } from "react-bootstrap";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <div>
      <Header />
      <main className="p-3">
        <Container>
         <HomeScreen />
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
