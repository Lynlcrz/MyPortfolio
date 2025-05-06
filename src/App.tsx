import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      
      {/* Main Content with Tailwind CSS padding */}
      <main className="pt-16">
        {/* Directly rendering the Home component */}
        <Home />
      </main>
    </>
  );
}

export default App;
