
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const certifications = [
  {
    number: '01',
    title: 'OCI AI Foundations',
    issuer: 'ORACLE',
    category: 'ARTIFICIAL INTELLIGENCE',
    status: 'COMPLETED',
  },
  {
    number: '02',
    title: 'OCI Generative AI Professional',
    issuer: 'ORACLE',
    category: 'GENERATIVE AI',
    status: 'COMPLETED',
  },
  {
    number: '03',
    title: 'Generative AI',
    issuer: 'TUTEDUDE',
    category: 'GENERATIVE AI',
    status: 'IN PROGRESS',
  },
  {
    number: '04',
    title: 'Career Essentials in Data Analysis',
    issuer: 'MICROSOFT & LINKEDIN',
    category: 'DATA ANALYTICS',
    status: 'COMPLETED',
  },
  {
    number: '05',
    title: 'Data Analysis with Python',
    issuer: 'IBM COGNITIVECLASS.AI',
    category: 'DATA SCIENCE',
    status: 'COMPLETED',
  },
  {
    number: '06',
    title: 'Core Java – Certificate of Excellence',
    issuer: 'SCALER',
    category: 'PROGRAMMING',
    status: 'COMPLETED',
  },
  {
    number: '07',
    title: 'Advanced SQL & MySQL',
    issuer: 'GREAT LEARNING ACADEMY',
    category: 'DATABASE MANAGEMENT',
    status: 'COMPLETED',
  },
  {
    number: '08',
    title: 'Hugging Face Agents Course',
    issuer: 'HUGGING FACE',
    category: 'AI AGENTS',
    status: 'COMPLETED',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-black text-[#E8DFD8] font-sans px-6 sm:px-12 lg:px-20 py-24 overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-[#8C6D4F]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / CREDENTIALS
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tight uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
              KNOWLEDGE.
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              PROVEN.
            </span>
          </h2>

          <p
            className="mt-6 max-w-2xl text-sm sm:text-base text-[#A8988B] font-light leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Professional certifications and continuous learning across
            Artificial Intelligence, Generative AI, Data Analytics,
            Programming and Database Technologies.
          </p>
        </motion.div>

        {/* Certification Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.number}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.25 },
              }}
              className="group relative p-6 sm:p-8 border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.12)]"
            >
              {/* Hover Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Details */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/50" />

              {/* Top Row */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37]">
                  CERTIFICATE / {cert.number}
                </span>

                <span
                  className={`text-[9px] tracking-[0.15em] px-2.5 py-1 border ${
                    cert.status === 'IN PROGRESS'
                      ? 'border-[#C99E5D]/50 text-[#C99E5D]'
                      : 'border-[#8C6D4F]/40 text-[#A8988B]'
                  }`}
                >
                  {cert.status}
                </span>
              </div>

              {/* Certificate Title */}
              <h3
                className="text-2xl sm:text-3xl text-[#F7E7C4] mb-4 leading-tight group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <p
                className="text-xs tracking-[0.2em] text-[#D4AF37] mb-5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {cert.issuer}
              </p>

              {/* Bottom Row */}
              <div className="flex items-center justify-between pt-4 border-t border-[#8C6D4F]/25">
                <span
                  className="text-[9px] sm:text-[10px] tracking-[0.15em] text-[#A8988B]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.category}
                </span>

                <span className="text-[#D4AF37] text-lg group-hover:translate-x-1 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 pt-6 border-t border-[#8C6D4F]/25 flex flex-col sm:flex-row justify-between gap-3"
        >
          <span className="text-[10px] tracking-[0.25em] text-[#A8988B]">
            CONTINUOUS LEARNING / LIFELONG GROWTH
          </span>

          <span className="text-[10px] tracking-[0.2em] text-[#D4AF37]">
            08 CREDENTIALS
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default CertificationsSection;
