// import { loadStripe } from '@stripe/stripe-js';

// export const checkoutSubscription = async (priceId: string) => {
//   const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  
//   // Backend par request bhej rahe hain session create karne ke liye
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stripe/create-checkout`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ priceId }),
//   });

//   const session = await response.json();
//   await stripe?.redirectToCheckout({ sessionId: session.id });
// };