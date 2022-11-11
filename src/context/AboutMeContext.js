import { useState, createContext } from "react";
import { aboutMeData } from "../data/aboutMeData";
import { skillsHeading as skillsPageHeading } from "../data/skillsData";
import { skillsData as skillsDataJson } from "../data/skillsData";

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  const clientsHeading = skillsPageHeading;

  const [clientsData, setClientsData] = useState(skillsDataJson);

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,
        clientsHeading,
        clientsData,
        setClientsData,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;
