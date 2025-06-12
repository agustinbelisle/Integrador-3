import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding-top: 60px;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Content>
        <AppRoutes />
      </Content>
      <Footer />
    </AppContainer>
  );
};

export default App;
