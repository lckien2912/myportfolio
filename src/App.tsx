import { Navbar, Footer } from "@/components";
import { Hello, About, Experiences, Projects, Contact } from "@/sections";

const App = () => {
  return (
    <main className="font-quicksand font-medium text-primary-black flex items-center justify-center">
      <Navbar />
      <div className="overflow-x-hidden">
        <Hello />
        <About />
        {/* <Experiences /> */}
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default App;
