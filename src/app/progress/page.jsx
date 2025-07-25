"use client";
import React from "react";

function MainComponent() {
  const [selectedSection, setSelectedSection] = React.useState("all");
  const [showCertificates, setShowCertificates] = React.useState(false);
  const [showAchievements, setShowAchievements] = React.useState(false);

  // Language system - Load saved language preference
  const [selectedLanguage] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("digitalMitra_language") || "english";
    }
    return "english";
  });

  // Language translations
  const translations = {
    english: {
      appName: "DigitalMitra",
      progressTitle: "Your Progress",
      progressSubtitle: "Track your learning journey",
      continueButton: "Continue Learning",
      greatProgress: "Great Progress!",
      doingAmazing: "You're doing amazing! Keep it up!",
      overallProgress: "Overall Progress",
      lessonsCompleted: "Lessons Completed",
      dayStreak: "Day Streak",
      certificates: "Certificates",
      timeSpent: "Time Spent",
      achievements: "Achievements",
      lessonsLeft: "Lessons Left",
      bestStreak: "Best Streak",
      filterSection: "Filter by Section",
      allSections: "All Sections",
      certificateEarned: "Certificate Earned",
      lastLesson: "Last",
      nextLesson: "Next",
      sectionComplete: "Section Complete!",
      achievementsBadges: "Achievements & Badges",
      yourCertificates: "Your Certificates",
      noCertificates: "No certificates earned yet",
      completeSections: "Complete sections to earn certificates!",
      download: "Download",
      makingProgress: "You're Making Great Progress!",
      shareProgress: "Share Progress",
      recommendedSteps: "Recommended Next Steps",
      start: "Start",
      home: "Home",
      progress: "Progress",
      library: "Library",
      settings: "Settings",
      sections: {
        smartphone: "Smartphone Basics",
        whatsapp: "WhatsApp",
        google: "Google Search",
        payments: "Digital Payments",
        safety: "Internet Safety",
        government: "Government Services",
      },
      motivationalMessages: {
        high: "You're almost there! Just a few more lessons to complete your digital journey.",
        medium: "Halfway there! Your dedication is paying off. Keep learning!",
        low: "Every lesson brings you closer to becoming digitally confident. You've got this!",
      },
    },
    hindi: {
      appName: "डिजिटलमित्र",
      progressTitle: "आपकी प्रगति",
      progressSubtitle: "अपनी सीखने की यात्रा को ट्रैक करें",
      continueButton: "सीखना जारी रखें",
      greatProgress: "बहुत अच्छी प्रगति!",
      doingAmazing: "आप कमाल कर रहे हैं! एभाबेक चलते रहें!",
      overallProgress: "कुल प्रगति",
      lessonsCompleted: "पूरे किए गए पाठ",
      dayStreak: "दिन की श्रृंखला",
      certificates: "प्रमाणपत्र",
      timeSpent: "समय व्यतीत",
      achievements: "उपलब्धियां",
      lessonsLeft: "बचे हुए पाठ",
      bestStreak: "सबसे अच्छी श्रृंखला",
      filterSection: "सेक्शन के अनुसार फ़िल्टर करें",
      allSections: "सभी सेक्शन",
      certificateEarned: "प्रमाणपत्र अर्जित",
      lastLesson: "अंतिम",
      nextLesson: "अगला",
      sectionComplete: "सेक्शन पूरा!",
      achievementsBadges: "उपलब्धियां और बैज",
      yourCertificates: "आपके प्रमाणपत्र",
      noCertificates: "अभी तक कोई प्रमाणपत्र नहीं मिला",
      completeSections: "प्रमाणपत्र पाने के लिए सेक्शन पूरे करें!",
      download: "डाउनलोड",
      makingProgress: "आप बहुत अच्छी प्रगति कर रहे हैं!",
      shareProgress: "प्रगति साझा करें",
      recommendedSteps: "सुझाए गए अगले कदम",
      start: "शुरू करें",
      home: "होम",
      progress: "प्रगति",
      library: "पुस्तकालय",
      settings: "सेटिंग्स",
      sections: {
        smartphone: "स्मार्टफोन बेसिक्स",
        whatsapp: "व्हाट्सऐप",
        google: "गूगल सर्च",
        payments: "डिजिटल पेमेंट",
        safety: "इंटरनेट सुरक्षा",
        government: "सरकारी सेवाएं",
      },
      motivationalMessages: {
        high: "आप लगभग पहुंच गए हैं! अपनी डिजिटल यात्रा पूरी करने के लिए बस कुछ और पाठ।",
        medium: "आधा रास्ता पूरा! आपकी मेहनत रंग ला रही है। सीखते रहें!",
        low: "हर पाठ आपको डिजिटल रूप से आत्मविश्वासी बनने के करीब ले जाता है। आप कर सकते हैं!",
      },
    },
    bengali: {
      appName: "ডিজিটালমিত্র",
      progressTitle: "আপনার অগ্রগতি",
      progressSubtitle: "আপনার শেখার যাত্রা ট্র্যাক করুন",
      continueButton: "শেখা অব্যাহত রাখুন",
      greatProgress: "দুর্দান্ত অগ্রগতি!",
      doingAmazing: "আপনি অসাধারণ করছেন! ইতে পোলি চালিয়ে যান!",
      overallProgress: "সামগ্রিক অগ্রগতি",
      lessonsCompleted: "সম্পন্ন পাঠ",
      dayStreak: "দিনের ধারাবাহিকতা",
      certificates: "সার্টিফিকেট",
      timeSpent: "ব্যয়িত সময়",
      achievements: "অর্জন",
      lessonsLeft: "বাকি পাঠ",
      bestStreak: "সেরা ধারাবাহিকতা",
      filterSection: "বিভাগ অনুযায়ী ফিল্টার",
      allSections: "সব বিভাগ",
      certificateEarned: "সার্টিফিকেট অর্জিত",
      lastLesson: "শেষ",
      nextLesson: "পরবর্তী",
      sectionComplete: "বিভাগ সম্পূর্ণ!",
      achievementsBadges: "অর্জন এবং ব্যাজ",
      yourCertificates: "আপনার সার্টিফিকেট",
      noCertificates: "এখনও কোন সার্টিফিকেট অর্জিত হয়নি",
      completeSections: "সার্টিফিকেট পেতে বিভাগ সম্পূর্ণ করুন!",
      download: "ডাউনলোড",
      makingProgress: "আপনি দুর্দান্ত অগ্রগতি করছেন!",
      shareProgress: "অগ্রগতি শেয়ার করুন",
      recommendedSteps: "সুপারিশকৃত পরবর্তী পদক্ষেপ",
      start: "শুরু করুন",
      home: "হোম",
      progress: "অগ্রগতি",
      library: "লাইব্রেরি",
      settings: "সেটিংস",
      sections: {
        smartphone: "স্মার্টফোন বেসিক্স",
        whatsapp: "হোয়াটসঅ্যাপ",
        google: "গুগল সার্চ",
        payments: "ডিজিটাল পেমেন্ট",
        safety: "ইন্টারনেট নিরাপত্তা",
        government: "সরকারি সেবা",
      },
      motivationalMessages: {
        high: "আপনি প্রায় পৌঁছে গেছেন! আপনার ডিজিটাল যাত্রা সম্পূর্ণ করতে আরও কয়েকটি পাঠ।",
        medium: "অর্ধেক পথ সম্পন্ন! আপনার নিষ্ঠা ফল দিচ্ছে। শেখা চালিয়ে যান!",
        low: "প্রতিটি পাঠ আপনাকে ডিজিটালভাবে আত্মবিশ্বাসী হওয়ার কাছাকাছি নিয়ে যায়। আপনি পারবেন!",
      },
    },
    tamil: {
      appName: "டிஜிட்டல்மித்ரா",
      progressTitle: "உங்கள் முன்னேற்றம்",
      progressSubtitle: "உங்கள் கற்றல் பயணத்தைக் கண்காணிக்கவும்",
      continueButton: "கற்றலைத் தொடர்க",
      greatProgress: "சிறந்த முன்னேற்றம்!",
      doingAmazing:
        "நீங்கள் அற்புதமாக செய்கிறீர்கள்! இதே போல் தொடர்ந்து செய்யுங்கள்!",
      overallProgress: "ஒட்டுமொத்த முன்னேற்றம்",
      lessonsCompleted: "முடிக்கப்பட்ட பாடங்கள்",
      dayStreak: "ரோజுల ஶேர்ச்சி",
      certificates: "சான்றிதழ்கள்",
      timeSpent: "செலவழிக்கப்பட்ட நேரம்",
      achievements: "சாதனைகள்",
      lessonsLeft: "மீதமுள்ள பாடங்கள்",
      bestStreak: "சிறந்த தொடர்ச்சி",
      filterSection: "பிரிவின் படி வடிகட்டு",
      allSections: "அனைத்து பிரிவுகள்",
      certificateEarned: "சான்றிதழ் பொறப்பட்டது",
      lastLesson: "கடைசி",
      nextLesson: "தదுபரி",
      sectionComplete: "பிரிவு நிறைவு!",
      achievementsBadges: "சாதனைகள் மற்றும் பேட்ஜ்கள்",
      yourCertificates: "உங்கள் சான்றிதழ்கள்",
      noCertificates: "இன்னும் சான்றிதழ்கள் எதுவும் பெறப்படவில்லை",
      completeSections: "சான்றிதழ்கள் பெற பிரிவுகளை முடிக்கவும்!",
      download: "பதிவிறக்க",
      makingProgress: "நீங்கள் சிறந்த முன்னேற்றம் அடைகிறீர்கள்!",
      shareProgress: "முன்னேற்றத்தைப் பகிர்க",
      recommendedSteps: "பரிந்துரைக்கப்பட்ட அடுத்த படிகள்",
      start: "தொடங்க",
      home: "முகப்பு",
      progress: "முன்னேற்றம்",
      library: "லைబ்ரேரி",
      settings: "அமைப்புகள்",
      sections: {
        smartphone: "ஸ்மார்ட்போன் அடிப்படைகள்",
        whatsapp: "வாட்ஸ்அப்",
        google: "கூகிள் தேடல்",
        payments: "டிஜிட்டல் பேமெண்ட்",
        safety: "இணைய பாதுகாப்பு",
        government: "அரசு சேவைகள்",
      },
      motivationalMessages: {
        high: "நீங்கள் கிட்டத்தட்ட அங்கே இருக்கிறீர்கள்! உங்கள் ஡ிஜிடல் பயணத்தை முடிக்க இன்னும் கொన்து கொண்டு வருகிறது.",
        medium:
          "பாதி வழி முடிந்தது! உங்கள் அர்ப்பணிப்பு பலன் தருகிறது. தொடர்ந்து கற்றுக்கொள்ளுங்கள்!",
        low: "ஒவ்வொரு பாடமும் உங்களை டிஜிடல் நம்பிக்கையுடன் இருக்க அருகில் கொண்டு வருகிறது. உங்களால் முடியும்!",
      },
    },
    telugu: {
      appName: "డిజిటల్మిత్రా",
      progressTitle: "మీ పురోగతి",
      progressSubtitle: "మీ నేర్చుకునే ప్రయాణాన్ని ట్రాక్ చేయండి",
      continueButton: "నేర్చుకోవడం కొనసాగించండి",
      greatProgress: "గొప్ప పురోగతి!",
      doingAmazing: "మీరు అద్భుతంగా చేస్తున్నారు! ఇలాగే కొనసాగించండి!",
      overallProgress: "మొత్తం పురోగతి",
      lessonsCompleted: "పూర్తి అయిన పాఠాలు",
      dayStreak: "రోజుల శ్రేణి",
      certificates: "సర్టిఫికేట్లు",
      timeSpent: "గడిపిన సమయం",
      achievements: "సాధనలు",
      lessonsLeft: "మిగిలిన పాఠాలు",
      bestStreak: "ఉత్తమ శ్రేణి",
      filterSection: "విభాగం ప్రకారం ఫిల్టర్ చేయండి",
      allSections: "అన్ని విభాగాలు",
      certificateEarned: "సర్టిఫికేట్ పొందారు",
      lastLesson: "చివరి",
      nextLesson: "తదుపరి",
      sectionComplete: "విభాగం పూర్తి!",
      achievementsBadges: "సాధనలు మరియు బ్యాడ్జ్‌లు",
      yourCertificates: "మీ సర్టిఫికేట్లు",
      noCertificates: "ఇంకా ఎటువంటి సర్టిఫికేట్లు పొందలేదు",
      completeSections: "సర్టిఫికేట్లు పొందడానికి విభాగాలను పూర్తి చేయండి!",
      download: "డౌన్‌లోడ్",
      makingProgress: "మీరు గొప్ప పురోగతి సాధిస్తున్నారు!",
      shareProgress: "పురోగతిని పంచుకోండి",
      recommendedSteps: "సిఫార్సు చేయబడిన తదుపరి దశలు",
      start: "ప్రారంభించండి",
      home: "హోమ్",
      progress: "పురోగతి",
      library: "లైబ్రరీ",
      settings: "సెట్టింగ్స్",
      sections: {
        smartphone: "స్మార్ట్‌ఫోన్ బేసిక్స్",
        whatsapp: "వాట్సాప్",
        google: "గూగుల్ సెర్చ్",
        payments: "డిజిటల్ పేమెంట్స్",
        safety: "ఇంటర్నెట్ భద్రత",
        government: "ప్రభుత్వ సేవలు",
      },
      motivationalMessages: {
        high: "మీరు దాదాపు అక్కడ ఉన్నారు! మీ డిజిటల్ ప్రయాణాన్ని పూర్తి చేయడానికి కేవలం కొన్ని మరిన్ని పాఠాలు.",
        medium:
          "సగం దూరం పూర్తి! మీ అంకితభావం ఫలిస్తోంది. నేర్చుకోవడం కొనసాగించండి!",
        low: "ప్రతి పాఠం మిమ్మల్ని డిజిటల్‌గా నమ్మకంతో ఉండటానికి దగ్గరగా తీసుకువస్తుంది. మీరు చేయగలరు!",
      },
    },
  };

  // Get current language content
  const t = translations[selectedLanguage] || translations.english;

  // Mock progress data - in real app this would come from user's learning history
  const progressData = {
    overallProgress: 68,
    totalLessons: 36,
    completedLessons: 24,
    currentStreak: 7,
    longestStreak: 12,
    totalTimeSpent: 180, // minutes
    certificatesEarned: 2,
    lastActivity: "2 hours ago",
    sections: [
      {
        id: "smartphone",
        title: t.sections.smartphone,
        icon: "📱",
        progress: 100,
        totalLessons: 6,
        completedLessons: 6,
        timeSpent: 45,
        certificate: true,
        lastLesson: "Using Camera",
        nextLesson: null,
        color: "green",
      },
      {
        id: "whatsapp",
        title: t.sections.whatsapp,
        icon: "💬",
        progress: 83,
        totalLessons: 6,
        completedLessons: 5,
        timeSpent: 38,
        certificate: false,
        lastLesson: "Group Chats",
        nextLesson: "Video Calls",
        color: "blue",
      },
      {
        id: "google",
        title: t.sections.google,
        icon: "🔍",
        progress: 67,
        totalLessons: 6,
        completedLessons: 4,
        timeSpent: 32,
        certificate: false,
        lastLesson: "Finding Local Services",
        nextLesson: "Weather & News",
        color: "purple",
      },
      {
        id: "payments",
        title: t.sections.payments,
        icon: "💳",
        progress: 50,
        totalLessons: 6,
        completedLessons: 3,
        timeSpent: 28,
        certificate: false,
        lastLesson: "Making Your First Payment",
        nextLesson: "Receiving Money",
        color: "orange",
      },
      {
        id: "safety",
        title: t.sections.safety,
        icon: "🛡️",
        progress: 33,
        totalLessons: 6,
        completedLessons: 2,
        timeSpent: 22,
        certificate: false,
        lastLesson: "Protecting Personal Information",
        nextLesson: "Recognizing Phone Scams",
        color: "red",
      },
      {
        id: "government",
        title: t.sections.government,
        icon: "🏛️",
        progress: 17,
        totalLessons: 6,
        completedLessons: 1,
        timeSpent: 15,
        certificate: false,
        lastLesson: "Aadhaar Services Online",
        nextLesson: "Ration Card Services",
        color: "indigo",
      },
    ],
  };

  const achievements = [
    {
      id: "first_lesson",
      title: "First Steps",
      description: "Completed your first lesson",
      icon: "🎯",
      earned: true,
      date: "5 days ago",
    },
    {
      id: "smartphone_master",
      title: "Smartphone Master",
      description: "Completed all Smartphone Basics lessons",
      icon: "📱",
      earned: true,
      date: "3 days ago",
    },
    {
      id: "week_streak",
      title: "Week Warrior",
      description: "7 days learning streak",
      icon: "🔥",
      earned: true,
      date: "Today",
    },
    {
      id: "whatsapp_expert",
      title: "WhatsApp Expert",
      description: "Complete all WhatsApp lessons",
      icon: "💬",
      earned: false,
      progress: 83,
    },
    {
      id: "safety_champion",
      title: "Safety Champion",
      description: "Complete all Internet Safety lessons",
      icon: "🛡️",
      earned: false,
      progress: 33,
    },
    {
      id: "digital_citizen",
      title: "Digital Citizen",
      description: "Complete 50% of all lessons",
      icon: "🏆",
      earned: true,
      date: "1 day ago",
    },
  ];

  const certificates = [
    {
      id: "smartphone_cert",
      title: "Smartphone Basics Certificate",
      section: t.sections.smartphone,
      earnedDate: "3 days ago",
      icon: "📱",
      color: "green",
    },
    {
      id: "digital_citizen_cert",
      title: "Digital Citizen Certificate",
      section: "Overall Progress",
      earnedDate: "1 day ago",
      icon: "🏆",
      color: "gold",
    },
  ];

  const getProgressColor = (progress) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-yellow-500";
    if (progress >= 20) return "bg-orange-500";
    return "bg-red-500";
  };

  const getSectionColor = (color) => {
    const colors = {
      green: "bg-green-500",
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      red: "bg-red-500",
      indigo: "bg-indigo-500",
    };
    return colors[color] || "bg-gray-500";
  };

  const filteredSections =
    selectedSection === "all"
      ? progressData.sections
      : progressData.sections.filter(
          (section) => section.id === selectedSection
        );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📊</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                {t.progressTitle}
              </h1>
              <p className="text-sm text-gray-500">{t.progressSubtitle}</p>
            </div>
          </div>
          <a
            href="/digital-skills-learning"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-decoration-none text-sm font-medium"
          >
            {t.continueButton}
          </a>
        </div>
      </div>

      <div className="p-6 pb-24">
        {/* Overall Progress Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">{t.greatProgress}</h2>
              <p className="text-blue-100">{t.doingAmazing}</p>
            </div>
            <div className="text-6xl">🎉</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {progressData.overallProgress}%
              </div>
              <div className="text-sm text-blue-100">{t.overallProgress}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {progressData.completedLessons}
              </div>
              <div className="text-sm text-blue-100">{t.lessonsCompleted}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {progressData.currentStreak}
              </div>
              <div className="text-sm text-blue-100">{t.dayStreak} 🔥</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {progressData.certificatesEarned}
              </div>
              <div className="text-sm text-blue-100">{t.certificates}</div>
            </div>
          </div>

          <div className="w-full bg-blue-400 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressData.overallProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
            <div className="text-2xl mb-2">⏱️</div>
            <div className="text-lg font-bold text-gray-800">
              {progressData.totalTimeSpent}m
            </div>
            <div className="text-sm text-gray-500">{t.timeSpent}</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
            <div className="text-2xl mb-2">🏆</div>
            <div className="text-lg font-bold text-gray-800">
              {achievements.filter((a) => a.earned).length}
            </div>
            <div className="text-sm text-gray-500">{t.achievements}</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
            <div className="text-2xl mb-2">📚</div>
            <div className="text-lg font-bold text-gray-800">
              {progressData.totalLessons - progressData.completedLessons}
            </div>
            <div className="text-sm text-gray-500">{t.lessonsLeft}</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
            <div className="text-2xl mb-2">🔥</div>
            <div className="text-lg font-bold text-gray-800">
              {progressData.longestStreak}
            </div>
            <div className="text-sm text-gray-500">{t.bestStreak}</div>
          </div>
        </div>

        {/* Section Filter */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm border">
          <h3 className="font-bold text-gray-800 mb-3">{t.filterSection}</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSection("all")}
              className={`px-3 py-2 rounded-lg text-sm font-medium ${
                selectedSection === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.allSections}
            </button>
            {progressData.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center ${
                  selectedSection === section.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-1">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Section Progress */}
        <div className="space-y-4 mb-6">
          {filteredSections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg p-6 shadow-sm border"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{section.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800">{section.title}</h3>
                    <p className="text-sm text-gray-500">
                      {section.completedLessons} of {section.totalLessons}{" "}
                      lessons completed
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">
                    {section.progress}%
                  </div>
                  {section.certificate && (
                    <div className="flex items-center text-green-600 text-sm">
                      <span className="mr-1">🏆</span>
                      {t.certificateEarned}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${getSectionColor(
                    section.color
                  )}`}
                  style={{ width: `${section.progress}%` }}
                ></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">⏱️</span>
                  {section.timeSpent} minutes spent
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📖</span>
                  {t.lastLesson}: {section.lastLesson}
                </div>
                <div className="flex items-center">
                  {section.nextLesson ? (
                    <a
                      href={`/digital-skills-learning`}
                      className="text-blue-600 hover:text-blue-800 text-decoration-none flex items-center"
                    >
                      <span className="mr-2">▶️</span>
                      {t.nextLesson}: {section.nextLesson}
                    </a>
                  ) : (
                    <span className="text-green-600 flex items-center">
                      <span className="mr-2">✅</span>
                      {t.sectionComplete}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <button
            onClick={() => setShowAchievements(!showAchievements)}
            className="w-full p-4 text-left flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="text-xl mr-3">🏆</span>
              <span className="font-medium text-gray-800">
                {t.achievementsBadges}
              </span>
            </div>
            <span className="text-gray-400">
              {showAchievements ? "−" : "+"}
            </span>
          </button>

          {showAchievements && (
            <div className="px-4 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`rounded-lg p-4 border-2 ${
                      achievement.earned
                        ? "bg-yellow-50 border-yellow-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span
                          className={`text-2xl mr-3 ${
                            achievement.earned ? "" : "grayscale opacity-50"
                          }`}
                        >
                          {achievement.icon}
                        </span>
                        <div>
                          <h4
                            className={`font-medium ${
                              achievement.earned
                                ? "text-yellow-800"
                                : "text-gray-600"
                            }`}
                          >
                            {achievement.title}
                          </h4>
                          <p
                            className={`text-sm ${
                              achievement.earned
                                ? "text-yellow-700"
                                : "text-gray-500"
                            }`}
                          >
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      {achievement.earned ? (
                        <div className="text-right">
                          <div className="text-green-600 text-lg">✅</div>
                          <div className="text-xs text-yellow-700">
                            {achievement.date}
                          </div>
                        </div>
                      ) : (
                        achievement.progress && (
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-600">
                              {achievement.progress}%
                            </div>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${achievement.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Certificates Section */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <button
            onClick={() => setShowCertificates(!showCertificates)}
            className="w-full p-4 text-left flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="text-xl mr-3">📜</span>
              <span className="font-medium text-gray-800">
                {t.yourCertificates}
              </span>
            </div>
            <span className="text-gray-400">
              {showCertificates ? "−" : "+"}
            </span>
          </button>

          {showCertificates && (
            <div className="px-4 pb-4">
              {certificates.length > 0 ? (
                <div className="space-y-3">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-3xl mr-3">{cert.icon}</span>
                          <div>
                            <h4 className="font-bold text-yellow-800">
                              {cert.title}
                            </h4>
                            <p className="text-sm text-yellow-700">
                              {cert.section}
                            </p>
                            <p className="text-xs text-yellow-600">
                              Earned {cert.earnedDate}
                            </p>
                          </div>
                        </div>
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 text-sm font-medium">
                          {t.download}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">📜</div>
                  <p className="text-gray-500">{t.noCertificates}</p>
                  <p className="text-sm text-gray-400">{t.completeSections}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Motivational Section */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-6 text-white mb-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="text-xl font-bold mb-2">{t.makingProgress}</h3>
            <p className="text-green-100 mb-4">
              {progressData.overallProgress >= 80
                ? t.motivationalMessages.high
                : progressData.overallProgress >= 50
                ? t.motivationalMessages.medium
                : t.motivationalMessages.low}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/digital-skills-learning"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 text-decoration-none"
              >
                {t.continueButton}
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                {t.shareProgress}
              </button>
            </div>
          </div>
        </div>

        {/* Next Recommended Lessons */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-xl mr-2">🎯</span>
            {t.recommendedSteps}
          </h3>
          <div className="space-y-3">
            {progressData.sections
              .filter((section) => section.nextLesson)
              .slice(0, 3)
              .map((section) => (
                <div
                  key={section.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{section.icon}</span>
                    <div>
                      <p className="font-medium text-gray-800">
                        {section.nextLesson}
                      </p>
                      <p className="text-sm text-gray-500">{section.title}</p>
                    </div>
                  </div>
                  <a
                    href="/digital-skills-learning"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-decoration-none text-sm font-medium"
                  >
                    {t.start}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <a
            href="/digital-skills-learning"
            className="flex flex-col items-center py-2 px-3 rounded-lg text-gray-600 text-decoration-none"
          >
            <span className="text-xl mb-1">🏠</span>
            <span className="text-xs">{t.home}</span>
          </a>
          <button className="flex flex-col items-center py-2 px-3 rounded-lg bg-blue-100 text-blue-600">
            <span className="text-xl mb-1">📊</span>
            <span className="text-xs">{t.progress}</span>
          </button>
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