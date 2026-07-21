export type Program = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  gradeRange: string;
  highlights: string[];
  outcomes: string[];
  areaServed: string;
  provider: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const schoolName = "Wisdom Wealth International School";
export const schoolShortName = "WWIS";
export const schoolUrl = "https://worldnews2025.vercel.app";
export const bookingUrl = "/find-us";
export const feeRequestUrl = "/find-us#admission-form";

export const contactInfo = {
  phone: "+91 81246 48888",
  phoneHref: "+918124648888",
  email: "rootadmin@wwistrichy.com",
  hours: "Monday-Saturday, 9 AM-5:30 PM",
  hoursMachine: "Mo-Sa 09:00-17:30",
  address: "11th Sector, 18th Cross, Morais City, Near Airport, Trichy 620007",
  locality: "Tiruchirappalli",
  region: "Tamil Nadu",
  postalCode: "620007",
  country: "IN",
  mapLabel: "Morais City, near airport, Trichy"
};

export const brand = {
  promise: "Schools focus on class. WWIS focuses on the individual child.",
  tone: "Premium international, modern, parent-friendly, trustworthy, and welcoming.",
  colors: {
    primary: "#163A70", // Deep Royal Blue
    navy: "#0B2347",    // Navy Blue
    accentPink: "#F2367A", // Bright Pink Accent
    background: "#FFFFFF",
    sectionBg: "#F5F9FF",
    softAccent: "#FFF5FA",
    card: "#FFFFFF",
    text: "#0B2347"
  }
};

export const programs: Program[] = [
  {
    id: "iplay",
    name: "iPlay",
    shortName: "Early Years",
    description:
      "Pre-KG to Grade 2 learning journey built around play, social confidence, early communication, three languages, and foundational brain development.",
    gradeRange: "Pre-KG to Grade 2",
    highlights: ["24 skills", "3 languages", "Brain development focus", "Learning through play"],
    outcomes: ["Social and emotional development", "Early communication skills", "Confidence in routines"],
    areaServed: "Tiruchirappalli, Tamil Nadu, India",
    provider: schoolName
  },
  {
    id: "idiscover",
    name: "iDiscover",
    shortName: "Middle Years",
    description:
      "Grade 3 to Grade 7 program that uses projects, professional skills, creativity, and guided exploration to help students discover interests and strengths.",
    gradeRange: "Grade 3 to Grade 7",
    highlights: ["24 projects", "8 professional skills", "Passion discovery", "Curiosity-led learning"],
    outcomes: ["Problem-solving", "Exploration and creativity", "Presentation confidence"],
    areaServed: "Tiruchirappalli, Tamil Nadu, India",
    provider: schoolName
  },
  {
    id: "ilead",
    name: "iLead",
    shortName: "Senior Years",
    description:
      "Grade 8 to Grade 12 pathway that builds leadership, collaboration, innovation, career awareness, and future readiness through programs and internships.",
    gradeRange: "Grade 8 to Grade 12",
    highlights: ["3 career programs", "5 internships", "Leadership practice", "Future readiness"],
    outcomes: ["Collaboration", "Innovation", "Career pathway clarity"],
    areaServed: "Tiruchirappalli, Tamil Nadu, India",
    provider: schoolName
  },
  {
    id: "cambridge-cie",
    name: "Cambridge CIE Curriculum",
    shortName: "International Curriculum",
    description:
      "Cambridge-aligned learning journey with international standards, critical thinking, communication skills, and global citizenship.",
    gradeRange: "Pre-KG to higher grades",
    highlights: ["International standards", "Critical thinking", "Communication skills", "Global citizenship"],
    outcomes: ["Strong concepts", "Independent learning", "Academic progression"],
    areaServed: "Tiruchirappalli, Tamil Nadu, India",
    provider: schoolName
  },
  {
    id: "individual-learning-plans",
    name: "Individual Learning Plans",
    shortName: "Personalized Support",
    description:
      "Every student receives individual attention through a learning plan that supports strengths, gaps, confidence, and steady growth.",
    gradeRange: "Pre-KG to higher grades",
    highlights: ["Individual child focus", "Progress tracking", "Parent communication", "Personal growth"],
    outcomes: ["Confidence", "Clarity on next steps", "Better learner support"],
    areaServed: "Tiruchirappalli, Tamil Nadu, India",
    provider: schoolName
  }
];

export const languages = ["English", "Tamil", "Hindi"];

export const admissionsSteps = [
  "Inquiry",
  "Campus Visit",
  "Parent Counseling",
  "Student Assessment, if applicable",
  "Document Submission",
  "Fee Payment",
  "Enrollment Confirmation",
  "Orientation"
];

export const facilities = [
  "Smart classrooms",
  "Science labs",
  "Computer labs",
  "Library",
  "Sports facilities",
  "Activity rooms",
  "Transport services",
  "Medical room",
  "Auditorium",
  "Play areas",
  "Safety and security systems",
  "CCTV monitoring"
];

export const sportsStrengths = [
  "Structured coaching",
  "Inter-school competitions",
  "Fitness and discipline",
  "Teamwork and leadership",
  "Student development opportunities"
];

export const clubs = [
  "Robotics",
  "Coding",
  "Music",
  "Dance",
  "Art",
  "Chess",
  "Debate",
  "Public Speaking",
  "Entrepreneurship",
  "Environmental Club",
  "Community Service"
];

export const parentResources = [
  "Academic calendar",
  "Circulars and announcements",
  "Parent handbook",
  "Uniform information",
  "Transport details",
  "Downloadable forms",
  "Parent login/app links",
  "Exam schedules"
];

export const galleryCategories = [
  "Campus",
  "Classrooms",
  "Events",
  "Sports activities",
  "Laboratories",
  "Student achievements",
  "Faculty interactions"
];

export const testimonials = [
  {
    quote:
      "The individual attention and parent communication helped us understand our child's strengths with much more clarity.",
    name: "WWIS Parent"
  },
  {
    quote:
      "Project-based learning and public speaking opportunities gave our child visible confidence.",
    name: "WWIS Parent"
  }
];

export const faqs: Faq[] = [
  {
    question: "Which grades are open for admissions?",
    answer:
      "Admissions are open from Pre-KG to higher grades based on seat availability. Grade-specific age criteria should be confirmed with the admissions office."
  },
  {
    question: "What curriculum does WWIS follow?",
    answer:
      "WWIS follows the Cambridge CIE curriculum with a learning journey focused on international standards, critical thinking, communication skills, and global citizenship."
  },
  {
    question: "How does the admissions process work?",
    answer:
      "The process is Inquiry, Campus Visit, Parent Counseling, Student Assessment if applicable, Document Submission, Fee Payment, Enrollment Confirmation, and Orientation."
  },
  {
    question: "Are fees published on the website?",
    answer:
      "Detailed fees are not published publicly. Parents can request the fee structure through the admissions form or contact rootadmin@wwistrichy.com."
  },
  {
    question: "What languages are taught?",
    answer:
      "Languages include English, Tamil, and Hindi. Additional language options may be added according to school policy."
  },
  {
    question: "Does WWIS offer transport?",
    answer:
      "Transport services are available. Parents should contact admissions for route availability and transport details."
  }
];

export const chatbotQuickPrompts = [
  "How do admissions work?",
  "What is Cambridge CIE at WWIS?",
  "Explain iPlay, iDiscover, and iLead",
  "Tell me about Individual Learning Plans",
  "What does a typical day at WWIS look like?",
  "What facilities does WWIS offer?",
  "What achievements are celebrated at WWIS?",
  "What careers are available at WWIS?",
  "Contact admissions"
];

export function programJsonPayload() {
  return programs.map((program) => ({
    id: program.id,
    name: program.name,
    description: program.description,
    provider: program.provider,
    gradeRange: program.gradeRange,
    areaServed: program.areaServed,
    highlights: program.highlights,
    outcomes: program.outcomes
  }));
}

export function buildAgentMarkdownSummary(pathname: string): string {
  const programLines = programs
    .map((program) => `- ${program.name} (${program.gradeRange}): ${program.description}`)
    .join("\n");
  return [
    `# ${schoolName} (${schoolShortName})`,
    "",
    brand.promise,
    "",
    "## Programs",
    programLines,
    "",
    "## Admissions",
    `Process: ${admissionsSteps.join(" -> ")}`,
    "Fees: Detailed fee structure is shared through the admissions team after request.",
    "",
    "## Contact",
    `- Phone: ${contactInfo.phone}`,
    `- Email: ${contactInfo.email}`,
    `- Hours: ${contactInfo.hours}`,
    `- Address: ${contactInfo.address}`,
    "",
    "## Primary CTAs",
    `- Book a campus visit: ${schoolUrl}${bookingUrl}`,
    `- Request fee structure: ${schoolUrl}${feeRequestUrl}`,
    "",
    `Requested path: ${pathname}`
  ].join("\n");
}
