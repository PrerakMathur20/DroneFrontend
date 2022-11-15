// Import images
import detailedIdea from "../images/detailedIdea.jpg";
import primaryUsers from "../images/users.svg";
import innovativeElements from "../images/innovation.svg";
import features from "../images/features.svg";
import hardware from "../images/hardware.jpg";
import software from "../images/software.svg";
import Image2 from "../images/web-project-2.jpg";
import Image3 from "../images/mobile-project-2.jpg";
import Image4 from "../images/mobile-project-1.jpg";
import Image5 from "../images/web-project-1.jpg";
import Image6 from "../images/ui-project-2.jpg";
// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const singleProjectData = [
  {
    id: "detailedIdea",
    ProjectHeader: {
      title: "Detailed Idea",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Stock image of detailed idea",
        img: detailedIdea,
      },
    ],
    ProjectInfo: {
      ProjectDetails: [
        {
          id: 1,
          details: `The necessary motors, electronic speed controller, flight controller, frame, propellers, connectors, and mounting pad will be used to create a lightweight drone/quadcopter. The drone/quadcopter will be equipped with a refurbished smartphone.`,
        },
        {
          id: 2,
          details:
            "Using the smartphone's network, the suggested hardware will be able to receive and send information to a dedicated app.",
        },
        {
          id: 3,
          details: `In addition to taking pictures and processing data, the smartphone's motor, fans, and processor will be put to action. The app will allow the quadcopter to connect with the camera, accelerometer, and gyroscope of a smartphone.
`,
        },
      ],
    },
  },
  {
    id: "primaryUsers",
    ProjectHeader: {
      title: "Primary Users",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Stock image of primary users",
        img: primaryUsers,
      },
    ],
    ProjectInfo: {
      ProjectDetails: [],
      projectDescription: "primaryUsers.md",
    },
  },
  {
    id: "innovativeElements",
    ProjectHeader: {
      title: "Innovative Elements",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Stock image of innovative elements",
        img: innovativeElements,
      },
    ],
    ProjectInfo: {
      ProjectDetails: [],
      projectDescription: "innovativeElements.md",
    },
  },
  {
    id: "features",
    ProjectHeader: {
      title: "Features",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Stock image of features",
        img: features,
      },
    ],
    ProjectInfo: {
      ProjectDetails: [],
      projectDescription: "features.md",
    },
  },
  {
    id: "hardware",
    ProjectHeader: {
      title: "Hardware",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Stock image of a circuit",
        img: hardware,
      },
    ],
    ProjectInfo: {
      ProjectDetails: [],
      projectDescription: "hardware.md",
    },
  },
  {
    id: "software",
    ProjectHeader: {
      title: "Software",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Stock image of a software thing",
        img: software,
      },
    ],
    ProjectInfo: {
      ProjectDetails: [],
      projectDescription: "software.md",
    },
  },
];
