"use client";
import React from "react";

function MainComponent() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [showTroubleshooting, setShowTroubleshooting] = React.useState(false);
  const [showSafetyTips, setShowSafetyTips] = React.useState(false);

  const steps = [
    {
      title: "Open Play Store",
      icon: "🏪",
      content:
        "Find the Play Store app on your phone. It looks like a colorful triangle. Tap on it to open.",
      visual: "📱",
      tip: "Play Store is usually on your home screen or in the app drawer. Look for the Google Play Store icon.",
      action: "Tap the Play Store icon",
    },
    {
      title: "Search for WhatsApp",
      icon: "🔍",
      content:
        "Tap the search box at the top and type 'WhatsApp'. You'll see suggestions appear as you type.",
      visual: "⌨️",
      tip: "Type slowly and clearly. WhatsApp should appear in the suggestions before you finish typing.",
      action: "Type 'WhatsApp' in search box",
    },
    {
      title: "Find the Right WhatsApp",
      icon: "✅",
      content:
        "Look for 'WhatsApp Messenger' by WhatsApp LLC. It should have a green icon with a white phone symbol.",
      visual: "💬",
      tip: "Make sure it says 'WhatsApp LLC' as the developer. This is the official app - don't download fake copies.",
      action: "Tap on WhatsApp Messenger",
    },
    {
      title: "Install WhatsApp",
      icon: "⬇️",
      content:
        "Tap the green 'Install' button. Your phone will start downloading WhatsApp automatically.",
      visual: "📥",
      tip: "Make sure you have good internet connection. The download might take 2-5 minutes depending on your speed.",
      action: "Tap 'Install' button",
    },
    {
      title: "Wait for Installation",
      icon: "⏳",
      content:
        "Wait patiently while WhatsApp downloads and installs. You'll see a progress bar showing how much is done.",
      visual: "📊",
      tip: "Don't close Play Store or turn off your phone during installation. Keep it connected to internet.",
      action: "Wait for installation to complete",
    },
    {
      title: "Open WhatsApp",
      icon: "🚀",
      content:
        "Once installed, tap 'Open' or find the WhatsApp icon on your home screen and tap it.",
      visual: "📱",
      tip: "The WhatsApp icon is green with a white phone symbol. It might appear on your home screen automatically.",
      action: "Tap 'Open' or WhatsApp icon",
    },
    {
      title: "Accept Terms",
      icon: "📋",
      content:
        "WhatsApp will show you terms and conditions. Read them and tap 'Agree and Continue' to proceed.",
      visual: "✍️",
      tip: "These are the rules for using WhatsApp. You need to accept them to use the app.",
      action: "Tap 'Agree and Continue'",
    },
    {
      title: "Enter Phone Number",
      icon: "📞",
      content:
        "Select your country (India) and enter your mobile phone number. Make sure the number is correct.",
      visual: "🔢",
      tip: "Use the same number you use for calls and SMS. Don't use someone else's number.",
      action: "Enter your phone number",
    },
    {
      title: "Verify Phone Number",
      icon: "🔐",
      content:
        "WhatsApp will send you an SMS with a 6-digit code. Enter this code when it arrives.",
      visual: "💬",
      tip: "The SMS might take 1-2 minutes to arrive. Don't request the code again too quickly.",
      action: "Enter the 6-digit code from SMS",
    },
    {
      title: "Set Up Your Profile",
      icon: "👤",
      content:
        "Add your name and a profile photo. Your name will be visible to people who have your number.",
      visual: "📸",
      tip: "Use your real name so family and friends can recognize you easily.",
      action: "Add name and photo",
    },
    {
      title: "WhatsApp is Ready!",
      icon: "🎉",
      content:
        "Congratulations! WhatsApp is now installed and ready to use. You can start messaging your family and friends.",
      visual: "✨",
      tip: "You can now send messages, make calls, and share photos with anyone who has WhatsApp.",
      action: "Start using WhatsApp",
    },
  ];

  const troubleshootingTips = [
    {
      problem: "Can't find Play Store",
      solution:
        "Look for 'Google Play Store' or just 'Play Store'. If missing, ask someone to help you install it first.",
      icon: "❓",
    },
    {
      problem: "WhatsApp won't download",
      solution:
        "Check your internet connection. Try connecting to WiFi or move to an area with better mobile signal.",
      icon: "📶",
    },
    {
      problem: "Not enough storage space",
      solution:
        "Delete some old photos or apps you don't use. WhatsApp needs about 100MB of free space.",
      icon: "💾",
    },
    {
      problem: "SMS code not received",
      solution:
        "Wait 2-3 minutes. Check if you entered the correct phone number. You can request the code again.",
      icon: "📱",
    },
    {
      problem: "Wrong phone number entered",
      solution:
        "Go back and enter the correct number. Make sure to include your area code but not +91.",
      icon: "🔢",
    },
  ];

  const safetyTips = [
    "Only download WhatsApp from Google Play Store - never from other websites",
    "Use your own phone number - never use someone else's number",
    "Keep your phone number private - don't share it with strangers",
    "The SMS verification code is only for you - don't share it with anyone",
    "If someone asks for your WhatsApp code, it might be a scam",
    "WhatsApp will never call you to ask for verification codes",
  ];

  const installationRequirements = [
    {
      requirement: "Android phone",
      status: "✅",
      note: "Any Android phone works",
    },
    {
      requirement: "Internet connection",
      status: "📶",
      note: "WiFi or mobile data",
    },
    {
      requirement: "Phone number",
      status: "📞",
      note: "Active mobile number for SMS",
    },
    {
      requirement: "Storage space",
      status: "💾",
      note: "At least 100MB free space",
    },
    {
      requirement: "Google account",
      status: "👤",
      note: "Usually already set up on phone",
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
            <span className="text-2xl">💬</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Installing WhatsApp
              </h1>
              <p className="text-sm text-gray-500">
                Download and set up WhatsApp
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
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 pb-24">
        {/* Requirements Check */}
        {currentStep === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📋</span>
              Before We Start - Check These Things
            </h3>
            <div className="space-y-3">
              {installationRequirements.map((req, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <span className="text-lg mr-3">{req.status}</span>
                    <span className="font-medium text-gray-800">
                      {req.requirement}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{req.note}</span>
                </div>
              ))}
            </div>
          </div>
        )}

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

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-2">💡</span>
                <div>
                  <span className="font-medium text-green-800">
                    Helpful Tip:
                  </span>
                  <p className="text-green-700 text-sm mt-1">
                    {steps[currentStep].tip}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center">
                <span className="text-blue-600 text-xl mr-2">👆</span>
                <div>
                  <span className="font-medium text-blue-800">What to do:</span>
                  <p className="text-blue-700 text-sm mt-1">
                    {steps[currentStep].action}
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
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            Next →
          </button>
        </div>

        {/* Help Sections */}
        <div className="space-y-4">
          {/* Troubleshooting */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowTroubleshooting(!showTroubleshooting)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">🔧</span>
                <span className="font-medium text-gray-800">
                  Having Problems? Get Help Here
                </span>
              </div>
              <span className="text-gray-400">
                {showTroubleshooting ? "−" : "+"}
              </span>
            </button>

            {showTroubleshooting && (
              <div className="px-4 pb-4 space-y-3">
                {troubleshootingTips.map((tip, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-start">
                      <span className="text-lg mr-2">{tip.icon}</span>
                      <div>
                        <p className="font-medium text-gray-800 text-sm mb-1">
                          {tip.problem}
                        </p>
                        <p className="text-gray-600 text-sm">{tip.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

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
              <div className="px-4 pb-4 space-y-2">
                {safetyTips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-red-50 rounded-lg p-3"
                  >
                    <span className="text-red-600 mr-2 text-sm">•</span>
                    <p className="text-red-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Success Message */}
          {currentStep === steps.length - 1 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">🎉</span>
                <span className="font-medium text-green-800">
                  Congratulations!
                </span>
              </div>
              <p className="text-green-700 text-sm mb-3">
                You have successfully installed WhatsApp! Now you can:
              </p>
              <div className="space-y-1">
                <p className="text-green-700 text-sm">
                  • Send messages to family and friends
                </p>
                <p className="text-green-700 text-sm">
                  • Make voice and video calls
                </p>
                <p className="text-green-700 text-sm">
                  • Share photos and videos
                </p>
                <p className="text-green-700 text-sm">• Join family groups</p>
              </div>
            </div>
          )}
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
            href="/lessons/whatsapp/messages"
            className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-green-600 text-decoration-none"
          >
            Next: Send Messages
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;