import { media, mediaAssets } from "@/data/media";

export const siteMeta = {
  name: "ThatsmyEV",
  tagline: "India's #1 EV Research Platform",
  headline: "Buy EV Cars in India 2026 – Compare Prices, Range & Models",
  subhead:
    "Research, compare, and find the perfect electric vehicle from Indian and global manufacturers. Access comprehensive specs, real data, and make informed decisions.",
};

export const heroStats = [
  { label: "EV Models", value: "54+", detail: "Curated catalogue" },
  { label: "Brands", value: "22", detail: "Indian & global" },
  { label: "Range band", value: "230–857km", detail: "Certified spans" },
  { label: "From", value: "₹6.99L+", detail: "Starting price" },
];

export const exploreModes = [
  {
    id: "brand",
    title: "By Brand",
    description: "Tata, Mahindra, BYD, and more",
    telemetry: { label: "Brands", value: 22, unit: "" },
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "range",
    title: "By Range",
    description: "Find EVs by battery range",
    telemetry: { label: "Max range", value: 857, unit: "km" },
    span: "md:col-span-1",
  },
  {
    id: "body",
    title: "By Body Type",
    description: "Hatchback, Sedan, SUV, and more",
    telemetry: { label: "Body types", value: 6, unit: "" },
    span: "md:col-span-1",
  },
  {
    id: "price",
    title: "By Price",
    description: "Budget to luxury options",
    telemetry: { label: "From", value: 6.99, unit: "L" },
    span: "md:col-span-1",
  },
  {
    id: "seating",
    title: "By Seating Capacity",
    description: "4, 5 & 7 seater EVs",
    telemetry: { label: "Seaters", value: 7, unit: "" },
    span: "md:col-span-1",
  },
];

export const whyElectric = [
  {
    title: "Zero Emissions",
    description:
      "Reduce your carbon footprint and contribute to a cleaner environment with zero tailpipe emissions.",
    metric: { label: "CO₂ cut", value: 100, unit: "%" },
  },
  {
    title: "Lower Fuel Costs",
    description:
      "Save thousands annually on fuel costs. Electricity is significantly cheaper than gasoline.",
    metric: { label: "Savings", value: 70, unit: "%" },
  },
  {
    title: "Less Maintenance",
    description:
      "EVs have fewer moving parts, meaning less wear and tear and lower maintenance costs over time.",
    metric: { label: "Parts less", value: 40, unit: "%" },
  },
  {
    title: "Less Fatigue",
    description:
      "NVH levels are significantly low in EVs, which reduces your fatigue while driving.",
    metric: { label: "Quiet ride", value: 90, unit: "%" },
  },
];

export const journeyPanels = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Browse 54+ EVs",
    copy: "Explore India’s widest EV catalogue — hatchbacks to performance SUVs — with real certified range and price clarity.",
    image: media("tata-nexon-ev.jpg"),
    battery: 25,
  },
  {
    step: "02",
    title: "Compare",
    subtitle: "Specs side-by-side",
    copy: "Stack models on range, battery, charging speed, seating and on-road estimates before you shortlist.",
    image: media("mahindra-xev-9s.jpg"),
    battery: 50,
  },
  {
    step: "03",
    title: "Validate",
    subtitle: "Expert reviews & news",
    copy: "Read market intel powered by Vahan data and expert analysis so your decision matches real-world ownership.",
    image: media("hyundai-creta-ev.jpg"),
    battery: 75,
  },
  {
    step: "04",
    title: "Acquire",
    subtitle: "Unlock better deals",
    copy: "Talk to a ThatsmyEV specialist, unlock discounts, and start your EV journey with confidence.",
    image: mediaAssets.chargingLifestyle,
    battery: 100,
  },
];

export const comparisons = [
  {
    left: { name: "Tata Nexon EV", image: media("tata-nexon-ev.jpg") },
    right: { name: "Tata Punch EV", image: media("tata-punch-ev.png") },
  },
  {
    left: { name: "Mahindra XEV 9S", image: media("mahindra-xev-9s.jpg") },
    right: { name: "Tata Harrier EV", image: media("tata-harrier-ev.jpg") },
  },
  {
    left: {
      name: "Hyundai Creta Electric",
      image: media("hyundai-creta-ev.jpg"),
    },
    right: { name: "Maruti e Vitara", image: media("maruti-e-vitara.jpg") },
  },
  {
    left: { name: "Tata Nexon EV", image: media("tata-nexon-ev.jpg") },
    right: { name: "MG Windsor EV", image: media("mg-windsor-ev.jpg") },
  },
];

export const newsItems = [
  {
    title: "VinFast India sales: 2,961 EVs in September 2026, now fourth largest",
    date: "8 October 2026",
    author: "Rahul Shonak",
    tag: "Sales",
  },
  {
    title: "Tata EV sales fall to 15,384 in September as EV share slips to 22%",
    date: "8 October 2026",
    author: "Rahul Shonak",
    tag: "Market",
  },
  {
    title: "Porsche Cayenne Electric launched in India at ₹1.77 crore",
    date: "8 October 2026",
    author: "Rahul Shonak",
    tag: "Launch",
  },
  {
    title: "MG Hector Tomahawk EV deliveries begin as MG's EV share slips to 14.5%",
    date: "8 October 2026",
    author: "Rahul Shonak",
    tag: "Deliveries",
  },
];

export const metrics = [
  { label: "EV models matched", value: 54, suffix: "+", prefix: "" },
  { label: "Owner satisfaction", value: 87, suffix: "%", prefix: "" },
  { label: "Brand ecosystem", value: 22, suffix: "+", prefix: "" },
  { label: "Newsletter readers", value: 50, suffix: "k+", prefix: "" },
];

export const faqs = [
  {
    q: "Which EV cars are best to buy in India in 2026?",
    a: "It depends on budget, range needs, and body style. Popular shortlists include Tata Nexon EV, Mahindra BE 6e / XEV 9S, Hyundai Creta Electric, and MG Windsor EV — compare certified range and real ownership costs on ThatsmyEV.",
  },
  {
    q: "What is the price range of electric cars in India?",
    a: "Entry EVs start around ₹6.99L, while premium models climb into the crore range. Use our price filters to explore budget through luxury segments.",
  },
  {
    q: "Is it worth buying an EV car in India right now?",
    a: "For many drivers, yes — lower running costs, quieter drives, and an expanding charging network make 2026 a strong year to switch, especially with available discounts.",
  },
  {
    q: "Which electric car gives the best range in India?",
    a: "Certified ranges currently span roughly 230–857 km depending on model and cycle. Filter by range on ThatsmyEV to see the top long-range options.",
  },
  {
    q: "What are the running costs of EV cars in India?",
    a: "Electricity is typically far cheaper per km than petrol or diesel. Exact costs vary by tariff, driving style, and charging habits.",
  },
  {
    q: "How long does it take to charge an electric car?",
    a: "AC home charging often takes several hours; DC fast charging can push many models from ~10–80% in under an hour depending on charger power and battery size.",
  },
];

export const learnCards = [
  {
    title: "Explore Learning Hub",
    description:
      "Deep-dive into EV technology, battery guides, and charging infrastructure",
    cta: "Start Learning",
  },
  {
    title: "Explore Car Reviews",
    description:
      "Watch detailed video reviews and read expert analysis of latest EVs",
    cta: "Watch Reviews",
  },
  {
    title: "Ask TMEV Expert",
    description: "Get personalized advice from our EV specialists via WhatsApp",
    cta: "Chat Now",
  },
];

export const valueStory = [
  { text: "Electric", highlight: true },
  { text: "vehicles", highlight: false },
  { text: "aren't", highlight: false },
  { text: "just", highlight: false },
  { text: "better", highlight: true },
  { text: "for", highlight: false },
  { text: "the", highlight: false },
  { text: "environment", highlight: true },
  { text: "—", highlight: false },
  { text: "they're", highlight: false },
  { text: "better", highlight: true },
  { text: "for", highlight: false },
  { text: "your", highlight: false },
  { text: "wallet", highlight: true },
  { text: "and", highlight: false },
  { text: "driving", highlight: false },
  { text: "experience.", highlight: false },
  { text: "Join", highlight: false },
  { text: "millions", highlight: false },
  { text: "of", highlight: false },
  { text: "drivers", highlight: false },
  { text: "who've", highlight: false },
  { text: "made", highlight: false },
  { text: "the", highlight: false },
  { text: "switch", highlight: true },
  { text: "with", highlight: false },
  { text: "ThatsmyEV.", highlight: true },
];

export const navLinks = [
  { href: "#explore", label: "Explore" },
  { href: "#compare", label: "Compare" },
  { href: "#journey", label: "How it works" },
  { href: "#news", label: "EV News" },
  { href: "#faq", label: "FAQs" },
];
