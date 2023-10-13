import { Avatar, Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Section from "../section";
import Paragraph from "../text/paragraph";
import SkillTag from "../text/skillstag";

// Icons
import {
  SiPython,
  SiJavascript,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiAnsible,
  SiTerraform,
  SiPowershell,
  SiReact,
  SiChakraui,
  SiTailwindcss,
  SiKalilinux,
  SiDocker,
  SiPaloaltonetworks,
  SiVmware,
  SiExpress,
  SiAxios,
  SiWindows,
  SiGit,
  SiVite,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillHddNetworkFill } from "react-icons/bs";
import FadeIn from "../transitions/scrollanimations";

const MySkills = [
  {
    group: "Programming Languages",
    tags: [
      {
        name: "Python",
        color: "blue",
        icon: SiPython,
      },
      {
        name: "JavaScript",
        color: "green",
        icon: SiJavascript,
      },
      {
        name: "C#",
        color: "purple",
        icon: SiCsharp,
      },
      {
        name: "HTML",
        color: "orange",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        color: "blue",
        icon: SiCss3,
      },
    ],
  },
  {
    group: "DevOps",
    tags: [
      {
        name: "Ansible",
        color: "gray",
        icon: SiAnsible,
      },
      {
        name: "Terraform",
        color: "purple",
        icon: SiTerraform,
      },
      {
        name: "PowerShell",
        color: "blue",
        icon: SiPowershell,
      },
      {
        name: "Docker",
        color: "blue",
        icon: SiDocker,
      },
      {
        name: "Git",
        color: "red",
        icon: SiGit,
      },
    ],
  },
  {
    group: "Development Frameworks",
    tags: [
      {
        name: "React",
        color: "blue",
        icon: SiReact,
      },
      {
        name: "Next.js",
        color: "gray",
        icon: TbBrandNextjs,
      },
      {
        name: "Chakra UI",
        color: "teal",
        icon: SiChakraui,
      },
      {
        name: "Tailwind CSS",
        color: "cyan",
        icon: SiTailwindcss,
      },
      {
        name: "ExpressJS",
        color: "black",
        icon: SiExpress,
      },
      {
        name: "Axios",
        color: "blue",
        icon: SiAxios,
      },
      {
        name: "Vite",
        color: "purple",
        icon: SiVite,
      },
    ],
  },
  {
    group: "Cybersecurity",
    tags: [
      {
        name: "Kali Linux",
        color: "blue",
        icon: SiKalilinux,
      },
      {
        name: "Metasploit",
        color: "red",
        icon: SiKalilinux,
      },
      {
        name: "Network Security",
        color: "green",
        icon: BsFillHddNetworkFill,
      },
      {
        name: "Virtualization",
        color: "cyan",
        icon: SiVmware,
      },
      {
        name: "Windows Active Directory",
        color: "blue",
        icon: SiWindows,
      },
    ],
  },
];

const About = () => {
    return (
        <Section top={"15rem"}>
            <Avatar
                mb={{ base: 5, md: 10 }}
                size="2xl"
                name="Ervin Lee"
                src="/images/avatar.jpg"
                css={{ transition: "all 0.1s ease-in-out" }}
                _hover={{ boxShadow: "md", transform: "translate(0, -3px)" }}
            />
            <FadeIn>
                <Heading
                as="h1"
                pb={3}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
                >
                A Little Bit About Myself 💁
                </Heading>

                <Paragraph py={4}>
                Currently a diploma student at <b>Singapore Polytechnic</b>{" "}
                specializing in <u>Cybersecurity and Digital Forensics</u> 🔐!
                </Paragraph>
                <Paragraph py={4}>
                I'm an <i>organised, proactive, collaborative, hard-working</i> and{" "}
                <i>passionate</i> <u>problem solver</u> 👥.
                </Paragraph>
                <Paragraph py={4}>
                I'm also an <i>independent learner</i> who can adapt to changes
                quickly. I'm always looking for opportunities to learn, grow and
                upskill as a developer 💻.
                </Paragraph>
                <Paragraph py={4}>
                Looking to pursue a career in software engineering, bridging my
                knowledge in cybersecurity and self-taught skills in software
                engineering to develop impactful products and solutions for public
                good and digital defence 📱.
                </Paragraph>
            </FadeIn>
            <FadeIn>
                <Heading
                as="h1"
                pt={10}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
                >
                My Skills 💡
                </Heading>
            </FadeIn>
            {MySkills.map((skill, index) => (
                <FadeIn key={index}>
                <Box>
                    <Heading as="h3" size="md" py={4}>
                    {skill.group}
                    </Heading>
                    {skill.tags.map((tag, index) => (
                    <SkillTag key={index} icon={tag.icon} color={tag.color}>
                        {tag.name}
                    </SkillTag>
                    ))}
                </Box>
                </FadeIn>
            ))}
        </Section>
    );
};

export default About;
