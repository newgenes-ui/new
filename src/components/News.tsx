import { motion } from "motion/react";

const newsItems = [
  {
    category: "Announcement",
    title: "2024년형 차세대 유전체 해독기 'NJ-Alpha' 출시 예정",
    description: "뉴진사이언스의 독자적인 시퀀싱 기술이 집약된 새로운 장비가 5월 글로벌 출시를 앞두고 있습니다.",
    date: "2024.04.15"
  },
  {
    category: "Research",
    title: "국제 바이오 심포지엄 기술 혁신상 수상",
    description: "당사의 자동화 DNA 분석 알고리즘이 정확도와 속도 면에서 최우수 기술로 선정되었습니다.",
    date: "2024.03.28"
  },
  {
    category: "Notice",
    title: "연구 지원용 오픈 랩(Open-Lab) 서비스 확대",
    description: "스타트업 및 대학 연구소를 위한 공용 분석 인프라 지원 프로그램을 새롭게 개편합니다.",
    date: "2024.03.10"
  }
];

export default function News() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-surface-container-highest flex-grow" />
          <h3 className="font-headline text-2xl font-bold text-primary px-4">Latest News</h3>
          <div className="h-px bg-surface-container-highest flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-surface-container-low rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <p className="font-label text-[10px] text-secondary font-bold mb-3 uppercase tracking-widest">{item.category}</p>
              <h4 className="font-headline text-xl font-bold text-primary mb-4 leading-snug group-hover:text-secondary transition-colors">
                {item.title}
              </h4>
              <p className="text-on-surface-variant text-sm font-sans mb-6 line-clamp-2">
                {item.description}
              </p>
              <span className="text-on-surface-variant/40 text-[10px] font-label">{item.date}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
