import logo from "./logo.svg";
import "./App.css";
import SliderNavbar from "./component/Share/SliderNavbar/SliderNavbar";
import Slider from "../src/component/Slider/Slider";
import OurCourse from "./component/OurCources/OurCources";
import SellingCourses from "./component/SellingCourses/SellingCourses";
import OnlineClass from "./component/OnlineClass/OnlineClass";
import Instructor from "./component/Instructor/Instructor";
import News from "./component/News/News";
import OurFocus from "./component/OurFocus/OurFocus";
import OurGrowingSection from "./component/OurGrowingSection/OurGrowingSection";
import OurClassLearning from "./component/OurClassLearning/OurClassLearning";
import TruePotential from "./component/TruePotential/TruePotential";
import SuccessStory from "./component/SuccessStory/SuccessStory";
import Subscribe from "./component/Subscribe/Subscribe";
import Footer from "./component/Share/Footer/Footer";

function App() {
  return (
    <>
      <SliderNavbar></SliderNavbar>
      <Slider></Slider>
      <OurCourse></OurCourse>
      <SellingCourses></SellingCourses>
      <OnlineClass></OnlineClass>
      <Instructor></Instructor>
      <News></News>
      <OurFocus></OurFocus>
      <OurGrowingSection></OurGrowingSection>
      <OurClassLearning></OurClassLearning>
      <TruePotential></TruePotential>
      <SuccessStory></SuccessStory>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default App;
