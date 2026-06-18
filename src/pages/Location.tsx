import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Location() {
  return (
    <div className="pt-20">
      {/* ===== 곤색 헤더 ===== */}
      <section className="relative overflow-hidden bg-primary px-6 py-16 md:py-20">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.03]" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.03]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-secondary-container text-sm font-label font-bold tracking-[0.25em] uppercase mb-3">
              Location
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight mb-3">
              오시는 길
            </h2>
            <p className="text-white/60 max-w-xl text-base md:text-lg">
              (주)뉴진사이언스 방문을 환영합니다.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-container via-secondary to-secondary-container" />
      </section>

      {/* ===== 본문 ===== */}
      <div className="pb-20 px-8 max-w-7xl mx-auto pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">주소</h4>
                <p className="text-on-surface-variant">경기도 광명시 소하로 190, 광명G타워 B동 921호</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">전화번호</h4>
                <p className="text-on-surface-variant">02-898-8805</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">이메일</h4>
                <p className="text-on-surface-variant">newgenes@newgenesci.com</p>
              </div>
            </div>
          </div>
          
          <div className="aspect-video bg-surface-container-highest rounded-3xl overflow-hidden border border-surface-container-highest">
            <div className="w-full h-[calc(100%+120px)] -mt-[120px]">
              <iframe 
                src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B4%91%EB%AA%85%EC%8B%9C%20%EC%86%8C%ED%95%98%EB%A1%9C%20190%20(%EA%B4%91%EB%AA%85G%ED%83%80%EC%9B%8C)&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="뉴진사이언스 오시는 길"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
