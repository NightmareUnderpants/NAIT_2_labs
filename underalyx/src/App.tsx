import Box from '@mui/material/Box';
import './styles/App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import TeamSection from './components/TeamSection';

function App() {
  return (
    <Box>
      <Navbar active="1" />
      <Gallery />
      <TeamSection />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
