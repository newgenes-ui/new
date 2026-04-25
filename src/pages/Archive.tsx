import React, { useState } from "react";
import { motion } from "motion/react";
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Download } from "lucide-react";

export default function Archive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("전체");

  const catalogs = [
    {
      id: 11,
      title: "뉴진사이언스 기초장비 카다로그",
      author: "관리자",
      date: "2024-05-01",
      views: "1,245",
      fileUrl: "/catalogs/basic_equipment_catalog.pdf",
      downloadName: "기초장비 카다로그.pdf"
    },
    {
      id: 10,
      title: "나노엔텍 ExTransfection User Manual",
      author: "관리자",
      date: "2024-04-15",
      views: "852",
      fileUrl: "/catalogs/extransfection_user_manual.pdf",
      downloadName: "나노엔텍 ExTransfection User Manual.pdf"
    },
    {
      id: 9,
      title: "나노엔텍 ExTransfection 브로슈어",
      author: "관리자",
      date: "2024-04-15",
      views: "721",
      fileUrl: "/catalogs/extransfection_brochure.pdf",
      downloadName: "나노엔텍 ExTransfection 브로슈어.pdf"
    },
    {
      id: 8,
      title: "나노엔텍 ExTransfection 국문 리플렛",
      author: "관리자",
      date: "2024-04-14",
      views: "640",
      fileUrl: "/catalogs/extransfection_leaflet_kr.pdf",
      downloadName: "나노엔텍 ExTransfection 국문 리플렛.pdf"
    },
    {
      id: 7,
      title: "나노엔텍 ExTransfection Quick Guide",
      author: "관리자",
      date: "2024-04-14",
      views: "520",
      fileUrl: "/catalogs/extransfection_quick_guide.pdf",
      downloadName: "나노엔텍 ExTransfection Quick Guide.pdf"
    },
    {
      id: 6,
      title: "나노엔텍 ExTransfection Cell protocols",
      author: "관리자",
      date: "2024-04-12",
      views: "432",
      fileUrl: "/catalogs/extransfection_cell_protocols.pdf",
      downloadName: "나노엔텍 ExTransfection Cell protocols.pdf"
    },
    {
      id: 5,
      title: "나노엔텍 3단 리플릿",
      author: "관리자",
      date: "2024-04-10",
      views: "320",
      fileUrl: "/catalogs/nanoentek_leaflet.pdf",
      downloadName: "나노엔텍 3단 리플릿.pdf"
    },
    {
      id: 4,
      title: "트위스트바이오(TWIST BIO) 유전자합성",
      author: "관리자",
      date: "2024-03-25",
      views: "480",
      fileUrl: "/catalogs/twist_bioscience_synthesis.pdf",
      downloadName: "트위스트바이오 유전자합성.pdf"
    },
    {
      id: 3,
      title: "뉴진사이언스 Conical Tubes 브로셔",
      author: "관리자",
      date: "2024-03-20",
      views: "623",
      fileUrl: "/catalogs/conical_tubes_brochure.pdf",
      downloadName: "뉴진사이언스 Conical Tubes 브로셔.pdf"
    },
    {
      id: 2,
      title: "뉴진사이언스 Serological Pipette 브로셔",
      author: "관리자",
      date: "2024-03-15",
      views: "512",
      fileUrl: "/catalogs/serological_pipette_brochure.pdf",
      downloadName: "뉴진사이언스 Serological Pipette 브로셔.pdf"
    },
    {
      id: 1,
      title: "뉴진사이언스 Micro Tip 전단지",
      author: "관리자",
      date: "2024-03-10",
      views: "431",
      fileUrl: "/catalogs/micro_tip_leaflet.pdf",
      downloadName: "뉴진사이언스 Micro Tip 전단지.pdf"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-8 max-w-6xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold font-headline mb-4">자료실</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          (주)뉴진사이언스 및 협력사 브랜드의 카탈로그를 다운로드하실 수 있습니다.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-4 gap-4">
          <div className="text-sm font-medium text-on-surface-variant">
            페이지정보 : <span className="text-primary font-bold">1</span>/1
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <select 
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="border border-surface-container-highest bg-white text-sm rounded-md px-3 py-2 outline-none focus:border-secondary transition-colors"
            >
              <option value="전체">전체</option>
              <option value="제목">제목</option>
              <option value="작성자">작성자</option>
            </select>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-surface-container-highest bg-white text-sm rounded-md px-4 py-2 outline-none focus:border-secondary transition-colors w-full sm:w-64"
            />
            <button className="bg-white border border-surface-container-highest text-primary text-sm font-medium px-4 py-2 rounded-md hover:bg-surface-container hover:text-secondary transition-colors flex items-center justify-center min-w-[60px]">
              검색
            </button>
          </div>
        </div>

        {/* 게시판 리스트 */}
        <div className="border-t-2 border-primary bg-white">
          {/* 테이블 헤더 */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-surface-container-highest bg-surface-container-lowest text-center text-sm font-bold text-primary">
            <div className="col-span-1">번호</div>
            <div className="col-span-9">제목</div>
            <div className="col-span-2">작성자</div>
          </div>

          {/* 테이블 바디 */}
          <div className="flex flex-col">
            {catalogs.map((item, index) => (
              <div 
                key={item.id} 
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 md:py-3 border-b border-surface-container-highest hover:bg-surface-container-lowest transition-colors items-center text-center px-4 md:px-0"
              >
                <div className="hidden md:block col-span-1 text-sm text-on-surface-variant font-medium">
                  {catalogs.length - index}
                </div>
                <div className="col-span-1 md:col-span-9 text-left md:text-center text-primary font-medium flex items-center justify-between md:justify-center group cursor-pointer">
                  <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors group flex items-center gap-2 w-full justify-start md:justify-center">
                    <span className="truncate max-w-[280px] sm:max-w-[400px] text-left">{item.title}</span>
                    <Download className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-secondary transition-opacity shrink-0" />
                  </a>
                </div>
                <div className="hidden md:block col-span-2 text-sm text-on-surface-variant">
                  {item.author}
                </div>
                
                {/* 모바일 뷰 용 데이터 정보 */}
                <div className="flex md:hidden justify-between items-center mt-2 text-xs text-on-surface-variant">
                  <div className="flex gap-3">
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center items-center gap-1 mt-10">
          <button className="w-8 h-8 flex items-center justify-center border border-surface-container-highest bg-white text-on-surface-variant rounded-sm hover:bg-surface-container transition-colors">
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-surface-container-highest bg-white text-on-surface-variant rounded-sm hover:bg-surface-container transition-colors mr-2">
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center border border-secondary bg-white text-secondary font-bold rounded-sm">
            1
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center border border-surface-container-highest bg-white text-on-surface-variant rounded-sm hover:bg-surface-container transition-colors ml-2">
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-surface-container-highest bg-white text-on-surface-variant rounded-sm hover:bg-surface-container transition-colors">
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
