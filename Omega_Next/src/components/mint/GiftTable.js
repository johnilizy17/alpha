import React, { useState, useEffect } from 'react'
import {
	Box, Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr, Button, useToast, Center, Text,
} from "@chakra-ui/react"
import Moment from 'react-moment';
import Lottie from 'lottie-react';
import  reward from '@/assets/dashboard/reward.json';

function GiftTableComponent({ drivers, setdisplayPopup }) {


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
		Reward History
		</Box>
			<Box w="100%" overflowX="scroll">
				{drivers.length === 0 ?

					<Center textAlign={"center"} fontSize="18px" flexDirection={"column"}>

						<Box w={["300px", "400px"]} mb="20px">
							<Lottie animationData={reward} loop={true} />
						</Box>

				<Box>
					You currently have no rewards
				</Box>
					</Center>

					:
					<Table variant="simple" maxW="100%" overflowX="hidden">
						<Thead bg="gray.100">
							<Tr>
								<Th fontSize={["8px", "12px"]}>s/n</Th>								
								<Th fontSize={["8px", "12px"]}>ID</Th>
								<Th fontSize={["8px", "12px"]}>Price</Th>
								<Th fontSize={["8px", "12px"]}>Total Reward</Th>
								<Th fontSize={["8px", "12px"]}>claimed reward</Th>
								<Th fontSize={["8px", "12px"]}>Available Reward</Th>
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
									<Td fontSize={["10px", "14px"]} color="red" >
									{driver._id}
									</Td>
									<Td fontSize={["10px", "14px"]}>$ {driver.pending/3 }</Td>
									<Td fontSize={["10px", "14px"]}>3x</Td>
									<Td fontSize={["10px", "14px"]}>$ {driver.claimed?parseFloat(driver.claimed.toFixed(5)):0.00}</Td>
									
									<Td fontSize={["10px", "14px"]}>$ {parseFloat(driver.reward_amount.toFixed(5))}</Td>
									
								</Tr>
							))}
						</Tbody>
					</Table>}
			</Box>
		</>
	)
}


export default GiftTableComponent
