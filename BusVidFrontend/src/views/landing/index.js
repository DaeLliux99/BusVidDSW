import React, {useRef} from "react";
import {
  Button,
  useDisclosure
} from "@chakra-ui/react"
import SignInView from "../SignInView";

const LandingPage = () => { 
  
  return (
    <div>
      <p>Esta es la landing page</p>
      <SignInView />
    </div>
  )};

export default LandingPage;
