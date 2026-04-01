// Demo data for the Art Challenge prototype
// Replace with real database queries when ready

export const SCHOOL = {
  name: "Cross Timbers Elementary",
  mascot: "Timberwolves",
  district: "Edmond Public Schools",
  city: "Edmond, OK",
};

export const COLORS = {
  orange: "#C84520",
  dark: "#1A1A1A",
  cream: "#FDF8F4",
  blue: "#2E86AB",
  green: "#4CAF50",
  yellow: "#F5A623",
  purple: "#9C27B0",
  coral: "#E8957A",
};

export const PRODUCTS = [
  { id: "tshirt", name: "T-Shirt", price: 25, emoji: "👕" },
  { id: "mug", name: "Mug", price: 16, emoji: "☕" },
  { id: "sticker", name: "Sticker Pack", price: 8, emoji: "✨" },
  { id: "tote", name: "Tote Bag", price: 28, emoji: "👜" },
  { id: "hoodie", name: "Hoodie", price: 45, emoji: "🧥" },
];

export const STUDENTS = [
  { id: 1, name: "Emma", grade: 1, votes: 342, seed: 101 },
  { id: 2, name: "Liam", grade: 1, votes: 298, seed: 202 },
  { id: 3, name: "Sophia", grade: 1, votes: 276, seed: 303 },
  { id: 4, name: "Noah", grade: 1, votes: 189, seed: 404 },
  { id: 5, name: "Olivia", grade: 2, votes: 412, seed: 505 },
  { id: 6, name: "Jackson", grade: 2, votes: 387, seed: 606 },
  { id: 7, name: "Ava", grade: 2, votes: 334, seed: 707 },
  { id: 8, name: "Aiden", grade: 2, votes: 201, seed: 808 },
  { id: 9, name: "Mia", grade: 3, votes: 456, seed: 909 },
  { id: 10, name: "Lucas", grade: 3, votes: 398, seed: 1010 },
  { id: 11, name: "Harper", grade: 3, votes: 367, seed: 1111 },
  { id: 12, name: "Ethan", grade: 3, votes: 223, seed: 1212 },
  { id: 13, name: "Ella", grade: 4, votes: 501, seed: 1313 },
  { id: 14, name: "Mason", grade: 4, votes: 445, seed: 1414 },
  { id: 15, name: "Amelia", grade: 4, votes: 389, seed: 1515 },
  { id: 16, name: "James", grade: 4, votes: 267, seed: 1616 },
  { id: 17, name: "Charlotte", grade: 5, votes: 523, seed: 1717 },
  { id: 18, name: "Benjamin", grade: 5, votes: 478, seed: 1818 },
  { id: 19, name: "Luna", grade: 5, votes: 412, seed: 1919 },
  { id: 20, name: "Henry", grade: 5, votes: 334, seed: 2020 },
];

// Top 3 per grade = finalists
export const FINALISTS = STUDENTS.filter((_, i) =>
  [0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 16, 17, 18].includes(i)
);

// Generate procedural art shapes for demo
export function generateArt(seed, size = 200) {
  const artColors = [
    "#C84520", "#2E86AB", "#4CAF50", "#F5A623", "#9C27B0",
    "#E8957A", "#E85D75", "#45B7D1", "#96CEB4", "#FFEAA7",
    "#DDA0DD", "#FF7675", "#74B9FF", "#55E6C1", "#FDA7DF",
  ];
  const rng = (s) => {
    s = Math.sin(s * 127.1 + 311.7) * 43758.5453;
    return s - Math.floor(s);
  };
  const shapes = [];
  const count = 4 + Math.floor(rng(seed * 3) * 6);
  for (let i = 0; i < count; i++) {
    shapes.push({
      x: 20 + rng(seed + i * 7) * (size - 40),
      y: 20 + rng(seed + i * 13) * (size - 40),
      r: 15 + rng(seed + i * 23) * 35,
      color: artColors[Math.floor(rng(seed + i * 31) * artColors.length)],
      type: rng(seed + i * 41) > 0.5 ? "circle" : "rect",
      rotation: rng(seed + i * 51) * 360,
    });
  }
  return shapes;
}
