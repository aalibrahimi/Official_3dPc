// File: src/MyComponents/PerformanceChart.tsx
"use client";

import React from 'react';
import { 
  RadarChart, 
  Radar, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ComposedChart,
  BarChart,
  Bar,
  Cell,
  ReferenceLine,
  ReferenceArea
} from "recharts";
import { 
  Gamepad2, 
  Briefcase, 
  Palette, 
  Gauge 
} from "lucide-react";

interface PerformanceData {
  gaming: number;
  productivity: number;
  creator: number;
  overall: number;
}

interface Props {
  performance: PerformanceData;
}

export default function PerformanceChart({ performance }: Props) {
  // Prepare data for radar chart
  const radarData = [
    {
      subject: 'Gaming',
      value: performance.gaming,
      fullMark: 100,
    },
    {
      subject: 'Productivity',
      value: performance.productivity,
      fullMark: 100,
    },
    {
      subject: 'Creative',
      value: performance.creator,
      fullMark: 100,
    },
    {
      subject: 'Overall',
      value: performance.overall,
      fullMark: 100,
    },
  ];

  // Prepare data for line chart
  const comparisonData = [
    { name: 'Base', value: 70, benchmark: 60 },
    { name: 'Optimized', value: performance.overall, benchmark: 75 },
    { name: 'Peak', value: performance.overall + 5, benchmark: 85 },
    { name: 'Max OC', value: performance.overall + 10, benchmark: 95 },
  ];

  // Enhanced bar chart data with more detailed metrics
  const detailedData = [
    { 
      name: 'Single-Core', 
      performance: performance.overall * 0.9,
      potential: performance.overall * 0.9 + 10,
      category: 'cpu'
    },
    { 
      name: 'Multi-Core', 
      performance: performance.overall * 0.95,
      potential: performance.overall * 0.95 + 8,
      category: 'cpu'
    },
    { 
      name: 'Graphics', 
      performance: performance.gaming,
      potential: performance.gaming + 12,
      category: 'gpu'
    },
    { 
      name: 'Memory', 
      performance: performance.productivity * 0.9,
      potential: performance.productivity * 0.9 + 5,
      category: 'memory'
    },
    { 
      name: 'Storage', 
      performance: performance.overall * 0.85,
      potential: performance.overall * 0.85 + 7,
      category: 'storage'
    },
    { 
      name: 'Compute', 
      performance: performance.creator * 0.92,
      potential: performance.creator * 0.92 + 9,
      category: 'compute'
    },
  ];

  const COLORS = {
    cpu: '#3b82f6',
    gpu: '#10b981',
    memory: '#8b5cf6',
    storage: '#f59e0b',
    compute: '#ef4444',
  };

  return (
    <div className="space-y-8">
      {/* Main Radar Chart */}
      <div className="h-[400px] w-full bg-black/30 rounded-xl p-4 border border-blue-500/20">
        <h3 className="text-lg font-semibold mb-4 text-blue-400">Performance Overview</h3>
        <ResponsiveContainer width="100%" height="90%">
          <RadarChart data={radarData}>
            <PolarGrid 
              stroke="#374151" 
              strokeDasharray="3 3"
              gridType="polygon"
            />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#9ca3af', fontSize: 14 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fill: '#9ca3af' }}
              stroke="#374151"
            />
            <Radar
              name="Performance"
              dataKey="value"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Comparison Line Chart */}
      <div className="h-[300px] w-full bg-black/30 rounded-xl p-4 border border-blue-500/20">
        <h3 className="text-lg font-semibold mb-4 text-blue-400">Performance Scaling</h3>
        <ResponsiveContainer width="100%" height="90%">
          <ComposedChart data={comparisonData}>
            <defs>
              <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
            <XAxis 
              dataKey="name" 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '8px',
                backdropFilter: 'blur(8px)',
              }}
              labelStyle={{ color: '#fff' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="value" 
              fill="url(#performanceGradient)" 
              stroke="transparent"
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ r: 6, strokeWidth: 2, fill: "#1e293b" }}
              activeDot={{ r: 8, strokeWidth: 2, fill: "#3b82f6" }}
              name="Actual Performance"
            />
            <Line 
              type="monotone" 
              dataKey="benchmark" 
              stroke="#ef4444" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 4, strokeWidth: 2, fill: "#1e293b" }}
              name="Category Benchmark"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Enhanced Component Performance Chart */}
      <div className="h-[350px] w-full bg-gradient-to-br from-black/40 to-blue-950/20 rounded-xl p-6 border border-blue-500/20 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="relative z-10">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Component Performance Analysis</h3>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart 
              data={detailedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                {Object.entries(COLORS).map(([key, color]) => (
                  <linearGradient 
                    key={key} 
                    id={`gradient-${key}`} 
                    x1="0" 
                    y1="0" 
                    x2="0" 
                    y2="1"
                  >
                    <stop offset="5%" stopColor={color} stopOpacity={1}/>
                    <stop offset="95%" stopColor={color} stopOpacity={0.6}/>
                  </linearGradient>
                ))}
              </defs>
              
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#374151" 
                opacity={0.1} 
                vertical={false}
              />
              
              <XAxis 
                dataKey="name" 
                stroke="#9ca3af"
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                axisLine={{ stroke: '#374151' }}
              />
              
              <YAxis 
                stroke="#9ca3af"
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
                axisLine={{ stroke: '#374151' }}
              />
              
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-black/90 border border-blue-500/30 rounded-lg p-3 shadow-lg backdrop-blur-sm">
                        <p className="text-blue-400 font-semibold mb-2">{label}</p>
                        <p className="text-white">
                          Current: <span className="text-blue-500 font-bold">
                            {payload[0].value}%
                          </span>
                        </p>
                        <p className="text-white">
                          Potential: <span className="text-green-400 font-bold">
                            {payload[1]?.value}%
                          </span>
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          +{((payload[1]?.value || 0) - (payload[0]?.value || 0)).toFixed(1)}% headroom
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              
              <Bar 
                dataKey="performance" 
                name="Current Performance"
                radius={[4, 4, 0, 0]}
                barSize={30}
              >
                {detailedData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`url(#gradient-${entry.category})`}
                    opacity={0.9}
                  />
                ))}
              </Bar>
              
              <Bar 
                dataKey="potential" 
                name="Potential Performance"
                radius={[4, 4, 0, 0]}
                barSize={30}
                fillOpacity={0.3}
              >
                {detailedData.map((entry, index) => (
                  <Cell 
                    key={`cell-potential-${index}`} 
                    fill={COLORS[entry.category as keyof typeof COLORS]}
                    stroke={COLORS[entry.category as keyof typeof COLORS]}
                    strokeWidth={1}
                    strokeDasharray="5 5"
                  />
                ))}
              </Bar>
              
              <ReferenceLine 
                y={90} 
                stroke="#22c55e" 
                strokeDasharray="3 3" 
                label={{ 
                  value: 'Excellent', 
                  position: 'right', 
                  fill: '#22c55e',
                  fontSize: 12 
                }} 
              />
              
              <ReferenceLine 
                y={75} 
                stroke="#f59e0b" 
                strokeDasharray="3 3" 
                label={{ 
                  value: 'Good', 
                  position: 'right', 
                  fill: '#f59e0b',
                  fontSize: 12 
                }} 
              />
              
              <ReferenceLine 
                y={50} 
                stroke="#ef4444" 
                strokeDasharray="3 3" 
                label={{ 
                  value: 'Average', 
                  position: 'right', 
                  fill: '#ef4444',
                  fontSize: 12 
                }} 
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          {Object.entries(COLORS).map(([key, color]) => (
            <div key={key} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: color }}
              />
              <span className="text-sm text-gray-400 capitalize">{key}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 transition-all hover:scale-105 hover:bg-blue-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Gamepad2 className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold">Gaming</h3>
          </div>
          <div className="text-2xl font-bold text-blue-500">{performance.gaming}%</div>
          <p className="text-sm text-gray-400 mt-1">Ultra settings 4K capable</p>
        </div>
        
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 transition-all hover:scale-105 hover:bg-green-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-green-500" />
            <h3 className="font-semibold">Productivity</h3>
          </div>
          <div className="text-2xl font-bold text-green-500">{performance.productivity}%</div>
          <p className="text-sm text-gray-400 mt-1">Heavy multitasking ready</p>
        </div>
        
        <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 transition-all hover:scale-105 hover:bg-purple-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Palette className="w-5 h-5 text-purple-500" />
            <h3 className="font-semibold">Creator</h3>
          </div>
          <div className="text-2xl font-bold text-purple-500">{performance.creator}%</div>
          <p className="text-sm text-gray-400 mt-1">4K video editing capable</p>
        </div>
        
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 transition-all hover:scale-105 hover:bg-red-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold">Overall</h3>
          </div>
          <div className="text-2xl font-bold text-red-500">{performance.overall}%</div>
          <p className="text-sm text-gray-400 mt-1">Top-tier performance</p>
        </div>
      </div>

      {/* Additional Performance Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
          <h4 className="font-semibold mb-2 text-blue-400">Overclocking Potential</h4>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-black/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                style={{ width: '75%' }}
              />
            </div>
            <span className="text-sm font-bold text-blue-500">15%</span>
          </div>
        </div>
        
        <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
          <h4 className="font-semibold mb-2 text-purple-400">Thermal Headroom</h4>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-black/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                style={{ width: '65%' }}
              />
            </div>
            <span className="text-sm font-bold text-purple-500">35°C</span>
          </div>
        </div>
        
        <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
          <h4 className="font-semibold mb-2 text-green-400">Power Efficiency</h4>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-black/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-green-700 rounded-full"
                style={{ width: '85%' }}
              />
            </div>
            <span className="text-sm font-bold text-green-500">A+</span>
          </div>
        </div>
      </div>
    </div>
  );
}