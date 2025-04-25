"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import  PartList  from "@/MyComponents/PC/part-list"
import { PartType, type Part } from "@/lib/types"
import PCBuilder from "@/MyComponents/PC/pc-builder"

export default function Home() {
    const [selectedParts, setSelectedParts] = useState<Record<PartType, Part | null>>({
        [PartType.CPU]: null,
        [PartType.GPU]: null,
        [PartType.RAM]: null,
        [PartType.STORAGE]: null,
        [PartType.MOTHERBOARD]: null,
        [PartType.COOLER]: null,
      })
    
      const [activeAnimation, setActiveAnimation] = useState<{
        partType: PartType | null
        isAnimating: boolean
      }>({
        partType: null,
        isAnimating: false,
      })
    
      const handleSelectPart = (part: Part) => {
        setActiveAnimation({
          partType: part.type,
          isAnimating: true,
        })
    
        // After animation completes, update the selected parts
        setTimeout(() => {
          setSelectedParts((prev) => ({
            ...prev,
            [part.type]: part,
          }))
    
          setActiveAnimation({
            partType: null,
            isAnimating: false,
          })
        }, 2000) // Animation duration
      }
    
       
          return (
            <div className="min-h-screen bg-gradient-to-b mt-20 from-black via-black to-black text-foreground">
              <header className="container mx-auto py-6">
                <h1 className="text-4xl font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                    Quantum PC Builder
                  </span>
                </h1>
                <p className="text-muted-foreground mt-2">Build your dream PC with our interactive 3D part picker</p>
              </header>
        
              <main className="container mx-auto py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2 overflow-hidden border border-red-500/20 bg-black/40 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="h-[600px] w-full">
                        <PCBuilder selectedParts={selectedParts} activeAnimation={activeAnimation} />
                      </div>
                    </CardContent>
                  </Card>
        
                  <div className="space-y-4">
                    <Card className="border border-red-500/20 bg-black backdrop-blur-sm">
                      <CardContent className="p-4">
                        {/* cpu */}
                        <Tabs defaultValue="cpu" className="w-full ">
                          <TabsList className="grid grid-cols-5 mb-4 bg-black">
                            <TabsTrigger value="cpu">CPU</TabsTrigger>
                            <TabsTrigger value="gpu">GPU</TabsTrigger>
                            <TabsTrigger value="ram">RAM</TabsTrigger>
                            <TabsTrigger value="motherboard">MOTHERBOARD</TabsTrigger>
                            <TabsTrigger value="cooler">COOLER</TabsTrigger>
                          </TabsList>
                          <TabsContent value="cpu">
                            <PartList
                              partType={PartType.CPU}
                              onSelectPart={handleSelectPart}
                              selectedPart={selectedParts[PartType.CPU]}
                              disabled={activeAnimation.isAnimating}
                            />
                          </TabsContent>
                          {/* gpu */}
                          <TabsContent value="gpu">
                            <PartList
                              partType={PartType.GPU}
                              onSelectPart={handleSelectPart}
                              selectedPart={selectedParts[PartType.GPU]}
                              disabled={activeAnimation.isAnimating}
                            />
                          </TabsContent>
                          {/* ram */}
                          <TabsContent value="ram">
                            <PartList
                              partType={PartType.RAM}
                              onSelectPart={handleSelectPart}
                              selectedPart={selectedParts[PartType.RAM]}
                              disabled={activeAnimation.isAnimating}
                            />
                          </TabsContent>
                          <TabsContent value="motherboard">
                            <PartList
                              partType={PartType.MOTHERBOARD}
                              onSelectPart={handleSelectPart}
                              selectedPart={selectedParts[PartType.MOTHERBOARD]}
                              disabled={activeAnimation.isAnimating}
                            />
                          </TabsContent>
                          <TabsContent value="cooler">
                            <PartList
                              partType={PartType.COOLER}
                              onSelectPart={handleSelectPart}
                              selectedPart={selectedParts[PartType.COOLER]}
                              disabled={activeAnimation.isAnimating}
                            />
                          </TabsContent>
                          
                        </Tabs>
                      </CardContent>
                    </Card>
        
                    <Card className="border border-red-500/20 bg-black/40 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-medium mb-2">Selected Components</h3>
                        <div className="space-y-2">
                          {Object.entries(selectedParts).map(([type, part]) => (
                            <div key={type} className="flex justify-between items-center">
                              <span className="text-muted-foreground">{type}:</span>
                              <span className="font-medium">{part ? part.name : "Not selected"}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full mt-4 bg-gradient-to-r from-red-500 via-red-700 to-red-900 hover:from-red-800 hover:to-red-950">
                          Complete Build
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </main>
            </div>
          )
        }
        