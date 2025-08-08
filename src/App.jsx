import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer"; // Se houver um rodapé

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Section />
      <ProjectsSection />
      <Footer /> {/* Se houver um rodapé, ele fica no final */}
    </>
  );
};

export default App;
