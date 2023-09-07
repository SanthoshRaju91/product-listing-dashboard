"use client";

import { Box } from "@chakra-ui/react";
import { JobForm } from "../../components/job-form/job-form";

interface IGenerate {
  onSubmit(jobName: string, itemPageUrl: string): void;
  isSubmitting?: boolean;
}

export default function Generate({ onSubmit, isSubmitting }: IGenerate) {
  return (
    <Box w="60%" mx="auto">
      <JobForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
    </Box>
  );
}
