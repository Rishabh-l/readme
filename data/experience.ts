export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "B.Tech in Mathematics & Computing",
    company: "Indian Institute of Technology Delhi",
    period: "2025 – 2029",
    description:
      "Pursuing a Bachelor of Technology in Mathematics and Computing (MnC) with a current CGPA of 8.12 / 10.",
    highlights: [
      "Coursework in algorithms, machine learning, and mathematical modeling",
      "Active in coding communities and research-oriented projects",
      "Open to internships and research opportunities",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "JEE Advanced 2025",
    description: "All India Rank 925 — among top 0.1% of ~200,000 candidates",
  },
  {
    title: "JEE Mains 2025",
    description: "All India Rank 1855",
  },
  {
    title: "INMO 2024",
    description: "Appeared for the Indian National Mathematical Olympiad 2024",
  },
  {
    title: "RMO",
    description: "Qualified in Class 11; scored 54/102 in Class 12 (2024)",
  },
  {
    title: "IOQM",
    description: "Qualified in both Class 11 and Class 12",
  },
  {
    title: "NSEJS",
    description: "National Standard Examination qualifier (Junior Science)",
  },
  {
    title: "NSEC",
    description: "National Standard Examination qualifier (Chemistry)",
  },
  {
    title: "NSEA",
    description: "Qualified in both Class 11 and Class 12 (Astronomy)",
  },
];
