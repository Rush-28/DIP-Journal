/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Code2, ClipboardList, Info, Tag, Check, Copy, ChevronRight } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { practicals, Practical } from './data/practicals';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter practicals
  const filteredPracticals = useMemo(() => {
    return practicals.filter(p => {
      const matchesSearch = 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.aim.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesSearch;
    });
  }, [searchTerm]);

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-100">
      {/* Header Section */}
      <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-600 flex items-center justify-center rounded-lg shadow-lg shadow-indigo-600/10">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">DIP Practicals<span className="text-indigo-600">.v1</span></h1>
        </div>
        
        <div className="relative hidden md:block w-96">
          <input 
            type="text" 
            placeholder="Search snippets (e.g., 'Contours', 'Compression')..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-sm transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold">Ready</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-12 flex flex-col gap-8">
        {/* Mobile Search - only shown on small screens */}
        <div className="md:hidden w-full relative mb-4">
          <input 
            type="text" 
            placeholder="Search keywords..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-md text-sm shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        </div>

        {/* Practical Grid */}
        <div className="flex-1">
          <AnimatePresence mode="popLayout">
            <div className="flex flex-col gap-8">
              {filteredPracticals.length > 0 ? (
                filteredPracticals.map((practical, index) => (
                  <motion.div
                    key={practical.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md hover:border-indigo-100"
                  >
                    {/* Card Header */}
                    <div 
                      className="px-8 py-5 bg-slate-50 border-b border-slate-200 flex justify-between items-center cursor-pointer hover:bg-slate-100/80 transition-colors"
                      onClick={() => setExpandedId(expandedId === practical.id ? null : practical.id)}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[11px] font-black text-indigo-600/40 font-mono tracking-tighter">
                          {practical.id.toUpperCase().padStart(2, '0')}
                        </span>
                        <h3 className="text-base font-bold text-slate-800 tracking-tight">
                          {practical.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5 mr-2">
                          {practical.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-[9px] font-black px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded uppercase tracking-widest border border-indigo-100/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expandedId === practical.id ? 'rotate-90 text-indigo-500' : ''}`} />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8 space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100/50">
                          <ClipboardList className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Learning Objective</h4>
                          <p className={`text-slate-600 leading-relaxed font-medium ${expandedId === practical.id ? '' : 'line-clamp-2'}`}>
                            {practical.aim}
                          </p>
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedId === practical.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-8 pt-4 overflow-hidden"
                          >
                            {practical.theory && (
                              <div className="p-6 bg-indigo-50/30 rounded-2xl border border-indigo-100/30 relative">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                  <Info className="w-12 h-12 text-indigo-600" />
                                </div>
                                <h4 className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                  Concept Overview
                                </h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{practical.theory}</p>
                              </div>
                            )}

                            <div className="space-y-3">
                              <div className="flex items-center justify-between px-2">
                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                  <Code2 className="w-3.5 h-3.5" />
                                  Implementation
                                </h4>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    copyToClipboard(practical.id, practical.code);
                                  }}
                                  className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 hover:text-indigo-700 uppercase tracking-widest transition-all p-1 hover:bg-indigo-50 rounded"
                                >
                                  {copiedId === practical.id ? (
                                    <><Check className="w-3 h-3" /> Copied</>
                                  ) : (
                                    <><Copy className="w-3 h-3" /> Copy Code</>
                                  )}
                                </button>
                              </div>
                              
                              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#1e1e1e] shadow-2xl">
                                <div className="px-4 py-2 bg-[#252525] border-b border-[#333] flex justify-between items-center">
                                  <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                  </div>
                                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">practical_{practical.id}.py</span>
                                </div>
                                <div className="max-h-[450px] overflow-auto custom-scrollbar">
                                  <SyntaxHighlighter
                                    language="python"
                                    style={vscDarkPlus}
                                    showLineNumbers={true}
                                    customStyle={{
                                      margin: 0,
                                      padding: '1.5rem',
                                      fontSize: '0.85rem',
                                      lineHeight: '1.4rem',
                                      backgroundColor: 'transparent',
                                    }}
                                    lineNumberStyle={{
                                      minWidth: '2.5em',
                                      paddingRight: '1em',
                                      color: '#555',
                                      textAlign: 'right',
                                      userSelect: 'none',
                                    }}
                                  >
                                    {practical.code}
                                  </SyntaxHighlighter>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="h-80 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-3xl bg-white/50">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 opacity-20" />
                  </div>
                  <p className="text-base font-bold text-slate-500">No matching practicals</p>
                  <p className="text-sm">Try searching for keywords like "OpenCV", "Array", or "Compression"</p>
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
                  >
                    Reset Search
                  </button>
                </div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="h-14 bg-white border-t border-slate-200 px-8 flex flex-wrap items-center justify-between text-[10px] text-slate-500 shrink-0 uppercase tracking-widest mt-12">
        <div className="flex gap-6">
          <span className="flex items-center gap-1.5 font-bold"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> System: Stable</span>
          <span className="flex items-center gap-1.5 font-bold"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div> Archive: V1.2.4</span>
          <span className="flex items-center gap-1.5 font-bold"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div> Total: {practicals.length} Marks</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-indigo-600 font-black cursor-pointer hover:text-indigo-700 transition-colors">Documentation</span>
          <span className="w-px h-4 bg-slate-200"></span>
          <span className="font-medium">© 2026 Digital Image Processing Repository</span>
        </div>
      </footer>
    </div>
  );
}

