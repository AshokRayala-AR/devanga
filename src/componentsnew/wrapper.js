import Banner from "../componentsnew/banner.js";
import Navbar from "../componentsnew/navbar.js";
import Jagadguru from "../componentsnew/jagadguru.js";
import Gopuram from "../componentsnew/gopuram";
import Crew from "../componentsnew/crew";
import Text from "../componentsnew/text";
import PinkReceipt from "../componentsnew/pinkreceipt";
import Facilities from "../componentsnew/facilities";
import RegisterForm from "./registration";
// import { BrowserRouter, Route } from "react-router-dom";

export default function Wrapper() {
  return (
    <>
      <Navbar />
      <Banner />
      <Jagadguru />
      <Gopuram />
      <Text />
      <Crew />
      <PinkReceipt />
      <Facilities />
      <RegisterForm />
    </>
  );
}
