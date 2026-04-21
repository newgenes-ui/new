import { motion } from "motion/react";

export default function EstekBio() {
  const products = [
    {
      name: "CO2 Incubator",
      description: "정밀한 CO2 농도 및 온도 제어를 통해 최적의 세포 배양 환경을 제공합니다.",
      features: ["Dual Beam IR Sensor", "HEPA Filtered Airflow", "High Temp Decontamination"]
    },
    {
      name: "Multi-Room Incubator",
      description: "독립된 여러 개의 챔버를 통해 다양한 배양 조건을 동시에 실험할 수 있습니다.",
      features: ["Independent Control", "Touch Screen Interface", "Compact Design"]
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
        <h2 className="text-4xl font-bold font-headline mb-4">이스텍바이오 제품</h2>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          신뢰할 수 있는 실험 환경을 위한 이스텍바이오의 정밀 배양 솔루션입니다.
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
