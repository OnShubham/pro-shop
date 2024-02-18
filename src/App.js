import { Container } from "react-bootstrap";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1>Welcome to ProShop</h1>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
