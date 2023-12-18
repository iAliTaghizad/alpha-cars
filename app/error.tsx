'use client';

import { useEffect } from "react";

import EmptyState from "@/app/components/emptyState";

interface ErrorStateProps {
  error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return ( 
    <EmptyState
      title="ارور"
      subtitle="!خطایی رخ داده است"
    />
   );
}
 
export default ErrorState;