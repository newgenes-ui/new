import { motion } from "motion/react";

export default function TwistBio() {
  const products = [
    {
      badge: "Gene Fragments",
      badgeColor: "bg-emerald-50 text-emerald-600",
      price: "₩150/bp~",
      priceColor: "text-emerald-700",
      subtitle: "0.3kb~3.2kb 기준",
      recommended: false,
      details: [
        { label: "형태", value: "dsDNA" },
        { label: "길이", value: "0.3 - 5.0 kb" },
        { label: "납기", value: "2 - 4 영업일", valueColor: "text-emerald-600 font-bold" },
        { label: "수율", value: "100ng - 1ug" },
        { label: "오류율", value: "1:7,500 bp" },
      ]
    },
    {
      badge: "Clonal Genes",
      badgeColor: "bg-emerald-50 text-emerald-600",
      price: "₩200/bp~",
      priceColor: "text-emerald-700",
      subtitle: "0.3kb~1.8kb 기준",
      recommended: true,
      details: [
        { label: "형태", value: "Plasmid DNA" },
        { label: "길이", value: "0.3 - 5.0 kb" },
        { label: "납기", value: "4 - 15 영업일", valueColor: "text-emerald-600 font-bold" },
        { label: "수율", value: "50ng - 2ug" },
        { label: "검증", value: "NGS 100%" },
      ]
    },
    {
      badge: "Oligo Pools",
      badgeColor: "bg-blue-50 text-blue-600",
      price: "문의",
      priceColor: "text-blue-600",
      subtitle: "최소 2개 oligo~",
      recommended: false,
      details: [
        { label: "길이", value: "20 - 300 nt" },
        { label: "납기", value: "3 - 10 영업일", valueColor: "text-blue-600 font-bold" },
        { label: "수율", value: ">0.2 fmol/oligo" },
        { label: "오류율", value: "1:3,000 nt" },
        { label: "용도", value: "CRISPR/sgRNA" },
      ]
    },
    {
      badge: "Variant Libraries",
      badgeColor: "bg-purple-50 text-purple-600",
      price: "문의",
      priceColor: "text-purple-600",
      subtitle: "대규모 라이브러리",
      recommended: false,
      details: [
        { label: "납기", value: "8 - 12 영업일", valueColor: "text-purple-600 font-bold" },
        { label: "길이", value: "301 - 500 bp" },
        { label: "검증", value: "NGS QC" },
        { label: "종류", value: "SSVL/CVL/SOLD" },
        { label: "특징", value: "다양성 정밀제어" },
      ]
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
          글로벌 파트너
        </div>
        <h2 className="text-4xl font-bold font-headline mb-4">TWIST BIO</h2>
        <div className="text-on-surface-variant max-w-3xl text-lg leading-relaxed space-y-4">
          <p>
            Twist Bioscience는 엑소젠의 협력업체로서 유전자 합성 서비스를 제공하고 있습니다. <br className="hidden md:block" />
            Twist Bioscience의 혁신적인 실리콘 기반 DNA 합성 기술로 연구의 속도를 높이세요.
          </p>
          <div className="flex items-start gap-2 mt-4 text-primary font-medium">
            <span className="text-secondary font-bold">→</span>
            <p>
              TWIST의 모든 제품은 미국 본사에서 직접 생산, FedEx로 빠르게 배송 합니다.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
        {products.map((product, idx) => (
          <motion.div
            key={product.badge}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
            className={`relative p-8 md:p-10 rounded-[2rem] bg-white border flex flex-col group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
              product.recommended 
                ? 'border-emerald-400 shadow-xl ring-4 ring-emerald-50 z-10 scale-[1.02] md:scale-105' 
                : 'border-surface-container-highest shadow-sm hover:border-secondary/30'
            }`}
          >
            {/* 배경 미세 그라데이션 장식 */}
            {product.recommended && (
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 to-transparent rounded-[2rem] pointer-events-none" />
            )}
            
            {product.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white text-[12px] font-bold px-6 py-1.5 rounded-full shadow-lg tracking-widest z-20">
                추천
              </div>
            )}
            
            <div className="relative z-10 mb-8">
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-widest shadow-sm ${product.badgeColor}`}>
                {product.badge}
              </span>
              <div className="flex items-end gap-2 mb-2">
                <h3 className={`text-4xl md:text-5xl font-extrabold font-headline tracking-tighter ${product.priceColor}`}>
                  {product.price}
                </h3>
              </div>
              <p className="text-on-surface-variant text-sm font-medium">{product.subtitle}</p>
            </div>
            
            <div className="relative z-10 pt-8 border-t border-surface-container-highest/80 w-full flex-grow flex flex-col justify-end">
              <ul className="space-y-4 w-full">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex justify-between items-center text-[15px] w-full group-hover:bg-surface-container-lowest/50 p-2 -mx-2 rounded-lg transition-colors">
                    <span className="text-on-surface-variant/80 font-medium">{detail.label}</span>
                    <span className={`text-right ${detail.valueColor || 'text-primary font-extrabold'}`}>{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
