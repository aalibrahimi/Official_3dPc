"use client"

interface PartsListProps {
  partType: PartType
  onSelectPart: (part: Part) => void
  selectedPart: Part | null
  disabled: boolean
}

export default function PartList({ partType, onSelectPart, selectedPart, disabled} : PartsListProps) {
    const parts = getParts(partType)
}