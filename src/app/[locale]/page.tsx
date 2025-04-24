"use client";

import { PartType, Part } from "@/lib/types";
import PartList from "@/MyComponents/part-list";
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
    <PartList partType={PartType.CPU} onSelectPart={function (part: Part): void {
        throw new Error("Function not implemented.");
      } } selectedPart={null} disabled={false} />
    </>
  );
}
