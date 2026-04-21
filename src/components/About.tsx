import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlvjEHpmEzSWVWlndSlfhgGzSXMwXH8lcrlUqFMTUYnFfzeXkKRskeW01ckyE52ilAw5Hg4zbMr8XqDPT_9pzxMpjfzIC5Q12AyXy08Lg8DBdAVJyHHnw2L0E7DF9N33_165D2pm90yye8Y_Q2aexBHT9uyaHcvZ6snkRz0HCNessmTZHjkSAgKFKrX8TMsM7WhHzzllwpzhvomVNQNbta7LZ7YVX8UTuCWjVz1IpQCJoBY_kE-pf5FU4lo65hNzYDSdeFqiX_Dczg" 
                alt="Laboratory" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <h2 className="font-label text-xs font-bold text-secondary tracking-[0.2em] mb-4 uppercase">About Vision</h2>
            <h3 className="font-headline text-4xl font-bold text-primary leading-tight mb-6">
              데이터에서 생명의 가치를 <br />발견하는 임상 큐레이터
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-8 font-sans">
              뉴진사이언스는 단순히 장비를 공급하는 것을 넘어, 과학적 데이터가 지닌 무한한 가능성을 해석합니다. 
              우리의 미션은 가장 신뢰할 수 있는 분석 파트너로서 바이오 산업의 표준을 제시하는 것입니다.
            </p>
            <ul className="space-y-4">
              {[
                "세계 최고 수준의 유전체 분석 시스템",
                "임상 데이터 기반의 정밀 진단 솔루션",
                "24/7 전문 기술 지원 및 유지보수"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary font-medium">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
