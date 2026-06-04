import { motion } from "framer-motion";

const people = [
  "/team/person1.avif",
  "/team/person2.avif",
  "/team/person3.avif",
  "/team/person4.avif",
  "/team/person5.avif",
  "/team/person6.avif",
];

const Testimonials = () => {
  return (
    <section className="bg-[#f5f5f5] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="
            text-2xl
            md:text-4xl
            lg:text-[60px]
            leading-none
            font-heading
            "
          >
            <span className="bg-green-300 px-4 rounded-full">
              What
            </span>{" "}
            our customer
            <br />
            says About Us
          </h2>

          <div className="flex justify-center mt-2">
            <div className="w-52 h-0.75 bg-yellow-400 -rotate-3" />
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="
            relative
            max-w-3xl
            mx-auto
            mt-16
            bg-[#edf3ed]
            rounded-[40px]
            p-10
            md:p-14
          "
        >
          <div className="text-8xl text-gray-300 absolute top-6 left-8">
            "
          </div>

          <p
            className="
            text-center
            text-lg
            md:text-xl
            text-gray-700
            leading-relaxed
          "
          >
            Elementum delivered the site within the timeline
            as they requested. In the end, the client found a
            50% increase in traffic within days since its launch.
            They also had an impressive ability to use technologies
            that the company hadn't used, which have also proved
            to be easy to use and reliable.
          </p>

          <div className="text-8xl text-gray-300 absolute bottom-0 right-8">
            "
          </div>
        </motion.div>

        {/* Left Side Images */}
        <motion.img
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          src={people[0]}
          alt=""
          className="hidden lg:block absolute left-10 top-20 w-20 h-20 rounded-full object-cover"
        />

        <motion.img
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          src={people[1]}
          alt=""
          className="hidden lg:block absolute left-0  w-12 h-12 rounded-full object-cover"
        />

        <motion.img
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          src={people[2]}
          alt=""
          className="hidden lg:block absolute left-24 top-60 w-32 h-32 rounded-full object-cover"
        />

        <motion.img
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          src={people[3]}
          alt=""
          className="hidden lg:block absolute left-0 bottom-5 w-26 h-26 rounded-full object-cover"
        />

        {/* Right Side Images */}
        <motion.img
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          src={people[4]}
          alt=""
          className="hidden lg:block absolute right-12 top-20 w-24 h-24 rounded-full object-cover"
        />

        <motion.img
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          src={people[5]}
          alt=""
          className="hidden lg:block absolute right-36  w-14 h-14 rounded-full object-cover"
        />

        <motion.img
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          src={people[2]}
          alt=""
          className="hidden lg:block absolute right-32 top-50 w-16 h-16 rounded-full object-cover"
        />

        <motion.img
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          src={people[3]}
          alt=""
          className="hidden lg:block absolute right-0 bottom-0 w-44 h-44 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default Testimonials;