import CustomInput from "../../../Form/CustomInput";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export default function Step1() {


  return (
    <>

      <Text
        color="#424C6E"
        fontWeight="600"
        lineHeight="22px"
        fontSize={{ base: "14px", md: "20px" }}
      >
        Complete your profile
      </Text>
      <Flex mt="40px" justify="space-between">
        <Box w="full" mr={{ base: "19px", md: "45px" }}>
          <CustomInput
            label="First Name"
            name="firstname"
            fieldProps={{ type: "text" }}
          />
        </Box>
        <Box w="full">
          <CustomInput
            label="Last Name"
            name="lastname"
            fieldProps={{ type: "last_name" }}
          />
        </Box>
      </Flex>
      <Text
        fontWeight="600"
        fontSize="16px"
        lineHeight="18px"
        pt="30px"
        pb={{ base: "12px", md: "25px" }}
        color="#424C6E"
      >
        Let your Users get to know you
      </Text>

      <Box w="full" mt={{ base: "38px", md: "44px" }}>
        <CustomInput
          label="Email"
          name="email"
          fieldProps={{ type: "email" }}
        />
      </Box>

      <Box w="full" mt={{ base: "38px", md: "44px" }}>
        <CustomInput label="City" name="city" fieldProps={{ type: "text" }} />
      </Box>
    </>
  );
}
