"use client";
import React from "react";

function MainComponent() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [showConcerns, setShowConcerns] = React.useState(false);
  const [showBenefits, setShowBenefits] = React.useState(false);

  const steps = [
    {
      title: "What is Digital Money?",
      icon: "💰",
      content:
        "Digital money is like regular money, but it lives in your phone instead of your wallet. You can't touch it, but you can use it to buy things and send money to people.",
      visual: "📱",
      tip: "Think of it like keeping money in a bank, but now the bank is in your phone and you can use it anytime, anywhere.",
    },
    {
      title: "Cash vs Digital Money",
      icon: "⚖️",
      content:
        "With cash, you need to carry notes and coins. With digital money, everything is stored safely in your phone. No need to worry about losing money or getting exact change.",
      visual: "💳",
      tip: "Digital money is like having a magic wallet that never runs out of exact change and can't be stolen from your pocket.",
    },
    {
      title: "How Does It Work?",
      icon: "🔄",
      content:
        "Your bank account is connected to apps on your phone. When you pay digitally, money moves from your account to the shop's account instantly, just like handing over cash.",
      visual: "🏦",
      tip: "It's the same money from your bank account, just a different way to use it - like using a key instead of breaking down a door.",
    },
    {
      title: "Why Use Digital Payments?",
      icon: "✨",
      content:
        "Digital payments are faster, safer, and more convenient. No need to count money, give exact change, or worry about fake notes. Everything happens in seconds.",
      visual: "⚡",
      tip: "Imagine never having to search for exact change or worry about shopkeepers saying they don't have change to return.",
    },
    {
      title: "Real Life Examples",
      icon: "🏪",
      content:
        "Buy vegetables at the market, pay for auto rickshaw rides, send money to your children in the city, pay electricity bills, or recharge your phone - all from your phone.",
      visual: "🛒",
      tip: "Anywhere you see a QR code (square pattern), you can pay digitally. Most shops, even small ones, accept digital payments now.",
    },
    {
      title: "Is It Safe?",
      icon: "🛡️",
      content:
        "Digital payments are actually safer than cash. Your money is protected by banks and government. If something goes wrong, you can get help and track what happened.",
      visual: "🔒",
      tip: "Unlike cash that can be lost or stolen forever, digital money has records and protection. Banks and police can help if there are problems.",
    },
  ];

  const cashVsDigitalComparison = [
    {
      situation: "Buying vegetables",
      cash: "Need exact change, count money, risk fake notes",
      digital: "Scan QR code, pay exact amount, instant receipt",
      icon: "🥬",
    },
    {
      situation: "Sending money to family",
      cash: "Travel to their place or send through someone",
      digital: "Send instantly from your phone, they get it immediately",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      situation: "Paying bills",
      cash: "Go to office, stand in queue, pay and get receipt",
      digital: "Pay from home, instant confirmation, automatic receipt",
      icon: "💡",
    },
    {
      situation: "Emergency money",
      cash: "Need to have cash ready or find ATM",
      digital: "Always available in your phone, pay immediately",
      icon: "🚨",
    },
  ];

  const commonConcerns = [
    {
      concern: "What if my phone breaks?",
      answer:
        "Your money is safe in the bank, not in your phone. You can use another phone, go to bank, or use ATM to get cash.",
      icon: "📱",
    },
    {
      concern: "What if someone steals my phone?",
      answer:
        "Apps are protected by PIN/password. Even if phone is stolen, thieves can't use your money without your secret codes.",
      icon: "🔐",
    },
    {
      concern: "What if I make a mistake?",
      answer:
        "Most payments can be cancelled or returned. Banks keep records of everything, so mistakes can be fixed.",
      icon: "↩️",
    },
    {
      concern: "What if there's no internet?",
      answer:
        "Some payments work without internet. Also, you can always keep some cash for emergencies when internet is not available.",
      icon: "📶",
    },
    {
      concern: "Will shopkeepers cheat me?",
      answer:
        "Digital payments create automatic receipts and records. It's actually harder for anyone to cheat because everything is tracked.",
      icon: "🧾",
    },
    {
      concern: "Is it difficult to learn?",
      answer:
        "It's easier than you think! Once you learn, it becomes faster and simpler than handling cash. We'll teach you step by step.",
      icon: "🎓",
    },
  ];

  const benefits = [
    {
      title: "No More Counting",
      description: "Pay exact amounts without counting notes or coins",
      icon: "🔢",
    },
    {
      title: "Always Have Change",
      description:
        "Never worry about exact change or shopkeeper not having change",
      icon: "💰",
    },
    {
      title: "Safe from Theft",
      description: "Money in phone is safer than cash in pocket",
      icon: "🛡️",
    },
    {
      title: "Send Money Anywhere",
      description: "Send money to family instantly, no need to travel",
      icon: "📤",
    },
    {
      title: "Pay Bills from Home",
      description: "No need to go to offices or stand in queues",
      icon: "🏠",
    },
    {
      title: "Track Your Money",
      description:
        "See where your money goes, automatic records of all payments",
      icon: "📊",
    },
    {
      title: "Works Day and Night",
      description: "Send money or pay bills anytime, even at midnight",
      icon: "🌙",
    },
    {
      title: "Get Offers and Cashback",
      description:
        "Many apps give you money back or discounts for digital payments",
      icon: "🎁",
    },
  ];

  const realLifeExamples = [
    {
      scenario: "Market Shopping",
      description:
        "Scan the vegetable vendor's QR code and pay ₹150 for vegetables. No need to find exact change or worry about fake notes.",
      icon: "🥕",
    },
    {
      scenario: "Auto Rickshaw",
      description:
        "Pay ₹80 for auto ride by scanning driver's QR code. No arguments about change, instant payment.",
      icon: "🛺",
    },
    {
      scenario: "Sending Money Home",
      description:
        "Your son in Delhi needs ₹5000 urgently. Send it instantly from your phone, he gets it in seconds.",
      icon: "🏠",
    },
    {
      scenario: "Electricity Bill",
      description:
        "Pay your ₹1200 electricity bill from home. No need to go to office or stand in queue.",
      icon: "💡",
    },
    {
      scenario: "Medicine Purchase",
      description:
        "Buy medicines worth ₹350 from pharmacy. Pay digitally and get automatic receipt for insurance.",
      icon: "💊",
    },
    {
      scenario: "Phone Recharge",
      description:
        "Recharge your phone with ₹200 instantly. No need to find recharge shop or scratch cards.",
      icon: "📞",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center p-4">
          <a
            href="/digital-skills-learning"
            className="mr-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-decoration-none"
          >
            ←
          </a>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">💳</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                What are Digital Payments?
              </h1>
              <p className="text-sm text-gray-500">
                Learn about digital money and its benefits
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white px-4 py-2 border-b">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(((currentStep + 1) / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 pb-24">
        {/* Current Step */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{steps[currentStep].icon}</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {steps[currentStep].title}
            </h2>
          </div>

          <div className="text-center mb-6">
            <div className="text-8xl mb-4 opacity-60">
              {steps[currentStep].visual}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              {steps[currentStep].content}
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-2">💡</span>
                <div>
                  <span className="font-medium text-blue-800">
                    Simple Explanation:
                  </span>
                  <p className="text-blue-700 text-sm mt-1">
                    {steps[currentStep].tip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-lg font-medium ${
              currentStep === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            ← Previous
          </button>

          <button
            onClick={() =>
              setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
            }
            disabled={currentStep === steps.length - 1}
            className={`px-6 py-3 rounded-lg font-medium ${
              currentStep === steps.length - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next →
          </button>
        </div>

        {/* Cash vs Digital Comparison */}
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">⚖️</span>
              Cash vs Digital Money - See the Difference
            </h3>
            <div className="space-y-4">
              {cashVsDigitalComparison.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <h4 className="font-medium text-gray-800">
                      {item.situation}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <span className="text-red-600 text-lg mr-2">💵</span>
                        <span className="font-medium text-red-800">
                          With Cash
                        </span>
                      </div>
                      <p className="text-red-700 text-sm">{item.cash}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <span className="text-green-600 text-lg mr-2">📱</span>
                        <span className="font-medium text-green-800">
                          With Digital
                        </span>
                      </div>
                      <p className="text-green-700 text-sm">{item.digital}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Real Life Examples */}
        {currentStep === 4 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">🏪</span>
              Real Life Examples - How You Can Use Digital Payments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {realLifeExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{example.icon}</span>
                    <h4 className="font-medium text-gray-800">
                      {example.scenario}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">{example.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Information Sections */}
        <div className="space-y-4">
          {/* Benefits Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowBenefits(!showBenefits)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">✨</span>
                <span className="font-medium text-gray-800">
                  Why Digital Payments Make Life Better
                </span>
              </div>
              <span className="text-gray-400">{showBenefits ? "−" : "+"}</span>
            </button>

            {showBenefits && (
              <div className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-start">
                        <span className="text-lg mr-2">{benefit.icon}</span>
                        <div>
                          <p className="font-medium text-green-800 text-sm mb-1">
                            {benefit.title}
                          </p>
                          <p className="text-green-700 text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Common Concerns */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowConcerns(!showConcerns)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">❓</span>
                <span className="font-medium text-gray-800">
                  Common Worries and Their Answers
                </span>
              </div>
              <span className="text-gray-400">{showConcerns ? "−" : "+"}</span>
            </button>

            {showConcerns && (
              <div className="px-4 pb-4 space-y-3">
                {commonConcerns.map((item, index) => (
                  <div key={index} className="bg-yellow-50 rounded-lg p-3">
                    <div className="flex items-start">
                      <span className="text-lg mr-2">{item.icon}</span>
                      <div>
                        <p className="font-medium text-yellow-800 text-sm mb-1">
                          {item.concern}
                        </p>
                        <p className="text-yellow-700 text-sm">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Safety Assurance */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <span className="text-green-600 text-xl mr-2">🛡️</span>
              <span className="font-medium text-green-800">
                Your Money is Safe with Digital Payments
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-green-700 text-sm">
                • Banks and government protect your digital money
              </p>
              <p className="text-green-700 text-sm">
                • Every transaction is recorded and can be tracked
              </p>
              <p className="text-green-700 text-sm">
                • If something goes wrong, you can get help and proof
              </p>
              <p className="text-green-700 text-sm">
                • Your money is safer than keeping cash at home
              </p>
              <p className="text-green-700 text-sm">
                • Apps are protected by passwords and PINs only you know
              </p>
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-xl mr-2">🚀</span>
              <span className="font-medium text-blue-800">
                Ready to Start Your Digital Payment Journey?
              </span>
            </div>
            <p className="text-blue-700 text-sm mb-3">
              Don't worry if this seems new. Millions of people in India use
              digital payments every day. We'll teach you step by step, starting
              with the basics.
            </p>
            <p className="text-blue-700 text-sm">
              Next, we'll learn about UPI and payment apps - the most popular
              way to make digital payments in India.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-3">
          <a
            href="/digital-skills-learning"
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg text-center font-medium hover:bg-gray-200 text-decoration-none"
          >
            Back to Lessons
          </a>
          <a
            href="/lessons/payments/upi"
            className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-blue-600 text-decoration-none"
          >
            Next: Learn About UPI
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;