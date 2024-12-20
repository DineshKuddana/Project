import React from "react";
import { Check } from "lucide-react";
const Pricing = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-16">Pricing</h1>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 flex flex-col justify-between">
            <div>

            <h2 className="text-2xl font-semibold mb-4">Free</h2>
            <h1 className="text-4xl font-bold ">$0</h1>
            <p className="mb-6 text-gray-700 text-sm mt-4">
              All basic features to boost your learning.
            </p>
            <ul className="text-gray-700 text-base leading-7 mb-6">
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />3 maps</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />100 notes</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Unlimited flashcards</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />3 imports</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Local backup</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Basic support</li>
            </ul>
            </div>
            <button className="w-full py-3 bg-blue-100 text-blue-800 font-semibold rounded hover:bg-blue-200 transition">
              Start for free
            </button>
          </div>

          {/* Member Plan */}
          <div className="bg-white rounded-lg border-2 border-blue-500 p-8 flex flex-col justify-between">
            <div>
            <h2 className="text-2xl font-semibold mb-4">Member</h2>

            <h1 className=""><span className="text-4xl font-bold mb-4" >$15</span> /month</h1>
            <p className="mb-6 text-gray-700 text-sm mt-4">
              Get crystal clear in your thinking and learning.
            </p>
            <ul className="text-gray-700 text-base leading-7 mb-6">
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Unlimited maps, notes, flashcards</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Unlimited file uploads</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Unlimited imports + local backups</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Collaboration</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />
                Priority support in our Discord 
              </li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />14-day money-back guarantee</li>
            </ul>
            <p className="text-xs text-gray-700 ">
              Student? Request student discount here before subscribing.
            </p>
            </div>
            <button className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
              Become a member
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 flex flex-col justify-between">
            <div>

            <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
            <h1 className=""><span className="text-4xl font-bold mb-4 " >$35</span> /user/month</h1>
            <p className="mb-6 text-gray-700 text-sm mt-4">
            Contact us to see if Traverse is a fit for your:
            </p>
            <ul className="text-gray-700 text-base leading-7 mb-6">
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Research & Knowledge bases</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Learning & Development</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Online course</li>
              <li className="flex"><Check className="text-blue-500 w-6 h-6 mr-2" />Onboarding process</li>
            </ul>
            </div>
            <button className="w-full py-3 bg-blue-100 text-blue-800 font-semibold rounded hover:bg-blue-200 transition">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
