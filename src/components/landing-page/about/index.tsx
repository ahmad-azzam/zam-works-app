"use client";

import { LIST_ABOUT, STATS_ABOUT } from "@/constant";
import { fadeIn, statContainer, statItem } from "@/lib/animation/variant";
import { useInView, motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";

const About: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="pt-8 pb-14 md:pt-16 md:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn({ delay: 0.4, direction: "up" })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="h2 text-center"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={fadeIn({ delay: 0.6, direction: "up" })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, cum
            at. Aperiam harum ut dolorem itaque architecto reprehenderit
            accusantium cumque facere. Maiores id architecto esse.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {LIST_ABOUT.map((item, index) => {
            return (
              <motion.div
                variants={fadeIn({ delay: 0.8, direction: "up" })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                key={`about-${index}`}
                className="flex flex-col justify-center items-center gap-4 border p-10"
              >
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h5 className="h5 text-accent">{item.title}</h5>
                  <p>{item.subTitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeIn({ delay: 0.9, direction: "up" })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <section ref={ref}>
            <div className="container mx-auto">
              <motion.div
                variants={statContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-16"
              >
                {STATS_ABOUT.map((item, index) => {
                  return (
                    <motion.div
                      variants={statItem()}
                      key={`stat-${index}`}
                      className="flex flex-col justify-center items-center"
                    >
                      <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                        <div className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full">
                          {isInView && (
                            <CountUp start={0} end={item.number} duration={3} />
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col justify-center items-center text-center">
                        <h4 className="h4">{item.text}</h4>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
