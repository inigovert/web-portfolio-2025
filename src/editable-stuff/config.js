// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1cb5e0, #00c9a7, #6c5ce7, #512da8, #0f2027",
  firstName: "Inigo",
  middleName: "",
  lastName: "Guittap",
  message: "Web and Mobile Applications | Data Analytics | Tech Enthusiast",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/inigovert",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/inigo.guittap/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/sampagitap/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/inigo-guittap-39270b2a0/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/inigoguittap.jpg"),
  imageSize: 375,
  message:
    "Hi, I'm Inigo Guittap. A graduate of Far Eastern University, Institute of Technology with a degree in BSIT Web and Mobile Applications. I’m primarily focused on becoming a data analyst, with software engineering as a secondary interest. I enjoy working with data to uncover insights and support decision-making, and I also have experience building web and mobile applications. I'm always learning and looking for ways to solve real-world problems through technology.",
  resume: "https://drive.google.com/file/d/1WfrrUL7UiFjTproVCXF8viJLIi_0hsfw/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "inigovert", 
  reposLength: 0, 
  specificRepos: ["Universal-Webscraper", "FitQuestAlpha3", "FlowLow-main", "Bitwise-Bazaar"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "I led my college capstone project as project manager, driving the development of a gamified, motion-tracking workout program that earned a nomination for Best Capstone Project of the Year. I also gained valuable experience in a supporting role as an automation developer intern at Reed Elsevier, where I contributed to a larger dev team and honed my skills in collaborative development and process efficiency.",
  images: [
    { 
      img: require("../editable-stuff/group_pic1.jpg"), 
      label: "My Capstone Team during College", 
      paragraph: "Photo taken right after passing the title defense." 
    },
    { 
      img: require("../editable-stuff/group_pic2.jpg"), 
      label: "My Data Analytics Team during Internship", 
      paragraph: "Photo taken before conducting team building." 
    },
  ],
  imageSize: {
    width:"900",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 89 },
    { name: "Microsoft Excel", value: 85 },
    { name: "Microsoft Power Bi", value: 75 },
    { name: "SQL", value: 75 },
    { name: "Google Sheets", value: 65 },
    { name: "HTML | CSS | JavaScript", value: 85 },
    { name: "Laravel", value: 75 },
    { name: "React", value: 85 },
  ],
  softSkills: [
    { name: "Communication (Written and Verbal)", value: 98 },
    { name: "Problem-Solving", value: 90 },
    { name: "Collaboration & Teamwork", value: 85 },
    { name: "Time Management", value: 95 },
    { name: "Critical Thinking", value: 85 },
    { name: "Growth Mindset", value: 90 },
    { name: "Accountability", value: 80 },
    { name: "Empathy", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Data Analytics opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "igosampaguittap@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Reed Elsevier Automation Developer Intern',
      companylogo: require('../assets/img/Reed_Elsevier_Logo.png'),
      date: 'May 2025 – July 2025 (520 hours)',
    },
    {
      role: 'Invisible Hand Software Engineer Intern',
      companylogo: require('../assets/img/invisible_hand_logo.png'),
      date: 'December 2024 – April 2025 (520 hours)',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
