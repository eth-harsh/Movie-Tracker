import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Skiper52 = () => {
  const images = [
    {
      src: `${import.meta.env.BASE_URL}images/skip1.jpeg`,
      alt: "Illustration",
      code: "# 23",
    },
    {
      src: `${import.meta.env.BASE_URL}images/skip2.jpeg`,
      alt: "Illustration",
      code: "# 23",
    },
    {
      src: `${import.meta.env.BASE_URL}images/skip3.jpeg`,
      alt: "Illustration",
      code: "# 23",
    },
    {
      src: `${import.meta.env.BASE_URL}images/skip4.jpeg`,
      alt: "Illustration",
      code: "# 23",
    },
    {
      src: `${import.meta.env.BASE_URL}images/skip5.jpeg`,
      alt: "Illustration",
      code: "# 23",
    },
    {
      src: `${import.meta.env.BASE_URL}images/skip6.jpeg`,
      alt: "Illustration",
      code: "# 23",
    },
    {
      src: `${import.meta.env.BASE_URL}images/skip7.jpeg`,
      alt: "Illustration",
      code: "# 23",
    },
    {
      src: `${import.meta.env.BASE_URL}images/skip8.jpeg`,
      alt: "Illustration",
      code: "# 23",
    },
    {
      src: `${import.meta.env.BASE_URL}images/skip9.jpeg`,
      alt: "Illustration",
      code: "# 23",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
      <HoverExpand_001 images={images} />
    </div>
  );
};

const HoverExpand_001 = ({ images, className }) => {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={`relative w-full max-w-6xl px-5 ${className || ""}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-1">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl"
              initial={{
                width: "2.5rem",
                height: "20rem",
              }}
              animate={{
                width: activeImage === index ? "24rem" : "5rem",
                height: activeImage === index ? "24rem" : "24rem",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                  >
                    <p className="text-left text-xs text-white/50">
                      {image.code}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { Skiper52, HoverExpand_001 };
