"use client";
import React from "react";

function MainComponent() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [showExamples, setShowExamples] = React.useState(false);
  const [showScamTricks, setShowScamTricks] = React.useState(false);

  const steps = [
    {
      title: "What is Personal Information?",
      icon: "🔒",
      content:
        "Personal information is any detail about you that can be used to identify you or access your accounts. This includes your name, phone number, address, bank details, and photos.",
      visual: "👤",
      tip: "Think of personal information as the keys to your house - you wouldn't give them to strangers.",
    },
    {
      title: "Your Aadhaar Card Details",
      icon: "🆔",
      content:
        "Your Aadhaar number is like your digital fingerprint. Never share your 12-digit Aadhaar number, especially the photo of your Aadhaar card, with anyone online.",
      visual: "📄",
      tip: "If someone asks for Aadhaar details on phone or WhatsApp, it's likely a scam. Government offices don't ask for Aadhaar through calls.",
    },
    {
      title: "Bank Account Safety",
      icon: "🏦",
      content:
        "Never share your bank account number, debit card number, CVV (3 digits on back), PIN, or OTP (one-time password) with anyone, even if they claim to be from your bank.",
      visual: "💳",
      tip: "Banks will never call you asking for your PIN or OTP. If someone does, hang up immediately.",
    },
    {
      title: "Protecting Your Photos",
      icon: "📸",
      content:
        "Be careful about sharing personal photos, especially those showing your home, family, or important documents. Scammers can misuse these photos.",
      visual: "🖼️",
      tip: "Before sharing any photo, ask yourself: 'Would I be comfortable if a stranger saw this?'",
    },
    {
      title: "Safe vs Unsafe Information",
      icon: "⚖️",
      content:
        "Some information is safe to share, like your first name or general location (city). But detailed personal information should always be kept private.",
      visual: "✅",
      tip: "When in doubt, don't share. It's better to be safe than sorry when it comes to personal information.",
    },
    {
      title: "Creating Strong Passwords",
      icon: "🔐",
      content:
        "Use different passwords for different accounts. Make them long and include numbers. Never use your name, phone number, or birth date as passwords.",
      visual: "🔑",
      tip: "A good password is like a strong lock - it should be hard for others to guess but easy for you to remember.",
    },
  ];

  const safeVsUnsafeInfo = [
    {
      category: "Name Information",
      safe: "First name only (like 'Raj')",
      unsafe: "Full name with father's name",
      icon: "👤",
      risk: "Can be used to impersonate you",
    },
    {
      category: "Location Details",
      safe: "City name (like 'Mumbai')",
      unsafe: "Complete home address with house number",
      icon: "📍",
      risk: "Strangers might visit your home",
    },
    {
      category: "Phone Number",
      safe: "Not sharing at all",
      unsafe: "Giving to unknown people online",
      icon: "📞",
      risk: "Spam calls and scam attempts",
    },
    {
      category: "Family Information",
      safe: "General family size (like 'I have 2 children')",
      unsafe: "Names, ages, and schools of children",
      icon: "👨‍👩‍👧‍👦",
      risk: "Family members can be targeted",
    },
    {
      category: "Financial Details",
      safe: "Nothing about money or banks",
      unsafe: "Bank name, account numbers, card details",
      icon: "💰",
      risk: "Money can be stolen from accounts",
    },
    {
      category: "Government IDs",
      safe: "Not sharing any ID numbers",
      unsafe: "Aadhaar, PAN, Voter ID numbers",
      icon: "🆔",
      risk: "Identity theft and fraud",
    },
  ];

  const scammerTricks = [
    {
      trick: "Fake Government Calls",
      description:
        "Someone calls saying they're from government and need your Aadhaar details to 'update' your information.",
      reality:
        "Government never calls asking for personal details. They have your information already.",
      response:
        "Hang up immediately. Visit the actual government office if you have concerns.",
      icon: "🏛️",
    },
    {
      trick: "Bank Security Calls",
      description:
        "Caller claims your bank account is blocked and asks for OTP or PIN to 'reactivate' it.",
      reality:
        "Banks never ask for PIN or OTP over phone. They already have access to your account.",
      response:
        "End the call. Visit your bank branch or call the official bank number.",
      icon: "🏦",
    },
    {
      trick: "WhatsApp Verification Scam",
      description:
        "Someone asks you to share the 6-digit WhatsApp verification code they 'accidentally' sent to your number.",
      reality:
        "They're trying to take over your WhatsApp account using your number.",
      response: "Never share WhatsApp codes. That code is meant only for you.",
      icon: "💬",
    },
    {
      trick: "Lottery Winner Scam",
      description:
        "Message saying you won a lottery and need to share bank details to claim the prize.",
      reality: "You can't win a lottery you never entered. It's always fake.",
      response: "Delete the message. Real lotteries don't work this way.",
      icon: "🎰",
    },
    {
      trick: "Family Emergency Scam",
      description:
        "Call claiming your family member is in trouble and needs money urgently.",
      reality: "Scammers use fear to make you act quickly without thinking.",
      response:
        "Call your family member directly to verify. Don't send money based on unknown calls.",
      icon: "🚨",
    },
    {
      trick: "Job Offer Scam",
      description:
        "Fake job offers asking for Aadhaar, bank details, or money for 'processing fees'.",
      reality:
        "Real employers never ask for money or sensitive documents before hiring.",
      response:
        "Research the company. Real jobs don't require upfront payments.",
      icon: "💼",
    },
  ];

  const safetyRules = [
    "Never share your Aadhaar number, bank details, or OTP with anyone",
    "Don't give personal information to unknown callers, even if they sound official",
    "Keep your phone locked with a PIN or pattern that others don't know",
    "Don't share photos of important documents like Aadhaar, PAN card, or bank statements",
    "Be suspicious of urgent requests for money or personal information",
    "When in doubt, ask a trusted family member or friend for advice",
    "Visit official offices in person if you're unsure about any government requests",
    "Use different passwords for different apps and accounts",
    "Don't click on suspicious links sent through SMS or WhatsApp",
    "Trust your instincts - if something feels wrong, it probably is",
  ];

  const documentSafetyTips = [
    {
      document: "Aadhaar Card",
      safePractice: "Keep physical copy in safe place at home",
      unsafePractice: "Sharing photo of Aadhaar on WhatsApp or social media",
      icon: "🆔",
    },
    {
      document: "Bank Statements",
      safePractice: "Store in locked drawer, shred old ones",
      unsafePractice: "Leaving bank papers where others can see them",
      icon: "📄",
    },
    {
      document: "PAN Card",
      safePractice: "Use only when required by official institutions",
      unsafePractice: "Giving PAN number to unknown people or websites",
      icon: "📋",
    },
    {
      document: "Voter ID",
      safePractice: "Show only when voting or for official verification",
      unsafePractice: "Using as general ID for non-official purposes",
      icon: "🗳️",
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
            <span className="text-2xl">🛡️</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Protecting Personal Information
              </h1>
              <p className="text-sm text-gray-500">
                Keep your private details safe online
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
            className="bg-red-500 h-2 rounded-full transition-all duration-300"
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

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-2">⚠️</span>
                <div>
                  <span className="font-medium text-red-800">Important:</span>
                  <p className="text-red-700 text-sm mt-1">
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
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            Next →
          </button>
        </div>

        {/* Safe vs Unsafe Information */}
        {currentStep === 4 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">⚖️</span>
              Safe vs Unsafe Information to Share
            </h3>
            <div className="space-y-4">
              {safeVsUnsafeInfo.map((info, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{info.icon}</span>
                    <h4 className="font-medium text-gray-800">
                      {info.category}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <span className="text-green-600 text-lg mr-2">✅</span>
                        <span className="font-medium text-green-800">
                          Safe to Share
                        </span>
                      </div>
                      <p className="text-green-700 text-sm">{info.safe}</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <span className="text-red-600 text-lg mr-2">❌</span>
                        <span className="font-medium text-red-800">
                          Never Share
                        </span>
                      </div>
                      <p className="text-red-700 text-sm">{info.unsafe}</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                    <p className="text-yellow-800 text-sm">
                      <span className="font-medium">Risk:</span> {info.risk}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Information Sections */}
        <div className="space-y-4">
          {/* Scammer Tricks */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowScamTricks(!showScamTricks)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">🎭</span>
                <span className="font-medium text-gray-800">
                  Common Tricks Scammers Use
                </span>
              </div>
              <span className="text-gray-400">
                {showScamTricks ? "−" : "+"}
              </span>
            </button>

            {showScamTricks && (
              <div className="px-4 pb-4 space-y-4">
                {scammerTricks.map((trick, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{trick.icon}</span>
                      <h4 className="font-medium text-gray-800">
                        {trick.trick}
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-red-800 text-sm font-medium mb-1">
                          What they say:
                        </p>
                        <p className="text-red-700 text-sm">
                          {trick.description}
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-blue-800 text-sm font-medium mb-1">
                          The truth:
                        </p>
                        <p className="text-blue-700 text-sm">{trick.reality}</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-green-800 text-sm font-medium mb-1">
                          What to do:
                        </p>
                        <p className="text-green-700 text-sm">
                          {trick.response}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Document Safety */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowExamples(!showExamples)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">📄</span>
                <span className="font-medium text-gray-800">
                  How to Keep Important Documents Safe
                </span>
              </div>
              <span className="text-gray-400">{showExamples ? "−" : "+"}</span>
            </button>

            {showExamples && (
              <div className="px-4 pb-4 space-y-3">
                {documentSafetyTips.map((tip, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{tip.icon}</span>
                      <h4 className="font-medium text-gray-800">
                        {tip.document}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-green-800 text-sm font-medium mb-1">
                          ✅ Safe Practice:
                        </p>
                        <p className="text-green-700 text-sm">
                          {tip.safePractice}
                        </p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-red-800 text-sm font-medium mb-1">
                          ❌ Unsafe Practice:
                        </p>
                        <p className="text-red-700 text-sm">
                          {tip.unsafePractice}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Safety Rules */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <span className="text-red-600 text-xl mr-2">📋</span>
              <span className="font-medium text-red-800">
                10 Simple Rules to Stay Safe
              </span>
            </div>
            <div className="space-y-2">
              {safetyRules.map((rule, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-red-600 mr-2 text-sm font-bold">
                    {index + 1}.
                  </span>
                  <p className="text-red-700 text-sm">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-xl mr-2">🚨</span>
              <span className="font-medium text-blue-800">
                If You Think You've Been Scammed
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-blue-700 text-sm">
                • Call your bank immediately if you shared bank details
              </p>
              <p className="text-blue-700 text-sm">
                • Report to Cyber Crime: Call 1930 or visit cybercrime.gov.in
              </p>
              <p className="text-blue-700 text-sm">
                • Tell a trusted family member or friend what happened
              </p>
              <p className="text-blue-700 text-sm">
                • Don't be embarrassed - scammers are very clever and trick many
                people
              </p>
            </div>
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
            href="/lessons/safety/scams"
            className="flex-1 bg-red-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-red-600 text-decoration-none"
          >
            Next: Recognize Scams
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;