const contentMap = [
  {
    id: 'Projects',
    title: 'Projects',
    content: `ShieldOps academic project CI/CD cybersecurity. PSX_GRAPHICS PlayStation 1 game development Psy-Q. ThreadTalk Reddit-inspired discussion platform.`,
  },
  {
    id: 'About',
    title: 'About Me',
    content: `Abdessalam Zarrouk tinkering with computers Dell Optiplex HP Compaq DC7600 Windows XP online gaming Counter-Strike 1.6 Minecraft. Dell Latitude E5450 programming Python C C++ Java web development. Hobbies BMW M3 E92 M3 GTR Assetto Corsa sim racing making beats Hip Hop 90s House.`,
  },
  {
    id: 'Skills',
    title: 'Skills',
    content: `Programming Languages: JavaScript React Node.js Python Java C C++ C# SQL. Web Development: Redux Tailwind CSS Styled-Components HTML5 CSS3 REST APIs. Database & Backend: Firebase Firestore Auth PostgreSQL MySQL MongoDB Express.js. Tools & Platforms: Git GitHub Docker Jenkins VS Code. Game Development: Psy-Q SDK ARMIPS mkpsxiso. Soft Skills: Problem Solving Team Collaboration.`,
  },
  {
    id: 'Contact',
    title: 'Contact Info',
    content: `Get In Touch email abdessalam.zarrouk@email.com LinkedIn GitHub`,
  },
];

export const searchContent = (term) => {
  if (!term) return [];

  const lowerCaseTerm = term.toLowerCase();
  const results = [];

  contentMap.forEach(section => {
    if (section.content.toLowerCase().includes(lowerCaseTerm)) {
      results.push({
        sectionId: section.id,
        sectionTitle: section.title,
      });
    }
  });

  return results;
};