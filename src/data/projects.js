const projects = [
  {
    id: 1,
    name: 'Instagram Clone Backend',
    cat: 'Backend',
    desc:
      'A production-grade REST API replicating core Instagram functionality. Designed, tested, and documented entirely in Postman before frontend integration.',
    features: [
      'User registration & login with JWT',
      'Authentication & authorization middleware',
      'Upload & manage posts (images)',
      'Follow / unfollow system',
      'Protected routes & session handling',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Postman'],
    emoji: '📸',
    color: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
    label: 'Backend API',
    github: 'https://github.com/Mrunal-Raundale/Day14-insta-clone',
  },
  {
    id: 2,
    name: 'Reels Replica',
    cat: 'Frontend',
    desc:
      'A pixel-perfect Instagram Reels clone built with vanilla JavaScript DOM manipulation. Features a vertical full-screen video feed with buttery-smooth scroll snapping and custom controls.',
    features: [
      'Smooth scroll-snap animation (JS DOM)',
      'Full-screen vertical feed layout',
      'Like, comment & share UI',
      'Auto-play on scroll into view',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'JS DOM'],
    emoji: '🎬',
    color: 'linear-gradient(135deg, #0f1c2e 0%, #1a2d45 60%, #2e7cf6 100%)',
    label: 'Frontend',
    github: 'https://mrunal-raundale.github.io/Reels-Replicaaa/',
  },
  {
    id: 3,
    name: 'Dribbble Clone',
    cat: 'Frontend',
    desc:
      'An exact UI replica of the Dribbble design showcase platform, built purely with HTML and CSS, no frameworks. Every section meticulously matched to the original.',
    features: [
      'Pixel-precise Dribbble UI',
      'Responsive grid layout',
      'Hover animations & transitions',
      'Navigation & search bar',
      'Zero frameworks pure HTML/CSS',
    ],
    tags: ['HTML', 'CSS'],
    emoji: '🏀',
    color: 'linear-gradient(135deg, #ea4c89 0%, #c32361 100%)',
    label: 'UI Clone',
    github: 'https://mrunal-raundale.github.io/Dribbble-Project/',
  },
];

export default projects;
