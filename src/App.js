import HelloWorld from "./components/01-helloWorld/01-HelloWorld";
import Comp from "./components/02-comp/02-Comp";
import JsxPractice from "./components/03-jsx/jsx-practice";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style4 from "./components/04-styles/style4";
import Clock1 from "./components/05-clock1/clock1";
import Greetings from "./components/06-props/greetings";
import Clock2 from "./components/07-clock2/clock2";
import ImageGallery from "./components/08-images/image-gallery";
import Image1 from "./components/08-images/image1";
import ProfileCard from "./components/09-profile-card/profile.card";
import BootstrapClassic from "./components/10-bootstrap/bootstrap-classic";
import BootstrapDynamic from "./components/10-bootstrap/bootstrap-dynamic";
import ReactIcon from "./components/11-icons/react-icon";
import Shop from "./components/12-shop/shop";
import Stateless from "./components/13-state/stateless";

function App() {
  return (
    <div className="App">
      {/* <HelloWorld />
      <Comp />
      <Jsx1 />
      <Jsx2 />
      <Jsx3 />
      <Jsx4 />
      <Jsx5 />
      <JsxPractice />
      <Style1 />
      <Style2 />
      <Style4 />
      <Clock1 />
      <Greetings />
            <Clock2 color="white" bgcolor="red" />
      <Clock2 color="black" bgcolor="green" />
      <Image1 />
      <ImageGallery />
      <ProfileCard
        name="Ali Gel"
        location="Istanbul, Turkiye"
        shot="1"
        followers="2"
        followings="10"
        avatar="profile.jpg"
      />
      <BootstrapClassic />
            <BootstrapDynamic />
      <ReactIcon/>
      <Shop />
      */}
      <Stateless/>
    </div>
  );
}

export default App;
