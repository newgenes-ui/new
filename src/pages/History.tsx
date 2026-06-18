import { motion } from "motion/react";

const historyData = [
  {
    year: "2024",
    events: [
      { date: "2024. 3.", description: "창업" },
    ],
  },
  {
    year: "2026",
    events: [
      { date: "2026", description: "나노엔텍 전국총판대리점" },
      { date: "2026. 3.", description: "광명시 창업지원사업 선정" },
    ],
  },
];

export default function History() {
  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold font-headline mb-4">회사 연혁</h2>
        <p className="text-on-surface-variant max-w-2xl">
          (주)뉴진사이언스의 주요 발자취를 소개합니다.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[39px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary via-primary to-secondary/30" />

        <div className="space-y-12">
          {historyData.map((group, groupIdx) => (
            <div key={group.year}>
              {/* Year badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: groupIdx * 0.2 }}
                className="relative flex md:justify-center mb-8"
              >
                <div className="ml-[16px] md:ml-0 z-10 bg-primary text-white px-6 py-2 rounded-full text-lg font-bold font-headline shadow-lg">
                  {group.year}
                </div>
              </motion.div>

              {/* Events */}
              <div className="space-y-6">
                {group.events.map((event, eventIdx) => {
                  const isLeft = (groupIdx * 10 + eventIdx) % 2 === 0;
                  return (
                    <motion.div
                      key={event.date + event.description}
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: groupIdx * 0.2 + eventIdx * 0.15 + 0.1 }}
                      className={`relative flex items-center ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      } flex-row`}
                    >
                      {/* Content card - desktop */}
                      <div className={`hidden md:block w-1/2 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}>
                        <div className="inline-block p-6 rounded-2xl bg-surface-container-low border border-surface-container-highest shadow-sm hover:shadow-md transition-shadow">
                          <span className="text-secondary font-bold text-sm tracking-wide block mb-1">
                            {event.date}
                          </span>
                          <p className="text-primary font-semibold text-base">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Dot on timeline */}
                      <div className="absolute left-[32px] md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 rounded-full bg-white border-[3px] border-secondary shadow" />

                      {/* Spacer for desktop other side */}
                      <div className="hidden md:block w-1/2" />

                      {/* Content card - mobile */}
                      <div className="md:hidden ml-16 p-5 rounded-2xl bg-surface-container-low border border-surface-container-highest shadow-sm">
                        <span className="text-secondary font-bold text-sm tracking-wide block mb-1">
                          {event.date}
                        </span>
                        <p className="text-primary font-semibold text-base">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
