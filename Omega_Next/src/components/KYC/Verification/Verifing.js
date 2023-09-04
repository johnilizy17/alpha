import React, { useEffect, useState } from "react";
const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1NmFhNjk5Yy00ODRiLTQ2ODEtYmQ5ZS01MWY3MDVjNTNlMWUiLCJlbWFpbCI6ImpvaG5hYnJhaGFtdG9zaW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjFmMzZjYTMxYTM5YzEzYTkzYzgzIiwic2NvcGVkS2V5U2VjcmV0IjoiMjZiYTBjNjMxNjI2ZjFjYjhiZTExYzJiM2E5Yjc5ZWJjYzhiMDNlZmUxYmViNTZlZDY2YjIxOTFiYjA4ZTVkMiIsImlhdCI6MTY4MzI4ODU1OH0.1IHyw94S2oHsLB7Xk4_akVZubolzZaG-BgSMWuLJG_4`
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
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionIcon,
	ScaleFade,
	useDisclosure,
	useToast,
	IconButton
} from "@chakra-ui/react";
import Outlets from "./Outlets";

import Lottie from 'lottie-react';
import Verify from '../../../assets/dashboard/mint.json'
import CustomInput from "@/components/Form/CustomInput";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useAccount } from "wagmi";
import { updateUserInformation } from "@/services/user-services";

export default function Verifing({ imageUrl }) {

	const { isOpen, onToggle } = useDisclosure();
	const [errors, setErrors] = useState([]);
	const [images, setImage] = useState();
	const [drivers, setDrivers] = useState([]);
	const [type, setType] = useState("picture");
	const [displayImage, setDisplayImage] = useState(false);
	const { address } = useAccount()
	const [laoding, setLoading] = useState(false)
	const toast = useToast()


	const handleSubmission = async (value) => {

		const formData = new FormData();

		formData.append('file', images)

		const metadata = JSON.stringify({
			name: 'File name',
		});
		formData.append('pinataMetadata', metadata);

		const options = JSON.stringify({
			cidVersion: 0,
		})
		formData.append('pinataOptions', options);

		try {
			const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
				maxBodyLength: "Infinity",
				headers: {
					'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
					Authorization: JWT
				}
			});

			return res.data.IpfsHash
		} catch (error) {
		}
	};


	async function UploadPicture() {
		setLoading(true)
		if (images) {
			const image = await handleSubmission()

			const updated = await updateUserInformation(address, { profileImage: image })
			console.log(updated)
			if (updated.status === 200) {
				toast({ position: "top-right", title: "Image", description: 'Image successfully upload', status: "success", isClosable: true });

			} else {

			}
		} else {
			toast({ position: "top-right", title: "Image", description: 'upload an Image', status: "error", isClosable: true });
		}
		setLoading(false)
	}

	function loadFile(event) {
		setDisplayImage(true);
		setType("picture");
		setImage(event.target.files[0]);
		const advert_file = document.getElementById("output");
		advert_file.src = URL.createObjectURL(event.target.files[0]);
	}

	useEffect(() => {
		if (imageUrl) {
			setDisplayImage(true);
			const advert_file = document.getElementById("output");
			advert_file.src = `https://gateway.pinata.cloud/ipfs/${imageUrl}?_gl=1*1ybf4ge*rs_ga*MjRhODBjMTktNTNlYS00OTI3LTg4MmYtYzRjNjRhOWQ5Nzcy*rs_ga_5RMPXG14TE*MTY4Mzg3ODA5MS4xLjEuMTY4Mzg3ODE0OS4yLjAuMA`
		}
	}, [imageUrl])

	return (
		<Box position="relative">
			<Center>
				<Text

					mt="23px"
					mb="30px"
					fontSize={{ base: "18px", md: "24px" }}
					fontWeight="800"
				>
					Upload Your Profile
				</Text>
			</Center>

			<VStack>
				<Formik>
					{({
						setFieldValue,
						isSubmitting,
						handleChange,
						handleBlur,
						values
					}) => {
						return (
							<Form>
								<Box display="none">
									<input
										label="advert_file"
										type="file"
										id="advert_file"
										name="advert_file"
										className="advert_file"
										style={{ display: "none" }}
										onChange={(event) => {
											loadFile(event);
										}}
										multiple
										accept="image/*"
									/>
								</Box>

								<label
									for="advert_file"

								>
									<Center position={"relative"} borderWidth="thin" rounded="sm" w={["70vw", "50vw"]}  h="300px" mb="30px" >

										{!displayImage && (
											<>
												<Center position={"absolute"} fontSize={["md", "4xl"]} color="blue" >Click or Drag an Image</Center>
												<svg
													width="124"
													height="102"
													viewBox="0 0 124 102"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M110.714 0H13.2857C5.94821 0 0 6.85005 0 15.3V86.7C0 95.15 5.94821 102 13.2857 102H110.714C118.052 102 124 95.15 124 86.7V15.3C124 6.85005 118.052 0 110.714 0ZM115.143 59.0885L87.2739 26.9944C85.5446 25.0033 82.7411 25.0033 81.0119 26.9944L44.2858 69.2885L29.7024 52.494C27.9732 50.5029 25.1697 50.5029 23.4404 52.494L8.85705 69.2885V15.3C8.85705 12.4833 10.8398 10.1999 13.2857 10.1999H110.714C113.16 10.1999 115.143 12.4833 115.143 15.3V59.0885H115.143Z"
														fill="#DADADA"
													/>
												</svg>
											</>
										)}
										{
											displayImage &&
											<Box p="10px"  position="absolute" top="5px" right="5px">
												<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
													<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
													<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
												</svg>
											</Box>
										}
										<img
											id="output"
											style={
												displayImage
													? {
														width: "100%",
														height: "100%",
														objectFit: "contain"
													}
													: { display: "none" }
											}
										/>
									</Center>
								</label>
								<Center>
									<Button bg="#0097B2" isSubmitting={laoding} isDisabled={laoding} onClick={() => { UploadPicture() }} p="20px">
										Submit
									</Button>
								</Center>
							</Form>
						);
					}}
				</Formik>
			</VStack>
		</Box>
	);
}
