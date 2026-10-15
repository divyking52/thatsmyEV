export type EvModel = {
  id: string;
  brand: string;
  name: string;
  body: string;
  price: number;
  priceRange: string;
  range: number;
  battery: number;
  seats: number;
  img: string | null;
};

export const evModels: EvModel[] = [
  { id: "audi-etron-gt", brand: "Audi", name: "e-tron GT", body: "Sports", price: 180, priceRange: "₹1.80 - ₹2.10 Crore", range: 500, battery: 93.4, seats: 4, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/fd626d31-f35f-40fb-b2f5-a69a8099fed6/audi-etron-gt.jpg" },
  { id: "audi-q4-etron", brand: "Audi", name: "Q4 e-tron", body: "SUV", price: 75, priceRange: "₹75.00 - ₹85.00 Lakh", range: 520, battery: 82, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/3fe1c3ef-ff18-4a7d-ae6e-a544a5a9fa38/audi-q4-etron.jpg" },
  { id: "audi-q8-etron", brand: "Audi", name: "Q8 e-tron", body: "SUV", price: 114, priceRange: "₹1.14 - ₹1.19 Crore", range: 582, battery: 114, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/bc6f61e3-24bc-44fc-8579-599cb8fabb6e/audi-q8-etron.jpg" },
  { id: "bmw-i5", brand: "BMW", name: "i5", body: "Sedan", price: 72.5, priceRange: "₹72.50 - ₹85.00 Lakh", range: 582, battery: 81.2, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/f9e3f5ff-4251-4362-a03d-4d2013778142/bmw-i5.jpg" },
  { id: "bmw-i7", brand: "BMW", name: "i7", body: "Luxury", price: 195, priceRange: "₹1.95 - ₹2.45 Crore", range: 625, battery: 101.7, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/4040e6fc-8901-41db-a0b7-1bbe8268818c/bmw-i7.jpg" },
  { id: "bmw-ix", brand: "BMW", name: "iX", body: "SUV", price: 121, priceRange: "₹1.21 - ₹1.90 Crore", range: 630, battery: 111.5, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/0b0fbc89-1e20-4f33-83d9-1db4a904f1e4/bmw-ix.jpg" },
  { id: "bmw-ix1", brand: "BMW", name: "iX1", body: "SUV", price: 66.9, priceRange: "₹66.90 Lakh", range: 440, battery: 66.4, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/b17d14c9-c670-4d7b-b849-1d1cc4153823/bmw-ix1.jpg" },
  { id: "byd-atto-3", brand: "BYD", name: "Atto 3", body: "SUV", price: 24.99, priceRange: "₹24.99 - ₹33.99 Lakh", range: 521, battery: 60.5, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/a73ce337-bb8d-4b41-b862-c78196e1d021/byd-atto-3.jpg" },
  { id: "byd-emax-7", brand: "BYD", name: "eMAX 7", body: "MPV", price: 26.9, priceRange: "₹26.90 - ₹29.90 Lakh", range: 530, battery: 71.8, seats: 7, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/158bf4ac-acf7-4d0c-b6ac-a5a6e134d831/byd-emax-7.jpg" },
  { id: "byd-seal", brand: "BYD", name: "Seal", body: "Sedan", price: 41, priceRange: "₹41.00 - ₹53.00 Lakh", range: 650, battery: 82.5, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/483ecc63-e6a9-43e4-98b3-18bb174d041c/byd-seal.jpg" },
  { id: "byd-sealion-7", brand: "BYD", name: "Sealion 7", body: "SUV", price: 48, priceRange: "₹48.00 - ₹55.00 Lakh", range: 567, battery: 91.3, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/d08d6b03-e2f3-4d87-8c25-037877cb4279/byd-sealion-7.jpg" },
  { id: "citroen-ec3", brand: "Citroen", name: "ëC3", body: "Hatchback", price: 11.61, priceRange: "₹11.61 - ₹13.14 Lakh", range: 320, battery: 29.2, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/28d5e9a4-ab07-40b4-9b42-ebcb86c6c31a/citroen-ec3.jpg" },
  { id: "hyundai-creta-ev", brand: "Hyundai", name: "Creta Electric", body: "SUV", price: 17.99, priceRange: "₹17.99 - ₹23.50 Lakh", range: 473, battery: 51.4, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/2c5049a7-56b5-4747-a349-c9ee15281abc/hyundai-creta-ev.jpg" },
  { id: "hyundai-ioniq-5", brand: "Hyundai", name: "Ioniq 5", body: "SUV", price: 44.95, priceRange: "₹44.95 - ₹50.20 Lakh", range: 631, battery: 72.6, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/686d57f3-4645-42ea-8389-a3913ee79845/hyundai-ioniq-5.jpg" },
  { id: "kia-carens-clavis-ev", brand: "Kia", name: "Carens Clavis EV", body: "SUV", price: 17.99, priceRange: "₹17.99 - ₹24.49 Lakh", range: 490, battery: 51.4, seats: 7, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/a1bd2e25-5be9-4a5f-a2a0-1852c950055c/kia-carens-clavis-ev.jpg" },
  { id: "kia-ev6", brand: "Kia", name: "EV6", body: "SUV", price: 60.95, priceRange: "₹60.95 - ₹65.95 Lakh", range: 708, battery: 77.4, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/86b0c586-7ba1-44ac-98b5-b9322b548629/kia-ev6.jpg" },
  { id: "kia-ev9", brand: "Kia", name: "EV9", body: "SUV", price: 89.9, priceRange: "₹89.90 Lakh - ₹1.30 Crore", range: 561, battery: 99.8, seats: 6, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/35c612ad-6bbb-4acb-a92b-8f64a1037525/kia-ev9.jpg" },
  { id: "lexus-es-500e", brand: "Lexus", name: "ES 500e", body: "Sedan", price: 89.99, priceRange: "₹89.99 Lakh", range: 580, battery: 74.68, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/ff4a3354-a17e-4656-bd3c-359e74186ea9/lexus-es-500e.jpg" },
  { id: "mahindra-be-6e", brand: "Mahindra", name: "BE 6e", body: "SUV", price: 18.9, priceRange: "₹18.90 - ₹26.90 Lakh", range: 682, battery: 79, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/a5826b38-0b72-4df1-bfb7-033107750017/mahindra-be-6e.jpg" },
  { id: "mahindra-xev-9e", brand: "Mahindra", name: "XEV 9e", body: "SUV", price: 21.9, priceRange: "₹21.90 - ₹30.50 Lakh", range: 656, battery: 79, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/c0e9b483-8b4f-4aa1-8070-e520bd0530de/mahindra-xev-9e.jpg" },
  { id: "mahindra-xev-9s", brand: "Mahindra", name: "XEV 9S", body: "SUV", price: 25.9, priceRange: "₹25.90 - ₹35.90 Lakh", range: 620, battery: 79, seats: 7, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/d7218a66-887c-44c8-9cb6-8711f25683d2/mahindra-xev-9s.jpg" },
  { id: "mahindra-xuv400", brand: "Mahindra", name: "XUV400", body: "SUV", price: 15.49, priceRange: "₹15.49 - ₹19.39 Lakh", range: 456, battery: 39.4, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/e2a8a2af-fd58-4d9c-8efc-c9f12fbd9ac6/mahindra-xuv400.jpg" },
  { id: "maruti-e-vitara", brand: "Maruti Suzuki", name: "e Vitara", body: "SUV", price: 15.99, priceRange: "₹15.99 - ₹19.79 Lakh", range: 543, battery: 61, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/494b39ad-98d6-4e44-9af3-905c8f3a4424/maruti-e-vitara.jpg" },
  { id: "mercedes-eqa", brand: "Mercedes-Benz", name: "EQA", body: "SUV", price: 66, priceRange: "₹66.00 Lakh", range: 560, battery: 70.5, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/53f22855-255e-474b-990a-489daf4e96c9/mercedes-eqa.jpg" },
  { id: "mercedes-eqb", brand: "Mercedes-Benz", name: "EQB", body: "SUV", price: 77.5, priceRange: "₹77.50 Lakh", range: 423, battery: 70.5, seats: 7, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/a1664956-b172-4556-98cf-ddde6decea50/mercedes-eqb.jpg" },
  { id: "mercedes-eqe", brand: "Mercedes-Benz", name: "EQE", body: "Sedan", price: 125, priceRange: "₹1.25 - ₹1.45 Crore", range: 550, battery: 96, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/a8e11e4d-a57b-4340-a064-15769c07c6e7/mercedes-eqe.jpg" },
  { id: "mercedes-eqs", brand: "Mercedes-Benz", name: "EQS", body: "Luxury", price: 155, priceRange: "₹1.55 - ₹1.85 Crore", range: 857, battery: 120, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/a22338b5-1953-4207-803c-d8f79a395b22/mercedes-eqs.jpg" },
  { id: "mg-comet-ev", brand: "MG", name: "Comet EV", body: "Compact", price: 6.99, priceRange: "₹6.99 - ₹9.98 Lakh", range: 230, battery: 17.3, seats: 4, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/acb71476-edd4-45ab-a8f9-4f87aa267bb5/mg-comet-ev.jpg" },
  { id: "mg-windsor-ev", brand: "MG", name: "Windsor EV", body: "SUV", price: 13.5, priceRange: "₹13.50 - ₹15.50 Lakh", range: 331, battery: 38, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/623bd2fb-a738-45c2-ae99-d8ec4d120150/mg-windsor-ev.jpg" },
  { id: "mg-zs-ev", brand: "MG", name: "ZS EV", body: "SUV", price: 17.99, priceRange: "₹17.99 - ₹20.50 Lakh", range: 461, battery: 50.3, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/9701e222-18e9-43d9-bc26-3f7b02b4146a/mg-zs-ev.jpg" },
  { id: "mini-countryman-ev", brand: "MINI", name: "Countryman Electric", body: "SUV", price: 54.9, priceRange: "₹54.90 - ₹64.90 Lakh", range: 462, battery: 66.4, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/def29398-0e20-4993-991f-a93bab0da4ad/mini-countryman-ev.jpg" },
  { id: "porsche-macan-ev", brand: "Porsche", name: "Macan Electric", body: "SUV", price: 125, priceRange: "₹1.25 - ₹1.65 Crore", range: 591, battery: 100, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/eb1d234c-06f2-4d33-9f55-0fc40ebf43da/porsche-macan-ev.jpg" },
  { id: "porsche-taycan", brand: "Porsche", name: "Taycan", body: "Sports", price: 147, priceRange: "₹1.47 - ₹2.35 Crore", range: 512, battery: 93.4, seats: 4, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/a7f92788-a97a-4317-bbbf-bc4b90973a36/porsche-taycan.jpg" },
  { id: "tata-curvv-ev", brand: "Tata", name: "Curvv EV", body: "Saloon", price: 17.49, priceRange: "₹17.49 - ₹22.24 Lakh", range: 585, battery: 55, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/9c26ce9b-3d81-47f6-be6b-7538810045e9/tata-curvv-ev.jpg" },
  { id: "tata-harrier-ev", brand: "Tata", name: "Harrier EV", body: "SUV", price: 21.49, priceRange: "₹21.49 - ₹30.23 Lakh", range: 627, battery: 75, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/09dd6a59-a205-4201-a595-dd39c309dc21/tata-harrier-ev.jpg" },
  { id: "tata-nexon-ev", brand: "Tata", name: "Nexon EV", body: "SUV", price: 12.49, priceRange: "₹12.49 - ₹17.19 Lakh", range: 312, battery: 30.2, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/c23800e0-6a45-48c5-97ad-6cd39eaa4a66/tata-nexon-ev.jpg" },
  { id: "tata-punch-ev", brand: "Tata", name: "Punch EV", body: "SUV", price: 10.99, priceRange: "₹10.99 - ₹15.49 Lakh", range: 421, battery: 35, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/72b34f9f-8bb0-4fbc-abe2-31620763f2e1/tata-punch-ev.jpg" },
  { id: "tata-sierra-ev", brand: "Tata", name: "Sierra EV", body: "SUV", price: 18.79, priceRange: "₹18.79 - ₹25.99 Lakh", range: 665, battery: 75, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/90f2e2ff-b424-4402-870e-3ea46c0452d6/tata-sierra-ev.jpg" },
  { id: "tata-tiago-ev", brand: "Tata", name: "Tiago EV", body: "Hatchback", price: 7.99, priceRange: "₹7.99 - ₹11.14 Lakh", range: 315, battery: 24, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/81020a32-0489-488b-b662-a2d565131cca/tata-tiago-ev.jpg" },
  { id: "tata-tigor-ev", brand: "Tata", name: "Tigor EV", body: "Sedan", price: 12.49, priceRange: "₹12.49 - ₹13.75 Lakh", range: 315, battery: 26, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/fc01369d-a066-4555-9991-8310771f2b1b/tata-tigor-ev.jpg" },
  { id: "tesla-model-y", brand: "Tesla", name: "Model Y", body: "SUV", price: 59.89, priceRange: "₹59.89 - ₹67.89 Lakh", range: 622, battery: 75, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/eaa3f3e2-19b3-419b-8525-7d9fce7b3ecb/tesla-model-y.jpg" },
  { id: "toyota-urban-cruiser-ebella", brand: "Toyota", name: "Urban Cruiser Ebella", body: "SUV", price: 19.06, priceRange: "₹19.06 - ₹24.42 Lakh", range: 543, battery: 61, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/94b19edf-11d3-4d18-8eae-8517da352eca/toyota-urban-cruiser-ebella.jpg" },
  { id: "vinfast-vf6", brand: "VinFast", name: "VF 6", body: "SUV", price: 16.49, priceRange: "₹16.49 - ₹20.49 Lakh", range: 381, battery: 59.6, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/e65e8715-c02b-4e4d-8e15-1cdc4fbd4535/vinfast-vf6.jpg" },
  { id: "vinfast-vf7", brand: "VinFast", name: "VF 7", body: "SUV", price: 20.89, priceRange: "₹20.89 - ₹25.49 Lakh", range: 431, battery: 75.3, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/f623d488-c07b-4244-973c-87657a29c359/vinfast-vf7.jpg" },
  { id: "volvo-ec40", brand: "Volvo", name: "EC40", body: "SUV", price: 61.25, priceRange: "₹61.25 Lakh", range: 418, battery: 78, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/4f235741-3bcb-402d-8e68-070e8a21265a/volvo-ec40.jpg" },
  { id: "volvo-ex30", brand: "Volvo", name: "EX30", body: "SUV", price: 39.99, priceRange: "₹39.99 Lakh", range: 480, battery: 69, seats: 5, img: "https://media.storebox.ai/media/e2b00de8-269c-4e7c-994b-9e7b16b7e93e/ed961984-b2ad-43da-8471-89c6a530d9e8/volvo-ex30.jpg" },
];

export const brandOrder = [
  "Tata",
  "Mahindra",
  "MG",
  "Hyundai",
  "Maruti Suzuki",
  "BYD",
  "Kia",
  "VinFast",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Porsche",
  "Volvo",
  "Tesla",
  "Toyota",
  "Citroen",
  "Lexus",
  "MINI",
] as const;

export function filterEvModels(
  query: string,
  brand: string,
  modelId: string,
): EvModel[] {
  const q = query.trim().toLowerCase();
  return evModels.filter((ev) => {
    if (brand && ev.brand !== brand) return false;
    if (modelId && ev.id !== modelId) return false;
    if (!q) return true;
    const haystack = `${ev.brand} ${ev.name} ${ev.body}`.toLowerCase();
    return haystack.includes(q);
  });
}

export function modelsForBrand(brand: string): EvModel[] {
  if (!brand) return evModels;
  return evModels.filter((ev) => ev.brand === brand);
}
