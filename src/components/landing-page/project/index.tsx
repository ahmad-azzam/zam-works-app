"use client";

import { LIST_PROJECT } from "@/constant";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/animation/variant";

const Project: React.FC = () => {
  return (
    <section className="py-12 md:h-[110vh] mt-5" id="project">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn({ delay: 0.4, direction: "up" })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="h2 text-center mb-6"
        >
          My Projects
        </motion.h2>
        <motion.div
          variants={fadeIn({ delay: 0.6, direction: "up" })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12"
        >
          {LIST_PROJECT.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={`project-${index}`}
              >
                <div className="relative w-[320px] h-[320px] mx-auto mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={320}
                    height={320}
                  />
                </div>
                <h4 className="h4 mb-2">{item.title}</h4>
                <p className="max-w-[320px] mx-auto">{item.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
