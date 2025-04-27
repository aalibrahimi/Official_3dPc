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
  Bar
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

  // Bar chart data for detailed breakdown
  const detailedData = [
    { name: 'Single-Core', performance: performance.overall * 0.9 },
    { name: 'Multi-Core', performance: performance.overall * 0.95 },
    { name: 'Graphics', performance: performance.gaming },
    { name: 'Memory', performance: performance.productivity * 0.9 },
    { name: 'Storage', performance: performance.overall * 0.85 },
  ];

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

      {/* Detailed Bar Chart */}
      <div className="h-[250px] w-full bg-black/30 rounded-xl p-4 border border-blue-500/20">
        <h3 className="text-lg font-semibold mb-4 text-blue-400">Component Performance</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={detailedData}>
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
              formatter={(value: number) => `${value.toFixed(1)}%`}
            />
            <Bar 
              dataKey="performance" 
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
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
    </div>
  );
}