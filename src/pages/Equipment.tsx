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
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold font-headline mb-4">기초 장비</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          실험실의 기초가 되는 고성능 장비 시스템을 제공합니다. 
          정밀한 온도 제어와 안정적인 성능으로 연구의 효율을 높여드립니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "순환수조",
            image: "/equipment/circulator.png",
            model: "NGS-IB430, NGS-MB/B/CT 시리즈",
            productName: "순환 수조 / 고온 순환 바스 / 콜드 트랩 바스",
            specs: "용량 8L~30L, 온도 범위 -70°C ~ 최대 250°C"
          },
          {
            title: "건조기",
            image: "/equipment/oven.png",
            model: "NGS-OV 시리즈, NGS-VOV 시리즈",
            productName: "오븐 / 진공오븐",
            specs: "용량 8L~250L, 온도 범위 주위온도 +10°C~250°C"
          },
          {
            title: "항온항습기",
            image: "/equipment/chamber.png",
            model: "NGS-STH 시리즈, NGS-TH 시리즈",
            productName: "슬림형 항온항습기 / 일반 항온항습기",
            specs: "용량 150L~1000L, 온도 -40°C~150°C, 습도 30~98%RH"
          },
          {
            title: "배양기",
            image: "/equipment/incubator.png",
            model: "NGS-IN 시리즈",
            productName: "배양기",
            specs: "용량 50L~250L, 온도 범위 주위온도 +5°C~70°C"
          },
          {
            title: "가열자력교반기",
            image: "/equipment/hotplate_stirrer.png",
            model: "NH1-A3, NH1-D3, NH2-A3, NH2-D3",
            productName: "가열 자력 교반기",
            specs: "용량 5L~25L, 회전수 50~2000rpm, 가열 온도 최대 350°C"
          },
          {
            title: "자력교반기",
            image: "/equipment/magnetic_stirrer.png",
            model: "NH1-A1, NH1-D1, NH2-D1",
            productName: "자력 교반기",
            specs: "용량 5L~25L, 플레이트 150x150~170x170mm, 50~2000rpm"
          }
        ].map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col bg-white rounded-3xl overflow-hidden border border-surface-container-highest shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            <div className="p-6 pb-2">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">{cat.title}</h3>
            </div>
            
            <div className="w-full h-56 flex items-center justify-center p-4 relative overflow-hidden bg-white">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 relative z-10" 
              />
            </div>
            
            <div className="w-full p-6 flex flex-col flex-grow bg-surface-container-low/30 border-t border-surface-container-highest">
              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-xs font-bold text-secondary mb-1">모델명</span>
                  <span className="block text-on-surface font-medium">{cat.model}</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-secondary mb-1">품명</span>
                  <span className="block text-on-surface font-medium">{cat.productName}</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-secondary mb-1">주요 사양</span>
                  <span className="block text-on-surface-variant leading-relaxed break-keep">{cat.specs}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
