import { Link } from "react-router-dom"
import { ShoppingBag, Heart, Search, ChevronRight } from "lucide-react"
import { CiGrid32 } from "react-icons/ci";
import { PiSlideshow } from "react-icons/pi";
import React, { useContext, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProductCard from "@/components/ProductCard"
import Newsletter from "@/components/newsletter"
import MobileMenu from "@/components/MobileMenu"

export default function MainStore() {
  const [grid, setGrid] = useState(false)

  const product = [
    { id: 1, name: "T-Shirt", price: "$20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPJNHUxa9woy4bn0lHO2ptpuHNEAD3LmPeA&s" },
    { id: 2, name: "Jeans", price: "$40", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsfLxNcbVNWEPTeuSZ_-B1aiJjXC6n4QqeQ&s" },
    { id: 3, name: "Jacket", price: "$60", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_qtfYq6XSmTM23Sn1kc3ycbxC7Mjp8AhxA&s" },
    { id: 4, name: "Sneakers", price: "$80", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWWwueERPE5H6e24o0aWWMIktxVxjzxIZAw&s" },
    { id: 5, name: "Hat", price: "$15", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "Bag", price: "$35", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4-sWOA7WHLEOVtNPcYg9ftRhhITM-5nMORZObSL5HPLM00DniyxfFA2IkV-0WFIjf9aceaJZs__mccWMvfU3cve81Z7uIIELjGRiFBgebnvvpNq9RtZbn&usqp=CAc" },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
            <MobileMenu />
            <Link href="/" className="hidden items-center space-x-2 md:flex">
              <span className="text-xl font-bold tracking-tight">LUXMODE</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Women
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Men
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Accessories
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                New Arrivals
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Sale
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <form className="hidden lg:block">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-64 rounded-xl bg-background pl-8 md:w-80 lg:w-96"
                />
              </div>
            </form>
            <Button variant="ghost" size="icon" className="relative" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">2</Badge>
            </Button>
            <Button className="hidden md:flex">Sign In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="overflow-hidden">
            <div className="animate-fade-in-up container relative z-10 py-24 md:py-32 lg:py-40">
              <div className="flex flex-col items-start gap-4 md:max-w-[60%]">
                <Badge className="animate-slide-in-right [animation-delay:200ms]">New Collection</Badge>
                <h1 className="animate-slide-in-right text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl [animation-delay:400ms]">
                  Elevate Your Style This Season
                </h1>
                <p className="animate-slide-in-right text-muted-foreground md:text-xl [animation-delay:600ms]">
                  Discover our latest collection of premium fashion pieces designed for the modern individual.
                </p>
                <div className="animate-slide-in-right flex gap-4 [animation-delay:800ms]">
                  <Button size="lg">Shop Women</Button>
                  <Button size="lg" variant="outline">
                    Shop Men
                  </Button>
                </div>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Fashion model in seasonal outfit"
              width={1920}
              height={1080}
              className="absolute inset-0 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20" />
          </div>
        </section>

       

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
                  {grid ? (
                             <div className='grid-btn' onClick={()=>setGrid(false)} id="trans-bg2">
                             <PiSlideshow size={25}/> <h2>Slides</h2>
                           </div>
                      ):(
              
                        <div className='grid-btn' onClick={()=>setGrid(true)} id="trans-bg2">
                          <CiGrid32 size={25}/> <h2>Grid</h2>
                        </div>
                      )}
              <Link href="#" className="flex items-center text-sm font-medium">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {product.map((product, index) => (
                <ProductCard key={product.name} product={product} image={product.image} index={index} />
              ))}
            </div>
          </div>
        </section>

    

        <Newsletter />
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-medium">LUXMODE</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Premium fashion for the modern individual. Quality, style, and sustainability in every piece.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} LUXMODE. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

