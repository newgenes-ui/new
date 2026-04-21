import { motion } from "motion/react";

export default function Partners() {
  const partners = [
    {
      name: "Twist Bioscience",
      product: "DNA Synthesis",
      description: "실리콘 기반 dsDNA 합성 서비스. 높은 정확도와 빠른 턴어라운드 타임을 제공합니다.",
      tag: "협력 제품"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold font-headline mb-4">협력사 제품</h2>
        <p className="text-on-surface-variant max-w-2xl">
          글로벌 선도 기업들과의 파트너십을 통해 혁신적인 바이오 테크놀로지 솔루션을 국내에 공급합니다.
        </p>
      </motion.div>

      <div className="space-y-8">
        {partners.map((partner, idx) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-surface-container-low border border-surface-container-highest items-center"
          >
            <div className="w-full md:w-48 h-32 bg-surface-container-highest rounded-2xl flex items-center justify-center text-primary font-bold">
              {partner.name}
            </div>
            <div className="flex-grow">
              <div className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded mb-3">
                {partner.tag}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary">{partner.product}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {partner.description}
              </p>
            </div>
            <button className="px-6 py-3 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-colors whitespace-nowrap">
              상세 정보 요청
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
