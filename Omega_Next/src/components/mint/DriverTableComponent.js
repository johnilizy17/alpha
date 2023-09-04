import React, { useState, useEffect } from 'react'
import {
	Box, Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr, Button, useToast, IconButton, Text, Flex,
} from "@chakra-ui/react"
import Moment from 'react-moment';

// import moment from "moment";


function DriverTableComponent({ drivers }) {


	const toast = useToast();

	const [pageNumber, setPageNumber] = useState(1);
	const toaster = useToast()
	const [copied, setCopied] = useState()

	const copy = (e) => {
		setCopied(e)
		toaster({
			title: "copied successfully",
			position: "top-right",
			status: "success",
			isClosable: true,
		})
		navigator.clipboard.writeText(`rdt-${e}`)
	}


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


	return (
		<>
			<Box w="100%" color="#000" overflowX="scroll">
				<Table variant="simple" maxW="100%" overflowX="hidden">
					<Thead bg="gray.100">
						<Tr>
							<Th fontSize={["8px", "12px"]}>s/n</Th>
							<Th fontSize={["8px", "12px"]}>Documet ID</Th>
							<Th fontSize={["8px", "12px"]}>Title</Th>
							<Th fontSize={["8px", "12px"]}>Price</Th>
							<Th fontSize={["8px", "12px"]}>Date Minted</Th>

						</Tr>
					</Thead>
					<Tbody>
						{drivers?.map((driver, index) => (

							<Tr
								key={index}
								bg={index % 2 ? "gray.50" : "white"}
								cursor="pointer"
							>
								<Td fontSize={["10px", "14px"]}>
									{index+1}
								</Td>
								<Td>
									<Flex align="center">
									<Text mr="5px"> {`rdt-${driver._id}`}</Text>

									<IconButton mr="10px"
										onClick={() => copy(driver._id)}
									>
										<svg width="18" height="18" fill="#0097B2" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
											<path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
											<path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
											<path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" fill="green" style={copied === driver._id ? { opacity: 1, transition: "1s ease-in" } : { opacity: 0, transition: "1s ease-in" }} />
										</svg>
									</IconButton>
									</Flex>
								</Td>
								<Td fontSize={["10px", "14px"]}>{driver.title}</Td>
								<Td fontSize={["10px", "14px"]}>
								{driver.amount == "15"? `$${driver.amount}/1year`:`$${driver.amount}/2year`}
								</Td>
								<Td fontSize={["10px", "14px"]}>
									<Moment fromNow>
									{driver.createdAt}
									</Moment>
									</Td>
									
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</>
	)
}


export default DriverTableComponent
