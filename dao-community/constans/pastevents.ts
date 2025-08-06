export interface Event {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
}
export const pastEvents: Event[] = [
  {
    id: "1",
    title: "Solidity 101",
    date: "July 10, 2024",
    shortDescription:
      "An introductory session on the fundamentals of the Solidity programming language.",
    fullDescription:
      "The fundamentals of the Solidity programming language were briefly explained while covering various subtopics. An interactive environment was established to address any questions regarding the principles and processes of Solidity. Toward the end of the live session, a smart contract was created for official implementation in the DAO Community.",
    images: ["/events/Solidity101.png", "/solidity-101-1.jpg", "/solidity-101-2.jpg"],
  },
  {
    id: "2",
    title: "VOYAGE’24 Entropy Hackathon",
    date: "August 12, 2024",
    shortDescription:
      "A 24-hour hackathon focused on creating future-focused solutions for pressing global challenges.",
    fullDescription:
      "Entropy is a 24-hour hackathon organized by the DAO Community in collaboration with IEEE, Team Movis, C.S.E.D, and FYI. The event is designed to address some of the world’s most pressing challenges through future-focused solutions. Entropy 2024 aims to foster innovative and impactful ideas by bringing together creative minds from academic institutions and industry professionals. The hackathon focuses on tackling critical environmental challenges, encouraging participants to develop solutions that contribute to a more sustainable future.",
    images: [
      "/events/Entropy.png",
      "/entropy-hackathon-1.jpg",
      "/entropy-hackathon-2.jpg",
    ],
  },
  {
    id: "3",
    title: "Onchained",
    date: "September 11, 2024",
    shortDescription:
      "A hands-on workshop for NFT enthusiasts on minting and creating digital assets on a testnet.",
    fullDescription:
      "The event Onchained, hosted by Mr. Jheyanth CS, was a hands-on workshop for NFT enthusiasts and creatives interested in the intersection of digital art and blockchain technology. Participants explored the process of minting NFTs, gaining practical experience in creating and hosting digital assets on a testnet. The session covered the fundamentals of blockchain and the role of NFTs as unique digital assets, providing insights into both the creative and technical aspects of the minting process.",
    images: ["/events/Onchained.png", "/onchained-1.jpg", "/onchained-2.jpg"],
  },
  {
    id: "4",
    title: "Work in WEB3 Earn in USD",
    date: "October 4, 2024",
    shortDescription:
      "An interactive AMA session with Web3 professionals about careers and internships in the industry.",
    fullDescription:
      "An engaging Ask Me Anything (AMA) session featuring professionals working in the Web3 space. The session provided insights into securing high-paying internships in Web3, along with a deeper understanding of the industry’s dynamic and innovative landscape. Attendees gained firsthand knowledge of the unique work culture within blockchain organizations, exploring the opportunities and challenges of this rapidly evolving field.",
    images: ["/events/workinweb3earninusd.png", "/work-in-web3-1.jpg", "/work-in-web3-2.jpg"],
  },
  {
    id: "5",
    title: "Aptos Workshop Supermove",
    date: "November 8, 2024",
    shortDescription:
      "A hands-on workshop for building dApps on the Aptos blockchain in collaboration with Spheron.",
    fullDescription:
      "A workshop on blockchain and dApp development organized by VIT Chennai and The DAO Community, in collaboration with Spheron. The session provided participants with hands-on experience in building on Aptos and exploring decentralized technologies. The workshop aimed to equip attendees with practical skills and knowledge to navigate the evolving landscape of Web3 development.",
    images: ["/events/AptosWorkshopSupermove.png", "/supermove-1.jpg", "/supermove-2.jpg"],
  },
  {
    id: "6",
    title: "I Love Hackathon: Chennai Edition",
    date: "December 16, 2024",
    shortDescription:
      "A collaborative Web3 hackathon with Hackclub featuring a prize pool of ₹80,000+.",
    fullDescription:
      "Hackclub, in collaboration with The DAO Community, organized I ❤ Hackathon: Chennai Edition, a dynamic hackathon designed to bring together developers and innovators in the Web3 space. The event took place on December 16–17, 2024, at Kasturba Hall, VIT Chennai. With a prize pool of ₹80,000+, participants competed for top rewards while enjoying meals, WiFi, and 24x7 tech support. All participants also received exclusive event swags.",
    images: ["/events/ilovehackathon.png", "/ilh-1.jpg", "/ilh-2.jpg"],
  },
  {
    id: "7",
    title: "Defy’25",
    date: "January 9, 2025",
    shortDescription:
      "A flagship Web3 hackathon exploring the intersection of blockchain technology and business innovation.",
    fullDescription:
      "The Business Innovations Club, in collaboration with the DAO Community VITC, organized DeFy’25, the flagship Web3.0 hackathon aimed at pushing the boundaries of decentralized technology. The event challenged participants to develop innovative solutions and contribute to the future of Web3. DeFy’25 was held on January 10–11, 2025, at MG Auditorium, VIT Chennai, bringing together developers, entrepreneurs, and innovators.",
    images: ["/events/defy25.png", "/defy25-1.jpg", "/defy25-2.jpg"],
  },
  {
    id: "8",
    title: "Valorant Clash",
    date: "February 12, 2025",
    shortDescription:
      "The grand finale of a major Valorant eSports tournament hosted by the DAO Community and Hackclub.",
    fullDescription:
      "The Valorant Clash Finals at VIT Chennai marked an adrenaline-pumping showdown, hosted by the DAO Community and Hackclub. The competition began with intense online preliminary rounds where 60 teams battled for a spot in the finals. After a fierce contest, the top 16 teams advanced to the Grand Finale at the MG Auditorium for a thrilling conclusion.",
    images: ["/events/valorantclash.png", "/valorant-clash-1.jpg", "/valorant-clash-2.jpg"],
  },
];
