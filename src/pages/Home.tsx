import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IProduct } from "../interface/product";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: products, isLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products`)
        return data
      } catch (error) {
        throw error
      }
    },
    staleTime: Infinity
  })

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen text-2xl">Đang tải...</div>
  }

  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="max-w-7xl mx-auto relative">
        <img
          className="flex items-center justify-center w-full"
          src="./images/banner.png"
          alt="Banner"
        />
      </div>

      {/* Brands Section */}
      <div className="bg-black py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 text-white text-2xl md:text-4xl font-serif">
          <span><img src="./images/versace.png" alt="Versace" /></span>
          <span><img src="./images/zara.png" alt="Zara" /></span>
          <span><img src="./images/gucci.png" alt="Gucci" /></span>
          <span><img src="./images/prada.png" alt="Prada" /></span>
          <span><img src="./images/calvin.png" alt="Calvin Klein" /></span>
        </div>
      </div>

      {/* NEW ARRIVALS Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">NEW ARRIVALS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products?.slice(0, 4).map((product) => (
              <div key={product.id} className="group">
                <Link to={`/detail/${product.id}`}>
                <div className="bg-[#F0EEED] rounded-[20px] aspect-square flex items-center justify-center overflow-hidden mb-4">
                  <img src={product.image} alt={product.name} className="group-hover:scale-110 transition-transform" />
                </div>
                 </Link>
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <div className="flex text-yellow-400 mb-1">★★★★<span className="text-gray-300">★</span> <span className="text-black ml-2 text-sm">4.5/5</span></div>
                <div className="text-2xl font-bold">{product.price}VNĐ</div>
              </div>
             
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="border border-black/10 px-14 py-3 rounded-full hover:bg-black hover:text-white transition-all">View All</button>
          </div>
        </div>
      </section>

      <hr className="max-w-7xl mx-auto border-black/10" />

      {/* TOP SELLING Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">TOP SELLING</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products?.slice(4, 8).map((product) => (
              <div key={product.id} className="group">
                <Link to={`/detail/${product.id}`}>
                <div className="bg-[#F0EEED] rounded-[20px] aspect-square flex items-center justify-center overflow-hidden mb-4">
                  <img src={product.image} alt={product.name} className="group-hover:scale-110 transition-transform" />
                </div>
                </Link>
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <div className="flex text-yellow-400 mb-1">★★★★<span className="text-gray-300">★</span> <span className="text-black ml-2 text-sm">4.5/5</span></div>
                <div className="text-2xl font-bold">{product.price}VNĐ</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="border border-black/10 px-14 py-3 rounded-full hover:bg-black hover:text-white transition-all">View All</button>
          </div>
        </div>
      </section>

      {/* BROWSE BY DRESS STYLE Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-[#F0F0F0] rounded-[40px] p-10 md:p-16">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">BROWSE BY DRESS STYLE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] h-[280px] relative overflow-hidden group">
              <h3 className="absolute top-6 left-8 text-3xl font-bold z-10"></h3>
              <img src="./images/b1.png" alt="Casual" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="bg-white rounded-[20px] h-[280px] md:col-span-2 relative overflow-hidden group">
              <h3 className="absolute top-6 left-8 text-3xl font-bold z-10"></h3>
              <img src="./images/b2.png" alt="Formal" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="bg-white rounded-[20px] h-[280px] md:col-span-2 relative overflow-hidden group">
              <h3 className="absolute top-6 left-8 text-3xl font-bold z-10"></h3>
              <img src="./images/b3.png" alt="Party" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="bg-white rounded-[20px] h-[280px] relative overflow-hidden group">
              <h3 className="absolute top-6 left-8 text-3xl font-bold z-10"></h3>
              <img src="./images/b4.png" alt="Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS Section */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">OUR HAPPY CUSTOMERS</h2>
            <div className="flex gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-all">←</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-all">→</button>
            </div>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
            <div className="min-w-[350px] md:min-w-[400px] p-8 border border-black/10 rounded-[20px] snap-start bg-white">
              <div className="flex text-yellow-400 mb-3 text-xl">★★★★★</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-xl">Sarah M.</span>
                <span className="bg-green-500 text-white p-1 rounded-full text-[8px] flex items-center justify-center w-4 h-4">✓</span>
              </div>
              <p className="text-black/60 leading-relaxed">
                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
              </p>
            </div>
            {/* Các testimonial khác tương tự... */}
            <div className="min-w-[350px] md:min-w-[400px] p-8 border border-black/10 rounded-[20px] snap-start bg-white">
              <div className="flex text-yellow-400 mb-3 text-xl">★★★★★</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-xl">Alex K.</span>
                <span className="bg-green-500 text-white p-1 rounded-full text-[8px] flex items-center justify-center w-4 h-4">✓</span>
              </div>
              <p className="text-black/60 leading-relaxed">
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;