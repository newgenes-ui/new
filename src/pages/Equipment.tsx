import { motion } from "motion/react";

export default function Equipment() {
  const categories = [
    {
      title: "Incubator / Temp. & Humidity Chamber",
      subtitle: "배양기 및 항온항습기",
      items: ["CO2 Incubator", "Multi-Room Incubator", "Constant Temp & Humidity Chamber", "Plant Growth Chamber"]
    },
    {
      title: "Circulating Bath & Cold Trap",
      subtitle: "순환 수조 및 콜드 트랩",
      items: ["Refrigerated Bath", "Heating Bath", "Cold Trap Bath", "Immersion Cooler"]
    },
    {
      title: "Furnace & Oven",
      subtitle: "전기로 및 오븐",
      items: ["Muffle Furnace", "Tube Furnace", "Drying Oven", "Vacuum Oven"]
    },
    {
      title: "Stirrer & Others",
      subtitle: "교반기 및 기타",
      items: ["Magnetic Stirrer", "Overhead Stirrer", "Hotplate", "Shaker"]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold font-headline mb-4">장비소개</h2>
        <p className="text-on-surface-variant max-w-2xl">
          실험실의 기초가 되는 고성능 장비 시스템을 제공합니다. 
          정밀한 온도 제어와 안정적인 성능으로 연구의 효율을 높여드립니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-surface-container-low border border-surface-container-highest hover:border-secondary transition-colors group"
          >
            <h3 className="text-xl font-bold mb-1 text-primary">{cat.title}</h3>
            <p className="text-secondary font-medium text-sm mb-6">{cat.subtitle}</p>
            <ul className="space-y-3">
              {cat.items.map(item => (
                <li key={item} className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
