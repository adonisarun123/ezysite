import Link from 'next/link'

type CityLink = { name: string; href: string }

export default function AvailableInCities({
  serviceSlug,
  serviceName,
  cities,
}: {
  serviceSlug: string
  serviceName: string
  cities?: CityLink[]
}) {
  const defaultCities: CityLink[] = [
    { name: 'Bangalore', href: `/cities/bangalore/${serviceSlug}` },
    { name: 'Bareilly', href: `/cities/bareilly/${serviceSlug}` },
  ]
  const items = cities ?? defaultCities
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">{serviceName} available in:</h2>
        <div className="flex flex-wrap gap-3">
          {items.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="px-4 py-2 bg-white rounded-full border hover:border-primary-500 hover:text-primary-600"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
