import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    subtitle: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    subtitle: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    subtitle: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

const Services = () => {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6 lg:px-16 overflow-hidden">
      {/* Header */}
      <div className="relative mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          font-heading
            text-2xl
            md:text-4xl
            lg:text-[50px]
            leading-none
            font-extralight
tracking-tight
            max-w-2xl
          "
        >
          What we <span className="bg-green-300 px-4 rounded-full">can</span>
          offer you!
        </motion.h2>

        {/* Yellow underline */}
        <div className=" left-0 bottom-0">
          <div className="w-48 h-0.75 bg-yellow-400 -rotate-2" />
          <div className="w-32 h-0.75 bg-yellow-400 -rotate-6 mt-2 ml-16" />
        </div>

        {/* Curve */}
        <svg
          className="hidden lg:block absolute top-0 right-0 w-125 h-45"
          viewBox="0 0 500 180"
        >
          <path
            d="M0 160
               C50 160, 50 20, 120 20
               C250 20, 300 120, 430 100
               C470 95, 490 70, 500 40"
            fill="none"
            stroke="#ff6b6b"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Services List */}
      <div className="border-t border-gray-300">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="
              border-b
              border-gray-300
              py-8
              group
              cursor-pointer
            "
          >
            <div className="grid lg:grid-cols-[250px_1fr_80px] gap-6 items-center">
              {/* Left Text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.subtitle}
              </p>

              {/* Main Title */}
              <h3
                className="
                font-heading
                  text-xl
                  md:text-2xl
                  lg:text-4xl
                  font-light
                  group-hover:translate-x-3
                  transition-all
                  duration-300
                "
              >
                {service.title}
              </h3>

              {/* Arrow */}
              <div className="flex justify-end">
                <ArrowRight
                  size={36}
                  className="
                    group-hover:translate-x-2
                    transition-all
                    duration-300
                  "
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
