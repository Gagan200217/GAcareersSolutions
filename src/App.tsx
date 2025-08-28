import React, { useState } from 'react';
import { 
  Home, 
  Briefcase, 
  Phone, 
  Info, 
  Search, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Users, 
  Building2,
  MessageCircle,
  Menu,
  X,
  Clock,
  ExternalLink
} from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  experience: string;
  type: 'government' | 'private';
  postedDate: string;
  deadline: string;
  description: string;
  requirements: string[];
  applyLink: string; 
}

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedJobType, setSelectedJobType] = useState<'government' | 'private' | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const jobs: Job[] = [
  {
      id: 1,
      title: "SBI CLERK Recruitment",
      company: "SBI",
      location: "Mumbai, Maharastra",
      salary: "₹45000",
      experience: "0 years",
      type: "private",
      postedDate: "2025-08-25",
      deadline: "2025-08-26",
      description: "The State Bank of India (SBI) has announced its much-awaited SBI Clerk Recruitment 2025, inviting applications for the post of Junior Associate (Customer Support & Sales). This is a significant opportunity for graduates looking to build a career in the banking sector. With 5583 vacancies across the country, this recruitment drive offers a stable and well-paying government job. The starting salary for a Junior Associate in a metro city like Mumbai is approximately ₹46,000 per month, inclusive of all allowances. The application window is open from August 6, 2025, to August 26, 2025..",
      requirements: ["N/A"],
      applyLink: "https://ibpsonline.ibps.in/sbijajul25/"
    },

    {
      id: 2,
      title: "𝗥𝗼𝗰𝗸𝘄𝗲𝗹𝗹 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗼𝗻 𝗢𝗳𝗳 𝗖𝗮𝗺𝗽𝘂𝘀 𝗗𝗿𝗶𝘃𝗲",
      company: "𝗥𝗼𝗰𝗸𝘄𝗲𝗹𝗹 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗼𝗻",
      location: "karnataka , Bangalore",
      salary: "₹4 – 6 LPA (Expected)",
      experience: "N/A",
      type: "private",
      postedDate: "2025-08-28",
      deadline: "August 31, 2025",
      description: "Rockwell Automation is a global technology leader focused on helping the world’s manufacturers be more productive, sustainable, and agile. With more than 28,000 employees who make the world better every day, we know we have something special. Behind our customers - amazing companies that help feed the world, provide life-saving medicine on a global scale, and focus on clean water and green mobility - our people are energized problem solvers that take pride in how the work we do changes the world for the better.We welcome all makers, forward thinkers, and problem solvers who are looking for a place to do their best work. And if that’s you we would love to have you join us!.",
      requirements: ["N/A"],
      applyLink: "https://rockwellautomation.wd1.myworkdayjobs.com/en-US/External_Rockwell_Automation/job/Bangalore-India/Graduate-Engineer-Trainee--Testing_R25-1633?codes=IND"
    },
    {
      id: 3,
      title: "ONGC Recruitment 2025",
      company: "Oil & Natural Gas Corporation (ONGC)",
      location: "Goa",
      salary: "₹₹7,50,000/-",
      experience: "N/A",
      type: "private",
      postedDate: "2025-09-10",
      deadline: "2025-10-20",
      description: "10th Pass, Graduate Pass….. Recruitment of posts in the Indian Space Research Organisation (ISRO) 2025.As per the Oil and Natural Gas Corporation (ONGC) recruitment notification, the candidate must have completed a Postgraduate degree from any recognized university..",
      requirements: ["N/A"],
      applyLink: "https://ongcindia.com/web/eng/detail?assetEntry=76183723&assetClassPK=76183718"
    },
    {
      id: 4,
      title: " Junior Intelligence Officer Grade-II (Technical)",
      company: "Intelligence Bureau Recruitment2025",
      location: "Across India",
      salary: "₹25,500 – ₹81,100/- per month",
      experience: "1-2 years",
      type: "government",
      postedDate: "2025-01-09",
      deadline: "2025-02-",
      description: "Total Vacancies: 394.",
      requirements: ["Candidates must have a degree.Minimum Age: 18 years Maximum Age: 27 years"],
      applyLink: "https://cdn.digialm.com/EForms/configuredHtml/1258/94260/Registration.html"
    },
    {
      id: 5,
      title: "AI & Machine Learning Internship Opportunity (Remote, 45Days - Unpaid)",
      company: "AI & Machine Learning Internship Opportunity (Remote, 45Days - Unpaid)",
      location: "Remote",
      salary: "N/A",
      experience: "Fresher Open to all 1st, 2nd, 3rd, and 4th Year Students, as well as Recent Graduates",
      type: "private",
      postedDate: "N/A",
      deadline: "N/A",
      description: "No  thousands of registration fees, no thousands  joining fees, no course purchases in the name of internship — this is a 100% skill development program with real hands-on experience in AI & ML!.",
      requirements: ["Enthusiasts in AI, ML, Python, Deep Learning, Data Science, or Model Training"],
      applyLink: "https://forms.gle/YLAkbBeUqTRGBKiZA"
    },
    {
      id: 6,
      title: "ಹೆಡ್ ಕಾನ್ಸ್ಟೇಬಲ್ ಹುದ್ದೆಗಳು (1121)",
      company: "BSF ನೇಮಕಾತಿ 2025.",
      location: "Blue Ridge, GA",
      salary: "$45,000 - $55,000",
      experience: "0-2 years",
      type: "government",
      postedDate: "N/A",
      deadline: "N/A",
      description: "10th, ITI, 12th, Diploma,.",
      requirements: ["N/A"],
      applyLink: "https://rectt.bsf.gov.in/registration/basic-details?guid=55c6c141-5288-11f0-8331-0a1dcac2b80f"
    },
    {
      id: 7,
      title: "QA/Test Automation Developer – Pune (IBM ISDL)",
      company: " IBM – India Systems Development Lab (ISDL).",
      location: "Pune, Maharashtra",
      salary: "N/A",
      experience: "0-2 years",
      type: "private",
      postedDate: "N/A",
      deadline: "N/A",
      description: "10th, ITI, 12th, Diploma,.",
      requirements: ["N/A"],
      applyLink: "https://southasiacareers.deloitte.com/job/Pune-Executive-Manual-QA-Testing%2C-Automated-QA-Testing-Pune-TTC-DOMESTIC/42533944/?utm_source=jobscoupe.com"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesType = selectedJobType === 'all' || job.type === selectedJobType;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const governmentJobsCount = jobs.filter(job => job.type === 'government').length;
  const privateJobsCount = jobs.filter(job => job.type === 'private').length;

  const handleWhatsAppClick = () => {
    const phoneNumber = "9481562119"; // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in job opportunities through GACareerSolutions.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const JobCard = ({ job }: { job: Job }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          {job.type === 'government' ? (
            <Building2 className="h-5 w-5 text-blue-600" />
          ) : (
            <Briefcase className="h-5 w-5 text-green-600" />
          )}
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            job.type === 'government' 
              ? 'bg-blue-100 text-blue-700' 
              : 'bg-green-100 text-green-700'
          }`}>
            {job.type === 'government' ? 'Government' : 'Private'}
          </span>
        </div>
        <div className="text-right text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            Posted: {new Date(job.postedDate).toLocaleDateString()}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-3 font-medium">{job.company}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
          <span className="text-sm">{job.salary}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-2 text-gray-400" />
          <span className="text-sm">{job.experience}</span>
        </div>
        <div className="flex items-center text-red-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 text-sm leading-relaxed">{job.description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Requirements:</h4>
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((req, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              {req}
            </span>
          ))}
        </div>
      </div>
      
      {job.applyLink ? (
  <a
    href={String(job.applyLink)}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full block bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-green-700 transition-all duration-300"
  >
    Apply Now
  </a>
) : null}



    </div>
  );

  return (
            <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
              <div className="p-1">
                <img
                  src="/assets/X.png"
                  alt="Logo"
                  className="h-30 w-20 object-contain rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  GACareerSolutions
                </h1>
                <p className="text-xs text-gray-500">
                  Connecting Talent with Opportunities
                </p>
              </div>
            </div>

            
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'jobs', label: 'Job Updates', icon: Briefcase },
                { id: 'about', label: 'About', icon: Info },
                { id: 'contact', label: 'Contact', icon: Phone },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setCurrentSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    currentSection === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'jobs', label: 'Job Updates', icon: Briefcase },
                { id: 'about', label: 'About', icon: Info },
                { id: 'contact', label: 'Contact', icon: Phone },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setCurrentSection(id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md transition-colors ${
                    currentSection === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Home Section */}
      {currentSection === 'home' && (
        <div className="space-y-16 pb-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Connecting Talent with <span className="text-yellow-300">Opportunities</span>
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Your gateway to the best government and private sector jobs in Karnataka. 
                Daily updates, instant connections, endless possibilities.
              </p>
              <button
                onClick={() => setCurrentSection('jobs')}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Opportunities
              </button>
            </div>
          </section>

          {/* Job Categories */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Choose Your Career Path
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore opportunities in both government and private sectors with daily updates
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Government Jobs */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">Government Jobs</h3>
                    <p className="text-blue-600">{governmentJobsCount} active positions</p>
                  </div>
                </div>
                <p className="text-blue-700 mb-6 leading-relaxed">
                  Secure career opportunities in public service with excellent benefits, 
                  job stability, and the chance to make a meaningful impact on your community.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-blue-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Job Security & Stability
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Comprehensive Benefits
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Public Service Impact
                  </li>
                </ul>
                <button
                  onClick={() => {
                    setCurrentSection('jobs');
                    setSelectedJobType('government');
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Government Jobs
                </button>
              </div>

              {/* Private Jobs */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">Private Jobs</h3>
                    <p className="text-green-600">{privateJobsCount} active positions</p>
                  </div>
                </div>
                <p className="text-green-700 mb-6 leading-relaxed">
                  Dynamic career opportunities in the private sector with competitive salaries, 
                  rapid growth potential, and innovative work environments.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Competitive Salaries
                  </li>
                  <li className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Career Growth
                  </li>
                  <li className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Innovation Focus
                  </li>
                </ul>
                <button
                  onClick={() => {
                    setCurrentSection('jobs');
                    setSelectedJobType('private');
                  }}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View Private Jobs
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{jobs.length}+</div>
                  <div className="text-gray-600">Active Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Daily</div>
                  <div className="text-gray-600">Job Updates</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Job Updates Section */}
      {currentSection === 'jobs' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Job Updates</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover your next career opportunity with our daily updated job listings
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search jobs, companies, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedJobType('all')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedJobType === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All Jobs ({jobs.length})
                </button>
                <button
                  onClick={() => setSelectedJobType('government')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedJobType === 'government'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Government ({governmentJobsCount})
                </button>
                <button
                  onClick={() => setSelectedJobType('private')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedJobType === 'private'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Private ({privateJobsCount})
                </button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => <JobCard key={job.id} job={job} />)
            ) : (
              <div className="text-center py-12">
                <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No Jobs Found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* About Section */}
      {currentSection === 'about' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About GACareerSolutions</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your trusted partner in connecting talented individuals with meaningful career opportunities across Karnataka
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                At GACareerSolutions, we believe that everyone deserves access to quality employment opportunities. 
                Our mission is to bridge the gap between job seekers and employers by providing a comprehensive, 
                user-friendly platform that features daily job updates from both government and private sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="bg-blue-600 p-3 rounded-full w-12 h-12 mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-blue-800 mb-3">For Job Seekers</h4>
                <p className="text-blue-700">
                  We provide you with the latest job opportunities, detailed descriptions, and direct 
                  contact methods to help you land your dream job quickly and efficiently.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="bg-green-600 p-3 rounded-full w-12 h-12 mb-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-3">For Employers</h4>
                <p className="text-green-700">
                  Connect with qualified candidates efficiently through our platform and WhatsApp 
                  integration, streamlining your recruitment process.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Daily Updates</h4>
                  <p className="text-blue-100">Fresh job listings updated every day to ensure you never miss an opportunity.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Direct Communication</h4>
                  <p className="text-blue-100">WhatsApp integration for instant communication with our career consultants.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Comprehensive Coverage</h4>
                  <p className="text-blue-100">Both government and private sector opportunities in one convenient location.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {currentSection === 'contact' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to take the next step in your career? We're here to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">+91 9481562119</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <p className="text-gray-600">Quick support & job alerts</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600">Bengaluru, karnataka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Quick Connect</h4>
                <p className="mb-4">Get instant job alerts and career guidance through WhatsApp</p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Start WhatsApp Chat</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">GACareerSolutions</h3>
                  <p className="text-gray-400 text-sm">Connecting Talent with Opportunities</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Your trusted partner for finding the best career opportunities in Karnataka 
                government and private sectors.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Support</span>
              </button>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Job Updates', 'About', 'Contact'].map(link => (
                  <button
                    key={link}
                    onClick={() => setCurrentSection(link.toLowerCase().replace(' ', ''))}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Job Categories</h4>
              <div className="space-y-2">
                <p className="text-gray-300">Government Jobs</p>
                <p className="text-gray-300">Private Jobs</p>
                <p className="text-gray-300">Daily Updates</p>
                <p className="text-gray-300">Career Guidance</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 GACareerSolutions. All rights reserved. Made with ❤️ for job seekers in Karnataka.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
