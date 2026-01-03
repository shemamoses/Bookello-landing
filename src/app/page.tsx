import { Header } from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[100vh] flex flex-col justify-center p-6 md:p-20 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105" 
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQJEzgYCpv49GOeGldQg-4z3n-XcnxTpIbIRssJJ-CE3Ih7Gvnux9LiF4z9y-CnY-oQRx7kcGRL6L2wDfR4e18HdcsbbXAkfpRtBh9USyf9bxFepCZ0EuKqtHNKsxtarF7G3RBKGO1zyYHMQ9z4wvXw4Ix4_296iIWUTrPwjT_1_dWL8Kvfui_xcdFvHLrRC_tsSDZ2bG01iPtwe592_dkehIHpi3khrIBUk4lejXazEHPF5Uyzl88mzQWlrYJcKpCOp6Z8DFigA")' 
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-slate-900/80" />
          
          <div className="relative z-10 max-w-4xl flex flex-col gap-8 animate-fade-in-up pt-20">
            <div className="flex flex-col gap-6 text-left">
              <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 w-fit">
                <span className="material-symbols-outlined text-lg mr-2">public</span> 
                Pan-African Ecosystem
              </span>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                Elevating Hospitality<br className="hidden md:block" /> 
                <span className="text-blue-300">Across Africa</span>
              </h1>
              <p className="text-white/80 text-xl md:text-2xl font-normal leading-relaxed max-w-2xl">
                The all-in-one ecosystem connecting travelers to extraordinary experiences and empowering businesses with cutting-edge technology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="flex cursor-pointer items-center justify-center rounded-full h-14 px-10 bg-white text-blue-600 text-lg font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] shadow-2xl shadow-black/20">
                Explore Ecosystem
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </button>
              <button className="flex cursor-pointer items-center justify-center rounded-full h-14 px-10 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                <span className="material-symbols-outlined mr-2">play_circle</span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <span className="material-symbols-outlined text-white/60 text-3xl">expand_more</span>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-16 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "50+", label: "Cities Covered", icon: "location_city" },
                { value: "2k+", label: "Partner Hotels", icon: "hotel" },
                { value: "150k", label: "Monthly Users", icon: "group" },
                { value: "24/7", label: "Local Support", icon: "support_agent" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined">{stat.icon}</span>
                  </div>
                  <p className="text-4xl md:text-5xl font-black text-slate-800 mb-1">{stat.value}</p>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section id="products" className="px-6 md:px-20 py-20 md:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto flex flex-col gap-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-flex items-center text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
                  <span className="w-8 h-[2px] bg-blue-600 mr-3"></span>
                  Our Solutions
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-800">
                  The Bookello Ecosystem
                </h2>
                <p className="mt-6 text-slate-600 text-xl leading-relaxed">
                  Tailored digital solutions designed for the unique dynamics of the African market.
                </p>
              </div>
              <Link className="hidden md:flex items-center text-blue-600 font-bold hover:underline underline-offset-4 text-lg" href="#">
                View all products 
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Marketplace Card */}
              <div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div 
                  className="h-72 w-full bg-cover bg-center relative overflow-hidden" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnHZ9KVxJ8BVsphDMDlWIPFEA3Cpe0IZ4JuOIHSYa563tezxUeEEpu6uIBNxoKvfZh9k19ZuocVNarB-Qy5ouYZXmkD_09w7OICUs0Xu4P-QDqTay1QE-CcwEa3R42ZHu1VB1Ms4fVn5sTVhA8AGVs_90pIEuDYWei0Tp6RXmhi7wRjbdapJAZPFCFcWshsjDwrEWoNEvlQ2nOtNoiuto1irQ6t69pVqqEGXhcRPamwHJyzA5TQ7LMCVH85i6TERI7NVKUNrh0yw")' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-5 left-5 bg-white rounded-2xl p-3 shadow-lg">
                    <span className="material-symbols-outlined text-blue-600 text-2xl">storefront</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">For Travelers</span>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      Bookello Marketplace
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Your gateway to the best hotels, restaurants, and local experiences across the continent. Book your next adventure with ease.
                    </p>
                  </div>
                  <div className="mt-auto pt-6">
                    <a 
                      href="https://marketplace.bookello.life" 
                      className="inline-flex items-center text-blue-600 font-bold hover:underline underline-offset-4 group/link"
                    >
                      Visit Marketplace 
                      <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Check-In Card */}
              <div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div 
                  className="h-72 w-full bg-cover bg-center relative overflow-hidden" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgj_nCLeYuR7SGHNO9niSQXBRT-t27ZInrLs9MYeoIqmT0qQfPReQt2W9cMx_kSuvASYXLepKa9kXxAk_o3nQ5pcbG9jUQBZ7yJpKPiUVrIChI0kWzVaR0K9N-ZivEeIArnwV-SgXvBaS1egtptkTBU8BOmPlhfKwsfPMMOJJiqhiGju6-8a3cY-o1xY54tNz6rTX1NNS8X1lVgyAcJWhadzI3TLEyT76XvRSmzCEr5z6kx1peG3h-heow1AVncg5S-MDZZUZ7XQ")' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-5 left-5 bg-white rounded-2xl p-3 shadow-lg">
                    <span className="material-symbols-outlined text-blue-600 text-2xl">desktop_mac</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">For Businesses</span>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      Check-In by Bookello
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      A comprehensive SaaS solution for hospitality managers. Streamline bookings, manage inventory, and grow your business.
                    </p>
                  </div>
                  <div className="mt-auto pt-6">
                    <a 
                      href="https://checkin.bookello.life" 
                      className="inline-flex items-center text-blue-600 font-bold hover:underline underline-offset-4 group/link"
                    >
                      Try Check-In 
                      <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-[2rem] p-10 md:p-20 text-center text-white shadow-2xl shadow-blue-600/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <span className="material-symbols-outlined text-5xl">rocket_launch</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Ready to transform<br />your experience?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                Whether you're a traveler looking for the next gem or a business owner ready to scale, Bookello is your partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] text-lg">
                  Get Started Free
                </button>
                <button className="bg-transparent border-2 border-white/50 text-white hover:border-white hover:bg-white/10 font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-blue-400 text-3xl">travel_explore</span>
                <span className="text-2xl font-bold">Bookello</span>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
                Building the digital infrastructure for African hospitality and lifestyle experiences.
              </p>
              <div className="flex gap-3">
                {["language", "mail", "chat"].map((icon) => (
                  <a key={icon} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors" href="#">
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="flex flex-col gap-3 text-slate-400">
                {["About Us", "Careers", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <a className="hover:text-blue-400 transition-colors" href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Products</h4>
              <ul className="flex flex-col gap-3 text-slate-400">
                {["Marketplace", "Check-In SaaS", "API", "Partners"].map((item) => (
                  <li key={item}>
                    <a className="hover:text-blue-400 transition-colors" href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Stay Updated</h4>
              <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for updates.</p>
              <div className="flex gap-2">
                <input 
                  className="bg-slate-800 border border-slate-700 text-sm rounded-full px-4 py-3 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500" 
                  placeholder="Email address" 
                  type="email"
                />
                <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shrink-0">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2024 Bookello Technologies. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
