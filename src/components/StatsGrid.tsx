import { Database, Video, Music, Clock, Activity } from 'lucide-react';
import GlassCard from './GlassCard';

const stats = [
  { label: 'Total Samples', value: '12,480', icon: Database, color: 'text-neon-cyan' },
  { label: 'Total Videos', value: '8,240', icon: Video, color: 'text-neon-orange' },
  { label: 'Audio Files', value: '4,240', icon: Music, color: 'text-neon-magenta' },
  { label: 'Total Duration', value: '142h 20m', icon: Clock, color: 'text-neon-green' },
  { label: 'Corrupt / Missing', value: '12 (0.1%)', icon: Activity, color: 'text-red-500' },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, idx) => (
        <GlassCard key={idx} className="flex flex-col items-center justify-center text-center py-8">
          <stat.icon className={`w-8 h-8 mb-4 ${stat.color}`} />
          <p className="text-xs uppercase tracking-widest text-white/50 mb-1 font-medium">
            {stat.label}
          </p>
          <h3 className="text-2xl font-bold tracking-tight">
            {stat.value}
          </h3>
        </GlassCard>
      ))}
    </div>
  );
}
