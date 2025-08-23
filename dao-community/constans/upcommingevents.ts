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
      "A 24-hour hackathon focused on AI and Blockchain, hosted by The DAO Community at VIT, Chennai.",
    fullDescription:
      `NeuralDAO is a 24-hour, high-intensity hackathon focused on the intersection of Artificial Intelligence and Blockchain. Hosted by The DAO Community, it is designed to bring together student developers, innovators, and tech enthusiasts to create cutting-edge solutions. The event aims to foster innovation and showcase the next generation of tech talent.

Dates: September 18th - 19th, 2025
Venue: VIT, Chennai
Organizer: The DAO Community, a prominent Web3 society in Chennai

Hackathon Structure and Tracks
The event follows a structured, 24-hour format to maximize productivity and collaboration.

- 24-Hour Build Sprint: Participants will form teams to conceptualize, develop, and prototype their ideas in a fast-paced environment.
- Mentorship & Resources: Teams will have access to industry mentors and technical support to help refine their projects and overcome challenges.
- Demo & Judging: A panel of experts, including product leaders and pioneers in AI and blockchain, will evaluate the final projects.

Participants can build projects under the following tracks:
- Artificial Intelligence
- Blockchain
- Open Innovation

Organizer's Track Record
The DAO Community has a proven history of organizing successful hackathons with significant engagement.

- Defy: This flagship event attracted over 800 project submissions and achieved a 78% conversion rate of attendees to long-term followers.
- Entropy: This event saw more than 1,500 team registrations, with 113 teams advancing to the final round.

Past events have been supported by sponsors such as Jio, Unstop, Quick Node, and QuillAudits.

Opportunities for Sponsors
NeuralDAO offers sponsors a unique platform to engage with emerging talent and showcase their technologies.

Key Benefits
- Talent Pipeline: Gain direct access to top student developers from VIT Chennai, with 70% actively seeking jobs and 30% open to opportunities.
- Early Access to Innovation: Discover and support innovative projects before they enter the market. Several past winners have gone on to become real-world startups.
- Product Validation: Demo APIs, SDKs, and platforms to over 500 engaged developers, gathering real-time feedback and driving adoption.
- Marketing Reach: Achieve high visibility across social media and developer platforms through teaser campaigns, live event coverage, and recaps.

Sponsorship Tiers
- Platinum Tier: ₹25,000+ (Includes premium brand exposure, the opportunity to have branded event tracks, and speaker slots.)
- Gold Tier: ₹17,000+ (Features prime logo placement, direct connection with talent, and product integration opportunities.)
- Silver Tier: ₹8,000+ (Offers brand exposure and inclusion in the event's marketing campaigns.)

Additional benefits can be negotiated.

Contact Information
For partnership inquiries, you can reach out to the organizers:
- Sanjana PS: +91 98403 71577
- Surya: +91 70101 47377
- Email: chennai.daocommunity@vit.ac.in`,
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
