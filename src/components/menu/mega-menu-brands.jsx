
export function MegaMenuBrands() {
  return (
    <div className="md:w-[800px] p-6">
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { name: "Ray-Ban", image: "placeholder.svg" },
          { name: "Coach", image: "placeholder.svg" },
          { name: "Oakley", image: "placeholder.svg" },
          { name: "Vogue Eyewear", image: "placeholder.svg" },
          { name: "Armani Exchange", image: "placeholder.svg" },
          { name: "Ralph", image: "placeholder.svg" },
          { name: "ARNETTE", image: "placeholder.svg" },
          { name: "RFLKT®", image: "placeholder.svg" },
        ].map((brand) => (
          <a key={brand.name} href="#" className="group relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src={`https://img.ebdcdn.com/cms/ray_ban_03cec9205b.jpg?q=85&seo=ray-ban`}
                alt={brand.name}
                width={177}
                height={161}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-2">
              <h4 className="text-sm font-medium">{brand.name}</h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

