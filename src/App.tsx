import Background3D from './components/Background3D';
import StatsGrid from './components/StatsGrid';
import DistributionCharts from './components/DistributionCharts';
import MediaPreview from './components/MediaPreview';
import QualityIndicators from './components/QualityIndicators';
import ExportButton from './components/ExportButton';
import { Shield, Activity, Settings, Bell, User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Background3D />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between glass-panel border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-neon-cyan rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.4)]">
            <Shield className="text-brand-dark w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tighter">DEFECT<span className="text-neon-cyan">CORE</span></h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold leading-none">Intelligence Dashboard</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#" className="text-white hover:text-neon-cyan transition-colors">Overview</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Datasets</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Analytics</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Models</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-white/60" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-neon-orange rounded-full border-2 border-brand-dark" />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-white/60" />
          </button>
          <div className="h-8 w-[1px] bg-white/10 mx-2" />
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold">Alex Rivera</p>
              <p className="text-[10px] text-white/40">Lead Engineer</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-magenta to-neon-cyan p-[1px]">
              <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center">
                <User className="w-5 h-5 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-neon-cyan mb-2">
              <Activity className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">System Live</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Dataset Analysis</h2>
            <p className="text-white/50 mt-2 max-w-xl">
              Real-time quality assessment and distribution analysis for the 
              <span className="text-white font-medium"> Industrial_Defects_V4 </span> 
              production dataset.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
              Refresh Data
            </button>
            <button className="px-4 py-2 rounded-lg bg-neon-cyan text-brand-dark text-sm font-bold shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:scale-105 transition-transform">
              New Dataset
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <StatsGrid />

        {/* Charts Section */}
        <DistributionCharts />

        {/* Media & Quality Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <MediaPreview />
          </div>
          <div className="xl:col-span-1">
            <QualityIndicators />
          </div>
        </div>

        {/* Export Section */}
        <ExportButton />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <p className="text-xs text-white/30 tracking-widest uppercase font-medium">
          DefectCore Intelligence System © 2026 • Secure Environment
        </p>
      </footer>
    </div>
  );
}
