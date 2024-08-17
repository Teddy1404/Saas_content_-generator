"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { db } from '@/utils/db';

function Billing() {
  const [loading, setLoading] = useState(false);
  const {user} = useUser();

  const createSubscription = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/create-subscription', {});
      handlePayment(response.data.id);
    } catch (error) {
      console.error("Error creating subscription:", error);
      setLoading(false);
    }
  };

  const handlePayment = (subId:any) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: 'AI Content Generator',
      description: 'Monthly subscription',
      handler: async (response:any) => {
        console.log("Payment successful:", response);
        if(response){
          SaveSubscription(response?.razorpay_payment_id);
        }
        setLoading(false);
      },
    };
//@ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  
  const SaveSubscription =
 async(paymentId:string)=>{
 const result = await  db.insert(UserSubscription)
 .values({
  email:user?.primaryEmailAddress?.emailAddress,
  userName: user?.fullName,
  active:true,
  paymentId:paymentId,
  joinDate:moment().format('DD/MM/YYYY')
 });
 console.log(result);
 if(result){
  window.location.reload();
 }
}
  return (
    <div className="flex flex-col items-center">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <h1 className="text-3xl font-bold text-center mb-6">Billing Information</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-center">

        {/* Free Plan Card */}
        <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-md" style={{ width: '250px' }}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Free Plan</h2>
            <p className="text-gray-600">Get started with our free plan, perfect for beginners.</p>
            <p className="text-4xl font-bold my-4">$0<span className="text-lg font-medium">/month</span></p>
            <ul className="text-left list-disc ml-6 mb-4">
              <li>Basic Features</li>
              <li>Access to limited resources</li>
              <li>Email support</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Choose Free Plan</button>
          </div>
        </div>

        {/* Premium Plan Card */}
        <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-md" style={{ width: '250px' }}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Premium Plan</h2>
            <p className="text-gray-600">Unlock all features with our premium plan.</p>
            <p className="text-4xl font-bold my-4">$49<span className="text-lg font-medium">/month</span></p>
            <ul className="text-left list-disc ml-6 mb-4">
              <li>All Basic Features</li>
              <li>Unlimited resources</li>
              <li>Priority support</li>
              <li>Access to exclusive content</li>
            </ul>
            <button
              disabled={loading}
              onClick={createSubscription}
              className="bg-green-500 text-white py-2 px-4 rounded-lg flex gap-2 items-center"
            >
              {loading && <Loader2Icon className="animate-spin" />}
              Choose Premium Plan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Billing;
