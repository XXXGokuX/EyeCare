
import { Search, Menu, Heart, ShoppingBag, HelpCircle, ChevronDown, FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { MegaMenuEyeglasses } from "./mega-menu-eyeglasses"
import { MegaMenuSunglasses } from "./mega-menu-sunglasses"
import { MegaMenuBrands } from "./mega-menu-brands"
import { MegaMenuLenses } from "./mega-menu-lenses"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-auto">
              <nav className="flex flex-col space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {["Eyeglasses", "Sunglasses", "Our Brands", "Lenses", "Contact Us"].map((item) => (
                    <AccordionItem value={item} key={item}>
                      <AccordionTrigger>{item}</AccordionTrigger>
                      <AccordionContent>
                        {/* Add content for each accordion item */}
                        {item === "Eyeglasses" && <MegaMenuEyeglasses />}
                        {item === "Sunglasses" && <MegaMenuSunglasses />}
                        {item === "Our Brands" && <MegaMenuBrands />}
                        {item === "Lenses" && <MegaMenuLenses />}
                        {item === "Contact Us" && (
                          <div className="text-sm text-gray-700">
                            <p>For inquiries, please visit our <a href="/contact-us" className="text-blue-500 hover:underline">Contact Us</a> page.</p>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </nav>
            </SheetContent>

          </Sheet>

          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold text-primary uppercase">amvieyewear</span>
          </a>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Eyeglasses
                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaMenuEyeglasses />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Sunglasses
                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaMenuSunglasses />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Our Brands
                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaMenuBrands />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Lenses
                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaMenuLenses />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="/contact-us" className="px-4 py-2 text-sm font-medium">
                Contact Us
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>


        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input placeholder="I'm looking for..." className="w-full rounded-md border pl-8 pr-4 py-2 text-sm" />
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-6 w-6 md:hidden" />
            </Button>
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <FacebookIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <InstagramIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <YoutubeIcon className="h-6 w-6" />
            </Button>
            {/* <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button> */}
          </nav>
        </div>
      </div>
    </header>
  )
}

