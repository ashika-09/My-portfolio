const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/ashika-09',
  title: 'AV.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ashika Verma',
  role: 'Wev Developer',
  description:
    'I’m a web developer passionate about building clean, responsive, and impactful websites.I thrive on solving complex problems and bringing innovative ideas to life on the web.',
  resume: 'https://drive.google.com/file/d/1OqhjdAfxMfe3ks-KOoJI-HSOixQsXDs2/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ashika-verma-0193b7345/',
    github: 'https://github.com/ashika-09',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'NoteVerse',
    description:
      'NoteVerse is a platform I built for my college juniors to easily upload and share notes, materials and assignment across the branch.',
    stack: [' React.js', 'Tailwind CSS', 'Node.js', 'Express.js','MongoDB','Cloudinary','Redux','JWT'],
    sourceCode: 'https://github.com/ashika-09/NoteVerse',
    livePreview: 'https://nita-x.vercel.app/',
  },
  {
    name: 'Turbo Finger',
    description:
      'Turbo Finger is a fun and interactive typing practice tool to help users improve speed and accuracy. It provides quick tests, progress tracking, and an engaging way to level up your typing skills.',
    stack: ['Firebase', 'CSS', 'React'],
    sourceCode: 'https://github.com/ashika-09/turbo-finger',
    livePreview: 'https://turbo-finger.netlify.app/',
  },
  {
    name: 'Task Manager',
    description:
      'A simple Task Manager web app to help users create, manage, and track daily tasks efficiently. Built with a focus on productivity and ease of use.',
    stack: [' React.js', 'Tailwind CSS', 'Node.js', 'Express.js','MongoDB'],
    sourceCode: 'https://github.com/ashika-09/task-manager',
    livePreview: 'https://example.com',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Redux',
  'Node.js',
  'Mongodb',
  'Git',
  'JWT',
  'Express.js',
  'Bootstrap',
  'REST API',
  'Firebase',
  'MySQL',
  'Prisma',
  'PostgreSQL',
  'SQL',
  'C++',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ashikaverma5736@mail.com',
}

export { header, about, projects, skills, contact }
