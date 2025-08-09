export interface Event {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
}
export const upcomingEvents: Event[] = [
  {
    id: "upc-1",
    title: "Blocktalk",
    date: "September 1st, 2025",
    shortDescription:
      "Dive deep into the fundamentals of blockchain technology.",
    fullDescription:
      "Join us for Blocktalk, an insightful session designed to demystify blockchain. Whether you're a beginner or have some prior knowledge, this workshop will cover core concepts, real-world applications, and the future trends in decentralized technologies. Get ready for interactive discussions and practical insights!",
    images: ["/timeline/blocktalk.png"],
  },
  {
    id: "upc-2",
    title: "StockMarket",
    date: "September 2nd, 3rd, 4th, 2025",
    shortDescription: "A live story based high stakes crypto trading event",
    fullDescription:
      "Dive into the thrilling world of live crypto trading where top traders battle in real time for millions. Each decision—buy, sell, or hold—can trigger massive gains or devastating losses. With market shocks, insider leaks, and rapid price swings, tension runs high as fortunes hang by a thread. Watch strategy, nerve, and technology collide in this heart-pounding race for ultimate crypto supremacy!",
    images: ["/events/upcomming2.jpeg"],
  },
  {
    id: "upc-3",
    title: "Neural DAO",
    date: "September 18th, 19th, 2025",
    shortDescription:
      "Explore the intersection of AI and Decentralized Autonomous Organizations.",
    fullDescription:
      "Neural DAO will delve into the exciting synergy between Artificial Intelligence and Decentralized Autonomous Organizations. Learn how AI can enhance DAO governance, efficiency, and decision-making, and how DAOs can foster collaborative AI development. This event will feature expert talks, case studies, and brainstorming sessions.",
    images: ["/timeline/neuraldao.png"],
  },
  {
    id: "upc-4",
    title: "Crypto Trading Seminar",
    date: "October 21st, 2025",
    shortDescription:
      "Master the basics of cryptocurrency trading and market analysis.",
    fullDescription:
      "This seminar provides a comprehensive introduction to cryptocurrency trading. Learn about market dynamics, technical analysis, risk management strategies, and common trading platforms. Ideal for those looking to enter the crypto space with a solid understanding of its financial aspects.",
    images: ["/events/upcomming1.jpg"],
  },
  {
    id: "upc-5",
    title: "Defy'26",
    date: "January 8th, 9th, 10th, 2026",
    shortDescription: "Our annual hackathon and innovation challenge.",
    fullDescription:
      "Defy'26 is our signature annual hackathon, bringing together the brightest minds to build innovative solutions over three intense days. Collaborate, create, and compete for exciting prizes while tackling real-world problems. This event is a launchpad for groundbreaking projects and a hub for networking.",
    images: ["/events/defy26.jpg"],
  },
  {
    id: "upc-6",
    title: "Solidity 101",
    date: "February 2nd, 2026",
    shortDescription: "Kickstart your Web3 journey with Solidity fundamentals.",
    fullDescription:
      "Solidity 101 is an introductory workshop to smart contract development on the Ethereum blockchain. Learn the basics of Solidity programming, contract deployment, and interaction. This hands-on session is perfect for aspiring blockchain developers looking to build decentralized applications.",
    images: ["/events/upcomming3.jpeg"],
  },
];
