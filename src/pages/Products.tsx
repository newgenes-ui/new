import { motion } from "motion/react";

export default function Products() {
  const products = [
    {
      name: "Serological Pipettes",
      description: "정밀한 분주를 위한 선택, NewGenes만의 고품질 스트레칭 및 웰딩 공법.",
      features: ["1ml, 2ml, 5ml, 10ml, 25ml, 50ml", "DNase/RNase Free", "Non-pyrogenic"]
    },
    {
      name: "Centrifuge Tubes",
      description: "안정적인 시료 보관과 원심분리를 보장하는 실험실의 필수 파트너.",
      features: ["15ml, 50ml Conical Tubes", "High RCF rating", "Leak-proof cap design"]
    },
    {
      name: "Pipette Tips",
      description: "다양한 규격과 철저한 멸균 처리, 실험의 정확도를 높이는 최적의 팁 라인업.",
      features: ["Filter Tips", "Low Retention Tips", "Universal Fit"]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold font-headline mb-4">제품소개</h2>
        <p className="text-on-surface-variant max-w-2xl">
          실험의 가치를 높이는 뉴진스만의 고품질 소모품 라인업입니다. 
          엄격한 품질 관리를 통해 신뢰할 수 있는 실험 결과를 보장합니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col p-8 rounded-2xl bg-surface-container-low border border-surface-container-highest"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center mb-6">
              <div className="w-6 h-6 rounded-full border-2 border-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">{product.name}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
              {product.description}
            </p>
            <div className="pt-6 border-t border-surface-container-highest">
              <ul className="space-y-2">
                {product.features.map(feature => (
                  <li key={feature} className="text-[11px] font-label text-secondary uppercase tracking-wider">
                    • {feature}
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
