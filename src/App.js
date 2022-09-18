import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/00-home/header/header";
import Menu from "./components/00-home/menu/menu";
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
import Counter from "./components/14-counter/counter";
import Counter2 from "./components/14-counter/counter2";
import Birthday from "./components/15-birthday/birthday";
import UseEffect from "./components/16-useEffect/use-effect";
import Clock3 from "./components/17-clock3/clock3";
import UseEffect2 from "./components/18-useEffect/use-effect2";
import RandomImages from "./components/19-random-images/random-images";
import UseRef from "./components/20-useRef/useRef";
import ClassTypeTest from "./components/21-class-type/class-type";
import UserCards from "./components/22-user-cards/user-cards";
import Countries from "./components/23-countries/countries";
import AxiosCrud from "./components/24-axios-crud/axios-crud";
import Form1 from "./components/25-forms/form1";
import Form2 from "./components/25-forms/form2";
import Form3 from "./components/25-forms/form3";
import Form4 from "./components/25-forms/form4";
import Form5 from "./components/25-forms/form5";
import Form6 from "./components/25-forms/form6";
import Exchange from "./components/26-exchange/exchange";
import StoreContext from "./store";

function App() {
  const [currencies, setCurrencies] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const loadData = async () => {
    try {
      const resp = await axios.get(
        "https://api.frankfurter.app/latest?from=TRY"
      );
      setCurrencies(resp.data.rates);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <StoreContext.Provider value={{ currencies, darkMode, setDarkMode }}>
      <div className={`${darkMode ? "dark-mode" : ""}`}>
        <BrowserRouter>
          <Header />
          <Container fluid>
            <Row>
              <Col sm={2}>
                <Menu />
              </Col>
              <Col sm={10}>
                <Routes>
                  <Route path="/hello-world" element={<HelloWorld />} />
                  <Route path="/comp" element={<Comp />} />
                  <Route path="/jsx1" element={<Jsx1 />} />
                  <Route path="/jsx2" element={<Jsx2 />} />
                  <Route path="/jsx3" element={<Jsx3 />} />
                  <Route path="/jsx4" element={<Jsx4 />} />
                  <Route path="/jsx5" element={<Jsx5 />} />
                  <Route path="/jsx-practice" element={<JsxPractice />} />
                  <Route path="/exchange" element={<Exchange />} />
                </Routes>
              </Col>
            </Row>
          </Container>

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
            <Stateless/>
            <Counter />
            <Counter2 />
            <Birthday />
            <UseEffect/>
            <Clock3 />
            <UseEffect2/>
            <UseRef />
            <ClassTypeTest />
            <RandomImages/>
            <UserCards />
            <Countries />
            <AxiosCrud />
            <Form1 />
            <Form2 />
            <Form3 />
            <Form4 />
            <Form5 />
            <Form6 />
      */}
          </div>
        </BrowserRouter>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
