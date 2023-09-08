"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";

import { JobForm } from "../../components/job-form/job-form";

export default function Generate() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (jobName: string, itemPageUrl: string) => {};

  return (
    <Box w="60%" mx="auto">
      <JobForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
    </Box>
  );
}
