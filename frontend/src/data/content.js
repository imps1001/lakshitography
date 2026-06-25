// Real Lakshitography images (5 client-shot photos) + a few stock fillers for
// categories not yet represented. Swap the stock ones when more real work arrives.

const REAL = {
  wedding_bride: "https://customer-assets.emergentagent.com/job_moments-home/artifacts/asow04c1_DSC03405.ARW.jpg",
  kids_two_girls: "https://customer-assets.emergentagent.com/job_moments-home/artifacts/28jggwuz_DSC00237.jpg",
  kid_pink_tutu: "https://customer-assets.emergentagent.com/job_moments-home/artifacts/e231pwru_DSC00275.jpg",
  baby_boy_party: "https://customer-assets.emergentagent.com/job_moments-home/artifacts/777br5s9_DSC00005.jpg",
  kids_celebration: "https://customer-assets.emergentagent.com/job_moments-home/artifacts/ndqimdo2_IMG_20251220_231929.jpg",
};

// Fillers (kept warm + intimate, swap with real work later)
const STOCK = {
  couple_a: "https://images.unsplash.com/photo-1769566025603-2e694fb2ff68?auto=format&fit=crop&q=85&w=900",
  couple_b: "https://images.unsplash.com/photo-1758225104742-718edea1f371?auto=format&fit=crop&q=85&w=900",
  family_a: "https://images.unsplash.com/photo-1770587899537-23e617e17767?auto=format&fit=crop&q=85&w=900",
  family_b: "https://images.unsplash.com/photo-1595950009887-e9842bcbc1ae?auto=format&fit=crop&q=85&w=900",
  gathering: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=85&w=900",
};

export const SERVICES = [
  {
    slug: "couple-lifestyle",
    name: "Couple Lifestyle Shoot",
    duration: "60–90 mins",
    photos: "20–30 edited photos",
    price: "₹6,500 – ₹9,500",
    people: "Just the two of you",
    addOn: "Optional 30-sec reel add-on",
    blurb:
      "Slow mornings, soft sunlight, quiet glances. A relaxed walk-through of the way you two actually exist together.",
    image: STOCK.couple_a,
  },
  {
    slug: "family-portraits",
    name: "Family Portraits",
    duration: "75–120 mins",
    photos: "30–45 edited photos",
    price: "₹8,500 – ₹12,500",
    people: "Small families (up to 6)",
    addOn: "Optional family video story",
    blurb:
      "Real laughter, real chaos, the kind of family photos you'll actually frame — not the stiff studio kind.",
    image: REAL.wedding_bride,
  },
  {
    slug: "kids-birthday",
    name: "Kids' Birthday at Home",
    duration: "2–3 hours",
    photos: "40–60 edited photos",
    price: "₹9,500 – ₹14,000",
    people: "Up to 25 close guests",
    addOn: "Highlight reel add-on",
    blurb:
      "Tiny hands on cake, the candle moment, that one cousin crying — birthdays exactly as they happen.",
    image: REAL.kid_pink_tutu,
  },
  {
    slug: "anniversary",
    name: "Intimate Anniversary",
    duration: "90–120 mins",
    photos: "30–40 edited photos",
    price: "₹8,000 – ₹11,500",
    people: "Couple + close family",
    addOn: "Optional cinematic clip",
    blurb:
      "A return to where it began, or simply the home you've built. Quiet, romantic, unhurried.",
    image: REAL.wedding_bride,
  },
  {
    slug: "kitty-gathering",
    name: "Kitty Party / Close Gathering",
    duration: "2 hours",
    photos: "35–50 edited photos",
    price: "₹7,500 – ₹10,500",
    people: "Up to 15 friends",
    addOn: "Group portrait set",
    blurb:
      "The afternoon stretches. Tea, laughter, gossip — captured without interrupting a single moment.",
    image: STOCK.gathering,
  },
];

// Hero grid (2x2) — mix of real signature shots + warm stock for missing categories
export const HERO_IMAGES = [
  REAL.wedding_bride,
  REAL.kid_pink_tutu,
  REAL.baby_boy_party,
  REAL.kids_two_girls,
];

export const HERO_POOL = [
  REAL.wedding_bride,
  REAL.kid_pink_tutu,
  REAL.baby_boy_party,
  REAL.kids_two_girls,
  REAL.kids_celebration,
  STOCK.couple_a,
  STOCK.family_a,
  STOCK.gathering,
];

export const GALLERY = [
  { category: "Anniversary", url: REAL.wedding_bride },
  { category: "Kids",        url: REAL.kid_pink_tutu },
  { category: "Kids",        url: REAL.kids_two_girls },
  { category: "Kids",        url: REAL.baby_boy_party },
  { category: "Kids",        url: REAL.kids_celebration },
  { category: "Couples",     url: STOCK.couple_a },
  { category: "Couples",     url: STOCK.couple_b },
  { category: "Families",    url: STOCK.family_a },
  { category: "Families",    url: STOCK.family_b },
  { category: "Gatherings",  url: STOCK.gathering },
];

export const CATEGORIES = ["All", "Couples", "Families", "Kids", "Anniversary", "Gatherings"];

export const WHATSAPP_NUMBER = "919876543210"; // dummy — replace with Lakshita's real number
