"use client";

import { PartType, Part } from "@/lib/types";
import PartList from "@/MyComponents/PC/part-list";
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
    {/* For "onSelectedPart", just input the part's ID */}
    <PartList partType={PartType.CPU} onSelectPart={function (part): void {
        throw new Error("Function not implemented.");
      } } selectedPart={null} disabled={false} />
    </>
  );
}
