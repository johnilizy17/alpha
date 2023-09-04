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
  Center
} from "@chakra-ui/react";

export default function Step4({ handleChange, handleBlur, values }) {
  return (
    <>
      <Text
        color="#424C6E"
        fontWeight="600"
        lineHeight="22px"
        fontSize={{ base: "14px", md: "20px" }}
      >
        Verification
      </Text>
      <Box h="auto">

        <Box w="full" mt="30px">
          <Select
            name="type_id"
            value={values.color}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ height: 50, width: "100%" }}
          >
            <option value=""> Select a Verification Type</option>
            <option value="nin"> National ID Card</option>
            <option  value="driver_license">Driver License</option>

            <option  value="voter_id">Voter ID</option>
            <option  value="bvn">BVN</option>
          </Select>
        </Box>
        <Box w="full" mt="30px">
          <CustomInput
            label="ID card Number"
            name="id_number"
            fieldProps={{ type: "text" }}
          />
        </Box>
      </Box>
    </>
  );
}
