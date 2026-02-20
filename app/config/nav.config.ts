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
    href: "/shop/plants",
    children: [
      { label: "Indoor Plants", href: "/shop/plants/indoor" },
      { label: "Flowering Plants", href: "/shop/plants/flowering" },
      { label: "Fruit Plants", href: "/shop/plants/fruit" },
      { label: "Air Purifying Plants", href: "/shop/plants/air-purifying" },
    ],
  },
  {
    label: "Seeds",
    href: "/shop/seeds",
    children: [
      { label: "Flower Seeds", href: "/shop/seeds/flowers" },
      { label: "Vegetable Seeds", href: "/shop/seeds/vegetables" },
      { label: "Flower Bulbs", href: "/shop/seeds/bulbs" },
      { label: "Fruit Seeds", href: "/shop/seeds/fruits" },
    ],
  },
  {
    label: "Pot & Planters",
    href: "/shop/planters",
    children: [
      { label: "Pots", href: "/shop/planters/pots" },
      { label: "Gardening Tools", href: "/shop/planters/tools" },
    ],
  },
  {
    label: "Gifting",
    href: "/shop/gifting",
  },
  {
    label: "Blog",
    href: "/blogs",
  },
]