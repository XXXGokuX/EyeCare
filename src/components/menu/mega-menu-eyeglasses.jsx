
export function MegaMenuEyeglasses() {
  return (
    <div className="space-y-4 p-4 md:w-[800px] md:p-6">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="font-medium">Shop</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Eyeglasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Women's Eyeglasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Men's Eyeglasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Kids' Eyeglasses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-red-600 hover:text-red-700">
                On Sale
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
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                2-Day Delivery
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                Eco Friendly
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

