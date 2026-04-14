import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import type { IProduct } from '../interface/product';
import axios from 'axios';


const Detail = () => {
  const {id} = useParams()
  
  const {data: product, isLoading} = useQuery<IProduct>({
    queryKey:["product",id],
    queryFn: async() =>{
      const{data} = await axios.get(`http://localhost:3000/products/${id}`)
      return data
    }, 
    enabled: !!id
  })
   if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Không có sản phẩm</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-black">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-gray-500 text-sm mb-8">
        <a href="#" className="hover:text-black">Home</a>
        <span>&gt;</span>
        <a href="#" className="hover:text-black">Shop</a>
        <span>&gt;</span>
        <a href="#" className="hover:text-black">Men</a>
        <span>&gt;</span>
        <span className="text-black">T-shirts</span>
      </nav>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        
        {/* Left: Product Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          
          <div className="flex md:flex-col gap-4 w-full md:w-1/4">
            {/* thumbnails */}
            {[1,2,3].map((_, index) => (
              <div
                key={index}
                className="bg-[#F0EEED] rounded-2xl overflow-hidden cursor-pointer aspect-square"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            ))}
          </div>

          {/* main image */}
          <div className="w-full md:w-3/4 bg-[#F0EEED] rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          
          {/* NAME */}
          <h1 className="text-4xl font-black mb-3 uppercase tracking-tighter">
            {product.name}
          </h1>

          {/* RATING (fake giữ nguyên UI) */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex text-yellow-400">
              ★★★★<span className="text-yellow-400/50">★</span>
            </div>
            <span className="text-gray-500 text-sm">4.5/5</span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold">
              ${product.price}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-500 leading-relaxed mb-6 border-b pb-6">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mb-6 border-b pb-6">
            <h3 className="text-gray-500 mb-3">Select Colors</h3>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-[#4F4631] flex items-center justify-center text-white ring-2 ring-offset-2 ring-black">
                ✓
              </div>
              <div className="w-9 h-9 rounded-full bg-[#314F4A] hover:scale-110 transition-transform" />
              <div className="w-9 h-9 rounded-full bg-[#31344F] hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-gray-500 mb-3">Choose Size</h3>
            <div className="flex flex-wrap gap-3">
              <div className="px-6 py-2.5 rounded-full bg-[#F0F0F0] text-gray-500">Small</div>
              <div className="px-6 py-2.5 rounded-full bg-[#F0F0F0] text-gray-500">Medium</div>
              <div className="px-6 py-2.5 rounded-full bg-black text-white">Large</div>
              <div className="px-6 py-2.5 rounded-full bg-[#F0F0F0] text-gray-500">X-Large</div>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex gap-4">
            <div className="flex items-center bg-[#F0F0F0] rounded-full px-6 py-3 gap-6">
              <div className="text-2xl font-bold cursor-pointer">-</div>
              <span className="font-bold">1</span>
              <div className="text-2xl font-bold cursor-pointer">+</div>
            </div>
            <div className="grow bg-black text-white rounded-full font-bold py-4 text-center cursor-pointer hover:bg-gray-900 transition-all">
              Add to Cart
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & Reviews Section */}
      <div className="mb-20">
        <div className="flex border-b mb-10 text-center">
          <button className="flex-1 py-4 text-gray-500 hover:text-black border-b-2 border-transparent">Product Details</button>
          <button className="flex-1 py-4 text-black border-b-2 border-black font-semibold">Rating & Reviews</button>
          <button className="flex-1 py-4 text-gray-500 hover:text-black border-b-2 border-transparent">FAQs</button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">All Reviews <span className="text-gray-400 text-sm font-normal">(451)</span></h2>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="p-3 bg-[#F0F0F0] rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-3h6m2 5h6" />
              </svg>
            </button>
            <button className="bg-[#F0F0F0] px-6 py-3 rounded-full font-semibold flex items-center gap-2 grow justify-center md:grow-0">
              Latest <span>▼</span>
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold grow justify-center md:grow-0 hover:bg-gray-800">
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Review 1 */}
          <div className="border p-8 rounded-3xl relative border-black/10">
            <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-lg">Samantha D.</span>
              <span className="bg-green-500 text-white p-0.5 rounded-full text-[8px]">✓</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
            </p>
            <p className="text-gray-400 text-sm mt-6">Posted on August 14, 2023</p>
            <button className="absolute top-8 right-8 text-gray-400">•••</button>
          </div>

          {/* Review 2-6 (Using loop logic for repeated UI) */}
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="border p-8 rounded-3xl relative border-black/10">
              <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-lg">Alex M.</span>
                <span className="bg-green-500 text-white p-0.5 rounded-full text-[8px]">✓</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
              </p>
              <p className="text-gray-400 text-sm mt-6">Posted on August 15, 2023</p>
              <button className="absolute top-8 right-8 text-gray-400">•••</button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-10 py-4 border rounded-full font-semibold hover:bg-black hover:text-white transition-all border-black/10">
            Load More Reviews
          </button>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-black mb-12 uppercase tracking-tighter italic">You Might Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Item 1 */}
          <div className="text-left group cursor-pointer">
            <div className="bg-[#F0EEED] rounded-3xl overflow-hidden aspect-square flex items-center justify-center mb-4">
              <img src={product.image} alt={product.name} className="w-full h-auto group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-bold text-lg mb-1">Polo with Contrast Trims</h3>
            <div className="flex items-center gap-2 mb-1">
              <div className="text-yellow-400">★★★★</div>
              <span className="text-gray-400 text-xs">4.0/5</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl">$212</span>
              <span className="text-gray-400 line-through font-bold text-xl">$242</span>
              <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full font-bold">-20%</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="text-left group cursor-pointer">
            <div className="bg-[#F0EEED] rounded-3xl overflow-hidden aspect-square flex items-center justify-center mb-4">
              <img src={product.image} alt="p2" className="w-full h-auto group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-bold text-lg mb-1">Gradient Graphic T-shirt</h3>
            <div className="flex items-center gap-2 mb-1">
              <div className="text-yellow-400">★★★<span className="text-yellow-400/50">★</span></div>
              <span className="text-gray-400 text-xs">3.5/5</span>
            </div>
            <div className="font-bold text-xl">$145</div>
          </div>

          {/* Item 3 */}
          <div className="text-left group cursor-pointer">
            <div className="bg-[#F0EEED] rounded-3xl overflow-hidden aspect-square flex items-center justify-center mb-4">
              <img src="./images/ao8.png" alt="p3" className="w-full h-auto group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-bold text-lg mb-1">Gradient Graphic T-shirt</h3>
            <div className="flex items-center gap-2 mb-1">
              <div className="text-yellow-400">★★★<span className="text-yellow-400/50">★</span></div>
              <span className="text-gray-400 text-xs">3.5/5</span>
            </div>
            <div className="font-bold text-xl">$145</div>
          </div>

          {/* Item 4 */}
          <div className="text-left group cursor-pointer">
            <div className="bg-[#F0EEED] rounded-3xl overflow-hidden aspect-square flex items-center justify-center mb-4">
              <img src="./images/ao9.png" alt="p4" className="w-full h-auto group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-bold text-lg mb-1">Polo with Contrast Trims</h3>
            <div className="flex items-center gap-2 mb-1">
              <div className="text-yellow-400">★★★★</div>
              <span className="text-gray-400 text-xs">4.0/5</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl">$212</span>
              <span className="text-gray-400 line-through font-bold text-xl">$242</span>
              <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full font-bold">-20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Detail;