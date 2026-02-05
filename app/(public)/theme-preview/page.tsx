// app/(public)/_components/Hero.tsx

const themeColors = [
  { name: "primary", class: "bg-primary" },
  { name: "primary-foreground", class: "bg-primary-foreground" },

  { name: "secondary", class: "bg-secondary" },
  { name: "secondary-foreground", class: "bg-secondary-foreground" },

  { name: "accent", class: "bg-accent" },
  { name: "accent-foreground", class: "bg-accent-foreground" },

  { name: "background", class: "bg-background" },
  { name: "foreground", class: "bg-foreground" },

  { name: "muted", class: "bg-muted" },
  { name: "muted-foreground", class: "bg-muted-foreground" },

  { name: "border", class: "bg-border" },
  { name: "destructive", class: "bg-destructive" },
]

export default function ThemePreview() {
  return (
    <div className="space-y-8 p-6 uppercase">
      {/* Text preview */}
      <div className="space-y-2 flex w-full justify-between">
        <h1 className="text-2xl font-bold text-primary">text-primary</h1>
        <h1 className="text-2xl font-bold text-primary-foreground">text-primary-foreground</h1>
        <h1 className="text-2xl font-bold text-secondary">text-secondary</h1>
        <h1 className="text-2xl font-bold text-secondary-foreground">text-secondary-foreground</h1>
        <h1 className="text-2xl font-bold text-accent">text-accent</h1>
      </div>

      {/* Color dots preview */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {themeColors.map((color) => (
          <div key={color.name} className="flex flex-col items-center gap-2">
            <div
              className={`h-8 w-8 rounded-full border ${color.class}`}
            />
            <span className="text-xs text-muted-foreground text-center">
              {color.name}
            </span>
          </div>
        ))}
      </div>

      <div className="capitalize space-y-2">
        <h1>Page Title</h1>
        <h2>Section Heading</h2>
        <h3>Subsection Heading</h3>
        <h4>Card Title</h4>
        <p>Body Text</p>
        <small>Helper / Caption Text</small>
        <blockquote>Blockquote / Emphasis Text</blockquote>
      </div>

    </div>
  )
}
