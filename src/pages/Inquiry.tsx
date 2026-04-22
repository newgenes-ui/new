import React, { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (data.message.includes("SMTP 설정")) {
          alert("테스트 완료! (현재 SMTP 이메일 설정이 안 되어 있어 실제 메일 전송은 생략되고 서버 로그에만 기록되었습니다. 관리자에게 문의하세요.)");
        } else {
          alert("문의가 성공적으로 전송되었습니다! 담당자가 확인 후 연락드리겠습니다.");
        }
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert(data.message || "네이버 메일 로그인에 실패했습니다. 환경설정(IMAP/SMTP)을 확인하거나 앱 비밀번호가 정확한지 다시 한 번 확인해 주세요.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("서버 연결에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold font-headline mb-8">견적문의</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            제품 사양, 가격, 납기 등 궁금하신 사항을 남겨주시면 <br />
            전문 담당자가 신속하게 답변해 드리겠습니다.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">빠른 대응</h4>
                <p className="text-sm text-on-surface-variant">영업일 기준 24시간 이내 답변을 원칙으로 합니다.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-10 rounded-3xl bg-surface-container-low border border-surface-container-highest"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary font-label uppercase">성함 / 업체명</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-secondary transition-all outline-none text-sm" 
                  placeholder="보다 빠른 상담 요청시 기재" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary font-label uppercase">이메일</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-secondary transition-all outline-none text-sm" 
                placeholder="example@email.com" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary font-label uppercase">문의내용</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-secondary transition-all outline-none text-sm min-h-[150px]" 
                placeholder="문의하실 제품명과 수량 등을 적어주세요."
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${isLoading ? "bg-primary/50 cursor-not-allowed" : "bg-primary hover:bg-primary/90"}`}
            >
              {isLoading ? "메일 전송 중..." : "문의하기"}
              {!isLoading && <Send className="w-4 h-4" />}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
