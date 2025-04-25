"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "motion/react"
import { Cpu, Sparkles, Users, Target } from "lucide-react"
import GradientText from "@/MyComponents/GradientText"

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
const testimonials: Testimonial[] = [
  {
    name: "Jonathan Yombo",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "Hasan is really extraordinary and very practical, no need to break your head. A real gold mine.",
  },
  {
    name: "Yves Kalume",
    role: "GDE - Android",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Hasan.",
  },
  {
    name: "Yucel Faruksahan",
    role: "Tailkits Creator",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote: "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)",
  },
  {
    name: "Anonymous author",
    role: "Doing something",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "I am really new to Tailwind and I want to give a go to make some page on my own. I searched a lot of hero pages and blocks online. However, most of them are not giving me a clear view or needed some HTML/CSS coding background to make some changes from the original or too expensive to have. I downloaded the one of Hasan template which is very clear to understand at the start and you could modify the codes/blocks to fit perfectly on your purpose of the page.",
  },
  {
    name: "Shekinah Tshiokufila",
    role: "Senior Software Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Hasan is redefining the standard of web design, with these blocks it provides an easy and efficient way for those who love beauty but may lack the time to implement it. I can only recommend this incredible wonder.",
  },
  {
    name: "Hanif",
    role: "Fullstack Developer and COO At CODEWITHALI",
    image: "/codewithali.png",
    quote:
      "I absolutely love Hasan! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.",
  },
  {
    name: "Zeki",
    role: "Founder of ChatExtend",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
  },
  {
    name: "Ali",
    role: "Fullstack Developer and CEO At Codewithali",
    image: "/codewithali.png",
    quote:
      "Hasan has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Hasan is a game-changer for modern web development!",
  },
  {
    name: "Khatab Wedaa",
    role: "MerakiUI Creator",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "Hasan is an elegant, clean, and responsive tailwind css components it's very helpful to start fast with your project.",
  },
  {
    name: "Rodrigo Aguilar",
    role: "TailwindAwesome Creator",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "I love Hasan ❤️. The component blocks are well-structured, simple to use, and beautifully designed. It makes it really easy to have a good-looking website in no time.",
  },
  {
    name: "Eric Ampire",
    role: "Mobile Engineer at @BRPNews • @GoogleDevExpert for Android",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Hasan templates are the perfect solution for anyone who wants to create a beautiful and functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help. I highly recommend Hasan templates to anyone who is looking to create a website.",
  },
  {
    name: "Roland Tubonge",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "Hasan is so well designed that even with a very poor knowledge of web design you can do miracles. Let yourself be seduced!",
  },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
  const result: Testimonial[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-b from-black via-black to-red-950/60">
          {/* Hero Section with Hasan's Story */}
          <section className="relative pt-24 pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="relative z-10 mx-auto max-w-6xl px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                 <GradientText>  Meet Hasan El-Haj </GradientText>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  The visionary behind PCPartPicker's revolutionary 3D part visualization system
                </p>
              </motion.div>
    
              {/* Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <Card className="bg-black/40 border-red-950/20 hover:border-red-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                        <Target className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Vision</h3>
                      <p className="text-gray-400 text-sm">
                        Making PC building accessible and intuitive for everyone through visual technology
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
    
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.3 }}
                  className="group"
                >
                  <Card className="bg-black/40 border-red-950/20 hover:border-red-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                        <Cpu className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                      <p className="text-gray-400 text-sm">
                        Pioneering 3D visualization to eliminate compatibility guesswork
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
    
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.4 }}
                  className="group"
                >
                  <Card className="bg-black/40 border-red-950/20 hover:border-red-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                        <Sparkles className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Experience</h3>
                      <p className="text-gray-400 text-sm">
                        Creating an immersive journey that educates while it entertains
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
    
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.5 }}
                  className="group"
                >
                  <Card className="bg-black/40 border-red-950/20 hover:border-red-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                        <Users className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Community</h3>
                      <p className="text-gray-400 text-sm">
                        Building with a team of passionate developers and designers
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
    
              {/* Story Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">The Journey</h2>
                  <p className="text-gray-300 leading-relaxed">
                    As someone who's built countless PCs, I experienced firsthand the frustration of 
                    compatibility issues and the anxiety of not knowing if parts would fit. That's 
                    why I created PCPartPicker's 3D visualization system - to transform this process 
                    from guesswork into an interactive, educational experience.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our 3D part picker uses advanced Three.js rendering to create realistic, 
                    interactive components that you can preview before purchasing. Each part animates 
                    into place, giving you confidence in your build before spending a single dollar.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-900/20 rounded-3xl blur-3xl" />
                  <Card className="relative bg-black/40 border-red-950/20 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="aspect-video bg-gradient-to-br from-red-500/10 to-red-900/10 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Cpu className="w-16 h-16 text-red-500 mx-auto mb-4" />
                          <p className="text-xl font-semibold">3D Visualization Demo</p>
                          <p className="text-sm text-gray-400 mt-2">Interactive preview coming soon</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
    
              {/* Team Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-center mb-20"
              >
                <h2 className="text-3xl font-bold mb-6">Built With Amazing People</h2>
                <p className="text-gray-300 max-w-3xl mx-auto mb-8">
                  This project wouldn't be possible without the incredible team at CodeWithAli and 
                  our community of developers who contributed to making this vision a reality. 
                  Special thanks to our lead developers, 3D artists, and UI/UX designers who pushed 
                  the boundaries of what's possible in web-based PC building tools.
                </p>
                <div className="flex justify-center gap-4">
                  <span className="px-4 py-2 bg-red-500/10 rounded-full text-red-500 text-sm">10+ Contributors</span>
                  <span className="px-4 py-2 bg-red-500/10 rounded-full text-red-500 text-sm">1000+ Hours</span>
                  <span className="px-4 py-2 bg-red-500/10 rounded-full text-red-500 text-sm">Infinite Passion</span>
                </div>
              </motion.div>
            </div>
          </section>
    
          {/* Testimonials Section (Existing) */}
          <section>
            <div className="py-16 md:py-32">
              <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                  <h2 className="text-title text-3xl font-semibold">Loved by the Community</h2>
                  <p className="text-body mt-6">Harum quae dolore orrupti aut temporibus ariatur.</p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 ">
                  {testimonialChunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="space-y-3 ">
                      {chunk.map(({ name, role, quote, image }, index) => (
                        <Card key={index} className="bg-black border-red-950">
                          <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6 ">
                            <Avatar className="size-9">
                              <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                              <AvatarFallback>ST</AvatarFallback>
                            </Avatar>
    
                            <div>
                              <h3 className="font-medium">{name}</h3>
    
                              <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>
    
                              <blockquote className="mt-3">
                                <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                              </blockquote>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }