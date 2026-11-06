import { useState } from "react";
import "./App.css";

const courses = [
  {
    id: "fullstack",
    number: "01",
    label: "BUILD THE WEB",
    title: "풀스택 웹 개발자 과정",
    description:
      "아이디어를 서비스로 만드는 힘. 프론트엔드부터 백엔드, 배포까지 하나의 흐름으로 배웁니다.",
    tags: ["React", "Node.js", "TypeScript"],
    duration: "24주",
    icon: "</>",
    modules: [
      "웹의 기초 · HTML, CSS, JavaScript",
      "React와 TypeScript로 만드는 사용자 경험",
      "Node.js · 데이터베이스 · API 설계",
      "팀 프로젝트 · 테스트 · 서비스 배포",
    ],
  },
  {
    id: "agent",
    number: "02",
    label: "BUILD WITH AI",
    title: "AI Agent 개발자 과정",
    description:
      "AI를 사용하는 사람에서, AI를 만드는 사람으로. 스스로 생각하고 실행하는 에이전트를 개발합니다.",
    tags: ["Python", "LLM", "RAG"],
    duration: "16주",
    icon: "✳",
    modules: [
      "Python · LLM과 프롬프트 설계",
      "문서 검색과 RAG 파이프라인",
      "도구 연동 · 멀티 에이전트 워크플로",
      "AI 서비스 평가 · 프로젝트 배포",
    ],
  },
];
const features = [
  [
    "01",
    "만들면서 배우는 커리큘럼",
    "문법을 넘어 실제 서비스까지. 매주 작은 결과물을 만들고, 나만의 포트폴리오로 완성합니다.",
    "Learn by building",
  ],
  [
    "02",
    "함께 고민하는 코드 리뷰",
    "코드에 정답만 남기지 않습니다. 선택의 이유를 설명하고, 더 나은 방법을 함께 찾아갑니다.",
    "Grow with feedback",
  ],
  [
    "03",
    "AI와 함께하는 개발 습관",
    "질문하고, 구현하고, 검증하는 반복. AI를 동료로 활용하는 개발 과정을 경험합니다.",
    "Work with AI",
  ],
];
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function App() {
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState("fullstack");
  const [plan, setPlan] = useState(false);
  return (
    <>
      <a className="skip" href="#main">
        본문으로 바로가기
      </a>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="CODEWAVE Academy 홈">
            <span className="brand-mark" aria-hidden="true">
              ≋
            </span>
            <span>
              CODEWAVE<small>ACADEMY</small>
            </span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menu}
            aria-controls="navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "메뉴 닫기" : "메뉴 열기"}
          </button>
          <nav
            id="navigation"
            className={menu ? "nav open" : "nav"}
            aria-label="주 메뉴"
            onClick={() => setMenu(false)}
          >
            <a href="#courses">교육과정</a>
            <a href="#approach">교육 특징</a>
            <a href="#journey">학습 여정</a>
            <a className="nav-cta" href="#contact">
              나의 과정 찾기 <Arrow />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" /> YOUR NEXT CHAPTER STARTS HERE
              </div>
              <h1>
                코드로 여는
                <br />
                가능성의 <span>다음 물결.</span>
              </h1>
              <p>
                처음의 호기심이, 세상을 바꾸는 기술이 되도록.
                <br className="desktop-break" /> CODEWAVE에서 당신의 개발자
                여정을 시작하세요.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#courses">
                  나에게 맞는 과정 찾기 <Arrow />
                </a>
                <a className="text-link" href="#approach">
                  어떻게 배우나요? <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-note">
                <span className="mini-stack" aria-hidden="true">
                  &lt;/&gt;
                </span>
                <span>작은 시작, 실제 프로젝트, 더 큰 가능성.</span>
              </div>
            </div>
            <div
              className="hero-art"
              aria-label="코드에서 새로운 가능성으로 이어지는 파란 궤도 그래픽"
              role="img"
            >
              <div className="art-grid" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orb">
                <span>W</span>
              </div>
              <div className="art-label top">IDEA → CODE → IMPACT</div>
              <div className="floating-tag tag-code">
                <span className="tag-dot" />
                Hello, future developer.
              </div>
              <div className="floating-tag tag-build">
                <span aria-hidden="true">⌘</span> Build your next wave <Arrow />
              </div>
              <div className="art-coordinate">37.5665° N · 126.9780° E</div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>FROM YOUR FIRST LINE TO YOUR NEXT BIG IDEA</span>
            <a href="#courses">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <div className="tech-strip">
          <div className="container tech-inner">
            <span>
              BUILD WITH THE TOOLS
              <br />
              <strong>THAT SHAPE TOMORROW</strong>
            </span>
            <b>React</b>
            <b>TypeScript</b>
            <b>Node.js</b>
            <b>Python</b>
            <b>LLM & Agents</b>
          </div>
        </div>
        <section id="courses" className="section container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND YOUR TRACK</p>
              <h2>당신의 다음을 만드는 과정</h2>
            </div>
            <p>
              웹 서비스부터 AI 에이전트까지.
              <br />
              만들고 싶은 미래에 맞춰 시작하세요.
            </p>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <article className={`course-card ${course.id}`} key={course.id}>
                <div className="course-top">
                  <span className="course-label">{course.label}</span>
                  <span className="course-number">/{course.number}</span>
                </div>
                <div className="course-visual" aria-hidden="true">
                  <span className="code-symbol">{course.icon}</span>
                  <span className="visual-caption">
                    {course.id === "fullstack"
                      ? "FROM ZERO TO DEPLOYED."
                      : "THINK. CONNECT. AUTOMATE."}
                  </span>
                </div>
                <div className="course-body">
                  <div className="course-meta">
                    <span>프로젝트 중심</span>
                    <span>{course.duration} 학습 로드맵</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="tags">
                    {course.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <details>
                    <summary>
                      커리큘럼 살펴보기 <span aria-hidden="true">＋</span>
                    </summary>
                    <ol>
                      {course.modules.map((module) => (
                        <li key={module}>{module}</li>
                      ))}
                    </ol>
                    <a
                      href="#contact"
                      onClick={() => {
                        setSelected(course.id);
                        setPlan(false);
                      }}
                    >
                      이 과정으로 학습 계획 만들기 →
                    </a>
                  </details>
                </div>
              </article>
            ))}
          </div>
          <p className="course-disclaimer">
            * 가상의 교육기관을 위한 콘셉트 페이지입니다. 과정과 기간은 예시이며
            실제 모집은 진행하지 않습니다.
          </p>
        </section>
        <section id="approach" className="approach section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE CODEWAVE WAY</p>
                <h2>
                  배움은 깊게.
                  <br />
                  가능성은 넓게.
                </h2>
              </div>
              <p>
                혼자서는 막막했던 시작,
                <br />
                함께 만들면 달라집니다.
              </p>
            </div>
            <div className="feature-grid">
              {features.map(([number, title, description, caption]) => (
                <article className="feature" key={number}>
                  <span className="feature-number">{number} /</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="feature-caption">
                    {caption} <Arrow />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="journey" className="section container journey">
          <div>
            <p className="eyebrow">A BETTER WAY TO GROW</p>
            <h2>
              한 줄의 코드에서,
              <br />
              하나의 서비스까지.
            </h2>
            <p>
              완벽하게 알고 시작할 필요는 없습니다.
              <br />
              시도하고 개선하며, 나만의 답을 찾아가세요.
            </p>
          </div>
          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h3>기초를 쌓고</h3>
                <p>핵심 개념을 작은 실습으로 이해합니다.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>함께 만들고</h3>
                <p>AI와 동료의 피드백으로 프로젝트를 발전시킵니다.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>세상에 선보이고</h3>
                <p>직접 배포한 서비스로 성장의 결과를 기록합니다.</p>
              </div>
            </li>
          </ol>
        </section>
        <section id="contact" className="container contact">
          <div>
            <p className="eyebrow">READY FOR YOUR NEXT WAVE?</p>
            <h2>
              당신의 첫 번째 코드가
              <br />
              새로운 시작이 되도록.
            </h2>
            <p>관심 있는 과정을 선택하고, 첫 주 학습 계획을 확인하세요.</p>
            <span className="demo-note">
              상담 체험 · 개인정보 입력이나 실제 접수 없이 이용합니다.
            </span>
          </div>
          <form
            className="plan-form"
            onSubmit={(event) => {
              event.preventDefault();
              setPlan(true);
            }}
          >
            <label htmlFor="track">어떤 미래를 만들고 싶나요?</label>
            <select
              id="track"
              value={selected}
              onChange={(event) => {
                setSelected(event.target.value);
                setPlan(false);
              }}
            >
              {courses.map((course) => (
                <option value={course.id} key={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
            <button type="submit" className="button primary">
              첫 주 학습 계획 확인하기 <Arrow />
            </button>
            <div
              role="status"
              className={plan ? "plan-result visible" : "plan-result"}
            >
              {plan && (
                <>
                  <strong>첫 주, 이렇게 시작해 보세요.</strong>
                  <p>
                    {selected === "fullstack"
                      ? "1–2일: HTML·CSS 기초 → 3–4일: 반응형 자기소개 페이지 → 5일: 브라우저 검증과 피드백 기록"
                      : "1–2일: Python 기초 → 3–4일: 프롬프트로 간단한 업무 흐름 설계 → 5일: 응답 평가와 개선 기록"}
                  </p>
                </>
              )}
            </div>
          </form>
        </section>
      </main>
      <footer className="container footer">
        <div>
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">
              ≋
            </span>
            <span>
              CODEWAVE<small>ACADEMY</small>
            </span>
          </a>
          <p>Make waves. Build your future.</p>
        </div>
        <div className="footer-right">
          <a
            href="https://github.com/aranparrk/codewave-academy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub 프로젝트 <Arrow />
          </a>
          <span>
            © {new Date().getFullYear()} CODEWAVE Academy. 교육용 가상 브랜드.
          </span>
        </div>
      </footer>
    </>
  );
}
export default App;
