import { Box, Flex, VStack, Stack, Button, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import CustomInput from "@/components/Form/CustomInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import DisplayValidationErrors from "./DisplayValidationErrors";
import { formatValidationErrors } from "utils";

function DriverTabInformationForm({
	children,
	callback = async () => null,
	initialValues = {
		imei: "",
		phone: "",
	},
}) {
	const [errors, setErrors] = useState([]);
	const validationSchema = Yup.object({
		imei: Yup.string().required("IMEI is required"),
		phone: Yup.string().required("Phone number is required").nullable(),
	});
	const toast = useToast();
	const handleProfileUpdate = async (values, { setSubmitting, resetForm }) => {
		try {
			setErrors([]);
			setSubmitting(true);
			await callback(values);
		} catch (error) {
			let displayErrors = [];
			const errorSummary =
				error?.response?.data?.message ??
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
	};
	return (
		<>
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
											label="IMEI"
											name="imei"
											fieldProps={{ type: "text" }}
										/>
									</Box>
									<Box w="full">
										<CustomInput
											label="Phone Number"
											name="phone"
											fieldProps={{ type: "number" }}
										/>
									</Box>
								</Stack>
							</VStack>
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

							{children(formikProps)}
						</Form>
					);
				}}
			</Formik>
		</>
	);
}
DriverTabInformationForm.propTypes = {
	children: PropTypes.func.isRequired,
};
DriverTabInformationForm.defaultProps = {
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

export default DriverTabInformationForm;
