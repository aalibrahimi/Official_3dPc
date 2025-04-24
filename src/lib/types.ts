// Made the enum a const bc it compiles into less JS code after compiling TS into JS
// *This also made it so you can use the enum for actual string values I think, but I gotta refresh my mind on that
export const enum PartType {
  CPU = "CPU",
  GPU = "GPU",
  RAM = "RAM",
  STORAGE = "STORAGE",
  MOTHERBOARD = "MOTHERBOARD",
  COOLER = "COOLER",
}

export interface Part {
  readonly id: string;
  name: string;
  // type: PartType;
  specs: string;
  price: number;
  color?: string;
}

// With the following extentions, I made it so only that type can be assigned to the part.
// So only "CPU" type can be assigned to CPU parts
interface CPUPart extends Part {
  readonly type: "CPU";
}

interface GPUPart extends Part {
  readonly type: "GPU";
}

interface RAMPart extends Part {
  readonly type: "RAM";
}

interface STORAGEPart extends Part {
  readonly type: "STORAGE";
}

interface MOTHERBOARDPart extends Part {
  readonly type: "MOTHERBOARD";
}

interface COOLERPart extends Part {
  readonly type: "COOLER";
}

// here is the mock data you can play around with until we use kohis inventory

const cpuParts: CPUPart[] = [
  // speed running so literally changing only name on id by 1 and name by 1
  {
    id: "cpu-1",
    name: "ryzen 8 7900",
    type: "CPU",
    specs: "24 Cores, 4.2GHZ, 36MB Cache",
    price: 599,
    color: "5f27cd",
  },
  {
    id: "cpu-2",
    name: "ryzen 9 7900",
    type: "CPU",
    specs: "24 Cores, 4.2GHZ, 36MB Cache",
    price: 599,
    color: "5f27cd",
  },
  {
    id: "cpu-3",
    name: "ryzen 7 7900",
    type: "CPU",
    specs: "24 Cores, 4.2GHZ, 36MB Cache",
    price: 599,
    color: "5f27cd",
  },
  {
    id: "cpu-4",
    name: "ryzen 6 7900",
    type: "CPU",
    specs: "24 Cores, 4.2GHZ, 36MB Cache",
    price: 599,
    color: "5f27cd",
  },
];

const gpuParts: GPUPart[] = [
  {
    id: "gpu-1",
    name: "nvida 4090",
    type: "GPU",
    specs: "24GB GGD6X, 16384 CUDA Cores",
    price: 3999,
    color: "#0abde3",
  },
  {
    id: "gpu-2",
    name: "nvida 4090",
    type: "GPU",
    specs: "24GB GGD6X, 16384 CUDA Cores",
    price: 3999,
    color: "#0abde3",
  },
  {
    id: "gpu-3",
    name: "nvida 4090",
    type: "GPU",
    specs: "24GB GGD6X, 16384 CUDA Cores",
    price: 3999,
    color: "#0abde3",
  },
  {
    id: "gpu-4",
    name: "nvida 4090",
    type: "GPU",
    specs: "24GB GGD6X, 16384 CUDA Cores",
    price: 3999,
    color: "#0abde3",
  },
];

const ramParts: RAMPart[] = [
  {
    id: "ram-1",
    name: "vengeance",
    type: "RAM",
    specs: "16GB (2x8GB), CL28, RGB",
    price: 490,
    color: "#aaab6f",
  },
  {
    id: "ram-2",
    name: "vengeance1",
    type: "RAM",
    specs: "16GB (2x8GB), CL28, RGB",
    price: 490,
    color: "#aaab6f",
  },
  {
    id: "ram-3",
    name: "vengeance2",
    type: "RAM",
    specs: "16GB (2x8GB), CL28, RGB",
    price: 490,
    color: "#aaab6f",
  },
  {
    id: "ram-4",
    name: "vengeance3",
    type: "RAM",
    specs: "16GB (2x8GB), CL28, RGB",
    price: 490,
    color: "#aaab6f",
  },
];

const storageParts: STORAGEPart[] = [
  {
    id: "storage-1",
    name: "SAMSUNG 990 PRO 2TB - 1",
    type: "STORAGE",
    specs: "2TB, Read 7450MB/s, Write 6900MB/s",
    price: 169.99,
    color: "#5116bb",
  },
  {
    id: "storage-2",
    name: "SAMSUNG 990 PRO 2TB - 2",
    type: "STORAGE",
    specs: "2TB, Read 7450MB/s, Write 6900MB/s",
    price: 169.99,
    color: "#5116bb",
  },
  {
    id: "storage-3",
    name: "SAMSUNG 990 PRO 2TB - 3",
    type: "STORAGE",
    specs: "2TB, Read 7450MB/s, Write 6900MB/s",
    price: 169.99,
    color: "#5116bb",
  },
  {
    id: "storage-4",
    name: "SAMSUNG 990 PRO 2TB - 4",
    type: "STORAGE",
    specs: "2TB, Read 7450MB/s, Write 6900MB/s",
    price: 169.99,
    color: "#5116bb",
  },
];

const motherParts: MOTHERBOARDPart[] = [
  {
    id: "mother-1",
    name: "A320M-1",
    type: "MOTHERBOARD",
    specs: "1 PCIe 3.0 x16, 1 PCIe 2.0 x1",
    price: 299,
    color: "#504444",
  },
  {
    id: "mother-2",
    name: "A320M-2",
    type: "MOTHERBOARD",
    specs: "1 PCIe 3.0 x16, 1 PCIe 2.0 x1",
    price: 299,
    color: "#504444",
  },
  {
    id: "mother-3",
    name: "A320M-3",
    type: "MOTHERBOARD",
    specs: "1 PCIe 3.0 x16, 1 PCIe 2.0 x1",
    price: 299,
    color: "#504444",
  },
  {
    id: "mother-4",
    name: "A320M-4",
    type: "MOTHERBOARD",
    specs: "1 PCIe 3.0 x16, 1 PCIe 2.0 x1",
    price: 299,
    color: "#504444",
  },
];

const coolerPart: COOLERPart[] = [
  {
    id: "cooler-1",
    name: "SILENT WINGS PRO 4 - 1",
    type: "COOLER",
    specs: "From 1600 rpm & Up to 3000 rpm",
    price: 35,
    color: "#07040c",
  },
  {
    id: "cooler-2",
    name: "SILENT WINGS PRO 4 - 2",
    type: "COOLER",
    specs: "From 1600 rpm & Up to 3000 rpm",
    price: 35,
    color: "#07040c",
  },
  {
    id: "cooler-3",
    name: "SILENT WINGS PRO 4 - 3",
    type: "COOLER",
    specs: "From 1600 rpm & Up to 3000 rpm",
    price: 35,
    color: "#07040c",
  },
  {
    id: "cooler-4",
    name: "SILENT WINGS PRO 4 - 4",
    type: "COOLER",
    specs: "From 1600 rpm & Up to 3000 rpm",
    price: 35,
    color: "#07040c",
  },
];

// continue with thee rest of the parts  in the samme maanner, so motherboard would be next

// The 'type' param accepts are Part Types ( dynamically updated ), but idk why is capitalizes the lowercase ones. Prob bc it's enum? idk
export function getParts(type: keyof typeof PartType) {
  switch (type) {
    case PartType.CPU:
      return cpuParts;
    case PartType.GPU:
      return gpuParts;
    case PartType.RAM:
      return ramParts;
    case PartType.STORAGE:
      return storageParts;
    case PartType.MOTHERBOARD:
      return motherParts;
    case PartType.COOLER:
      return coolerPart;
    default:
      return [];
  }
}
