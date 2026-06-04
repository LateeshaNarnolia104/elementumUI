import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#d8ead8] relative overflow-hidden">

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative">

        {/* Decorative Arrows */}
        <svg
          className="absolute left-1/3 top-0 hidden lg:block"
          width="180"
          height="80"
          viewBox="0 0 180 80"
        >
          <path
            d="M80 0 C80 30, 20 20, 20 60"
            stroke="#ff6b6b"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M140 0 C140 30, 80 20, 80 60"
            stroke="#ff6b6b"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Purple Shape */}
        <motion.div
          animate={{ rotate: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="
            hidden lg:block
            absolute
            right-12
            top-24
            w-28
            h-28
            bg-violet-500
            rounded-l-full
          "
        />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          font-heading
            text-xl
            md:text-4xl
            lg:text-[60px]
            leading-none
            font-light
            max-w-4xl
            mx-auto
          "
        >
          Subscribe to
          <br />
          our newsletter
        </motion.h2>

        <p className="mt-6 text-gray-700">
          To make your stay special and even more memorable
        </p>

        <button
          className="
            mt-8
            bg-black
            text-white
            px-8
            py-4
            rounded-full
            hover:scale-105
            transition-all
          "
        >
          Subscribe Now
        </button>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-400"></div>

      {/* Footer Links */}
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          py-16
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-12
        "
      >
        {/* Company */}
        <div>
          <h3 className="font-heading text-sm mb-6">
            Company
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>Home</li>
            <li>Studio</li>
            <li>Service</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-heading text-sm mb-6">
            Terms & Policies
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Explore</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-heading text-sm mb-6">
            Follow Us
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-sm mb-6">
            Contact
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>
              1498w Fluton ste,
              <br />
              STE 2D Chicago
            </li>

            <li>(123) 456-789000</li>

            <li>info@elementum.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-8 text-gray-700 text-sm">
        ©2023 Elementum. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;