"use client";

import { useState } from "react";



export default function Home() {

  const [selectedParts, setSelectedParts] = useState<Record<PartType, Part | null>>({
    [PartType.CPU]: null,
    [PartType.GPU]: null,
    [PartType.RAM]: null,
    [PartType.STORAGE]: null,
    [PartType.MOTHERBOARD]: null,
    [PartType.COOLER]: null,
  })

  return (
    <> 
    
    </>
  );
}
