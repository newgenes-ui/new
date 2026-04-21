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

      <div className="bg-surface-container-low border border-surface-container-highest rounded-3xl p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold mb-6 text-primary">제품 특징</h3>
            <ul className="space-y-4">
              {[
                "독자적인 마이크로포레이션 기술 적용",
                "세포 스트레스 최소화",
                "높은 형질 감염 효율 보장",
                "탁월한 세포 생존율",
                "컴팩트한 탁상형 디자인"
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-on-surface-variant">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 flex items-center justify-center p-4 bg-surface-container-highest rounded-2xl border border-surface-container-highest">
            <img 
              src="/20260315_185921.png" 
              alt="나노엔텍 ExT" 
              className="w-full h-auto object-contain transform scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
