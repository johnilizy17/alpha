import { Box, Flex, VStack, Stack, Heading, Button, Avatar, Input } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useRef } from "react";
import CustomInput from "@/components/Form/CustomInput";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import DisplayValidationErrors from "./DisplayValidationErrors";
import { formatValidationErrors } from "utils";
import {useSelector, useDispatch} from 'react-redux'
import { editDetails } from "app/features/auth/driverSlice";
import {MdModeEditOutline} from 'react-icons/md'
import { updateDriverProfile,updateDriverProfileImage } from "services/driver-services";



function DriverPersonalInformationForm({
	admin = false,
	children,
	callback = async () => null,
	initialValues
}) {
	const [errors, setErrors] = useState([]);
	const hiddenFileInput = useRef(null);
	const ref = useRef(null);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("Upload File");
	const validationSchema = Yup.object({
		
	});
	const toast = useToast();
	const dispatch = useDispatch();
	const {user, editState} = useSelector((state) =>state.driver);

	 const updatePhoto =async ()=>{
		
		const formData = new FormData()
     	formData.append("photo", file)
		console.log("file", file)
		try {
			const {
				data
			} = await updateDriverProfileImage(formData)
			//dispatch(setUser(user));
			console.log(data, "image sucessfully updated")
			toast({
				description: "Profile updated successfully",
				position: "top-right",
				status: "success",
			});
		  } catch (error) {
			  console.log(error, error.response, "errorr")
		  }
	 }
	useEffect(()=>{
	 console.log(editState, "edit state")
	 updatePhoto()
	},[file])
	const handleProfileUpdate = async (values, { setSubmitting, resetForm }) => {
		try {
			setErrors([]);
			setSubmitting(true);
			console.log(values, "values")
			const data = await callback(values);
			console.log(data, "updated profile")
		} catch (error) {
			let displayErrors = [];
			const errorSummary =
				error?.response?.data?.message ||
				"An error occured updating your profile";

			toast({
				description: errorSummary,
				position: "top-right",
				status: "error",
			});

			/* Checking if the error summary is "Validation failed" and if it is, it will set the
            errors to the displayErrors array. */
			if (errorSummary == "Validation failed") {
				displayErrors = formatValidationErrors(error);
			}
			setErrors(displayErrors);
			throw error;
		} finally {
			setSubmitting(false);
		}
		resetForm()
		dispatch(editDetails(false))
	};

	const updateFile =async (e) => {
		  
		setFile(URL.createObjectURL(e.target.files[0]))
	    
	};


	  const handleClick = event => {
		hiddenFileInput.current.click();
	  };
	return (
		<>
		    <Flex m="30px 0 40px 0" alignItems="baseline" flexWrap="wrap">
			    <Avatar size='2xl' name='Your pic' src={file} />
				    <Button onClick={handleClick} ml="5px" mt="0" leftIcon={<MdModeEditOutline/>} bg='#EFF0F6' fontSize={14} color='rgba(64, 64, 64, 1)' variant='solid'>
                       Change Picture
                     </Button>
					 <Input
					    ref={hiddenFileInput}
                        display={"none"}
                        placeholder={"UPLOAD"}
                        type="file"
                         accept="image/*"
                         onChange={(e) => updateFile(e)}
                    ></Input>
			</Flex>
			<DisplayValidationErrors errors={errors} />
			<Formik
				enableReinitialize={true}
				initialValues={initialValues}
				onSubmit={handleProfileUpdate}
				validationSchema={validationSchema}
			>
				{(formikProps) => {
					return (
						<Form>
							<VStack spacing="6" align="stretch">
								<Stack spacing="6" direction={["column", "column", "row"]}>
									<Box w="full">
										<CustomInput
											label="First Name"
											name="first_name"
											value={formikProps.values.first_name}
											fieldProps={{ type: "text" , disabled: !editState && !admin }}
										/>
									</Box>
									<Box w="full">
										<CustomInput
											label="Last Name"
											name="last_name"
											fieldProps={{ type: "text", disabled: !editState && !admin }}
										/>
									</Box>
								</Stack>
								<Stack spacing="6" direction={["column", "column", "row"]}>
									<Box w="full">
										<CustomInput
											label="Email Address"
											name="email"
											fieldProps={{ type: "email", disabled: !admin }}
										/>
									</Box>
									<Box w="full">
										<CustomInput
											label="Phone Number"
											name="phone"
											fieldProps={{
												type: "number",
												disabled: !admin
												// disabled: !admin && formikProps.values.phone,
											}}
										/>
									</Box>
								</Stack>
								<Box w="full">
									<CustomInput
										label="Address"
										name="address"
										fieldProps={{ type: "text",disabled: !editState && !admin }}
									/>
								</Box>
								<Stack spacing="6" direction={["column", "column", "row"]}>
									<Box w="full">
										<CustomInput
											label="City"
											name="city"
											fieldProps={{ type: "text" ,disabled: !editState && !admin}}
										/>
									</Box>
									<Box w="full">
										<CustomInput
											label="Zip code"
											name="zip_code"
											fieldProps={{ type: "number", disabled: !editState && !admin }}
										/>
									</Box>
								</Stack>
								<Heading fontWeight="normal" fontSize="md">
									Let your riders get to know you (optional)
								</Heading>
								<Box w="full">
									<CustomInput
										label="Favorite Hobby"
										name="hobby"
										fieldProps={{ type: "text", disabled: !editState && !admin }}
									/>
								</Box>
								<Box w="full">
									<CustomInput
										label="Favorite Sport"
										name="sport"
										fieldProps={{ type: "text", disabled: !editState && !admin }}
									/>
								</Box>
								<Box w="full">
									<CustomInput
										label="Bio"
										name="bio"
										fieldProps={{ type: "text", disabled: !editState && !admin }}
									/>
								</Box>
								<Box w="full">
									<CustomInput
										label="Favorite Food"
										name="favorite_food"
										fieldProps={{ type: "text", disabled: !editState && !admin }}
									/>
								</Box>
							</VStack>
						  {editState && <Flex justify="center" mt="4">
								<Button
									isLoading={formikProps.isSubmitting}
									type="submit"
									mt="4"
									colorScheme="pink"
									textTransform="capitalize"
								>
									Save Changes
								</Button>
							</Flex> }

							{/*{children(formikProps)}*/}
						</Form>
					);
				}}
			</Formik>
		</>
	);
}
DriverPersonalInformationForm.propTypes = {
	children: PropTypes.func.isRequired,
};
/*DriverPersonalInformationForm.defaultProps = {
	
	children: (formikProps) => (
		<Flex justify="center" mt="4">
			<Button
				isLoading={formikProps.isSubmitting}
				type="submit"
				mt="4"
				colorScheme="pink"
				textTransform="capitalize"
			>
				Save Changes
			</Button>
		</Flex>
	),
};
*/
export default DriverPersonalInformationForm;
