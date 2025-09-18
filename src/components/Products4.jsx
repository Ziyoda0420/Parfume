"use client"

import { useState, useEffect } from "react"
import Par1 from "../assets/883b3e6f33d87c83226418b1488f5a20b83fb9fc.png"
import Par2 from "../assets/Par2.png"
import Par3 from "../assets/Par3.png"
import Par4 from "../assets/Par4.webp"
import Par5 from "../assets/Par5.avif"
import Fruit from "../assets/Fruit.png"
import Flowers from "../assets/Flowers.jpg"
import Amber from "../assets/Amber.jpg"

const Heart = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 000-6.364 4.5 4.5 0 00-6.364 0L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

const Star = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

const Minus = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
)

const Plus = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
)

const X = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ChevronLeft = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRight = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function Page() {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedSize, setSelectedSize] = useState("100ml")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showReviewsModal, setShowReviewsModal] = useState(false)
  const [discoverCurrentIndex, setDiscoverCurrentIndex] = useState(0)

  const basePrice = 250.0
  const totalPrice = basePrice * quantity

  const sizeOptions = [
    { size: "100ml", label: "100" },
    { size: "150ml", label: "150" },
  ]

  const productImages = [Par4, Par4] // replaced Par1 with Par4 in main product images

  const discoverProducts = [
    { id: 1, image: Par1 },
    { id: 2, image: Par2 },
    { id: 3, image: Par3 },
    { id: 4, image: Par4 },
    { id: 5, image: Par5 },
    { id: 6, image: "/luxury-perfume-bottle-6.jpg" },
  ]

  const reviews = [
    {
      id: 1,
      name: "Jack Smith",
      date: "June 03, 2023",
      rating: 5,
      text: "Very lovely fragrance. Would recommend to individuals looking for a combination of sweetness and elegance in perfume. I like floral perfume, and this one is lovely, it's not overpowering. Nice, pleasant scent. I am happy with purchase.",
      avatar: "bg-pink-500",
    },
    {
      id: 2,
      name: "Ashley",
      date: "January 05, 2023",
      rating: 5,
      text: "I like floral perfume, and this one is lovely, it's not overpowering. Nice, pleasant scent. I am happy with purchase.",
      avatar: "bg-blue-500",
    },
    {
      id: 3,
      name: "Lauri Jess",
      date: "October 05, 2022",
      rating: 5,
      text: "I tried a sample and fell in love with this fragrance so I had to buy my first bottle. This fragrance is my treat for me. It helps to create a good mood. During a stressful day really nice to stop a few moments and revisit the scent from my wrists. I really love the fact that it doesn't take the air out of the room. Some scents are so overbearing but not this one. Try it you just might really love it.",
      avatar: "bg-purple-500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }

  const handleDiscoverPrev = () => {
    setDiscoverCurrentIndex((prev) => (prev - 1 + discoverProducts.length) % discoverProducts.length)
  }

  const handleDiscoverNext = () => {
    setDiscoverCurrentIndex((prev) => (prev + 1) % discoverProducts.length)
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="relative aspect-[4/5] bg-black rounded-lg overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {productImages.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-light mb-4">Luxurious Elixir</h1>
              <p className="text-gray-300 leading-relaxed mb-6">
                Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an
                enchanting symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted
                with the finest essences and imbued with the allure of precious golden hues.
              </p>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-400">(50) Reviews and Ratings</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex space-x-4">
                {sizeOptions.map((option) => (
                  <div key={option.size} className="relative">
                    <button onClick={() => handleSizeSelect(option.size)} className="relative block">
                      <div className="w-16 h-20 bg-black rounded-lg overflow-hidden mb-2">
                        <img
                          src={Par4 || "/placeholder.svg"} // replaced Par1 with Par4 for size variants
                          alt={`${option.size} variant`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-gray-300">{option.label} ml</span>
                      </div>
                    </button>
                    <div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-white transition-opacity ${
                        selectedSize === option.size ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-3xl font-light text-orange-400">${totalPrice.toFixed(2)}</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm">Qty</span>
                <div className="flex items-center border border-gray-600 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-800 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-800 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                onClick={handleWishlistToggle}
                className="flex items-center space-x-2 text-sm hover:text-red-400 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
                  }`}
                />
                <span>Wish list</span>
              </button>
            </div>
            <Button className="w-full bg-gray-200 hover:bg-gray-300 text-black font-medium py-3 rounded-lg transition-colors">
              Add to Bag
            </Button>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="bg-gray-800 px-2 py-1 rounded text-xs">afterpay</div>
              <span>Shop now and pay later with 4 payments</span>
            </div>
          </div>
        </div>
        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-light mb-6">Product Details</h2>
          <p className="text-gray-300 leading-relaxed">
            Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an
            enchanting symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with
            the finest essences and imbued with the allure of precious golden hues. From the first spritz to the
            lingering dry-down, Luxurious Elixir promises an intoxicating experience that embodies the essence of lavish
            indulgence.
          </p>
        </div>
        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-light mb-6">The Golden Overture</h2>
          <p className="text-gray-300 leading-relaxed">
            Luxurious Elixir opens with a grand flourish of radiant citrus and sun-kissed fruits, reminiscent of golden
            rays caressing your senses. The opulent heart unfolds with a bouquet of velvety roses and rare blooms, their
            essence radiating with the allure of gilded petals. As the fragrance settles, a sumptuous blend of warm
            amber, creamy vanilla, and smooth sandalwood evokes a sense of ultimate luxury and refinement.
          </p>
        </div>
        <div className="mt-16 max-w-6xl">
          <h2 className="text-2xl font-light mb-8">Key Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-light">Top Note</h3>
              <p className="text-sm text-gray-400 mb-4">Citrus Accord, Sun-kissed Fruits</p>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-900">
                <img
                  src={Fruit || "/placeholder.svg"}
                  alt="Citrus fruits - Top Note"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-light">Heart Note</h3>
              <p className="text-sm text-gray-400 mb-4">Golden Roses, Rare Blooms</p>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-900">
                <img
                  src={Flowers || "/placeholder.svg"}
                  alt="Golden roses - Heart Note"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-light">Base Note</h3>
              <p className="text-sm text-gray-400 mb-4">Amber, Vanilla, Sandalwood</p>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-900">
                <img
                  src={Amber || "/placeholder.svg"}
                  alt="Amber and spices - Base Note"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-light mb-6">The Heart of Elegance</h2>
          <p className="text-gray-300 leading-relaxed">
            Luxurious Elixir is the embodiment of elegance, drawing you into a world where glamour and prestige unite.
            With every spritz, the fragrance weaves a tapestry of glistening gold around you, enhancing your allure and
            capturing the admiration of those around.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mb-16">
          <h2 className="text-3xl font-light mb-8 text-orange-400">Reviews</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-sm w-12">5 stars</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-2">
                    <div className="bg-orange-400 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <span className="text-sm text-gray-400 w-8">100%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm w-12">4 stars</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  <span className="text-sm text-gray-400 w-8">0%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm w-12">3 stars</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  <span className="text-sm text-gray-400 w-8">0%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm w-12">2 stars</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  <span className="text-sm text-gray-400 w-8">0%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm w-12">1 star</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  <span className="text-sm text-gray-400 w-8">0%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
              <div className="text-2xl font-light">5 out of 5</div>
              <div className="text-sm text-gray-400">99% of reviewers recommend this product</div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">90 reviews</span>
                <button className="text-sm text-white hover:text-orange-400 transition-colors">+ Add a Review</button>
              </div>
            </div>
          </div>
          <div className="space-y-6 mb-8">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-800 pb-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full ${review.avatar} flex items-center justify-center text-white font-medium`}
                  >
                    {getInitials(review.name)}
                  </div>
                  <div className="flex-1">
                    <div className="flex space-x-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-3">{review.text}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{review.name}</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => setShowReviewsModal(true)}
              className="px-8 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Load More
            </button>
          </div>
        </div>
        {showReviewsModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-light">All Reviews</h3>
                  <button
                    onClick={() => setShowReviewsModal(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="text-center p-8 border border-gray-700 rounded-lg">
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-8 h-8 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <h4 className="text-xl font-light mb-2">Exceptional Quality</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Our customers consistently rate Luxurious Elixir as one of the finest fragrances they've ever
                      experienced. With 99% customer satisfaction and over 500 five-star reviews, this exquisite scent
                      has become a beloved signature fragrance for discerning individuals worldwide.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Premium Ingredients</h5>
                      <p className="text-sm text-gray-300">
                        Crafted with the finest natural essences and rare botanical extracts.
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Long-lasting</h5>
                      <p className="text-sm text-gray-300">
                        Exceptional longevity with 8-12 hours of beautiful fragrance evolution.
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Versatile</h5>
                      <p className="text-sm text-gray-300">
                        Perfect for both day and evening wear, suitable for all seasons.
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Luxury Packaging</h5>
                      <p className="text-sm text-gray-300">
                        Presented in an elegant bottle with gold accents and premium gift box.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-24 max-w-6xl">
          <h2 className="text-3xl font-light mb-12 text-center text-orange-400">Discover More</h2>
          <div className="relative">
            <button
              onClick={handleDiscoverPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleDiscoverNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <div className="overflow-hidden mx-16">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${(discoverCurrentIndex * 100) / 4}%)`,
                  width: `${(discoverProducts.length * 100) / 4}%`,
                }}
              >
                {discoverProducts.map((product) => (
                  <div key={product.id} className="w-1/4 px-3 flex-shrink-0">
                    <div className="bg-black rounded-lg overflow-hidden aspect-[3/4] hover:bg-gray-800 transition-colors duration-300">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={`Discover product ${product.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
