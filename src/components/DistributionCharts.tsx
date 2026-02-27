import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import GlassCard from './GlassCard';

const defectData = [
  { name: 'Scratch', count: 4200 },
  { name: 'Dent', count: 3100 },
  { name: 'Discolor', count: 2200 },
  { name: 'Crack', count: 1800 },
  { name: 'Noise', count: 1200 },
];

const distributionData = [
  { name: 'Defect', value: 65 },
  { name: 'Non-Defect', value: 35 },
];

const COLORS = ['#ff7a00', '#39ff14', '#ff00ff', '#00ffff', '#ffffff'];
const PIE_COLORS = ['#ff00ff', '#00ffff'];

export default function DistributionCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <GlassCard tilt={false} className="h-[400px]">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
          Defect Type Distribution
        </h3>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={defectData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#ffffff50" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke="#ffffff50" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0f172a', 
                border: '1px solid #ffffff20',
                borderRadius: '8px',
                color: '#fff'
              }}
              itemStyle={{ color: '#fff' }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {defectData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>

      <GlassCard tilt={false} className="h-[400px]">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" />
          Label Distribution
        </h3>
        <div className="flex items-center justify-center h-[85%]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={distributionData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={8}
                dataKey="value"
              >
                {distributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  border: '1px solid #ffffff20',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">65%</span>
            <span className="text-xs text-white/50 uppercase tracking-tighter">Defects</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
