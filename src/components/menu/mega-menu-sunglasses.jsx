

export function MegaMenuSunglasses() {
  return (
    <div className="md:w-[800px] p-6">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="space-y-3">
          <h3 className="font-medium">Shop</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Sunglasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Women's Sunglasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Men's Sunglasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Kids' Sunglasses
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-medium">Featured</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-primary">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Prescription Sunglasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Polarized Sunglasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-red-600 hover:text-red-700">
                On Sale
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <a href="#" className="group relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src={`https://img.ebdcdn.com/cms/topp_nav_rb_sun_6d070533fe.jpg?q=85&seo=ray-ban-sunglasses`}
                alt="Ray-Ban Sunglasses"
                width={160}
                height={212}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-2">
              <h4 className="text-sm font-medium">Ray-Ban Sunglasses</h4>
            </div>
          </a>
          <a href="#" className="group relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src={`https://img.ebdcdn.com/cms/topp_nav_rb_sun_6d070533fe.jpg?q=85&seo=ray-ban-sunglasses`}
                alt="Best Sellers"
                width={160}
                height={212}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-2">
              <h4 className="text-sm font-medium">Best Sellers</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

