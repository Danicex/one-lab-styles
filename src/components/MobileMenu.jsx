"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-left text-xl font-bold">ONELAB.</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <nav className="flex flex-col space-y-1">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="women" className="border-b">
 <AccordionTrigger className="py-3 text-base">Women</AccordionTrigger>
 <AccordionContent>
   <div className="flex flex-col space-y-2 pl-4">
     <Link
       href="#"
       className="py-2 text-sm text-muted-foreground hover:text-foreground"
       onClick={() => setOpen(false)}
     >
       New Arrivals
     </Link>
     <Link
       href="#"
       className="py-2 text-sm text-muted-foreground hover:text-foreground"
       onClick={() => setOpen(false)}
     >
       Dresses
     </Link>
     <Link
       href="#"
       className="py-2 text-sm text-muted-foreground hover:text-foreground"
       onClick={() => setOpen(false)}
     >
       Tops
     </Link>
     <Link
       href="#"
       className="py-2 text-sm text-muted-foreground hover:text-foreground"
       onClick={() => setOpen(false)}
     >
       Bottoms
     </Link>
     <Link
       href="#"
       className="py-2 text-sm text-muted-foreground hover:text-foreground"
       onClick={() => setOpen(false)}
     >
       Outerwear
     </Link>
   </div>
 </AccordionContent>
              </AccordionItem>
              <AccordionItem value="men" className="border-b">
 <AccordionTrigger className="py-3 text-base">Men</AccordionTrigger>
 <AccordionContent>
   <div className="flex flex-col space-y-2 pl-4">
     <Link
       href="#"
       className="py-2 text-sm text-muted-foreground hover:text-foreground"
       onClick={() => setOpen(false)}
     >
       New Arrivals
     </Link>
     <Link
       href="#"
       className="py-2 text-sm text-muted-foreground hover:text-foreground"
       onClick={() => setOpen(false)}
     >
       Shirts
     </Link>
     <Link
       href="#"
       className="py-2 text-sm text-muted-foreground hover:text-foreground"
       onClick={() => setOpen(false)}
     >
       Pants
     </Link>
     <Link
       href="#"
       className="py-2 text-sm text-muted-foreground hover:text-foreground"
       onClick={() => setOpen(false)}
     >
       Outerwear
     </Link>
     <Link
       href="#"
       className="py-2 text-sm text-muted-foreground hover:text-foreground"
       onClick={() => setOpen(false)}
     >
       Accessories
     </Link>
   </div>
 </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="#"
              className="flex items-center justify-between border-b py-3 text-base"
              onClick={() => setOpen(false)}
            >
              Accessories
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between border-b py-3 text-base"
              onClick={() => setOpen(false)}
            >
              New Arrivals
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between border-b py-3 text-base"
              onClick={() => setOpen(false)}
            >
              Sale
              <ChevronRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
        <div className="mt-6 flex flex-col space-y-4">
          <Button onClick={() => setOpen(false)}>Profile</Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Edit Profile
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

