import { motion } from "motion/react";

export default function AboutCompany() {
  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold font-headline mb-4">회사 소개</h2>
        <p className="text-on-surface-variant max-w-3xl text-lg leading-relaxed whitespace-pre-line">
          ‘New Gene Science’라는 이름에는 새로운 유전자의 발견을 넘어, 생명과학의 새로운 가능성을 탐구하고 미래를 여는 과학을 실현하겠다는 뜻이 담겨 있습니다.
          {"\n"}뉴진사이언스는 연구의 깊이와 산업의 실용성을 함께 갖춘 기업으로서, 사람과 사회에 도움이 되는 바이오 혁신을 만들어갑니다.
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
  );
}
