"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getParts, Part, PartType } from "@/lib/types"

interface PartsListProps {
  partType: keyof typeof PartType
  onSelectPart: (part: Part) => void
  selectedPart: Part | null
  disabled: boolean
}

export default function PartList({ partType, onSelectPart, selectedPart, disabled} : PartsListProps) {
    const parts = getParts(partType)

    return(
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {parts.map((part) => (
               <Card
                key={part.id}
                className={`transition-all duration-300 hover:shadow-lg bg-black hover:shadow-red-500/20 cursor-pointer border ${
                    selectedPart?.id === part.id ? "border-red-500" : "border-border hover:border-red-500/50"
                }`}
               >
                 <CardContent className="p-3 flex items-center gap-3 ">
                    <div
                        style={{ backgroundColor: part.color || "5f27cd" }}
                        className="w-12 h-12 rounded-md flex  items-center justify-center"
                    >
                        <span className="text-white font-bold text-sm">{part.type.substring(0,3)}</span>
                        
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium text-sm">{part.name}</h3>
                        <p className="text-sm text-muted-foreground">{part.specs}</p>
                       
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        
                        <Badge className="bg-red-950/1 text-red-500 outline">${part.specs}</Badge>
                        <p className="flex  justify-end">${part.price}</p>
                        <Button 
                        size="sm"
                        variant={selectedPart?.id  === part.id ?  "default" : "outline"}
                        onClick={() => onSelectPart(part)}
                        disabled={disabled || selectedPart?.id === part.id}
                        className="">
                            {selectedPart?.id === part.id ? "Selected" : "Select"}
                        </Button>
                    </div>
                </CardContent>

               </Card>
            ))}
        </div>
    )

}