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
        className="space-y-4 text-[#E5E5E5] font-sans h-full flex flex-col justify-center relative z-10"
      >
        <motion.p variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-lg lg:text-xl leading-relaxed text-[#BBB] max-w-4xl">
          Alpha Group is a multinational enterprise across Finance, Automotive, Energy, and Real Estate. Following a <strong className="text-[#FFFFFF]">cloud-first vision</strong>, a 100% Azure migration was implemented five years ago under the direction of the Group CIO.
        </motion.p>
        <motion.div variants={{ hidden: { y: 15, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="bg-[#151515] border-l-4 border-[#FF3E00] p-6 lg:p-8 border-y border-r border-[#2A2A2A] my-4 group hover:border-[#444] transition-colors relative overflow-hidden">
          <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-[#FF3E000D] rounded-full blur-2xl group-hover:bg-[#FF3E001A] transition-colors"></div>
          <h3 className="font-bold text-[#FFFFFF] text-xl lg:text-2xl mb-2 font-serif italic">
            The Catalyst: Critical Breaches
          </h3>
          <p className="text-[#BBB] text-base lg:text-lg leading-relaxed">
            Recent data breaches in the <strong className="text-[#FFFFFF]">Finance and Real Estate</strong> divisions exposed significant security weaknesses, leading to substantial regulatory penalties and reputational harm.
          </p>
        </motion.div>
        <motion.p variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-lg lg:text-xl leading-relaxed text-[#BBB] max-w-4xl">
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
        <p className="text-lg text-[#BBB] leading-relaxed max-w-4xl mb-2">
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
          <motion.div variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="border-t border-[#2A2A2A] pt-3 group">
            <span className="text-3xl font-serif italic text-[#FFFFFF] block group-hover:text-[#FF3E00] transition-colors">17+</span>
            <span className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Years Experience</span>
          </motion.div>
          <motion.div variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="border-t border-[#2A2A2A] pt-3 group">
            <span className="text-3xl font-serif italic text-[#FFFFFF] block group-hover:text-[#FF3E00] transition-colors">450+</span>
            <span className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Global Consultants</span>
          </motion.div>
          <motion.div variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="border-t border-[#2A2A2A] pt-3 group">
            <span className="text-3xl font-serif italic text-[#FFFFFF] block group-hover:text-[#FF3E00] transition-colors">1.2K</span>
            <span className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Engagements</span>
          </motion.div>
          <motion.div variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="border-t border-[#2A2A2A] pt-3 group">
            <span className="text-3xl font-serif italic text-[#FF3E00] block group-hover:text-[#FFFFFF] transition-colors">95%</span>
            <span className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Client Retention</span>
          </motion.div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
          <div className="bg-[#111] p-6 lg:p-8 border border-[#222] flex flex-col hover:border-[#555] transition-colors relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 text-9xl text-[#FFF] opacity-5 font-serif italic group-hover:opacity-10 transition-opacity">01</div>
            <h3 className="font-bold text-xl mb-4 font-serif italic text-[#FFFFFF]">Certifications & Standards</h3>
            <ul className="space-y-4 text-[#BBB] text-sm lg:text-base flex-grow flex flex-col justify-center">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#FF3E00]"></span> ISO 27001 & SOC 2 Type II Certified</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#FF3E00]"></span> PCI-DSS QSA & NIST CSF 2.0 Specialists</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#FF3E00]"></span> 90%+ Consultants hold CISSP/CISM</li>
            </ul>
          </div>
          <div className="bg-[#111] p-6 lg:p-8 border border-[#222] flex flex-col hover:border-[#555] transition-colors relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 text-9xl text-[#FF3E00] opacity-5 font-serif italic group-hover:opacity-10 transition-opacity">02</div>
            <h3 className="font-bold text-xl mb-4 font-serif italic text-[#FF3E00]">Microsoft Ecosystem Authority</h3>
            <ul className="space-y-4 text-[#BBB] text-sm lg:text-base flex-grow flex flex-col justify-center">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#666]"></span> Microsoft Solutions Partner (Security)</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#666]"></span> Microsoft Intelligent Security Association</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#666]"></span> Cloud Security Alliance (CSA) Members</li>
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
        <p className="text-lg text-[#BBB] leading-relaxed max-w-4xl">
          European Financial Services & Asset Management Firm. Overcame a critical misconfiguration breach in their Azure environment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="border-t border-[#2A2A2A] pt-4 group">
            <div className="text-[10px] text-[#555] uppercase tracking-widest font-bold mb-3 h-4 overflow-hidden">
              <span className="block group-hover:-translate-y-4 transition-transform text-[#FFFFFF]">The Challenge</span>
              <span className="block group-hover:-translate-y-4 transition-transform text-[#FF3E00]">The Challenge</span>
            </div>
            <p className="text-[#BBB] text-sm leading-relaxed group-hover:text-[#FFF] transition-colors mt-[-10px]">Suffered data exposure due to Azure misconfigurations. Urgent need to uncover unknown vulnerabilities.</p>
          </div>
          <div className="border-t border-[#2A2A2A] pt-4 group">
             <div className="text-[10px] text-[#555] uppercase tracking-widest font-bold mb-3 h-4 overflow-hidden">
               <span className="block group-hover:-translate-y-4 transition-transform text-[#FFFFFF]">Our Approach</span>
               <span className="block group-hover:-translate-y-4 transition-transform text-[#FF3E00]">Our Approach</span>
             </div>
            <p className="text-[#BBB] text-sm leading-relaxed group-hover:text-[#FFF] transition-colors mt-[-10px]">Conducted a deep-dive architecture review aligned to NIST CSF 2.0. Analyzed Entra ID roles.</p>
          </div>
          <div className="border-t border-[#FF3E00] pt-4 group">
             <div className="text-[10px] text-[#FF3E00] uppercase tracking-widest font-bold mb-3 h-4 overflow-hidden">
               <span className="block group-hover:-translate-y-4 transition-transform text-[#FFFFFF]">The Results</span>
               <span className="block group-hover:-translate-y-4 transition-transform text-[#4ade80]">The Results</span>
             </div>
            <p className="text-[#BBB] text-sm leading-relaxed text-[#FFFFFF] group-hover:text-[#4ade80] transition-colors mt-[-10px]">Identified 14 critical misconfigurations. Executed remediation in 30 days. Sustained GDPR compliance.</p>
          </div>
        </div>

        <div className="mt-6 bg-[#111] p-6 lg:p-8 border border-[#222] flex-grow flex items-center justify-center relative overflow-hidden group hover:border-[#444] transition-colors">
            <div className="absolute -left-10 -bottom-10 text-9xl text-[#FF3E000D] font-serif font-bold italic rotate-180">"</div>
            <div className="text-center max-w-2xl relative z-10">
                <span className="text-xl lg:text-2xl font-serif italic text-[#FFFFFF] block leading-snug tracking-wide">"WCC transformed our reactive posture into an evidence-based, board-ready compliance standard."</span>
                <span className="block mt-4 text-xs text-[#888] uppercase tracking-widest font-bold">— CISO, Genesis Fin Ltd</span>
            </div>
            <div className="absolute -right-10 -top-10 text-9xl text-[#FF3E000D] font-serif font-bold italic">"</div>
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
        <p className="text-lg lg:text-xl text-[#BBB] leading-relaxed max-w-4xl">
          The incidents exposed that the issue is not a lack of tooling (millions invested in SOC, Copilot), but a <strong className="text-[#FFFFFF] border-b border-[#FF3E00] pb-1">failure of controls and operational escalation</strong>.
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
          <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="bg-[#111] border border-[#2A2A2A] p-6 lg:p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#555]">
            <div className="text-[10px] text-[#555] uppercase tracking-widest font-bold mb-3">Phase 1</div>
            <div className="font-bold text-xl mb-3 font-serif italic text-[#FFFFFF] group-hover:text-[#FF3E00] transition-colors">Initial Vector</div>
            <p className="text-[#888] text-sm lg:text-base leading-relaxed">Phishing successfully compromised credentials due to gaps in behavioral security.</p>
          </motion.div>
          <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="bg-[#1A1111] border border-[#FF3E004D] p-6 lg:p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,62,0,0.05)] hover:border-[#FF3E0099]">
            <div className="text-[10px] text-[#FF3E00] uppercase tracking-widest font-bold mb-3">Phase 2</div>
            <div className="font-bold text-xl mb-3 font-serif italic text-[#FF3E00]">Exploitation</div>
            <p className="text-[#888] text-sm lg:text-base leading-relaxed">Over-privileged accounts in Entra ID allowed unauthorized access to sensitive financial files.</p>
          </motion.div>
          <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="bg-[#111] border border-[#2A2A2A] p-6 lg:p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#555]">
            <div className="text-[10px] text-[#555] uppercase tracking-widest font-bold mb-3">Phase 3</div>
            <div className="font-bold text-xl mb-3 font-serif italic text-[#FFFFFF] group-hover:text-[#FF3E00] transition-colors">Lateral Movement</div>
            <p className="text-[#888] text-sm lg:text-base leading-relaxed">Attackers moved undetected. SOC alerts failed to trigger adequate business escalation.</p>
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
          <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="border border-[#222] bg-[#111] p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:border-[#555] transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF3E00]"></div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] text-[#FF3E00] uppercase font-bold tracking-widest">In Scope</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 font-serif italic text-[#FFFFFF] group-hover:text-[#FF3E00] transition-colors">Primary Objectives</h3>
            <ul className="space-y-4 text-sm lg:text-base text-[#BBB] flex-grow flex flex-col justify-center relative z-10">
              <li className="flex gap-3 items-center"><span className="text-[#FF3E00]">/</span> <strong className="text-[#FFFFFF]">All Azure-hosted applications, services & workloads</strong></li>
              <li className="flex gap-3 items-center"><span className="text-[#FF3E00]">/</span> Across all divisions (Group-wide)</li>
              <li className="flex gap-3 items-center"><span className="text-[#FF3E00]">/</span> Identity & Access Management (Entra ID)</li>
              <li className="flex gap-3 items-center"><span className="text-[#FF3E00]">/</span> Microsoft 365 Phishing Controls</li>
              <li className="flex gap-3 items-center"><span className="text-[#FF3E00]">/</span> OT/Manufacturing Boundaries</li>
            </ul>
            <div className="absolute -right-16 -bottom-16 w-48 h-48 border border-[#FF3E0033] rounded-full group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none"></div>
          </motion.div>
          <motion.div variants={{ hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="border border-[#222] bg-[#111] p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:border-[#555] transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#444]"></div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] text-[#888] uppercase font-bold tracking-widest">Out of Scope</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 font-serif italic text-[#888] group-hover:text-[#FFFFFF] transition-colors">Exceptions</h3>
            <ul className="space-y-4 text-sm lg:text-base text-[#666] flex-grow flex flex-col justify-center relative z-10">
              <li className="flex gap-3 items-center"><span className="text-[#444]">—</span> Third-party dependencies</li>
              <li className="flex gap-3 items-center"><span className="text-[#444]">—</span> End-user device hardware</li>
              <li className="flex gap-3 items-center"><span className="text-[#444]">—</span> Internal Risk Analysis (post-task)</li>
            </ul>
             <div className="absolute -right-16 -bottom-16 w-48 h-48 border border-[#333] rounded-full group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none"></div>
          </motion.div>
        </motion.div>
        <div className="bg-[#151515] p-5 text-center border border-[#2A2A2A] group hover:border-[#FF3E001A] transition-colors">
           <span className="text-[#FFFFFF] font-serif italic text-lg group-hover:text-[#FF3E00] transition-colors">Strict adherence to the scope across all core divisions ensures high-fidelity results.</span>
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
        <p className="text-lg lg:text-xl text-[#BBB] leading-relaxed max-w-4xl">
          Alpha Group has heavily invested in security capabilities, moving away from structural deficits toward <strong className="text-[#FFFFFF]">operational optimization challenges</strong>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow pb-2">
          <div className="bg-[#111] border border-[#222] p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:border-[#555] transition-colors">
            <div className="text-[10px] text-[#888] uppercase tracking-widest font-bold mb-4">Strengths to Leverage</div>
            <h3 className="font-bold text-2xl mb-6 font-serif italic text-[#FFFFFF] group-hover:text-[#22c55e] transition-colors">Existing Investments</h3>
            <div className="grid grid-cols-1 gap-3 flex-grow content-center z-10">
              <div className="bg-[#1A1A1A] p-4 flex items-center justify-between border border-[#2A2A2A] hover:border-[#22c55e80] transition-colors">
                <span className="text-[#BBB] text-sm lg:text-base">Functional Internal SOC</span>
                <span className="text-[#22c55e] font-mono text-[10px]">ACTIVE</span>
              </div>
              <div className="bg-[#1A1A1A] p-4 flex items-center justify-between border border-[#2A2A2A] hover:border-[#22c55e80] transition-colors">
                <span className="text-[#BBB] text-sm lg:text-base">Vulnerability Management Team</span>
                <span className="text-[#22c55e] font-mono text-[10px]">ACTIVE</span>
              </div>
              <div className="bg-[#1A1A1A] p-4 flex items-center justify-between border border-[#2A2A2A] hover:border-[#22c55e80] transition-colors">
                <span className="text-[#BBB] text-sm lg:text-base">Security Copilot Integration</span>
                <span className="text-[#22c55e] font-mono text-[10px]">ACTIVE</span>
              </div>
              <div className="bg-[#1A1A1A] p-4 flex items-center justify-between border border-[#2A2A2A] hover:border-[#22c55e80] transition-colors">
                <span className="text-[#BBB] text-sm lg:text-base">Azure Native Tooling</span>
                <span className="text-[#22c55e] font-mono text-[10px]">ACTIVE</span>
              </div>
            </div>
             <div className="absolute -left-16 -top-16 w-48 h-48 border border-[#2A2A2A] rounded-full group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none"></div>
          </div>
          
          <div className="bg-[#111] border border-[#FF3E001A] p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:border-[#FF3E00] transition-colors">
            <div className="absolute right-[-20%] bottom-[-20%] opacity-10 group-hover:opacity-20 transition-opacity rotate-12 group-hover:rotate-0 duration-700">
              <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="#FF3E00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <div className="text-[10px] text-[#FF3E00] uppercase tracking-widest font-bold mb-4">Core Assessment Focus</div>
            <h4 className="font-bold text-2xl mb-6 font-serif italic text-[#FFFFFF] border-b border-[#2A2A2A] pb-2 relative overflow-hidden group/h3">
              <span className="block group-hover/h3:-translate-y-8 transition-transform">Critical Blind Spots</span>
              <span className="block italic text-[#FF3E00] absolute bottom-[-32px] group-hover/h3:translate-y-[-40px] transition-transform font-serif">Critical Blind Spots</span>
            </h4>
            <div className="grid grid-cols-1 gap-3 flex-grow content-center relative z-10">
              <div className="bg-[#222] p-4 flex items-center justify-between border border-[#333] border-l-2 border-l-[#FF3E00] shadow-sm hover:translate-x-2 transition-transform">
                <span className="text-[#FFFFFF] text-sm lg:text-base">Undetected Lateral Movement</span>
                <span className="text-[#ef4444] text-[10px] uppercase font-bold tracking-widest">High Risk</span>
              </div>
              <div className="bg-[#222] p-4 flex items-center justify-between border border-[#333] border-l-2 border-l-[#FF3E00] shadow-sm hover:translate-x-2 transition-transform delay-75">
                <span className="text-[#FFFFFF] text-sm lg:text-base">Permissive Identity (Entra ID)</span>
                <span className="text-[#ef4444] text-[10px] uppercase font-bold tracking-widest">High Risk</span>
              </div>
              <div className="bg-[#222] p-4 flex items-center justify-between border border-[#333] border-l-2 border-l-[#FF3E00] shadow-sm hover:translate-x-2 transition-transform delay-100">
                <span className="text-[#FFFFFF] text-sm lg:text-base">Azure Architecture Misconfigs</span>
                <span className="text-[#ef4444] text-[10px] uppercase font-bold tracking-widest">High Risk</span>
              </div>
              <div className="bg-[#222] p-4 flex items-center justify-between border border-[#333] border-l-2 border-l-[#FF3E00] shadow-sm hover:translate-x-2 transition-transform delay-150">
                <span className="text-[#FFFFFF] text-sm lg:text-base">Alert-to-Business Response Gap</span>
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
            <h3 className="font-bold text-2xl lg:text-3xl text-[#FFFFFF] font-serif italic mb-4">The Technical Complexity</h3>
            <p className="text-lg text-[#BBB] leading-relaxed max-w-xl">A fully migrated, Microsoft-centric ecosystem with integrated Operations Technology.</p>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="border-t border-[#2A2A2A] pt-4 group">
              <div className="flex items-center justify-between mb-2">
                 <div className="text-[10px] text-[#555] group-hover:text-[#888] transition-colors uppercase tracking-widest font-bold">01. Cloud Workloads</div>
                 <div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-[#555] group-hover:text-[#FFFFFF] group-hover:border-[#FFFFFF] transition-all">1</div>
              </div>
              <p className="text-base text-[#E5E5E5] group-hover:text-[#FFFFFF] transition-colors">All Azure-hosted applications, services, and workloads group-wide.</p>
            </motion.div>
            <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="border-t border-[#2A2A2A] pt-4 group">
              <div className="flex items-center justify-between mb-2">
                 <div className="text-[10px] text-[#555] group-hover:text-[#888] transition-colors uppercase tracking-widest font-bold">02. OT Intersection</div>
                 <div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-[#555] group-hover:text-[#FFFFFF] group-hover:border-[#FFFFFF] transition-all">2</div>
              </div>
              <p className="text-base text-[#E5E5E5] group-hover:text-[#FFFFFF] transition-colors">Cloud-connected Manufacturing and Warehousing OT boundaries.</p>
            </motion.div>
            <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="border-t border-[#FF3E001A] pt-4 group">
              <div className="flex items-center justify-between mb-2">
                 <div className="text-[10px] text-[#FF3E00] uppercase tracking-widest font-bold">03. Shared Responsibility</div>
                 <div className="w-8 h-8 rounded-full border border-[#FF3E004D] flex items-center justify-center text-[#FF3E00] bg-[#FF3E001A] group-hover:bg-[#FF3E00] group-hover:text-[#FFFFFF] transition-all">3</div>
              </div>
              <p className="text-base text-[#E5E5E5]">Delineating security <span className="italic">OF</span> the cloud (Microsoft) and <span className="italic">IN</span> the cloud (Alpha Group).</p>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
          className="w-64 h-64 md:w-80 md:h-80 border border-[#333] flex flex-col items-center justify-center rounded-sm bg-[#111] shrink-0 relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-crosshair hover:border-[#FF3E001A] transition-colors"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF3E0033] via-[#111] to-[#111] opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="text-7xl lg:text-8xl font-black mb-2 text-[#FF3E00] tracking-tighter font-serif italic relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,62,0,0.4)]">ALL</div>
          <div className="text-xs font-medium text-[#c0c0c0] uppercase tracking-widest text-center px-4 leading-relaxed relative z-10 mt-2">Cloud Infrastructure<br/>Group-Wide</div>
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
        <p className="text-lg lg:text-xl text-[#BBB]">
          Technical flaws are symptoms; <strong className="text-[#FFFFFF] border-b border-[#FF3E00] pb-1">governance provides the cure</strong>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow pb-4">
          <div className="bg-[#111] p-6 lg:p-8 border border-[#222] flex flex-col justify-center relative overflow-hidden group hover:border-[#555] transition-colors">
            <div className="absolute top-0 right-0 p-4 text-[#333] opacity-50 group-hover:opacity-100 group-hover:text-[#FF3E00] transition-colors group-hover:rotate-45 duration-300">✦</div>
            <div className="w-8 h-1 bg-[#FF3E00] mb-5 group-hover:w-16 transition-all duration-300"></div>
            <h4 className="font-bold text-xl lg:text-2xl mb-3 font-serif italic text-[#FFFFFF] group-hover:text-[#FF3E00] transition-colors">Role Accountability</h4>
            <p className="text-[#888] text-sm lg:text-base leading-relaxed">Reviewing operating interactions between SOC, application owners, and stakeholders to eliminate fragmented silos.</p>
          </div>
          <div className="bg-[#111] p-6 lg:p-8 border border-[#222] flex flex-col justify-center relative overflow-hidden group hover:border-[#555] transition-colors">
            <div className="absolute top-0 right-0 p-4 text-[#333] opacity-50 group-hover:opacity-100 group-hover:text-[#FF3E00] transition-colors group-hover:rotate-45 duration-300">✦</div>
            <div className="w-8 h-1 bg-[#FF3E00] mb-5 group-hover:w-16 transition-all duration-300"></div>
            <h4 className="font-bold text-xl lg:text-2xl mb-3 font-serif italic text-[#FFFFFF] group-hover:text-[#FF3E00] transition-colors">Escalation Workflows</h4>
            <p className="text-[#888] text-sm lg:text-base leading-relaxed">Addressing the alert-to-response translation gap. Assuring high-priority alerts trigger business-level urgency.</p>
          </div>
          <div className="bg-[#111] p-6 lg:p-8 border border-[#222] flex flex-col justify-center relative overflow-hidden group hover:border-[#555] transition-colors">
            <div className="absolute top-0 right-0 p-4 text-[#333] opacity-50 group-hover:opacity-100 group-hover:text-[#FF3E00] transition-colors group-hover:rotate-45 duration-300">✦</div>
            <div className="w-8 h-1 bg-[#FF3E00] mb-5 group-hover:w-16 transition-all duration-300"></div>
            <h4 className="font-bold text-xl lg:text-2xl mb-3 font-serif italic text-[#FFFFFF] group-hover:text-[#FF3E00] transition-colors">Behavioral Resilience</h4>
            <p className="text-[#888] text-sm lg:text-base leading-relaxed">Targeted phishing and operational behavior programs for high-risk, privileged access holders.</p>
          </div>
          <div className="bg-[#111] p-6 lg:p-8 border border-[#222] flex flex-col justify-center relative overflow-hidden group hover:border-[#555] transition-colors">
            <div className="absolute top-0 right-0 p-4 text-[#333] opacity-50 group-hover:opacity-100 group-hover:text-[#FF3E00] transition-colors group-hover:rotate-45 duration-300">✦</div>
            <div className="w-8 h-1 bg-[#FF3E00] mb-5 group-hover:w-16 transition-all duration-300"></div>
            <h4 className="font-bold text-xl lg:text-2xl mb-3 font-serif italic text-[#FFFFFF] group-hover:text-[#FF3E00] transition-colors">OT Boundaries</h4>
            <p className="text-[#888] text-sm lg:text-base leading-relaxed">Ensuring air-tight segmentation and controls between corporate IT and manufacturing capabilities.</p>
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
          <div className="bg-[#111] border border-[#2A2A2A] p-6 lg:p-8 flex flex-col relative group hover:border-[#555] transition-colors overflow-hidden">
            <div className="absolute -left-20 -top-20 w-48 h-48 bg-[#FF3E000D] rounded-full blur-2xl group-hover:bg-[#FF3E001A] transition-colors pointer-events-none"></div>
            <h3 className="font-bold text-2xl mb-8 font-serif italic text-[#FFFFFF] group-hover:text-[#FF3E00] transition-colors">Framework Alignment</h3>
            <div className="flex-grow flex flex-col justify-center space-y-8 relative z-10">
              <div className="border-b border-[#222] pb-6 hover:translate-x-2 transition-transform">
                <div className="flex gap-4 items-center">
                  <span className="text-4xl font-serif italic text-[#444] group-hover:text-[#FF3E00] transition-colors">01</span> 
                  <div>
                    <strong className="text-[#FFFFFF] text-lg block tracking-wide">NIST CSF 2.0</strong>
                    <span className="text-[#888] text-sm mt-1 block">Evaluating the new Govern function.</span>
                  </div>
                </div>
              </div>
              <div className="border-b border-[#222] pb-6 hover:translate-x-2 transition-transform delay-75">
                <div className="flex gap-4 items-center">
                  <span className="text-4xl font-serif italic text-[#444] group-hover:text-[#FF3E00] transition-colors">02</span> 
                  <div>
                    <strong className="text-[#FFFFFF] text-lg block tracking-wide">Microsoft Cloud Sec. Benchmark</strong>
                    <span className="text-[#888] text-sm mt-1 block">Azure-specific baseline evaluations.</span>
                  </div>
                </div>
              </div>
              <div className="hover:translate-x-2 transition-transform delay-100">
                <div className="flex gap-4 items-center">
                  <span className="text-4xl font-serif italic text-[#444] group-hover:text-[#FF3E00] transition-colors">03</span> 
                  <div>
                    <strong className="text-[#FFFFFF] text-lg block tracking-wide">Regulatory Drivers</strong>
                    <span className="text-[#888] text-sm mt-1 block">GDPR, Finance regulations, OT directives.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111] border border-[#2A2A2A] p-6 lg:p-8 flex flex-col relative group hover:border-[#555] transition-colors overflow-hidden">
            <h3 className="font-bold text-2xl mb-8 font-serif italic text-[#FFFFFF] group-hover:text-[#FF3E00] transition-colors">Execution Tiers</h3>
            <div className="flex-grow flex flex-col justify-center space-y-8 relative ml-3 z-10">
              <div className="absolute left-[4px] top-6 bottom-6 w-px bg-[#333]"></div>
              
              <div className="relative pl-10 cursor-pointer group/tier">
                <div className="absolute left-[-2px] top-2 w-[13px] h-[13px] rounded-full bg-[#FF3E00] shadow-[0_0_12px_rgba(255,62,0,0.6)] group-hover/tier:scale-125 transition-transform"></div>
                <strong className="text-[#FFFFFF] text-xl block mb-2 tracking-wide font-serif italic">Architecture Review</strong>
                <p className="text-[#888] text-sm leading-relaxed max-w-sm group-hover/tier:text-[#BBB] transition-colors">Design validation against worst-case scenarios, identifying inherent structural risks across the estate.</p>
              </div>
              <div className="relative pl-10 cursor-pointer group/tier">
                <div className="absolute left-[1px] top-2 w-[7px] h-[7px] rounded-full bg-[#666] group-hover/tier:bg-[#FFF] group-hover/tier:scale-150 transition-all"></div>
                <strong className="text-[#FFFFFF] text-xl block mb-2 tracking-wide font-serif italic">Configuration Audits</strong>
                <p className="text-[#888] text-sm leading-relaxed max-w-sm group-hover/tier:text-[#BBB] transition-colors">Deep, comprehensive sweeps of Entra ID roles, firewall rules, and compute workload posture.</p>
              </div>
              <div className="relative pl-10 cursor-pointer group/tier">
                <div className="absolute left-[1px] top-2 w-[7px] h-[7px] rounded-full bg-[#666] group-hover/tier:bg-[#FFF] group-hover/tier:scale-150 transition-all"></div>
                <strong className="text-[#FFFFFF] text-xl block mb-2 tracking-wide font-serif italic">Process Stress-Testing</strong>
                <p className="text-[#888] text-sm leading-relaxed max-w-sm group-hover/tier:text-[#BBB] transition-colors">Evaluating the SOC translation layer. Do technical alerts result in timely business action?</p>
              </div>
            </div>
             <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-[#FF3E000D] rounded-full blur-2xl group-hover:bg-[#FF3E001A] transition-colors pointer-events-none"></div>
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
        <div className="flex bg-[#111] border border-[#2A2A2A] rounded-sm mb-6 h-32 relative overflow-hidden shadow-lg">
          <div className="w-1/3 flex flex-col items-center justify-center p-4 border-r border-[#2A2A2A] bg-[#FF3E001A] hover:bg-[#FF3E0033] transition-colors cursor-crosshair">
            <span className="text-[#FF3E00] font-bold tracking-widest uppercase text-[10px] mb-2">Month 1</span>
            <span className="text-[#FFFFFF] font-serif italic text-xl">Discovery</span>
          </div>
          <div className="w-1/3 flex flex-col items-center justify-center p-4 border-r border-[#2A2A2A] hover:bg-[#222] transition-colors cursor-crosshair">
            <span className="text-[#888] font-bold tracking-widest uppercase text-[10px] mb-2 hover:text-[#FFF] transition-colors">Month 2</span>
            <span className="text-[#FFFFFF] font-serif italic text-xl">Assessment</span>
          </div>
          <div className="w-1/3 flex flex-col items-center justify-center p-4 hover:bg-[#222] transition-colors cursor-crosshair">
            <span className="text-[#888] font-bold tracking-widest uppercase text-[10px] mb-2 hover:text-[#FFF] transition-colors">Month 3</span>
            <span className="text-[#FFFFFF] font-serif italic text-xl">Reporting</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
          <div className="bg-[#151515] border border-[#222] p-8 lg:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[#FF3E00] transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#FF3E000D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-4 bg-[#1A1A1A] rounded-full mb-6 border border-[#333] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                <Clock className="w-8 h-8 text-[#FF3E00]" strokeWidth={1.5} />
            </div>
            <strong className="text-2xl text-[#FFFFFF] block mb-4 font-serif italic">Strict 3-Month Window</strong>
            <p className="text-[#888] text-sm lg:text-base leading-relaxed max-w-sm group-hover:text-[#BBB] transition-colors">Timeframe is exceptionally tight. Success relies on risk-based prioritization to strike a balance between granular technical dives and broad organizational coverage.</p>
          </div>
          <div className="bg-[#151515] border border-[#222] p-8 lg:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[#FF3E00] transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#FF3E000D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-4 bg-[#1A1A1A] rounded-full mb-6 border border-[#333] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                <Key className="w-8 h-8 text-[#FF3E00]" strokeWidth={1.5} />
            </div>
            <strong className="text-2xl text-[#FFFFFF] block mb-4 font-serif italic">Access Requirements</strong>
            <p className="text-[#888] text-sm lg:text-base leading-relaxed max-w-sm group-hover:text-[#BBB] transition-colors">Execution is fully contingent on immediate, read-only access provisions to Entra ID and precisely defined Azure root subscriptions via the InfoSec Manager.</p>
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
        <p className="text-lg lg:text-xl text-[#BBB]">
          Establishing immediate assurance while laying the groundwork for a long-term maturity roadmap.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow pb-4">
          <div className="bg-[#111] border border-[#222] p-6 lg:p-8 flex flex-col relative group hover:border-[#FF3E00] transition-colors overflow-hidden justify-center hover:translate-x-2 duration-300">
            <div className="absolute top-0 right-0 p-4 text-[12px] text-[#333] font-mono group-hover:text-[#FF3E00] transition-colors">01</div>
            <h4 className="font-bold text-2xl mb-3 font-serif italic text-[#FFFFFF]">Findings Report</h4>
            <p className="text-[#888] text-base leading-relaxed group-hover:text-[#BBB] transition-colors">Evidence-based explanation of the breaches, strictly cleared of irrelevant false-positives.</p>
          </div>
          <div className="bg-[#111] border border-[#222] p-6 lg:p-8 flex flex-col relative group hover:border-[#FF3E00] transition-colors overflow-hidden justify-center hover:-translate-x-2 duration-300">
            <div className="absolute top-0 right-0 p-4 text-[12px] text-[#333] font-mono group-hover:text-[#FF3E00] transition-colors">02</div>
            <h4 className="font-bold text-2xl mb-3 font-serif italic text-[#FFFFFF]">Prioritized Risk Register</h4>
            <p className="text-[#888] text-base leading-relaxed group-hover:text-[#BBB] transition-colors">Findings directly linked to business impact models for straightforward Executive Board escalation.</p>
          </div>
          <div className="bg-[#111] border border-[#222] p-6 lg:p-8 flex flex-col relative group hover:border-[#FF3E00] transition-colors overflow-hidden justify-center hover:translate-x-2 duration-300">
            <div className="absolute top-0 right-0 p-4 text-[12px] text-[#333] font-mono group-hover:text-[#FF3E00] transition-colors">03</div>
            <h4 className="font-bold text-2xl mb-3 font-serif italic text-[#FFFFFF]">Remediation Roadmap</h4>
            <p className="text-[#888] text-base leading-relaxed group-hover:text-[#BBB] transition-colors">Actionable short-term quick wins combined with long-term architectural fixes.</p>
          </div>
          <div className="bg-[#111] border border-[#222] p-6 lg:p-8 flex flex-col relative group hover:border-[#FF3E00] transition-colors overflow-hidden justify-center hover:-translate-x-2 duration-300">
            <div className="absolute top-0 right-0 p-4 text-[12px] text-[#333] font-mono group-hover:text-[#FF3E00] transition-colors">04</div>
            <h4 className="font-bold text-2xl mb-3 font-serif italic text-[#FFFFFF]">Operations Plan</h4>
            <p className="text-[#888] text-base leading-relaxed group-hover:text-[#BBB] transition-colors">Targeted incident response enhancements and privilege behavior programs tailored to alpha group.</p>
          </div>
        </div>
      </div>
    ),
  }
];
