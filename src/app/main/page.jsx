"use client";
import React from "react";
import StoryDisplay from "../../components/story-display";

function MainComponent() {
  const [selectedLanguage, setSelectedLanguage] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("digitalMitra_language") || "english";
    }
    return "english";
  });
  const [currentSection, setCurrentSection] = React.useState("home");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("digitalMitra_language", selectedLanguage);
    }
  }, [selectedLanguage]);

  const languages = [
    { code: "english", name: "English", flag: "🇺🇸" },
    { code: "hindi", name: "हिंदी", flag: "🇮🇳" },
    { code: "bengali", name: "বাংলা", flag: "🇧🇩" },
    { code: "tamil", name: "தமிழ்", flag: "🇮🇳" },
    { code: "telugu", name: "తెలుగు", flag: "🇮🇳" },
    { code: "marathi", name: "मराठी", flag: "🇮🇳" },
    { code: "gujarati", name: "ગુજરાતી", flag: "🇮🇳" },
    { code: "kannada", name: "ಕನ್ನಡ", flag: "🇮🇳" },
    { code: "malayalam", name: "മലയാളം", flag: "🇮🇳" },
    { code: "punjabi", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
  ];

  const translations = {
    english: {
      appName: "DigitalMitra",
      tagline: "Learn technology in your language",
      home: "Home",
      progress: "Progress",
      library: "Library",
      settings: "Settings",
      offlineTitle: "Works Offline",
      offlineDesc:
        "All lessons and videos are saved on your phone. No internet needed!",
      learningTip: "Learning Tip",
      learningTipDesc:
        "Take your time with each lesson. Practice makes perfect! Don't hesitate to repeat lessons until you feel confident.",
      sections: {
        smartphone: "Smartphone Basics",
        whatsapp: "WhatsApp",
        google: "Google Search",
        payments: "Digital Payments",
        safety: "Internet Safety",
        government: "Government Services",
        quiz: "Practice Quiz",
      },
    },
    hindi: {
      appName: "डिजिटलमित्र",
      tagline: "अपनी भाषा में तकनीक सीखें",
      home: "होम",
      progress: "प्रगति",
      library: "पुस्तकालय",
      settings: "सेटिंग्स",
      offlineTitle: "ऑफलाइन काम करता है",
      offlineDesc:
        "सभी पाठ और वीडियो आपके फोन में सेव हैं। इंटरनेट की जरूरत नहीं!",
      learningTip: "सीखने की सलाह",
      learningTipDesc:
        "हर पाठ के साथ अपना समय लें। अभ्यास से सिद्धि होती है! जब तक आत्मविश्वास न हो, पाठ दोहराने में झिझक न करें।",
      sections: {
        smartphone: "स्मार्टफोन बेसिक्स",
        whatsapp: "व्हाट्सऐप",
        google: "गूगल सर्च",
        payments: "डिजिटल पेमेंट",
        safety: "इंटरनेट सुरक्षा",
        government: "सरकारी सेवाएं",
        quiz: "अभ्यास प्रश्नोत्तरी",
      },
    },
    bengali: {
      appName: "ডিজিটালমিত্র",
      tagline: "আপনার ভাষায় প্রযুক্তি শিখুন",
      home: "হোম",
      progress: "অগ্রগতি",
      library: "লাইব্রেরি",
      settings: "সেটিংস",
      offlineTitle: "অফলাইনে কাজ করে",
      offlineDesc:
        "সব পাঠ এবং ভিডিও আপনার ফোনে সংরক্ষিত। ইন্টারনেটের প্রয়োজন নেই!",
      learningTip: "শেখার টিপস",
      learningTipDesc:
        "প্রতিটি পাঠের সাথে আপনার সময় নিন। অনুশীলনে নিখুঁততা আসে! আত্মবিশ্বাস না আসা পর্যন্ত পাঠ পুনরাবৃত্তি করতে দ্বিধা করবেন না।",
      sections: {
        smartphone: "স্মার্টফোন বেসিক্স",
        whatsapp: "হোয়াটসঅ্যাপ",
        google: "গূগল সার্চ",
        payments: "ডিজিটাল পেমেন্ট",
        safety: "ইন্টারনেট নিরাপত্তা",
        government: "সরকারি সেবা",
        quiz: "অনুশীলন কুইজ",
      },
    },
    tamil: {
      appName: "டிஜிட்டல்மித்ரா",
      tagline: "உங்கள் மொழியில் தொழில்நுட்பம் கற்றுக்கொள்ளுங்கள்",
      home: "முகப்பு",
      progress: "முன்னேற்றம்",
      library: "நூலகம்",
      settings: "அமைப்புகள்",
      offlineTitle: "ஆஃப்லைனில் வேலை செய்கிறது",
      offlineDesc:
        "அனைத்து பாடங்களும் வீடியோக்களும் உங்கள் போனில் சேமிக்கப்பட்டுள்ளன. இணையம் தேவையில்லை!",
      learningTip: "கற்றல் குறிப்பு",
      learningTipDesc:
        "ஒவ்வொரு பாடத்திற்கும் உங்கள் நேரத்தை எடுத்துக்கொள்ளுங்கள். பயிற்சியே சிறந்தது! நம்பிக்கை வரும் வரை பாடங்களை மீண்டும் செய்ய தயங்காதீர்கள்।",
      sections: {
        smartphone: "ஸ்மார்ட்போன் அடிப்படைகள்",
        whatsapp: "வாட்ஸ்அப்",
        google: "கூகிள் தேடல்",
        payments: "டிஜிட்டல் பேமெண்ட்",
        safety: "இணைய பாதுகாப்பு",
        government: "அரசு சேவைகள்",
        quiz: "பயிற்சி வினாடி வினா",
      },
    },
    telugu: {
      appName: "డిజిటల్మిత్రా",
      tagline: "మీ భాషలో సాంకేతికతను నేర్చుకోండి",
      home: "హోమ్",
      progress: "పురోగతి",
      library: "లైబ్రరీ",
      settings: "సెట్టింగ్స్",
      offlineTitle: "ఆఫ్‌లైన్‌లో పని చేస్తుంది",
      offlineDesc:
        "అన్ని పాఠాలు మరియు వీడియోలు మీ ఫోన్‌లో సేవ్ చేయబడ్డాయి. ఇంటర్నెట్ అవసరం లేదు!",
      learningTip: "నేర్చుకునే చిట్కా",
      learningTipDesc:
        "ప్రతి పాఠంతో మీ సమయాన్ని తీసుకోండి. అభ్యాసం పరిపూర్ణతను తెస్తుంది! నమ్మకం వచ్చే వరకు పాఠాలను పునరావృతం చేయడానికి వెనుకాడకండి।",
      sections: {
        smartphone: "స్మార్ట్‌ఫోన్ బేసిక్స్",
        whatsapp: "వాట్సాప్",
        google: "గూగుల్ సెర్చ్",
        payments: "డిజిటల్ పేమెంట్స్",
        safety: "ఇంటర్నెట్ భద్రత",
        government: "ప్రభుత్వ సేవలు",
        quiz: "ప్రాక్టీస్ క్విజ్",
      },
    },
  };

  const t = translations[selectedLanguage] || translations.english;

  const sections = [
    { id: "home", title: "Home", icon: "🏠" },
    { id: "smartphone", title: "Smartphone Basics", icon: "📱" },
    { id: "whatsapp", title: "WhatsApp", icon: "💬" },
    { id: "google", title: "Google Search", icon: "🔍" },
    { id: "payments", title: "Digital Payments", icon: "💳" },
    { id: "safety", title: "Internet Safety", icon: "🛡️" },
    { id: "government", title: "Government Services", icon: "🏛️" },
    { id: "quiz", title: "Practice Quiz", icon: "📝" },
  ];

  const renderHome = () => (
    <div className="p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{t.appName}</h1>
        <p className="text-gray-600 text-lg">{t.tagline}</p>
        <StoryDisplay icon="🌐" size="2xl" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {sections.slice(1).map((section) => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(section.id)}
            className="bg-white rounded-lg shadow-md p-4 border-2 border-gray-100 hover:border-blue-300 transition-colors"
          >
            <div className="text-4xl mb-2">{section.icon}</div>
            <div className="text-sm font-medium text-gray-800">
              {t.sections[section.id] || section.title}
            </div>
          </button>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
        <div className="flex items-center mb-2">
          <span className="text-green-600 text-xl mr-2">📶</span>
          <span className="font-medium text-green-800">{t.offlineTitle}</span>
        </div>
        <p className="text-green-700 text-sm">{t.offlineDesc}</p>
      </div>
    </div>
  );

  const renderSection = (sectionId) => {
    const sectionContent = {
      smartphone: {
        title: "Smartphone Basics",
        lessons: [
          {
            title: "Turning On/Off Your Phone",
            duration: "3 min",
            type: "video",
            link: "/lessons/smartphone/power",
            description:
              "Learn how to power on your phone, use the power button, and safely turn it off. Understand battery indicators and charging basics.",
          },
          {
            title: "Using Touch Screen",
            duration: "5 min",
            type: "interactive",
            link: "/lessons/smartphone/touchscreen",
            description:
              "Master touch gestures: tap, swipe, pinch to zoom, and scroll. Practice with simple exercises to build confidence.",
          },
          {
            title: "Making Phone Calls",
            duration: "4 min",
            type: "video",
            link: "/lessons/smartphone/calls",
            description:
              "How to dial numbers, answer calls, use speaker phone, and manage call history. Learn about emergency calling.",
          },
          {
            title: "Sending SMS",
            duration: "6 min",
            type: "practice",
            link: "/lessons/smartphone/sms",
            description:
              "Type messages using the keyboard, send SMS, read received messages, and manage your message inbox.",
          },
          {
            title: "Managing Contacts",
            duration: "4 min",
            type: "interactive",
            link: "/lessons/smartphone/contacts",
            description:
              "Save phone numbers, add names, edit contact information, and organize your contact list.",
          },
          {
            title: "Using Camera",
            duration: "5 min",
            type: "practice",
            link: "/lessons/smartphone/camera",
            description:
              "Take photos, view pictures in gallery, delete unwanted photos, and share images with family.",
          },
        ],
      },
      whatsapp: {
        title: "WhatsApp Messaging",
        lessons: [
          {
            title: "Installing WhatsApp",
            duration: "4 min",
            type: "video",
            link: "/lessons/whatsapp/install",
            description:
              "Download WhatsApp from Play Store, verify your phone number, and set up your profile with name and photo.",
          },
          {
            title: "Sending Text Messages",
            duration: "7 min",
            type: "practice",
            link: "/lessons/whatsapp/messages",
            description:
              "Send messages to contacts, use emojis, understand message status (sent, delivered, read), and reply to messages.",
          },
          {
            title: "Voice Messages",
            duration: "5 min",
            type: "audio",
            link: "/lessons/whatsapp/voice",
            description:
              "Record and send voice messages, listen to received voice notes, and understand when to use voice vs text.",
          },
          {
            title: "Sharing Photos & Videos",
            duration: "6 min",
            type: "interactive",
            link: "/lessons/whatsapp/photos",
            description:
              "Share photos from gallery, take and send new photos, send videos, and manage media storage.",
          },
          {
            title: "Group Chats",
            duration: "8 min",
            type: "practice",
            link: "/lessons/whatsapp/groups",
            description:
              "Join family groups, participate in group conversations, understand group etiquette, and mute notifications.",
          },
          {
            title: "Video Calls",
            duration: "6 min",
            type: "video",
            link: "/lessons/whatsapp/videocalls",
            description:
              "Make video calls to family, answer video calls, use camera and microphone controls, and troubleshoot connection issues.",
          },
        ],
      },
      google: {
        title: "Google Search",
        lessons: [
          {
            title: "What is Google?",
            duration: "3 min",
            type: "video",
            link: "/lessons/google/intro",
            description:
              "Understand what Google is, how search engines work, and why Google is useful for finding information.",
          },
          {
            title: "Basic Text Search",
            duration: "8 min",
            type: "practice",
            link: "/lessons/google/search",
            description:
              "Type search queries, understand search results, click on links, and refine your searches for better results.",
          },
          {
            title: "Voice Search",
            duration: "4 min",
            type: "audio",
            link: "/lessons/google/voice",
            description:
              "Use voice commands to search, speak clearly for better recognition, and search in your local language.",
          },
          {
            title: "Finding Local Services",
            duration: "6 min",
            type: "interactive",
            link: "/lessons/google/local",
            description:
              "Search for nearby hospitals, banks, shops, and services. Use Google Maps for directions and contact information.",
          },
          {
            title: "Weather & News",
            duration: "5 min",
            type: "practice",
            link: "/lessons/google/weather",
            description:
              "Check weather forecasts, read local news, and get updates about your area using Google search.",
          },
          {
            title: "Translate Languages",
            duration: "4 min",
            type: "interactive",
            link: "/lessons/google/translate",
            description:
              "Use Google Translate to understand different languages, translate text, and communicate across language barriers.",
          },
        ],
      },
      payments: {
        title: "Digital Payments",
        lessons: [
          {
            title: "What are Digital Payments?",
            duration: "5 min",
            type: "video",
            link: "/lessons/payments/intro",
            description:
              "Understand digital money, benefits over cash, and how digital payments make life easier and safer.",
          },
          {
            title: "UPI and Payment Apps",
            duration: "10 min",
            type: "interactive",
            link: "/lessons/payments/upi",
            description:
              "Learn about UPI, install payment apps like PhonePe or Google Pay, link your bank account, and set up UPI PIN.",
          },
          {
            title: "Making Your First Payment",
            duration: "8 min",
            type: "practice",
            link: "/lessons/payments/firstpay",
            description:
              "Send money to family, pay for groceries, scan QR codes, and understand payment confirmations.",
          },
          {
            title: "Receiving Money",
            duration: "6 min",
            type: "practice",
            link: "/lessons/payments/receive",
            description:
              "Share your QR code, receive payments from others, check payment history, and understand transaction limits.",
          },
          {
            title: "Safe Payment Practices",
            duration: "7 min",
            type: "video",
            link: "/lessons/payments/safety",
            description:
              "Protect your UPI PIN, verify before paying, avoid payment frauds, and what to do if something goes wrong.",
          },
          {
            title: "Bill Payments & Recharges",
            duration: "8 min",
            type: "practice",
            link: "/lessons/payments/bills",
            description:
              "Pay electricity bills, recharge mobile phones, book gas cylinders, and set up automatic payments.",
          },
        ],
      },
      safety: {
        title: "Internet Safety",
        lessons: [
          {
            title: "Protecting Personal Information",
            duration: "6 min",
            type: "video",
            link: "/lessons/safety/privacy",
            description:
              "Keep your Aadhaar, bank details, and personal photos safe. Understand what information to never share online.",
          },
          {
            title: "Recognizing Phone Scams",
            duration: "8 min",
            type: "interactive",
            link: "/lessons/safety/scams",
            description:
              "Identify fake calls claiming to be from banks, government, or lottery. Learn common scam tactics and how to respond.",
          },
          {
            title: "Safe WhatsApp Usage",
            duration: "5 min",
            type: "practice",
            link: "/lessons/safety/whatsapp",
            description:
              "Avoid forwarding fake news, verify information before sharing, and protect yourself from WhatsApp frauds.",
          },
          {
            title: "Password Security",
            duration: "7 min",
            type: "video",
            link: "/lessons/safety/passwords",
            description:
              "Create strong passwords, keep UPI PINs secret, and understand why passwords are important for your safety.",
          },
          {
            title: "Fake News & Misinformation",
            duration: "6 min",
            type: "interactive",
            link: "/lessons/safety/fakenews",
            description:
              "Identify fake news, check information sources, and avoid spreading rumors that can harm your community.",
          },
          {
            title: "What to Do if Cheated",
            duration: "5 min",
            type: "video",
            link: "/lessons/safety/help",
            description:
              "Report cyber crimes, contact bank for unauthorized transactions, and get help from cyber police.",
          },
        ],
      },
      government: {
        title: "Government Services",
        lessons: [
          {
            title: "Aadhaar Services Online",
            duration: "8 min",
            type: "video",
            link: "/lessons/government/aadhaar",
            description:
              "Download Aadhaar card, update address and mobile number, book appointments for Aadhaar updates.",
          },
          {
            title: "Ration Card Services",
            duration: "7 min",
            type: "practice",
            link: "/lessons/government/ration",
            description:
              "Apply for new ration card, add family members, check ration card status, and find nearby fair price shops.",
          },
          {
            title: "Birth & Death Certificates",
            duration: "10 min",
            type: "practice",
            link: "/lessons/government/certificates",
            description:
              "Apply for birth certificates, death certificates, and other important documents online without visiting offices.",
          },
          {
            title: "Banking Services",
            duration: "7 min",
            type: "interactive",
            link: "/lessons/government/banking",
            description:
              "Check bank balance, view mini statements, apply for loans, and access banking services through mobile apps.",
          },
          {
            title: "Pension & Welfare Schemes",
            duration: "9 min",
            type: "video",
            link: "/lessons/government/schemes",
            description:
              "Apply for old age pension, widow pension, disability benefits, and other government welfare schemes.",
          },
          {
            title: "Job & Employment Services",
            duration: "8 min",
            type: "practice",
            link: "/lessons/government/employment",
            description:
              "Register on employment portals, search for government jobs, apply for MGNREGA work, and skill development programs.",
          },
        ],
      },
      quiz: {
        title: "Practice Quiz",
        lessons: [
          {
            title: "Smartphone Basics Quiz",
            duration: "5 min",
            type: "quiz",
            link: "/quiz/smartphone",
            description:
              "Test your knowledge of phone operations, touch gestures, calling, and messaging. 10 questions to check your learning.",
          },
          {
            title: "WhatsApp Skills Quiz",
            duration: "4 min",
            type: "quiz",
            link: "/quiz/whatsapp",
            description:
              "Quiz on WhatsApp messaging, voice calls, group chats, and sharing media. Practice what you've learned.",
          },
          {
            title: "Digital Payments Quiz",
            duration: "6 min",
            type: "quiz",
            link: "/quiz/payments",
            description:
              "Test your understanding of UPI, payment safety, and digital transactions. Ensure you can pay safely.",
          },
          {
            title: "Internet Safety Quiz",
            duration: "5 min",
            type: "quiz",
            link: "/quiz/safety",
            description:
              "Check your knowledge of online safety, scam recognition, and protecting personal information.",
          },
          {
            title: "Government Services Quiz",
            duration: "4 min",
            type: "quiz",
            link: "/quiz/government",
            description:
              "Quiz on accessing Aadhaar services, applying for certificates, and using government online portals.",
          },
          {
            title: "Final Assessment",
            duration: "15 min",
            type: "quiz",
            link: "/quiz/final",
            description:
              "Comprehensive test covering all topics. Complete this to earn your DigitalMitra certificate of completion.",
          },
        ],
      },
    };

    const section = sectionContent[sectionId];
    if (!section) return null;

    const getTypeIcon = (type) => {
      switch (type) {
        case "video":
          return "🎥";
        case "audio":
          return "🎧";
        case "practice":
          return "✋";
        case "interactive":
          return "🎯";
        case "quiz":
          return "❓";
        default:
          return "📚";
      }
    };

    return (
      <div className="p-6 pb-20">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setCurrentSection("home")}
            className="mr-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            ←
          </button>
          <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
        </div>

        <div className="space-y-4">
          {section.lessons.map((lesson, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <span className="text-2xl mt-1">
                    {getTypeIcon(lesson.type)}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 mb-1">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {lesson.duration} • {lesson.type}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {lesson.description}
                    </p>
                  </div>
                </div>
                <a
                  href={lesson.link}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-decoration-none ml-4 flex-shrink-0"
                >
                  Start
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="text-yellow-600 text-xl mr-2">💡</span>
            <span className="font-medium text-yellow-800">{t.learningTip}</span>
          </div>
          <p className="text-yellow-700 text-sm">{t.learningTipDesc}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📚</span>
            <span className="font-bold text-lg text-gray-800">{t.appName}</span>
          </div>

          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm appearance-none pr-8 min-w-[120px]"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <span className="text-gray-400 text-xs">▼</span>
            </div>
          </div>
        </div>
      </div>

      {currentSection === "home" ? renderHome() : renderSection(currentSection)}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <button
            onClick={() => setCurrentSection("home")}
            className={`flex flex-col items-center py-2 px-3 rounded-lg ${
              currentSection === "home"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
            }`}
          >
            <span className="text-xl mb-1">🏠</span>
            <span className="text-xs">{t.home}</span>
          </button>
          <a
            href="/progress"
            className="flex flex-col items-center py-2 px-3 rounded-lg text-gray-600 text-decoration-none"
          >
            <span className="text-xl mb-1">📊</span>
            <span className="text-xs">{t.progress}</span>
          </a>
          <a
            href="/library"
            className="flex flex-col items-center py-2 px-3 rounded-lg text-gray-600 text-decoration-none"
          >
            <span className="text-xl mb-1">📖</span>
            <span className="text-xs">{t.library}</span>
          </a>
          <a
            href="/settings"
            className="flex flex-col items-center py-2 px-3 rounded-lg text-gray-600 text-decoration-none"
          >
            <span className="text-xl mb-1">⚙️</span>
            <span className="text-xs">{t.settings}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;