import { motion } from "motion/react";

export default function GenicsBio() {
  const products = [
    {
      name: "DNA/RNA Extraction Kit",
      description: "고순도의 핵산 추출을 위한 혁신적인 컬럼 및 비드 방식 키트입니다.",
      features: ["High Yield", "Rapid Protocol", "Compatible with various samples"]
    },
    {
      name: "PCR Reagents",
      description: "정확하고 민감한 증폭을 보장하는 마스터 믹스 및 효소 라인업입니다.",
      features: ["Hot-start Technology", "High Sensitivity", "Stable Performance"]
    }
  ];

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
        <h2 className="text-4xl font-bold font-headline mb-4">제닉스바이오 제품</h2>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          분자 생물학 연구의 효율을 극대화하는 제닉스바이오의 시약 및 키트 솔루션입니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-surface-container-low border border-surface-container-highest"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">{product.name}</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              {product.description}
            </p>
            <div className="pt-6 border-t border-surface-container-highest">
              <ul className="grid grid-cols-1 gap-3">
                {product.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-secondary font-medium">
                    <div className="w-1 h-1 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
