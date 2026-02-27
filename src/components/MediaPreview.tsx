import { Play, Volume2, SkipBack, SkipForward, MoreHorizontal } from 'lucide-react';
import GlassCard from './GlassCard';

export default function MediaPreview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <GlassCard tilt={false} className="p-0 overflow-hidden group">
        <div className="relative aspect-video bg-black/40 flex items-center justify-center">
          <img 
            src="https://picsum.photos/seed/factory/800/450" 
            alt="Video Preview" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <button className="absolute w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group/btn">
            <Play className="w-6 h-6 fill-white group-hover/btn:scale-110 transition-transform" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
             <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
             </div>
             <span className="text-xs font-mono">01:24 / 04:12</span>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <h4 className="font-semibold">Line_A_Defect_042.mp4</h4>
            <p className="text-xs text-white/50">Surface Scratch Detection • 4K • 60fps</p>
          </div>
          <MoreHorizontal className="text-white/30 cursor-pointer hover:text-white transition-colors" />
        </div>
      </GlassCard>

      <GlassCard tilt={false} className="flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">Audio Spectrogram</h3>
          <p className="text-sm text-white/50 mb-6">Acoustic anomaly detection in motor bearings</p>
        </div>

        <div className="flex-1 flex items-end gap-1 h-32 mb-8">
          {[...Array(40)].map((_, i) => {
            const height = Math.random() * 80 + 20;
            return (
              <div 
                key={i} 
                className="flex-1 bg-gradient-to-t from-neon-magenta to-neon-cyan rounded-t-sm opacity-60 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-6 bg-white/5 p-4 rounded-xl border border-white/10">
          <div className="flex items-center gap-3">
            <SkipBack className="w-5 h-5 text-white/50 cursor-pointer hover:text-white" />
            <button className="w-10 h-10 rounded-full bg-neon-magenta flex items-center justify-center shadow-[0_0_15px_rgba(255,0,255,0.4)]">
              <Play className="w-4 h-4 fill-white" />
            </button>
            <SkipForward className="w-5 h-5 text-white/50 cursor-pointer hover:text-white" />
          </div>
          <div className="flex-1 h-1 bg-white/10 rounded-full relative">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          </div>
          <Volume2 className="w-5 h-5 text-white/50" />
        </div>
      </GlassCard>
    </div>
  );
}
