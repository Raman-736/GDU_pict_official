// All page copy lives here so the club can update text without touching
// components. Source: GDU Brochure 2026 + the game's content.md.

// `to` starting with "/#" scrolls to a section on the home page.
export const NAV_LINKS = [
  { id: "about", label: "About", to: "/#about" },
  { id: "arcade", label: "Arcade", to: "/#arcade" },
  { id: "events", label: "Events", to: "/#events" },
  { id: "achievements", label: "Wins", to: "/#achievements" },
  { id: "council", label: "Council", to: "/council" },
];

export const SOCIALS = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/gamedevutopia_pict" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/gamedevutopia/" },
  { id: "mail", label: "Email", href: "mailto:gamedevutopia@gmail.com" },
];

export const HERO = {
  kicker: "PICT's first game development club, est. 2020",
  sub: "Engineers, artists and designers who build, ship and compete with games. From first prototype to podium finish.",
  stats: [
    { value: "100+", label: "Games built" },
    { value: "300+", label: "Members" },
    { value: "12+", label: "Comp. awards" },
    { value: "03", label: "Glitched editions" },
  ],
};

// TODO: add the member's name, e.g. "Blender render by Firstname Lastname".
export const SHOWCASE = {
  title: "Lamborghini Veneno",
  credit: "Modelled, lit & rendered in Blender by a GDU member",
  heroVideo: "/media/hero-loop.mp4",
  heroPoster: "/media/hero-poster.jpg",
  fullVideo: "/media/showcase-full.mp4",
  fullPoster: "/media/showcase-poster.jpg",
};

export const TAPE_A = [
  "Unity", "Unreal Engine", "Godot", "Defold", "Love2D", "Pygame", "raylib", "MonoGame",
  "SDL", "OpenGL", "Bevy", "Blender", "Aseprite", "DaVinci Resolve", "C++", "C#", "Lua", "GDScript",
];

export const TAPE_B = ["Build", "Ship", "Compete", "Repeat"];

export const ABOUT = {
  statement:
    "Founded in 2020 by three students with zero game-dev experience. Today: a two-campus network that ships games, wins jams and learns straight from the industry.",
  intel: [
    {
      title: "Who we are",
      text: "GameDevUtopia (GDU) is a student-led game development community built from the ground up, not a chapter of any external organization. It began at PICT Pune and grew into a multi-institution network with an independent chapter at IIIT Kottayam.",
    },
    {
      title: "What we do",
      text: "Members from CS, IT, ENTC, ECE and AIDS spend their college years building, shipping and competing in game development, through workshops, weekly sessions, game jams, exhibitions, guest talks and peer mentorship.",
    },
  ],
  dossier: [
    { k: "Founded in 2020 by", v: "Mihir Ranade, Apurv Henkare, Prajwal Pawar" },
    { k: "Board of Directors", v: "Himanshu Pandey, Sai Tejashwin" },
    { k: "Lineage", v: "5 junior batches have led the club, each left it stronger" },
    { k: "Faculty & Coordinator", v: "Dr. Kavita Sultanpure (Faculty Mentor), Dr. Girish Potdar" },
    { k: "Partners", v: "Defold, GameDoora, Dimensions" },
    { k: "Network & Branches", v: "GDU PICT Pune · GDU IIIT Kottayam (est. 2021)" },
  ],
};

export const CLASSES = [
  {
    id: "programmer",
    name: "Developer",
    track: "Technology",
    color: "green",
    text: "Engines, frameworks and low-level graphics. We ship complete, playable games, not tutorials.",
    loadout: ["Unity", "Unreal", "Godot", "Defold", "Love2D", "Pygame", "raylib", "MonoGame", "SDL", "OpenGL"],
  },
  {
    id: "artist",
    name: "Designer",
    track: "Art & Design",
    color: "pink",
    text: "3D modelling and animation, pixel and digital art, and game UI that feels good to play.",
    loadout: ["Blender", "Animation", "Digital art", "Aseprite", "UI/UX", "DaVinci Resolve"],
  },
  {
    id: "creator",
    name: "Creator",
    track: "Web & Content",
    color: "blue",
    text: "The sites, trailers, socials and community work that put our games in front of players.",
    loadout: ["Web dev", "Content", "Community", "Social media", "Video"],
  },
];

export const GAME = {
  title: "GDU Island",
  pitch:
    "Our club as an island you can drive around. Built from scratch by members for PICT's Student Induction Program, take the car out, read the signboards, find the bowling alley.",
  specs: [
    { k: "Engine", v: "Three.js + TypeScript" },
    { k: "Physics", v: "cannon-es rigid bodies" },
    { k: "Foliage", v: "15,000 GPU-animated grass blades" },
    { k: "Target", v: "60 FPS on mobile browsers" },
  ],
  controls: [
    { keys: ["W", "A", "S", "D"], label: "Drive" },
    { keys: ["Space"], label: "Brake" },
    { keys: ["R"], label: "Reset" },
  ],
};

export const GLITCHED = {
  editions: "03",
  text: "GDU PICT's flagship annual festival. What began as a single-day online event is now a multi-day campus festival where students showcase their work, compete, collaborate and meet the people who make games for a living.",
  activities: ["Game Jams", "Art Jams", "Esports", "Grand Expo", "Speaker Series", "Campus Activities"],
  guests: "Industry guests from EA, Ubisoft, Tara Gaming and more",
};

export const QUESTS = [
  { title: "8-day Love2D + Lua workshop", meta: "Inter-college · GDU PICT × GDU IIITK" },
  { title: "Game dev workshop at Tantrafiesta", meta: "IIIT Nagpur · 200+ attendees" },
  { title: "Blender workshop", meta: "IIIT Nagpur · with Pictoreal" },
  { title: "Defold Game Jam", meta: "PICT · IIIT Kottayam · IIIT Nagpur" },
  { title: "Dungeon Devs at Glitched", meta: "With Arcanum, IIIT Ranchi" },
  { title: "3-part GDG × GDU series", meta: "IIIT Kottayam · 100+ attendees" },
];

export const WINS = {
  pict: [
    { event: "IIIT Kottayam Game Jam", award: "Best Overall Game + Best Game Design", tier: "gold" },
    { event: "IIT Madras - Genesis Game Jam", award: "1st Prize + 2nd Prize", tier: "gold" },
    { event: "IIT Indore", award: "1st Prize", tier: "gold" },
    { event: "IIT Hyderabad", award: "Game Jam Winner", tier: "gold" },
    { event: "IIIT Nagpur - TantraFiesta", award: "1st Prize", tier: "gold" },
    { event: "Python Hackathon - FOSSEE, IIT Bombay", award: "1st Prize", tier: "gold" },
    { event: "COEP Krafton Hackathon", award: "1st Prize + 2nd Prize", tier: "gold" },
    { event: "AIT Pune", award: "2nd Place + 3rd Place", tier: "silver" },
  ],
  network: [
    { event: "JAMSHACK23 - NIT Agartala", award: "1st Place", tier: "gold" },
    { event: "GDU × Defold Game Jam (International)", award: "Judge's Favourite", tier: "gold" },
    { event: "Stellaris GDU - Defold (International)", award: "Judge's Choice", tier: "gold" },
    { event: "GameVita IIITK 2024", award: "Best Design", tier: "gold" },
    { event: "Game Forge - IIT Palakkad", award: "2nd Place", tier: "silver" },
    { event: "Game Jam - IIT Hyderabad", award: "2nd Place", tier: "silver" },
    { event: "Parichara × Glitched - PICT", award: "3rd Place", tier: "bronze" },
    { event: "GameVita IIITK 2023", award: "Best Implementation", tier: "gold" },
  ],
};

export const MENTORS = [
  { name: "Ankit Gajiwala", role: "Senior Manager, EA", note: "Speaker at Glitched 3.0" },
  { name: "Mohit Sethi", role: "Software Engineer, EA Games" },
  { name: "Bjorn Ritzl", role: "Chairperson, Defold", note: "International sponsor" },
  { name: "Ubisoft Pune", role: "Studio Technical Director & team" },
  { name: "Kyle Schaub", role: "Former Microsoft Engineer", note: "Challacade, YouTube" },
  { name: "Ketki Joshi", role: "Senior 3D Artist, Tara Gaming" },
  { name: "Brandon Lim", role: "Indie Developer" },
];

export const LOOT = [
  {
    title: "A real game portfolio",
    text: "Complete games built across Unity, Unreal, Godot, Pygame, Love2D and Defold. Members don't just learn tools, they ship.",
  },
  {
    title: "A competitive record",
    text: "Podiums at IIT Madras, IIT Indore, IIT Hyderabad, IIT Palakkad, NIT Agartala, COEP and more, plus international Defold recognition.",
  },
  {
    title: "Cross-disciplinary skills",
    text: "Engineers who also model in Blender, animate, draw, design UI, build websites and cut trailers.",
  },
  {
    title: "Leadership XP",
    text: "Run workshops for 200+ students, manage multi-department teams, organise national-level jams and mentor juniors.",
  },
  {
    title: "Industry exposure",
    text: "Direct sessions with EA, Ubisoft, Defold, indie developers and YouTube educators.",
  },
];
