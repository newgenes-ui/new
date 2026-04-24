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
