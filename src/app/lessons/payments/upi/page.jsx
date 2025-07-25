"use client";
import React from "react";

function MainComponent() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedApp, setSelectedApp] = React.useState("phonepe");
  const [showTroubleshooting, setShowTroubleshooting] = React.useState(false);
  const [showSafetyTips, setShowSafetyTips] = React.useState(false);

  const steps = [
    {
      title: "What is UPI?",
      icon: "🔄",
      content:
        "UPI (Unified Payments Interface) is like a bridge that connects all banks in India. It lets you send money from any bank to any bank using just a phone number or scanning a QR code.",
      visual: "🌉",
      tip: "Think of UPI as a common language that all banks understand, so they can talk to each other and transfer money instantly.",
    },
    {
      title: "Choosing a Payment App",
      icon: "📱",
      content:
        "Payment apps like PhonePe, Google Pay, and Paytm are like remote controls for your bank account. They make it easy to use UPI without remembering complicated bank details.",
      visual: "🎮",
      tip: "Just like you need a remote to control your TV, you need a payment app to easily control your bank account for digital payments.",
    },
    {
      title: "Installing Your First App",
      icon: "⬇️",
      content:
        "We'll download the app from Google Play Store, which is the safe place to get apps. Never download payment apps from unknown websites or links sent by others.",
      visual: "🏪",
      tip: "Google Play Store is like a trusted shop for apps. Always get payment apps from there to ensure they're real and safe.",
    },
    {
      title: "Setting Up Your Profile",
      icon: "👤",
      content:
        "You'll enter your phone number and verify it with an OTP (One Time Password). This proves that the phone number belongs to you and keeps your account secure.",
      visual: "📞",
      tip: "The OTP is like a secret code that proves you own the phone number. Never share this code with anyone else.",
    },
    {
      title: "Linking Your Bank Account",
      icon: "🏦",
      content:
        "The app will find your bank account using your phone number (if it's registered with your bank). You'll select your bank and verify your account details.",
      visual: "🔗",
      tip: "Your phone number acts like a key that helps the app find your bank account. Make sure your number is registered with your bank.",
    },
    {
      title: "Creating Your UPI PIN",
      icon: "🔐",
      content:
        "UPI PIN is a 4 or 6 digit secret code that you create. This PIN is like the key to your money - you'll need it every time you want to send money to someone.",
      visual: "🗝️",
      tip: "Choose a PIN that's easy for you to remember but hard for others to guess. Never use your birth date or phone number as PIN.",
    },
  ];

  const paymentApps = [
    {
      name: "PhonePe",
      id: "phonepe",
      icon: "💜",
      features: [
        "Easy to use",
        "Works in Hindi",
        "Cashback offers",
        "Bill payments",
      ],
      pros: "Very popular, works offline sometimes, good customer support",
      cons: "Needs internet for most features",
    },
    {
      name: "Google Pay",
      id: "googlepay",
      icon: "🔵",
      features: [
        "Voice commands",
        "Simple interface",
        "Google integration",
        "Rewards",
      ],
      pros: "Made by Google, very secure, works with voice commands",
      cons: "May be complex for first-time users",
    },
    {
      name: "Paytm",
      id: "paytm",
      icon: "🔷",
      features: ["Shopping", "Recharge", "Travel booking", "Wallet feature"],
      pros: "Many services in one app, wallet backup option",
      cons: "Can be overwhelming with too many features",
    },
  ];

  const setupSteps = {
    phonepe: [
      {
        step: 1,
        title: "Download PhonePe",
        instruction:
          "Open Google Play Store → Search 'PhonePe' → Tap 'Install'",
        image: "📱",
        tip: "Look for the purple PhonePe icon with a phone symbol",
      },
      {
        step: 2,
        title: "Open and Start Setup",
        instruction:
          "Tap PhonePe icon → Choose your language → Tap 'Get Started'",
        image: "🚀",
        tip: "You can choose Hindi or your local language for easier understanding",
      },
      {
        step: 3,
        title: "Enter Phone Number",
        instruction: "Type your mobile number → Tap 'Send OTP'",
        image: "📞",
        tip: "Use the same number that's registered with your bank account",
      },
      {
        step: 4,
        title: "Verify with OTP",
        instruction:
          "Check SMS for 6-digit code → Enter the code → Tap 'Verify'",
        image: "💬",
        tip: "OTP usually arrives within 30 seconds. Check your messages carefully",
      },
      {
        step: 5,
        title: "Set App Lock",
        instruction:
          "Create 4-digit app PIN → Confirm PIN → Enable fingerprint (optional)",
        image: "🔒",
        tip: "This PIN protects your app. Different from UPI PIN. Choose something you'll remember",
      },
      {
        step: 6,
        title: "Add Bank Account",
        instruction:
          "Tap 'Add Bank Account' → Select your bank → Account will be detected automatically",
        image: "🏦",
        tip: "If account not found, check if your mobile number is registered with the bank",
      },
      {
        step: 7,
        title: "Create UPI PIN",
        instruction:
          "Enter last 6 digits of debit card → Enter expiry date → Create 4-digit UPI PIN",
        image: "🔐",
        tip: "This UPI PIN is for sending money. Keep it secret and different from other PINs",
      },
    ],
    googlepay: [
      {
        step: 1,
        title: "Download Google Pay",
        instruction:
          "Open Google Play Store → Search 'Google Pay' → Tap 'Install'",
        image: "📱",
        tip: "Look for the colorful 'G Pay' icon made by Google LLC",
      },
      {
        step: 2,
        title: "Sign in with Google",
        instruction:
          "Open Google Pay → Choose your Google account → Tap 'Continue'",
        image: "👤",
        tip: "Use the same Google account you use for other Google services",
      },
      {
        step: 3,
        title: "Add Phone Number",
        instruction: "Enter mobile number → Tap 'Next' → Verify with OTP",
        image: "📞",
        tip: "This should be your bank-registered mobile number",
      },
      {
        step: 4,
        title: "Set Screen Lock",
        instruction:
          "Choose PIN, pattern, or fingerprint → Set up your preferred lock method",
        image: "🔒",
        tip: "This protects your app from unauthorized access",
      },
      {
        step: 5,
        title: "Add Payment Method",
        instruction:
          "Tap 'Add payment method' → Select 'Bank account' → Choose your bank",
        image: "🏦",
        tip: "Google Pay will automatically detect accounts linked to your number",
      },
      {
        step: 6,
        title: "Set UPI PIN",
        instruction:
          "Enter debit card details → Set 6-digit UPI PIN → Confirm PIN",
        image: "🔐",
        tip: "Google Pay uses 6-digit PIN. Make it strong but memorable",
      },
    ],
    paytm: [
      {
        step: 1,
        title: "Download Paytm",
        instruction: "Open Google Play Store → Search 'Paytm' → Tap 'Install'",
        image: "📱",
        tip: "Look for the blue Paytm icon with white text",
      },
      {
        step: 2,
        title: "Create Account",
        instruction: "Open Paytm → Enter mobile number → Tap 'Proceed'",
        image: "📞",
        tip: "Use your bank-registered mobile number for easy setup",
      },
      {
        step: 3,
        title: "Verify Phone Number",
        instruction: "Enter OTP received via SMS → Tap 'Verify'",
        image: "💬",
        tip: "OTP is valid for only a few minutes, enter it quickly",
      },
      {
        step: 4,
        title: "Complete Profile",
        instruction:
          "Enter your name → Set 4-digit Paytm PIN → Enable fingerprint",
        image: "👤",
        tip: "Use your real name as it appears on your bank account",
      },
      {
        step: 5,
        title: "Add Bank Account",
        instruction:
          "Go to 'Bank & UPI' → Tap 'Add Bank Account' → Select your bank",
        image: "🏦",
        tip: "Paytm will try to detect your account automatically",
      },
      {
        step: 6,
        title: "Set UPI PIN",
        instruction:
          "Enter debit card number → Enter expiry & CVV → Create UPI PIN",
        image: "🔐",
        tip: "This PIN will be used for all UPI transactions through Paytm",
      },
    ],
  };

  const safetyTips = [
    {
      title: "UPI PIN Security",
      tips: [
        "Never share your UPI PIN with anyone, not even family members",
        "Don't use your birth date, phone number, or 1234 as UPI PIN",
        "Change your UPI PIN if you suspect someone knows it",
        "Never enter UPI PIN when someone is watching",
      ],
      icon: "🔐",
    },
    {
      title: "App Security",
      tips: [
        "Always download apps from Google Play Store only",
        "Keep your payment apps updated to latest version",
        "Enable app lock with PIN or fingerprint",
        "Log out from payment apps on shared phones",
      ],
      icon: "📱",
    },
    {
      title: "Transaction Safety",
      tips: [
        "Always verify the recipient's name before sending money",
        "Double-check the amount before confirming payment",
        "Never send money to unknown people or numbers",
        "Keep screenshots of important transactions",
      ],
      icon: "💸",
    },
    {
      title: "Phone Security",
      tips: [
        "Keep your phone locked with PIN or pattern",
        "Don't save UPI PIN in notes or messages",
        "Report immediately if your phone is lost or stolen",
        "Don't let strangers use your phone for 'urgent' payments",
      ],
      icon: "📞",
    },
  ];

  const troubleshootingIssues = [
    {
      problem: "Bank account not detected",
      causes: [
        "Mobile number not registered with bank",
        "Account not UPI enabled",
        "Technical issue with bank servers",
      ],
      solutions: [
        "Visit your bank branch to register mobile number",
        "Ask bank to enable UPI for your account",
        "Try again after some time",
        "Call your bank's customer care",
      ],
      icon: "🏦",
    },
    {
      problem: "OTP not received",
      causes: [
        "Network connectivity issues",
        "SMS service temporarily down",
        "Wrong mobile number entered",
      ],
      solutions: [
        "Check your network signal strength",
        "Wait for 2-3 minutes and try again",
        "Verify you entered correct mobile number",
        "Try using a different network location",
      ],
      icon: "📱",
    },
    {
      problem: "UPI PIN creation failed",
      causes: [
        "Wrong debit card details entered",
        "Card not linked to the account",
        "Expired debit card",
      ],
      solutions: [
        "Double-check card number and expiry date",
        "Use the debit card of the same bank account",
        "Get a new debit card from your bank",
        "Contact bank if card details are correct",
      ],
      icon: "💳",
    },
    {
      problem: "Transaction failed",
      causes: [
        "Insufficient balance in account",
        "Daily transaction limit exceeded",
        "Recipient's account issues",
      ],
      solutions: [
        "Check your account balance",
        "Wait until next day for limit reset",
        "Ask recipient to check their account",
        "Try with a smaller amount first",
      ],
      icon: "❌",
    },
    {
      problem: "App keeps crashing",
      causes: [
        "Outdated app version",
        "Phone storage full",
        "Conflicting apps",
      ],
      solutions: [
        "Update the app from Play Store",
        "Clear some phone storage space",
        "Restart your phone",
        "Uninstall and reinstall the app",
      ],
      icon: "📱",
    },
  ];

  const bankRequirements = [
    {
      requirement: "Active Bank Account",
      description: "You need a savings or current account in any Indian bank",
      howToCheck: "Visit bank branch or check your passbook",
      icon: "🏦",
    },
    {
      requirement: "Registered Mobile Number",
      description:
        "Your phone number must be registered with your bank account",
      howToCheck: "Call your bank or visit branch to verify",
      icon: "📞",
    },
    {
      requirement: "Active Debit Card",
      description: "You need a working ATM/debit card for the same account",
      howToCheck: "Try withdrawing money from ATM",
      icon: "💳",
    },
    {
      requirement: "UPI Enabled Account",
      description: "Your bank account should support UPI transactions",
      howToCheck: "Most banks support UPI now, ask your bank to confirm",
      icon: "✅",
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
            <span className="text-2xl">🔄</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                UPI Payment Setup
              </h1>
              <p className="text-sm text-gray-500">
                Learn to install payment apps and set up UPI
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
            className="bg-purple-500 h-2 rounded-full transition-all duration-300"
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

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-purple-600 text-xl mr-2">💡</span>
                <div>
                  <span className="font-medium text-purple-800">
                    Simple Explanation:
                  </span>
                  <p className="text-purple-700 text-sm mt-1">
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
                : "bg-purple-500 text-white hover:bg-purple-600"
            }`}
          >
            Next →
          </button>
        </div>

        {/* Payment App Selection */}
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📱</span>
              Choose Your Payment App
            </h3>
            <div className="space-y-4">
              {paymentApps.map((app) => (
                <div
                  key={app.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedApp === app.id
                      ? "border-purple-300 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedApp(app.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{app.icon}</span>
                      <h4 className="font-medium text-gray-800">{app.name}</h4>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        selectedApp === app.id
                          ? "border-purple-500 bg-purple-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedApp === app.id && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        Features:
                      </p>
                      <ul className="text-sm text-gray-600">
                        {app.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-700 mb-1">
                        Good: {app.pros}
                      </p>
                      <p className="text-sm font-medium text-orange-700">
                        Consider: {app.cons}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step-by-Step Setup Instructions */}
        {currentStep >= 2 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📋</span>
              Step-by-Step Setup for{" "}
              {paymentApps.find((app) => app.id === selectedApp)?.name}
            </h3>
            <div className="space-y-4">
              {setupSteps[selectedApp].map((step, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 mb-2">
                        {step.title}
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-2">{step.image}</span>
                          <span className="text-sm font-medium text-gray-700">
                            What to do:
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">
                          {step.instruction}
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <div className="flex items-start">
                          <span className="text-blue-600 text-lg mr-2">💡</span>
                          <div>
                            <span className="font-medium text-blue-800 text-sm">
                              Helpful Tip:
                            </span>
                            <p className="text-blue-700 text-sm mt-1">
                              {step.tip}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bank Requirements */}
        {currentStep === 4 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📋</span>
              What You Need Before Starting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bankRequirements.map((req, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{req.icon}</span>
                    <h4 className="font-medium text-gray-800">
                      {req.requirement}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    {req.description}
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded p-2">
                    <p className="text-blue-800 text-sm">
                      <span className="font-medium">How to check:</span>{" "}
                      {req.howToCheck}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Information Sections */}
        <div className="space-y-4">
          {/* Safety Tips */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowSafetyTips(!showSafetyTips)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">🛡️</span>
                <span className="font-medium text-gray-800">
                  Important Safety Tips
                </span>
              </div>
              <span className="text-gray-400">
                {showSafetyTips ? "−" : "+"}
              </span>
            </button>

            {showSafetyTips && (
              <div className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {safetyTips.map((category, index) => (
                    <div key={index} className="bg-red-50 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{category.icon}</span>
                        <h4 className="font-medium text-red-800">
                          {category.title}
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {category.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start">
                            <span className="text-red-600 mr-2 text-sm">•</span>
                            <p className="text-red-700 text-sm">{tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Troubleshooting */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowTroubleshooting(!showTroubleshooting)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">🔧</span>
                <span className="font-medium text-gray-800">
                  Common Problems and Solutions
                </span>
              </div>
              <span className="text-gray-400">
                {showTroubleshooting ? "−" : "+"}
              </span>
            </button>

            {showTroubleshooting && (
              <div className="px-4 pb-4 space-y-4">
                {troubleshootingIssues.map((issue, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{issue.icon}</span>
                      <h4 className="font-medium text-gray-800">
                        {issue.problem}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                        <p className="font-medium text-orange-800 text-sm mb-2">
                          Possible Causes:
                        </p>
                        <ul className="space-y-1">
                          {issue.causes.map((cause, causeIndex) => (
                            <li
                              key={causeIndex}
                              className="text-orange-700 text-sm"
                            >
                              • {cause}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="font-medium text-green-800 text-sm mb-2">
                          Solutions to Try:
                        </p>
                        <ul className="space-y-1">
                          {issue.solutions.map((solution, solutionIndex) => (
                            <li
                              key={solutionIndex}
                              className="text-green-700 text-sm"
                            >
                              • {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Success Indicators */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <span className="text-green-600 text-xl mr-2">✅</span>
              <span className="font-medium text-green-800">
                How to Know Your Setup is Complete
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-green-700 text-sm">
                • You can see your bank account balance in the app
              </p>
              <p className="text-green-700 text-sm">
                • The app shows your UPI ID (usually yourname@appname)
              </p>
              <p className="text-green-700 text-sm">
                • You can successfully create a UPI PIN
              </p>
              <p className="text-green-700 text-sm">
                • The app allows you to scan QR codes for payment
              </p>
              <p className="text-green-700 text-sm">
                • You receive a welcome message or notification from your bank
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-xl mr-2">🚀</span>
              <span className="font-medium text-blue-800">
                Ready for Your First Payment?
              </span>
            </div>
            <p className="text-blue-700 text-sm mb-3">
              Congratulations! Once you complete the UPI setup, you'll be ready
              to make your first digital payment. Remember to start with small
              amounts to build confidence.
            </p>
            <p className="text-blue-700 text-sm">
              Next, we'll learn how to make your first payment safely and what
              to do if something goes wrong.
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
            href="/lessons/payments/firstpay"
            className="flex-1 bg-purple-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-purple-600 text-decoration-none"
          >
            Next: Make First Payment
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;