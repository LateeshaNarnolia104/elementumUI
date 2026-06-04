import { motion } from "framer-motion";

const imagePairs = [
  ["/team/person1.avif", "/team/person2.avif"],
  ["/team/person3.avif", "/team/person4.avif"],
  ["/team/person5.avif", "/team/person6.avif"],
  ["/team/person1.avif", "/team/person2.avif"],
];

const Hero = () => {
  return (
    <section className="min-h-screen px-4 py-12 flex flex-col items-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          font-heading
          text-center
          font-extralight
          tracking-tight
          leading-tight
          text-3xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-[70px]
          max-w-6xl
        "
      >
        The thinkers and
        <br />
        doers were{" "}
        <span className="bg-pink-300 px-1 rounded-full">changing</span>
        <br />
        the <span className="bg-green-300 px-3  rounded-full">status</span> quo
        with
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="
          text-center
          text-gray-600
          mt-8
          max-w-2xl
          text-sm
          md:text-base
        "
      >
        We are a team of strategists, designers, communicators, researchers.
        Together, we believe that progress only happens when you refuse to play
        things safe.
      </motion.p>

      {/* Team Images BELOW text */}
      <div
        className="
          mt-16
          flex
          flex-wrap
          justify-center
          gap-6
          md:gap-10
          lg:gap-16
        "
      >
        {imagePairs.map((pair, index) => (
          <div
            key={index}
            className={`
              flex flex-col gap-4
              ${index % 2 === 0 ? "mt-0" : "mt-12"}
            `}
          >
            <motion.img
              whileHover={{
                scale: 1.1,
                y: -8,
              }}
              src={pair[0]}
              alt=""
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 * 0.3,
              }}
              className="
                w-20 h-20
                sm:w-24 sm:h-24
                md:w-28 md:h-28
                lg:w-32 lg:h-32
                rounded-full
                object-cover
              "
            />

            <motion.img
              whileHover={{
                scale: 1.1,
                y: -8,
              }}
              src={pair[1]}
              alt=""
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 * 0.3,
              }}
              className="
                w-20 h-20
                sm:w-24 sm:h-24
                md:w-28 md:h-28
                lg:w-32 lg:h-32
                rounded-full
                object-cover
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
