import { motion } from "motion/react";
import { PenTool, Layers, CheckSquare, Settings, CheckCircle2, DraftingCompass, Users } from "lucide-react";

export default function ResearchConsulting() {
  const consultingSteps = [
    {
      step: "01",
      title: "현장 실사 및 요구사항 분석",
      description: "연구실의 실측 및 주요 연구 목적, 장비 규격을 상세히 분석하여 컨설팅 방향을 설정합니다.",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "02",
      title: "CAD 도면 설계",
      description: "전문 설계팀이 2D/3D CAD를 활용하여 효율적인 동선과 장비 배치를 시각화합니다.",
      icon: <DraftingCompass className="w-6 h-6" />
    },
    {
      step: "03",
      title: "피드백 및 레이아웃 수정",
      description: "연구소 측과 지속적인 소통을 통해 설계도를 수정하고 최적의 인테리어 레이아웃을 확정합니다.",
      icon: <CheckSquare className="w-6 h-6" />
    },
    {
      step: "04",
      title: "인테리어 및 장비 셋팅",
      description: "인테리어 시공 주관 및 연구 장비의 올바른 배치를 통해 완벽한 연구 환경을 구축합니다.",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="px-8 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-4 uppercase tracking-widest border border-secondary/20">
            Premium Lab Setup Service
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-headline mb-6 tracking-tight leading-tight">
            기업부설 연구소 <br className="md:hidden" /><span className="text-secondary">설립 컨설팅</span>
          </h2>
          <p className="text-on-surface-variant max-w-4xl mx-auto text-lg leading-relaxed">
            <strong className="text-primary text-xl mr-2">"성공적인 연구의 시작, 완벽하게 통제된 연구 환경에서 출발합니다."</strong><br className="hidden md:block" />
            (주)뉴진사이언스는 초기 인테리어 설계부터 고정밀 장비의 최적화된 동선 배치, 그리고 엄격한 안전 규격 준수까지 연구소 셋팅의 모든 과정을 주관하여 가장 안정적이고 혁신적인 연구 공간을 제공합니다.
          </p>
        </motion.div>

        {/* Hero Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[2.5rem] overflow-hidden relative group h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
            <img 
              src="/images/lab_cad.png" 
              alt="CAD Blueprint" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl">정밀한 CAD 설계</h3>
              </div>
              <p className="text-white/80 text-sm">오차 없는 도면으로 완벽한 공간 계획을 수립합니다.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-[2.5rem] overflow-hidden relative group h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
            <img 
              src="/images/lab_interior.png" 
              alt="Premium Lab Interior" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl">하이엔드 인테리어 주관</h3>
              </div>
              <p className="text-white/80 text-sm">실제 연구원들의 피드백이 반영된 동선 최적화 인테리어.</p>
            </div>
          </motion.div>
        </div>
        
        {/* Core Capabilities */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-headline mb-4">왜 뉴진사이언스인가요?</h3>
            <p className="text-on-surface-variant">수많은 연구소 설립 레퍼런스를 통한 독보적인 노하우를 제공합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "효율적인 장비 배치", desc: "고가의 연구 장비들이 간섭 없이 최상의 성능을 낼 수 있도록 전기, 배기, 상하수도 설비를 고려하여 완벽하게 배치합니다." },
              { title: "안전 최우선 설계", desc: "화학물질 및 생물학적 위험 요소로부터 연구원을 보호할 수 있는 안전 규정 기반의 공간 구획을 설계합니다." },
              { title: "실시간 피드백 반영", desc: "설계 단계부터 시공 완료까지 연구소 측과 지속적으로 피드백을 주고받아 100% 만족하는 결과를 도출합니다." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-surface-container-highest shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <CheckCircle2 className="w-8 h-8 text-secondary mb-6" />
                <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Consulting Process */}
        <div className="p-12 md:p-16 rounded-[3rem] bg-primary text-white relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-12 text-center">연구소 셋팅 프로세스</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {consultingSteps.map((item, idx) => (
                <motion.div 
                  key={item.step} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="relative group"
                >
                  {/* Connector Line */}
                  {idx < consultingSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-white/20"></div>
                  )}
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-secondary mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-300 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary shadow-lg">
                    {item.icon}
                  </div>
                  
                  <div className="text-secondary font-black text-lg mb-1">{item.step}</div>
                  <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
