// utils/preloadImages.js
export const teamData = {
  Aleesha: {
    jobPosition: "Sponsorship Coordinator",
    linkedIn: "https://www.linkedin.com/in/aleesha-katary/",
  },
  Felix: {
    jobPosition: "Finance & Videography",
    linkedIn: "https://www.linkedin.com/in/felix-yan-845b632a5/",
  },
  Anushka: {
    jobPosition: "R&D Executive",
    linkedIn: "https://www.linkedin.com/in/anushka-yadav-2aaa90266/",
  },
  Demir: {
    jobPosition: "Director",
    linkedIn: "https://www.linkedin.com/in/demireren/",
  },
  Elly: {
    jobPosition: "Logistics Executive",
    linkedIn: "https://www.linkedin.com/in/elly-hayakawa-504b3728b/",
  },
  Gateek: {
    jobPosition: "Software Developer",
    linkedIn: "https://www.linkedin.com/in/gateek-chandak/",
  },
  Gurman: {
    jobPosition: "UI/UX Designer",
    linkedIn: "https://www.linkedin.com/in/gurmans/",
  },
  Ian: {
    jobPosition: "Business Development Lead",
    linkedIn: "https://www.linkedin.com/in/ianchan123/",
  },
  Ivy: {
    jobPosition: "Operations Lead",
    linkedIn: "https://www.linkedin.com/in/ivymxu/",
  },
  Jai: {
    jobPosition: "Engineering Specialist",
    linkedIn: "https://www.linkedin.com/in/jai-palan/",
  },
  Jayleen: {
    jobPosition: "Outreach Coordinator",
    linkedIn: "https://www.linkedin.com/in/jayleenwu/",
  },
  Jina: {
    jobPosition: "Full Stack Developer",
    linkedIn: "https://www.linkedin.com/in/jinayang15/",
  },
  Jovan: {
    jobPosition: "Engineering Specialist",
    linkedIn: "https://www.linkedin.com/in/jovand/",
  },
  Lauren: {
    jobPosition: "Director",
    linkedIn: "https://www.linkedin.com/in/lauren-jung2/",
  },
  Maria: {
    jobPosition: "Content Lead",
    linkedIn: "https://www.linkedin.com/in/msacenas/",
  },
  Mindy: {
    jobPosition: "Social Media Manager",
    linkedIn: "https://www.linkedin.com/in/mindy-cao/",
  },
  Neiloy: {
    jobPosition: "Director",
    linkedIn: "https://www.linkedin.com/in/neiloyc/",
  },
  Prakash: {
    jobPosition: "R&D Executive",
    linkedIn: "https://www.linkedin.com/in/prakashkumar6/",
  },
  Pratham: {
    jobPosition: "Software Developer",
    linkedIn: "https://www.linkedin.com/in/prathamshah11/",
  },
  Tejas: {
    jobPosition: "Software Lead",
    linkedIn: "https://www.linkedin.com/in/tejas-thind/",
  },
  Kaelyn: {
    jobPosition: "Technical Writer",
    linkedIn: "https://www.linkedin.com/in/kaelyn-pereira/",
  },
  Leslie: {
    jobPosition: "Graphic Designer",
    linkedIn: "https://www.linkedin.com/in/leslie-lee-58184a220/",
  },
  Abeer: {
    jobPosition: "Software Developer",
    linkedIn: "https://www.linkedin.com/in/abeerdas/",
  },
};

export const preloadImages = () => {
  Object.keys(teamData).forEach((name) => {
    const img = new Image();
    img.src = `/team-headshots/${name}.webp`; // Preload headshot images
  });
};
