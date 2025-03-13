import React, { useState } from "react";

export default function PaymentBtn({ name, email, amount, phone }) {
  const [status, setStatus] = useState(null);

  const handlePayment = async () => {
    try {
      const paymentData = {
        email: email,
        amount:  amount,
        currency: "USD",
        callback_url: "https://your-redirect-url.com",
        metadata: {
          custom_fields: [
            {
              display_name: name,
              variable_name: name,
              value: phone,
            },
          ],
        },
      }
      const response = await fetch("https://api.paystack.co/transaction/initialize", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET_KEY}`, 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();
      console.log(data);

      if (data.status) {
        // Redirect to Paystack payment page
        window.location.href = data.data.authorization_url;
      } else {
        setStatus("Payment initialization failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded">
    Pay Now
  </button>
}


