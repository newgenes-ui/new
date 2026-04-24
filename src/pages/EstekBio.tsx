import { motion } from "motion/react";

export default function EstekBio() {
  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded mb-3 uppercase tracking-wider">
          협력 브랜드
        </div>
        <h2 className="text-4xl font-bold font-headline mb-4">이스텍바이오 제품</h2>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed mb-6">
          신뢰할 수 있는 실험 환경을 위한 이스텍바이오의 정밀 배양 솔루션입니다.
        </p>
        <a 
          href="http://www.yeastechbio.com/yeastech/main" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-secondary transition-colors"
        >
          이스텍바이오 홈페이지 가기
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center justify-center mt-12"
      >
        <h3 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-8 tracking-wide">Albumin</h3>
        <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-surface-container-highest">
          <img 
            src="/estek.png" 
            alt="Albumin" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
          />
        </div>
      </motion.div>
    </div>
  );
}
