"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Heart, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProductCard({ product, index, image }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const hasDiscount = product.discount !== undefined

  return (
    <div
      className="animate-fade-in group relative flex flex-col overflow-hidden rounded-lg border bg-background [animation-delay:var(--delay)]"
      style={{ "--delay": `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {hasDiscount && (
          <Badge className="absolute left-2 top-2 bg-destructive text-destructive-foreground">Sale</Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={(e) => {
            e.preventDefault()
            setIsFavorite(!isFavorite)
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-primary text-primary" : ""}`} />
        </Button>
        <div
          className={`absolute bottom-0 left-0 right-0 flex justify-center p-2 transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <Button className="w-full gap-2">
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <Link href="#" className="line-clamp-1 font-medium hover:underline">
          {product.name}
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-medium">${product.price}</span>
          {hasDiscount && <span className="text-sm text-muted-foreground line-through">${product.discount}</span>}
        </div>
      </div>
    </div>
  )
}

