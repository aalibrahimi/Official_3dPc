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
  url?: string;
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
    name: "Intel® Core™ i7-11700K",
    type: "CPU",
    specs: "8 Cores 16 Threads, 3.6 GHz, up to 5.0 GHz",
    price: 299,
    color: "5f27cd",
    url: "https://www.amazon.com/Intel-i7-11700K-Desktop-Processor-Unlocked/dp/B08X6ND3WP/ref=sr_1_1?crid=26ZS9KXP8R7SB&dib=eyJ2IjoiMSJ9.R4aAwCLAwJX3Hv8yZ5I6zBShwfObLDuh5dGcRFs4FkVXXmx2opv7foq8YZaG1Gdl8EeUG8JmnDvgV3LUo3LlzAuGPg5tAklsoYOOT1ZzDEK9TmCxMe-6iElqAAfm5KkbeGaumcTSIyHN-QwpqoYefR5XeO6w2GkxO4XuRXnUK3VeSr_LJYvws4nMZupAp9njlM66KZ_0-wpbElY8hqoJHTY3wfG9NYjlvYiVHwrb9BQ.z5JLMM5mQdh0e0dgDbuMKfEC5N6cIXoe0bZFY36z-GU&dib_tag=se&keywords=Intel%C2%AE%2BCore%E2%84%A2%2Bi7-11700K&qid=1745498278&sprefix=nvidia%2B5070%2Caps%2C377&sr=8-1&th=1"
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
    name: "NVIDIA 3060 Ti",
    type: "GPU",
    specs: "12GB GDDR6, ray tracing and DLSS support",
    price: 389.61,
    color: "#0abde3",
    url: "https://www.amazon.com/MSI-GeForce-Ventus-NVIDIA-Graphics/dp/B08WHJFYM8/ref=sr_1_1_mod_primary_new?crid=FGRN7ROVUQIV&dib=eyJ2IjoiMSJ9.YZBiYQfacTVoCdAeHKqGnPU-7v5ebuCg8uA-L0fawjF-4kSxpA2_366hbg7BvhNLToLzvI-esmKXRY9xzuM0YW33yqjgthEOj8ZpQrBtj8vgvh1U6Cuabfx0THfWhRO5_GNgCk0h4dMlOpN3XbjByakhzjrdGBXet5ARHRTYkRBtokdDRcv46Swefd8-ig4fqbTiVkPiyAL2lvo3VrerQRpDvlZnZtbKRTQ2m_fE1HE.cXvKCjHSetXH9IVdq0Wvfp5PfKmSGUx3mKvz3CTo4m8&dib_tag=se&keywords=nvidia%2B3060%2Bti&qid=1745497975&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=nvidia%2B3060%2Bti%2Caps%2C170&sr=8-1&th=1"
  },
  {
    id: "gpu-2",
    name: "Gigabyte Radeon RX 9070 XT",
    type: "GPU",
    specs: "16 GB GDDR6",
    price: 1240.15,
    color: "#0abde3",
    url: "https://www.amazon.com/Gigabyte-AORUS-Radeon-Elite-Graphics/dp/B0DT7C5ZC7/ref=sr_1_1?crid=2SVGYU6OYYELH&dib=eyJ2IjoiMSJ9.8QdNwlIRm6-6ORJ405JsT0dm5xqZAVMUImFRUkoc4RhLq5fve1SVskCPQ95ERa_IKVHzWJgnH0O9-OazA_-hp61myIWGdO0mv_qBK80NrHZ7R3aclChztBsuucwJRFlUz7tE7QBBEJLk9cKwkTGP1dL2FKelldrWaR8ikmJ8mkEO5E9w0R-YE7HUxRG0Xgz6TqSh5kEHX0Z9OJqQo-Vb2wXCwSjzkpNhLdA4pQoOBKU.q-gLclLVmqhkDRawM_c8LEdwmA6bnzKwyMo4WsEYDQM&dib_tag=se&keywords=gigabite+9070+xt+oc&qid=1745499210&sprefix=gigabite+9070+xt+oc%2Caps%2C346&sr=8-1"
  },
  {
    id: "gpu-3",
    name: "GIGABYTE GeForce RTX 5070 Ti Gaming OC",
    type: "GPU",
    specs: "16GB GDDR7",
    price: 969.99,
    color: "#0abde3",
    url: "https://www.amazon.com/GIGABYTE-Graphics-WINDFORCE-GV-N507TGAMING-OC-16GD/dp/B0DTRC7782/ref=sr_1_1?crid=3KF414JWTE982&dib=eyJ2IjoiMSJ9.45NhbKR3inWAe52E7IrfFmZF2acRC1CFnxmP6z9qkQwFL1NBJyOHA1xTFXc98C_rFcqkabUxYr8OFoPyHqGDTqDjtIrB2gzhrCuqaz8WZHAey5WXtczrvPPbV8FDoS3eJaJKsBYhZDmE3bpoI1XPUQPL4f4UaISFc1rviop7DMaq_QTe622mrL4OdL_la4GQSRyrY35O1BRo0hGBRgpUyYkTZ7EICmR2KMHgLGEkcyg.TU6mxSLs3rwVaLxzO7Strowl_RaZLpArtF7teRaRH7I&dib_tag=se&keywords=nvidia+5070+ti&qid=1745499280&sprefix=nvidia+5070+ti%2Caps%2C156&sr=8-1"
  },
  {
    id: "gpu-4",
    name: "GeForce RTX 3080 Gaming OC",
    type: "GPU",
    specs: "10GB GDDR6X",
    price: 949.99,
    color: "#0abde3",
    url: "https://www.amazon.com/GIGABYTE-GeForce-Graphics-WINDFORCE-GV-N3080GAMING/dp/B098TZ3RMZ/ref=sr_1_9?crid=IL4XSMVQ3TI3&dib=eyJ2IjoiMSJ9.rJ9RmzXmUshzv4JL80WnWxm4ey2nViF26lwKhkkJkETRWRwjYSNQ_9aGTnC9ij3K6Ppcebkte2GuUbuGIqEDO7fRQIoxB0xlWKqCgZ9l2Z47nYECLPAh8CPgKhGrpS6-2gwLR2E7UnnnWLB72rT3-R81fXXsN1H2CtFCJFru2n1VJKWzPnYVtMTm9Wj0IRJjP4mQT8D8eSnS-pKICN3n1kuLUm-EYNb1mNl0kh9MLDw.dQ0l98YXRVjobFx9Ol5y1Ax6-KDM9C-nucnjDyonkXA&dib_tag=se&keywords=nvidia+3080&qid=1745498423&sprefix=nvidia+%2Caps%2C202&sr=8-9"
  },
];

const ramParts: RAMPart[] = [
  {
    id: "ram-1",
    name: "Kingston FURY Impact 32GB",
    type: "RAM",
    specs: "32GB (2x16GB), DDR4, 3200 MHz",
    price: 68.99,
    color: "#aaab6f",
    url: "https://www.amazon.com/Kingston-FURY-3200MHz-KF432S20IBK2-32/dp/B097QJ25NY/ref=ci_mcx_mr_mp_m_d_sccl_1_1/130-7720089-8210067?pd_rd_w=vwLOD&content-id=amzn1.sym.904f4c18-630f-4c52-8bdf-78921242d9bd%3Aamzn1.symc.27c848cf-47ab-487b-bd07-91bc659e0119&pf_rd_p=904f4c18-630f-4c52-8bdf-78921242d9bd&pf_rd_r=VPN321S7MGCDYRQ51KQE&pd_rd_wg=VNNqz&pd_rd_r=0ec87997-2e37-42ca-81b5-7ea772f6e329&pd_rd_i=B097QJ25NY&th=1"
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
    name: "WD_BLACK 500GB",
    type: "STORAGE",
    specs: "500 GB, PCIe Gen4 NVMe, 7,250MB/s read and 6,800MB/s write",
    price: 54,
    color: "#5116bb",
    url: "https://www.amazon.com/WD_BLACK-SN7100-Internal-Gaming-Solid/dp/B0DN7JK8T4/ref=sr_1_2_sspa?crid=3Q63YLPXWCP1&dib=eyJ2IjoiMSJ9.Wgb7eJVaIO2cTfesZAxC3KnH1T4PzrfilShP8cHeJcviyzF4k38y1R3dv9d-_RCwICBbji10XvNusuIc3pXnV9etoXqmLqFBxpD41ae0VIOQ-fGOM0iIpqnY33O3xcgy8J7Dv2qZ_Kdg9CuAau0R2GhKc3bQCzdzE4k9nGv93l4EZQHMX4qV4WMhVoYRiuXvsqKu5_cKpAXz5WrbQbfwGsxEBSpsAwySN1DadNDBlGM.nZMwKADqI4ffhCv1lxgR8BDoLSkOafleY2TKE3pLbj8&dib_tag=se&keywords=nvme%2Btlc%2Bm.2%2Bssd&qid=1745498765&sprefix=NVMe%E2%84%A2%2BTLC%2BM.2%2BSSD%2Caps%2C210&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.9fe8cbfa-bf43-43d1-a707-3f4e65a4b666&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
  },
  {
    id: "storage-2",
    name: "Seagate BarraCuda 2TB",
    type: "STORAGE",
    specs: "2TB, SATA 6Gb/s 7200 RPM",
    price: 59.99,
    color: "#5116bb",
    url: "https://www.amazon.com/Seagate-BarraCuda-Internal-Drive-3-5-Inch/dp/B07H2RR55Q/ref=sr_1_3?crid=24Z8EV5HMLXD&dib=eyJ2IjoiMSJ9.vV40h701Gdl4rnukLegNo-N2nBMGTLus5bHVFpRnS-r0UCiYueOrTnXI1A70XDqzbPRarfm0SQpP9MIofug-4DEos20yZTyG00tV_i8ielbwDCvHreXt8roviql6Ff1euFKwbcBv_al2vXhAOs2iCszFKVdIC0lbSqS1_QnQF_dLvpd7_cxnQ_OOF5HmkbEp4OTAQgPf_vqICcj6NP8qRpwri9WDrJlbU8ctuAc0qBg.vfhwSvqVn8fPAMaaAT3E5cA6boUQQ6Q6PkQl6l-MDQo&dib_tag=se&keywords=SATA%2BHDD%2B2tb&qid=1745498870&sprefix=sata%2Bhdd%2B2t%2Caps%2C227&sr=8-3&th=1"
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
