"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
    index: number;
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link?: string;
    deploy_link: string;
    platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
};

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    deploy_link,
    platform
}: ProjectCardProps) => {
    return (
        <motion.div 
            variants={fadeIn("up", "spring", index * 0.2, 0.5)} // Reduced delay and duration
            initial="hidden"
            animate="show"
            className="w-full"
        >
            <Tilt
                options={{
                    max: 25, // Reduced tilt angle
                    scale: 1,
                    speed: 300, // Reduced speed
                    transition: true,
                    reset: true,
                    easing: "cubic-bezier(.03,.98,.52,.99)"
                }}
                className="bg-tertiary p-3 rounded-2xl w-full sm:w-[340px] mx-auto"
            >
                <div className="relative w-full h-[200px] sm:h-[230px]">
                    <Image
                        src={image}
                        fill
                        alt="project_image"
                        className="object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        {source_code_link && <Link
                            href={source_code_link}
                            target="_blank"
                            className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <Image
                                src="/tech/github.webp"
                                width={20}
                                height={20}
                                alt="source-code"
                                className="object-contain"
                            />
                        </Link>}
                        <Link
                            href={deploy_link}
                            target="_blank"
                            className="black-gradient w-8 h-8 sm:w-10 sm:h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <Image
                                src={platform === "Netlify" ? "/tech/netlify.webp" : platform === "Vercel" ? "/tech/vercel.svg" : platform === "Wordpress" ? "/tech/wordpress.webp" : platform === "Web" ? "/web.webp" : "/tech/figma.webp"}
                                width={20}
                                height={20}
                                alt="source code"
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>

                <div className="mt-4 sm:mt-5">
                    <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[12px] sm:text-[14px]">{description}</p>
                </div>

                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[12px] sm:text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sectionSubText">My work</p>
                <h2 className="sectionHeadText">Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]"
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
