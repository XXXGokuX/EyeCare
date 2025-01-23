
export function MegaMenuLenses() {
  return (
    <div className="md:w-[800px] p-6">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="space-y-3">
          <h3 className="font-medium">Most Popular</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Polarized Sunglasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Blue Light Glasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Reading Glasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Transitions®
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-medium">Lens Types</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Bifocal Lenses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Progressive Lenses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Prism Lenses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                KODAK Lenses
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-medium">Coatings</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Anti-Reflective Coating
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Mirrored Sunglasses
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" className="group relative block">
            <div className="overflow-hidden rounded-lg">
              <img
                src={`https://img.ebdcdn.com/cms/Lens_Hub_79949a3cab.jpg?q=85&seo=lens-hub`}
                alt="Lens Hub"
                width={312}
                height={212}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-2">
              <h4 className="text-sm font-medium">Lens Hub</h4>
              <p className="text-sm text-muted-foreground">Everything you need to know about our lenses.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

