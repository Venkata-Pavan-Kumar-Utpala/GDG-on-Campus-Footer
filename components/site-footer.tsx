import Link from "next/link"
import Image from "next/image"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      {/* Top Bar */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uAee8IDLmajtUDqLX68qDHMRmdeo85.png"
              alt="Travila"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Need help? Call us</span>
            <Link href="tel:1-800-222-8888" className="text-amber-500 font-semibold">
              1-800-222-8888
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Contact Us</h3>
              <p className="text-gray-400 text-sm">
                4517 Washington Ave, Manchester,
                <br />
                Kentucky 39495
              </p>
              <p className="text-gray-400 text-sm">Hours: 8:00 - 17:00, Mon - Sat</p>
              <p className="text-gray-400 text-sm">support@travila.com</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Follow us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <YoutubeIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Travila Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy policy
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-white text-sm">
                Legal notice
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const supportLinks = [
  { label: "Forum support", href: "/forum-support" },
  { label: "Help Center", href: "/help" },
  { label: "Live chat", href: "/chat" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Security", href: "/security" },
  { label: "Privacy", href: "/privacy" },
  { label: "Charges logs", href: "/charges" },
]

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Community Blog", href: "/blog" },
  { label: "Jobs and Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Our Awards", href: "/awards" },
  { label: "Agencies", href: "/agencies" },
]

const servicesLinks = [
  { label: "Tour Guide", href: "/tour-guide" },
  { label: "Tour Booking", href: "/tour-booking" },
  { label: "Hotel Booking", href: "/hotel-booking" },
  { label: "Ticket Booking", href: "/ticket-booking" },
  { label: "Rental Services", href: "/rental" },
]

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies Policy", href: "/cookies" },
  { label: "Data Processing", href: "/data-processing" },
  { label: "Data Policy", href: "/data-policy" },
  { label: "Refund Policy", href: "/refund" },
]

