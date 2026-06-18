import { motion } from "motion/react";

export default function AboutCompany() {
  return (
    <div className="pt-20">
      {/* ===== 곤색 헤더 ===== */}
      <section className="relative overflow-hidden bg-primary px-6 py-16 md:py-20">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.03]" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.03]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-secondary-container text-sm font-label font-bold tracking-[0.25em] uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight mb-3">
              회사 소개
            </h2>
            <p className="text-white/60 max-w-xl text-base md:text-lg">
              'New Gene Science'라는 이름에는 새로운 유전자의 발견을 넘어, 생명과학의 새로운 가능성을 실현하겠다는 뜻이 담겨 있습니다.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-container via-secondary to-secondary-container" />
      </section>

      {/* ===== 본문 ===== */}
      <div className="pb-20 px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="my-12"
        >
          <p className="text-on-surface-variant max-w-3xl text-lg leading-relaxed whitespace-pre-line">
            뉴진사이언스는 연구의 깊이와 산업의 실용성을 함께 갖춘 기업으로서, 사람과 사회에 도움이 되는 바이오 혁신을 만들어갑니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-surface-container-low border border-surface-container-highest">
            <h3 className="text-xl font-bold mb-4 text-primary">미션</h3>
            <p className="text-on-surface-variant text-sm">첨단 바이오 기술을 통해 인류의 건강한 삶에 기여합니다.</p>
          </div>
          <div className="p-8 rounded-2xl bg-surface-container-low border border-surface-container-highest">
            <h3 className="text-xl font-bold mb-4 text-primary">비전</h3>
            <p className="text-on-surface-variant text-sm">글로벌 바이오 솔루션 리더로 도약합니다.</p>
          </div>
          <div className="p-8 rounded-2xl bg-surface-container-low border border-surface-container-highest">
            <h3 className="text-xl font-bold mb-4 text-primary">핵심 가치</h3>
            <p className="text-on-surface-variant text-sm">혁신, 신뢰, 고객 중심의 가치를 실천합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
