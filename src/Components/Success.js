import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Form Submitted Successfully</h1>
    </div>
  );
};

export default Success;
