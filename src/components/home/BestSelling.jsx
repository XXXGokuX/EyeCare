import { ProductSlider } from "../../utils/ProductSlider"

export default function BestSelling() {
  const deals = [
    {
      name: "Vinyl",
      currentPrice: 32,
      originalPrice: 45,
      discount: 30,
      image: "https://img.ebdcdn.com/product/front/gray/mt6567.jpg?q=70&im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0",
      colors: [
        { name: "Champagne", class: "bg-amber-200" },
        { name: "Clear", class: "bg-gray-100" },
        { name: "Gray", class: "bg-gray-400" },
      ],
    },
    {
      name: "Romy",
      currentPrice: 32,
      originalPrice: 45,
      discount: 30,
      image: "https://img.ebdcdn.com/product/front/gray/mt6567.jpg?q=70&im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0",
      colors: [{ name: "Clear", class: "bg-gray-100" }],
    },
    {
      name: "Botanist",
      currentPrice: 32,
      originalPrice: 39,
      discount: 20,
      image: "https://img.ebdcdn.com/product/front/gray/mt6567.jpg?q=70&im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0",
      colors: [{ name: "Tortoise", class: "bg-amber-800" }],
    },
    {
      name: "Hepburn",
      currentPrice: 35,
      originalPrice: 49,
      discount: 30,
      image: "https://img.ebdcdn.com/product/front/gray/mt6567.jpg?q=70&im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0",
      colors: [
        { name: "Clear", class: "bg-gray-100" },
        { name: "Gray", class: "bg-gray-400" },
      ],
    },
  ]

  return <ProductSlider title="Best Selling Glasses" products={deals} shopAllLink="/deals" shopAllText="Shop best sellers" />
}

