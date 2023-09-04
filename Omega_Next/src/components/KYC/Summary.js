import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  CircularProgress,
  CircularProgressLabel
} from "@chakra-ui/react";
import React, { useState } from "react";
import Pages from "./Verification/NotVerified";
// import Verified from "./Verification/Verified";

function DashboardHome() {

  // const { user } = useSelector((state) => state.driver);
  const [userVerification, setUserVerification] = useState(false)
  const [user, setUser] = useState({ state: "unverified" })
  return (
    <div className="dashboard">
        <Pages verification={setUserVerification} />
    </div>
  );
}

export default DashboardHome;
