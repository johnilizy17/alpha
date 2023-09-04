import CustomInput from "../../../Form/CustomInput";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Select,
  Center,
  Checkbox
} from "@chakra-ui/react";
import Link from "next/link";

export default function Step2({ handleChange, handleBlur, values }) {
  return (
    <>
      <Text
        color="#424C6E"
        fontWeight="600"
        lineHeight="22px"
        fontSize={{ base: "14px", md: "20px" }}
      >
        Tag Username Info
      </Text>
      <Text fontWeight="600" fontSize="14px" lineHeight="22px" mt="19px" color="#424C6E">
          Choose a preferred User/tag name to send and receive RegizCoin
      </Text>
      <Box h="70vh">
        <Box w="full" mt={{ base: "33px", md: "45px" }}>
          <Box w="full">
            <CustomInput
              label="User Tag name"
              name="usertag"
              fieldProps={{ type: "text" }}
            />
          </Box>
        </Box>
        <Flex alignContent="center" mt="20px">
          <Checkbox 
          name="policy"
          onChange={handleChange}
          />
          <Text mb="5px" ml="5px">
            Do you accept our <Link href="/policy" style={{color:"blue"}}> terms and policy</Link>
          </Text>
        </Flex>
      </Box>
    </>
  );
}
