import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/nanoentek.png",
    tag: "나노엔텍 ExT 전국 총판 대리점",
    title: "ExTransfection",
    subtitle: "(Pipette style Electroporation System)",
    description: "독자적인 마이크로포레이션 기술과 전극 팁을 결합하여, 세포에 가해지는 스트레스류를 최소화하여 높은 형질 감염 효율과 생존율을 동시에 제공하는 탁상형 전기 천공 시스템"
  },
  {
    image: "/slide2.png",
    tag: "New Genes 제품",
    title: "실험의 가치를 높이는\nNew Genes 라인업",
    description: "• Serological Pipettes: 정밀한 분주를 위한 선택, NewGenes만의 고품질 스트레칭 및 웰딩 공법.\n• Centrifuge Tubes: 안정적인 시료 보관과 원심분리를 보장하는 실험실의 필수 파트너.\n• Pipette Tips: 다양한 규격과 철저한 멸균 처리, 실험의 정확도를 높이는 최적의 팁 라인업."
  },
  {
    image: "/slide3_new.png",
    tag: "뉴진스 제품",
    title: "최적의 연구 환경\n기초장비 시스템",
    description: "• Incubator / Temp. & Humidity Chamber (배양기 및 항온항습기)\n• Circulating Bath & Cold Trap (순환 수조 및 콜드 트랩)\n• Furnace & Oven (전기로 및 오븐)\n• Stirrer (교반기)"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-primary">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* 오버레이 밝기를 60%에서 30%로 낮춤 */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-3 py-1 bg-secondary-container/20 border border-secondary-container/30 rounded-full mb-6">
            <span className="text-secondary-container font-label text-[10px] font-bold tracking-widest uppercase">
              {slides[current].tag}
            </span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-6 md:mb-8 text-white whitespace-pre-line">
            {slides[current].title.split('\n').map((line, i) => (
              <span key={i}>
                {line.includes('뉴진사이언스') || line.includes('혁신적인 솔루션') || line.includes('전문 분석 파트너') || line === 'ExTransfection' || line.includes('TWIST BIO') || line.includes('New Genes 라인업') || line.includes('뉴진스 라인업') || line.includes('기초장비 시스템') ? (
                  <span className="text-secondary-container text-sky-400">{line}</span>
                ) : line}
                {i === 0 && slides[current].title.includes('\n') && <br />}
              </span>
            ))}
            {slides[current].subtitle && (
              <div className="text-[20%] mt-2 opacity-90 font-sans tracking-normal">
                {slides[current].subtitle}
              </div>
            )}
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-xl text-white/80 leading-relaxed mb-8 md:mb-10 max-w-2xl whitespace-pre-line">
            {slides[current].description}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
