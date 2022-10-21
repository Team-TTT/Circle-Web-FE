import React, { useState } from "react";

import ToastMessage from "../components/common/ToastMessage";

export default function useToast(initialState = false) {
  const [sendToast, setSendToast] = useState(initialState);

  const handleSendToast = () => setSendToast(true);

  const customToast = ({ message, color }) => {
    return (
      <ToastMessage
        message={message}
        color={color}
        sendToast={sendToast}
        setSendToast={setSendToast}
      />
    );
  };

  return [customToast, handleSendToast];
}
