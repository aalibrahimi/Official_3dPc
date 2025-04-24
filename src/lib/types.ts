export enum PartType {
  CPU = "CPU",
  GPU = "GPU",
  RAM = "RAM",
  STORAGE = "storage",
  MOTHERBOARD = "Motherboard",
  COOLER = "Cooler",
}

export interface Part {
  id: string;
  name: string;
  type: PartType;
  specs: string;
  price: number;
  color?: string;
}

// here is the mock data you can play around with until we use kohis inventory

const cpuParts: Part[] = [
    // speed running so literally changing only name on id by 1 and name by 1
  {
    id: "cpu-1",
    name: "ryzen 8 7900",
    type: PartType.CPU,
    specs: "24 Cores, 4.2GHZ, 36MB Cache",
    price: 599,
    color: "5f27cd",
  },
  {
    id: "cpu-2",
    name: "ryzen 9 7900",
    type: PartType.CPU,
    specs: "24 Cores, 4.2GHZ, 36MB Cache",
    price: 599,
    color: "5f27cd",
  },
  {
    id: "cpu-3",
    name: "ryzen 7 7900",
    type: PartType.CPU,
    specs: "24 Cores, 4.2GHZ, 36MB Cache",
    price: 599,
    color: "5f27cd",
  },
  {
    id: "cpu-4",
    name: "ryzen 6 7900",
    type: PartType.CPU,
    specs: "24 Cores, 4.2GHZ, 36MB Cache",
    price: 599,
    color: "5f27cd",
  },
];

const gpuParts: Part[] = [
  {
    id: "gpu-1",
    name: "nvida 4090",
    type: PartType.GPU,
    specs: "24GB GGD6X, 16384 CUDA Cores",
    price: 3999,
    color: "#0abde3",
  },
  {
    id: "gpu-2",
    name: "nvida 4090",
    type: PartType.GPU,
    specs: "24GB GGD6X, 16384 CUDA Cores",
    price: 3999,
    color: "#0abde3",
  },
  {
    id: "gpu-3",
    name: "nvida 4090",
    type: PartType.GPU,
    specs: "24GB GGD6X, 16384 CUDA Cores",
    price: 3999,
    color: "#0abde3",
  },
  {
    id: "gpu-4",
    name: "nvida 4090",
    type: PartType.GPU,
    specs: "24GB GGD6X, 16384 CUDA Cores",
    price: 3999,
    color: "#0abde3",
  },
];


const ramParts : Part[] = [
    {
        id: "ram-1",
        name : "vengeance",
        type : PartType.RAM,
        specs : "16GB (2x8GB), CL28, RGB",
        price : 490,
        color : "#aaab6f",
        
    },
    {
        id: "ram-2",
        name : "vengeance1",
        type : PartType.RAM,
        specs : "16GB (2x8GB), CL28, RGB",
        price : 490,
        color : "#aaab6f",
        
    },
    {
        id: "ram-3",
        name : "vengeance2",
        type : PartType.RAM,
        specs : "16GB (2x8GB), CL28, RGB",
        price : 490,
        color : "#aaab6f",
        
    },
    {
        id: "ram-4",
        name : "vengeance3",
        type : PartType.RAM,
        specs : "16GB (2x8GB), CL28, RGB",
        price : 490,
        color : "#aaab6f",
        
    },
]

// continue with thee rest of the parts  in the samme maanner, so motherboard would be next


export function getParts(type: PartType) : Part[] {
    switch (type){
        case PartType.CPU:
            return cpuParts
        case PartType.GPU:
            return gpuParts
        case PartType.RAM:
            return ramParts
        default:
            return []
    }
}