
import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  status: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'MindFlow AI',
    category: 'ADAPTIVE CONVERSATIONAL AI / MULTI-AGENTS',
    status: 'IN DEVELOPMENT',
    description:
      'An AI-powered conversational assistant designed around adaptive thought understanding and context-aware interaction. Combines LLM integration, Mistral AI, Groq Api , contextual analysis, prompt engineering, and structured response validation. Its conceptual workflow is Understand → Observe → Regulate → Redirect → Act, with a focus on natural, grounded, and relevant responses.',
    githubUrl: '',
    tech: [
      'Python',
      'Groq API',
      'LLMs',
      'NLP',
      'FastAPI',
      'REST API',
      'Prompt Engineering',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    metrics: [
      { label: 'DEVELOPMENT', value: 'Since Sep 2026' },
      { label: 'AI ENGINE', value: 'GROQ API' },
      { label: 'WORKFLOW', value: 'Adaptive AI' },
    ],
  },
  {
    number: '02',
    title: 'Business Pulse AI',
    category: 'BUSINESS INTELLIGENCE / PREDICTIVE AI',
    status: 'IN DEVELOPMENT',
    description:
      'An end-to-end business intelligence and predictive analytics platform that transforms transactional data into actionable business insights. Combines RFM customer intelligence, customer risk scoring, ABC product analysis, inventory risk intelligence, revenue forecasting experiments, and sales anomaly detection. Designed to support proactive, evidence-based business decisions.',
    githubUrl: '',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'Machine Learning',
      'Matplotlib',
      'Jupyter',
      'Feature Engineering',
      'Predictive Analytics',
      'SQL',
    ],
    metrics: [
      { label: 'RETAIL RECORDS', value: '525,461' },
      { label: 'RFM CUSTOMERS', value: '4,314' },
      { label: 'ANOMALY DAYS', value: '26' },
    ],
  },
  {
    number: '03',
    title: 'Multi-Agent AI Research System',
    category: 'GENERATIVE AI / MULTI-AGENT SYSTEM',
    status: 'PROJECT',
    description:
      'An AI research automation system built around collaborative Search, Reader, Writer, and Critic agents. Uses LangChain agent orchestration and the Mistral API with a Streamlit interface to research topics, draft content, and refine reports through a coordinated multi-agent workflow.',
    githubUrl: '',
    tech: [
      'Python',
      'LangChain',
      'Streamlit',
      'Mistral API',
      'Multi-Agent AI',
      'LLMs',
      'Prompt Engineering',
    ],
    metrics: [
      { label: 'AGENTS', value: '4 Specialized' },
      { label: 'ORCHESTRATION', value: 'LangChain' },
      { label: 'INTERFACE', value: 'Streamlit' },
    ],
  },
  {
    number: '04',
    title: 'AI Video Agent with Multilingual RAG',
    category: 'RAG / MULTILINGUAL AI',
    status: 'PROJECT',
    description:
      'A Retrieval-Augmented Generation video assistant combining vector database search and LLM reasoning for context-aware video question answering. Integrates multilingual speech-to-text through the Sarvam API and response generation using the Mistral API to support voice-based queries across languages.',
    githubUrl: '',
    tech: [
      'Python',
      'RAG',
      'LLMs',
      'Vector Database',
      'Sarvam API',
      'Mistral API',
      'Speech-to-Text',
    ],
    metrics: [
      { label: 'ARCHITECTURE', value: 'RAG Pipeline' },
      { label: 'LANGUAGE', value: 'Multilingual' },
      { label: 'AI ENGINE', value: 'Mistral API' },
    ],
  },
  {
    number: '05',
    title: 'Text-to-SQL RAG Chatbot',
    category: 'GENERATIVE AI / DATABASE INTELLIGENCE',
    status: 'PROJECT',
    description:
      'An AI-powered chatbot that converts natural language questions into SQL queries and retrieves live database responses. Combines LangChain, RAG concepts, OpenAI API integration, and MySQL to make database querying accessible without requiring users to write SQL manually.',
    githubUrl: '',
    tech: [
      'Python',
      'LangChain',
      'RAG',
      'OpenAI API',
      'MySQL',
      'Streamlit',
      'SQL',
    ],
    metrics: [
      { label: 'INPUT', value: 'Natural Language' },
      { label: 'PROCESSING', value: 'Text-to-SQL' },
      { label: 'DATABASE', value: 'MySQL' },
    ],
  },
  {
    number: '06',
    title: 'AI Data Analysis Agent',
    category: 'AI / DATA ANALYTICS AUTOMATION',
    status: 'PROJECT',
    description:
      'An LLM-powered data analysis agent that generates Python analytics code and visualizations from plain-English questions. Integrates Groq API, LangChain, Pandas, and Streamlit to simplify exploratory data analysis and reduce manual analytical effort.',
    githubUrl: '',
    tech: [
      'Python',
      'LLMs',
      'Groq API',
      'LangChain',
      'Pandas',
      'Streamlit',
      'Data Visualization',
    ],
    metrics: [
      { label: 'INPUT', value: 'Natural Language' },
      { label: 'ENGINE', value: 'Groq + LangChain' },
      { label: 'OUTPUT', value: 'Code & Charts' },
    ],
  },
  {
    number: '07',
    title: 'Equity Research Analyst Agent',
    category: 'GENERATIVE AI / FINANCIAL RESEARCH',
    status: 'PROJECT',
    description:
      'An AI-powered equity research assistant designed to generate structured research reports and financial projections. Uses LangChain and OpenAI API automation to support financial research workflows and organize analytical insights into CA-style reports.',
    githubUrl: '',
    tech: [
      'Python',
      'LangChain',
      'OpenAI API',
      'Generative AI',
      'Prompt Engineering',
      'Financial Analysis',
    ],
    metrics: [
      { label: 'AI ENGINE', value: 'OpenAI API' },
      { label: 'FRAMEWORK', value: 'LangChain' },
      { label: 'OUTPUT', value: 'Research Reports' },
    ],
  },
  {
    number: '08',
    title: 'AI Doctor – Voice Symptom Analyzer',
    category: 'VOICE AI / LLM APPLICATION',
    status: 'PROJECT',
    description:
      'A voice-enabled symptom information assistant using a multi-API pipeline. Combines speech input, Groq LLM processing, and ElevenLabs text-to-speech to deliver conversational voice responses. Designed as an informational AI application, not a medical diagnostic substitute.',
    githubUrl: '',
    tech: [
      'Python',
      'Groq API',
      'ElevenLabs API',
      'LLMs',
      'Speech Processing',
      'Text-to-Speech',
    ],
    metrics: [
      { label: 'PIPELINE', value: 'Voice AI' },
      { label: 'LLM', value: 'Groq API' },
      { label: 'VOICE', value: 'ElevenLabs' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            A selection of AI, machine learning, and data-driven systems
            designed to solve meaningful real-world problems.
          </p>
        </motion.div>

        {/* Cinematic Project Stack */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">

                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Background Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Project Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                  {/* Left Column */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <span className="inline-block mb-5 px-3 py-1 border border-[#D4AF37]/40 text-[#D4AF37] text-[9px] tracking-[0.2em] uppercase font-mono">
                        {project.status}
                      </span>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // PROJECT HIGHLIGHTS
                      </span>

                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between gap-3"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4] text-right">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>VIEW ON GITHUB</span>
                        <span className="text-xs">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectsSection;
