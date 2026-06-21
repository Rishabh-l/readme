export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "DQN Agent for Pokémon Red",
    description:
      "Built an end-to-end Deep Q-Network agent capable of autonomously playing Pokémon Red from raw game frames. Independently engineered reward shaping and optimization logic, achieving performance on par with Peter Whidden's well-known benchmark implementation.",
    tags: ["Python", "Deep Q-Network", "PyTorch", "Reinforcement Learning"],
    githubUrl: "https://github.com/Rishabh-l",
    featured: true,
  },
  {
    id: "project-2",
    title: "Adaptive Tic-Tac-Toe Engine",
    description:
      "Developed a Tic-Tac-Toe game with a novel dynamic strategy engine that changes its winning logic pattern daily. Implemented provably optimal deterministic move sequences ensuring guaranteed wins under specific game-state conditions.",
    tags: ["C++", "Game Theory", "Algorithm Design", "Decision Trees"],
    githubUrl: "https://github.com/Rishabh-l",
    featured: true,
  },
];
