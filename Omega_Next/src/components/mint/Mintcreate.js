import {
	Box,
	Flex,
	VStack,
	Stack,
	Center,
	useToast,
	Button,
	Text,
	Select,
	Textarea,
	Input,
	Spinner,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomInput from "@/components/Form/CustomInput";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { RegisterReferral, getAsset, getUserreferralBy } from "@/services/user-services";
import Link from "next/link";
import { readContract, writeContract, prepareWriteContract } from '@wagmi/core'
import ABI from './ABI';
import { ethers } from 'ethers';
import { parseEther } from 'ethers/lib/utils.js';
import { BUSD_Address, NFT_Address } from "@/routes/token";
import USD_ABI from "./USD_ABI";

function MintForm({
	setValue,
	setdisplayPopup
}) {
	const [errors, setErrors] = useState([]);
	const [images, setImage] = useState("");
	const [loading, setLoading] = useState(true)
	const [drivers, setDrivers] = useState([]);
	const [type, setType] = useState("picture");
	const { address } = useAccount()
	const [referredby, setReffedby] = useState("0x6Fc7175d49655dD624CD40c102934e298330048A")
	const [referred, setReffed] = useState("")
	const [buttonDispay, setButtonDisplay] = useState(true)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [prices, setPrices] = useState({price1:"", price2:"", allowed:0})

	const toast = useToast();
	// const router = useRouter();

	const handleProfileUpdate = async (values, { setSubmitting, resetForm }) => {

		if (images.name) {
			console.log(prices)
			setValue({ ...values, images, referredby: referredby, ...prices })

			setdisplayPopup({ state: true, action: "mint", date: values.duration, object:prices })

			try {
				setSubmitting(true);
			} catch (error) {
				toast({
					position: "top-right",
					title: "faile to mint",
					description: "",
					status: "error",
					isClosable: true
				});
			} finally {
				setSubmitting(false);
			}
		} else {
			toast({
				position: "top-right",
				title: "select an image",
				description: "",
				status: "error",
				isClosable: false
			});
		}
	};

	const [displayImage, setDisplayImage] = useState(false);

	function loadFile(event, setFieldValue) {
		document.getElementById("output");
		document.onchange = function () {
			if (event.target.files[0].size > 2097152) {

				toast({
					position: "top-right", title: "Image Upload", render: () => (
						<Link href="https://tinypng.com/" >
							<Box w="300px" bg="red" h="100px" borderRadius="18px" color="#fff" p="10px">
								<Box fontWeight="700" mb="5px">Image Error</Box>
								<Box>
									click here to reduce  size of your file, image must not be above 2mb
								</Box>
							</Box>
						</Link>
					), status: "error", isClosable: true
				});


			} else {
				setType("picture");
				setImage(event.target.files[0]);
				setDisplayImage(true);
				const advert_file = document.getElementById("output");
				advert_file.src = URL.createObjectURL(event.target.files[0]);
				onClose()

			}
			onClose()
		}
	}


	async function Refferal() {
		setLoading(true)
		const wallet = await getUserreferralBy(address)
		const data = await getAsset(address)
		const price1 = await readContract({
			address: NFT_Address,
			abi: ABI,
			functionName: 'cost',
		})
		const price2 = await readContract({
			address: NFT_Address,
			abi: ABI,
			functionName: 'cost1',
		})
		
		const pricing = ethers.utils.formatEther(price1)
		const pricing2 = ethers.utils.formatEther(price2)
		setPrices({...prices, price1:pricing, price2:pricing2})
     
		if (wallet.data) {
			setReffed(wallet.data.user_id)

			if (data.data.length >= 2) {
				setButtonDisplay(false)
				setReffedby("0x6Fc7175d49655dD624CD40c102934e298330048A")
			} else if (wallet.data.user_id.length > 21) {
				setReffedby(wallet.data.user_id)
				setButtonDisplay(false)
			} else {
				setButtonDisplay(false)
				setReffedby("0x6Fc7175d49655dD624CD40c102934e298330048A")

			}
		}
		setLoading(false)
	}

	useEffect(() => {
		if (address) Refferal()
	}, [address])

	async function AllowanceFunction(){
		const allowance = await readContract({
			address: BUSD_Address,
			abi: USD_ABI,
			args:[address,NFT_Address],
			functionName: 'allowance',
		})

		setPrices({...prices, allowed:ethers.utils.formatEther(allowance)})

	}

	function loadFile2(event, setFieldValue) {
		setType("video");
		onClose()
		setImage(event.target.files[0]);
		setDisplayImage(true);
		var advert_file2 = document.getElementById("advert_file2");
		var player = document.getElementById("output2");
		console.log("hello");

		player.src = URL.createObjectURL(event.target.files[0]);
	}

	useEffect(()=>{
		AllowanceFunction()
	},[[]])

	const validationSchema = Yup.object({
		title: Yup.string().required("description is required"),
		duration: Yup.string().required("duration is required"),
		visible: Yup.string().required("visible is required")
	});

	const currentStateStep1 = {
		visible: 2
	}

	const ReferringUser = async () => {
		setLoading(true)
		const referral = await RegisterReferral(
			{
				"user": referred,
				"referral": address
			})
		toast({ position: "top-right", title: "Referral Alert", description: referral.data.message, status: "success", isClosable: true });
		await Refferal()
	}

	return (
		<>
			{
				loading ?
					<Center h="full" w="full" mt="8">
						< Spinner color="red" size="xl" />
					</Center >
					:
					<>
						<Box mb="7px" fontWeight="600">
							Referred by:
						</Box>
						<Flex mb="40px" w="full" maxW="500px" overflowX="hidden" bg="#fff" borderRadius="10px">
							<Input border="none" w="full" disabled={!buttonDispay} colorScheme="transparent" h="50px" value={referred.length > 1 ? `${referred}` : buttonDispay ? referred : `regiz.vercel.app/dashboard?r=${referredby}`}
								onChange={(e) => { setReffed(e.target.value.replace("regiz.vercel.app/dashboard?r=", "")) }}
							/>
							{buttonDispay && <Button h="50px" onClick={ReferringUser} colorScheme="green">Save</Button>}
						</Flex>
						<Formik
							enableReinitialize={true}
							initialValues={currentStateStep1}
							onSubmit={handleProfileUpdate}
							validationSchema={validationSchema}
						>
							{({
								setFieldValue,
								isSubmitting,
								handleChange,
								handleBlur,
								values
							}) => {
								return (
									<Form>


										<Stack spacing="6" direction={["column", "column", "row"]}>
											<VStack spacing="6" align="stretch" w="full" >
												<Box display="none">
													<Field
														label="advert_file"
														type="file"
														id="advert_file"
														name="advert_file"
														className="advert_file"
														style={{ display: "none" }}
														onChange={(event) => {
															loadFile(event, setFieldValue);
														}}
														multiple
														accept="image/*"
													/>
												</Box>


												<Center onClick={() => onOpen()} borderWidth="thin" rounded="sm" w="full" h="64" position="relative" >
													{!displayImage && (
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
													)}
													<Text
														fontWeight="400"
														fontSize="14px"
														lineHeight="203.52%"
														color="green"
														position="absolute"
														bottom="15px"
														left="10px"
													>
														Click to upload Document
													</Text>
													<img
														id="output"
														style={
															displayImage && type == "picture"
																? {
																	width: "100%",
																	height: "100%",
																	objectFit: "contain"
																}
																: { display: "none" }
														}
													/>
												</Center>
												<Modal isOpen={isOpen} size={['xs', 'sm']} isCentered onClose={onClose}>
													<ModalOverlay />
													<ModalContent>
														<ModalHeader>	Upload Requirements* </ModalHeader>
														<ModalCloseButton />
														<ModalBody>

															A clear picture of document in a well lit environment showing all four corners
															<Center justifyContent="space-between" mt="30px">
																<label
																	for="advert_file"
																	style={{ background: "green", padding: 10, color: "white", borderRadius: 10, fontWeight: "700" }}
																>
																	Upload

																</label>
																<Button colorScheme='blue' onClick={onClose}>
																	Close
																</Button>
															</Center>
														</ModalBody>


													</ModalContent>
												</Modal>
												<Center>
													<a href="https://tinypng.com" type="blank">
														<Button colorScheme="green">
															Click to resize image
														</Button>
													</a>
												</Center>
											</VStack>
											<VStack
												spacing="6"
												pt="15px"
												align="stretch"
												w="full"
												maxW="72"
											>

												<Box w="full" color="#000">
													<CustomInput
														label="Document Desription"
														name="title"
														type="textarea"
													/>
												</Box>

												<Box w="full" color="#000">
													<select
														name="duration"
														style={{ width: "100%", height: "40px", padding: 10, background: "#F1F2F3", border: "1px soild grey", borderRadius: 10 }}
														value={values.duration}
														onChange={handleChange}
														onBlur={handleBlur}
													>
														<option >Choose Duration </option>
														<option value={1} >1 year  </option>
														<option value={2} >2 year </option>
													</select>

												</Box>
											</VStack>
										</Stack>
										{/* <Flex justify="center" mt="4">
								  <Button
									  isLoading={isSubmitting}
									  type="submit"
									  mt="4"
									  colorScheme="pink"
									  textTransform="capitalize"
								  >
									  Save Changes
								  </Button>
							  </Flex> */}

										<Flex mt="4">
											<Button
												isDisabled={isSubmitting}
												isLoading={isSubmitting}
												type="submit"
												w="full"
												h="50px"
												mt="4"
												colorScheme="pink"
												textTransform="capitalize"
											>
												Mint
											</Button>
										</Flex>
									</Form>
								);
							}}
						</Formik>
					</>
			}
		</>
	);
}

export default MintForm;
