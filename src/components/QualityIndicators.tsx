import { motion } from 'motion/react';
import GlassCard from './GlassCard';

interface GaugeProps {
  value: number;
  label: string;
  color: string;
  glowColor: string;
}

function GaugeRing({ value, label, color, glowColor }: GaugeProps) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-white/5"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 6px ${glowColor})` }}
          />
        </svg>
        <span className="absolute text-lg font-bold">{value}%</span>
      </div>
      <span className="mt-3 text-xs uppercase tracking-widest text-white/50 font-medium">{label}</span>
    </div>
  );
}

export default function QualityIndicators() {
  return (
    <GlassCard tilt={false} className="flex flex-col">
      <h3 className="text-lg font-semibold mb-8">Data Quality Indicators</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <GaugeRing value={92} label="Class Balance" color="#00ffff" glowColor="rgba(0, 255, 255, 0.5)" />
        <GaugeRing value={14} label="Noise Level" color="#ff7a00" glowColor="rgba(255, 122, 0, 0.5)" />
        <GaugeRing value={98} label="Sync Accuracy" color="#39ff14" glowColor="rgba(57, 255, 20, 0.5)" />
        <GaugeRing value={85} label="Consistency" color="#ff00ff" glowColor="rgba(255, 0, 255, 0.5)" />
        <GaugeRing value={5} label="Outliers" color="#ef4444" glowColor="rgba(239, 68, 68, 0.5)" />
      </div>
      
      <div className="mt-10 space-y-6">
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white/50 uppercase tracking-wider">Dataset Health Score</span>
            <span className="text-neon-green font-bold">EXCELLENT</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '88%' }}
              transition={{ duration: 2, ease: "circOut" }}
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-green shadow-[0_0_15px_rgba(57,255,20,0.3)]" 
            />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
