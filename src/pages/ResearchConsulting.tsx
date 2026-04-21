import { motion } from "motion/react";
import { ClipboardCheck, ShieldCheck, TrendingUp, Award } from "lucide-react";

export default function ResearchConsulting() {
  const benefits = [
    {
      title: "조세 지원",
      description: "연구 및 인력개발비 세액공제, 연구소용 부동산 취득세/재산세 감면 등 다양한 세제 혜택을 지원받을 수 있습니다.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "자금 지원",
      description: "정부 정책 자금 신청 시 가점 부여 및 연구원 병역 특례 제도 활용이 가능해집니다.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "연구소 셋팅 지원",
      description: "연구소 설립에 필요한 공간 구성, 장비 배치 및 최적화된 연구 환경 조성을 지원합니다.",
      icon: <Award className="w-6 h-6" />
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
          전문 컨설팅 서비스
        </div>
        <h2 className="text-4xl font-bold font-headline mb-4">기업부설 연구소 설립 컨설팅</h2>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          복잡한 설립 절차부터 사후 관리까지, (주)뉴진사이언스의 전문가 그룹이 기업의 R&D 역량 강화를 위한 최적의 가이드를 제공합니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-surface-container-low border border-surface-container-highest"
          >
            <div className="text-secondary mb-6">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-4 text-primary">{benefit.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="p-10 rounded-3xl bg-primary text-white">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <ClipboardCheck className="w-8 h-8 text-secondary" />
          컨설팅 프로세스
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "사전 진단", desc: "설립 요건 검토 및 가능성 진단" },
            { step: "02", title: "서류 준비", desc: "조직도, 도면, 연구 실적 등 작성" },
            { step: "03", title: "신고 접수", desc: "KOITA 온라인 신고 및 보완" },
            { step: "04", title: "사후 관리", desc: "변경 신고 및 연구 일지 관리 가이드" }
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="text-4xl font-black text-white/10 absolute -top-4 -left-2">{item.step}</div>
              <h4 className="font-bold mb-2 relative z-10">{item.title}</h4>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
