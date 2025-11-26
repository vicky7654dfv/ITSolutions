import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import Style from './Dashboard.module.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const navigate = useNavigate();

  // Server Data with State
  const [serverData, setServerData] = useState([
    { name: 'AWS Primary', region: 'us-east-1', load: 45, status: 'Healthy', trend: 'stable' },
    { name: 'Azure Backup', region: 'west-europe', load: 28, status: 'Healthy', trend: 'down' },
    { name: 'Google Cloud AI', region: 'asia-south1', load: 78, status: 'High Load', trend: 'up' },
    { name: 'Internal DB', region: 'on-premise', load: 12, status: 'Idle', trend: 'stable' }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Handler for Server Refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const updatedServers = serverData.map(server => ({
        ...server,
        load: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
        status: Math.random() > 0.7 ? 'High Load' : 'Healthy'
      }));
      setServerData(updatedServers);
      setIsRefreshing(false);
    }, 1000);
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '⚡' },
    { id: 'projects', label: 'Active Projects', icon: '💻' },
    { id: 'servers', label: 'Server Status', icon: '🖥️' },
    { id: 'team', label: 'Dev Team', icon: '👥' },
    { id: 'security', label: 'Security', icon: '🛡️' },
    { id: 'deployment', label: 'Deployments', icon: '🚀' },
    { id: 'analytics', label: 'Analytics', icon: '📈' }
  ];

  // Stats Data
  const statsData = [
    { label: 'Total Revenue', value: 4200000, prefix: '$', suffix: '', change: '+12.5%', icon: '💰', trend: 'up' },
    { label: 'Active Clients', value: 86, prefix: '', suffix: '', change: '+4', icon: '🤝', trend: 'up' },
    { label: 'Server Uptime', value: 99.9, prefix: '', suffix: '%', change: '+0.2%', icon: '☁️', trend: 'up' },
    { label: 'Open Tickets', value: 12, prefix: '', suffix: '', change: '-5', icon: '🎫', trend: 'down' }
  ];

  // Chart Data
  const monthlyRevenue = [
    { month: "Jan", value: 65 }, { month: "Feb", value: 72 }, { month: "Mar", value: 85 },
    { month: "Apr", value: 78 }, { month: "May", value: 92 }, { month: "Jun", value: 88 },
    { month: "Jul", value: 95 }, { month: "Aug", value: 105 },
  ];
  const maxRev = Math.max(...monthlyRevenue.map(m => m.value));

  const resourceAllocation = [
    { category: 'Frontend', percentage: 35, color: '#f59e0b' },
    { category: 'Backend', percentage: 30, color: '#3b82f6' },
    { category: 'DevOps', percentage: 20, color: '#10b981' },
    { category: 'QA', percentage: 15, color: '#ef4444' }
  ];

  // Projects Data
  const recentProjects = [
    { 
      name: 'FinTech Dashboard', 
      client: 'BankCorp', 
      budget: '$120k', 
      progress: 85, 
      stack: 'React/Node',
      team: 'Frontend Team',
      deadline: '2024-03-15'
    },
    { 
      name: 'E-Commerce Platform', 
      client: 'ShopifyPlus', 
      budget: '$85k', 
      progress: 42, 
      stack: 'MERN Stack',
      team: 'Full Stack Team',
      deadline: '2024-04-20'
    },
    { 
      name: 'AI Integration', 
      client: 'TechSoft', 
      budget: '$200k', 
      progress: 15, 
      stack: 'Python/TensorFlow',
      team: 'AI Team',
      deadline: '2024-06-30'
    }
  ];

  // Dev Team Data
  const devTeamData = [
    { name: 'Sarah Chen', role: 'Frontend Lead', avatar: 'F', productivity: 92, projects: 6, status: 'active' },
    { name: 'Marcus Johnson', role: 'Backend Architect', avatar: 'M', productivity: 88, projects: 4, status: 'active' },
    { name: 'Elena Rodriguez', role: 'DevOps Engineer', avatar: 'E', productivity: 95, projects: 8, status: 'active' },
    { name: 'David Kim', role: 'QA Specialist', avatar: 'D', productivity: 78, projects: 3, status: 'meeting' }
  ];

  // Security Data
  const securityData = [
    { threat: 'SQL Injection', severity: 'High', status: 'Blocked', attempts: 12, timestamp: '2 hours ago' },
    { threat: 'XSS Attack', severity: 'Medium', status: 'Blocked', attempts: 8, timestamp: '5 hours ago' },
    { threat: 'DDoS Attempt', severity: 'Critical', status: 'Mitigated', attempts: 3, timestamp: '1 hour ago' },
    { threat: 'Brute Force', severity: 'Low', status: 'Blocked', attempts: 45, timestamp: 'Yesterday' }
  ];

  // Deployment Data
  const deploymentData = [
    { env: 'Production', version: 'v2.1.0', status: 'Success', time: '2 hours ago', commit: 'a1b2c3d' },
    { env: 'Staging', version: 'v2.2.0-rc1', status: 'Pending', time: '5 hours ago', commit: 'e4f5g6h' },
    { env: 'Development', version: 'v2.2.0-dev', status: 'Success', time: '1 day ago', commit: 'i7j8k9l' },
    { env: 'Testing', version: 'v2.1.1', status: 'Failed', time: '2 days ago', commit: 'm1n2o3p' }
  ];

  // Analytics Data
  const analyticsData = [
    { metric: 'API Response Time', value: '142ms', trend: 'down', change: '-12ms', chart: [65, 59, 80, 81, 56, 55, 40] },
    { metric: 'Error Rate', value: '0.8%', trend: 'down', change: '-0.3%', chart: [28, 48, 40, 19, 86, 27, 90] },
    { metric: 'User Sessions', value: '12.4k', trend: 'up', change: '+1.2k', chart: [12, 19, 3, 5, 2, 3, 15] },
    { metric: 'Data Processed', value: '2.1TB', trend: 'up', change: '+450GB', chart: [45, 25, 36, 18, 29, 42, 38] }
  ];

  // Team Performance Data
  const teamPerformance = [
    { team: 'Frontend', velocity: 85, quality: 92, collaboration: 88 },
    { team: 'Backend', velocity: 78, quality: 95, collaboration: 82 },
    { team: 'DevOps', velocity: 92, quality: 88, collaboration: 95 },
    { team: 'QA', velocity: 75, quality: 96, collaboration: 79 }
  ];

  /* --- RENDER FUNCTIONS --- */

  const renderOverview = () => (
    <div className={`${Style.sectionContent} ${Style.fadeIn}`}>
      <div className={Style.welcomeBanner}>
        <div className={Style.welcomeText}>
          <h2>QuantumFlow Command Center</h2>
          <p>Advanced system metrics, project velocities, and infrastructure health monitoring</p>
        </div>
        <div className={Style.quickActions}>
          <button className={Style.actionBtnPrimary} onClick={() => navigate('/Error')}>
            <span>🚀</span> New Deployment
          </button>
          <button className={Style.actionBtn} onClick={() => navigate('/Error')}>
            <span>📊</span> Generate Report
          </button>
        </div>
      </div>

      <div className={Style.statsGrid}>
        {statsData.map((stat, index) => (
          <div key={index} className={Style.statCard}>
            <div className={Style.statHeader}>
              <div className={Style.statIcon}>{stat.icon}</div>
              <span className={`${Style.statChange} ${stat.trend === 'up' ? Style.trendUp : Style.trendDown}`}>
                {stat.change}
              </span>
            </div>
            <h3>
              <CountUp start={0} end={stat.value} duration={2.5} decimals={Number.isInteger(stat.value) ? 0 : 1} prefix={stat.prefix} suffix={stat.suffix} />
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className={Style.chartsSection}>
        <div className={Style.chartCard}>
          <div className={Style.chartHeader}>
            <div>
              <h3>Revenue Velocity</h3>
              <span className={Style.chartSubtitle}>Year-to-Date Performance (k USD)</span>
            </div>
            <button className={Style.chartBtn} onClick={() => navigate('/Error')}>View Details</button>
          </div>
          <div className={Style.barChartContainer}>
            {monthlyRevenue.map((data, index) => (
              <div key={index} className={Style.barGroup}>
                <div 
                  className={Style.bar} 
                  style={{ height: `${(data.value / maxRev) * 100}%`, animationDelay: `${index * 0.1}s` }}
                >
                  <span className={Style.barTooltip}>${data.value}k</span>
                </div>
                <span className={Style.barLabel}>{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.chartCard}>
          <div className={Style.chartHeader}>
            <h3>Resource Allocation</h3>
          </div>
          <div className={Style.donutChartContainer}>
            <div className={Style.donutChart}>
              {resourceAllocation.map((item, index) => (
                <div 
                  key={index}
                  className={Style.donutSegment}
                  style={{ 
                    '--percentage': item.percentage,
                    '--color': item.color,
                    '--offset': resourceAllocation.slice(0, index).reduce((a, b) => a + b.percentage, 0)
                  }}
                ></div>
              ))}
              <div className={Style.donutCenter}>
                <span>Total Devs</span>
                <strong>120</strong>
              </div>
            </div>
            <div className={Style.legend}>
              {resourceAllocation.map((item, index) => (
                <div key={index} className={Style.legendItem}>
                  <span className={Style.legendColor} style={{ backgroundColor: item.color }}></span>
                  <span>{item.category} ({item.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={Style.gridTwoColumn}>
        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Infrastructure Health</h3>
            <span className={Style.liveIndicator}>● Live</span>
          </div>
          <div className={Style.listContainer}>
            {serverData.map((server, index) => (
              <div key={index} className={Style.listItem}>
                <div className={Style.serverIcon}>🖥️</div>
                <div className={Style.itemInfo}>
                  <span className={Style.itemName}>{server.name}</span>
                  <span className={Style.itemSub}>{server.region} • {server.status}</span>
                </div>
                <div className={Style.itemMeta}>
                  <div className={Style.loadBar}>
                    <div 
                      className={Style.loadFill} 
                      style={{ 
                        width: `${server.load}%`,
                        backgroundColor: server.load > 70 ? '#ef4444' : server.load > 40 ? '#f59e0b' : '#10b981'
                      }}
                    ></div>
                  </div>
                  <span className={Style.itemStatus}>{server.load}% Load</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Active Projects</h3>
            <button className={Style.smallBtn} onClick={() => navigate('/Error')}>View All</button>
          </div>
          <div className={Style.listContainer}>
            {recentProjects.map((project, index) => (
              <div key={index} className={Style.listItem}>
                <div className={Style.projectAvatar} style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }}>
                  {project.name.charAt(0)}
                </div>
                <div className={Style.itemInfo}>
                  <span className={Style.itemName}>{project.name}</span>
                  <span className={Style.itemSub}>{project.client} • {project.stack}</span>
                </div>
                <div className={Style.circularProgress}>
                   <svg viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#334155" strokeWidth="3" />
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray={`${project.progress}, 100`} />
                   </svg>
                   <span>{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveProjects = () => (
    <div className={`${Style.sectionContent} ${Style.fadeIn}`}>
      <div className={Style.welcomeBanner}>
        <div className={Style.welcomeText}>
          <h2>Active Projects Management</h2>
          <p>Monitor ongoing development projects and their progress metrics</p>
        </div>
        <div className={Style.quickActions}>
          <button className={Style.actionBtnPrimary} onClick={() => navigate('/Error')}>
            <span>➕</span> New Project
          </button>
          <button className={Style.actionBtn} onClick={() => navigate('/Error')}>
            <span>📋</span> Project Templates
          </button>
        </div>
      </div>
      
      <div className={Style.statsGrid}>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>📊</div>
            <span className={`${Style.statChange} ${Style.trendUp}`}>+3</span>
          </div>
          <h3>12</h3>
          <p>Active Projects</p>
        </div>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>⏱️</div>
            <span className={`${Style.statChange} ${Style.trendDown}`}>-2</span>
          </div>
          <h3>47%</h3>
          <p>Average Progress</p>
        </div>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>💰</div>
            <span className={`${Style.statChange} ${Style.trendUp}`}>+18%</span>
          </div>
          <h3>$405K</h3>
          <p>Total Budget</p>
        </div>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>👥</div>
            <span className={`${Style.statChange} ${Style.trendStable}`}>0</span>
          </div>
          <h3>24</h3>
          <p>Team Members</p>
        </div>
      </div>

      <div className={Style.chartsSection}>
        <div className={Style.chartCard}>
           <div className={Style.chartHeader}>
             <h3>Project Timelines</h3>
             <span className={Style.chartSubtitle}>Current sprint progress and deadlines</span>
           </div>
           <div className={Style.ganttChart}>
            {recentProjects.map((project, index) => (
              <div key={index} className={Style.ganttRow}>
                <div className={Style.ganttInfo}>
                   <span className={Style.ganttLabel}>{project.name}</span>
                   <span className={Style.ganttMeta}>{project.team} • Due: {project.deadline}</span>
                </div>
                <div className={Style.ganttBarContainer}>
                  <div className={Style.ganttBar}>
                    <div className={Style.ganttProgress} style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
                <span className={Style.ganttPercent}>{project.progress}%</span>
              </div>
            ))}
           </div>
        </div>

        <div className={Style.chartCard}>
          <div className={Style.chartHeader}>
            <h3>Budget Allocation</h3>
          </div>
          <div className={Style.treeMap}>
            {recentProjects.map((project, index) => (
              <div 
                key={index}
                className={Style.treeItem}
                style={{ 
                  flex: parseInt(project.budget.replace('$', '').replace('k', '')),
                  backgroundColor: `hsl(${index * 90}, 70%, 50%)`
                }}
              >
                <span className={Style.treeLabel}>{project.name}</span>
                <span className={Style.treeValue}>{project.budget}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.imageStrip}>
        <div className={Style.imageCard}>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
            alt="Team collaboration" 
            loading="lazy"
          />
          <div className={Style.imageOverlay}>
            <span>Team Collaboration</span>
          </div>
        </div>
        <div className={Style.imageCard}>
          <img 
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" 
            alt="Code planning" 
            loading="lazy"
          />
          <div className={Style.imageOverlay}>
            <span>Code Planning</span>
          </div>
        </div>
        <div className={Style.imageCard}>
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80" 
            alt="System architecture" 
            loading="lazy"
          />
          <div className={Style.imageOverlay}>
            <span>System Architecture</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServerStatus = () => (
    <div className={`${Style.sectionContent} ${Style.fadeIn}`}>
      <div className={Style.welcomeBanner}>
        <div className={Style.welcomeText}>
          <h2>Server Infrastructure</h2>
          <p>Real-time server monitoring and performance metrics</p>
        </div>
        <button 
          className={`${Style.actionBtn} ${isRefreshing ? Style.spinning : ''}`} 
          onClick={handleRefresh}
          disabled={isRefreshing}
        >
          <span>🔄</span> {isRefreshing ? 'Refreshing...' : 'Refresh Status'}
        </button>
      </div>

      <div className={Style.statsGrid}>
        {serverData.map((server, index) => (
          <div key={index} className={Style.statCard}>
            <div className={Style.statHeader}>
              <div className={Style.statIcon}>🖥️</div>
              <span className={`${Style.statChange} ${
                server.load > 70 ? Style.trendDown : 
                server.load < 30 ? Style.trendUp : Style.trendStable
              }`}>
                {server.status}
              </span>
            </div>
            <h3>
                <CountUp start={0} end={server.load} duration={1} />%
            </h3>
            <p>{server.name}</p>
            <div className={Style.heapStructure}>
              <div 
                className={Style.heapBar} 
                style={{
                    height: `${server.load}%`,
                    background: server.load > 80 ? 'linear-gradient(to top, #ef4444, #b91c1c)' : 
                               server.load > 60 ? 'linear-gradient(to top, #f59e0b, #d97706)' : 
                               'linear-gradient(to top, #10b981, #059669)'
                }}
              ></div>
            </div>
            <div className={Style.serverDetails}>
                <small>{server.region} • {server.trend}</small>
            </div>
          </div>
        ))}
      </div>

      <div className={Style.gridTwoColumn}>
        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Server Performance</h3>
            <span className={Style.liveIndicator}>● Live Metrics</span>
          </div>
          <div className={Style.performanceChart}>
            {serverData.map((server, index) => (
              <div key={index} className={Style.performanceRow}>
                <span className={Style.performanceLabel}>{server.name}</span>
                <div className={Style.performanceBar}>
                  <div 
                    className={Style.performanceFill}
                    style={{ width: `${server.load}%` }}
                  ></div>
                </div>
                <span className={Style.performanceValue}>{server.load}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Resource Utilization</h3>
          </div>
          <div className={Style.utilizationGrid}>
            <div className={Style.utilizationItem}>
              <span className={Style.utilLabel}>CPU Usage</span>
              <div className={Style.utilBar}>
                <div className={Style.utilFill} style={{ width: '65%' }}></div>
              </div>
              <span className={Style.utilValue}>65%</span>
            </div>
            <div className={Style.utilizationItem}>
              <span className={Style.utilLabel}>Memory</span>
              <div className={Style.utilBar}>
                <div className={Style.utilFill} style={{ width: '42%' }}></div>
              </div>
              <span className={Style.utilValue}>42%</span>
            </div>
            <div className={Style.utilizationItem}>
              <span className={Style.utilLabel}>Storage</span>
              <div className={Style.utilBar}>
                <div className={Style.utilFill} style={{ width: '78%' }}></div>
              </div>
              <span className={Style.utilValue}>78%</span>
            </div>
            <div className={Style.utilizationItem}>
              <span className={Style.utilLabel}>Network I/O</span>
              <div className={Style.utilBar}>
                <div className={Style.utilFill} style={{ width: '35%' }}></div>
              </div>
              <span className={Style.utilValue}>35%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDevTeam = () => (
    <div className={`${Style.sectionContent} ${Style.fadeIn}`}>
      <div className={Style.welcomeBanner}>
        <div className={Style.welcomeText}>
          <h2>Development Team</h2>
          <p>Team performance metrics and resource distribution</p>
        </div>
        <div className={Style.quickActions}>
          <button className={Style.actionBtnPrimary} onClick={() => navigate('/Error')}>
            <span>👥</span> Manage Team
          </button>
          <button className={Style.actionBtn} onClick={() => navigate('/Error')}>
            <span>📅</span> Schedule Meeting
          </button>
        </div>
      </div>

      <div className={Style.statsGrid}>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>🚀</div>
            <span className={`${Style.statChange} ${Style.trendUp}`}>+8%</span>
          </div>
          <h3>87%</h3>
          <p>Team Velocity</p>
        </div>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>⭐</div>
            <span className={`${Style.statChange} ${Style.trendUp}`}>+5%</span>
          </div>
          <h3>92%</h3>
          <p>Code Quality</p>
        </div>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>🤝</div>
            <span className={`${Style.statChange} ${Style.trendStable}`}>0%</span>
          </div>
          <h3>85%</h3>
          <p>Collaboration</p>
        </div>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>✅</div>
            <span className={`${Style.statChange} ${Style.trendUp}`}>+12%</span>
          </div>
          <h3>94%</h3>
          <p>Task Completion</p>
        </div>
      </div>

      <div className={Style.chartsSection}>
        <div className={Style.chartCard}>
          <div className={Style.chartHeader}>
            <h3>Team Performance Matrix</h3>
          </div>
          <div className={Style.xyGraph}>
            {teamPerformance.map((team, index) => (
              <div 
                key={index}
                className={Style.xyPoint}
                style={{
                  left: `${team.velocity}%`,
                  bottom: `${team.quality}%`,
                  backgroundColor: `hsl(${index * 90}, 70%, 50%)`
                }}
              >
                <div className={Style.xyTooltip}>
                  {team.team}: {team.velocity}% Velocity, {team.quality}% Quality
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.chartCard}>
          <div className={Style.chartHeader}>
            <h3>Team Structure</h3>
          </div>
          <div className={Style.orgTree}>
            <div className={Style.treeNode}>
              <span className={Style.nodeLabel}>CTO - Alex Morgan</span>
              <div className={Style.treeChildren}>
                {devTeamData.map((member, index) => (
                  <div key={index} className={Style.treeNode}>
                    <div className={Style.memberNode}>
                      <div className={Style.memberAvatar}>{member.avatar}</div>
                      <div className={Style.memberInfo}>
                        <span className={Style.memberName}>{member.name}</span>
                        <span className={Style.memberRole}>{member.role}</span>
                      </div>
                      <div className={Style.memberStats}>
                        <span className={Style.memberProductivity}>{member.productivity}%</span>
                        <span className={Style.memberProjects}>{member.projects} projects</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.gridTwoColumn}>
        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Team Members</h3>
            <span className={Style.liveIndicator}>● Active</span>
          </div>
          <div className={Style.teamList}>
            {devTeamData.map((member, index) => (
              <div key={index} className={Style.teamMember}>
                <div className={Style.memberMain}>
                  <div className={Style.memberAvatar} style={{ backgroundColor: `hsl(${index * 90}, 70%, 50%)` }}>
                    {member.avatar}
                  </div>
                  <div className={Style.memberDetails}>
                    <span className={Style.memberName}>{member.name}</span>
                    <span className={Style.memberRole}>{member.role}</span>
                  </div>
                  <div className={`${Style.memberStatus} ${member.status === 'active' ? Style.statusActive : Style.statusAway}`}>
                    {member.status === 'active' ? '●' : '○'}
                  </div>
                </div>
                <div className={Style.memberMetrics}>
                  <div className={Style.metric}>
                    <span>Productivity</span>
                    <div className={Style.metricBar}>
                      <div className={Style.metricFill} style={{ width: `${member.productivity}%` }}></div>
                    </div>
                    <span>{member.productivity}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Skill Distribution</h3>
          </div>
          <div className={Style.skillsGrid}>
            <div className={Style.skillItem}>
              <span className={Style.skillName}>React</span>
              <div className={Style.skillBar}>
                <div className={Style.skillFill} style={{ width: '85%' }}></div>
              </div>
              <span className={Style.skillValue}>85%</span>
            </div>
            <div className={Style.skillItem}>
              <span className={Style.skillName}>Node.js</span>
              <div className={Style.skillBar}>
                <div className={Style.skillFill} style={{ width: '78%' }}></div>
              </div>
              <span className={Style.skillValue}>78%</span>
            </div>
            <div className={Style.skillItem}>
              <span className={Style.skillName}>Python</span>
              <div className={Style.skillBar}>
                <div className={Style.skillFill} style={{ width: '65%' }}></div>
              </div>
              <span className={Style.skillValue}>65%</span>
            </div>
            <div className={Style.skillItem}>
              <span className={Style.skillName}>AWS</span>
              <div className={Style.skillBar}>
                <div className={Style.skillFill} style={{ width: '72%' }}></div>
              </div>
              <span className={Style.skillValue}>72%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className={`${Style.sectionContent} ${Style.fadeIn}`}>
      <div className={Style.welcomeBanner}>
        <div className={Style.welcomeText}>
          <h2>Security Center</h2>
          <p>Threat monitoring and security incident reports</p>
        </div>
        <div className={Style.quickActions}>
          <button className={Style.actionBtnPrimary} onClick={() => navigate('/Error')}>
            <span>🛡️</span> Run Security Scan
          </button>
          <button className={Style.actionBtn} onClick={() => navigate('/Error')}>
            <span>📋</span> Security Policy
          </button>
        </div>
      </div>

      <div className={Style.statsGrid}>
        {securityData.map((threat, index) => (
          <div key={index} className={Style.statCard}>
            <div className={Style.statHeader}>
              <div className={Style.statIcon}>⚠️</div>
              <span className={`${Style.statChange} ${
                threat.severity === 'Critical' ? Style.trendDown : 
                threat.severity === 'High' ? Style.trendStable : Style.trendUp
              }`}>
                {threat.severity}
              </span>
            </div>
            <h3>{threat.attempts}</h3>
            <p>{threat.threat}</p>
            <div className={Style.securityGraph}>
              <div className={Style.threatBar} style={{width: `${threat.attempts * 2}%`}}></div>
            </div>
            <div className={Style.threatTime}>{threat.timestamp}</div>
          </div>
        ))}
      </div>

      <div className={Style.gridTwoColumn}>
        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Security Events</h3>
            <span className={Style.liveIndicator}>● Real-time</span>
          </div>
          <div className={Style.securityEvents}>
            {securityData.map((event, index) => (
              <div key={index} className={Style.securityEvent}>
                <div className={Style.eventSeverity} data-severity={event.severity.toLowerCase()}></div>
                <div className={Style.eventDetails}>
                  <span className={Style.eventTitle}>{event.threat}</span>
                  <span className={Style.eventInfo}>{event.status} • {event.attempts} attempts</span>
                </div>
                <div className={Style.eventTime}>{event.timestamp}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Security Metrics</h3>
          </div>
          <div className={Style.securityMetrics}>
            <div className={Style.securityMetric}>
              <span className={Style.metricLabel}>Firewall Blocks</span>
              <span className={Style.metricValue}>1,247</span>
              <span className={Style.metricChange}>+12%</span>
            </div>
            <div className={Style.securityMetric}>
              <span className={Style.metricLabel}>Malware Detected</span>
              <span className={Style.metricValue}>23</span>
              <span className={Style.metricChange}>-5%</span>
            </div>
            <div className={Style.securityMetric}>
              <span className={Style.metricLabel}>VPN Connections</span>
              <span className={Style.metricValue}>156</span>
              <span className={Style.metricChange}>+8%</span>
            </div>
            <div className={Style.securityMetric}>
              <span className={Style.metricLabel}>Security Score</span>
              <span className={Style.metricValue}>94/100</span>
              <span className={Style.metricChange}>+2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDeployments = () => (
    <div className={`${Style.sectionContent} ${Style.fadeIn}`}>
      <div className={Style.welcomeBanner}>
        <div className={Style.welcomeText}>
          <h2>Deployment Pipeline</h2>
          <p>CI/CD pipeline status and deployment history</p>
        </div>
        <div className={Style.quickActions}>
          <button className={Style.actionBtnPrimary} onClick={() => navigate('/Error')}>
            <span>🚀</span> Deploy Now
          </button>
          <button className={Style.actionBtn} onClick={() => navigate('/Error')}>
            <span>⚙️</span> Pipeline Settings
          </button>
        </div>
      </div>

      <div className={Style.statsGrid}>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>✅</div>
            <span className={`${Style.statChange} ${Style.trendUp}`}>+5%</span>
          </div>
          <h3>87%</h3>
          <p>Success Rate</p>
        </div>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>⏱️</div>
            <span className={`${Style.statChange} ${Style.trendDown}`}>-12s</span>
          </div>
          <h3>3.2m</h3>
          <p>Avg. Build Time</p>
        </div>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>📦</div>
            <span className={`${Style.statChange} ${Style.trendUp}`}>+8</span>
          </div>
          <h3>42</h3>
          <p>This Week</p>
        </div>
        <div className={Style.statCard}>
          <div className={Style.statHeader}>
            <div className={Style.statIcon}>🔧</div>
            <span className={`${Style.statChange} ${Style.trendStable}`}>0</span>
          </div>
          <h3>3</h3>
          <p>Active Pipelines</p>
        </div>
      </div>

      <div className={Style.deploymentFlow}>
        {deploymentData.map((deploy, index) => (
          <div key={index} className={Style.deployStep}>
            <div className={`${Style.deployCircle} ${
              deploy.status === 'Success' ? Style.deploySuccess :
              deploy.status === 'Failed' ? Style.deployFailed : Style.deployPending
            }`}>
              {index + 1}
            </div>
            <div className={Style.deployInfo}>
              <span className={Style.deployEnv}>{deploy.env}</span>
              <span className={Style.deployVersion}>{deploy.version}</span>
              <span className={Style.deployCommit}>{deploy.commit}</span>
            </div>
            <div className={Style.deployTime}>{deploy.time}</div>
            <div className={`${Style.deployStatus} ${
              deploy.status === 'Success' ? Style.statusSuccess :
              deploy.status === 'Failed' ? Style.statusFailed : Style.statusPending
            }`}>
              {deploy.status}
            </div>
          </div>
        ))}
      </div>

      <div className={Style.gridTwoColumn}>
        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Recent Deployments</h3>
          </div>
          <div className={Style.deploymentList}>
            {deploymentData.map((deploy, index) => (
              <div key={index} className={Style.deploymentItem}>
                <div className={Style.deployIcon}>
                  {deploy.status === 'Success' ? '✅' : deploy.status === 'Failed' ? '❌' : '⏳'}
                </div>
                <div className={Style.deployDetails}>
                  <span className={Style.deployTitle}>{deploy.env} Environment</span>
                  <span className={Style.deploySub}>{deploy.version} • {deploy.commit}</span>
                </div>
                <div className={Style.deployMeta}>
                  <span className={Style.deployTime}>{deploy.time}</span>
                  <span className={`${Style.deployStatus} ${
                    deploy.status === 'Success' ? Style.statusSuccess :
                    deploy.status === 'Failed' ? Style.statusFailed : Style.statusPending
                  }`}>
                    {deploy.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Deployment Metrics</h3>
          </div>
          <div className={Style.deploymentMetrics}>
            <div className={Style.deployMetric}>
              <span className={Style.metricLabel}>Build Success</span>
              <div className={Style.metricBar}>
                <div className={Style.metricFill} style={{ width: '87%' }}></div>
              </div>
              <span className={Style.metricValue}>87%</span>
            </div>
            <div className={Style.deployMetric}>
              <span className={Style.metricLabel}>Test Coverage</span>
              <div className={Style.metricBar}>
                <div className={Style.metricFill} style={{ width: '92%' }}></div>
              </div>
              <span className={Style.metricValue}>92%</span>
            </div>
            <div className={Style.deployMetric}>
              <span className={Style.metricLabel}>Deployment Time</span>
              <div className={Style.metricBar}>
                <div className={Style.metricFill} style={{ width: '65%' }}></div>
              </div>
              <span className={Style.metricValue}>3.2m</span>
            </div>
            <div className={Style.deployMetric}>
              <span className={Style.metricLabel}>Rollback Rate</span>
              <div className={Style.metricBar}>
                <div className={Style.metricFill} style={{ width: '8%' }}></div>
              </div>
              <span className={Style.metricValue}>8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className={`${Style.sectionContent} ${Style.fadeIn}`}>
      <div className={Style.welcomeBanner}>
        <div className={Style.welcomeText}>
          <h2>Advanced Analytics</h2>
          <p>Comprehensive data analysis and performance insights</p>
        </div>
        <div className={Style.quickActions}>
          <button className={Style.actionBtnPrimary} onClick={() => navigate('/Error')}>
            <span>📊</span> Export Report
          </button>
          <button className={Style.actionBtn} onClick={() => navigate('/Error')}>
            <span>🔄</span> Refresh Data
          </button>
        </div>
      </div>

      <div className={Style.statsGrid}>
        {analyticsData.map((metric, index) => (
          <div key={index} className={Style.statCard}>
            <div className={Style.statHeader}>
              <div className={Style.statIcon}>📈</div>
              <span className={`${Style.statChange} ${
                metric.trend === 'up' ? Style.trendUp : Style.trendDown
              }`}>
                {metric.change}
              </span>
            </div>
            <h3>{metric.value}</h3>
            <p>{metric.metric}</p>
            <div className={Style.sparkLine}>
              {metric.chart.map((point, i) => (
                <div 
                  key={i}
                  className={Style.sparkPoint}
                  style={{height: `${point}%`}}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={Style.chartsSection}>
        <div className={Style.chartCard}>
          <div className={Style.chartHeader}>
            <h3>Performance Trends</h3>
            <span className={Style.chartSubtitle}>Last 7 days overview</span>
          </div>
          <div className={Style.trendChart}>
            {analyticsData.map((metric, index) => (
              <div key={index} className={Style.trendLine}>
                <span className={Style.trendLabel}>{metric.metric}</span>
                <div className={Style.trendPoints}>
                  {metric.chart.map((point, i) => (
                    <div 
                      key={i}
                      className={Style.trendPoint}
                      style={{ height: `${point}%` }}
                    ></div>
                  ))}
                </div>
                <span className={Style.trendValue}>{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.chartCard}>
          <div className={Style.chartHeader}>
            <h3>Data Distribution</h3>
          </div>
          <div className={Style.distributionChart}>
            {analyticsData.map((metric, index) => (
              <div key={index} className={Style.distributionItem}>
                <span className={Style.distLabel}>{metric.metric}</span>
                <div className={Style.distBar}>
                  <div 
                    className={Style.distFill}
                    style={{ 
                      width: `${metric.chart.reduce((a, b) => a + b, 0) / metric.chart.length}%`,
                      backgroundColor: `hsl(${index * 90}, 70%, 50%)`
                    }}
                  ></div>
                </div>
                <span className={Style.distValue}>{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.gridTwoColumn}>
        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Key Performance Indicators</h3>
          </div>
          <div className={Style.kpiGrid}>
            <div className={Style.kpiItem}>
              <span className={Style.kpiLabel}>User Satisfaction</span>
              <span className={Style.kpiValue}>4.8/5</span>
              <span className={Style.kpiChange}>+0.2</span>
            </div>
            <div className={Style.kpiItem}>
              <span className={Style.kpiLabel}>System Reliability</span>
              <span className={Style.kpiValue}>99.95%</span>
              <span className={Style.kpiChange}>+0.05%</span>
            </div>
            <div className={Style.kpiItem}>
              <span className={Style.kpiLabel}>Data Accuracy</span>
              <span className={Style.kpiValue}>98.7%</span>
              <span className={Style.kpiChange}>+1.2%</span>
            </div>
            <div className={Style.kpiItem}>
              <span className={Style.kpiLabel}>Query Performance</span>
              <span className={Style.kpiValue}>142ms</span>
              <span className={Style.kpiChange}>-12ms</span>
            </div>
          </div>
        </div>

        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Analytics Overview</h3>
          </div>
          <div className={Style.analyticsSummary}>
            <div className={Style.summaryItem}>
              <span className={Style.summaryLabel}>Total Data Points</span>
              <span className={Style.summaryValue}>2.4M</span>
            </div>
            <div className={Style.summaryItem}>
              <span className={Style.summaryLabel}>Reports Generated</span>
              <span className={Style.summaryValue}>156</span>
            </div>
            <div className={Style.summaryItem}>
              <span className={Style.summaryLabel}>Active Dashboards</span>
              <span className={Style.summaryValue}>12</span>
            </div>
            <div className={Style.summaryItem}>
              <span className={Style.summaryLabel}>Data Sources</span>
              <span className={Style.summaryValue}>8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSectionContent = () => {
    switch(activeSection) {
      case 'overview': return renderOverview();
      case 'projects': return renderActiveProjects();
      case 'servers': return renderServerStatus();
      case 'team': return renderDevTeam();
      case 'security': return renderSecurity();
      case 'deployment': return renderDeployments();
      case 'analytics': return renderAnalytics();
      default: return renderOverview();
    }
  };

  return (
    <>
      <Header />
      <div className={Style.dashboardWrapper}>
        <aside className={Style.sidebar}>
          <div className={Style.sidebarHeader}>
            <div className={Style.logo}>
              <span className={Style.logoIcon}>⚡</span>
              <h2>QuantumFlow</h2>
            </div>
          </div>
          
          <div className={Style.userProfile}>
              <div className={Style.userAvatar}>AM</div>
              <div className={Style.userInfo}>
                  <span>Alex Morgan</span>
                  <small>Lead Architect</small>
              </div>
          </div>

          <nav className={Style.sidebarNav}>
            <ul>
              {menuItems.map((item) => (
                <li 
                  key={item.id}
                  className={`${Style.navItem} ${activeSection === item.id ? Style.active : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <span className={Style.navIcon}>{item.icon}</span>
                  <span className={Style.navLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
          </nav>

          <div className={Style.sidebarFooter}>
            <div className={Style.techPanel}>
              <span>System Status</span>
              <div className={Style.statusDot}>
                <span className={Style.dot}></span>
                Operational
              </div>
            </div>
          </div>
        </aside>

        <main className={Style.mainContent}>
          {loading ? (
             <div className={Style.loaderContainer}>
               <div className={Style.spinner}></div>
               <p>Loading Dashboard...</p>
             </div>
          ) : (
             renderSectionContent()
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;