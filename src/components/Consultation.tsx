import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function Consultation() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIaljZ7IGOLSOwYPqasOJwc2WG4peFr2v4myuDdgR6OqFj133dUqFh3KEoV2EbqiX09KjCveY7yNajTbblqicpymtw1O1CkGSoeGAr0ZNRw2eVjPmRCuxcf6-u4fanvdT5ceUvaQi7opIznjfbMMMr4skGTBuSFKBGhAXiQPfXflU-Etajy0E9OPpb2FQ0FrvEO-npg4yVKpfeuGOdTfdby42icOdp2M7GPuq73jH6IHIz2S7jxW4niAaATKbWOanp0u7tOqEYjO5N" 
          alt="Microscopic texture" 
          className="w-full h-full object-cover grayscale opacity-10"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary/95 backdrop-blur-xl p-12 md:p-20 rounded-3xl border border-white/5 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                전문가와 함께하는 <br />분석 연구의 시작
              </h3>
              <p className="text-on-primary-container text-lg mb-10 font-sans">
                귀하의 연구 과제에 최적화된 하드웨어 및 데이터 분석 솔루션을 제안해 드립니다. 지금 바로 전문 상담팀에게 문의하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary-container text-primary font-bold px-10 py-5 rounded-md hover:scale-95 transition-transform flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5 fill-current" />
                  1:1 실시간 온라인 상담
                </button>
                <button className="bg-transparent text-white border border-white/30 font-bold px-10 py-5 rounded-md hover:bg-white/10 transition-all text-center">
                  견적 요청하기
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Accuracy Rate", value: "99%" },
                    { label: "Global Labs", value: "500+" },
                    { label: "Technical Support", value: "24/7", full: true }
                  ].map((stat) => (
                    <div 
                      key={stat.label}
                      className={`glass-card p-6 rounded-xl ${stat.full ? "col-span-2" : ""}`}
                    >
                      <h5 className="text-secondary-container text-3xl font-headline font-bold mb-2">{stat.value}</h5>
                      <p className="text-white/60 text-[10px] font-label uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
