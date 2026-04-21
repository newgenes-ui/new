import { motion } from "motion/react";
import { ArrowUpRight, Beaker, Microscope, Activity } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-label text-xs font-bold text-secondary tracking-[0.2em] mb-4 uppercase">Innovations</h2>
            <h3 className="font-headline text-4xl font-bold text-primary">Featured Technologies</h3>
          </div>
          <a href="#" className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors font-label text-sm">
            VIEW ALL PRODUCTS <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Large Feature */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-xl transition-all"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-tertiary-container text-white font-label text-[10px] font-bold tracking-widest rounded-full mb-6">NEXT-GEN SEQUENCER</span>
              <h4 className="font-headline text-3xl font-bold text-primary mb-4">NJ-Alpha 9000</h4>
              <p className="text-on-surface-variant max-w-xs font-sans">고처리량 유전체 해독 기술을 탑재한 뉴진사이언스의 플래그십 분석 시스템입니다.</p>
            </div>
            <div className="relative mt-8 overflow-hidden rounded-lg">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTxNqL5yLfZFO-qDndWPb9RQBT334QVWOlHsi9YlXd7PBfhkJ5vYJGFw6QIP4ThLMEpeNkg7H4bUYivl5DB1BZovltbEdK0VvOs6KZBxSqV4dMvCvxsNS2zAqv9P3Nq_ksFnsbOORAhoNhBlZajUOEas-qXimWaYyl0JXqAcRPxPO89sRUIFVMf4pKwV6SxetBfDzCDZjZUJEXUGwoskrtsi5J4APGlrTj20X5WOnNSShgGpmsQaEy-bNvblPWMLgEnURUP_nGUnwe" 
                alt="Sequencing Machine" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Medium Feature */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 bg-primary text-white p-8 rounded-xl flex items-center gap-8 relative overflow-hidden group cursor-pointer"
          >
            <div className="relative z-10 w-1/2">
              <h4 className="font-headline text-2xl font-bold mb-2">Automated PCR System</h4>
              <p className="text-on-primary-container text-sm font-sans">완전 자동화된 워크플로우로 분석 오차를 최소화합니다.</p>
            </div>
            <div className="w-1/2 relative z-10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB42haHZQf63D2m73fjiVXi4nIDAFl-PocJGoFTHjthbPOyBNRVjKovrJ2z8pQfnOXU89OdIzD56YHupoUOShHolW40TVRUVhalQJNNMs3dL8cKhsGqr61k_XQEzUf-9LNUrRCwc1Skjf6lr4Sb4SrpxvrE0flbH_EYrgDFXGQduKr8dgZXaa_HDxFdD__8lb5K1gcEyZ9ElJofgtq8Cf2ASyoyQtaViu7VzMdZM7LRzmeGh1RvXqQRvJJ4510IlsSTMxBhrIwMVPmQ" 
                alt="PCR Tube" 
                className="w-full h-32 object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Small Features */}
          <motion.div 
            whileHover={{ backgroundColor: "var(--color-secondary-container)", color: "var(--color-primary)" }}
            className="bg-surface-container-highest p-6 rounded-xl flex flex-col justify-between group transition-all cursor-pointer"
          >
            <Beaker className="w-8 h-8 text-primary group-hover:text-primary" />
            <div>
              <h4 className="font-headline text-lg font-bold text-primary">Micro-Chips</h4>
              <p className="text-on-surface-variant text-xs font-sans group-hover:text-primary/80">정밀 진단용 바이오 칩</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ backgroundColor: "var(--color-secondary-container)", color: "var(--color-primary)" }}
            className="bg-surface-container-highest p-6 rounded-xl flex flex-col justify-between group transition-all cursor-pointer"
          >
            <Microscope className="w-8 h-8 text-primary group-hover:text-primary" />
            <div>
              <h4 className="font-headline text-lg font-bold text-primary">Imaging Solution</h4>
              <p className="text-on-surface-variant text-xs font-sans group-hover:text-primary/80">AI 기반 고해상도 이미지</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
