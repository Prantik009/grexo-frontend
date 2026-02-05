// app/config/nav.config.ts

export type NavItem = {
  label: string
  href?: string
  children?: {
    label: string
    href: string
  }[]
}

export const NAV_LINKS: NavItem[] = [
  {
    label: "Plants",
    children: [
      { label: "Indoor Plants", href: "/plants/indoor" },
      { label: "Flowering Plants", href: "/plants/flowering" },
      { label: "Fruit Plants", href: "/plants/fruit" },
      { label: "Air Purifying Plants", href: "/plants/air-purifying" },
    ],
  },
  {
    label: "Seeds",
    children: [
      { label: "Flower Seeds", href: "/seeds/flowers" },
      { label: "Vegetable Seeds", href: "/seeds/vegetables" },
      { label: "Flower Bulbs", href: "/seeds/bulbs" },
      { label: "Fruit Seeds", href: "/seeds/fruits" },
    ],
  },
  {
    label: "Pot & Planters",
    children: [
      { label: "Pots", href: "/planters/pots" },
      { label: "Gardening Tools", href: "/planters/tools" },
    ],
  },
  {
    label: "Gifting",
    href: "/gifting",
  },
  {
    label: "Blog",
    href: "/blogs",
  },
]
