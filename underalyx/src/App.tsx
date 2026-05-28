import Box from '@mui/material/Box';
import './styles/App.css';
import ContentSections from './components/ContentSections';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import TeamSection from './components/TeamSection';

function App() {
  return (
    <Box className="app-shell">
      <Navbar active="1" />
      <Gallery />
      <TeamSection />
      <ContentSections />
      <Footer />
    </Box>
  );
}

export default App;
