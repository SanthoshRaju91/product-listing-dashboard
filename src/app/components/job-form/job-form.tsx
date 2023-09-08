import { Formik, Field, Form } from "formik";
import {
  Card,
  CardBody,
  Button,
  FormLabel,
  FormControl,
  Flex,
  Input,
  FormErrorMessage,
  VStack,
  Text,
} from "@chakra-ui/react";

import { AiOutlineArrowRight } from "react-icons/ai";

interface IJobForm {
  onSubmit(jobName: string, itemPageUrl: string): void;
  isSubmitting?: boolean;
}

export function JobForm({ onSubmit, isSubmitting = false }: IJobForm) {
  return (
    <Card shadow="none" borderWidth="1px" borderColor="gray.100" p={4}>
      <CardBody>
        <Flex direction="column" gap={8}>
          <Text fontWeight="semibold" textColor="gray.600">
            Provide item page url for analyzing the product listing score and
            generate metrics.
          </Text>
          <Formik
            initialValues={{
              jobName: "",
              itemPageUrl: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack alignItems="flex-start" gap={8}>
                  <VStack alignItems="flex-start" gap={4}>
                    <FormControl
                      isInvalid={!!errors.jobName && touched.jobName}
                    >
                      <FormLabel fontSize="sm" textColor="gray.600">
                        Enter Job name
                      </FormLabel>
                      <Field
                        as={Input}
                        width={500}
                        id="jobName"
                        name="jobName"
                        type="text"
                        validate={(value: string) => {
                          let error;

                          if (!value) {
                            error = "Job name is required";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage fontSize="xs">
                        {errors.jobName}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.itemPageUrl && touched.itemPageUrl}
                    >
                      <FormLabel fontSize="sm" textColor="gray.600">
                        Enter Item Page Url
                      </FormLabel>
                      <Field
                        as={Input}
                        width={500}
                        id="itemPageUrl"
                        name="itemPageUrl"
                        type="text"
                        validate={(value: string) => {
                          let error;

                          if (!value) {
                            error = "Item page url is required";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage fontSize="xs">
                        {errors.itemPageUrl}
                      </FormErrorMessage>
                    </FormControl>
                  </VStack>
                  <Button
                    colorScheme="blue"
                    size="md"
                    fontWeight="normal"
                    px={8}
                    leftIcon={<AiOutlineArrowRight />}
                    isLoading={isSubmitting}
                    loadingText="Submitting"
                  >
                    Generate
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Flex>
      </CardBody>
    </Card>
  );
}
