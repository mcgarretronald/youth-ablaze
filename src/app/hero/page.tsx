
import Landing from '../Components/HomePageComponents/land';
import EmpowerSection from '../Components/HomePageComponents/EmpowerSection';
import Programs from '../Components/HomePageComponents/Programs';
import Testimony from '../Components/HomePageComponents/Testimony';
import Carousel from '../Components/HomePageComponents/Carousel';
import Contact from '../Components/HomePageComponents/Contact';

export default function HomePage() {
  return (
    <>
      <Landing />
      <EmpowerSection />
      <Programs />
      <Testimony />
      <Carousel />
      <Contact />
    </>
  );
}
