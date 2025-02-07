interface User {
  id: string;
  bucket: 'diamond' | 'gold' | 'silver' | 'bronze';
}

export const users: User[] = [
  { id: "GD001", bucket: "diamond" },
  { id: "GD002", bucket: "gold" },
  { id: "GD003", bucket: "silver" },
  { id: "GD004", bucket: "bronze" },
  { id: "GD005", bucket: "diamond" },
  { id: "GD006", bucket: "gold" },
  { id: "GD007", bucket: "silver" },
  { id: "GD008", bucket: "bronze" },
  { id: "GD009", bucket: "diamond" },
  { id: "GD010", bucket: "gold" },
  { id: "GD011", bucket: "silver" },
  { id: "GD012", bucket: "bronze" },
  { id: "GD013", bucket: "diamond" },
  { id: "GD014", bucket: "gold" },
  { id: "GD015", bucket: "silver" },
  { id: "GD016", bucket: "bronze" },
  { id: "GD017", bucket: "diamond" },
  { id: "GD018", bucket: "gold" },
  { id: "GD019", bucket: "silver" },
  { id: "GD020", bucket: "bronze" }
];

export const rewards = {
  diamond: ["Cheers & Earned Leave", "Coffee with Tuhin & WFH Perks"],
  gold: ["Coffee with Tuhin & WFH Perks", "WFH Perks & GD T-Shirt"],
  silver: ["WFH Perks & GD T-Shirt", "GD T-Shirt & Water Bottle"],
  bronze: ["GD T-Shirt & Water Bottle", "Cheers & Earned Leave"]
};