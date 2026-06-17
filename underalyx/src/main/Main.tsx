import Box from '@mui/material/Box';
import Content from './components/Content';
import Footer from '../components/Footer';
import Gallery from './components/Gallery';
import Navbar from '../components/Navbar';
import TeamSection from './components/TeamSection';

function Main() {
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

export default Main;