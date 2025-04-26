"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { 
  Cpu, Gamepad2, Briefcase, Palette, Rocket, Filter, 
  Search, Star, Heart, Share2, BarChart2, Eye,
  Clock, Trophy, Flame, ChevronRight, SlidersHorizontal,
  ArrowUpDown
} from "lucide-react"
import GradientText from "@/MyComponents/GradientText"
import { motion, AnimatePresence } from "motion/react"
import { Link } from "@/i18n/navigation"
import { useRouter } from "@/i18n/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

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
    motherboard?: string
    psu?: string
    case?: string
    cooling?: string
  }
  performance: {
    gaming: number
    productivity: number
    creator: number
    overall: number
  }
  tags: string[]
  rating: number
  popularity: number
  featured?: boolean
  new?: boolean
  lastUpdated: string
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
      cooling: "Air Cooler"
    },
    performance: {
      gaming: 75,
      productivity: 65,
      creator: 60,
      overall: 70
    },
    tags: ["Budget", "1080p Gaming", "Entry Level"],
    rating: 4.5,
    popularity: 89,
    lastUpdated: "2024-04-15"
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
      cooling: "240mm AIO"
    },
    performance: {
      gaming: 88,
      productivity: 82,
      creator: 78,
      overall: 85
    },
    tags: ["1440p Gaming", "High FPS", "VR Ready"],
    rating: 4.8,
    popularity: 95,
    featured: true,
    lastUpdated: "2024-04-20"
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
      cooling: "360mm Custom Loop"
    },
    performance: {
      gaming: 98,
      productivity: 95,
      creator: 97,
      overall: 97
    },
    tags: ["4K Gaming", "Ultra Settings", "Future Proof"],
    rating: 4.9,
    popularity: 100,
    featured: true,
    new: true,
    lastUpdated: "2024-04-25"
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
      cooling: "280mm AIO"
    },
    performance: {
      gaming: 72,
      productivity: 95,
      creator: 85,
      overall: 88
    },
    tags: ["Development", "Multitasking", "Virtual Machines"],
    rating: 4.7,
    popularity: 92,
    lastUpdated: "2024-04-18"
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
      cooling: "360mm AIO"
    },
    performance: {
      gaming: 90,
      productivity: 98,
      creator: 99,
      overall: 96
    },
    tags: ["4K/8K Video", "3D Rendering", "Content Creation"],
    rating: 4.8,
    popularity: 94,
    featured: true,
    lastUpdated: "2024-04-22"
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
      cooling: "240mm AIO"
    },
    performance: {
      gaming: 85,
      productivity: 88,
      creator: 92,
      overall: 88
    },
    tags: ["Design", "Photography", "Digital Art"],
    rating: 4.6,
    popularity: 87,
    lastUpdated: "2024-04-19"
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
      cooling: "Be Quiet! Tower"
    },
    performance: {
      gaming: 70,
      productivity: 85,
      creator: 90,
      overall: 82
    },
    tags: ["Music Production", "Silent Operation", "Audio Editing"],
    rating: 4.5,
    popularity: 85,
    lastUpdated: "2024-04-17"
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
      cooling: "Low Profile Air"
    },
    performance: {
      gaming: 80,
      productivity: 75,
      creator: 72,
      overall: 76
    },
    tags: ["Small Form Factor", "ITX Build", "Compact"],
    rating: 4.4,
    popularity: 88,
    new: true,
    lastUpdated: "2024-04-23"
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
      cooling: "Silent Fan"
    },
    performance: {
      gaming: 40,
      productivity: 65,
      creator: 50,
      overall: 55
    },
    tags: ["Media Center", "4K Playback", "Silent"],
    rating: 4.3,
    popularity: 82,
    lastUpdated: "2024-04-16"
  }
]

const categories = [
  { id: "all", name: "All Builds", icon: Filter },
  { id: "gaming", name: "Gaming", icon: Gamepad2 },
  { id: "workstation", name: "Workstation", icon: Briefcase },
  { id: "creative", name: "Creative", icon: Palette },
  { id: "compact", name: "Compact", icon: Rocket }
]

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "rating", label: "Top Rated" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "recent", label: "Recently Updated" },
  { value: "performance", label: "Performance" }
]

export default function BuildGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [compareBuilds, setCompareBuilds] = useState<string[]>([])
  const router = useRouter()

  // Get unique tags from all builds
  const allTags = Array.from(new Set(BUILDS.flatMap(build => build.tags)))

// Filter builds based on multiple criteria
const filteredBuilds = BUILDS.filter(build => {
  const categoryMatch = selectedCategory === "all" || build.category === selectedCategory
  const priceMatch = build.price >= priceRange[0] && build.price <= priceRange[1]
  const searchMatch = searchQuery === "" || 
    build.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    build.description.toLowerCase().includes(searchQuery.toLowerCase())
  const tagMatch = selectedTags.length === 0 || 
    selectedTags.some(tag => build.tags.includes(tag))
  
  // Another beautiful example of switch Case ( you can also do this in python in matters of webscraping)
  // Build must match ALL filters to be included
  return categoryMatch && priceMatch && searchMatch && tagMatch
}).sort((a, b) => {
  // Sort the filtered results based on user's selected option
  switch (sortBy) {
    case "popular":
      return b.popularity - a.popularity  // Most popular first
    case "rating":
      return b.rating - a.rating          // Highest rated first
    case "price-low":
      return a.price - b.price            // Cheapest first
    case "price-high":
      return b.price - a.price            // Most expensive first
    case "recent":
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()  // Newest first
    case "performance":
      return b.performance.overall - a.performance.overall  // Best performance first
    default:
      return 0
  }
})

  const featuredBuilds = BUILDS.filter(build => build.featured)

  const toggleCompare = (buildId: string) => {
    setCompareBuilds(prev => {
      if (prev.includes(buildId)) {
        return prev.filter(id => id !== buildId)
      } else if (prev.length < 3) {
        return [...prev, buildId]
      }
      return prev
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-red-950/20">
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Grid background pattern for visual appeal (since we like gridds so much) */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Animated page title and description im just commenting everything so that its easier to spot the important parts */}
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
  
          {/* Search and Filter Bar - Main filtering controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search input field with icon */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search builds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-black/40 border-red-500/20 text-white"
              />
            </div>
            
            {/* Sorting and advanced filters controls */}
            <div className="flex gap-4">
              {/* Sort dropdown menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-red-500/20">
                    <ArrowUpDown className="w-4 h-4 mr-2" />
                    Sort by: {sortOptions.find(opt => opt.value === sortBy)?.label}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black/90 border-red-500/20">
                  {sortOptions.map(option => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className="text-white hover:bg-red-500/20"
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
  
              {/* Advanced filters side sheet */}
              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="border-red-500/20">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-black/95 border-red-500/20">
                  <SheetHeader>
                    <SheetTitle className="text-white">Filters</SheetTitle>
                    <SheetDescription className="text-gray-400">
                      Refine your search with advanced filters
                    </SheetDescription>
                  </SheetHeader>
                  
                  {/* Filter options container */}
                  <div className="mt-6 space-y-6">
                    {/* Price range slider filter */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Price Range</label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={3000}
                        step={100}
                        className="mt-2"
                      />
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                    
                    {/* Tags filter with checkboxes */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Tags</label>
                      <div className="grid grid-cols-2 gap-2">
                        {allTags.map(tag => (
                          <div key={tag} className="flex items-center space-x-2">
                            <Checkbox
                              id={tag}
                              checked={selectedTags.includes(tag)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedTags([...selectedTags, tag])
                                } else {
                                  setSelectedTags(selectedTags.filter(t => t !== tag))
                                }
                              }}
                            />
                            <label htmlFor={tag} className="text-sm text-gray-300">
                              {tag}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
  
          {/* Category Tabs - Main navigation for build types */}
          <div className="flex justify-center">
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="bg-black/40 border border-red-500/20">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    {/* Category icon and name */}
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>
  
      {/* Featured Builds Section - Showcases top builds, only shown on "all" category */}
      {selectedCategory === "all" && (
        <section className="container mx-auto px-6 mb-16">
          {/* Section header with title and "View All" button */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              Featured Builds
            </h2>
            <Button 
              variant="ghost" 
              className="text-red-500 hover:text-red-400"
              onClick={() => setSelectedCategory("featured")}
            >
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          {/* Featured build cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBuilds.map((build, index) => (
              <motion.div
                key={build.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative cursor-pointer"
                onClick={() => router.push(`/Gallery/${build.id}`)}
              >
                <Card className="bg-black/40 border-red-500/30 hover:border-red-500/50 transition-all duration-300 overflow-hidden group">
                  {/* Featured build card image section */}
                  <div className="relative h-48 bg-gradient-to-br from-red-950/30 to-black/50">
                    {/* Placeholder image with opacity effect */}
                    <div className="absolute inset-0 bg-[url('/api/placeholder/400/320')] bg-cover bg-center opacity-20" />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Status badges (New, Featured) */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {build.new && (
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
                          New
                        </Badge>
                      )}
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                        Featured
                      </Badge>
                    </div>
                    
                    {/* Build name and description overlay */}
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{build.name}</h3>
                      <p className="text-sm text-gray-300">{build.description}</p>
                    </div>
                  </div>
  
                  {/* Featured build card content */}
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-3xl font-bold text-red-500">${build.price}</div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-yellow-500">{build.rating}</span>
                      </div>
                    </div>
  
                    <Button 
                      className="w-full bg-red-500 hover:bg-red-600"
                      onClick={() => router.push("/PCBuilder")}
                    >
                      Build This PC
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}
  
      {/* Main Builds Grid Section - Displays all filtered builds */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBuilds.map((build, index) => (
            <motion.div
              key={build.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border-red-950/20 hover:border-red-500/50 transition-all duration-300 group overflow-hidden">
                {/* Build card image header section */}
                <div className="relative h-48 bg-gradient-to-br from-red-950/20 to-black/40">
                  {/* Background image placeholder with low opacity */}
                  <div className="absolute inset-0 bg-[url('/api/placeholder/400/320')] bg-cover bg-center opacity-10" />
                  {/* Grid pattern overlay for visual texture */}
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                  
                  {/* Animated gradient overlay - changes on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-red-950/80 transition-colors duration-500" />
                  
                  {/* Quick action buttons - appear on hover */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" className="h-8 w-8 bg-black/50 hover:bg-red-500/20">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 bg-black/50 hover:bg-red-500/20">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
  
                  {/* Build category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/50 text-white border-none">
                      {categories.find(c => c.id === build.category)?.name}
                    </Badge>
                  </div>
  
                  {/* Performance meter overlay at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <BarChart2 className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-300">Performance</span>
                      </div>
                      <span className="text-sm font-bold text-red-500">{build.performance.overall}%</span>
                    </div>
                    {/* Performance progress bar */}
                    <div className="mt-1 h-1 bg-black/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-red-700"
                        style={{ width: `${build.performance.overall}%` }}
                      />
                    </div>
                  </div>
                </div>
  
                {/* Build card text content section */}
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{build.name}</CardTitle>
                    <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
                      ${build.price}
                    </Badge>
                  </div>
                  {/* Description with line-clamp to show only 1 line */}
                  <CardDescription className="line-clamp-1">{build.description}</CardDescription>
                </CardHeader>
  
                {/* Build card specifications and actions */}
                <CardContent>
                  <div className="space-y-4">
                    {/* Key specs display - only CPU and GPU for cleaner look */}
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-red-500/70" />
                        <span className="text-gray-300 truncate">{build.specs.cpu}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gamepad2 className="w-4 h-4 text-red-500/70" />
                        <span className="text-gray-300 truncate">{build.specs.gpu}</span>
                      </div>
                    </div>
  
                    {/* Simplified performance metric display */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <BarChart2 className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-400">Performance</span>
                      </div>
                      <span className="text-sm font-bold text-red-500">{build.performance.overall}%</span>
                    </div>
  
                    {/* Minimal footer stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>{build.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span>{build.popularity}%</span>
                      </div>
                    </div>
  
                    {/* Action buttons for details and build */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        variant="outline" 
                        className="flex-1 group-hover:border-red-500/50"
                        onClick={() => router.push(`/Gallery/${build.id}`)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                      <Button 
                        className="flex-1 bg-red-500 hover:bg-red-600"
                        onClick={() => router.push("/PCBuilder")}
                      >
                        Build This
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
  
        {/* Empty state when no builds match filters */}
        {filteredBuilds.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
              <Search className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No builds found</h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your filters or search criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setPriceRange([0, 3000])
                setSelectedTags([])
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
  
        {/* Compare bar - Fixed bottom bar when builds are selected for comparison */}
        <AnimatePresence>
          {compareBuilds.length > 0 && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-0 left-0 right-0 bg-black/95 border-t border-red-500/20 p-4"
            >
              <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">
                    Comparing {compareBuilds.length} build{compareBuilds.length !== 1 ? 's' : ''}
                  </span>
                  <div className="flex gap-2">
                    {compareBuilds.map(buildId => {
                      const build = BUILDS.find(b => b.id === buildId)
                      return build ? (
                        <Badge key={buildId} variant="outline" className="border-red-500/20">
                          {build.name}
                        </Badge>
                      ) : null
                    })}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setCompareBuilds([])}
                  >
                    Clear
                  </Button>
                  <Button
                    className="bg-red-500 hover:bg-red-600"
                    disabled={compareBuilds.length < 2}
                  >
                    Compare Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}