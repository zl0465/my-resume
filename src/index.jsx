import { createRoot } from 'react-dom/client';
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Projects from "./pages/projects.jsx";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';
import { Tooltip } from '@mui/material';

function Resume() {
  useEffect(() => { document.title = 'Resume Lim Zheng Loong'; }, []);
  return (
    <div className="resume">
      <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
          }
          
          .resume {
            max-width: 800px;
            margin: 20px auto;
            background: white;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
          }
          
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            gap: 24px;
          }
          
          .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 300;
          }
          
          .header .title {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 20px;
          }
          
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-start;
        }

        .contact-item a {
            color: #ffffff;          
            text-decoration: underline;
            font-weight: 500;
        }
        
        .contact-item a:hover {
            color: #ffffff;           
            text-decoration: none;
        }
            
        .contact-item a:visited {
            color: #ffffff;           
        }
        
        .header-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .profile-photo {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255,255,255,0.8);
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          flex: 0 0 auto;
        }
        
        .content {
          padding: 40px;
        }
        
        .section {
          margin-bottom: 40px;
        }
        
        .section h2 {
          color: #667eea;
          font-size: 1.5rem;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #667eea;
        }
        
        .experience-item, .education-item {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .experience-item:last-child, .education-item:last-child {
          border-bottom: none;
        }
        
        .job-header, .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        
        .job-title, .diploma {
          font-weight: 600;
          color: #333;
          font-size: 1.1rem;
        }
        
        .company, .school {
          color: #667eea;
          font-weight: 500;
        }
        
        .date {
          color: #666;
          font-size: 0.9rem;
        }
        
        .description {
          color: #555;
          line-height: 1.6;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        
        .skill-category {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        
        .skill-category h3 {
          color: #667eea;
          margin-bottom: 10px;
          font-size: 1rem;
        }
        
        .skill-list {
          list-style: disc;
          margin: 0;
          padding-left: 20px;
        }
        
        .skill-list li {
          padding: 5px 0;
          color: #555;
        }
        
        .summary {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #667eea;
          font-style: italic;
          color: #555;
        }
        
        @media print {
          body {
            background: white;
          }
          .resume {
            box-shadow: none;
            margin: 0;
            max-width: none;
          }
        }
        
        @media (max-width: 768px) {
          .resume {
            margin: 10px;
          }
          .header {
            padding: 30px 20px;
            flex-direction: column;
            text-align: center;
          }
          .header-left {
            align-items: center;
          }
          .profile-photo {
            width: 96px;a
            height: 96px;
          }
          .content {
            padding: 30px 20px;
          }
          .contact-info {
            flex-direction: column;
            gap: 15px;
          }
          .job-header, .edu-header {
            flex-direction: column;
            gap: 5px;
          }
        }
      `}</style>
      
      {/* navigation moved to router layout so it stays visible across pages */}

      <div className="header">
        <div className="header-left">
          <h1>Lim Zheng Loong</h1>
          <div className="contact-info">
          <div className="contact-item">

            <OutgoingMailIcon style={{ color: '#ffffffff', verticalAlign: 'middle', marginRight: 6 }} />
            <Tooltip title="email me" arrow>
              <a href="mailto:xiaoh8554@gmail.com">xiaoh8554@gmail.com</a>
            </Tooltip>
          </div>
          <div className="contact-item">

            <WhatsAppIcon style={{ color: '#25D366', verticalAlign: 'middle', marginRight: 6 }} />
            <Tooltip title="whatsapp me" arrow>
              <a href="https://wa.me/60139134909">+60 139134909</a>
            </Tooltip>
          </div>

          <div className="contact-item">

            <LinkedInIcon style={{ color: '#0A66C2', verticalAlign: 'middle', marginRight: 6 }} />
            <Tooltip title="view my linkedin profile" arrow>
              <a href="https://www.linkedin.com/in/lim-zheng-loong-04a64b38a" target="_blank" rel="noopener noreferrer">linkedin.com/in/lim-zheng-loong</a>
            </Tooltip>
          </div>
          <div className="contact-item">

            <PlaceIcon style={{ color: '#FF5722', verticalAlign: 'middle', marginRight: 6 }} />
            <Tooltip title="view on google maps" arrow>
              <a href="https://www.google.com/maps/place/%E9%9B%AA%E5%85%B0%E8%8E%AA%E6%B2%99%E7%99%BB/@3.008965,101.6856426,13z/data=!3m1!4b1!4m6!3m5!1s0x31cdb55f1721e103:0x682c9d5e1c509291!8m2!3d3.021998!4d101.7055411!16zL20vMDV6dGZ4?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                Seri Kembangan, Selangor, Malaysia
              </a>
            </Tooltip>
          </div>
          </div>
        </div>
        <img className="profile-photo" src="/zl.png" alt="Profile photo" />
      </div>
      
      <div className="content">
        <div className="section">
          <h2>Professional Summary</h2>
          <div className="summary">
          Motivated and detail-oriented Information and Communication Technology (ICT) student specializing in Software Engineering at Asia Pacific University. 
          Equipped with foundational knowledge in programming (Java, Python, HTML, CSS, JavaScript), database management (SQL), and system analysis and design. 
          Experienced in DevOps, low-code development, and cybersecurity, with additional exposure to AI and networking technologies using Cisco Packet Tracer. 
          Recognized for strong communication, leadership, and critical thinking skills, having led multiple group assignments effectively. 
          Proficient in English, Chinese, and Cantonese, and eager to apply academic learning to real-world IT challenges. 
          Currently seeking a job to gain hands-on experience and contribute to innovative technology projects
          </div>
        </div>
        
        <div className="section">
          <h2>Experience</h2>
          
          <div className="experience-item">
            <div className="job-header">
              <div>
                <div className="job-title">Internship in Software Engineering</div>
                <div className="company">Codex Studio</div>
                <div className="date">2025 - 2026</div>
              </div>
              
            </div>
            <div className="description">
              • Assisted in the development of scalable web applications using React, Node.js, and cloud technologies<br/>
              • Collaborated with product managers and designers to deliver user-centric solutions<br/>
            </div>
          </div>
        </div>
        
        <div className="section">
          <h2>Education</h2>
          
          <div className="education-item">
            <div className="edu-header">
              <div>
                <div className="diploma">Diploma of Information and Communication 
                  Technology specialist in Software Engineering (CGPA: 3.32)</div>
                <div className="school">Asia Pacific University</div>  
                <div className="date">2023 - 2025</div>
              </div>
            </div>
            <div className="description">
              Relevant coursework: Software Engineering, Database Systems, 
              Web Development, Mobile App Development, Networking Technologies, Front-end Development, 
              Back-end Development, DevOps, Cybersecurity, AI Fundamentals
            </div>
          </div>

                    <div className="education-item">
            <div className="edu-header">
              <div>
                <div className="diploma">Compulsory Education (SPM 3A+ 3B 3C) </div>
                <div className="school">Sekolah Menengah Kebangsaan Seri Kembangan</div>  
                <div className="date">2017 - 2023</div>
              </div>
            </div>
            <div className="description">
              Relevant coursework: Accounting, Business Studies, Malay Language, 
              Chinese, English, Mathematics, Science, Sejarah
            </div>
          </div>
        </div>
        
        <div className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul className="skill-list">
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Backend</h3>
              <ul className="skill-list">
                <li>Node.js</li>
                <li>Python</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Database</h3>
              <ul className="skill-list">
                <li>MySQL</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul className="skill-list">
                <li>Git & GitHub</li>
                <li>AutoSpy</li>
                <li>FtkImager</li>
                <li>Cisco Packet Tracer</li>
                <li>Docker</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Personal Skills</h3>
              <ul className="skill-list">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                <li>Leadership (leader in over 5 assignments)</li>
                <li>Critical Thinking</li>
                <li>Self-discipline</li>
                <li>Time Management</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Language Skills</h3>
              <ul className="skill-list">
                <li>Chinese (Native Speaker)</li>
                <li>English (Fluent)</li>
                <li>Malay Language (Basic)</li>
                <li>Cantonese (Conversational)</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function Layout({ children }) {
  const iconStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    background: 'transparent',
    boxShadow: 'none',
    textDecoration: 'none',
    color: '#333',
    fontSize: 22,
    padding: 4,
  };

  const navStyle = {
    padding: '8px 16px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 8,
    alignItems: 'center',
    background: 'transparent',
  };

    return (
    <div>
      <nav style={navStyle}>
        <Tooltip title="Home" arrow>
          <Link to="/" aria-label="Home" style={iconStyle}>
            <span role="img" aria-hidden="true">🏠</span>
          </Link>
        </Tooltip>

        <Tooltip title="Projects" arrow>
          <Link to="/projects" aria-label="Projects" style={iconStyle}>
            <span role="img" aria-hidden="true">📁</span>
          </Link>
        </Tooltip>
      </nav>
      <div style={{paddingTop:12}}>{children}</div>
    </div>
  );
}

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout><Resume /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
      </Routes>
    </HashRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppRoutes />);