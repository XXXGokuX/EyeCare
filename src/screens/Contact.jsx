import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FFB6A3] to-[#7CCCBF] text-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto">
            We're here to help with any questions about your eyewear
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7CCCBF]/10 rounded-lg">
                  <Phone className="w-6 h-6 text-[#7CCCBF]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7CCCBF]/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#7CCCBF]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">support@eyewear.com</p>
                  <p className="text-gray-600">24/7 Response Time</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7CCCBF]/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#7CCCBF]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600">123 Eyewear Street</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7CCCBF]/10 rounded-lg">
                  <Clock className="w-6 h-6 text-[#7CCCBF]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Store Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 9am-8pm</p>
                  <p className="text-gray-600">Saturday-Sunday: 10am-6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="grid gap-6">
              <div className="grid gap-2">
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CCCBF]"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CCCBF]"
                  placeholder="your@email.com"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="subject" className="font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CCCBF]"
                  placeholder="How can we help?"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CCCBF]"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="bg-[#7CCCBF] text-white px-6 py-3 rounded-lg hover:bg-[#6BB1A5] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

