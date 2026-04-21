import { Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-surface-container-highest">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-10">
          
          {/* Left: Logo & Company Name */}
          <div className="flex flex-col gap-4 flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="New Gene Science Logo" 
              className="w-56 md:w-64 h-auto object-contain mix-blend-multiply dark:mix-blend-normal -ml-2" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="text-on-surface-variant text-[15px] md:text-base font-sans px-2 font-semibold">
              (주) 뉴진사이언스
            </div>
          </div>

          {/* Right: Other Company Info */}
          <div className="flex flex-col gap-3 text-on-surface-variant text-[13px] md:text-sm font-sans flex-grow mt-2 md:mt-0">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">대표</span>
                <span>김기환</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">사업자등록번호</span>
                <span>595-81-02960</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">주소</span>
                <span>경기도 광명시 소하로 190, 광명G타워 B동 921호</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">대표번호</span>
                <span>02-898-8805</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">Email</span>
                <a href="mailto:newgenes@newgenesci.com" className="hover:text-secondary transition-colors font-semibold">
                  newgenes@newgenesci.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-surface-container-highest/50">
          <p className="text-on-surface-variant/50 text-sm font-label tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} (주)뉴진사이언스 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
