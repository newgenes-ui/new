import { motion } from "motion/react";
import { Building2, Handshake, Award, Rocket, FlaskConical, Globe, TrendingUp } from "lucide-react";

/* ───── timeline data ───── */
const milestones = [
  {
    date: "2024. 3.",
    title: "회사 설립",
    desc: "생명과학의 새로운 가능성을 여는 (주)뉴진사이언스 창업",
    icon: Building2,
    accent: "#00658d",      // secondary
  },
  {
    date: "2026",
    title: "나노엔텍\n전국총판대리점",
    desc: "나노엔텍 ExT 장비 전국 총판대리점 계약 체결",
    icon: Handshake,
    accent: "#d97706",      // amber
  },
  {
    date: "2026. 3.",
    title: "광명시\n창업지원사업 선정",
    desc: "광명시 창업지원사업에 선정되어 성장 기반 마련",
    icon: Award,
    accent: "#0284c7",      // sky
  },
];

const stats = [
  { number: "3+", label: "취급 브랜드", sub: "이스텍바이오 · 제닉스바이오 · GFK 외", icon: FlaskConical },
  { number: "50+", label: "공급 제품", sub: "장비 · 시약 · 소모품 풀 라인업", icon: TrendingUp },
  { number: "10+", label: "파트너십 체결", sub: "국내외 협력사 네트워크 구축", icon: Globe },
];

const roadmap = [
  { year: "2026", text: "R&D 역량 강화 · 신규 파트너 확대" },
  { year: "2027", text: "자체 브랜드 제품 출시 · 글로벌 진출" },
];

/* ───── component ───── */
export default function History() {
  return (
    <div className="pt-32 pb-20">

      {/* ===== HERO HEADER ===== */}
      <section className="relative overflow-hidden bg-primary px-6 py-16 md:py-20">
        {/* decorative bg circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.03]" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.03]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-secondary-container text-sm font-label font-bold tracking-[0.25em] uppercase mb-3">
              Our Journey &amp; Vision
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight mb-3">
              회사 연혁
            </h2>
            <p className="text-white/60 max-w-xl text-base md:text-lg">
              (주)뉴진사이언스는 고객과 함께 성장하겠습니다.
            </p>
          </motion.div>
        </div>

        {/* bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-container via-secondary to-secondary-container" />
      </section>

      {/* ===== HORIZONTAL TIMELINE ===== */}
      <section className="bg-surface-container-low py-16 md:py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* horizontal scroll wrapper */}
          <div className="relative">

            {/* ── horizontal line (desktop) ── */}
            <div className="hidden md:block absolute top-[90px] left-0 right-0 h-[3px] bg-gradient-to-r from-primary/10 via-primary to-primary/10 z-0" />

            {/* ── cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.date + m.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.18, type: "spring", stiffness: 80 }}
                    className="flex flex-col items-center"
                  >
                    {/* circle node on the line */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg mb-6 shrink-0 ring-4 ring-surface-container-low"
                      style={{ background: m.accent }}
                    >
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>

                    {/* connector dash (mobile only – decorative) */}
                    <div className="md:hidden w-px h-6 bg-surface-container-highest -mt-2 mb-2" />

                    {/* card */}
                    <div
                      className="w-full rounded-2xl bg-white border-2 p-6 md:p-7 shadow-sm hover:shadow-xl transition-shadow duration-300 group relative"
                      style={{ borderColor: m.accent + "55" }}
                    >
                      {/* top accent stripe */}
                      <div className="absolute top-0 left-4 right-4 h-[3px] rounded-b-full" style={{ background: m.accent }} />

                      <span
                        className="inline-block text-xs font-bold font-label tracking-widest uppercase mb-2 px-3 py-1 rounded-full"
                        style={{ color: m.accent, background: m.accent + "14" }}
                      >
                        {m.date}
                      </span>

                      <h3 className="text-primary text-lg md:text-xl font-bold font-headline leading-snug mb-2 whitespace-pre-line">
                        {m.title}
                      </h3>

                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY NUMBERS ===== */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-5 p-6 rounded-2xl border border-surface-container-highest hover:border-secondary/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/[0.06] flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl md:text-5xl font-headline font-bold text-primary leading-none">
                        {s.number}
                      </span>
                    </div>
                    <h4 className="text-primary font-bold text-base md:text-lg uppercase tracking-wide font-label mb-1">
                      {s.label}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{s.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FUTURE ROADMAP ===== */}
      <section className="bg-primary px-6 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute -top-10 right-0 w-80 h-80 rounded-full bg-white/[0.03]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-secondary-container text-sm font-label font-bold tracking-[0.25em] uppercase mb-2">
              Future Roadmap
            </p>
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-white">
              미래 로드맵
            </h3>
          </motion.div>

          {/* roadmap cards */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 relative">
            {/* horizontal line between cards (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0" />

            {roadmap.map((r, i) => (
              <motion.div
                key={r.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex-1"
              >
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm hover:bg-white/[0.1] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0">
                    <Rocket className="w-6 h-6 text-secondary-container" />
                  </div>
                  <div>
                    <span className="text-secondary-container font-headline font-bold text-lg">{r.year}</span>
                    <p className="text-white/70 text-sm mt-0.5">{r.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
