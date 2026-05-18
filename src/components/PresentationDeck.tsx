import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'motion/react';
import { ChevronLeft, ChevronRight, Printer, Download, Sun, Moon } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { slides } from '../data/slidesData';

export default function PresentationDeck() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const totalSlides = slides.length;

  useEffect(() => {
    const savedTheme = localStorage.getItem('deck-theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('deck-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const backgroundTemplate = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--glass), transparent 40%)`;


  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  useEffect(() => {
    if (!showHeader) return;
    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showHeader]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isExporting) return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, isExporting]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    const handleWheel = (e: WheelEvent) => {
      if (isExporting) return;
      if (Math.abs(e.deltaY) > 30) {
        if (!timeout) {
          if (e.deltaY > 0) {
            setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
          } else {
            setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
          }
          timeout = setTimeout(() => { timeout = null; }, 600);
        }
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [totalSlides, isExporting]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    // Allow DOM to render the export view container
    setTimeout(async () => {
      try {
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [1920, 1080]
        });

        const printContainer = document.getElementById('pdf-export-container');
        if (!printContainer) return;

        const slideElements = printContainer.querySelectorAll('.pdf-slide-page');
        
        const bgColor = theme === 'dark' ? '#0D0D0D' : '#F8F9FA';
        
        for (let i = 0; i < slideElements.length; i++) {
          const slide = slideElements[i] as HTMLElement;
          const canvas = await html2canvas(slide, {
            scale: 2.5,
            useCORS: true,
            logging: false,
            backgroundColor: bgColor,
            width: 1920,
            height: 1080,
            allowTaint: true,
            onclone: (clonedDoc) => {
              // Forced adjustments for PDF export
              const exportSlides = clonedDoc.querySelectorAll('.pdf-slide-page');
              exportSlides.forEach((s) => {
                if (s instanceof HTMLElement) {
                  // Fully expand any hidden or collapsed areas
                  s.style.display = 'flex';
                  s.style.flexDirection = 'column';
                  s.style.visibility = 'visible';
                  s.style.opacity = '1';
                  s.style.width = '1920px';
                  s.style.height = '1080px';
                  s.style.position = 'relative';
                  s.style.overflow = 'hidden';
                }

                // Force all elements to reveal
                const allElements = s.querySelectorAll('*');
                allElements.forEach((el) => {
                  if (el instanceof HTMLElement) {
                    // Remove all motion/transition properties
                    el.style.opacity = '1';
                    
                    // Only remove transform if it's not a preserved vertical text
                    if (!el.classList.contains('pdf-vertical-text')) {
                      el.style.transform = 'none';
                    }
                    
                    el.style.visibility = 'visible';
                    el.style.transition = 'none';
                    el.style.animation = 'none';
                    el.style.filter = 'none';
                    
                    // Force display for icons
                    if (el.tagName.toLowerCase() === 'svg') {
                      el.style.display = 'block';
                      el.style.opacity = '1';
                      el.style.visibility = 'visible';
                    }

                    // Fix for small dots/circles
                    if (el.classList.contains('rounded-full')) {
                      el.style.borderStyle = 'solid';
                      el.style.borderWidth = '1px';
                    }
                  }
                });
              });
            }
          });
          
          if (i > 0) {
            pdf.addPage([1920, 1080], 'landscape');
          }
          
          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          pdf.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);
        }
        
        pdf.save('Azure_Strategic_Assessment.pdf');
      } catch (err) {
        console.error('Error generating PDF', err);
      } finally {
        setIsExporting(false);
      }
    }, 500);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newIndex = Math.min(totalSlides - 1, Math.max(0, Math.floor(percentage * totalSlides)));
    setCurrentSlideIndex(newIndex);
  };

  if (isExporting) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[var(--background)] flex flex-col items-center justify-center">
        <div className="text-[var(--text-white)] font-mono flex flex-col items-center mb-8">
          <div className="w-12 h-12 border-4 border-[var(--accent)] border-t-[transparent] rounded-full animate-spin mb-4"></div>
          <span className="text-lg">Rendering High-Quality PDF...</span>
          <span className="text-xs text-[var(--muted)] mt-2">This may take a few seconds</span>
        </div>
        
        {/* Hidden but rendered container for html2canvas */}
        <div id="pdf-export-container" className="absolute top-[200vh] left-0 flex flex-col w-[1920px]">
          {slides.map((slide, idx) => (
            <div 
              key={slide.id}
              className="pdf-slide-page bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans overflow-hidden relative shrink-0"
              style={{ width: '1920px', height: '1080px' }}
            >
              {/* Top Branding Bar */}
              <header className="h-[90px] border-b border-[var(--border)] flex items-center justify-between px-12 shrink-0 z-50 relative bg-[var(--header-bg)] backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--text-white)] flex items-center justify-center rounded-sm">
                    <span className="text-[var(--text-black)] font-bold text-lg">WCC</span>
                  </div>
                  <span className="uppercase tracking-[0.2em] text-[14px] font-semibold text-[var(--muted)]">
                    Warwick Cyber Consulting
                  </span>
                </div>
                <div className="flex items-center gap-10">
                  <div className="text-right">
                    <p className="text-[12px] text-[var(--muted)] uppercase tracking-widest">Client</p>
                    <p className="text-[16px] font-bold text-[var(--text-white)]">Alpha Group | Azure Strategic Assessment</p>
                  </div>
                  <div className="w-[1px] h-10 bg-[var(--border)]"></div>
                  <div className="text-right">
                    <p className="text-[12px] text-[var(--muted)] uppercase tracking-widest">Timeline</p>
                    <p className="text-[16px] font-bold text-[var(--text-white)] italic font-serif">90-Day Sprint (Q3-Q4)</p>
                  </div>
                </div>
              </header>
              
              <div className="flex-grow flex overflow-hidden pdf-main-container">
                <aside className="w-[100px] border-r border-[var(--border)] flex-col items-center py-12 shrink-0 flex relative h-full">
                  <div className="text-[14px] origin-center rotate-[-90deg] whitespace-nowrap text-[var(--muted)] tracking-[0.3em] font-medium absolute top-40 pdf-vertical-text pdf-nowrap">
                    PRESENTATION DECK v1.0
                  </div>
                  <div className="flex flex-col gap-4 items-center absolute bottom-12">
                    {slides.map((_, dotIdx) => (
                      <div 
                        key={dotIdx} 
                        className={`w-2 rounded-full ${dotIdx === idx ? 'h-10 bg-[var(--accent)]' : 'h-2.5 bg-[var(--selection-dots)]'}`}
                      ></div>
                    ))}
                    <div className="text-[var(--foreground)] opacity-30 font-mono text-[14px] font-bold mt-6 tracking-widest text-center">
                      {String(idx + 1).padStart(2, '0')}
                      <span className="block text-[10px] mt-2">/ {String(totalSlides).padStart(2, '0')}</span>
                    </div>
                  </div>
                </aside>
                
                <main className="flex-grow flex flex-col relative overflow-hidden">
                  <div className="w-full h-full flex flex-col p-16 overflow-hidden">
                    <div className="flex justify-between items-start mb-12 gap-6 pdf-flex-row">
                      <div>
                        <h2 className="text-[var(--muted)] font-serif italic text-3xl mb-3 pdf-nowrap">
                          Section {String(idx + 1).padStart(2, '0')} — {slide.category}
                        </h2>
                        <h1 className="text-[var(--foreground)] text-7xl font-bold tracking-tighter leading-none max-w-5xl uppercase pdf-nowrap" style={{ fontSize: '72px' }}>
                          {slide.title.split(' ').map((word, i, arr) => (
                            <React.Fragment key={i}>
                              {i === arr.length - 1 ? <span className="text-[var(--accent)]">{word}.</span> : word + ' '}
                            </React.Fragment>
                          ))}
                        </h1>
                      </div>
                      <div className="text-right max-w-sm">
                        <p className="text-[14px] text-[var(--muted)] leading-relaxed uppercase tracking-[0.2em] font-bold mt-2">
                          Warwick Cyber Consulting<br/>
                          Confidential &copy; 2024
                        </p>
                      </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-center transform origin-top-left scale-[1.0]" style={{ fontSize: '24px' }}>
                      {slide.content}
                    </div>
                  </div>
                </main>
              </div>
              
              <footer className="h-4 bg-[var(--border)] w-full shrink-0">
                <div 
                  className="h-full bg-[var(--text-white)] transition-none" 
                  style={{ width: `${((idx + 1) / totalSlides) * 100}%` }}
                ></div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const currentSlide = slides[currentSlideIndex];

  return (
    <div 
      className="w-full h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans overflow-hidden relative group/deck transition-colors duration-500"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/deck:opacity-100 transition-opacity duration-1000"
        style={{
          background: backgroundTemplate
        }}
      />
      
      {/* Top Branding Bar */}
      <header className="h-16 border-b border-[var(--border)] flex items-center justify-between px-8 shrink-0 z-50 absolute top-0 left-0 right-0 bg-[var(--header-bg)] backdrop-blur transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[var(--text-white)] flex items-center justify-center rounded-sm">
            <span className="text-[var(--text-black)] font-bold text-xs">WCC</span>
          </div>
          <span className="uppercase tracking-[0.2em] text-[10px] font-semibold text-[var(--muted)] hidden md:inline">
            Warwick Cyber Consulting
          </span>
        </div>

        <div 
          className="flex items-center h-full gap-4 relative"
          onMouseEnter={() => setShowHeader(true)}
        >
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors relative z-50"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <AnimatePresence>
              {showHeader && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center gap-6 md:gap-8"
                >
                  <div className="text-right hidden sm:block">
                    <p className="text-[10px] text-[var(--muted)] uppercase tracking-widest">Client</p>
                    <p className="text-xs font-bold text-[var(--text-white)]">Alpha Group <span className="hidden md:inline">| Azure Strategic Assessment</span></p>
                  </div>
                  <div className="w-[1px] h-8 bg-[var(--border)] hidden sm:block"></div>
                  <div className="text-right hidden md:block">
                    <p className="text-[10px] text-[var(--muted)] uppercase tracking-widest">Timeline</p>
                    <p className="text-xs font-bold text-[var(--text-white)] italic font-serif">90-Day Sprint (Q3-Q4)</p>
                  </div>
                  <div className="w-[1px] h-8 bg-[var(--border)] hidden md:block"></div>
                  <button 
                    onClick={handleExportPDF}
                    disabled={isExporting}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors disabled:opacity-50"
                  >
                    <Download size={16} />
                    <span className="hidden md:inline">{isExporting ? 'Exporting...' : 'Export PDF'}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Hover Trigger Area for right corner specifically */}
          {!showHeader && (
            <div 
              className="w-80 h-full absolute right-0 top-0 cursor-pointer z-40 bg-transparent" 
              onMouseEnter={() => setShowHeader(true)}
            />
          )}
        </div>
      </header>

      <div className="flex-grow flex overflow-hidden pt-16 transition-all duration-500">
        {/* Side Slide Indicator (Editorial Rail) */}
        <aside className="w-16 border-r border-[var(--border)] flex-col items-center py-8 shrink-0 hidden md:flex relative h-full transition-colors">
          <div className="text-[10px] origin-center rotate-[-90deg] whitespace-nowrap text-[var(--muted)] tracking-[0.3em] font-medium absolute top-24">
            PRESENTATION DECK v1.0
          </div>
          <div className="flex flex-col gap-2 items-center absolute bottom-8 z-50">
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlideIndex(idx)}
                title={`Go to slide ${idx + 1}`}
                className={`w-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-[var(--foreground)] hover:h-4 ${idx === currentSlideIndex ? 'h-6 bg-[var(--accent)]' : 'h-1.5 bg-[var(--selection-dots)]'}`}
              ></button>
            ))}
            <div className="text-[var(--muted)] font-mono text-[10px] font-bold mt-4 tracking-widest text-center">
              {String(currentSlideIndex + 1).padStart(2, '0')}
              <span className="block text-[8px] opacity-50 mt-1">/ {String(totalSlides).padStart(2, '0')}</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow flex flex-col relative overflow-hidden bg-[var(--background)] transition-colors">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} 
              className="w-full h-full flex flex-col p-6 lg:p-10 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 lg:mb-8 gap-4">
                <div>
                  <h2 className="text-[var(--muted)] font-serif italic text-lg md:text-xl mb-1">
                    Section {String(currentSlideIndex + 1).padStart(2, '0')} — {currentSlide.category}
                  </h2>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-none max-w-4xl uppercase text-[var(--foreground)]">
                    {currentSlide.title.split(' ').map((word, i, arr) => (
                      <React.Fragment key={i}>
                        {i === arr.length - 1 ? <span className="text-[var(--accent)]">{word}.</span> : word + ' '}
                      </React.Fragment>
                    ))}
                  </h1>
                </div>
                <div className="text-left lg:text-right max-w-xs hidden md:block">
                  <p className="text-[11px] text-[var(--muted)] leading-relaxed uppercase tracking-[0.2em] font-bold mt-2">
                    Warwick Cyber Consulting<br/>
                    Confidential &copy; 2024
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="flex-grow flex flex-col">
                {currentSlide.content}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls Overlay */}
          <div className="absolute right-8 bottom-8 flex gap-4 z-40">
            <button 
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className="w-12 h-12 flex items-center justify-center border border-[var(--border)] bg-[var(--card-bg)] hover:brightness-110 disabled:opacity-30 disabled:hover:brightness-100 text-[var(--text-white)] transition-all group"
            >
              <ChevronLeft size={24} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlideIndex === totalSlides - 1}
              className="w-12 h-12 flex items-center justify-center border border-[var(--border)] bg-[var(--card-bg)] hover:brightness-110 disabled:opacity-30 disabled:hover:brightness-100 text-[var(--text-white)] transition-all group"
            >
              <ChevronRight size={24} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </main>
      </div>

      {/* Bottom Progress Bar */}
      <footer 
        className="h-3 bg-[var(--border)] w-full shrink-0 group/progress cursor-pointer relative"
        onClick={handleProgressClick}
        title="Click to seek"
      >
        <div 
          className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover/progress:opacity-5 outline-none transition-opacity pointer-events-none"
        ></div>
        <div 
          className="h-full bg-[var(--text-white)] group-hover/progress:bg-[var(--accent)] transition-all duration-700 ease-in-out pointer-events-none relative z-10" 
          style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
        ></div>
      </footer>
    </div>
  );
}
