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
    Link,
    Spinner
} from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomInput from "@/components/Form/CustomInput";
import Lottie from 'lottie-react';
import document from '@/assets/no_document.json'
import { getDocumentByID } from "@/services/user-services";
import Router, { useRouter } from "next/router";

function MintForm({
    setValue,
    setdisplayPopup
}) {
    const [errors, setErrors] = useState([]);
    const [images, setImage] = useState("");
    const [drivers, setDrivers] = useState([]);
    const [type, setType] = useState("picture");
    const [loading, setLoading] = useState(true)

    const toast = useToast();
    // const router = useRouter();

    const router = useRouter();
    let url
    url = router.query.assetID
    async function SearchDocumentTitle(e) {
        const data = await getDocumentByID(e)
        setDrivers(data.data)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        if (url) SearchDocumentTitle(url)
    }, [url])
    const handleProfileUpdate = async (values, { setSubmitting, resetForm }) => {
        console.log(images.name)
        if (images.name) {
            // setValue({...values, images})

            // setdisplayPopup({ state: true, action: "mint", date:values.duration })
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
                isClosable: true
            });
        }
    };

    const [displayImage, setDisplayImage] = useState(false);

    function loadFile(event, setFieldValue) {
        setType("picture");
        setImage(event.target.files[0]);
        setDisplayImage(true);
        const advert_file = document.getElementById("output");
        advert_file.src = URL.createObjectURL(event.target.files[0]);
    }

    function loadFile2(event, setFieldValue) {
        setType("video");
        setImage(event.target.files[0]);
        setDisplayImage(true);
        var advert_file2 = document.getElementById("advert_file2");
        var player = document.getElementById("output2");
        console.log("hello");

        player.src = URL.createObjectURL(event.target.files[0]);
    }


    const validationSchema = Yup.object({
        title: Yup.string().required("description is required"),
        duration: Yup.string().required("duration is required"),
        visible: Yup.string().required("visible is required")
    });

    const currentStateStep1 = {}

    return (

        <>

            <Box w="160px" p="20px">

            </Box >
            {loading ?
                <Center h="50vh" w="full" mb="160px">
                    <Spinner color="red" size="xl" />
                </Center>
                :
                drivers.length == 0 ?
                    <Center display="flex" justifyContent="center" alignItem="center" w={["full"]} mt="40px">
                        <Box w={["300px", "400px"]}>
                            <Lottie animationData={document} loop={true} />
                            Document may not exist or you are not authorized
                        </Box>
                    </Center>
                    :
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
                                    <Stack spacing="6" p="40px" pt="0px" direction={["column", "column", "row"]}>
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
                                            <Center justifyContent="space-between">
                                                <Link
                                                    href={"/"}

                                                >
                                                    <img style={{ width: 100 }} src={"/assets/images/logo.png"} alt="logo" />
                                                </Link>
                                                <Box>
                                                    {drivers.title}
                                                </Box>
                                                <Box />
                                            </Center>
                                            <Center w="full" >
                                                <img
                                                    src={drivers.image ? `https://gateway.pinata.cloud/ipfs/${drivers.image}?_gl=1*1ybf4ge*rs_ga*MjRhODBjMTktNTNlYS00OTI3LTg4MmYtYzRjNjRhOWQ5Nzcy*rs_ga_5RMPXG14TE*MTY4Mzg3ODA5MS4xLjEuMTY4Mzg3ODE0OS4yLjAuMA` : "/icon/Favicon.png"}
                                                    style={
                                                        {
                                                            height: "60vh",
                                                            objectFit: "contain"
                                                        }
                                                    }
                                                />
                                            </Center>
                                            <Flex justifyContent="space-between">
                                                <Text
                                                    fontWeight="400"
                                                    fontSize="14px"
                                                    lineHeight="203.52%"
                                                    color="#6B6B6B"
                                                >
                                                    This document has not yet been fully verified
                                                </Text>
                                                <Box w={["40px", "40px"]} >
                                                    <img src="/assets/images/grade_B.png" alt="grade" />
                                                </Box>
                                            </Flex>
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

                                    <Flex mt="4" p={["10px", "20px"]} >
                                        <Button
                                            isDisabled={isSubmitting}
                                            isLoading={isSubmitting}
                                            onClick={() => Router.push("/asset")}
                                            w="full"
                                            h="50px"
                                            mt="4"
                                            colorScheme="pink"
                                            textTransform="capitalize"
                                        >
                                            GO to home Page
                                        </Button>
                                    </Flex>
                                </Form>
                            );
                        }}
                    </Formik>
            }
        </>
    );
}

export default MintForm;
