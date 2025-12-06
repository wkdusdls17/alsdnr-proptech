"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { X, Plus, Upload, ChevronDown, LayoutGrid } from "lucide-react"
import { EditableText } from "@/components/editable/editable-text"
import { EditableMedia } from "@/components/editable/editable-media"
import { EditableBackground } from "@/components/editable/editable-background"
import { useInlineEditor } from "@/contexts/inline-editor-context"
import { COMMON_STYLES } from "@/lib/constants"

export function Projects() {
  const { getData, saveData, isEditMode, saveToFile } = useInlineEditor()
  // 기본 데이터
  const defaultInfo = {
    title: "프로젝트",
    subtitle: "프로젝트",
    initialDisplay: 6,
    loadMoreCount: 3,
    background: {"image":"","video":"","color":"","opacity":0.1},
    projects: [{"image":"/uploads/project-0-1765011459050.jpg","video":"","title":"가우디의 주택과 건축적 특성","description":"안토니 가우디의 건축 철학과 대표 주택(카사 비센스, 구엘 저택, 카사 바트요, 카사 밀라)을 분석하고, 바르셀로나의 도시 구조와의 관계를 함께 고찰한 프로젝트입니다. 자연을 모티프로 한 유기적 곡선, 역선 아치·쌍곡면 등 혁신적 구조기법, 채광과 환기를 고려한 공간 설계, 카탈루냐 지역성을 반영한 장식적 조형성을 중심으로 가우디 건축의 핵심 특성을 정리했습니다. 또한 바르셀로나의 격자형 도시계획 속에서 가우디 건축이 도시의 단조로움을 해소하며 독창적 정체성을 형성한 점을 분석하고, 이러한 특징들이 한국 아파트 디자인의 다양성·지역성·주거 편의 향상에 어떤 시사점을 줄 수 있는지 탐구했습니다."},{"image":"/uploads/project-1-1765012000814.png","video":"","title":"송도 커넬워크의 문제점과 재생 전략 제언(상권 활성화)","description":"본 프로젝트는 인천 송도국제도시의 복합상업공간 ‘커넬워크’를 대상으로 상권 침체의 원인을 진단하고 재생 전략을 제시한 도시개발론 팀 프로젝트이다. 수로 중심의 유럽형 스트리트몰을 표방했지만, 공실률 증가, 미흡한 공간 관리, 단절된 동선, 낮은 접근성과 같은 구조적 문제가 상권 활성화를 저해하고 있음을 현장조사와 입지분석을 통해 규명하였다. 인근의 주거·교육·업무 밀집이라는 잠재력을 바탕으로 보행 동선 개선, 공원 연계 강화, 수변 카페거리 조성, 가족 중심 F&B 배치, 사계절 테마 브랜딩 등 공간·업종·운영 전략을 종합적으로 제안했으며, 트리플스트리트·타임스페이스 등 유사 사례 비교를 통해 실행 가능성과 실효성을 검증하였다. 본 연구는 스트리트몰 활성화에 필요한 공간 구조 개선과 생활권 기반 상권 전략을 구체적으로 제시했다는 점에서 의의를 가진다."},{"image":"/uploads/project-1765012083386-1765012083478.png","video":"","title":"서울시 공공자전거 데이터 분석","description":"이 프로젝트는 서울시 공공자전거(따릉이) 데이터를 활용해 요일·시간대별 대여 수요를 분석하고, Shannon Entropy 기반 다양도 지표를 계산하여 이동 패턴의 특성을 파악한 데이터 분석 과제이다. R과 Quarto 환경을 활용해 데이터 전처리, 시각화, 통계적 지표 산출 과정을 수행하였으며, 이를 HTML 리포트 형태로 정리하였다. 분석 결과는 특정 시간대의 수요 집중 현상, 요일별 이용 변화, 이동 행태의 규칙성과 다양성 등을 도시모빌리티 관점에서 해석하는 데 활용되었다."},{"image":"/uploads/project-1765012332765-1765012333160.png","video":"","title":"한강공원 주차장 이용 패턴 및 접근성 분석","description":"이 프로젝트는 한강공원 주요 지점의 주차장 데이터를 활용해 시간대별·요일별 이용량과 혼잡도를 분석한 과제이다. R을 통해 주차 수요 변동, 피크 타임, 주차 회전율 등을 시각화하고, 공원 접근성 및 이용 행태와의 관련성을 해석하였다. 또한 공원별 이용 패턴 차이를 비교하여 주차 공간 운영의 효율성 개선과 방문 수요 관리에 대한 시사점을 도출하였다. 분석 결과는 HTML 리포트 형태로 정리되었다."},{"image":"/uploads/project-1765012575403-1765012575887.png","video":"","title":"지역 연고 스포츠팀이 지역경제와 공동체성에 미치는 영향 연구","description":"본 연구는 KIA 타이거즈와 광주FC를 중심으로 지역 연고 스포츠팀이 지역사회에 미치는 경제적·사회적 영향을 분석한 프로젝트이다. 선행연구 검토를 통해 대형 스포츠 이벤트와 지속적 지역 스포츠 활동의 차이를 비교하고, 지역경제 활성화, 지역 정체성 강화, 주민 공동체성 형성 등 다층적인 효과를 검토하였다. 연구는 2015년부터 현재까지 약 10년간의 지역 변화와 팀 활동을 분석 범위로 설정하고, 설문조사·심층 인터뷰·2차 자료 분석을 결합한 혼합 연구 방법을 활용하였다. 이를 통해 팬 커뮤니티의 역할, 지역 상권의 경제적 파급효과, 주민 자부심 및 소속감 형성 과정 등을 다각도로 규명하며, 스포츠팀과 지역이 지속적으로 공존하기 위한 조건과 향후 발전 방향을 제시하였다."},{"image":"/uploads/project-1765012767816-1765012768319.png","video":"","title":"광주광역시 도시계획 분석: 역사·공간구조 변화와 도시문제 진단","description":"이 프로젝트는 광주광역시를 대상으로 도시의 역사적 발전, 공간 구조 변화, 교통체계, 토지이용 현황, 도시재편 과정 등을 종합적으로 분석한 도시계획 발표 과제이다. 발표자료에서는 인구·면적·지리적 입지 등 광주의 도시 개요를 정리하고, 송정·충장로 중심지 변화 등 역사적 도시축 이동을 검토하였다. 또한 도시철도 1호선, 광주송정역, 광주공항, 종합버스터미널 등 핵심 교통시설을 평가하여 도시 간 연결성과 내부 접근성을 분석했다. 토지이용 및 용도지역 변화를 통해 도시 성장방향을 해석하고, 중심지 침체와 상권 쇠퇴 등 주요 도시문제를 사례 기반으로 제시하였다. 본 분석은 광주의 과거·현재 도시구조를 도시계획 관점에서 해석하고, 도시 재생 및 공간전략의 필요성을 도출한 데 의의가 있다."},{"image":"/uploads/project-1765012933845-1765012934386.png","video":"","title":"청년·신혼부부·고령가구의 주거실태와 특별공급제도 개선 연구","description":"본 프로젝트는 국토교통부의 주거실태조사와 주택업무편람을 기반으로 청년·신혼부부·고령가구의 주거 특성과 문제점을 분석하고, 이를 바탕으로 특별공급제도의 구조적 한계를 진단한 주택정책 발표 과제이다. 각 가구 유형별 자가점유율, PIR·RIR, 최저주거기준 미달 비율, 주거지원 수요 등을 비교하여 세대별 주거 취약 요소를 정리하였으며, 특별공급 제도의 자격요건 과도함, 공급 물량 부족, 형식적 배점 및 추첨 구조 등 문제점을 도출하였다. 이어 신청 절차 간소화, 공급 물량 조정, 실거주·취약도 기반 선정 강화 등 정책 개선방안을 제시하여 주거복지의 실효성을 높이기 위한 방향성을 제안하였다."},{"image":"/uploads/project-1765013037525-1765013037578.png","video":"","title":"갠지스강 오염 문제와 지역사회 환경영향 분석: 인도 환경정책과 지속가능성 평가","description":"이 프로젝트는 인도의 갠지스강을 사례로 삼아 종교·문화적 상징성과 급격한 산업화·도시화가 충돌하면서 발생한 환경오염 문제를 분석한 보고서이다. 갠지스강의 역사적·종교적 의미를 바탕으로, 칸푸르의 가죽 산업 폐수 배출, 바라나시의 종교의식으로 인한 유기물 증가, 하리드와 지역의 플라스틱 폐기물 문제 등 지역별 오염 원인을 구체적으로 정리하였다. 또한 WHO 기준을 초과하는 대장균 수치, 높은 BOD, 중금속 오염, 미세플라스틱 등 수질 지표를 통해 오염의 심각성을 제시하고, 콜레라·이질·장티푸스 등 지역사회 건강 영향과 생태계 파괴 문제를 종합적으로 분석했다. 인도 정부의 Namami Gange 정책, 시민단체 활동, 한계점 등을 평가하고, 하수처리 강화, 산업폐수 관리, 지역 기반 환경교육, 종교 공동체 협력 등 지속 가능한 대안을 제시한 것이 본 프로젝트의 핵심이다."},{"image":"/uploads/project-1765013315568-1765013316101.png","video":"","title":"AI 기반 행정구역 개편 분석 및 도시 영향 평가 프로젝트","description":"본 프로젝트는 행정구역 분리로 발생하는 주민 갈등과 행정 비효율 문제를 해결하기 위해 인공지능·빅데이터 분석을 적용하는 방안을 모색한 발표 과제이다. 행정구역 단절 사례(예: 전주·완주 통합 논쟁 등)를 바탕으로 문제의 본질을 정리하고, 5V(Volume·Variety·Velocity·Value·Veracity)를 활용한 빅데이터 분석 및 머신러닝 기반 행정구역 재편 시뮬레이션 기법을 제안하였다. 또한 통합 시 행정비용 절감, 서비스 품질 향상, 경제 규모 확장 등 긍정 효과와 함께 정치적 충돌, 초기 시스템 혼란, 자원 분산 등 부정적 영향도 균형적으로 검토하였다. 마지막으로 AI 활용 시 데이터 편향·사회적 불평등 심화·기술적 오류 가능성 등 위험요인을 분석하여, 지속가능하고 투명한 행정구역 개편을 위한 정책적 시사점을 도출한 프로젝트이다."}] as Array<{ image: string; video?: string; title: string; description: string }>
  }

  const [projectsInfo, setProjectsInfo] = useState(defaultInfo)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageAspects, setImageAspects] = useState<{ [key: string]: string }>({})
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [displayCount, setDisplayCount] = useState(defaultInfo.initialDisplay)
  const [showDisplaySettings, setShowDisplaySettings] = useState(false)
  const [newProject, setNewProject] = useState({
    image: "",
    title: "",
    description: ""
  })
  const [backgroundData, setBackgroundData] = useState(
    defaultInfo.background
  )
  
  // localStorage에서 데이터 로드 - 편집 모드가 변경될 때마다 실행
  useEffect(() => {
    const savedData = getData('projects-info') as typeof defaultInfo | null
    if (savedData) {
      const mergedData = { ...defaultInfo, ...savedData }
      setProjectsInfo(mergedData)
      setDisplayCount(mergedData.initialDisplay || defaultInfo.initialDisplay)
      // background 데이터가 있으면 설정
      if (savedData.background) {
        setBackgroundData(savedData.background)
      }
    }
    
    const savedBg = getData('projects-background') as { image: string; video: string; color: string; opacity: number } | null
    if (savedBg) {
      setBackgroundData(savedBg)
    }
  }, [isEditMode]) // isEditMode가 변경될 때마다 데이터 다시 로드
  
  const updateProjectsInfo = async (key: string, value: string | number | boolean | typeof projectsInfo.projects) => {
    const newInfo = { ...projectsInfo, [key]: value }
    setProjectsInfo(newInfo)
    saveData('projects-info', newInfo)
    // 파일에도 자동 저장
    await saveToFile('projects', 'Info', newInfo)
  }
  
  const updateProject = async (index: number, field: string, value: string) => {
    const newProjects = [...projectsInfo.projects]
    newProjects[index] = { ...newProjects[index], [field]: value }
    await updateProjectsInfo('projects', newProjects)
  }
  
  
  const removeProject = async (index: number) => {
    // 삭제할 프로젝트의 이미지/비디오 파일 경로 가져오기
    const projectToRemove = projectsInfo.projects[index]
    
    // 이미지가 있고 uploads 폴더의 파일인 경우 삭제
    if (projectToRemove.image && projectToRemove.image.includes('/uploads/')) {
      try {
        const response = await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imagePath: projectToRemove.image })
        })
        if (response.ok) {
          console.log(`✅ 프로젝트 이미지 삭제 완료: ${projectToRemove.image}`)
        }
      } catch (error) {
        console.error('프로젝트 이미지 삭제 실패:', error)
      }
    }
    
    // 비디오가 있고 uploads 폴더의 파일인 경우 삭제
    if (projectToRemove.video && projectToRemove.video.includes('/uploads/')) {
      try {
        const response = await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imagePath: projectToRemove.video })
        })
        if (response.ok) {
          console.log(`✅ 프로젝트 비디오 삭제 완료: ${projectToRemove.video}`)
        }
      } catch (error) {
        console.error('프로젝트 비디오 삭제 실패:', error)
      }
    }
    
    // 프로젝트 목록에서 제거
    const newProjects = projectsInfo.projects.filter((_, i) => i !== index)
    await updateProjectsInfo('projects', newProjects)
  }
  
  // 표시할 프로젝트들
  const validProjects = projectsInfo.projects
  const visibleProjects = isEditMode ? validProjects : validProjects.slice(0, displayCount)
  const hasMoreProjects = validProjects.length > displayCount
  
  // 더보기 버튼 클릭
  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + projectsInfo.loadMoreCount, validProjects.length))
  }
  
  // 이미지 비율 감지 함수
  const detectImageAspect = (src: string) => {
    if (!src) return // 빈 이미지 경로는 무시
    
    const img = new Image()
    img.onload = () => {
      const ratio = img.width / img.height
      let aspectClass: string
      
      // 일반적인 이미지 비율들 감지
      if (ratio >= 1.7 && ratio <= 1.8) {
        aspectClass = 'aspect-video' // 16:9 (1.777...)
      } else if (ratio >= 1.3 && ratio <= 1.35) {
        aspectClass = 'aspect-[4/3]' // 4:3 (1.333...)
      } else if (ratio >= 0.95 && ratio <= 1.05) {
        aspectClass = 'aspect-square' // 1:1 (1.0)
      } else if (ratio >= 0.74 && ratio <= 0.76) {
        aspectClass = 'aspect-[3/4]' // 3:4 (0.75)
      } else if (ratio >= 0.55 && ratio <= 0.57) {
        aspectClass = 'aspect-[9/16]' // 9:16 (0.5625)
      } else if (ratio >= 1.4 && ratio <= 1.45) {
        aspectClass = 'aspect-[3/2]' // 3:2 (1.5)
      } else if (ratio >= 0.65 && ratio <= 0.67) {
        aspectClass = 'aspect-[2/3]' // 2:3 (0.666...)
      } else if (ratio > 1.8) {
        aspectClass = 'aspect-[21/9]' // 초광각
      } else if (ratio < 0.55) {
        aspectClass = 'aspect-[1/2]' // 매우 세로
      } else {
        // 기타 비율은 가장 가까운 것으로
        if (ratio > 1) {
          aspectClass = 'aspect-video' // 기본 가로
        } else {
          aspectClass = 'aspect-[3/4]' // 기본 세로
        }
      }
      
      setImageAspects(prev => ({ ...prev, [src]: aspectClass }))
    }
    img.src = src
  }
  
  // 모든 이미지 비율 감지
  useEffect(() => {
    validProjects.forEach(project => {
      detectImageAspect(project.image)
    })
  }, [validProjects.length]) // 유효한 projects 개수가 변경되면 다시 실행

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <EditableBackground
        image={backgroundData.image}
        video={backgroundData.video}
        color={backgroundData.color}
        opacity={backgroundData.opacity}
        onChange={(data) => {
          const newData = { ...backgroundData, ...data }
          setBackgroundData(newData)
          saveData('projects-background', newData)
          
          // projectsInfo도 업데이트 (파일 저장을 위해)
          const updatedProjectsInfo = { ...projectsInfo, background: newData }
          setProjectsInfo(updatedProjectsInfo)
          saveData('projects-info', updatedProjectsInfo)
        }}
        storageKey="projects-background"
        className="relative"
      >
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 제목 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <EditableText
                value={projectsInfo.title}
                onChange={(value) => updateProjectsInfo('title', value)}
                storageKey="projects-title"
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <EditableText
                value={projectsInfo.subtitle}
                onChange={(value) => updateProjectsInfo('subtitle', value)}
                storageKey="projects-subtitle"
              />
            </p>
          </div>

          {/* 프로젝트가 없을 때 */}
          {validProjects.length === 0 && !isEditMode ? (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">🚀</span>
              <p className="text-xl text-muted-foreground">준비 중입니다</p>
            </div>
          ) : (
            /* 프로젝트 그리드 */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, index) => {
                
                return (
                  <div 
                    key={index}
                    className="group flex flex-col relative cursor-pointer"
                    onClick={() => !isEditMode && setSelectedImage(project.video || project.image)}
                  >
                    {isEditMode && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          removeProject(index)
                        }}
                        className={COMMON_STYLES.deleteButton}
                      >
                        <X className={COMMON_STYLES.deleteIcon} />
                      </button>
                    )}
                    
                    {/* 이미지/비디오 영역 */}
                    <div className="relative aspect-[4/3] rounded-lg bg-muted mb-3 overflow-hidden">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="absolute inset-0 w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <EditableMedia
                          src={project.image || ""}
                          onChange={(src) => updateProject(index, 'image', src)}
                          type="auto"
                          storageKey={`project-${index}-image`}
                          className="absolute inset-0 w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105"
                          alt={project.title}
                          purpose={`project-${index}`}
                        />
                      )}
                    </div>
                    
                    {/* 텍스트 영역 */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-foreground mb-1">
                        <EditableText
                          value={project.title || "프로젝트 제목"}
                          onChange={(value) => updateProject(index, 'title', value)}
                          storageKey={`project-${index}-title`}
                        />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <EditableText
                          value={project.description || "프로젝트 설명"}
                          onChange={(value) => updateProject(index, 'description', value)}
                          storageKey={`project-${index}-description`}
                          multiline
                        />
                      </p>
                    </div>
                  </div>
                )
              })}
              
              {/* 편집 버튼 */}
              {isEditMode && (
                <div 
                  className="h-64 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
                  onClick={() => setShowProjectModal(true)}
                >
                  <div className="text-center">
                    <Plus className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">프로젝트 추가</p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* 더보기 버튼 */}
          {hasMoreProjects && !isEditMode && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2"
              >
                <ChevronDown className="h-5 w-5" />
                더 많은 프로젝트 보기 ({validProjects.length - displayCount}개 더)
              </button>
            </div>
          )}
          
          {/* 표시 설정 버튼 (편집 모드에서만) */}
          {isEditMode && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowDisplaySettings(true)}
                className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-all inline-flex items-center gap-2"
              >
                <LayoutGrid className="h-5 w-5" />
                더보기 설정
              </button>
            </div>
          )}
          </div>
        </section>
      </EditableBackground>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* 모달 컨테이너 */}
          <div 
            className="relative bg-background rounded-lg shadow-2xl max-w-4xl max-h-[85vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background shadow-lg transition-all hover:scale-110"
              aria-label="닫기"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* 확대된 이미지/비디오 */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {selectedImage && (selectedImage.includes('.mp4') || selectedImage.includes('.webm') || selectedImage.includes('youtube')) ? (
                <video
                  src={selectedImage}
                  className="max-w-full max-h-[75vh] object-contain rounded"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="확대된 프로젝트 이미지"
                  className="max-w-full max-h-[75vh] object-contain rounded"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      const placeholder = document.createElement('div')
                      placeholder.className = 'text-muted-foreground text-center py-20'
                      placeholder.innerHTML = '<span class="text-6xl">📁</span><p class="mt-4">미디어를 불러올 수 없습니다</p>'
                      parent.appendChild(placeholder)
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* 프로젝트 추가 모달 */}
      {showProjectModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">새 프로젝트 추가</h3>
              <button
                onClick={async () => {
                  // 업로드된 이미지가 있으면 삭제
                  if (newProject.image && newProject.image.includes('/uploads/')) {
                    try {
                      await fetch('/api/delete-image', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imagePath: newProject.image })
                      })
                    } catch (error) {
                      console.error('Failed to delete uploaded file:', error)
                    }
                  }
                  setNewProject({ image: "", title: "", description: "" })
                  setShowProjectModal(false)
                }}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* 이미지/비디오 업로드 */}
              <div>
                <label className="text-sm font-medium mb-2 block">프로젝트 이미지/비디오</label>
                <div className="h-48 rounded-lg overflow-hidden bg-muted">
                  {newProject.image ? (
                    <div className="relative h-full">
                      {newProject.image.includes('.mp4') || newProject.image.includes('.webm') ? (
                        <video 
                          src={newProject.image} 
                          className="w-full h-full object-cover"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        />
                      ) : (
                        <img 
                          src={newProject.image} 
                          alt="프로젝트 미리보기"
                          className="w-full h-full object-cover"
                        />
                      )}
                      <button
                        onClick={() => setNewProject({...newProject, image: ""})}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center gap-2">
                      <input
                        id="project-upload"
                        type="file"
                        accept="image/*,video/mp4,video/webm"
                        onChange={async (e) => {
                          const file = e.target.files?.[0]
                          if (!file) return
                          
                          const isVideo = file.type.includes('video')
                          const maxSize = isVideo ? 20 * 1024 * 1024 : 5 * 1024 * 1024
                          
                          if (file.size > maxSize) {
                            alert(`파일 크기는 ${isVideo ? '20MB' : '5MB'} 이하여야 합니다`)
                            return
                          }
                          
                          const formData = new FormData()
                          formData.append('file', file)
                          formData.append('purpose', `project-${Date.now()}`)
                          
                          try {
                            const response = await fetch(isVideo ? '/api/upload-video' : '/api/upload-image', {
                              method: 'POST',
                              body: formData
                            })
                            
                            const result = await response.json()
                            
                            if (result.success) {
                              setNewProject({...newProject, image: result.path})
                            } else {
                              alert(`❌ ${result.error}`)
                            }
                          } catch {
                            alert('업로드 중 오류가 발생했습니다')
                          }
                        }}
                        className="hidden"
                      />
                      <label
                        htmlFor="project-upload"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 cursor-pointer"
                      >
                        <Upload className="h-4 w-4 inline mr-2" />
                        파일 업로드
                      </label>
                      <input
                        type="text"
                        value={newProject.image}
                        onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                        placeholder="또는 URL 입력 (https://...)"
                        className="px-3 py-2 border rounded-lg bg-background text-sm"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              {/* 프로젝트 제목 */}
              <div>
                <label className="text-sm font-medium mb-1 block">프로젝트 제목</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  placeholder="예: 브랜드 리뉴얼 프로젝트"
                  className="w-full px-3 py-2 border rounded-lg bg-background"
                />
              </div>
              
              {/* 프로젝트 설명 */}
              <div>
                <label className="text-sm font-medium mb-1 block">프로젝트 설명</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  placeholder="예: 스타트업 A사의 전체 브랜딩 리뉴얼 및 UI/UX 개선"
                  className="w-full px-3 py-2 border rounded-lg bg-background resize-none"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="mt-6 flex gap-2">
              <button
                onClick={async () => {
                  if (newProject.title && newProject.description) {
                    // 비디오 URL 체크 및 처리
                    const isVideo = newProject.image && (newProject.image.includes('.mp4') || newProject.image.includes('.webm'))
                    const projectData = {
                      image: isVideo ? '' : newProject.image,
                      video: isVideo ? newProject.image : '',
                      title: newProject.title,
                      description: newProject.description
                    }
                    const updatedProjects = [...projectsInfo.projects, projectData]
                    const updatedInfo = {...projectsInfo, projects: updatedProjects}
                    setProjectsInfo(updatedInfo)
                    saveData('projects-info', updatedInfo)
                    
                    // 파일에도 저장
                    const success = await saveToFile('projects', 'Info', updatedInfo)
                    if (success) {
                      alert('✅ 프로젝트가 추가되고 파일에 저장되었습니다!')
                    }
                    
                    setNewProject({ image: "", title: "", description: "" })
                    setShowProjectModal(false)
                  } else {
                    alert('제목과 설명을 입력해주세요')
                  }
                }}
                className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                추가
              </button>
              <button
                onClick={async () => {
                  // 업로드된 이미지가 있으면 삭제
                  if (newProject.image && newProject.image.includes('/uploads/')) {
                    try {
                      await fetch('/api/delete-image', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imagePath: newProject.image })
                      })
                    } catch (error) {
                      console.error('Failed to delete uploaded file:', error)
                    }
                  }
                  setNewProject({ image: "", title: "", description: "" })
                  setShowProjectModal(false)
                }}
                className="flex-1 py-2 border rounded-lg hover:bg-muted"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 표시 설정 모달 */}
      {showDisplaySettings && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-background border rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">더보기 설정</h3>
              <button
                onClick={() => setShowDisplaySettings(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* 초기 표시 개수 */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  처음에 보여줄 프로젝트 개수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(num => (
                    <button
                      key={num}
                      onClick={() => {
                        updateProjectsInfo('initialDisplay', num)
                        setDisplayCount(Math.min(displayCount, num))
                      }}
                      className={`py-2 px-3 rounded-lg border transition-all ${
                        projectsInfo.initialDisplay === num 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {num}개
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={projectsInfo.initialDisplay}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1)
                      updateProjectsInfo('initialDisplay', value)
                      setDisplayCount(Math.min(displayCount, value))
                    }}
                    min="1"
                    max="100"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="직접 입력 (1-100)"
                  />
                </div>
              </div>
              
              {/* 더보기 클릭 시 추가 개수 */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  더보기 클릭 시 추가로 보여줄 개수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(num => (
                    <button
                      key={num}
                      onClick={() => updateProjectsInfo('loadMoreCount', num)}
                      className={`py-2 px-3 rounded-lg border transition-all ${
                        projectsInfo.loadMoreCount === num 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {num}개
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={projectsInfo.loadMoreCount}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1)
                      updateProjectsInfo('loadMoreCount', value)
                    }}
                    min="1"
                    max="100"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="직접 입력 (1-100)"
                  />
                </div>
              </div>
              
              {/* 현재 상태 미리보기 */}
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-medium mb-2">현재 설정:</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• 전체 프로젝트: {validProjects.length}개</p>
                  <p>• 처음 표시: {projectsInfo.initialDisplay}개</p>
                  <p>• 더보기 클릭당: {projectsInfo.loadMoreCount}개씩 추가</p>
                  {validProjects.length > projectsInfo.initialDisplay && (
                    <p className="text-primary mt-2">
                      → 더보기 버튼 {Math.ceil((validProjects.length - projectsInfo.initialDisplay) / projectsInfo.loadMoreCount)}번 클릭 필요
                    </p>
                  )}
                </div>
              </div>
              
              {/* 팁 */}
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-xs font-medium mb-1">💡 추천 설정:</p>
                <p className="text-xs text-muted-foreground">
                  • 프로젝트가 많은 경우: 6개 표시, 3개씩 추가<br/>
                  • 프로젝트가 적은 경우: 3개 표시, 3개씩 추가<br/>
                  • 모바일 고려: 3의 배수로 설정 권장
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => {
                  // 초기화
                  updateProjectsInfo('initialDisplay', 6)
                  updateProjectsInfo('loadMoreCount', 3)
                  setDisplayCount(6)
                }}
                className="flex-1 py-2 border rounded-lg hover:bg-muted"
              >
                기본값으로 초기화
              </button>
              <button
                onClick={async () => {
                  // 파일에 저장
                  const success = await saveToFile('projects', 'Info', projectsInfo)
                  if (success) {
                    alert('✅ 프로젝트 설정이 파일에 저장되었습니다!')
                  }
                  setShowDisplaySettings(false)
                }}
                className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                📁 저장 & 완료
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
            
                