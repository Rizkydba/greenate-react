import Container from "../common/Container";
import logo from "../../assets/icons/icon-white.png";

const Footer = () => {
  return (
    <footer className="relative bg-background pt-10 pb-6 px-6 sm:px-16 lg:px-32 rounded-tr-full rounded-tl-full font-inter text-white">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-white z-[-1] top-0 left-0"></div>
      <Container className="bg-primary rounded-[40px] px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/20">
          <h2 className="text-2xl md:text-3xl font-normal tracking-wide">
            Join Newsletter
          </h2>
          <div className="flex w-full md:w-auto max-w-md rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-80 px-4 py-2 bg-white text-black placeholder-gray-400 focus:outline-none text-sm"
            />
            <button className="bg-[#d2e2b8] text-[#0b3c32] font-medium px-6 py-2 hover:bg-[#c3d5a8] transition-colors text-sm">
              Submit
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-12">
            
          <div className="flex flex-col items-start gap-3">
            <img src={logo} alt="Greenate" className="h-32 w-auto object-contain" />
            <h3 className="font-baloo text-xl tracking-wider">Greenate</h3>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-base md:text-lg">Company</h4>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:underline">Products</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-base md:text-lg">Contact Us</h4>
            <div className="text-sm opacity-80 flex flex-col gap-3 leading-relaxed">
              <p>
                Jl. Bersama, Kelurahan Kembangan<br />
                Kota Jakarta Barat, Jakarta 10420,<br />
                Indonesia
              </p>
              <p>+1 202-918-2132</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-base md:text-lg">Follow Us</h4>
            <div className="flex gap-3">
                
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 1.8c-4.52 0-8.2 3.68-8.2 8.2s3.68 8.2 8.2 8.2 8.2-3.68 8.2-8.2-3.68-8.2-8.2-8.2zm4.108 3.582a.81.81 0 1 1 0 1.62.81.81 0 0 1 0-1.62zM12 7.65a4.35 4.35 0 1 1 0 8.7 4.35 4.35 0 0 1 0-8.7zm0 1.8a2.55 2.55 0 1 0 0 5.1 2.55 2.55 0 0 0 0-5.1z"/>
                </svg>
              </a>
              
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="TikTok">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.325 11.13c-.87-.043-1.638-.415-2.22-.992v2.73a2.825 2.825 0 1 1-2.825-2.824c.058 0 .114.007.172.012v1.649c-.057-.008-.113-.016-.172-.016a1.177 1.177 0 1 0 1.177 1.177V8.5h1.648a2.316 2.316 0 0 0 2.22 1.942v1.648c-.001 0-.001.03-.001.04z"/>
                </svg>
              </a>
              
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.743 13.136c-.144.542-.572.964-1.12 1.106C14.65 16.5 12 16.5 12 16.5s-2.65 0-3.623-.258a1.558 1.558 0 0 1-1.12-1.106C7 14.175 7 12 7 12s0-2.175.257-3.136a1.558 1.558 0 0 1 1.12-1.106C9.35 7.5 12 7.5 12 7.5s2.65 0 3.623.258a1.558 1.558 0 0 1 1.12 1.106C17 9.825 17 12 17 12s0 2.175-.257 3.136zM10.5 9.804v4.392L14.5 12l-4-2.196z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </Container>
      
      <div className="text-center text-sm text-black/70 mt-8">
        © 2024 Greenate Sustainable Food Products. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;