import { CiLocationOn } from "react-icons/ci";

import { Linkedin } from "../../../Links/Linkedin";
import { Twitter } from "../../../Links/Twitter";
import { Github } from "../../../Links/Github";
import { Twitch } from "../../../Links/Twitch";
import { Instagram } from "../../../Links/Instagram";
import { Discord } from "../../../Links/Discord";

import { SoftSkills } from "./SoftSkills";

const AboutMe = () => {
  const elementBorderStyle = "border-l-[1px] border-orange-400 p-2";

  const backgroundElementStyle = "bg-dark/5 dark:bg-white/5 p-3 rounded-lg";

  return (
    <>
      <div className="personalPortfolioAboutMe h-full lg:h-auto xl:w-1/2">
        <div className="aboutMeComponentContainer">
          <div
            className={`boutMeComponentDescription ${backgroundElementStyle} mt-5`}
          >
            <p
              className={`text-md lg:text-sm ${elementBorderStyle} flex flex-col`}
            >
              <span className="text-gray-400 text-md lg:text-sm">About Me</span>
              <span>
                System Information student at{" "}
                <a
                    className="bg-white/10 px-2 rounded-md"
                    href="https://www.ipleiria.pt/curso/tesp-de-programacao-de-sistemas-de-informacao/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Politécnico de Leiria
                </a>{" "}
                seeking an opportunity to utilize my technical skills and
                knowledge in software development and debugging. With excellent
                problem-solving and troubleshooting abilities, I am confident in
                my capacity to make a substantial contribution to the success of
                the company.
              </span>
            </p>
          </div>
        </div>

        <div className="languagesContainer">
          <div
            className={`languagesDescription ${backgroundElementStyle} mt-5`}
          >
            <div
              className={`text-md lg:text-sm ${elementBorderStyle} flex flex-col`}
            >
              <span className="text-gray-400 text-md lg:text-sm">
                Social Media
              </span>
              <span>
                <ul className="flex items-center gap-2 mt-2">
                  <li className="p-2 bg-black/20 dark:bg-white/5 rounded-lg">
                    <Linkedin />{" "}
                  </li>
                  <li className="p-2 bg-black/20 dark:bg-white/5 rounded-lg">
                    <Github />{" "}
                  </li>
                  <li className="p-2 bg-black/20 dark:bg-white/5 rounded-lg">
                    <Twitter />{" "}
                  </li>
                  <li className="p-2 bg-black/20 dark:bg-white/5 rounded-lg">
                    <Twitch />{" "}
                  </li>
                  <li className="p-2 bg-black/20 dark:bg-white/5 rounded-lg">
                    <Instagram />{" "}
                  </li>
                  <li className="p-2 bg-black/20 dark:bg-white/5 rounded-lg">
                    <Discord />{" "}
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>

        <div className="computerLanguagesContainer">
          <div
            className={`computerLanguagesComponentDescription ${backgroundElementStyle} mt-5`}
          >
            <div
              className={`text-md lg:text-sm ${elementBorderStyle} flex flex-col`}
            >
              <span className="text-gray-400 text-md lg:text-sm">
                Languages
              </span>
              <span>
                <ul>
                  <li>
                    &gt;{" "}
                    <a
                      className="border-b"
                      target="noreferrer _blank"
                      href="https://en.wikipedia.org/wiki/Romanian_language"
                    >
                      Romanian
                    </a>
                  </li>
                  <li>
                    &gt;{" "}
                    <a
                      className="border-b"
                      target="noreferrer _blank"
                      href="https://en.wikipedia.org/wiki/Portuguese_language"
                    >
                      Portuguese
                    </a>
                  </li>
                  <li>
                    &gt;{" "}
                    <a
                      className="border-b"
                      target="noreferrer _blank"
                      href="https://en.wikipedia.org/wiki/English_language"
                    >
                      English
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>

        <div className="locationContainer mt-5">
          <div
            className={`locationComponentDescription ${backgroundElementStyle} mt-5`}
          >
            <p
              className={`text-md lg:text-sm ${elementBorderStyle} flex flex-col`}
            >
              <span className="text-gray-400 text-md lg:text-sm">Location</span>
              <a
                href="https://goo.gl/maps/u49o5CZxcUck8Pwp9"
                target="noreferrer _blank"
                className="flex items-center"
              >
                <CiLocationOn />
                <span className="border-b">
                  Alcobaça, Leiria &mdash; Portugal
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="personalSkillsContainer mt-5">
          <div
            className={`personalSkillsComponentDescription ${backgroundElementStyle} mt-5`}
          >
            <div
              className={`text-md lg:text-sm ${elementBorderStyle} flex flex-col`}
            >
              <span className="text-gray-400 text-md lg:text-sm">
                Soft skills
              </span>
              <span>
                <ul>
                  {SoftSkills.map((skill, index) => (
                    <li key={index}>&middot; {skill}</li>
                  ))}
                </ul>
              </span>
            </div>
          </div>
        </div>

        <div className="personalInterestsContainer mt-5">
          <div
            className={`personalInterestsComponentDescription ${backgroundElementStyle} mt-5`}
          >
            <div
              className={`text-md lg:text-sm ${elementBorderStyle} flex flex-col`}
            >
              <span className="text-gray-400 text-md lg:text-sm">
                Interests
              </span>
              <span>
                <ul>
                  <li>
                    &middot; Video Games{" "}
                    <span className="text-gray-400 text-[10px]">
                      GTA V, CS:GO, PUBG
                    </span>
                  </li>
                  <li>
                    &middot; Tech Industry{" "}
                    <span className="text-gray-400 text-[10px]">
                      Software Development
                    </span>
                  </li>
                  <li>
                    &middot; New Technologies{" "}
                    <span className="text-gray-400 text-[10px]">
                      Gadgets, Consoles
                    </span>
                  </li>
                  <li>
                    &middot; Sports{" "}
                    <span className="text-gray-400 text-[10px]">
                      Football, Volleyball, Basketball, Ping Pong
                    </span>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
