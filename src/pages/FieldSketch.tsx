import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  MapPin, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Camera
} from "lucide-react";

interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  alt: string;
}

interface EventSketch {
  id: string;
  title: string;
  date: string;
  location: string;
  badge: string;
  badgeColor: string;
  images: GalleryPhoto[];
}

const eventList: EventSketch[] = [
  {
    id: "dcc-2026",
    title: "2026년도 분생학회 (대전 컨벤션센터)",
    date: "2026.10.06",
    location: "대전 컨벤션센터 (DCC)",
    badge: "최신 행사",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    images: [
      {
        id: 1,
        src: "/sketch/dcc_booth_equipment.jpg",
        title: "나노엔텍 핵심 바이오 장비 전시 풀 라인업",
        alt: "대전 DCC 전시 부스 장비 전경"
      },
      {
        id: 2,
        src: "/sketch/dcc_booth_consulting2.jpg",
        title: "부스 방문 연구원 장비 시연 및 상세 상담",
        alt: "대전 DCC 부스 상담 현장"
      },
      {
        id: 3,
        src: "/sketch/dcc_booth_demo.jpg",
        title: "모바일·태블릿 실시간 시연 및 이벤트 참여",
        alt: "대전 DCC 부스 이벤트 참여"
      },
      {
        id: 4,
        src: "/sketch/dcc_booth_consulting1.jpg",
        title: "나노엔텍 부스 전경 및 참관객 상담 현장",
        alt: "대전 DCC 부스 방문객 상담"
      }
    ]
  },
  {
    id: "bexco-2026",
    title: "2026년도 생화학회 (부산 Bexco)",
    date: "2026.05.27",
    location: "부산 벡스코 (Bexco)",
    badge: "학회 행사",
    badgeColor: "bg-[#143B71]/10 text-[#143B71] border border-[#143B71]/20",
    images: [
      {
        id: 1,
        src: "/sketch/bexco_booth_team_user.jpg",
        title: "뉴진사이언스 & 나노엔텍 전시 부스 단체 기념사진",
        alt: "생화학회 전시 부스 단체사진"
      },
      {
        id: 2,
        src: "/sketch/bexco_booth_overview.jpg",
        title: "전시홀 부스 전경 및 참관객 방문 현장",
        alt: "전시홀 부스 전경"
      },
      {
        id: 3,
        src: "/sketch/bexco_booth_consulting_cleaned.jpg",
        title: "부스 방문객 상담 및 현장 참여 모습",
        alt: "부스 현장 상담 및 이벤트 모습"
      },
      {
        id: 4,
        src: "/sketch/bexco_booth_equipment.jpg",
        title: "나노엔텍 핵심 바이오 장비 전시 및 데모 시연 데스크",
        alt: "나노엔텍 핵심 장비 전시 테이블"
      }
    ]
  }
];

export default function FieldSketch() {
  const [lightboxState, setLightboxState] = useState<{
    images: GalleryPhoto[];
    index: number;
    eventTitle: string;
  } | null>(null);

  const openLightbox = (images: GalleryPhoto[], index: number, eventTitle: string) => {
    setLightboxState({ images, index, eventTitle });
  };

  const closeLightbox = () => {
    setLightboxState(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxState) return;
    const len = lightboxState.images.length;
    setLightboxState({
      ...lightboxState,
      index: (lightboxState.index - 1 + len) % len
    });
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxState) return;
    const len = lightboxState.images.length;
    setLightboxState({
      ...lightboxState,
      index: (lightboxState.index + 1) % len
    });
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto min-h-screen">
      {/* 1. 상단 타이틀 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-14 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5" />
          Field Sketch
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-3 text-primary">현장스케치</h2>
        <p className="text-on-surface-variant text-sm sm:text-base max-w-xl mx-auto">
          (주)뉴진사이언스의 다양한 전시회 및 학술대회 현장 소식을 전해드립니다.
        </p>
      </motion.div>

      {/* 2. 행사 목록 및 갤러리 */}
      <div className="space-y-16 max-w-5xl mx-auto">
        {eventList.map((ev, eventIdx) => (
          <motion.section
            key={ev.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: eventIdx * 0.1 }}
            className="bg-white rounded-3xl border border-surface-container-highest p-6 sm:p-8 shadow-sm overflow-hidden"
          >
            {/* 행사 헤더 정보 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-surface-container-highest">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${ev.badgeColor}`}>
                    {ev.badge}
                  </span>
                  <span className="flex items-center gap-1 text-xs sm:text-sm text-on-surface-variant font-medium">
                    <Calendar className="w-4 h-4 text-secondary" />
                    {ev.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs sm:text-sm text-on-surface-variant font-medium">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {ev.location}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-headline text-primary">
                  {ev.title}
                </h3>
              </div>
              <div className="text-xs text-on-surface-variant/60 font-medium shrink-0">
                총 {ev.images.length}장의 사진
              </div>
            </div>

            {/* 사진 갤러리 4장 (2x2 그리드) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {ev.images.map((img, imgIdx) => (
                <div
                  key={img.id}
                  onClick={() => openLightbox(ev.images, imgIdx, ev.title)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-surface-container-highest shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] flex items-center justify-center"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                    <div className="flex justify-end">
                      <span className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium drop-shadow-md bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg">
                      {img.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* 3. 라이트박스 (클릭 시 전체 화면 사진 뷰어) */}
      <AnimatePresence>
        {lightboxState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-zoom-out select-none"
          >
            {/* 닫기 버튼 */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="닫기"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 이전 버튼 */}
            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="이전 사진"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* 다음 버튼 */}
            <button
              onClick={showNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="다음 사진"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 이미지 및 캡션 */}
            <motion.div
              key={lightboxState.index}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center cursor-default"
            >
              <img
                src={lightboxState.images[lightboxState.index].src}
                alt={lightboxState.images[lightboxState.index].alt}
                className="w-full h-auto max-h-[78vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-3 px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm text-white/90 text-xs sm:text-sm font-medium flex items-center gap-3">
                <span className="text-secondary font-bold">
                  {lightboxState.eventTitle.split("(")[0].trim()}
                </span>
                <span className="text-white/40">|</span>
                <span>{lightboxState.images[lightboxState.index].title}</span>
                <span className="text-white/40">|</span>
                <span className="text-emerald-400 font-bold">
                  {lightboxState.index + 1} / {lightboxState.images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
