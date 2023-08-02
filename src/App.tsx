import { Navbar } from "@/components";
import { Hello, About, Projects, Contact } from "@/sections";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main className="font-quicksand font-medium text-primary-black flex items-center justify-center">
      <Toaster />
      <Navbar />
      <div className="overflow-x-hidden">
        <Hello />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default App;
