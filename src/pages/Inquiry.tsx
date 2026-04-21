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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/newgenes@newgenesci.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "이름_업체명": formData.name,
          "연락처": formData.phone,
          "답신_이메일": formData.email,
          "문의내용": formData.message,
          "_subject": `[웹사이트 견적문의] ${formData.name} 님의 문의가 도착했습니다.`,
          "_captcha": "false",
          "_template": "table"
        }),
      });

      if (response.ok) {
        alert("문의가 성공적으로 전송되었습니다!\n\n(※ 관리자 안내: 현재 입력하신 내용이 대표 메일로 전송되었습니다. 최초 1회에 한해 대표 이메일 수신함에서 [FormSubmit]에서 온 활성화 메일을 클릭해 주셔야 정상적으로 메일을 받아보실 수 있습니다.)");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("전송에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
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
              className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              문의하기
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
