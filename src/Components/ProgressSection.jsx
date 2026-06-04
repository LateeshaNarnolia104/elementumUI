import { motion } from "framer-motion";

const ProgressSection = () => {
  return (
    <section className="relative bg-[#f5f5f5] py-24 overflow-hidden">
      {/* Curved Line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none "
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
      >
        <path
          d="M200 420 C 400 250, 650 650, 850 300 S 1100 150, 1200 300"
          fill="none"
          stroke="#ff6b6b"
          strokeWidth="3"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Row */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-light leading-tight font-heading">
              <span className="relative">
                Tomorrow
                <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400"></span>
              </span>{" "}
              should
              be better than{" "}
              <span className="bg-green-300 rounded-full px-4">today</span>
            </h2>

            <p className="mt-8 text-gray-600 max-w-md">
              We are a team of strategists, designers, communicators,
              researchers. Together, we believe that progress only happens when
              you refuse to play things safe.
            </p>

            <button className="mt-8 flex items-center gap-4">
              Read more
              <span>→</span>
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1661337152210-70d60c6c9710?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-100 h-100 rounded-full object-cover"
            />

            <div className="absolute -right-8 top-8 w-24 h-24 bg-[#ff6b6b] rotate-12"></div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-100 h-100 rounded-full object-cover"
            />

            <div
              className="
                w-0 h-0 absolute -bottom-8 right-20 border-l-60 border-r-60  border-b-100 border-l-transparent border-r-transparent border-b-[#ff6b6b]"
            ></div>

            
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="-translate-y-20 order-1 lg:order-2 bg-[#f5f5f5]"
          >
            <h2 className="text-2xl md:text-4xl font-light leading-tight font-heading">
              <span className="bg-green-300 rounded-full px-4">See</span> how we
              can
              help you progress
            </h2>

            <p className="mt-8 text-gray-600 max-w-md">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand,
              design, digital, comms and social research.
            </p>

            <button className="mt-8 flex items-center gap-4">
              Read more
              <span>→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
