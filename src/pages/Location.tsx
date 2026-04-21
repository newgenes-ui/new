import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Location() {
  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold font-headline mb-4">오시는 길</h2>
        <p className="text-on-surface-variant max-w-2xl">
          (주)뉴진사이언스 방문을 환영합니다.
        </p>
      </motion.div>

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
  );
}
