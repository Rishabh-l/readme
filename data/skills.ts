export interface Skill {
  name: string;
  category: "Languages" | "Domains" | "Frameworks" | "Tools";
}

export const skills: Skill[] = [
  { name: "C++", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Reinforcement Learning", category: "Domains" },
  { name: "Game AI", category: "Domains" },
  { name: "Algorithm Design", category: "Domains" },
  { name: "Game Theory", category: "Domains" },
  { name: "PyTorch", category: "Frameworks" },
  { name: "Deep Q-Network", category: "Frameworks" },
  { name: "Git", category: "Tools" },
  { name: "Linux", category: "Tools" },
];

export const skillCategories = ["Languages", "Domains", "Frameworks", "Tools"] as const;
