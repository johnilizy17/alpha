import React, { useState, useEffect } from 'react'
import {
	Box, Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr, Button, useToast, Center,
} from "@chakra-ui/react"
import Moment from 'react-moment';

// import moment from "moment";


function ReferralTableComponent({ drivers }) {


	const toast = useToast();
	// const router = useRouter();

	const [pageNumber, setPageNumber] = useState(1);



	// const deleteCategories = async (values) => {


	// 	try {
	// 	  const data = await adminDeleteCategories(values);
	// await fetchDriversadminGetAllDrivers(10)
	// 	  toast({
	// 		position: "top-right",
	// 		description: "The categories is successfully deleted",
	// 		status: "success",
	// 		isClosable: true
	// 	  });
	// 	} catch (error) {
	// 	  toast({
	// 		position: "top-right",
	// 		title: "Category failed to delete",
	// 		description: "",
	// 		status: "error",
	// 		isClosable: true
	// 	  });
	// 	}
	//   };

	console.log(drivers.length)

	return (
		<>
			<Box fontSize="18px" fontWeight="bold" mb="8px">
				Referred Users
			</Box>
			<Box w="100%" overflowX="scroll">
				{drivers.length === 0 ?

					<Center m="50px" color="#fff" textAlign={"center"} fontSize="18px">

						Try and refer someone to enjoy the Regiz referral Bonus

					</Center>

					:
					<Table variant="simple" maxW="100%" overflowX="hidden">
						<Thead bg="gray.100">
							<Tr>
								<Th fontSize={["8px", "12px"]}>s/n</Th>
								<Th fontSize={["8px", "12px"]}>Address</Th>
								<Th fontSize={["8px", "12px"]}>Date</Th>
							</Tr>
						</Thead>
						<Tbody color="#000">
							{drivers?.map((driver, index) => (

								<Tr
									key={index}
									bg={index % 2 ? "gray.50" : "white"}
									cursor="pointer"
								>
									<Td fontSize={["10px", "14px"]}>
										{index + 1}
									</Td>
									<Td fontSize={["10px", "14px"]}>{driver.referral}</Td>
									<Td fontSize={["10px", "14px"]} color="red" >
										<Moment fromNow>
											{driver.createdAt}
										</Moment>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>}
			</Box>
		</>
	)
}


export default ReferralTableComponent
