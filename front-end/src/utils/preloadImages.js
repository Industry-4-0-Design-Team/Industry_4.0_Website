// utils/preloadImages.js
export const teamData = {
  "Aleesha": { jobPosition: "Sponsorship Coordinator" },
  "Anushka": { jobPosition: "R&D Executive" },
  "Demir": { jobPosition: "Director" },
  "Elly": { jobPosition: "Logistics Executive" },
  "Felix": { jobPosition: "Finance & Videography" },
  "Gateek": { jobPosition: "Software Developer" },
  "Gurman": { jobPosition: "UI/UX Designer" },
  "Ian": { jobPosition: "Lead of Business Development" },
  "Ivy": { jobPosition: "Lead Operations" },
  "Jai": { jobPosition: "Engineering Specialist" },
  "Jayleen": { jobPosition: "Outreach Coordinator" },
  "Jina": { jobPosition: "Full Stack Developer" },
  "Jovan": { jobPosition: "Engineering Specialist" },
  "Lauren": { jobPosition: "Director" },
  "Maria": { jobPosition: "Content Lead" },
  "Mindy": { jobPosition: "Social Media Manager" },
  "Neiloy": { jobPosition: "Director" },
  "Prakash": { jobPosition: "R&D Executive" },
  "Pratham": { jobPosition: "Software Developer" },
  "Tejas": { jobPosition: "Lead Software" },
  "Kaelyn": { jobPosition: "Technical Writer" },
  "Leslie": { jobPosition: "Graphic Designer" },
  "Abeer": { jobPosition: "Software Developer" },
};

export const preloadImages = () => {
  Object.keys(teamData).forEach((name) => {
     const img = new Image();
     img.src = `/team-headshots/${name}.webp`;  // Preload headshot images
  });
};
