// HowItWorks.tsx
import { howItWorksSteps } from "./data"
import { TimelineItem } from "./TimelineItem"

export const HowItWorks = () => {
  return (
    <section className="bg-softGreen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-primary">
            How It Works
          </h2>
          <p className="mt-2 text-gray-600">
            From our garden to your home — with care at every step 🌿
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {howItWorksSteps.map((step, index) => (
            <TimelineItem
              key={step.id}
              title={step.title}
              description={step.description}
              image={step.image}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
