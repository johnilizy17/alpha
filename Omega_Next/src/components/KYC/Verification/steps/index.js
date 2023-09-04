import CustomInput from "../../../Form/CustomInput";
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
  Spacer,
  Wrap,
  WrapItem,
  CircularProgress,
  CircularProgressLabel,
  Collapse,
  useToast
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import * as Yup from "yup";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { RegisterUser } from "@/services/user-services";
import { useAccount } from "wagmi";
import Step4 from "./Step4";

export default function Steps({ percentage, setLoading, setPercentage, stepState, setSave, verifing, setDashSlides }) {

  const toast = useToast();
  const [saveButton, setSaveButton] = useState(false)
  const [loadingButton, setLoadingButton] = useState(false)
  const { address } = useAccount()



  const initiateProfile = async (values, { setSubmitting, resetForm }) => {
    try {
      setLoading(true)
      setSubmitting(true);
      const total = stepState + 1
      setDashSlides(total)
      if (total > 2) {
        setLoadingButton(true)
        setSave(false)
    if(values.policy){
   delete values.policy
        const data = await RegisterUser({ ...values, wallet: address });

        if (data.status === 200) {
          verifing(true)
          setPercentage(80)
        }}else{
        toast({
          position: "top-right",
          title: "Policy",
          description: "you need to accept regiz policy and terms",
          status: "error",
          isClosable: true
        });}
        setLoadingButton(false)
       
      }

    } catch (error) {
      toast({
        position: "top-right",
        title: "Profile failed to upload",
        description: JSON.stringify(error.response.data.msg),
        status: "error",
        isClosable: true
      });

      setLoadingButton(false)
    } finally {
      setSubmitting(false);
      setLoading(false)
    }

  };



  const validationSchema = Yup.object({
    firstname: Yup.string().required("first name is required"),
    lastname: Yup.string().required("last name is required"),
    email: Yup.string().required("email is required")
  });

  const validationSchem3 = Yup.object({
    usertag: Yup.string().required("userTag is required"),
    policy: Yup.string().required("policy is required"),
  });
  const validationSchema2 = Yup.object({});

  const currentStateStep1 = {
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone": "",
    "address": "",
    "id_number": "",
    "type_id": ""
  }

  const currentStateStep3 = {
    bank_name: "",
    bank_account_number: ""
  }

  const currentStateStep = {
    "id_number": "",
    "firstname": "",
    "lastname": "",
  }

  return (
    <Box>
      <Flex direction="column" align="center">
        <Center>
          <Flex
            align="center"
            w={{ base: "80vw", sm: "450px", md: "500px", lg: "750px" }}
          >
            <Flex
              h={{ base: "53px", md: "70px" }}
              w={{ base: "87px", md: "87px" }}
              color="#fff"
              bg="#FF4268"
              rounded="lg"
              justify="center"
              direction="column"
              fontSize="13px"
            >
              <Center>
                <Text>Profile</Text>
              </Center>
              <Center mt="8px">
                <svg
                  mt="8px"
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="4.5"
                    cy="4"
                    r="4"
                    fill={stepState >= 0 ? "#FFF" : "#14142B"}
                  />
                </svg>
              </Center>
            </Flex>
            <Box h="1px" bg="#797380" flex="1" />
            <Flex
              h={{ base: "53px", md: "70px" }}
              w={{ base: "97px", md: "115px" }}
              color="#fff"
              bg={stepState > 0 ? "#FF4268" : "#EFF0F7"}
              rounded="lg"
              justify="center"
              direction="column"
              fontSize="13px"
              transition="background 0.5s ease-in-out"
            >
              <Center>
                <Text color={stepState > 0 ? "#FFF" : "#14142B"}>
                  Verfication
                </Text>
              </Center>
              <Center mt="8px">
                <svg
                  mt="8px"
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="4.5"
                    cy="4"
                    r="4"
                    fill={stepState > 0 ? "#FFF" : "#14142B"}
                  />
                </svg>
              </Center>
            </Flex>
            <Box h="1px" bg="#797380" flex="1" />

            <Flex
              h={{ base: "53px", md: "70px" }}
              w={{ base: "78.32px", md: "108px" }}
              color="#fff"
              bg={stepState > 1 ? "#FF4268" : "#EFF0F7"}
              rounded="lg"
              justify="center"
              direction="column"
              fontSize="13px"
              transition="background 0.5s ease-in-out"
            >
              <Center>
                <Text color={stepState > 1 ? "#FFF" : "#14142B"}>
                  Username
                </Text>
              </Center>
              <Center mt="8px">
                <svg
                  mt="8px"
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="4.5"
                    cy="4"
                    r="4"
                    fill={stepState > 1 ? "#FFF" : "#14142B"}
                  />
                </svg>
              </Center>
            </Flex>
          </Flex>
        </Center>
        <Center mt={{ base: "26.53px", sm: "42px" }}>
          <Formik
            initialValues={stepState == 1 ? currentStateStep : stepState == 0 ? currentStateStep1 : currentStateStep3}
            onSubmit={initiateProfile}
            validationSchema={stepState == 0 ? validationSchema : stepState == 1 ? validationSchema2 : validationSchem3}
          >
            {({ isSubmitting, handleChange, handleBlur, values }) => (
              <Form>
                <Box
                  bg="#fff"
                  w={{ base: "80vw", sm: "450px", md: "500px", lg: "750px" }}
                  rounded="md"
                  p={{ base: "18px", md: "20px" }}
                  pd={{ base: "26px", md: "44px" }}
                >
                  {percentage === 60 ?
                    <Step4 handleChange={handleChange} values={values} handleBlur={handleBlur} /> :
                    stepState == 0 ?
                      <Step1 /> : stepState == 1 ? <Step2 handleChange={handleChange} values={values} handleBlur={handleBlur} /> : <Step3 handleChange={handleChange} values={values} handleBlur={handleBlur} />
                  }
                </Box>
                <Flex
                  justify="space-between"
                  mt={{ base: "45px", md: "28px" }}
                  w={{ md: "400px" }}
                  float={{ md: "right" }}
                >
                  {percentage !== 60 && stepState > 0 ?
                    <Box bg="#fff">
                      <Button
                        isDisabled={saveButton}
                        isLoading={saveButton}
                        w={{ base: "169px", md: "210px" }}
                        color="#FF4268"
                        textTransform="capitalize"
                        fontWeight="400"
                        fontSize={{ base: "12px", md: "18px" }}
                        colorScheme="teal"
                        variant="outline"
                        _after={{
                          bg: "red",
                          opacity: 0,
                          transition: "all 0.8s"
                        }}
                        _active={{
                          bg: "red",
                          opacity: 0,
                          transition: "all 0.8s"
                        }}
                        onClick={() => {
                          setSave(false)
                        }}
                      >
                        Save & Conitinue Later
                      </Button>
                    </Box> : <Box />}

                  <Button
                    isDisabled={loadingButton}
                    isLoading={loadingButton}
                    type="submit"
                    w="108px"
                    colorScheme="pink"
                    textTransform="capitalize"
                    fontWeight="400"
                    fontSize={{ base: "12px", md: "18px" }}
                    _after={{
                      bg: "red",
                      opacity: 0,
                      transition: "all 0.8s"
                    }}
                    _active={{
                      bg: "red",
                      opacity: 0,
                      transition: "all 0.8s"
                    }}
                  >
                    {percentage === 60 ? "Submit" :
                      <>
                        Next
                        <svg
                          width="8"
                          height="13"
                          viewBox="0 0 8 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginLeft: 14.02 }}
                        >
                          <path
                            d="M2.02441 1.51233L6.91546 6.40337L2.02441 11.2944"
                            stroke="white"
                            stroke-width="2.10725"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </>
                    }
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Center>
        <Center></Center>
      </Flex>
    </Box>
  );
}
