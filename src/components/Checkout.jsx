import { PaystackButton } from 'react-paystack'

export default function PaymentBtn ({name, email, amount, phone}){
    const publicKey = "sk_live_08ae9545e5af2da03e9f1580c23cd6b80c30c8f8"

    const componentProps = {
        email: email,
        amount: amount,
        metadata: {
          name:  name,
          phone: phone,
        },
        publicKey,
        text: `Pay For ${name}`,
        onSuccess: () =>
          alert("Thanks for buying an item from onelab. In two weeks you will recieve your item"),
        onClose: () => alert(`Wait! You need this ${name}, don't go!!!!`),
      }

return <PaystackButton {...componentProps} />
}