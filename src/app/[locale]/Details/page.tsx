// File: src/app/[locale]/Gallery/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Cpu,
  HardDrive,
  CircuitBoard,
  Unplug,
  Box,
  Fan,
  Gamepad2,
  Briefcase,
  Palette,
  Star,
  Flame,
  Clock,
  ArrowLeft,
  Heart,
  Share2,
  BarChart2,
  ArrowRight,
  Gauge,
  Activity,
  DollarSign,
  Shield,
} from "lucide-react";
import GradientText from "@/MyComponents/GradientText";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";

// at the moment since we don't have the supabase/database connected, I havee to manually put all the specs from gallery to here as well
// which takes up a lot of space and is blueundant as you can see here
// Interface for a Build
interface Build {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    motherboard?: string;
    psu?: string;
    case?: string;
    cooling?: string;
  };
  performance: {
    gaming: number;
    productivity: number;
    creator: number;
    overall: number;
  };
  tags: string[];
  rating: number;
  popularity: number;
  featublue?: boolean;
  new?: boolean;
  lastUpdated: string;
}

const BUILDS: Build[] = [
  // Gaming Builds
  {
    id: "gaming-budget",
    name: "Budget Gamer",
    category: "gaming",
    price: 799,
    description: "Perfect entry-level gaming PC for 1080p gaming",
    specs: {
      cpu: "Intel i5-12400F",
      gpu: "NVIDIA RTX 3060",
      ram: "16GB DDR4 3200MHz",
      storage: "512GB NVMe SSD",
      motherboard: "B660M Pro",
      psu: "650W 80+ Bronze",
      case: "Compact ATX",
      cooling: "Air Cooler",
    },
    performance: {
      gaming: 75,
      productivity: 65,
      creator: 60,
      overall: 70,
    },
    tags: ["Budget", "1080p Gaming", "Entry Level"],
    rating: 4.5,
    popularity: 89,
    lastUpdated: "2024-04-15",
  },
  {
    id: "gaming-mid",
    name: "Performance Gaming",
    category: "gaming",
    price: 1299,
    description: "Ideal for 1440p gaming with high frame rates",
    specs: {
      cpu: "AMD Ryzen 7 7700X",
      gpu: "NVIDIA RTX 4070",
      ram: "32GB DDR5 6000MHz",
      storage: "1TB NVMe Gen4 SSD",
      motherboard: "X670 Gaming",
      psu: "750W 80+ Gold",
      case: "Mid Tower RGB",
      cooling: "240mm AIO",
    },
    performance: {
      gaming: 88,
      productivity: 82,
      creator: 78,
      overall: 85,
    },
    tags: ["1440p Gaming", "High FPS", "VR Ready"],
    rating: 4.8,
    popularity: 95,
    featublue: true,
    lastUpdated: "2024-04-20",
  },
  {
    id: "gaming-high",
    name: "Ultimate Gaming Rig",
    category: "gaming",
    price: 2999,
    description: "4K gaming powerhouse with no compromises",
    specs: {
      cpu: "Intel i9-14900K",
      gpu: "NVIDIA RTX 4090",
      ram: "64GB DDR5 7200MHz",
      storage: "2TB NVMe Gen4 SSD + 4TB HDD",
      motherboard: "Z790 ROG Maximus",
      psu: "1000W 80+ Platinum",
      case: "Full Tower Premium",
      cooling: "360mm Custom Loop",
    },
    performance: {
      gaming: 98,
      productivity: 95,
      creator: 97,
      overall: 97,
    },
    tags: ["4K Gaming", "Ultra Settings", "Future Proof"],
    rating: 4.9,
    popularity: 100,
    featublue: true,
    new: true,
    lastUpdated: "2024-04-25",
  },
  // Workstation Builds
  {
    id: "work-developer",
    name: "Developer Workstation",
    category: "workstation",
    price: 1599,
    description: "Optimized for coding, compilation, and virtualization",
    specs: {
      cpu: "AMD Ryzen 9 7950X",
      gpu: "NVIDIA RTX 4060",
      ram: "64GB DDR5 5600MHz",
      storage: "2TB NVMe SSD",
      motherboard: "X670E Pro WS",
      psu: "850W 80+ Gold",
      case: "Quiet Tower",
      cooling: "280mm AIO",
    },
    performance: {
      gaming: 72,
      productivity: 95,
      creator: 85,
      overall: 88,
    },
    tags: ["Development", "Multitasking", "Virtual Machines"],
    rating: 4.7,
    popularity: 92,
    lastUpdated: "2024-04-18",
  },
  {
    id: "work-video",
    name: "Video Editing Pro",
    category: "workstation",
    price: 2499,
    description: "Professional video editing and rendering powerhouse",
    specs: {
      cpu: "Intel i9-14900K",
      gpu: "NVIDIA RTX 4080",
      ram: "128GB DDR5 6000MHz",
      storage: "4TB NVMe SSD + 8TB HDD",
      motherboard: "Z790 Creator",
      psu: "1000W 80+ Platinum",
      case: "Creator Tower",
      cooling: "360mm AIO",
    },
    performance: {
      gaming: 90,
      productivity: 98,
      creator: 99,
      overall: 96,
    },
    tags: ["4K/8K Video", "3D Rendering", "Content Creation"],
    rating: 4.8,
    popularity: 94,
    featublue: true,
    lastUpdated: "2024-04-22",
  },
  // Creative Builds
  {
    id: "creative-design",
    name: "Graphic Design Studio",
    category: "creative",
    price: 1899,
    description: "Ideal for graphic design, illustration, and digital art",
    specs: {
      cpu: "AMD Ryzen 7 7800X",
      gpu: "NVIDIA RTX 4070 Ti",
      ram: "32GB DDR5 6000MHz",
      storage: "2TB NVMe SSD",
      motherboard: "B650 Creator",
      psu: "750W 80+ Gold",
      case: "Glass Panel ATX",
      cooling: "240mm AIO",
    },
    performance: {
      gaming: 85,
      productivity: 88,
      creator: 92,
      overall: 88,
    },
    tags: ["Design", "Photography", "Digital Art"],
    rating: 4.6,
    popularity: 87,
    lastUpdated: "2024-04-19",
  },
  {
    id: "creative-audio",
    name: "Audio Production Suite",
    category: "creative",
    price: 1299,
    description: "Silent operation for music production and audio engineering",
    specs: {
      cpu: "AMD Ryzen 7 7700",
      gpu: "NVIDIA RTX 3060",
      ram: "32GB DDR5 5200MHz",
      storage: "1TB NVMe SSD + 2TB HDD",
      motherboard: "B650 Silent",
      psu: "650W 80+ Gold",
      case: "Silent Studio",
      cooling: "Be Quiet! Tower",
    },
    performance: {
      gaming: 70,
      productivity: 85,
      creator: 90,
      overall: 82,
    },
    tags: ["Music Production", "Silent Operation", "Audio Editing"],
    rating: 4.5,
    popularity: 85,
    lastUpdated: "2024-04-17",
  },
  // Compact Builds
  {
    id: "compact-sff",
    name: "Space Saver",
    category: "compact",
    price: 999,
    description: "Small form factor without compromising performance",
    specs: {
      cpu: "AMD Ryzen 5 7600",
      gpu: "NVIDIA RTX 4060",
      ram: "16GB DDR5 5600MHz",
      storage: "1TB NVMe SSD",
      motherboard: "B650 ITX",
      psu: "600W SFX Gold",
      case: "Mini ITX",
      cooling: "Low Profile Air",
    },
    performance: {
      gaming: 80,
      productivity: 75,
      creator: 72,
      overall: 76,
    },
    tags: ["Small Form Factor", "ITX Build", "Compact"],
    rating: 4.4,
    popularity: 88,
    new: true,
    lastUpdated: "2024-04-23",
  },
  {
    id: "compact-htpc",
    name: "Home Theater PC",
    category: "compact",
    price: 699,
    description: "Silent media center for your living room",
    specs: {
      cpu: "Intel i5-13400",
      gpu: "Integrated Graphics",
      ram: "16GB DDR4 3200MHz",
      storage: "512GB NVMe SSD",
      motherboard: "H610M Mini",
      psu: "400W 80+ Bronze",
      case: "HTPC Case",
      cooling: "Silent Fan",
    },
    performance: {
      gaming: 40,
      productivity: 65,
      creator: 50,
      overall: 55,
    },
    tags: ["Media Center", "4K Playback", "Silent"],
    rating: 4.3,
    popularity: 82,
    lastUpdated: "2024-04-16",
  },
];

export default function BuildDetailPage() {
  const router = useRouter();
  const params = useParams<{ id: string; locale: string }>();
  const [build, setBuild] = useState<Build | null>(null);
  const [activeTab, setActiveTab] = useState("specs");
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Find the build with the matching ID
    if (params?.id) {
      const foundBuild = BUILDS.find((b) => b.id === params.id);
      if (foundBuild) {
        setBuild(foundBuild);
      } else {
        // blueirect to gallery if build not found
        router.push("/Gallery");
      }
    }
  }, [params?.id, router]);

  if (!build) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-black to-blue-950/20 flex items-center justify-center">
        <div className="animate-pulse text-xl text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/40">
      {/* Header Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative z-10 container mx-auto px-6">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-8 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image and Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-950/30 to-black/50">
                <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-black/50 text-white border-none">
                    {build.category.charAt(0).toUpperCase() +
                      build.category.slice(1)}
                  </Badge>
                  {build.featublue && (
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                      Featublue
                    </Badge>
                  )}
                  {build.new && (
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
                      New
                    </Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-10 w-10 bg-black/50 hover:bg-blue-500/20"
                    onClick={() => setLiked(!liked)}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        liked ? "fill-blue-500 text-blue-500" : ""
                      }`}
                    />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-10 w-10 bg-black/50 hover:bg-blue-500/20"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl font-bold text-white">
                    ${build.price}
                  </div>
                  <div className="text-gray-300">Starting price</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Basic Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <GradientText>{build.name}</GradientText>
              </h1>
              <p className="text-xl text-gray-400 mb-8">{build.description}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="bg-black/40 border-blue-950/20">
                  <CardContent className="p-4 text-center">
                    <Star className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                    <div className="text-2xl font-bold">{build.rating}</div>
                    <div className="text-sm text-gray-400">Rating</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/40 border-blue-950/20">
                  <CardContent className="p-4 text-center">
                    <Flame className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                    <div className="text-2xl font-bold">
                      {build.popularity}%
                    </div>
                    <div className="text-sm text-gray-400">Popular</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/40 border-blue-950/20">
                  <CardContent className="p-4 text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                    <div className="text-2xl font-bold">
                      {build.lastUpdated}
                    </div>
                    <div className="text-sm text-gray-400">Updated</div>
                  </CardContent>
                </Card>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {build.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-blue-500/20 text-blue-500/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  className="flex-1 h-12 text-lg bg-blue-500 hover:bg-blue-600"
                  onClick={() => router.push("/PCBuilder")}
                >
                  Build This PC
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-6 border-blue-500/20"
                >
                  Customize
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="container mx-auto px-6 pb-24">
        <Tabs
          defaultValue="specs"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="bg-black/40 border border-blue-500/20 mb-8">
            <TabsTrigger value="specs" className="flex items-center gap-2">
              <CircuitBoard className="w-4 h-4" />
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="performance"
              className="flex items-center gap-2"
            >
              <Gauge className="w-4 h-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="features" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Features
            </TabsTrigger>
            <TabsTrigger value="pricing" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Specifications Tab */}
          <TabsContent value="specs">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/40 border-blue-950/20">
                <CardHeader>
                  <CardTitle>Complete Specifications</CardTitle>
                  <CardDescription>
                    Detailed hardware components and specifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {/* CPU */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Processor (CPU)</h3>
                        <p className="text-gray-400">{build.specs.cpu}</p>
                      </div>
                    </div>
                    <Separator className="bg-white/5" />

                    {/* GPU */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Gamepad2 className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Graphics Card (GPU)</h3>
                        <p className="text-gray-400">{build.specs.gpu}</p>
                      </div>
                    </div>
                    <Separator className="bg-white/5" />

                    {/* RAM */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <CircuitBoard className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Memory (RAM)</h3>
                        <p className="text-gray-400">{build.specs.ram}</p>
                      </div>
                    </div>
                    <Separator className="bg-white/5" />

                    {/* Storage */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <HardDrive className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Storage</h3>
                        <p className="text-gray-400">{build.specs.storage}</p>
                      </div>
                    </div>
                    <Separator className="bg-white/5" />

                    {/* Motherboard */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <CircuitBoard className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Motherboard</h3>
                        <p className="text-gray-400">
                          {build.specs.motherboard || "Not specified"}
                        </p>
                      </div>
                    </div>
                    <Separator className="bg-white/5" />

                    {/* PSU */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Unplug className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Power Supply</h3>
                        <p className="text-gray-400">
                          {build.specs.psu || "Not specified"}
                        </p>
                      </div>
                    </div>
                    <Separator className="bg-white/5" />

                    {/* Case */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Box className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Case</h3>
                        <p className="text-gray-400">
                          {build.specs.case || "Not specified"}
                        </p>
                      </div>
                    </div>
                    <Separator className="bg-white/5" />

                    {/* Cooling */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Fan className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Cooling</h3>
                        <p className="text-gray-400">
                          {build.specs.cooling || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/40 border-blue-950/20">
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>
                    Expected performance in various applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Gaming Performance */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-5 h-5 text-blue-500" />
                          <h3 className="font-semibold">Gaming Performance</h3>
                        </div>
                        <span className="text-2xl font-bold text-blue-500">
                          {build.performance.gaming}%
                        </span>
                      </div>
                      <div className="h-4 bg-black/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                          style={{ width: `${build.performance.gaming}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-400">
                        Excellent for 4K gaming at ultra settings with ray
                        tracing enabled
                      </p>
                    </div>

                    {/* Productivity Performance */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-blue-500" />
                          <h3 className="font-semibold">
                            Productivity Performance
                          </h3>
                        </div>
                        <span className="text-2xl font-bold text-blue-500">
                          {build.performance.productivity}%
                        </span>
                      </div>
                      <div className="h-4 bg-black/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                          style={{
                            width: `${build.performance.productivity}%`,
                          }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-400">
                        Handles heavy multitasking, development, and
                        professional applications with ease
                      </p>
                    </div>

                    {/* Creative Performance */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Palette className="w-5 h-5 text-purple-500" />
                          <h3 className="font-semibold">Creator Performance</h3>
                        </div>
                        <span className="text-2xl font-bold text-purple-500">
                          {build.performance.creator}%
                        </span>
                      </div>
                      <div className="h-4 bg-black/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                          style={{ width: `${build.performance.creator}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-400">
                        Perfect for 4K/8K video editing, 3D rendering, and
                        content creation workflows
                      </p>
                    </div>

                    {/* Overall Performance */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <BarChart2 className="w-5 h-5 text-green-500" />
                          <h3 className="font-semibold">Overall Performance</h3>
                        </div>
                        <span className="text-2xl font-bold text-green-500">
                          {build.performance.overall}%
                        </span>
                      </div>
                      <div className="h-4 bg-black/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-green-700 rounded-full"
                          style={{ width: `${build.performance.overall}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-400">
                        Top-tier performance across all categories, a truly
                        versatile system
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/40 border-blue-950/20">
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                  <CardDescription>
                    What makes this build special
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">
                        Performance Highlights
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>Extreme overclocking potential</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>8K video editing capabilities</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>Ray tracing at maximum settings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>VR-ready with full resolution support</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Build Quality</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>Premium component selection</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>Professional cable management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>Silent operation under load</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>RGB customization options</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/40 border-blue-950/20">
                <CardHeader>
                  <CardTitle>Pricing Breakdown</CardTitle>
                  <CardDescription>
                    Component costs and upgrade options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">
                          Base Configuration
                        </span>
                        <span className="text-xl font-bold">
                          ${build.price}
                        </span>
                      </div>
                      <Separator className="bg-white/5" />
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>CPU</span>
                          <span>$599</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>GPU</span>
                          <span>$1599</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>RAM</span>
                          <span>$299</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Storage</span>
                          <span>$249</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Other Components</span>
                          <span>$253</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Upgrade Options</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                          <h4 className="font-medium mb-2">Storage Upgrade</h4>
                          <p className="text-sm text-gray-400 mb-2">
                            4TB NVMe + 8TB HDD
                          </p>
                          <span className="text-blue-500">+$299</span>
                        </div>
                        <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                          <h4 className="font-medium mb-2">Memory Upgrade</h4>
                          <p className="text-sm text-gray-400 mb-2">
                            128GB DDR5 7200MHz
                          </p>
                          <span className="text-blue-500">+$499</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span>
                        All components include 3-year manufacturer warranty
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
