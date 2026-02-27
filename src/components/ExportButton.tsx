import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, X } from 'lucide-react';
import { useState } from 'react';
import GlassCard from './GlassCard';

export default function ExportButton() {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="flex flex-col items-center py-12 gap-6">
      <div className="flex flex-wrap justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05, translateY: -5 }}
          whileTap={{ scale: 0.95, translateY: 2 }}
          onClick={() => setShowSummary(true)}
          className="relative group"
        >
          <div className="absolute inset-0 bg-neon-magenta/20 rounded-2xl blur-xl group-hover:bg-neon-magenta/40 transition-colors" />
          <div className="relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3">
            <FileText className="w-5 h-5 text-neon-magenta" />
            <span className="font-bold text-white">GENERATE SUMMARY</span>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05, translateY: -5 }}
          whileTap={{ scale: 0.95, translateY: 2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-neon-cyan/20 rounded-2xl blur-xl group-hover:bg-neon-cyan/40 transition-colors" />
          <div className="relative px-8 py-4 bg-gradient-to-br from-neon-cyan to-blue-600 rounded-2xl border border-white/20 shadow-[0_10px_20px_rgba(0,255,255,0.3)] flex items-center gap-3">
            <Download className="w-5 h-5 text-white" />
            <span className="font-bold text-white">EXPORT FULL REPORT</span>
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {showSummary && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full max-w-2xl"
          >
            <GlassCard tilt={false} className="relative">
              <button 
                onClick={() => setShowSummary(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="text-neon-magenta w-5 h-5" />
                Dataset Executive Summary
              </h4>
              
              <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                <p>
                  The <span className="text-white font-semibold">Industrial_Defects_V4</span> dataset contains 12,480 samples with a defect rate of 65%. 
                  The primary defect type identified is <span className="text-neon-orange font-semibold">Scratch (33.6%)</span>, followed by Dent and Discoloration.
                </p>
                
                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <p className="text-[10px] uppercase text-white/40 mb-1">Health Status</p>
                    <p className="text-neon-green font-bold">OPTIMAL (88%)</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <p className="text-[10px] uppercase text-white/40 mb-1">Critical Issues</p>
                    <p className="text-red-400 font-bold">12 CORRUPT FILES</p>
                  </div>
                </div>

                <p>
                  Data quality indicators show high sync accuracy (98%) and low noise levels (14%). 
                  However, a class imbalance of 65/35 suggests potential bias in model training if not addressed with augmentation.
                </p>
                
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button className="text-xs text-neon-cyan hover:underline font-bold uppercase tracking-widest">
                    Download PDF Summary
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
