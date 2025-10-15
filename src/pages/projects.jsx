import React from 'react';

export default function Projects() {
  return (
    <div className="content">
      <style>{`
  * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1;
            background-color: #f5f5f5;
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
        

        .section {
          margin-bottom: 40px;
        }
        
        .section h1 {
          font-size: 5rem;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #667eea;
        }

        .project-grid {
          display: grid;
          grid-template-columns: 1fr
          gap: 80px;
        }

        .project-category {
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #667eea;
          margin-bottom: 20px;
        }
        
        .project-list {
          list-style: none;
          margin: 0.25rem;
          padding: 0;
        }

        .project-list li {
          padding: 8px;
          line-height: 1.5;
          color: #555;
        }
      `}</style>

    <div className="section">
      <h1>My Projects</h1>
      <div className="project-grid">
            <div className="project-category">
              <h3>Python Project: A Bakery system</h3>
              <ul className="project-list">
                <li>year: 2023 </li>
                <li>Team Project </li>
                <li>Description: A small, family-owned bakery is struggling to manage its daily operations efficiently. 
                    Manual processes for tracking inventory, managing sales, and handling customer orders are timeconsuming and error-prone. 
                    The bakery owner aims to improve operational efficiency, enhance customer satisfaction, and gain valuable insights into sales trends. 
                    The bakery owner requires a system to streamline operations. Develop a Bakery Management System to meet these needs. 
                    A good system allows you to effectively manage all transactions of customers easily. 
                    The system included four main roles who are baker, manager, cashier, and customer with their components such as 
                    inventory management, order processing, customer management, and sales reporting.</li>
                <a href="https://github.com/zl0465/python-project-bakery-system">View The Project On Github</a>
              </ul>
            </div>

            <div className="project-category">
              <h3>Java Project: A hospital Inventory Management System</h3>
              <ul className="project-list">
                <li>year: 2024 </li>
                <li>Team Project </li>
                <li>Description: The Department of Health in your state needs a computer program 
                    to manage the inventory of PPE that it receives from multiple suppliers and 
                    distribute them to the hospitals that it manages. The system will be two main roles: admin and user 
                    who can update, track, create inventories</li>
                <a href="https://github.com/zl0465/Java-Project-Inventory-Management-System">View The Project On Github</a>
              </ul>
            </div>

            <div className="project-category">
              <h3>Web Development Project: A goal tracking web application</h3>
              <ul className="project-list">
                <li>year: 2024 </li>
                <li>Team Project </li>
                <li>Description: My team is tasked with creating a web application designed to enhance productivity for individuals and teams. 
                    The application should include features that help users manage tasks, track time, set goals, collaborate effectively, and analyze their productivity. 
                    The application must focus on providing tools that streamline workflows and improve overall efficiency.</li>
                <a href="https://github.com/zl0465/Web-Development-Project-goal-tracking-web-application">View The Project On Github</a>
              </ul>
            </div>

            <div className="project-category">
              <h3>Mobile app development project by flutter: A travel companion app</h3>
              <ul className="project-list">
                <li>year: 2025 </li>
                <li>Team Project </li>
                <li>Description: The Travel and Tourism System is an integrated platform designed to simplify trip planning, booking, and management. 
                    It allows users to explore destinations, compare packages, reserve hotels and transport, and receive personalized recommendations. 
                    The system enhances user experience, supports travel agencies, and promotes global tourism through seamless digital interaction.</li>
                <a href="https://github.com/zl0465/Mobile-app-development-project-travel-companion-app">View The Project On Github</a>
              </ul>
            </div>
      </div>
    </div>

    </div>
    );
};