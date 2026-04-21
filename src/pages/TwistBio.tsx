import { motion } from "motion/react";

export default function TwistBio() {
  const services = [
    {
      name: "Custom DNA Synthesis",
      description: "실리콘 기반의 고밀도 DNA 합성 기술을 통해 정확하고 빠른 dsDNA 합성을 제공합니다.",
      features: ["Clonal Genes", "Gene Fragments", "Oligo Pools"]
    },
    {
      name: "Next-Generation Sequencing (NGS)",
      description: "Target Enrichment 솔루션을 통해 효율적이고 정확한 시퀀싱 분석을 지원합니다.",
      features: ["Exome Panels", "Custom Panels", "Library Preparation"]
    },
    {
      name: "Antibody Libraries",
      description: "신약 개발을 위한 정밀하게 설계된 항체 라이브러리 솔루션을 제공합니다.",
      features: ["Library of Libraries", "Custom Library Design"]
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
          글로벌 파트너
        </div>
        <h2 className="text-4xl font-bold font-headline mb-4">TWIST BIO</h2>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Twist Bioscience의 혁신적인 실리콘 기반 DNA 합성 기술로 연구의 속도를 높이세요.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-surface-container-low border border-surface-container-highest flex flex-col"
          >
            <h3 className="text-xl font-bold mb-4 text-primary">{service.name}</h3>
            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed flex-grow">
              {service.description}
            </p>
            <div className="pt-6 border-t border-surface-container-highest">
              <ul className="space-y-2">
                {service.features.map(feature => (
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
