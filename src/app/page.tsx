import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white">
      <Header />
      <main className="flex-1">
        <div className="w-full">
          <div className="relative w-full min-h-[560px] flex flex-col justify-end p-6 md:p-20 overflow-hidden">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
              data-alt="Modern African cityscape with warm sunlight hitting contemporary architecture" 
              style={{ backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.4) 0%, rgba(30, 58, 138, 0.85) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQJEzgYCpv49GOeGldQg-4z3n-XcnxTpIbIRssJJ-CE3Ih7Gvnux9LiF4z9y-CnY-oQRx7kcGRL6L2wDfR4e18HdcsbbXAkfpRtBh9USyf9bxFepCZ0EuKqtHNKsxtarF7G3RBKGO1zyYHMQ9z4wvXw4Ix4_296iIWUTrPwjT_1_dWL8Kvfui_xcdFvHLrRC_tsSDZ2bG01iPtwe592_dkehIHpi3khrIBUk4lejXazEHPF5Uyzl88mzQWlrYJcKpCOp6Z8DFigA")' }}
            >
            </div>
            <div className="relative z-10 max-w-3xl flex flex-col gap-6 animate-fade-in-up">
              <div className="flex flex-col gap-4 text-left">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/30 w-fit">
                  <span className="material-symbols-outlined text-sm mr-1">public</span> Pan-African Ecosystem
                </span>
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-sm">
                  Elevating Hospitality &amp; Lifestyle Across Africa
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  Bookello is the all-in-one ecosystem connecting travelers to experiences and empowering businesses with cutting-edge technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-lg">
                  <span className="truncate">Explore Ecosystem</span>
                </button>
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors">
                  <span className="truncate">Watch Video</span>
                  <span className="material-symbols-outlined ml-2 text-sm">play_circle</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white border-b border-border-light py-8">
          <div className="max-w-[960px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left divide-x divide-border-light">
            <div className="px-4 first:pl-0">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-subtext-light">Cities Covered</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold text-primary">2k+</p>
              <p className="text-sm text-subtext-light">Partner Hotels</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold text-primary">150k</p>
              <p className="text-sm text-subtext-light">Monthly Users</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-sm text-subtext-light">Local Support</p>
            </div>
          </div>
        </div>

        {/* Ecosystem Section */}
        <div className="px-4 md:px-20 py-16 md:py-24 bg-blue-50/50">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary/10 pb-6">
              <div className="max-w-2xl">
                <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Solutions</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] text-text-light">
                  The Bookello Ecosystem
                </h2>
                <p className="mt-4 text-subtext-light text-lg">
                  Tailored digital solutions designed for the unique dynamics of the African market.
                </p>
              </div>
              <a className="hidden md:flex items-center text-primary font-bold hover:underline" href="#">
                View all products <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Marketplace Card */}
              <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:border-primary/30">
                <div 
                  className="h-64 w-full bg-cover bg-center relative overflow-hidden" 
                  data-alt="Happy friends enjoying dinner at a modern restaurant rooftop" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnHZ9KVxJ8BVsphDMDlWIPFEA3Cpe0IZ4JuOIHSYa563tezxUeEEpu6uIBNxoKvfZh9k19ZuocVNarB-Qy5ouYZXmkD_09w7OICUs0Xu4P-QDqTay1QE-CcwEa3R42ZHu1VB1Ms4fVn5sTVhA8AGVs_90pIEuDYWei0Tp6RXmhi7wRjbdapJAZPFCFcWshsjDwrEWoNEvlQ2nOtNoiuto1irQ6t69pVqqEGXhcRPamwHJyzA5TQ7LMCVH85i6TERI7NVKUNrh0yw")' }}
                >
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white backdrop-blur rounded-lg p-2 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-2xl">storefront</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text-light mb-2 group-hover:text-primary transition-colors">Bookello Marketplace</h3>
                    <p className="text-subtext-light leading-relaxed">
                      Your gateway to the best hotels, restaurants, and local experiences across the continent. Book your next adventure with ease, security, and local insights.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-subtext-light">For Travelers</span>
                    <button className="flex items-center text-sm font-bold text-primary group-hover:text-primary-dark transition-colors">
                      Learn More <span className="material-symbols-outlined ml-1 text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Check-In Card */}
              <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:border-primary/30">
                <div 
                  className="h-64 w-full bg-cover bg-center relative overflow-hidden" 
                  data-alt="Hotel receptionist using a tablet for check-in management" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgj_nCLeYuR7SGHNO9niSQXBRT-t27ZInrLs9MYeoIqmT0qQfPReQt2W9cMx_kSuvASYXLepKa9kXxAk_o3nQ5pcbG9jUQBZ7yJpKPiUVrIChI0kWzVaR0K9N-ZivEeIArnwV-SgXvBaS1egtptkTBU8BOmPlhfKwsfPMMOJJiqhiGju6-8a3cY-o1xY54tNz6rTX1NNS8X1lVgyAcJWhadzI3TLEyT76XvRSmzCEr5z6kx1peG3h-heow1AVncg5S-MDZZUZ7XQ")' }}
                >
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white backdrop-blur rounded-lg p-2 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-2xl">desktop_mac</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text-light mb-2 group-hover:text-primary transition-colors">Check-In by Bookello</h3>
                    <p className="text-subtext-light leading-relaxed">
                      A comprehensive SaaS solution for hospitality managers. Streamline bookings, manage inventory, process payments, and grow your business with data-driven tools.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-subtext-light">For Businesses</span>
                    <button className="flex items-center text-sm font-bold text-primary group-hover:text-primary-dark transition-colors">
                      Learn More <span className="material-symbols-outlined ml-1 text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-5xl mb-2">rocket_launch</span>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">Ready to transform your experience?</h2>
              <p className="text-lg text-white/90 max-w-xl">Whether you are a traveler looking for the next gem or a business owner ready to scale, Bookello is your partner.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="bg-white text-primary hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors shadow-lg">
                  Get Started Free
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border-light pt-16 pb-8 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-text-light mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">travel_explore</span>
              <span className="text-xl font-bold">Bookello</span>
            </div>
            <p className="text-sm text-subtext-light mb-6">
              Building the digital infrastructure for African hospitality and lifestyle experiences.
            </p>
            <div className="flex gap-4">
              <a className="text-subtext-light hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-subtext-light hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
              <a className="text-subtext-light hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">chat_bubble</span></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-text-light mb-4">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-subtext-light">
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-light mb-4">Products</h4>
            <ul className="flex flex-col gap-2 text-sm text-subtext-light">
              <li><a className="hover:text-primary transition-colors" href="#">Marketplace</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Check-In SaaS</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">API for Developers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Partner Program</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-light mb-4">Stay Updated</h4>
            <p className="text-xs text-subtext-light mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex gap-2">
              <input className="bg-white border border-border-light text-sm rounded-lg px-3 py-2 w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-light" placeholder="Email address" type="email"/>
              <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-subtext-light">
          <p>© 2024 Bookello Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
