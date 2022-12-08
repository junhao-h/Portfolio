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
            "Ouch! is a 2D puzzle game located in a laboratory where animal experimentation is performed. The game starts with the player waking up to find all the animals breaking out of their cage. Without knowing anything, the objective of the player is to escape the chaotic laboratory and find out the mysteries behind this place.",
        },
        {
          id: 2,
          details:
            "In this game, all animals are hostile and will kill the player if the player were to touch them. The player is introduced with the ability to possess the animals in his line of sight, this allows the player to control the animal to use their innate ability to solve the puzzle.",
        },
        {
          id: 3,
          details:
            "The game ends with the player realizing that he is the mad scientist behind this unethical research laboratory.",
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
            "Povertea is a 2D top-down, endless beverage shop management simulator. The player runs a beverage cafe and has to manage orders, concoct drinks and serve customers. All while having to achieve a target profit or lose the game by running out of money.",
        },
        {
          id: 2,
          details:
            "The main inspiration behind Povertea is Overcooked with financial management. With the intention of not running out of money in mind, the player's goal is just to end the day without a net loss. Customers are the only source of income for the player, however, they can penalize the player if they do not obtain their drinks after a certain duration. In Povertea, many of the players' interactions require a certain form of transaction, the player can lose money by just picking up a new cup or using any ingredients to concoct the drinks. Hence the player has to be careful not to waste money concocting the wrong drinks.",
        },
        {
          id: 3,
          details:
            "Later into the game, the drinks the customer asks for comes in a wide range of colour shades. To achieve the customers' demand the player has to mix and match the drink, to get the right shade of colour.",
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
            "Problem: Digipen classroom names are confusing, students have to constantly look up the classroom location as the classroom name does not explain much!",
        },
        {
          id: 2,
          details:
            "Solution: Make an AR indoor pathfinding application that tracks the user's current location and leads them to their designated classroom. The application uses cloud anchors as nodes to perform the Bellman-Ford algorithm to get the shortest path to their destination.",
        },
        {
          id: 3,
          details:
            "Challenges: Due to time constraints, Cloud Anchors had to be hard coded into the application.",
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
            "Grav-Nav is built with a custom 2D game editor built with ImGui. The game engine follows Unity's layout so that the designers have an easier time using the game engine. The Game Engine uses custom ECS for data management and for scripting C++ is used as everyone in the team is proficient in C++.",
        },
        {
          id: 2,
          details:
            "Grav-Nav is a 2D puzzle platformer game where the player can manipulate gravity to solve puzzles. The gravity only affects the player initially, but as the game progress more obstacles are introduced and some of the obstacles move along with the gravity change.",
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
            "Singapore has militarized its land to prevent foreign forces from invading its territory with the help of Artificial Intelligence. However, a glitch in the system has turned the AI hostile! To rectify the situation, the developer of the AI has to get access to the server and fix the glitch. Project PATHBOT is an operation to create a machine that can path itself to the command centre.",
        },
        {
          id: 2,
          details:
            "PathBot is a 3D reverse tower defence game with 2 unique phases. The first phase requires the player to customize and build a machine. While the second phase is when the machine is deployed to clear an obstacle course.",
        },
        {
          id: 3,
          details:
            "In this game, the game has to be built on our custom 3D editor. Hence we have to build an in-game editor with our game engine which is quite a challenge. Although we manage to get the gameplay to work, too much manpower is spent on making the game work instead of making it fun. Hence this game is a failed project purely due to the neglect of the game design.",
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
            "The player is the sole engineer maintaining a toy island. However, the security system malfunctioned and the island starts to run amok. To calm things down, the engineer has to go to the island and reset the control unit at the clock tower.",
        },
        {
          id: 2,
          details:
            "UP is a first-person puzzle in a Ludibrum-inspired setting where the player scales a tower to fix the clock tower. The main game mechanic of the game revolves around the vacuum gun where the player can suck objects from afar and can disassemble the parts to build platforms.",
        },
        {
          id: 3,
          details:
            "The game is built with a custom 3D game engine. Despite how the game looks, the game is not made by any artist, everything is done by developers.",
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
            "My first experience in creating a website. The website uses Strapi to manage the backend database to store all the data. The website needs to take into consideration multi-language support, hence there needs to be language-switching support. The website uses i18n initially for international routing, however, i18n does not support export. Hence, I have to develop a custom method to reroute for static side generation.",
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
            "There is a greater emphasis on making the website feel more responsive. Breakpoints are used more intentionally to adjust how the page looks based on the screen width. This website is where I learn about Firebase cloud functions and other backend development.",
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
