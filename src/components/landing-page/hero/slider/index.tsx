import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ButtonHero from "../button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation/variant";

const Slider: React.FC = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center md:items-start md:max-w-[700px] ">
            <motion.h1
              variants={fadeIn({ delay: 0.3, direction: "up" })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-white text-center md:text-left mb-2"
            >
              <span>Where hard</span> work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn({ delay: 0.5, direction: "up" })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center md:text-left mb-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              repudiandae voluptas.
            </motion.p>
            <motion.div
              variants={fadeIn({ delay: 0.7, direction: "up" })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <ButtonHero text="Get Started" className="w-[196px] h-[62px]" />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
