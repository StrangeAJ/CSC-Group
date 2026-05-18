import React from 'react';
import { Clock, Key } from 'lucide-react';
import { motion } from 'motion/react';

export interface SlideData {
  id: string;
  category: string;
  title: string;
  content: React.ReactNode;
}

export const slides: SlideData[] = [
  {
    id: "slide-1",
    category: "Executive Summary",
    title: "Understanding The Challenge",
    content: (
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        className="space-y-4 text-[var(--foreground)] font-sans h-full flex flex-col justify-center relative z-10"
      >
        <motion.p variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-lg lg:text-xl leading-relaxed text-[var(--muted)] max-w-4xl">
          Alpha Group is a multinational enterprise across Finance, Automotive, Energy, and Real Estate. Following a <strong className="text-[var(--text-white)]">cloud-first vision</strong>, a 100% Azure migration was implemented five years ago under the direction of the Group CIO.
        </motion.p>
        <motion.div variants={{ hidden: { y: 15, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="bg-[var(--card-bg)] border-l-4 border-[var(--accent)] p-6 lg:p-8 border-y border-r border-[var(--border)] my-4 group hover:border-[var(--muted)] transition-colors relative overflow-hidden">
          <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-[var(--accent)] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-colors"></div>
          <h3 className="font-bold text-[var(--text-white)] text-xl lg:text-2xl mb-2 font-serif italic">
            The Catalyst: Critical Breaches
          </h3>
          <p className="text-[var(--muted)] text-base lg:text-lg leading-relaxed">
            Recent data breaches in the <strong className="text-[var(--text-white)]">Finance and Real Estate</strong> divisions exposed significant security weaknesses, leading to substantial regulatory penalties and reputational harm.
          </p>
        </motion.div>
        <motion.p variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-lg lg:text-xl leading-relaxed text-[var(--muted)] max-w-4xl">
          The Group CISO has commissioned a comprehensive security assessment. We are developing a detailed proposal outlining the methodology, project timeline, required resources, and associated costs.
        </motion.p>
      </motion.div>
    ),
  },
  {
    id: "slide-2",
    category: "Bidder Credentials",
    title: "Warwick Cyber Consulting",
    content: (
      <div className="space-y-4 flex flex-col h-full relative z-10">
        <p className="text-lg text-[var(--muted)] leading-relaxed max-w-4xl mb-2">
          A truly global, highly-certified partner equipped for complex, high-stakes Microsoft ecosystem engagements.
        </p>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4"
        >
          <motion.div variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="border-t border-[var(--border)] pt-3 group">
            <span className="text-3xl font-serif italic text-[var(--text-white)] block group-hover:text-[var(--accent)] transition-colors">17+</span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-bold">Years Experience</span>
          </motion.div>
          <motion.div variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="border-t border-[var(--border)] pt-3 group">
            <span className="text-3xl font-serif italic text-[var(--text-white)] block group-hover:text-[var(--accent)] transition-colors">450+</span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-bold">Global Consultants</span>
          </motion.div>
          <motion.div variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="border-t border-[var(--border)] pt-3 group">
            <span className="text-3xl font-serif italic text-[var(--text-white)] block group-hover:text-[var(--accent)] transition-colors">1.2K</span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-bold">Engagements</span>
          </motion.div>
          <motion.div variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="border-t border-[var(--border)] pt-3 group">
            <span className="text-3xl font-serif italic text-[var(--accent)] block group-hover:text-[var(--text-white)] transition-colors">95%</span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-bold">Client Retention</span>
          </motion.div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
          <div className="bg-[var(--card-bg)] p-6 lg:p-8 border border-[var(--border)] flex flex-col hover:border-[var(--muted)] transition-colors relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 text-9xl text-[var(--text-white)] opacity-5 font-serif italic group-hover:opacity-10 transition-opacity pdf-hidden">01</div>
            <h3 className="font-bold text-xl mb-4 font-serif italic text-[var(--text-white)]">Certifications & Standards</h3>
            <ul className="space-y-4 text-[var(--muted)] text-sm lg:text-base flex-grow flex flex-col justify-center">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span> ISO 27001 & SOC 2 Type II Certified</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span> PCI-DSS QSA & NIST CSF 2.0 Specialists</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span> 90%+ Consultants hold CISSP/CISM</li>
            </ul>
          </div>
          <div className="bg-[var(--card-bg)] p-6 lg:p-8 border border-[var(--border)] flex flex-col hover:border-[var(--muted)] transition-colors relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 text-9xl text-[var(--accent)] opacity-5 font-serif italic group-hover:opacity-10 transition-opacity pdf-hidden">02</div>
            <h3 className="font-bold text-xl mb-4 font-serif italic text-[var(--accent)]">Microsoft Ecosystem Authority</h3>
            <ul className="space-y-4 text-[var(--muted)] text-sm lg:text-base flex-grow flex flex-col justify-center">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] opacity-50"></span> Microsoft Solutions Partner (Security)</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] opacity-50"></span> Microsoft Intelligent Security Association</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] opacity-50"></span> Cloud Security Alliance (CSA) Members</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "slide-3",
    category: "Success Stories",
    title: "Case Study: Genesis Fin Ltd",
    content: (
      <div className="flex flex-col h-full space-y-4 relative z-10">
        <p className="text-lg text-[var(--muted)] leading-relaxed max-w-4xl">
          European Financial Services & Asset Management Firm. Overcame a critical misconfiguration breach in their Azure environment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="border-t border-[var(--border)] pt-4 group">
            <div className="text-[10px] text-[var(--muted)] uppercase tracking-widest font-bold mb-3 h-5 overflow-hidden leading-none hover-text-swap">
              <span className="block group-hover:-translate-y-5 transition-transform text-[var(--text-white)] h-5 flex items-center">The Challenge</span>
              <span className="block group-hover:-translate-y-5 transition-transform text-[var(--accent)] h-5 flex items-center">The Challenge</span>
            </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed group-hover:text-[var(--text-white)] transition-colors mt-[-10px]">Suffered data exposure due to Azure misconfigurations. Urgent need to uncover unknown vulnerabilities.</p>
          </div>
          <div className="border-t border-[var(--border)] pt-4 group">
             <div className="text-[10px] text-[var(--muted)] uppercase tracking-widest font-bold mb-3 h-5 overflow-hidden leading-none hover-text-swap">
               <span className="block group-hover:-translate-y-5 transition-transform text-[var(--text-white)] h-5 flex items-center">Our Approach</span>
               <span className="block group-hover:-translate-y-5 transition-transform text-[var(--accent)] h-5 flex items-center">Our Approach</span>
             </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed group-hover:text-[var(--text-white)] transition-colors mt-[-10px]">Conducted a deep-dive architecture review aligned to NIST CSF 2.0. Analyzed Entra ID roles.</p>
          </div>
          <div className="border-t border-[var(--accent)] pt-4 group">
             <div className="text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold mb-3 h-5 overflow-hidden leading-none hover-text-swap">
               <span className="block group-hover:-translate-y-5 transition-transform text-[var(--text-white)] h-5 flex items-center">The Results</span>
               <span className="block group-hover:-translate-y-5 transition-transform text-[#4ade80] h-5 flex items-center">The Results</span>
             </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed text-[var(--text-white)] group-hover:text-[#4ade80] transition-colors mt-[-10px]">Identified 14 critical misconfigurations. Executed remediation in 30 days. Sustained GDPR compliance.</p>
          </div>
        </div>

        <div className="mt-6 bg-[var(--card-bg)] p-6 lg:p-8 border border-[var(--border)] flex-grow flex items-center justify-center relative overflow-hidden group hover:border-[var(--muted)] transition-colors">
            <div className="absolute -left-10 -bottom-10 text-9xl text-[var(--accent)] opacity-5 font-serif font-bold italic rotate-180 pdf-hidden">"</div>
            <div className="text-center max-w-2xl relative z-10">
                <span className="text-xl lg:text-2xl font-serif italic text-[var(--text-white)] block leading-snug tracking-wide">"WCC transformed our reactive posture into an evidence-based, board-ready compliance standard."</span>
                <span className="block mt-4 text-xs text-[var(--muted)] uppercase tracking-widest font-bold">— CISO, Genesis Fin Ltd</span>
            </div>
            <div className="absolute -right-10 -top-10 text-9xl text-[var(--accent)] opacity-5 font-serif font-bold italic pdf-hidden">"</div>
        </div>
      </div>
    )
  },
  {
    id: "slide-4",
    category: "Anatomy of the Breaches",
    title: "What Failed & Why",
    content: (
      <div className="flex flex-col h-full space-y-4 relative z-10">
        <p className="text-lg lg:text-xl text-[var(--muted)] leading-relaxed max-w-4xl">
          The incidents exposed that the issue is not a lack of tooling (millions invested in SOC, Copilot), but a <strong className="text-[var(--text-white)] border-b border-[var(--accent)] pb-1">failure of controls and operational escalation</strong>.
        </p>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pb-4 flex-grow"
        >
          <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="bg-[var(--card-bg)] border border-[var(--border)] p-6 lg:p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[var(--muted)]">
            <div className="text-[10px] text-[var(--muted)] opacity-70 uppercase tracking-widest font-bold mb-3">Phase 1</div>
            <div className="font-bold text-xl mb-3 font-serif italic text-[var(--text-white)] group-hover:text-[var(--accent)] transition-colors">Initial Vector</div>
            <p className="text-[var(--muted)] text-sm lg:text-base leading-relaxed">Phishing successfully compromised credentials due to gaps in behavioral security.</p>
          </motion.div>
          <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="bg-[var(--card-bg)] border border-[var(--accent)] border-opacity-40 p-6 lg:p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,62,0,0.05)] hover:border-opacity-100">
            <div className="text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold mb-3">Phase 2</div>
            <div className="font-bold text-xl mb-3 font-serif italic text-[var(--accent)]">Exploitation</div>
            <p className="text-[var(--muted)] text-sm lg:text-base leading-relaxed">Over-privileged accounts in Entra ID allowed unauthorized access to sensitive financial files.</p>
          </motion.div>
          <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="bg-[var(--card-bg)] border border-[var(--border)] p-6 lg:p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[var(--muted)]">
            <div className="text-[10px] text-[var(--muted)] opacity-70 uppercase tracking-widest font-bold mb-3">Phase 3</div>
            <div className="font-bold text-xl mb-3 font-serif italic text-[var(--text-white)] group-hover:text-[var(--accent)] transition-colors">Lateral Movement</div>
            <p className="text-[var(--muted)] text-sm lg:text-base leading-relaxed">Attackers moved undetected. SOC alerts failed to trigger adequate business escalation.</p>
          </motion.div>
        </motion.div>
      </div>
    ),
  },
  {
    id: "slide-5",
    category: "Scope & Boundaries",
    title: "Focus of the Assessment",
    content: (
      <div className="space-y-6 flex flex-col h-full relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow"
        >
          <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="border border-[var(--border)] bg-[var(--card-bg)] p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:border-[var(--muted)] transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent)]"></div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] text-[var(--accent)] uppercase font-bold tracking-widest">In Scope</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 font-serif italic text-[var(--text-white)] group-hover:text-[var(--accent)] transition-colors">Primary Objectives</h3>
            <ul className="space-y-4 text-sm lg:text-base text-[var(--muted)] flex-grow flex flex-col justify-center relative z-10">
              <li className="flex gap-3 items-center"><span className="text-[var(--accent)]">/</span> <strong className="text-[var(--text-white)]">All Azure-hosted applications, services & workloads</strong></li>
              <li className="flex gap-3 items-center"><span className="text-[var(--accent)]">/</span> Across all divisions (Group-wide)</li>
              <li className="flex gap-3 items-center"><span className="text-[var(--accent)]">/</span> Identity & Access Management (Entra ID)</li>
              <li className="flex gap-3 items-center"><span className="text-[var(--accent)]">/</span> Microsoft 365 Phishing Controls</li>
              <li className="flex gap-3 items-center"><span className="text-[var(--accent)]">/</span> OT/Manufacturing Boundaries</li>
            </ul>
            <div className="absolute -right-16 -bottom-16 w-48 h-48 border border-[var(--accent)] opacity-20 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none pdf-hidden"></div>
          </motion.div>
          <motion.div variants={{ hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="border border-[var(--border)] bg-[var(--card-bg)] p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:border-[var(--muted)] transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--muted)] opacity-50"></div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] text-[var(--muted)] uppercase font-bold tracking-widest">Out of Scope</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 font-serif italic text-[var(--muted)] group-hover:text-[var(--text-white)] transition-colors">Exceptions</h3>
            <ul className="space-y-4 text-sm lg:text-base text-[var(--muted)] opacity-60 flex-grow flex flex-col justify-center relative z-10">
              <li className="flex gap-3 items-center"><span className="text-[var(--muted)]">—</span> Third-party dependencies</li>
              <li className="flex gap-3 items-center"><span className="text-[var(--muted)]">—</span> End-user device hardware</li>
              <li className="flex gap-3 items-center"><span className="text-[var(--muted)]">—</span> Internal Risk Analysis (post-task)</li>
            </ul>
             <div className="absolute -right-16 -bottom-16 w-48 h-48 border border-[var(--border)] rounded-full group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none"></div>
          </motion.div>
        </motion.div>
        <div className="bg-[var(--card-bg)] p-5 text-center border border-[var(--border)] group hover:border-[var(--accent)] hover:border-opacity-20 transition-colors">
           <span className="text-[var(--text-white)] font-serif italic text-lg group-hover:text-[var(--accent)] transition-colors">Strict adherence to the scope across all core divisions ensures high-fidelity results.</span>
        </div>
      </div>
    ),
  },
  {
    id: "slide-6",
    category: "Control Validation",
    title: "Finding The Blind Spots",
    content: (
      <div className="space-y-6 h-full flex flex-col relative z-10">
        <p className="text-lg lg:text-xl text-[var(--muted)] leading-relaxed max-w-4xl">
          Alpha Group has heavily invested in security capabilities, moving away from structural deficits toward <strong className="text-[var(--text-white)]">operational optimization challenges</strong>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow pb-2">
          <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:border-[var(--muted)] transition-colors">
            <div className="text-[10px] text-[var(--muted)] uppercase tracking-widest font-bold mb-4">Strengths to Leverage</div>
            <h3 className="font-bold text-2xl mb-6 font-serif italic text-[var(--text-white)] group-hover:text-[#22c55e] transition-colors">Existing Investments</h3>
            <div className="grid grid-cols-1 gap-3 flex-grow content-center z-10">
              <div className="bg-[var(--background)] p-4 flex items-center justify-between border border-[var(--border)] hover:border-[#22c55e80] transition-colors opacity-80 hover:opacity-100">
                <span className="text-[var(--muted)] text-sm lg:text-base">Functional Internal SOC</span>
                <span className="text-[#22c55e] font-mono text-[10px]">ACTIVE</span>
              </div>
              <div className="bg-[var(--background)] p-4 flex items-center justify-between border border-[var(--border)] hover:border-[#22c55e80] transition-colors opacity-80 hover:opacity-100">
                <span className="text-[var(--muted)] text-sm lg:text-base">Vulnerability Management Team</span>
                <span className="text-[#22c55e] font-mono text-[10px]">ACTIVE</span>
              </div>
              <div className="bg-[var(--background)] p-4 flex items-center justify-between border border-[var(--border)] hover:border-[#22c55e80] transition-colors opacity-80 hover:opacity-100">
                <span className="text-[var(--muted)] text-sm lg:text-base">Security Copilot Integration</span>
                <span className="text-[#22c55e] font-mono text-[10px]">ACTIVE</span>
              </div>
              <div className="bg-[var(--background)] p-4 flex items-center justify-between border border-[var(--border)] hover:border-[#22c55e80] transition-colors opacity-80 hover:opacity-100">
                <span className="text-[var(--muted)] text-sm lg:text-base">Azure Native Tooling</span>
                <span className="text-[#22c55e] font-mono text-[10px]">ACTIVE</span>
              </div>
            </div>
             <div className="absolute -left-16 -top-16 w-48 h-48 border border-[var(--border)] opacity-20 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none pdf-hidden"></div>
          </div>
          
          <div className="bg-[var(--card-bg)] border border-[var(--accent)] border-opacity-10 p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:border-opacity-100 transition-colors">
            <div className="absolute right-[-20%] bottom-[-20%] opacity-10 group-hover:opacity-20 transition-opacity rotate-12 group-hover:rotate-0 duration-700 pdf-hidden">
              <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <div className="text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold mb-4">Core Assessment Focus</div>
            <h4 className="font-bold text-2xl mb-6 font-serif italic text-[var(--text-white)] border-b border-[var(--border)] pb-2 relative overflow-hidden group/h3 hover-text-swap">
              <span className="block group-hover/h3:-translate-y-8 transition-transform h-8 flex items-center">Critical Blind Spots</span>
              <span className="block italic text-[var(--accent)] absolute bottom-[-32px] group-hover/h3:translate-y-[-40px] transition-transform font-serif h-8 flex items-center">Critical Blind Spots</span>
            </h4>
            <div className="grid grid-cols-1 gap-3 flex-grow content-center relative z-10">
              <div className="bg-[var(--background)] p-4 flex items-center justify-between border border-[var(--border)] border-l-2 border-l-[var(--accent)] shadow-sm hover:translate-x-2 transition-transform">
                <span className="text-[var(--text-white)] text-sm lg:text-base font-medium">Undetected Lateral Movement</span>
                <span className="text-[#ef4444] text-[10px] uppercase font-bold tracking-widest">High Risk</span>
              </div>
              <div className="bg-[var(--background)] p-4 flex items-center justify-between border border-[var(--border)] border-l-2 border-l-[var(--accent)] shadow-sm hover:translate-x-2 transition-transform delay-75">
                <span className="text-[var(--text-white)] text-sm lg:text-base font-medium">Permissive Identity (Entra ID)</span>
                <span className="text-[#ef4444] text-[10px] uppercase font-bold tracking-widest">High Risk</span>
              </div>
              <div className="bg-[var(--background)] p-4 flex items-center justify-between border border-[var(--border)] border-l-2 border-l-[var(--accent)] shadow-sm hover:translate-x-2 transition-transform delay-100">
                <span className="text-[var(--text-white)] text-sm lg:text-base font-medium">Azure Architecture Misconfigs</span>
                <span className="text-[#ef4444] text-[10px] uppercase font-bold tracking-widest">High Risk</span>
              </div>
              <div className="bg-[var(--background)] p-4 flex items-center justify-between border border-[var(--border)] border-l-2 border-l-[var(--accent)] shadow-sm hover:translate-x-2 transition-transform delay-150">
                <span className="text-[var(--text-white)] text-sm lg:text-base font-medium">Alert-to-Business Response Gap</span>
                <span className="text-[#ef4444] text-[10px] uppercase font-bold tracking-widest">High Risk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "slide-7",
    category: "Target Architecture",
    title: "100% Azure Estate",
    content: (
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center h-full relative z-10"
      >
        <div className="flex-1 space-y-8">
          <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
            <h3 className="font-bold text-2xl lg:text-3xl text-[var(--foreground)] font-serif italic mb-4">The Technical Complexity</h3>
            <p className="text-lg text-[var(--muted)] leading-relaxed max-w-xl">A fully migrated, Microsoft-centric ecosystem with integrated Operations Technology.</p>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="border-t border-[var(--border)] pt-4 group">
              <div className="flex items-center justify-between mb-2">
                 <div className="text-[10px] text-[var(--muted)] opacity-60 group-hover:opacity-100 transition-colors uppercase tracking-widest font-bold pdf-tracking-normal">01. Cloud Workloads</div>
                 <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] group-hover:text-[var(--text-white)] group-hover:border-[var(--muted)] transition-all pdf-marker">1</div>
              </div>
              <p className="text-base text-[var(--foreground)] group-hover:text-[var(--text-white)] transition-colors opacity-80 group-hover:opacity-100">All Azure-hosted applications, services, and workloads group-wide.</p>
            </motion.div>
            <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="border-t border-[var(--border)] pt-4 group">
              <div className="flex items-center justify-between mb-2">
                 <div className="text-[10px] text-[var(--muted)] opacity-60 group-hover:opacity-100 transition-colors uppercase tracking-widest font-bold pdf-tracking-normal">02. OT Intersection</div>
                 <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] group-hover:text-[var(--text-white)] group-hover:border-[var(--muted)] transition-all pdf-marker">2</div>
              </div>
              <p className="text-base text-[var(--foreground)] group-hover:text-[var(--text-white)] transition-colors opacity-80 group-hover:opacity-100">Cloud-connected Manufacturing and Warehousing OT boundaries.</p>
            </motion.div>
            <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="border-t border-[var(--accent)] border-opacity-10 pt-4 group">
              <div className="flex items-center justify-between mb-2">
                 <div className="text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold pdf-tracking-normal">03. Shared Responsibility</div>
                 <div className="w-8 h-8 rounded-full border border-[var(--accent)] border-opacity-30 flex items-center justify-center text-[var(--accent)] bg-[var(--accent)] bg-opacity-5 group-hover:bg-opacity-100 group-hover:text-[var(--text-black)] transition-all pdf-marker">3</div>
              </div>
              <p className="text-base text-[var(--foreground)]">Delineating security <span className="italic">OF</span> the cloud (Microsoft) and <span className="italic">IN</span> the cloud (Alpha Group).</p>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
          className="w-64 h-64 md:w-80 md:h-80 border border-[var(--border)] flex flex-col items-center justify-center rounded-sm bg-[var(--card-bg)] shrink-0 relative overflow-hidden group shadow-lg cursor-crosshair hover:border-[var(--accent)] hover:border-opacity-20 transition-colors pdf-no-gradient"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--glass)] via-transparent to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700 pdf-hidden"></div>
          <div className="text-7xl lg:text-8xl font-black mb-2 text-[var(--accent)] tracking-tighter font-serif italic relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,62,0,0.2)] pdf-no-shadow">ALL</div>
          <div className="text-xs font-medium text-[var(--muted)] uppercase tracking-widest text-center px-4 leading-relaxed relative z-10 mt-2">Cloud Infrastructure<br/>Group-Wide</div>
        </motion.div>
      </motion.div>
    ),
  },
  {
    id: "slide-8",
    category: "Governance & Operations",
    title: "Fixing The Operating Model",
    content: (
      <div className="space-y-6 h-full flex flex-col relative z-10">
        <p className="text-lg lg:text-xl text-[var(--muted)]">
          Technical flaws are symptoms; <strong className="text-[var(--text-white)] border-b border-[var(--accent)] pb-1">governance provides the cure</strong>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow pb-4">
          <div className="bg-[var(--card-bg)] p-6 lg:p-8 border border-[var(--border)] flex flex-col justify-center relative overflow-hidden group hover:border-[var(--muted)] transition-colors">
            <div className="absolute top-0 right-0 p-4 text-[var(--muted)] opacity-30 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all group-hover:rotate-45 duration-300">✦</div>
            <div className="w-8 h-1 bg-[var(--accent)] mb-5 group-hover:w-16 transition-all duration-300"></div>
            <h4 className="font-bold text-xl lg:text-2xl mb-3 font-serif italic text-[var(--text-white)] group-hover:text-[var(--accent)] transition-colors">Role Accountability</h4>
            <p className="text-[var(--muted)] text-sm lg:text-base leading-relaxed opacity-80 group-hover:opacity-100">Reviewing operating interactions between SOC, application owners, and stakeholders to eliminate fragmented silos.</p>
          </div>
          <div className="bg-[var(--card-bg)] p-6 lg:p-8 border border-[var(--border)] flex flex-col justify-center relative overflow-hidden group hover:border-[var(--muted)] transition-colors">
            <div className="absolute top-0 right-0 p-4 text-[var(--muted)] opacity-30 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all group-hover:rotate-45 duration-300">✦</div>
            <div className="w-8 h-1 bg-[var(--accent)] mb-5 group-hover:w-16 transition-all duration-300"></div>
            <h4 className="font-bold text-xl lg:text-2xl mb-3 font-serif italic text-[var(--text-white)] group-hover:text-[var(--accent)] transition-colors">Escalation Workflows</h4>
            <p className="text-[var(--muted)] text-sm lg:text-base leading-relaxed opacity-80 group-hover:opacity-100">Addressing the alert-to-response translation gap. Assuring high-priority alerts trigger business-level urgency.</p>
          </div>
          <div className="bg-[var(--card-bg)] p-6 lg:p-8 border border-[var(--border)] flex flex-col justify-center relative overflow-hidden group hover:border-[var(--muted)] transition-colors">
            <div className="absolute top-0 right-0 p-4 text-[var(--muted)] opacity-30 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all group-hover:rotate-45 duration-300">✦</div>
            <div className="w-8 h-1 bg-[var(--accent)] mb-5 group-hover:w-16 transition-all duration-300"></div>
            <h4 className="font-bold text-xl lg:text-2xl mb-3 font-serif italic text-[var(--text-white)] group-hover:text-[var(--accent)] transition-colors">Behavioral Resilience</h4>
            <p className="text-[var(--muted)] text-sm lg:text-base leading-relaxed opacity-80 group-hover:opacity-100">Targeted phishing and operational behavior programs for high-risk, privileged access holders.</p>
          </div>
          <div className="bg-[var(--card-bg)] p-6 lg:p-8 border border-[var(--border)] flex flex-col justify-center relative overflow-hidden group hover:border-[var(--muted)] transition-colors">
            <div className="absolute top-0 right-0 p-4 text-[var(--muted)] opacity-30 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all group-hover:rotate-45 duration-300">✦</div>
            <div className="w-8 h-1 bg-[var(--accent)] mb-5 group-hover:w-16 transition-all duration-300"></div>
            <h4 className="font-bold text-xl lg:text-2xl mb-3 font-serif italic text-[var(--text-white)] group-hover:text-[var(--accent)] transition-colors">OT Boundaries</h4>
            <p className="text-[var(--muted)] text-sm lg:text-base leading-relaxed opacity-80 group-hover:opacity-100">Ensuring air-tight segmentation and controls between corporate IT and manufacturing capabilities.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "slide-9",
    category: "Assessment Approach",
    title: "Methodology & Compliance",
    content: (
      <div className="space-y-6 h-full flex flex-col relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 flex-grow pb-2">
          <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 lg:p-8 flex flex-col relative group hover:border-[var(--muted)] transition-colors overflow-hidden">
            <div className="absolute -left-20 -top-20 w-48 h-48 bg-[var(--accent)] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-colors pointer-events-none pdf-hidden"></div>
            <h3 className="font-bold text-2xl mb-8 font-serif italic text-[var(--text-white)] group-hover:text-[var(--accent)] transition-colors">Framework Alignment</h3>
            <div className="flex-grow flex flex-col justify-center space-y-8 relative z-10">
              <div className="border-b border-[var(--border)] pb-6 hover:translate-x-2 transition-transform">
                <div className="flex gap-4 items-center">
                  <span className="text-4xl font-serif italic text-[var(--muted)] opacity-30 group-hover:text-[var(--accent)] group-hover:opacity-100 transition-all">01</span> 
                  <div>
                    <strong className="text-[var(--text-white)] text-lg block tracking-wide">NIST CSF 2.0</strong>
                    <span className="text-[var(--muted)] text-sm mt-1 block">Evaluating the new Govern function.</span>
                  </div>
                </div>
              </div>
              <div className="border-b border-[var(--border)] pb-6 hover:translate-x-2 transition-transform delay-75">
                <div className="flex gap-4 items-center">
                  <span className="text-4xl font-serif italic text-[var(--muted)] opacity-30 group-hover:text-[var(--accent)] group-hover:opacity-100 transition-all">02</span> 
                  <div>
                    <strong className="text-[var(--text-white)] text-lg block tracking-wide">Microsoft Cloud Sec. Benchmark</strong>
                    <span className="text-[var(--muted)] text-sm mt-1 block">Azure-specific baseline evaluations.</span>
                  </div>
                </div>
              </div>
              <div className="hover:translate-x-2 transition-transform delay-100">
                <div className="flex gap-4 items-center">
                  <span className="text-4xl font-serif italic text-[var(--muted)] opacity-30 group-hover:text-[var(--accent)] group-hover:opacity-100 transition-all">03</span> 
                  <div>
                    <strong className="text-[var(--text-white)] text-lg block tracking-wide">Regulatory Drivers</strong>
                    <span className="text-[var(--muted)] text-sm mt-1 block">GDPR, Finance regulations, OT directives.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 lg:p-8 flex flex-col relative group hover:border-[var(--muted)] transition-colors overflow-hidden">
            <h3 className="font-bold text-2xl mb-8 font-serif italic text-[var(--text-white)] group-hover:text-[var(--accent)] transition-colors">Execution Tiers</h3>
            <div className="flex-grow flex flex-col justify-center space-y-8 relative ml-3 z-10">
              <div className="absolute left-[4px] top-6 bottom-6 w-px bg-[var(--border)]"></div>
              
              <div className="relative pl-10 cursor-pointer group/tier">
                <div className="absolute left-[-2px] top-2 w-[13px] h-[13px] rounded-full bg-[var(--accent)] pdf-no-shadow pdf-marker group-hover/tier:scale-125 transition-transform"></div>
                <strong className="text-[var(--text-white)] text-xl block mb-2 tracking-wide font-serif italic">Architecture Review</strong>
                <p className="text-[var(--muted)] text-sm leading-relaxed max-w-sm group-hover/tier:text-[var(--foreground)] transition-colors">Design validation against worst-case scenarios, identifying inherent structural risks across the estate.</p>
              </div>
              <div className="relative pl-10 cursor-pointer group/tier">
                <div className="absolute left-[1px] top-2 w-[7px] h-[7px] rounded-full bg-[var(--muted)] opacity-50 pdf-marker group-hover/tier:bg-[var(--foreground)] group-hover/tier:opacity-100 group-hover/tier:scale-150 transition-all"></div>
                <strong className="text-[var(--text-white)] text-xl block mb-2 tracking-wide font-serif italic">Configuration Audits</strong>
                <p className="text-[var(--muted)] text-sm leading-relaxed max-w-sm group-hover/tier:text-[var(--foreground)] transition-colors">Deep, comprehensive sweeps of Entra ID roles, firewall rules, and compute workload posture.</p>
              </div>
              <div className="relative pl-10 cursor-pointer group/tier">
                <div className="absolute left-[1px] top-2 w-[7px] h-[7px] rounded-full bg-[var(--muted)] opacity-50 pdf-marker group-hover/tier:bg-[var(--foreground)] group-hover/tier:opacity-100 group-hover/tier:scale-150 transition-all"></div>
                <strong className="text-[var(--text-white)] text-xl block mb-2 tracking-wide font-serif italic">Process Stress-Testing</strong>
                <p className="text-[var(--muted)] text-sm leading-relaxed max-w-sm group-hover/tier:text-[var(--foreground)] transition-colors">Evaluating the SOC translation layer. Do technical alerts result in timely business action?</p>
              </div>
            </div>
             <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-[var(--accent)] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-colors pointer-events-none pdf-hidden"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "slide-10",
    category: "Engagement Logistics",
    title: "Timeline & Constraints",
    content: (
      <div className="space-y-8 h-full flex flex-col justify-center relative z-10 pb-4">
        <div className="flex bg-[var(--card-bg)] border border-[var(--border)] rounded-sm mb-6 h-32 relative overflow-hidden shadow-lg pdf-no-shadow">
          <div className="w-1/3 flex flex-col items-center justify-center p-4 border-r border-[var(--border)] bg-[var(--accent)] bg-opacity-10 hover:bg-opacity-20 transition-colors cursor-crosshair pdf-month-block active">
            <span className="text-[var(--accent)] font-bold tracking-widest uppercase text-[10px] mb-2">Month 1</span>
            <span className="text-[var(--text-white)] font-serif italic text-xl">Discovery</span>
          </div>
          <div className="w-1/3 flex flex-col items-center justify-center p-4 border-r border-[var(--border)] hover:bg-[var(--background)] transition-colors cursor-crosshair group/tm pdf-month-block">
            <span className="text-[var(--muted)] opacity-50 group-hover/tm:opacity-100 font-bold tracking-widest uppercase text-[10px] mb-2 transition-colors">Month 2</span>
            <span className="text-[var(--text-white)] font-serif italic text-xl">Assessment</span>
          </div>
          <div className="w-1/3 flex flex-col items-center justify-center p-4 hover:bg-[var(--background)] transition-colors cursor-crosshair group/tm pdf-month-block">
            <span className="text-[var(--muted)] opacity-50 group-hover/tm:opacity-100 font-bold tracking-widest uppercase text-[10px] mb-2 transition-colors">Month 3</span>
            <span className="text-[var(--text-white)] font-serif italic text-xl">Reporting</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
          <div className="bg-[var(--card-bg)] border border-[var(--border)] p-8 lg:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[var(--accent)] transition-colors pdf-no-gradient pdf-no-shadow">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--accent)] opacity-0 group-hover:opacity-5 transition-opacity pdf-hidden"></div>
            <div className="p-4 bg-[var(--background)] rounded-full mb-6 border border-[var(--border)] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 pdf-marker">
                <Clock className="w-8 h-8 text-[var(--accent)]" strokeWidth={1.5} />
            </div>
            <strong className="text-2xl text-[var(--text-white)] block mb-4 font-serif italic">Strict 3-Month Window</strong>
            <p className="text-[var(--muted)] text-sm lg:text-base leading-relaxed max-w-sm group-hover:text-[var(--foreground)] transition-colors">Timeframe is exceptionally tight. Success relies on risk-based prioritization to strike a balance between granular technical dives and broad organizational coverage.</p>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--border)] p-8 lg:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[var(--accent)] transition-colors pdf-no-gradient pdf-no-shadow">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--accent)] opacity-0 group-hover:opacity-5 transition-opacity pdf-hidden"></div>
            <div className="p-4 bg-[var(--background)] rounded-full mb-6 border border-[var(--border)] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 pdf-marker">
                <Key className="w-8 h-8 text-[var(--accent)]" strokeWidth={1.5} />
            </div>
            <strong className="text-2xl text-[var(--text-white)] block mb-4 font-serif italic">Access Requirements</strong>
            <p className="text-[var(--muted)] text-sm lg:text-base leading-relaxed max-w-sm group-hover:text-[var(--foreground)] transition-colors">Execution is fully contingent on immediate, read-only access provisions to Entra ID and precisely defined Azure root subscriptions via the InfoSec Manager.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "slide-11",
    category: "Deliverables & Roadmap",
    title: "The Final Outcomes",
    content: (
      <div className="space-y-6 h-full flex flex-col relative z-10">
        <p className="text-lg lg:text-xl text-[var(--muted)]">
          Establishing immediate assurance while laying the groundwork for a long-term maturity roadmap.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow pb-4">
          <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 lg:p-8 flex flex-col relative group hover:border-[var(--accent)] transition-all overflow-hidden justify-center hover:translate-x-2 duration-300">
            <div className="absolute top-0 right-0 p-4 text-[12px] text-[var(--muted)] opacity-30 font-mono group-hover:text-[var(--accent)] group-hover:opacity-100 transition-all">01</div>
            <h4 className="font-bold text-2xl mb-3 font-serif italic text-[var(--text-white)]">Findings Report</h4>
            <p className="text-[var(--muted)] text-base leading-relaxed group-hover:text-[var(--foreground)] transition-colors opacity-80 group-hover:opacity-100">Evidence-based explanation of the breaches, strictly cleared of irrelevant false-positives.</p>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 lg:p-8 flex flex-col relative group hover:border-[var(--accent)] transition-all overflow-hidden justify-center hover:-translate-x-2 duration-300">
            <div className="absolute top-0 right-0 p-4 text-[12px] text-[var(--muted)] opacity-30 font-mono group-hover:text-[var(--accent)] group-hover:opacity-100 transition-all">02</div>
            <h4 className="font-bold text-2xl mb-3 font-serif italic text-[var(--text-white)]">Prioritized Risk Register</h4>
            <p className="text-[var(--muted)] text-base leading-relaxed group-hover:text-[var(--foreground)] transition-colors opacity-80 group-hover:opacity-100">Findings directly linked to business impact models for straightforward Executive Board escalation.</p>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 lg:p-8 flex flex-col relative group hover:border-[var(--accent)] transition-all overflow-hidden justify-center hover:translate-x-2 duration-300">
            <div className="absolute top-0 right-0 p-4 text-[12px] text-[var(--muted)] opacity-30 font-mono group-hover:text-[var(--accent)] group-hover:opacity-100 transition-all">03</div>
            <h4 className="font-bold text-2xl mb-3 font-serif italic text-[var(--text-white)]">Remediation Roadmap</h4>
            <p className="text-[var(--muted)] text-base leading-relaxed group-hover:text-[var(--foreground)] transition-colors opacity-80 group-hover:opacity-100">Actionable short-term quick wins combined with long-term architectural fixes.</p>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 lg:p-8 flex flex-col relative group hover:border-[var(--accent)] transition-all overflow-hidden justify-center hover:-translate-x-2 duration-300">
            <div className="absolute top-0 right-0 p-4 text-[12px] text-[var(--muted)] opacity-30 font-mono group-hover:text-[var(--accent)] group-hover:opacity-100 transition-all">04</div>
            <h4 className="font-bold text-2xl mb-3 font-serif italic text-[var(--text-white)]">Operations Plan</h4>
            <p className="text-[var(--muted)] text-base leading-relaxed group-hover:text-[var(--foreground)] transition-colors opacity-80 group-hover:opacity-100">Targeted incident response enhancements and privilege behavior programs tailored to alpha group.</p>
          </div>
        </div>
      </div>
    ),
  }
];
