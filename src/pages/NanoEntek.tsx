import { motion } from "motion/react";

export default function NanoEntek() {
  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded mb-3 uppercase tracking-wider">
          전국 총판 대리점
        </div>
        <h2 className="text-4xl font-bold font-headline mb-4">나노엔텍 ExT</h2>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          ExTransfection (Pipette style Electroporation System)
        </p>
      </motion.div>

      {/* 1. 상단 섹션: 왼쪽 A.png, 오른쪽 제품 내용 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex items-center justify-center p-4 bg-surface-container-highest rounded-3xl border border-surface-container-highest shadow-inner">
          <img 
            src="/A.png" 
            alt="ExTransfection System" 
            className="w-full max-w-xl h-auto object-contain transform scale-110 hover:scale-125 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-full mb-4 uppercase tracking-widest w-max">
            Next-Gen Transfection
          </div>
          <img 
            src="/aa.png" 
            alt="ExTransfection" 
            className="w-auto h-10 md:h-12 mb-6 object-contain object-left" 
          />
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 break-keep">
            ExTransfection™ Electroporation System은 단일 챔버 팁을 사용하여 정밀한 전기 펄스를 전달함으로써 높은 세포 생존율과 효율적인 형질감염을 가능하게 하는 전기 천공 장비입니다.
          </p>
          
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                <span className="text-secondary text-xl">⚡</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant">Efficiency</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                <span className="text-secondary text-xl">🛡️</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant">Viability</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                <span className="text-secondary text-xl">🔄</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant">Reproducibility</span>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 섹션: 왼쪽 B.png 카드, 오른쪽 C.png 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        {/* 2. 하단 왼쪽 B.png */}
        <div className="bg-surface-container-low border border-surface-container-highest rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group overflow-hidden">
          <div className="w-full h-80 bg-white flex items-center justify-center overflow-hidden">
            <img src="/B.png" alt="10 μL Kit" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6 w-full bg-surface-container-low">
            <h4 className="text-xl font-bold text-primary mb-2">ExTransfection™ 10 μL Kit</h4>
            <p className="text-sm text-on-surface-variant">
              Disposables for ExTransfection™
            </p>
          </div>
        </div>

        {/* 3. 하단 오른쪽 C.png */}
        <div className="bg-surface-container-low border border-surface-container-highest rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group overflow-hidden">
          <div className="w-full h-80 bg-white flex items-center justify-center overflow-hidden">
            <img src="/C.png" alt="100 μL Kit" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6 w-full bg-surface-container-low">
            <h4 className="text-xl font-bold text-primary mb-2">ExTransfection™ 100 μL Kit</h4>
            <p className="text-sm text-on-surface-variant">
              Disposables for ExTransfection™
            </p>
          </div>
        </div>
      </div>

      {/* 5. 구 모델 호환 안내 배너 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 mb-4"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-container to-primary border border-primary-container/30 shadow-xl">
          {/* 배경 장식 */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/[0.04]" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/[0.04]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center p-8 md:p-12">
            {/* 왼쪽: 구 모델 이미지 */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-xs">
                <img 
                  src="/neon_old.png" 
                  alt="Invitrogen Neon Transfection System (구 모델)" 
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* 오른쪽: 텍스트 */}
            <div className="lg:col-span-3 text-center lg:text-left">


              <h3 className="text-2xl md:text-3xl font-headline font-bold text-white leading-snug mb-4">
                구 모델을 가지고 계시나요?
              </h3>

              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                기존 Invitrogen Neon™ Transfection System을 사용 중이시라면,<br className="hidden md:block" />
                나노엔텍 ExTransfection™ 소모품이 <strong className="text-white">호환 가능</strong>합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="text-white font-bold text-sm">소모품 100% 호환</p>
                    <p className="text-white/50 text-xs">Kit · Tip · Buffer 모두 사용 가능</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. 홈페이지 링크 버튼 */}
      <div className="flex justify-center mt-16 mb-8">
        <a 
          href="https://www.nanoentek.com/theme/nanont2_en/shop/02/product01.php?stx=ExTransfection&x=12&y=27" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
        >
          나노엔텍 ExT 홈페이지 가기
        </a>
      </div>
    </div>
  );
}
