import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function NanoEntek() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const demoFormRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    demoFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          type: "demo",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (data.message.includes("SMTP 설정")) {
          alert("데모 신청 완료! (현재 SMTP 이메일 설정이 안 되어 있어 실제 메일 전송은 생략되고 서버 로그에만 기록되었습니다. 관리자에게 문의하세요.)");
        } else {
          alert("데모 신청이 성공적으로 전송되었습니다! 담당자가 확인 후 연락드리겠습니다.");
        }
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert(data.message || "이메일 발송에 실패했습니다. 관리자에게 문의해 주세요.");
      }
    } catch (error) {
      console.error("Error submitting demo form:", error);
      alert("서버 연결에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded mb-3 uppercase tracking-wider">
          전국 총판 대리점
        </div>
        <h2 className="text-4xl font-bold font-headline mb-4">나노엔텍 ExT</h2>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          ExTransfection (Pipette style Electroporation System)
        </p>
      </motion.div>

      {/* 1. 상단 섹션: 왼쪽 A.png, 오른쪽 제품 내용 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex items-center justify-center p-4 bg-surface-container-highest rounded-3xl border border-surface-container-highest shadow-inner">
          <img 
            src="/A.png" 
            alt="ExTransfection System" 
            className="w-full max-w-xl h-auto object-contain transform scale-110 hover:scale-125 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-full mb-4 uppercase tracking-widest w-max">
            Next-Gen Transfection
          </div>
          <img 
            src="/aa.png" 
            alt="ExTransfection" 
            className="w-auto h-10 md:h-12 mb-6 object-contain object-left" 
          />

          <div className="mb-8">
            <button 
              onClick={scrollToDemo}
              className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl cursor-pointer text-2xl transform hover:scale-105"
            >
              <span>데모 신청하기</span>
              <Send className="w-7 h-7" />
            </button>
          </div>

          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 break-keep">
            ExTransfection™ Electroporation System은 단일 챔버 팁을 사용하여 정밀한 전기 펄스를 전달함으로써 높은 세포 생존율과 효율적인 형질감염을 가능하게 하는 전기 천공 장비입니다.
          </p>
          
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                <span className="text-secondary text-xl">⚡</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant">Efficiency</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                <span className="text-secondary text-xl">🛡️</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant">Viability</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                <span className="text-secondary text-xl">🔄</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant">Reproducibility</span>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 섹션: 왼쪽 B.png 카드, 오른쪽 C.png 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        {/* 2. 하단 왼쪽 B.png */}
        <div className="bg-surface-container-low border border-surface-container-highest rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group overflow-hidden">
          <div className="w-full h-80 bg-white flex items-center justify-center overflow-hidden">
            <img src="/B.png" alt="10 μL Kit" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6 w-full bg-surface-container-low">
            <h4 className="text-xl font-bold text-primary mb-2">ExTransfection™ 10 μL Kit</h4>
            <p className="text-sm text-on-surface-variant">
              Disposables for ExTransfection™
            </p>
          </div>
        </div>

        {/* 3. 하단 오른쪽 C.png */}
        <div className="bg-surface-container-low border border-surface-container-highest rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group overflow-hidden">
          <div className="w-full h-80 bg-white flex items-center justify-center overflow-hidden">
            <img src="/C.png" alt="100 μL Kit" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6 w-full bg-surface-container-low">
            <h4 className="text-xl font-bold text-primary mb-2">ExTransfection™ 100 μL Kit</h4>
            <p className="text-sm text-on-surface-variant">
              Disposables for ExTransfection™
            </p>
          </div>
        </div>
      </div>

      {/* 5. 구 모델 호환 안내 배너 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 mb-4"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-container to-primary border border-primary-container/30 shadow-xl">
          {/* 배경 장식 */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/[0.04]" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/[0.04]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center p-8 md:p-12">
            {/* 왼쪽: 구 모델 이미지 */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-xs">
                <img 
                  src="/neon_old.png" 
                  alt="Invitrogen Neon Transfection System (구 모델)" 
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* 오른쪽: 텍스트 */}
            <div className="lg:col-span-3 text-center lg:text-left">


              <h3 className="text-2xl md:text-3xl font-headline font-bold text-white leading-snug mb-4">
                구 모델을 가지고 계시나요?
              </h3>

              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                기존 Invitrogen Neon™ Transfection System을 사용 중이시라면,<br />
                나노엔텍 ExTransfection™ 소모품이 <strong className="text-white">호환 가능</strong>합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="text-white font-bold text-sm">소모품 100% 호환</p>
                    <p className="text-white/50 text-xs">Kit · Tip · Buffer 모두 사용 가능</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 6. 데모 신청 폼 섹션 */}
      <motion.div
        ref={demoFormRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-8 md:p-10 rounded-3xl bg-surface-container-low border border-surface-container-highest max-w-4xl mx-auto shadow-sm"
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-primary mb-3">ExT 데모 신청</h3>
          <p className="text-on-surface-variant text-sm md:text-base">
            나노엔텍 ExTransfection 시스템을 직접 체험해보실 수 있는 데모 기회를 제공합니다.<br />
            아래 양식을 채워 신청해주시면 신속히 연락해 드리겠습니다.
          </p>
        </div>

        <form onSubmit={handleDemoSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary font-label uppercase">성함 / 업체(기관)명</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-secondary transition-all outline-none text-sm" 
                placeholder="홍길동 / (주)뉴진사이언스" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary font-label uppercase">연락처 (선택)</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-3 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-secondary transition-all outline-none text-sm" 
                placeholder="예: 010-1234-5678" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary font-label uppercase">이메일</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-secondary transition-all outline-none text-sm" 
              placeholder="example@email.com" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary font-label uppercase">데모 신청 내용 및 요청 사항</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-secondary transition-all outline-none text-sm min-h-[120px]" 
              placeholder="희망하시는 데모 일정이나 연구실 현황 및 실험 목적 등을 적어주세요."
            ></textarea>
          </div>
          <button 
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${isLoading ? "bg-primary/50 cursor-not-allowed" : "bg-primary hover:bg-primary/90 cursor-pointer shadow-md hover:shadow-lg"}`}
          >
            {isLoading ? "전송 중..." : "데모 신청 완료하기"}
            {!isLoading && <Send className="w-4 h-4" />}
          </button>
        </form>
      </motion.div>

      {/* 4. 홈페이지 링크 버튼 */}
      <div className="flex justify-center mt-16 mb-8">
        <a 
          href="https://www.nanoentek.com/theme/nanont2_en/shop/02/product01.php?stx=ExTransfection&x=12&y=27" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
        >
          나노엔텍 ExT 홈페이지 가기
        </a>
      </div>
    </div>
  );
}
