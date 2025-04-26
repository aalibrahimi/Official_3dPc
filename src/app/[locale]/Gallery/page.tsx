"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Gamepad2, Briefcase, Palette, Rocket, Filter } from "lucide-react"
import GradientText from "@/MyComponents/GradientText"
import { motion } from "motion/react"
import { Link } from "@/i18n/navigation"
import { useRouter } from "@/i18n/navigation"

interface Build {
  id: string
  name: string
  category: string
  price: number
  description: string
  specs: {
    cpu: string
    gpu: string
    ram: string
    storage: string
  }
  image?: string
  tags: string[]
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
      storage: "512GB NVMe SSD"
    },
    tags: ["Budget", "1080p Gaming", "Entry Level"]
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
      storage: "1TB NVMe Gen4 SSD"
    },
    tags: ["1440p Gaming", "High FPS", "VR Ready"]
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
      storage: "2TB NVMe Gen4 SSD + 4TB HDD"
    },
    tags: ["4K Gaming", "Ultra Settings", "Future Proof"]
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
      storage: "2TB NVMe SSD"
    },
    tags: ["Development", "Multitasking", "Virtual Machines"]
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
      storage: "4TB NVMe SSD + 8TB HDD"
    },
    tags: ["4K/8K Video", "3D Rendering", "Content Creation"]
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
      storage: "2TB NVMe SSD"
    },
    tags: ["Design", "Photography", "Digital Art"]
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
      storage: "1TB NVMe SSD + 2TB HDD"
    },
    tags: ["Music Production", "Silent Operation", "Audio Editing"]
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
      storage: "1TB NVMe SSD"
    },
    tags: ["Small Form Factor", "ITX Build", "Compact"]
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
      storage: "512GB NVMe SSD"
    },
    tags: ["Media Center", "4K Playback", "Silent"]
  }
]

const categories = [
  { id: "all", name: "All Builds", icon: Filter },
  { id: "gaming", name: "Gaming", icon: Gamepad2 },
  { id: "workstation", name: "Workstation", icon: Briefcase },
  { id: "creative", name: "Creative", icon: Palette },
  { id: "compact", name: "Compact", icon: Rocket }
]

export default function BuildGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceFilter, setPriceFilter] = useState<"all" | "budget" | "mid" | "high">("all")
  const router = useRouter()

  const filteredBuilds = BUILDS.filter(build => {
    const categoryMatch = selectedCategory === "all" || build.category === selectedCategory
    let priceMatch = true
    
    if (priceFilter === "budget") priceMatch = build.price < 1000
    if (priceFilter === "mid") priceMatch = build.price >= 1000 && build.price < 2000
    if (priceFilter === "high") priceMatch = build.price >= 2000
    
    return categoryMatch && priceMatch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-red-950/20">
      {/* Header Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <GradientText>Build Gallery</GradientText>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our curated collection of PC builds for every need and budget
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="bg-black/40 border border-red-500/20">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Price Filter */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={priceFilter === "all" ? "default" : "outline"}
              onClick={() => setPriceFilter("all")}
              className={priceFilter === "all" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              All Prices
            </Button>
            <Button
              variant={priceFilter === "budget" ? "default" : "outline"}
              onClick={() => setPriceFilter("budget")}
              className={priceFilter === "budget" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              Under $1000
            </Button>
            <Button
              variant={priceFilter === "mid" ? "default" : "outline"}
              onClick={() => setPriceFilter("mid")}
              className={priceFilter === "mid" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              $1000 - $2000
            </Button>
            <Button
              variant={priceFilter === "high" ? "default" : "outline"}
              onClick={() => setPriceFilter("high")}
              className={priceFilter === "high" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              $2000+
            </Button>
          </div>
        </div>
      </section>

      {/* Builds Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBuilds.map((build, index) => (
            <motion.div
              key={build.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border-red-950/20 hover:border-red-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{build.name}</CardTitle>
                    <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
                      ${build.price}
                    </Badge>
                  </div>
                  <CardDescription>{build.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">CPU:</span>
                        <p className="text-gray-300">{build.specs.cpu}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">GPU:</span>
                        <p className="text-gray-300">{build.specs.gpu}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">RAM:</span>
                        <p className="text-gray-300">{build.specs.ram}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Storage:</span>
                        <p className="text-gray-300">{build.specs.storage}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {build.tags.map(tag => (
                        <Badge 
                          key={tag} 
                          variant="outline"
                          className="border-red-500/20 text-red-500/80"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button 
                        variant="outline" 
                        className="flex-1 group-hover:border-red-500/50"
                      >
                        View Details
                      </Button>
                      <Button 
                        className="flex-1 bg-red-500 hover:bg-red-600"
                        onClick={() => {
                          // Here you could later implement logic to pass the build data to PCBuilder
                          router.push("/PCBuilder")
                        }}
                      >
                        Use This Build
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredBuilds.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No builds found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}