import { motion } from "motion/react";

import { Leaf, Handshake, Landmark, Check } from "lucide-react";

const pillars = [
  {
    key: "env",
    icon: <Leaf className="w-8 h-8" />,
    tag: "Environment",
    title: "환경 (E)",
    color: "emerald",
    items: [
      "실험실 소모품 친환경 포장재 전환 추진",
      "화학 시약·폐기물 법적 기준 준수 및 안전 처리",
      "전자 카탈로그·디지털 자료 전환으로 종이 사용 절감",
      "배송 경로 최적화를 통한 탄소 배출 저감",
      "NanoEnTek·Twist Bioscience 등 협력사 친환경 인증 제품 우선 취급",
    ],
  },
  {
    key: "soc",
    icon: <Handshake className="w-8 h-8" />,
    tag: "Social",
    title: "사회 (S)",
    color: "blue",
    items: [
      "연구자 대상 기술 세미나·로드쇼 정기 개최",
      "대학·연구소와의 산학 협력 강화",
      "고객 전담 기술 지원(AS) 체계 운영",
      "임직원 안전·복지 향상 및 역량 개발 지원",
      "중소 연구기관 대상 합리적 가격 공급 확대",
    ],
  },
  {
    key: "gov",
    icon: <Landmark className="w-8 h-8" />,
    tag: "Governance",
    title: "지배구조 (G)",
    color: "amber",
    items: [
      "투명한 계약·거래 원칙 및 내부 준법 경영",
      "개인정보 보호 정책 수립 및 철저한 이행",
      "협력업체 공정 거래 및 상생 협력 실천",
      "연간 ESG 이행 보고서 공개 (자료실 게시)",
      "윤리 경영 강령 제정 및 임직원 교육 실시",
    ],
  },
];

const timeline = [
  {
    year: "2026",
    title: "ESG 기반 수립",
    desc: "ESG 선언문 발표 · 담당자 지정 · ESG 체크리스트 내부 운영 시작",
  },
  {
    year: "2027",
    title: "환경·사회 활동 가시화",
    desc: "전자 카탈로그 전환 완료 · 연구자 세미나 2회 이상 개최 · 친환경 포장 파일럿 도입",
  },
  {
    year: "2028",
    title: "ESG 체계 고도화",
    desc: "첫 번째 ESG 이행 보고서 발간 · 협력사 ESG 가이드라인 배포 · 임직원 윤리 교육 정례화",
  },
  {
    year: "2029",
    title: "지속 가능 경영 정착",
    desc: "탄소 저감 목표 수치 설정 · ESG 외부 인증 추진 · 사회적 가치 창출 성과 정량화",
  },
];



/* ── colour helpers per pillar ─────────────────────────── */
const pillarStyles: Record<string, { card: string; dot: string; tag: string; icon: string }> = {
  emerald: {
    card: "bg-emerald-50/60 border border-emerald-100",
    dot: "bg-emerald-500 text-white",
    tag: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    icon: "text-emerald-500",
  },
  blue: {
    card: "bg-blue-50/60 border border-blue-100",
    dot: "bg-blue-500 text-white",
    tag: "bg-blue-500/10 text-blue-600 border border-blue-500/20",
    icon: "text-blue-500",
  },
  amber: {
    card: "bg-amber-50/60 border border-amber-100",
    dot: "bg-amber-500 text-white",
    tag: "bg-amber-500/10 text-amber-600 border border-amber-500/20",
    icon: "text-amber-500",
  },
};

export default function ESG() {
  return (
    <div className="pt-20 min-h-screen">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2b4e] via-[#1a4a8a] to-[#1a6fc4] text-white py-24 md:py-32 px-8">
        {/* decorative circles */}
        <div className="absolute -right-20 -top-20 w-[500px] h-[500px] rounded-full bg-white/[.04]" />
        <div className="absolute right-20 -bottom-32 w-[300px] h-[300px] rounded-full bg-cyan-400/10" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-medium tracking-[.14em] uppercase text-cyan-300 border border-cyan-400/40 rounded-full px-4 py-1.5 mb-6">
              ESG 경영
            </span>
            <h1 className="text-4xl md:text-[3.2rem] font-black leading-tight mb-5 font-headline tracking-tight">
              과학의 힘으로
              <br />
              <span className="text-cyan-300">더 나은 내일</span>을 만듭니다
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-white/80 max-w-xl">
              뉴진사이언스는 생명과학 분야의 전문 유통 기업으로서
              <br className="hidden md:block" />
              환경(E) · 사회(S) · 지배구조(G) 모든 영역에서
              <br className="hidden md:block" />
              책임 있는 기업 시민의 역할을 다하겠습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DECLARATION ──────────────────────────────── */}
      <section className="bg-surface-container-low py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-[.14em] uppercase text-secondary mb-3">
              ESG 선언문
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-primary">
              뉴진사이언스의 약속
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-3xl mx-auto bg-white border-l-4 border-secondary rounded-r-2xl p-8 md:p-10 text-left shadow-lg shadow-black/[.04]"
          >
            <p className="leading-[1.9] text-on-surface text-[15px] md:text-base">
              저희 <strong className="text-primary">(주)뉴진사이언스</strong>는 국내 생명과학 연구 발전에 기여하는 전문 유통 기업으로서,
              단순한 제품 공급을 넘어 연구자와 사회, 그리고 환경에 대한 책임을 다하고자 합니다.
            </p>
            <p className="leading-[1.9] text-on-surface text-[15px] md:text-base mt-4">
              우리는 협력사와의 투명하고 공정한 거래 원칙을 바탕으로,
              연구 현장의 니즈에 맞는 최고의 솔루션을 제공하겠습니다.
              또한 실험실 소모품의 친환경적 처리와 탄소 저감 활동을 통해
              지속 가능한 연구 환경 조성에 앞장서겠습니다.
            </p>
            <p className="leading-[1.9] text-on-surface text-[15px] md:text-base mt-4">
              나아가 연구자 교육 지원, 세미나 개최, 지역 학술 커뮤니티와의 협력을 통해
              대한민국 생명과학 생태계가 더욱 건강하게 성장할 수 있도록
              성실한 파트너로 함께하겠습니다.
            </p>
            <p className="text-right mt-6 text-sm font-bold text-primary">
              (주)뉴진사이언스 임직원 일동
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ESG PILLARS ──────────────────────────────── */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-[.14em] uppercase text-secondary mb-3">
              3대 핵심 가치
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-3">
              E · S · G 추진 과제
            </h2>
            <p className="text-on-surface-variant">
              뉴진사이언스가 실천하는 구체적인 ESG 활동입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1100px] mx-auto">
            {pillars.map((p, i) => {
              const s = pillarStyles[p.color];
              return (
                <motion.div
                  key={p.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`rounded-2xl p-8 ${s.card}`}
                >
                  <div className={`mb-4 ${s.icon}`}>{p.icon}</div>
                  <span
                    className={`inline-block text-[11px] font-bold tracking-[.1em] uppercase rounded-md px-3 py-1 mb-3 ${s.tag}`}
                  >
                    {p.tag}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-5">
                    {p.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-on-surface">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${s.dot}`}
                        >
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ROADMAP (회사 연혁 스타일) ──────────────────── */}
      <section className="relative overflow-hidden bg-primary px-6 py-16 md:py-20">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.03]" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.03]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-secondary-container text-sm font-label font-bold tracking-[0.25em] uppercase mb-3">
              Implementation Roadmap
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white">
              ESG 단계별 추진 계획
            </h2>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-container via-secondary to-secondary-container" />
      </section>

      <section className="bg-surface-container-low py-16 md:py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* horizontal line (desktop) */}
            <div className="hidden md:block absolute top-[90px] left-0 right-0 h-[3px] bg-gradient-to-r from-primary/10 via-primary to-primary/10 z-0" />

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {timeline.map((t, i) => {
                const accents = ["#00658d", "#d97706", "#0284c7", "#059669"];
                const accent = accents[i % accents.length];
                const icons = ["🌱", "📢", "📊", "🏆"];
                return (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, type: "spring", stiffness: 80 }}
                    className="flex flex-col items-center"
                  >
                    {/* circle node */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg mb-6 shrink-0 ring-4 ring-surface-container-low text-lg"
                      style={{ background: accent }}
                    >
                      <span>{icons[i]}</span>
                    </div>

                    {/* connector (mobile) */}
                    <div className="md:hidden w-px h-6 bg-surface-container-highest -mt-2 mb-2" />

                    {/* card */}
                    <div
                      className="w-full rounded-2xl bg-white border-2 p-6 md:p-7 shadow-sm hover:shadow-xl transition-shadow duration-300 relative"
                      style={{ borderColor: accent + "55" }}
                    >
                      {/* top accent stripe */}
                      <div className="absolute top-0 left-4 right-4 h-[3px] rounded-b-full" style={{ background: accent }} />

                      <span
                        className="inline-block text-xs font-bold font-label tracking-widest uppercase mb-2 px-3 py-1 rounded-full"
                        style={{ color: accent, background: accent + "14" }}
                      >
                        {t.year}
                      </span>

                      <h3 className="text-primary text-lg md:text-xl font-bold font-headline leading-snug mb-2">
                        {t.title}
                      </h3>

                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
