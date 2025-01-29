import { Building2, Users2, Target, Award } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FFB6A3] to-[#7CCCBF] text-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Us</h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto">
            Bringing clarity to vision with stylish, affordable eyewear since 2010
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe everyone deserves to see the world clearly without breaking the bank. Our mission is to provide
              high-quality, fashionable eyewear at affordable prices while delivering exceptional customer service.
            </p>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7CCCBF]/10 rounded-lg">
                  <Target className="w-6 h-6 text-[#7CCCBF]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quality First</h3>
                  <p className="text-gray-600">Premium materials and rigorous quality control</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7CCCBF]/10 rounded-lg">
                  <Award className="w-6 h-6 text-[#7CCCBF]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Style for Everyone</h3>
                  <p className="text-gray-600">Diverse collection for every face and preference</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img src="/placeholder.svg?height=400&width=600" alt="About our company" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#7CCCBF] mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#7CCCBF] mb-2">1000+</div>
              <div className="text-gray-600">Frame Styles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#7CCCBF] mb-2">15+</div>
              <div className="text-gray-600">Store Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#7CCCBF] mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="/placeholder.svg?height=200&width=200" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Leadership Name</h3>
              <p className="text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

