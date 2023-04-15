// Import images
import OuchHome from "../images/OuchHome.png";
import OuchPlay from "../images/OuchPlay.png";
import OuchLose from "../images/OuchLose.png";
import PoverteaHome from "../images/PoverteaHome.png";
import PoverteaPlay from "../images/PoverteaPlay.png";
import GravPlay from "../images/GravPlay.png";
import GravHome from "../images/GravHome.png";
import GravHow from "../images/GravHow.png";
import UpHome from "../images/UpHome.png";
import UPEditor from "../images/UpEditor.png";
import UPplay from "../images/UpPlay.png";
import ARNav from "../images/ARNav.png";
import ARNav2 from "../images/ARNav2.png";
import ARCore from "../images/arcore.png";
import PathCus from "../images/pathbotCustom.png";
import PathSim from "../images/pathbotPlay.png";
import PathDemo from "../images/pathbotDemo.png";
import GoodiiEn from "../images/goodiiEN.png";
import GoodiiVn from "../images/goodiiVN.png";
import GoodiiMm from "../images/goodiiMM.png";
import Simplly1 from "../images/simplly1.png";
import Simplly2 from "../images/simplly2.png";
import Simplly3 from "../images/simplly3.png";
import MercedesHub from "../images/MercedesHub.png";
import MercedesUnreal from "../images/MercedesUnreal.png";
import MercedesWeb from "../images/MercedesWeb.png";
import PoverteaVid from "../videos/povertea.mp4";
import UpVid from "../videos/up.mp4";
import PathBotVid from "../videos/andromedia.mp4";
import GravNavVid from "../videos/gravnav.mp4";
import ARNavVid from "../videos/arnav.mp4";

export const singleProjectData = {
  ouch: {
    ProjectHeader: {
      title: "Ouch!",
      duration: "4 Months",
      tags: "C++ / Windows Console Game",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Ouch! Home Screen",
        img: OuchHome,
      },
      {
        id: 2,
        title: "Ouch! Level 1",
        img: OuchPlay,
      },
      {
        id: 3,
        title: "Ouch! Game Over Screen",
        img: OuchLose,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Contributions",
      CompanyInfo: [
        {
          id: 1,
          title: "Team Name",
          details: "JAYG",
        },
        {
          id: 2,
          title: "My Role",
          details: "Lead Game Designer, Programmer",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "This is the first game I have ever made. It is made in my first semester in Digipen, back when I am still learning C/C++.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["C++", "ASCII", "GitHub"],
        },
      ],
      ProjectDetailsHeading: "Concept",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Ouch! is a 2D puzzle game made on window's console that is build with C++. It takes place in a laboratory where animal experimentation is performed. The game begins with the player awakening to find all the animals escaping from their cages. With no prior knowledge, the player's objective is to escape the chaotic laboratory and uncover the mysteries behind the facility.",
        },
        {
          id: 2,
          details:
            "In the game, all animals are hostile and will attack the player upon contact. However, the player is introduced to the unique ability to possess animals within their line of sight, enabling them to control the animals and use their innate abilities to solve puzzles.",
        },
        {
          id: 3,
          details:
            "As the player progresses through the game, they encounter challenging obstacles and puzzles that require strategic thinking and quick reflexes. But the game's storyline takes an unexpected twist towards the end, as the player discovers that they are the mad scientist responsible for the unethical research conducted in the laboratory.",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Povertea",
          img: PoverteaHome,
          url: "povertea",
        },
        {
          id: 2,
          title: "Grav Nav",
          img: GravPlay,
          url: "grav_nav",
        },
        {
          id: 3,
          title: "Up",
          img: UpHome,
          url: "up",
        },
      ],
    },
  },
  povertea: {
    ProjectHeader: {
      title: "Povertea",
      duration: "4 Months",
      tags: "C++ / Windows 2D Game",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Povertea Home Screen",
        img: PoverteaHome,
      },
      {
        id: 2,
        title: "Povertea Level 1",
        img: PoverteaPlay,
      },
      {
        id: 3,
        title: "Povertea Game Over Screen",
        img: PoverteaHome,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Contributions",
      CompanyInfo: [
        {
          id: 1,
          title: "Team Name",
          details: "No Logic Studios",
        },
        {
          id: 2,
          title: "My Role",
          details: "Lead Game Designer, Programmer, Audio Engineer",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a game with Alpha Engine, a DigiPen-provided graphics renderer to build a 2D game.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["C++", "Alpha Engine, FMOD, TortoiseSVN, Adobe Photoshop"],
        },
      ],
      ProjectDetailsHeading: "Concept",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Povertea is an exciting 2D top-down simulator game that allows players to run their own beverage cafe. In this endless game, the player must manage orders, create unique drinks, and serve customers, all while ensuring they reach their target profit or face the risk of going bankrupt.",
        },
        {
          id: 2,
          details:
            "The game takes inspiration from Overcooked, blending the thrill of running a busy cafe with financial management. To succeed in Povertea, the player must keep a keen eye on their finances, striving to end each day without a net loss. Customers are the sole source of income, but they can also penalize the player if their orders aren't met within a specific time frame.",
        },
        {
          id: 3,
          details:
            "Throughout the game, players must navigate a series of financial challenges, with many interactions requiring transactions that could result in the loss of money. For instance, players can lose money just by picking up a new cup or using incorrect ingredients to create a drink. Therefore, it is essential to be cautious not to waste money on wrong concoctions.",
        },
        {
          id: 4,
          details:
            "As the game progresses, customers' requests become increasingly complex, with different shades of colors being required to create the perfect drink. The player must mix and match ingredients to get the desired color, giving the game an added layer of complexity.",
        },
        {
          id: 5,
          details:
            "Overall, Povertea is a fun and challenging game that tests the player's financial management and beverage-making skills. The game is suitable for players of all ages and offers a unique and immersive experience in the beverage industry.",
        },
      ],
    },
    ProjectVideo: PoverteaVid,
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Ouch!",
          img: OuchHome,
          url: "ouch",
        },
        {
          id: 2,
          title: "Grav-Nav",
          img: GravPlay,
          url: "grav_nav",
        },
        {
          id: 3,
          title: "Up",
          img: UpHome,
          url: "up",
        },
      ],
    },
  },
  ar_nav: {
    ProjectHeader: {
      title: "AR Navigation",
      duration: "4 Months",
      tags: "AR / Mobile Application",
    },
    ProjectImages: [
      {
        id: 1,
        title: "AR Nav App",
        img: ARNav,
      },
      {
        id: 2,
        title: "Pathfinding",
        img: ARNav2,
      },
      {
        id: 3,
        title: "ARcore",
        img: ARCore,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Contributions",
      CompanyInfo: [
        {
          id: 1,
          title: "My Role",
          details: "Software Developer",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create an AR navigation application with C# and Unity.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["C#", "Unity, ARCore"],
        },
      ],
      ProjectDetailsHeading: "Concept",
      ProjectDetails: [
        {
          id: 1,
          details:
            "The problem at hand was that Digipen classroom names were confusing, making it difficult for students to locate their designated classrooms without constantly looking them up. To address this issue, an AR indoor pathfinding application was developed that could track the user's current location and guide them to their classroom.",
        },
        {
          id: 2,
          details:
            "The application utilized cloud anchors as nodes, allowing it to perform the Bellman-Ford algorithm and determine the shortest path to the user's destination. However, due to time constraints, the cloud anchors had to be hard-coded into the application, which presented some challenges.",
        },
        {
          id: 3,
          details:
            "Despite these challenges, the AR pathfinding application was successful in providing a user-friendly solution to the confusing classroom names at Digipen.",
        },
      ],
    },
    ProjectVideo: ARNavVid,
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Ouch!",
          img: OuchHome,
          url: "ouch",
        },
        {
          id: 2,
          title: "Grav Nav",
          img: GravPlay,
          url: "grav_nav",
        },
        {
          id: 3,
          title: "Up",
          img: UpHome,
          url: "up",
        },
      ],
    },
  },
  grav_nav: {
    ProjectHeader: {
      title: "Grav-Nav",
      duration: "8 Months",
      tags: "2D Game Engine / 2D Game",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Grav-Nav Home Screen",
        img: GravHome,
      },
      {
        id: 2,
        title: "Grav-Nav Level 1",
        img: GravPlay,
      },
      {
        id: 3,
        title: "Grav Nav How to Play Screen",
        img: GravHow,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Contributions",
      CompanyInfo: [
        {
          id: 1,
          title: "Team Name",
          details: "Rally",
        },
        {
          id: 1,
          title: "My Role",
          details: "Game Engine Lead / Tools Programmer / Gameplay Programmer",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a custom 2D Game Engine and build a 2D Game with it.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "C++",
            "OpenGL",
            "FreeType",
            "ImGui",
            "FMOD",
            "SOIL",
            "GLEW",
            "GLFW",
            "GLM",
            "RapidJson",
          ],
        },
      ],
      ProjectDetailsHeading: "Concept",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Grav-Nav is a 2D puzzle platformer game that utilizes a custom 2D game engine built with C++ and ImGui. The game engine has a similar layout to Unity, which makes it easier for designers to use. The engine uses a custom Entity Component System (ECS) for data management, and C++ is used for scripting since everyone in the team is proficient in it.",
        },
        {
          id: 2,
          details:
            "The player in Grav-Nav can manipulate gravity to solve puzzles, which adds a unique twist to the gameplay. Initially, the gravity only affects the player, but as the game progresses, new obstacles are introduced, and some of them move along with the change in gravity. This adds complexity to the puzzles, making them more challenging and engaging for players.",
        },
        {
          id: 2,
          details:
            "Overall, Grav-Nav is an excellent showcase of our create a game engine and building a game with it. It demonstrates the importance of having a well-designed engine that is easy to use for designers, as well as the benefits of using ECS for data management in game development.",
        },
      ],
    },
    ProjectVideo: GravNavVid,
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Ouch!",
          img: OuchHome,
          url: "ouch",
        },
        {
          id: 2,
          title: "Povertea",
          img: PoverteaHome,
          url: "povertea",
        },
        {
          id: 3,
          title: "Up",
          img: UpHome,
          url: "up",
        },
      ],
    },
  },
  pathbot: {
    ProjectHeader: {
      title: "Project PATHBOT",
      duration: "4 Months",
      tags: "3D Game Engine / 3D Game",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Early PathBot Customization Screen",
        img: PathCus,
      },
      {
        id: 2,
        title: "PathBot Level 1",
        img: PathSim,
      },
      {
        id: 3,
        title: "PathBot Level Prototype",
        img: PathDemo,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Contributions",
      CompanyInfo: [
        {
          id: 1,
          title: "Team Name",
          details: "WuMing",
        },
        {
          id: 1,
          title: "My Role",
          details: "Game Engine Programmer / Tools Programmer / AI Programmer",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a custom 3D Game Engine and build a 3D Game with it.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "C++",
            "OpenGL",
            "ImGui",
            "ImGuizmo",
            "FMOD",
            "STB",
            "GLEW",
            "GLFW",
            "GLM",
            "assimp",
            "xECS",
          ],
        },
      ],
      ProjectDetailsHeading: "Concept",
      ProjectDetails: [
        {
          id: 1,
          details:
            "PATHBOT is a 3D reverse tower defense game with two unique phases, designed to simulate the challenge of reaching the command center in a militarized zone. The first phase of the game requires the player to customize and build a machine, which will be used to clear an obstacle course in the second phase.",
        },
        {
          id: 2,
          details:
            "To support the development of this game, we built a custom 3D editor and an in-game editor using our game engine. Although we successfully implemented the gameplay mechanics, we failed to invest enough effort into game design, resulting in a lack of fun for players. As a result, PATHBOT did not meet our expectations within the given time frame and was deemed a failed project.",
        },
      ],
    },
    ProjectVideo: PathBotVid,
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Povertea",
          img: PoverteaHome,
          url: "povertea",
        },
        {
          id: 2,
          title: "Grav Nav",
          img: GravPlay,
          url: "grav_nav",
        },
        {
          id: 3,
          title: "Up",
          img: UpHome,
          url: "up",
        },
      ],
    },
  },
  up: {
    ProjectHeader: {
      title: "UP",
      duration: "8 Months",
      tags: "3D Game Engine / 3D Game",
    },
    ProjectImages: [
      {
        id: 1,
        title: "UP Editor",
        img: UPEditor,
      },
      {
        id: 2,
        title: "UP Home",
        img: UpHome,
      },
      {
        id: 3,
        title: "UP Play",
        img: UPplay,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Contributions",
      CompanyInfo: [
        {
          id: 1,
          title: "Team Name",
          details: "WuMing",
        },
        {
          id: 1,
          title: "My Role",
          details:
            "Game Engine Lead / Tools Programmer / Game Designer / Gameplay Programmer",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a custom 3D Game Engine and build a 3D Game with it.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "C++",
            "OpenGL",
            "ImGui",
            "ImGuizmo",
            "FMOD",
            "STB",
            "GLEW",
            "GLFW",
            "GLM",
            "assimp",
            "xECS",
            "PhysX",
          ],
        },
      ],
      ProjectDetailsHeading: "Concept",
      ProjectDetails: [
        {
          id: 1,
          details:
            "UP is a first-person puzzle game set in a Ludibrum-inspired toy island, where the player assumes the role of the sole engineer responsible for maintaining the island. However, a malfunction in the island's security system causes chaos, and the player must scale a tower to reset the control unit at the clock tower, in order to restore order.",
        },
        {
          id: 2,
          details:
            "The main gameplay mechanic in UP is the vacuum gun, which allows the player to suck objects from a distance and disassemble them to create platforms. The game is built on a custom 3D game engine, and despite its impressive visuals, it was developed entirely by programmers, without the assistance of any artists.",
        },
      ],
    },
    ProjectVideo: UpVid,
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Pathbo",
          img: PathCus,
          url: "pathbot",
        },
        {
          id: 2,
          title: "Grav Nav",
          img: GravPlay,
          url: "grav_nav",
        },
        {
          id: 3,
          title: "Povertea",
          img: PoverteaHome,
          url: "povertea",
        },
      ],
    },
  },
  goodii: {
    ProjectHeader: {
      title: "Goodii",
      duration: "1 Months",
      tags: "Website",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Goodii English",
        img: GoodiiEn,
      },
      {
        id: 2,
        title: "Goodii Vietnam",
        img: GoodiiVn,
      },
      {
        id: 3,
        title: "Goodii Myanmmar",
        img: GoodiiMm,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Company",
      CompanyInfo: [
        {
          id: 1,
          title: "Company Name",
          details: "Growfi",
        },
        {
          id: 1,
          title: "My Role",
          details: "Full Stack Developer",
        },
        {
          id: 1,
          title: "Website",
          details: "goodii.app",
          url: "https://www.goodii.app/en/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create and deploy a multinational static website with React and NextJs.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "Typescript",
            "Tailwind",
            "NextJS",
            "Strapi",
            "DigitalOceans",
          ],
        },
      ],
      ProjectDetailsHeading: "Concept",
      ProjectDetails: [
        {
          id: 1,
          details:
            "When I first started creating a website, I faced a number of challenges related to multi-language support and static side generation. To address these issues, I used Strapi to manage the backend database, and incorporated i18n for international routing. However, I quickly realized that i18n did not support export, which presented a major obstacle in generating static pages. To overcome this limitation, I had to develop a custom method for rerouting, which allowed me to generate the static pages needed for the website. Ultimately, this project taught me a lot about the complexities of web development and the importance of being adaptable in the face of unexpected challenges.",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Simplly",
          img: Simplly1,
          url: "simplly",
        },
        {
          id: 2,
          title: "Grav Nav",
          img: GravHome,
          url: "grav_nav",
        },
        {
          id: 3,
          title: "Up",
          img: UpHome,
          url: "up",
        },
      ],
    },
  },
  simplly: {
    ProjectHeader: {
      title: "Simplly",
      duration: "1 Months",
      tags: "Website",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Simplly English",
        img: Simplly1,
      },
      {
        id: 2,
        title: "Simplly Vietnam",
        img: Simplly3,
      },
      {
        id: 3,
        title: "Simplly contacts",
        img: Simplly2,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Company",
      CompanyInfo: [
        {
          id: 1,
          title: "Company Name",
          details: "Growfi",
          url: "simplly.space",
        },
        {
          id: 1,
          title: "My Role",
          details: "Full Stack Developer",
        },
        {
          id: 1,
          title: "Website",
          details: "simplly.space",
          url: "https://www.simplly.space/en/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create and deploy a multinational static website with React and NextJs.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "Typescript",
            "Tailwind",
            "NextJS",
            "Firebase",
            "DigitalOceans",
          ],
        },
      ],
      ProjectDetailsHeading: "Concept",
      ProjectDetails: [
        {
          id: 1,
          details:
            "As I worked on my website project, I learned the importance of creating a responsive design that adapts well to different screen sizes. To achieve this, I made strategic use of breakpoints to adjust the layout and optimize the user experience on different devices.",
        },
        {
          id: 2,
          details:
            "Moreover, I took the opportunity to delve into backend development by using Firebase cloud functions to handle server-side logic for the website. This allowed me to enhance the functionality of the website and create a more robust and dynamic user experience. Overall, this project helped me gain valuable experience in both frontend and backend development, which I can apply to future projects.",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Goodii",
          img: GoodiiEn,
          url: "goodii",
        },
        {
          id: 2,
          title: "Grav Nav",
          img: GravHome,
          url: "grav_nav",
        },
        {
          id: 3,
          title: "Up",
          img: UpHome,
          url: "up",
        },
      ],
    },
  },
  mercedes: {
    ProjectHeader: {
      title: "Car Configurator with Pixelstreaming",
      duration: "3 Months",
      tags: "Website",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Car Configurator on web",
        img: MercedesHub,
      },
      {
        id: 2,
        title: "Car configurator Project from Unreal",
        img: MercedesUnreal,
      },
      {
        id: 3,
        title: "Mercedes Project over network with different resolutions",
        img: MercedesWeb,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Company",
      CompanyInfo: [
        {
          id: 1,
          title: "Company Name",
          details: "Inspify",
          url: "https://inspify.com/",
        },
        {
          id: 1,
          title: "My Role",
          details:
            "I was reposisble for overseeing the entire Mercedes Project",
        },
        {
          id: 1,
          title: "Website",
          details: "Mercedes Immersive Showroom",
          url: "https://app.inspify.com/mercedes-benz",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Deploying an unreal application on the web that can be streamed to all device using pixel streaming.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "Typescript",
            "CSS",
            "Unreal Engine 5.1",
            "Pixelstreaming",
            "AWS",
          ],
        },
      ],
      ProjectDetailsHeading: "Concept",
      ProjectDetails: [
        {
          id: 1,
          details:
            "I worked on a project that aimed to showcase car products to multiple clients through the Inspify meeting platform. To achieve this goal, I took the car configurator sample in Unreal Engine and modified it to feature the Mercedes Benz EQE350 assets.",
        },
        {
          id: 2,
          details:
            "To ensure the configurator could be accessed by multiple clients, I utilized Pixel Streaming to stream the experience from a Linux server in the cloud to web browsers. However, I encountered issues with resolution and orientation, so I modified the pixel streaming signaling server to compute different resolutions for different devices.",
        },
        {
          id: 3,
          details:
            "To further enhance the user experience, I migrated the UI from Unreal Engine to the webpage using React, Typescript, and CSS code, overlaying it over the iframe to cater for resolution and orientation changes. With the UI on React, I was able to send messages to the Unreal project to make changes and ensure a synchronized experience for all users.",
        },
        {
          id: 4,
          details:
            "I also added touch input on the Unreal end to ensure that all devices could interact with the experience, regardless of whether they were using a mouse or touch screen.",
        },
        {
          id: 5,
          details:
            "This project taught me the importance of being flexible and adaptable in software development. I encountered several challenges along the way, but by leveraging different tools and technologies, I was able to find innovative solutions to overcome them.",
        },
        {
          id: 6,
          details:
            "Overall, the project was a great learning experience that allowed me to gain expertise in utilizing Pixel Streaming, React, Typescript, and CSS to create a seamless user experience across multiple devices. It also taught me to use ChatGPT to get more clarity of Unreal Engine's functionality as it is not well documented.",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Goodii",
          img: GoodiiEn,
          url: "goodii",
        },
        {
          id: 2,
          title: "Grav Nav",
          img: GravHome,
          url: "grav_nav",
        },
        {
          id: 3,
          title: "Up",
          img: UpHome,
          url: "up",
        },
      ],
    },
  },
};
