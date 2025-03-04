"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa"

const roadmaps = {
  "software-developer": {
    title: "Software Developer Roadmap",
    steps: [
      {
        title: "Learn the Basics",
        skills: ["HTML", "CSS", "JavaScript"],
        resources: [
          {
            title: "FreeCodeCamp Web Development Course",
            url: "https://www.freecodecamp.org/learn/responsive-web-design/",
          },
          { title: "The Odin Project", url: "https://www.theodinproject.com/" },
          { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn" },
        ],
        project: "Build a personal portfolio website",
        description:
          "Start by mastering the fundamental technologies of the web. HTML provides structure, CSS adds style, and JavaScript brings interactivity to your web pages.",
      },
      {
        title: "Version Control",
        skills: ["Git", "GitHub"],
        resources: [
          { title: "Git and GitHub for Beginners", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
          { title: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
        ],
        project: "Create a GitHub repository for your portfolio and use Git for version control",
        description:
          "Learn how to track changes in your code, collaborate with others, and manage your projects effectively using Git and GitHub.",
      },
      {
        title: "Frontend Development",
        skills: ["React", "Vue.js", "Angular"],
        resources: [
          { title: "React Official Documentation", url: "https://reactjs.org/docs/getting-started.html" },
          { title: "Vue.js Video Tutorial", url: "https://www.youtube.com/watch?v=4deVCNJq3qc" },
          { title: "Angular Tutorial for Beginners", url: "https://angular.io/tutorial" },
        ],
        project: "Create a todo list application with a frontend framework",
        description:
          "Dive into modern frontend frameworks to build dynamic and responsive user interfaces. Choose one framework to focus on initially, but be aware of the others.",
      },
      {
        title: "Backend Development",
        skills: ["Node.js", "Express.js", "Databases (SQL, NoSQL)"],
        resources: [
          { title: "Node.js Official Documentation", url: "https://nodejs.org/en/docs/" },
          { title: "Express.js Tutorial", url: "https://expressjs.com/en/starter/installing.html" },
          { title: "MongoDB University", url: "https://university.mongodb.com/" },
        ],
        project: "Build a RESTful API for your todo list application",
        description:
          "Learn server-side programming and how to interact with databases. This will allow you to create full-stack applications.",
      },
      {
        title: "API Development",
        skills: ["RESTful APIs", "GraphQL"],
        resources: [
          {
            title: "RESTful API Design - Best Practices",
            url: "https://blog.restcase.com/restful-api-design-13-best-practices-to-make-your-users-happy/",
          },
          { title: "GraphQL Tutorial", url: "https://www.howtographql.com/" },
        ],
        project: "Extend your todo list API to include user authentication",
        description:
          "Understand how to design and implement APIs, which are crucial for allowing different software systems to communicate with each other.",
      },
      {
        title: "Testing",
        skills: ["Unit Testing", "Integration Testing", "Test-Driven Development"],
        resources: [
          { title: "Jest Testing Framework", url: "https://jestjs.io/docs/getting-started" },
          { title: "Mocha JavaScript Test Framework", url: "https://mochajs.org/" },
        ],
        project: "Write tests for your todo list application",
        description:
          "Learn how to write and run tests to ensure your code works as expected and to catch bugs early in the development process.",
      },
      {
        title: "DevOps and Deployment",
        skills: ["Docker", "CI/CD", "Cloud Platforms (AWS, Google Cloud, Azure)"],
        resources: [
          { title: "Docker Crash Course", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
          { title: "GitHub Actions for CI/CD", url: "https://docs.github.com/en/actions" },
          { title: "AWS Free Tier", url: "https://aws.amazon.com/free/" },
        ],
        project: "Containerize your todo list application and set up a CI/CD pipeline",
        description:
          "Explore how to automate the deployment process, ensure consistent environments, and scale your applications effectively.",
      },
      {
        title: "Security",
        skills: ["OWASP Top 10", "Authentication", "Authorization"],
        resources: [
          { title: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/" },
          { title: "Web Security Academy", url: "https://portswigger.net/web-security" },
        ],
        project: "Implement security best practices in your todo list application",
        description:
          "Understand common security vulnerabilities and how to protect against them to build robust and secure applications.",
      },
      {
        title: "Performance Optimization",
        skills: ["Caching", "Lazy Loading", "Code Splitting"],
        resources: [
          { title: "Web Performance Fundamentals", url: "https://web.dev/learn/performance/" },
          {
            title: "Chrome DevTools for Performance",
            url: "https://developers.google.com/web/tools/chrome-devtools/performance",
          },
        ],
        project: "Optimize the performance of your todo list application",
        description:
          "Learn techniques to make your applications faster and more efficient, providing a better user experience.",
      },
      {
        title: "Soft Skills and Career Development",
        skills: ["Communication", "Problem Solving", "Continuous Learning"],
        resources: [
          { title: "The Soft Skills Engineering Podcast", url: "https://softskills.audio/" },
          { title: "How to Contribute to Open Source", url: "https://opensource.guide/how-to-contribute/" },
        ],
        project: "Contribute to an open-source project",
        description:
          "Develop crucial non-technical skills and learn how to collaborate effectively in a team environment.",
      },
    ],
  },
  "data-scientist": {
    title: "Data Scientist Roadmap",
    steps: [
      {
        title: "Learn the Basics of Programming",
        skills: ["Python", "R"],
        resources: [
          {
            title: "Python for Data Science (Coursera)",
            url: "https://www.coursera.org/learn/python-for-applied-data-science-ai",
          },
          { title: "R Programming (Coursera)", url: "https://www.coursera.org/learn/r-programming" },
        ],
        project: "Create a simple data analysis script",
        description:
          "Start by learning a programming language commonly used in data science. Python and R are popular choices due to their extensive libraries for data analysis and machine learning.",
      },
      {
        title: "Mathematics and Statistics Fundamentals",
        skills: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
        resources: [
          {
            title: "Linear Algebra (MIT OpenCourseWare)",
            url: "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/",
          },
          {
            title: "Introduction to Probability and Statistics (MIT OpenCourseWare)",
            url: "https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/",
          },
        ],
        project: "Implement basic statistical analyses on a dataset",
        description:
          "A strong foundation in mathematics and statistics is crucial for understanding machine learning algorithms and interpreting data.",
      },
      {
        title: "Data Wrangling and Preprocessing",
        skills: ["Pandas", "NumPy", "Data Cleaning", "Feature Engineering"],
        resources: [
          { title: "Pandas Documentation", url: "https://pandas.pydata.org/docs/" },
          { title: "NumPy Documentation", url: "https://numpy.org/doc/" },
        ],
        project: "Clean and preprocess a messy dataset",
        description:
          "Learn how to handle, clean, and prepare data for analysis. This is often the most time-consuming part of a data scientist's job.",
      },
      {
        title: "Data Visualization",
        skills: ["Matplotlib", "Seaborn", "Plotly"],
        resources: [
          { title: "Matplotlib Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html" },
          { title: "Seaborn Tutorial", url: "https://seaborn.pydata.org/tutorial.html" },
        ],
        project: "Create an interactive dashboard for a dataset",
        description:
          "Develop skills to create compelling visualizations that can effectively communicate insights from data.",
      },
      {
        title: "Machine Learning Fundamentals",
        skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
        resources: [
          { title: "Machine Learning (Coursera)", url: "https://www.coursera.org/learn/machine-learning" },
          { title: "Scikit-Learn Documentation", url: "https://scikit-learn.org/stable/documentation.html" },
        ],
        project: "Build and evaluate a machine learning model for a classification problem",
        description:
          "Understand the core concepts of machine learning and how to apply them to solve real-world problems.",
      },
      {
        title: "Deep Learning and Neural Networks",
        skills: ["TensorFlow", "Keras", "PyTorch"],
        resources: [
          {
            title: "Deep Learning Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/deep-learning",
          },
          { title: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" },
        ],
        project: "Implement a convolutional neural network for image classification",
        description:
          "Explore advanced machine learning techniques, including neural networks and deep learning architectures.",
      },
      {
        title: "Big Data Technologies",
        skills: ["Hadoop", "Spark", "Hive"],
        resources: [
          { title: "Big Data Specialization (Coursera)", url: "https://www.coursera.org/specializations/big-data" },
          { title: "Apache Spark Documentation", url: "https://spark.apache.org/docs/latest/" },
        ],
        project: "Process and analyze a large dataset using Spark",
        description: "Learn how to work with large-scale datasets and distributed computing frameworks.",
      },
      {
        title: "Data Engineering Basics",
        skills: ["SQL", "Data Warehousing", "ETL Processes"],
        resources: [
          { title: "SQL for Data Science (Coursera)", url: "https://www.coursera.org/learn/sql-for-data-science" },
          {
            title: "Data Engineering with Google Cloud Platform Specialization",
            url: "https://www.coursera.org/specializations/gcp-data-machine-learning",
          },
        ],
        project: "Design and implement a simple data pipeline",
        description: "Understand how data is stored, processed, and made available for analysis in organizations.",
      },
      {
        title: "Natural Language Processing",
        skills: ["NLTK", "spaCy", "Sentiment Analysis"],
        resources: [
          {
            title: "Natural Language Processing Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/natural-language-processing",
          },
          { title: "spaCy Course", url: "https://course.spacy.io/" },
        ],
        project: "Build a text classification model",
        description: "Learn how to work with and analyze text data, a crucial skill in many data science applications.",
      },
      {
        title: "Ethics and Responsible AI",
        skills: ["Bias Detection", "Fairness in ML", "Privacy-Preserving ML"],
        resources: [
          { title: "Ethics in AI and Big Data (edX)", url: "https://www.edx.org/course/ethics-in-ai-and-big-data" },
          { title: "Responsible AI Practices", url: "https://ai.google/responsibilities/responsible-ai-practices/" },
        ],
        project: "Analyze a machine learning model for potential biases",
        description:
          "Understand the ethical implications of data science and machine learning, and learn how to develop responsible AI systems.",
      },
    ],
  },
  "ux-designer": {
    title: "UX Designer Roadmap",
    steps: [
      {
        title: "Understand UX Fundamentals",
        skills: ["User-Centered Design", "Design Thinking", "Information Architecture"],
        resources: [
          { title: "Interaction Design Foundation - UX Courses", url: "https://www.interaction-design.org/courses" },
          {
            title: "The Design of Everyday Things by Don Norman",
            url: "https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654",
          },
        ],
        project: "Analyze the UX of a popular app and suggest improvements",
        description:
          "Learn the core principles of user experience design and how to apply them to create intuitive, user-friendly products.",
      },
      {
        title: "Master UX Research Methods",
        skills: ["User Interviews", "Surveys", "Usability Testing"],
        resources: [
          { title: "Just Enough Research by Erika Hall", url: "https://abookapart.com/products/just-enough-research" },
          { title: "User Research Fundamentals (Coursera)", url: "https://www.coursera.org/learn/user-research" },
        ],
        project: "Conduct a user research study for a product idea",
        description:
          "Develop skills to gather and analyze user data, which forms the foundation of user-centered design.",
      },
      {
        title: "Learn UX Design Tools",
        skills: ["Sketch", "Figma", "Adobe XD"],
        resources: [
          { title: "Figma Tutorials", url: "https://www.figma.com/resources/learn-design/" },
          { title: "Sketch Documentation", url: "https://www.sketch.com/docs/" },
        ],
        project: "Create a high-fidelity prototype of a mobile app",
        description:
          "Familiarize yourself with industry-standard design tools used to create wireframes, prototypes, and design systems.",
      },
      {
        title: "Develop Visual Design Skills",
        skills: ["Typography", "Color Theory", "Layout Design"],
        resources: [
          { title: "Hack Design", url: "https://hackdesign.org/" },
          {
            title: "Graphic Design Fundamentals (Skillshare)",
            url: "https://www.skillshare.com/classes/Graphic-Design-Basics-Core-Principles-for-Visual-Design/1539782161",
          },
        ],
        project: "Design a cohesive visual style guide for a brand",
        description:
          "While UX focuses on functionality, having a good eye for aesthetics is crucial for creating appealing designs.",
      },
      {
        title: "Interaction Design",
        skills: ["Microinteractions", "Gesture-based Interfaces", "Responsive Design"],
        resources: [
          {
            title: "About Face: The Essentials of Interaction Design",
            url: "https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766576",
          },
          {
            title: "Interaction Design Fundamentals (LinkedIn Learning)",
            url: "https://www.linkedin.com/learning/interaction-design-fundamentals",
          },
        ],
        project: "Design an interactive prototype with advanced animations and transitions",
        description: "Learn how to create engaging and intuitive interactions that enhance the user experience.",
      },
      {
        title: "Information Architecture and Content Strategy",
        skills: ["Site Mapping", "User Flows", "Content Auditing"],
        resources: [
          {
            title: "Information Architecture: For the Web and Beyond",
            url: "https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/",
          },
          { title: "How to Make Sense of Any Mess by Abby Covert", url: "https://www.howtomakesenseofanymess.com/" },
        ],
        project: "Create a comprehensive site map and user flow for a complex web application",
        description:
          "Understand how to structure information and content to make it easily accessible and understandable for users.",
      },
      {
        title: "Accessibility and Inclusive Design",
        skills: ["WCAG Guidelines", "Assistive Technologies", "Universal Design"],
        resources: [
          {
            title: "Web Accessibility by Google (Udacity)",
            url: "https://www.udacity.com/course/web-accessibility--ud891",
          },
          { title: "Inclusive Design Principles", url: "https://inclusivedesignprinciples.org/" },
        ],
        project: "Audit a website for accessibility issues and propose solutions",
        description:
          "Learn how to design for all users, including those with disabilities, to create truly inclusive products.",
      },
      {
        title: "UX Writing and Content Design",
        skills: ["Microcopy", "Voice and Tone", "Content Style Guides"],
        resources: [
          { title: "UX Writing Hub", url: "https://uxwritinghub.com/" },
          {
            title: "Strategic Writing for UX by Torrey Podmajersky",
            url: "https://www.oreilly.com/library/view/strategic-writing-for/9781492049388/",
          },
        ],
        project: "Develop a content style guide and improve the UX writing for a digital product",
        description:
          "Understand the importance of words in user experience and how to write effective, user-friendly content.",
      },
      {
        title: "Design Systems and Pattern Libraries",
        skills: ["Component-based Design", "Style Guides", "Design Tokens"],
        resources: [
          { title: "Design Systems Handbook", url: "https://www.designbetter.co/design-systems-handbook" },
          { title: "Atomic Design by Brad Frost", url: "https://atomicdesign.bradfrost.com/" },
        ],
        project: "Create a comprehensive design system for a product or brand",
        description:
          "Learn how to create and maintain scalable design systems that ensure consistency across products and platforms.",
      },
      {
        title: "UX Strategy and Business Integration",
        skills: ["KPIs for UX", "A/B Testing", "ROI of UX"],
        resources: [
          {
            title: "UX Strategy: Product Strategy Techniques for Devising Innovative Digital Solutions by Jaime Levy",
            url: "https://www.oreilly.com/library/view/ux-strategy-2nd/9781492052425/",
          },
          {
            title: "Lean UX by Jeff Gothelf and Josh Seiden",
            url: "https://www.oreilly.com/library/view/lean-ux-2nd/9781491953594/",
          },
        ],
        project: "Develop a UX strategy for a product, including success metrics and testing plans",
        description:
          "Understand how UX fits into broader business goals and how to measure and communicate the value of UX work.",
      },
    ],
  },
  "digital-marketer": {
    title: "Digital Marketer Roadmap",
    steps: [
      {
        title: "Understand Digital Marketing Fundamentals",
        skills: ["Marketing Principles", "Digital Channels", "Customer Journey"],
        resources: [
          {
            title: "Digital Marketing Fundamentals (Google Digital Garage)",
            url: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
          },
          {
            title: "Introduction to Digital Marketing (Coursera)",
            url: "https://www.coursera.org/learn/digital-marketing-introduction",
          },
        ],
        project: "Create a digital marketing strategy for a small business",
        description: "Learn the basics of digital marketing and how it fits into the broader marketing landscape.",
      },
      {
        title: "Master Content Marketing",
        skills: ["Content Strategy", "Blogging", "Storytelling"],
        resources: [
          {
            title: "Content Marketing Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/content-marketing",
          },
          { title: "Content Marketing Institute", url: "https://contentmarketinginstitute.com/" },
        ],
        project: "Develop a content calendar and create a series of blog posts",
        description: "Learn how to create valuable, relevant content that attracts and engages your target audience.",
      },
      {
        title: "Search Engine Optimization (SEO)",
        skills: ["Keyword Research", "On-page SEO", "Link Building"],
        resources: [
          { title: "SEO Specialization (Coursera)", url: "https://www.coursera.org/specializations/seo" },
          { title: "Moz SEO Learning Center", url: "https://moz.com/learn/seo" },
        ],
        project: "Optimize a website for search engines and improve its rankings",
        description: "Understand how to improve a website's visibility in search engine results pages.",
      },
      {
        title: "Pay-Per-Click (PPC) Advertising",
        skills: ["Google Ads", "Facebook Ads", "Ad Copywriting"],
        resources: [
          { title: "Google Ads Certification", url: "https://skillshop.withgoogle.com/google-ads" },
          { title: "Facebook Blueprint", url: "https://www.facebook.com/business/learn" },
        ],
        project: "Create and manage a PPC campaign for a product or service",
        description: "Learn how to create and optimize paid advertising campaigns across various platforms.",
      },
      {
        title: "Social Media Marketing",
        skills: ["Platform-specific Strategies", "Community Management", "Social Listening"],
        resources: [
          {
            title: "Social Media Marketing Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/social-media-marketing",
          },
          { title: "Hootsuite Academy", url: "https://education.hootsuite.com/" },
        ],
        project: "Develop and execute a social media campaign across multiple platforms",
        description:
          "Understand how to leverage social media platforms to engage with audiences and build brand awareness.",
      },
      {
        title: "Email Marketing",
        skills: ["List Building", "Email Automation", "A/B Testing"],
        resources: [
          {
            title: "Email Marketing Certification (HubSpot)",
            url: "https://academy.hubspot.com/courses/email-marketing",
          },
          { title: "Really Good Emails", url: "https://reallygoodemails.com/" },
        ],
        project: "Create an email marketing funnel with automated sequences",
        description: "Learn how to create effective email campaigns that nurture leads and drive conversions.",
      },
      {
        title: "Analytics and Data-Driven Marketing",
        skills: ["Google Analytics", "Data Visualization", "Marketing Attribution"],
        resources: [
          { title: "Google Analytics for Beginners", url: "https://analytics.google.com/analytics/academy/course/6" },
          {
            title: "Marketing Analytics Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/marketing-analytics",
          },
        ],
        project: "Set up a comprehensive analytics dashboard for a marketing campaign",
        description: "Develop skills to measure, analyze, and optimize marketing efforts based on data.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        skills: ["User Experience", "A/B Testing", "Landing Page Optimization"],
        resources: [
          {
            title: "CRO Certification (CXL Institute)",
            url: "https://cxl.com/institute/programs/conversion-optimization/",
          },
          {
            title: "The Ultimate Guide to A/B Testing",
            url: "https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/",
          },
        ],
        project: "Conduct A/B tests to improve conversion rates on a landing page",
        description: "Learn how to optimize websites and marketing campaigns to increase conversion rates.",
      },
      {
        title: "Marketing Automation",
        skills: ["Customer Segmentation", "Lead Scoring", "Workflow Creation"],
        resources: [
          {
            title: "Marketing Automation Certification (HubSpot)",
            url: "https://academy.hubspot.com/courses/marketing-automation",
          },
          {
            title: "Marketo Certified Expert",
            url: "https://learning.adobe.com/certification/exams/marketo-certified-expert.html",
          },
        ],
        project: "Set up an automated marketing funnel using a marketing automation platform",
        description:
          "Understand how to use technology to automate marketing processes and personalize customer experiences.",
      },
      {
        title: "Digital Marketing Strategy and Integration",
        skills: ["Omnichannel Marketing", "Budget Allocation", "Marketing Technology Stack"],
        resources: [
          {
            title: "Digital Marketing Strategy Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/digital-marketing-strategy",
          },
          { title: "Digital Marketing Institute", url: "https://digitalmarketinginstitute.com/" },
        ],
        project:
          "Develop a comprehensive digital marketing strategy for a business, integrating multiple channels and technologies",
        description:
          "Learn how to create cohesive, integrated digital marketing strategies that align with business goals.",
      },
    ],
  },
  "product-manager": {
    title: "Product Manager Roadmap",
    steps: [
      {
        title: "Understand Product Management Fundamentals",
        skills: ["Product Lifecycle", "User-Centric Design", "Agile Methodologies"],
        resources: [
          {
            title: "Product Management Fundamentals (Udacity)",
            url: "https://www.udacity.com/course/product-manager-nanodegree--nd036",
          },
          {
            title: "Inspired: How to Create Tech Products Customers Love by Marty Cagan",
            url: "https://www.amazon.com/INSPIRED-Create-Tech-Products-Customers/dp/1119387507",
          },
        ],
        project: "Define the vision and strategy for a hypothetical product",
        description: "Learn the core principles of product management and how to apply them in real-world scenarios.",
      },
      {
        title: "Master User Research and Analysis",
        skills: ["User Interviews", "Surveys", "Data Analysis"],
        resources: [
          {
            title: "User Research Fundamentals (Interaction Design Foundation)",
            url: "https://www.interaction-design.org/courses/user-research-methods-and-best-practices",
          },
          { title: "Just Enough Research by Erika Hall", url: "https://abookapart.com/products/just-enough-research" },
        ],
        project: "Conduct user research for a product and synthesize findings into actionable insights",
        description: "Develop skills to gather and analyze user data to inform product decisions.",
      },
      {
        title: "Learn Product Design and Prototyping",
        skills: ["Wireframing", "Prototyping", "User Flow Design"],
        resources: [
          { title: "Product Design (Udacity)", url: "https://www.udacity.com/course/product-design--ud509" },
          { title: "Figma for Beginners", url: "https://www.figma.com/resources/learn-design/figma-101/" },
        ],
        project: "Create wireframes and a clickable prototype for a new feature",
        description: "Understand the basics of product design and how to communicate product ideas visually.",
      },
      {
        title: "Develop Technical Skills",
        skills: ["Basic Coding", "API Understanding", "Data Structures"],
        resources: [
          {
            title: "CS50's Introduction to Computer Science (Harvard)",
            url: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
          },
          {
            title: "The Pragmatic Programmer by Andrew Hunt and David Thomas",
            url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
          },
        ],
        project: "Build a simple web application or contribute to an open-source project",
        description:
          "Gain technical knowledge to better communicate with developers and understand product feasibility.",
      },
      {
        title: "Master Agile and Scrum Methodologies",
        skills: ["Sprint Planning", "Backlog Management", "Retrospectives"],
        resources: [
          { title: "Agile Fundamentals (Coursera)", url: "https://www.coursera.org/learn/agile-fundamentals" },
          { title: "Scrum Guide", url: "https://scrumguides.org/scrum-guide.html" },
        ],
        project: "Plan and execute a sprint for a product feature",
        description: "Learn how to manage product development using Agile methodologies.",
      },
      {
        title: "Develop Product Strategy and Roadmapping Skills",
        skills: ["Market Analysis", "Competitive Analysis", "Prioritization Frameworks"],
        resources: [
          {
            title: "Product Strategy and Roadmap (Product School)",
            url: "https://productschool.com/product-management-certification/",
          },
          {
            title: "Strategize: Product Strategy and Product Roadmap Practices for the Digital Age by Roman Pichler",
            url: "https://www.romanpichler.com/romans-books/strategize/",
          },
        ],
        project: "Create a product roadmap for a 12-month period",
        description: "Learn how to develop and communicate product strategy and roadmaps.",
      },
      {
        title: "Master Data-Driven Decision Making",
        skills: ["A/B Testing", "Analytics", "Metrics and KPIs"],
        resources: [
          {
            title: "Data-Driven Product Management (Coursera)",
            url: "https://www.coursera.org/learn/data-driven-product-management",
          },
          { title: "Lean Analytics by Alistair Croll and Benjamin Yoskovitz", url: "https://leananalyticsbook.com/" },
        ],
        project: "Design and analyze an A/B test for a product feature",
        description: "Develop skills to use data effectively in product decision-making processes.",
      },
      {
        title: "Understand Business and Financial Aspects",
        skills: ["Business Models", "Pricing Strategies", "Financial Metrics"],
        resources: [
          {
            title: "Business Model Generation by Alexander Osterwalder",
            url: "https://www.strategyzer.com/books/business-model-generation",
          },
          {
            title: "Financial Fundamentals for Product Managers (Mind the Product)",
            url: "https://www.mindtheproduct.com/product-management-finances/",
          },
        ],
        project: "Develop a business model canvas and pricing strategy for a product",
        description:
          "Learn how product decisions impact business outcomes and how to align product strategy with business goals.",
      },
      {
        title: "Develop Stakeholder Management and Communication Skills",
        skills: ["Presentation Skills", "Negotiation", "Cross-functional Collaboration"],
        resources: [
          {
            title: "Communicating with Stakeholders (Coursera)",
            url: "https://www.coursera.org/learn/communicating-with-stakeholders",
          },
          {
            title: "The Art of Explanation by Lee LeFever",
            url: "https://www.amazon.com/Art-Explanation-Making-Ideas-Understood/dp/1118374584",
          },
        ],
        project: "Create and deliver a product strategy presentation to stakeholders",
        description:
          "Develop skills to effectively communicate product vision, strategy, and decisions to various stakeholders.",
      },
      {
        title: "Learn Product Growth and Marketing",
        skills: ["User Acquisition", "Retention Strategies", "Product Marketing"],
        resources: [
          {
            title: "Growth Hacking Fundamentals (Product School)",
            url: "https://productschool.com/product-management-certification/",
          },
          {
            title: "Hacking Growth by Sean Ellis and Morgan Brown",
            url: "https://growthhackers.com/books/hacking-growth-how-todays-fastest-growing-companies-drive-breakout-success",
          },
        ],
        project: "Develop a growth strategy for a product, including user acquisition and retention tactics",
        description:
          "Understand how to drive product adoption and growth through various marketing and growth hacking techniques.",
      },
    ],
  },
  "cybersecurity-specialist": {
    title: "Cybersecurity Specialist Roadmap",
    steps: [
      {
        title: "Understand Cybersecurity Fundamentals",
        skills: ["Network Security", "Information Security", "Cryptography Basics"],
        resources: [
          {
            title: "Introduction to Cybersecurity (Cisco)",
            url: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
          },
          { title: "Cybersecurity Fundamentals (edX)", url: "https://www.edx.org/course/cybersecurity-fundamentals" },
        ],
        project: "Conduct a basic security assessment of a home network",
        description: "Learn the core principles of cybersecurity and how they apply to protecting information systems.",
      },
      {
        title: "Master Networking Concepts",
        skills: ["TCP/IP", "OSI Model", "Network Protocols"],
        resources: [
          {
            title: "Computer Networking: A Top-Down Approach by James Kurose and Keith Ross",
            url: "https://www.pearson.com/us/higher-education/program/Kurose-Computer-Networking-A-Top-Down-Approach-7th-Edition/PGM1101673.html",
          },
          {
            title: "Networking Fundamentals (Pluralsight)",
            url: "https://www.pluralsight.com/paths/networking-fundamentals",
          },
        ],
        project: "Set up a small network with proper segmentation and security measures",
        description:
          "Develop a strong understanding of networking principles, which form the foundation of many cybersecurity concepts.",
      },
      {
        title: "Learn Operating System Security",
        skills: ["Windows Security", "Linux Security", "macOS Security"],
        resources: [
          { title: "Operating System Security (Coursera)", url: "https://www.coursera.org/learn/os-security" },
          {
            title: "Linux Security Fundamentals (Linux Foundation)",
            url: "https://training.linuxfoundation.org/training/linux-security-fundamentals/",
          },
        ],
        project: "Harden a Linux server and a Windows workstation",
        description: "Understand how to secure different operating systems and protect against common vulnerabilities.",
      },
      {
        title: "Develop Web Application Security Skills",
        skills: ["OWASP Top 10", "SQL Injection", "Cross-Site Scripting (XSS)"],
        resources: [
          { title: "Web Security Academy (PortSwigger)", url: "https://portswigger.net/web-security" },
          { title: "OWASP Juice Shop Project", url: "https://owasp.org/www-project-juice-shop/" },
        ],
        project: "Identify and fix vulnerabilities in a web application",
        description: "Learn how to identify and mitigate common web application vulnerabilities.",
      },
      {
        title: "Master Ethical Hacking Techniques",
        skills: ["Penetration Testing", "Vulnerability Assessment", "Social Engineering"],
        resources: [
          {
            title: "Ethical Hacking Fundamentals (Pluralsight)",
            url: "https://www.pluralsight.com/paths/ethical-hacking-fundamentals",
          },
          {
            title: "The Web Application Hacker's Handbook by Dafydd Stuttard and Marcus Pinto",
            url: "https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook%3A+Finding+and+Exploiting+Security+Flaws%2C+2nd+Edition-p-9781118026472",
          },
        ],
        project: "Conduct a full penetration test on a vulnerable system",
        description:
          "Develop skills to think like an attacker and identify system vulnerabilities before they can be exploited.",
      },
      {
        title: "Learn Incident Response and Forensics",
        skills: ["Digital Forensics", "Malware Analysis", "Incident Handling"],
        resources: [
          {
            title: "Computer Forensics Fundamentals (Pluralsight)",
            url: "https://www.pluralsight.com/courses/computer-forensics-fundamentals",
          },
          {
            title: "SANS FOR508: Advanced Incident Response, Threat Hunting, and Digital Forensics",
            url: "https://www.sans.org/cyber-security-courses/advanced-incident-response-threat-hunting-training/",
          },
        ],
        project: "Analyze a compromised system and create an incident response report",
        description: "Understand how to respond to security incidents and conduct forensic investigations.",
      },
      {
        title: "Develop Cloud Security Skills",
        skills: ["AWS Security", "Azure Security", "Google Cloud Security"],
        resources: [
          {
            title: "AWS Security Fundamentals",
            url: "https://aws.amazon.com/training/course-descriptions/security-fundamentals/",
          },
          {
            title: "Microsoft Azure Security Technologies (AZ-500)",
            url: "https://docs.microsoft.com/en-us/learn/certifications/exams/az-500",
          },
        ],
        project: "Secure a cloud-based application and infrastructure",
        description: "Learn how to secure cloud environments and understand the shared responsibility model.",
      },
      {
        title: "Master Security Operations and Monitoring",
        skills: ["SIEM", "Log Analysis", "Threat Hunting"],
        resources: [
          {
            title: "Security Information and Event Management (SIEM) Fundamentals (Pluralsight)",
            url: "https://www.pluralsight.com/courses/siem-fundamentals",
          },
          {
            title: "Splunk Fundamentals 1",
            url: "https://www.splunk.com/en_us/training/courses/splunk-fundamentals-1.html",
          },
        ],
        project: "Set up a SIEM system and create custom alerts for potential security threats",
        description: "Develop skills to monitor systems for security events and respond to potential threats.",
      },
      {
        title: "Understand Compliance and Risk Management",
        skills: ["GDPR", "HIPAA", "PCI DSS"],
        resources: [
          {
            title: "CISSP Certification Prep (Coursera)",
            url: "https://www.coursera.org/specializations/cissp-certification",
          },
          { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
        ],
        project: "Conduct a compliance audit for a hypothetical company",
        description: "Learn about various compliance standards and how to implement them in organizations.",
      },
      {
        title: "Develop Advanced Cybersecurity Skills",
        skills: ["Threat Intelligence", "Advanced Persistent Threats", "Zero-Day Vulnerabilities"],
        resources: [
          {
            title: "Cyber Threat Intelligence (SANS)",
            url: "https://www.sans.org/cyber-security-courses/cyber-threat-intelligence/",
          },
          {
            title: "The Cuckoo's Egg by Cliff Stoll",
            url: "https://www.simonandschuster.com/books/The-Cuckoos-Egg/Cliff-Stoll/9781416507789",
          },
        ],
        project: "Create a threat intelligence report on a current cybersecurity threat",
        description:
          "Stay up-to-date with the latest cybersecurity threats and develop advanced skills to combat them.",
      },
    ],
  },
  "cloud-architect": {
    title: "Cloud Architect Roadmap",
    steps: [
      {
        title: "Understand Cloud Computing Fundamentals",
        skills: ["IaaS, PaaS, SaaS", "Cloud Service Models", "Cloud Deployment Models"],
        resources: [
          {
            title: "Introduction to Cloud Computing (edX)",
            url: "https://www.edx.org/course/introduction-to-cloud-computing-2",
          },
          { title: "NIST Cloud Computing Standards", url: "https://www.nist.gov/itl/cloud-computing" },
        ],
        project: "Compare different cloud service providers and their offerings",
        description: "Learn the basic concepts of cloud computing and different service models.",
      },
      {
        title: "Master Networking for Cloud",
        skills: ["Virtual Networks", "Load Balancing", "Content Delivery Networks"],
        resources: [
          {
            title: "Networking in Google Cloud Platform (Coursera)",
            url: "https://www.coursera.org/learn/networking-google-cloud-platform",
          },
          {
            title: "AWS Networking Fundamentals",
            url: "https://aws.amazon.com/training/course-descriptions/networking-fundamentals/",
          },
        ],
        project: "Design and implement a multi-tier network architecture in a cloud environment",
        description:
          "Understand how networking concepts apply in cloud environments and how to design efficient network architectures.",
      },
      {
        title: "Learn Cloud Security and Compliance",
        skills: ["Identity and Access Management", "Encryption", "Compliance Frameworks"],
        resources: [
          {
            title: "Cloud Security Fundamentals (Cloud Security Alliance)",
            url: "https://cloudsecurityalliance.org/education/ccsk/",
          },
          {
            title: "AWS Security Fundamentals",
            url: "https://aws.amazon.com/training/course-descriptions/security-fundamentals/",
          },
        ],
        project: "Implement a secure, compliant cloud environment for a hypothetical financial services company",
        description: "Develop skills to secure cloud environments and ensure compliance with various regulations.",
      },
      {
        title: "Master Cloud Storage and Databases",
        skills: ["Object Storage", "Block Storage", "NoSQL Databases", "Relational Databases"],
        resources: [
          {
            title: "Google Cloud Platform Fundamentals: Core Infrastructure (Coursera)",
            url: "https://www.coursera.org/learn/gcp-fundamentals",
          },
          { title: "AWS Database Offerings", url: "https://aws.amazon.com/products/databases/" },
        ],
        project: "Design and implement a scalable database solution for a high-traffic web application",
        description:
          "Learn about different storage options in the cloud and how to choose the right database for various use cases.",
      },
      {
        title: "Develop Cloud Application Architecture Skills",
        skills: ["Microservices", "Serverless Computing", "Containers"],
        resources: [
          {
            title: "Architecting with Google Kubernetes Engine (Coursera)",
            url: "https://www.coursera.org/specializations/architecting-google-kubernetes-engine",
          },
          {
            title: "AWS Certified Solutions Architect - Associate",
            url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          },
        ],
        project: "Design and implement a microservices-based application using containers and serverless technologies",
        description:
          "Understand modern application architectures and how to design scalable, resilient applications in the cloud.",
      },
      {
        title: "Master Cloud DevOps Practices",
        skills: ["Infrastructure as Code", "CI/CD", "Configuration Management"],
        resources: [
          {
            title: "DevOps on AWS Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/aws-devops",
          },
          {
            title: "Google Cloud DevOps Engineer Professional Certificate",
            url: "https://cloud.google.com/certification/cloud-devops-engineer",
          },
        ],
        project: "Implement a full CI/CD pipeline for a cloud-native application",
        description:
          "Learn how to implement DevOps practices in cloud environments to improve efficiency and reliability.",
      },
      {
        title: "Understand Cloud Cost Optimization",
        skills: ["Resource Tagging", "Reserved Instances", "Spot Instances"],
        resources: [
          { title: "AWS Cost Optimization", url: "https://aws.amazon.com/aws-cost-management/" },
          { title: "Google Cloud Cost Optimization", url: "https://cloud.google.com/cost-management" },
        ],
        project: "Analyze and optimize costs for a large-scale cloud deployment",
        description: "Learn strategies to optimize cloud costs while maintaining performance and reliability.",
      },
      {
        title: "Develop Multi-Cloud and Hybrid Cloud Skills",
        skills: ["Cloud Federation", "Hybrid Cloud Architectures", "Multi-Cloud Management Tools"],
        resources: [
          {
            title: "Multi-Cloud Architecture and Governance (Pluralsight)",
            url: "https://www.pluralsight.com/courses/multi-cloud-architecture-governance",
          },
          { title: "Google Anthos", url: "https://cloud.google.com/anthos" },
        ],
        project:
          "Design a hybrid cloud solution that integrates on-premises infrastructure with multiple cloud providers",
        description:
          "Understand how to design and manage environments that span multiple cloud providers and on-premises infrastructure.",
      },
      {
        title: "Learn Cloud Migration Strategies",
        skills: ["Application Assessment", "Data Migration", "Refactoring for Cloud"],
        resources: [
          {
            title: "AWS Migration Whitepaper",
            url: "https://d1.awsstatic.com/whitepapers/Migration/aws-migration-whitepaper.pdf",
          },
          { title: "Google Cloud Adoption Framework", url: "https://cloud.google.com/adoption-framework" },
        ],
        project: "Create a migration plan for moving a legacy application to the cloud",
        description: "Develop skills to assess, plan, and execute cloud migration projects.",
      },
      {
        title: "Master Cloud Disaster Recovery and Business Continuity",
        skills: ["Backup and Recovery", "High Availability", "Disaster Recovery Planning"],
        resources: [
          { title: "Disaster Recovery Architecture on AWS", url: "https://aws.amazon.com/disaster-recovery/" },
          { title: "Azure Site Recovery", url: "https://azure.microsoft.com/en-us/services/site-recovery/" },
        ],
        project: "Design and implement a disaster recovery plan for a mission-critical application",
        description: "Learn how to ensure business continuity and minimize data loss in case of disasters.",
      },
    ],
  },
  "ai-engineer": {
    title: "AI Engineer Roadmap",
    steps: [
      {
        title: "Master Programming Fundamentals",
        skills: ["Python", "Data Structures", "Algorithms"],
        resources: [
          {
            title: "Python for Everybody Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/python",
          },
          {
            title: "Data Structures and Algorithms Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/data-structures-algorithms",
          },
        ],
        project: "Implement classic algorithms and data structures in Python",
        description:
          "Develop a strong foundation in programming, focusing on Python as the primary language for AI development.",
      },
      {
        title: "Learn Mathematics for AI",
        skills: ["Linear Algebra", "Calculus", "Probability and Statistics"],
        resources: [
          {
            title: "Mathematics for Machine Learning Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/mathematics-machine-learning",
          },
          {
            title: "Linear Algebra (MIT OpenCourseWare)",
            url: "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/",
          },
        ],
        project: "Implement basic machine learning algorithms from scratch using mathematical concepts",
        description: "Understand the mathematical foundations that underpin AI and machine learning algorithms.",
      },
      {
        title: "Master Machine Learning Fundamentals",
        skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
        resources: [
          { title: "Machine Learning (Coursera)", url: "https://www.coursera.org/learn/machine-learning" },
          {
            title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron",
            url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
          },
        ],
        project: "Build and evaluate machine learning models for classification and regression tasks",
        description: "Learn the core concepts of machine learning and how to apply them to solve real-world problems.",
      },
      {
        title: "Develop Deep Learning Skills",
        skills: ["Neural Networks", "Convolutional Neural Networks", "Recurrent Neural Networks"],
        resources: [
          {
            title: "Deep Learning Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/deep-learning",
          },
          {
            title: "Deep Learning with Python by François Chollet",
            url: "https://www.manning.com/books/deep-learning-with-python",
          },
        ],
        project: "Implement a deep learning model for image classification or natural language processing",
        description:
          "Understand the principles of deep learning and how to build complex neural network architectures.",
      },
      {
        title: "Master Natural Language Processing",
        skills: ["Text Processing", "Sentiment Analysis", "Machine Translation"],
        resources: [
          {
            title: "Natural Language Processing Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/natural-language-processing",
          },
          {
            title: "Speech and Language Processing by Dan Jurafsky and James H. Martin",
            url: "https://web.stanford.edu/~jurafsky/slp3/",
          },
        ],
        project: "Build a chatbot or a sentiment analysis tool",
        description: "Learn how to process and analyze human language data using AI techniques.",
      },
      {
        title: "Develop Computer Vision Skills",
        skills: ["Image Processing", "Object Detection", "Image Segmentation"],
        resources: [
          {
            title: "Computer Vision Nanodegree (Udacity)",
            url: "https://www.udacity.com/course/computer-vision-nanodegree--nd891",
          },
          { title: "PyImageSearch", url: "https://www.pyimagesearch.com/" },
        ],
        project: "Implement an object detection system or facial recognition application",
        description: "Understand how to analyze and interpret visual information using AI algorithms.",
      },
      {
        title: "Learn Reinforcement Learning",
        skills: ["Markov Decision Processes", "Q-Learning", "Policy Gradients"],
        resources: [
          {
            title: "Reinforcement Learning Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/reinforcement-learning",
          },
          {
            title: "Reinforcement Learning: An Introduction by Richard S. Sutton and Andrew G. Barto",
            url: "http://incompleteideas.net/book/the-book-2nd.html",
          },
        ],
        project: "Develop an AI agent to play a simple game using reinforcement learning",
        description: "Understand how to create AI systems that learn from interaction with their environment.",
      },
      {
        title: "Master AI Frameworks and Tools",
        skills: ["TensorFlow", "PyTorch", "Keras"],
        resources: [
          { title: "TensorFlow Developer Certificate", url: "https://www.tensorflow.org/certificate" },
          { title: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" },
        ],
        project: "Implement and compare the same AI model using different frameworks",
        description: "Gain proficiency in popular AI frameworks and tools used in industry.",
      },
      {
        title: "Develop AI Ethics and Responsible AI Skills",
        skills: ["Bias Detection", "Fairness in AI", "AI Governance"],
        resources: [
          {
            title: "AI Ethics: Global Perspectives (edX)",
            url: "https://www.edx.org/course/ai-ethics-global-perspectives",
          },
          {
            title: "Responsible AI Practices (Google)",
            url: "https://ai.google/responsibilities/responsible-ai-practices/",
          },
        ],
        project: "Analyze an existing AI system for potential ethical issues and propose solutions",
        description: "Understand the ethical implications of AI and how to develop responsible AI systems.",
      },
      {
        title: "Learn AI Deployment and MLOps",
        skills: ["Model Serving", "Monitoring", "CI/CD for AI"],
        resources: [
          {
            title: "Machine Learning Engineering for Production (MLOps) Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
          },
          {
            title: "MLOps: Continuous Delivery and Automation Pipelines in Machine Learning (Google Cloud)",
            url: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning",
          },
        ],
        project: "Deploy a machine learning model as a web service and set up a monitoring system",
        description: "Learn how to deploy AI models in production environments and maintain them over time.",
      },
    ],
  },
  "devops-engineer": {
    title: "DevOps Engineer Roadmap",
    steps: [
      {
        title: "Master Version Control",
        skills: ["Git", "GitHub", "GitLab"],
        resources: [
          {
            title: "Git and GitHub for Beginners (FreeCodeCamp)",
            url: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
          },
          { title: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
        ],
        project: "Set up a Git repository with branching strategy and contribute to an open-source project",
        description: "Learn how to effectively manage code versions and collaborate with other developers.",
      },
      {
        title: "Learn Linux System Administration",
        skills: ["Command Line", "Shell Scripting", "System Performance"],
        resources: [
          {
            title: "Linux Foundation Certified System Administrator (LFCS)",
            url: "https://training.linuxfoundation.org/certification/linux-foundation-certified-system-administrator-lfcs/",
          },
          { title: "The Linux Command Line by William Shotts", url: "http://linuxcommand.org/tlcl.php" },
        ],
        project: "Write shell scripts to automate system administration tasks",
        description: "Develop a strong foundation in Linux, which is crucial for most DevOps roles.",
      },
      {
        title: "Master Containerization",
        skills: ["Docker", "Container Orchestration", "Kubernetes"],
        resources: [
          { title: "Docker for the Absolute Beginner (Udemy)", url: "https://www.udemy.com/course/learn-docker/" },
          { title: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/" },
        ],
        project: "Containerize a multi-service application and deploy it using Kubernetes",
        description:
          "Learn how to use containers to package and deploy applications consistently across different environments.",
      },
      {
        title: "Develop Infrastructure as Code Skills",
        skills: ["Terraform", "Ansible", "CloudFormation"],
        resources: [
          { title: "Terraform Up & Running by Yevgeniy Brikman", url: "https://www.terraformupandrunning.com/" },
          { title: "Ansible for DevOps by Jeff Geerling", url: "https://www.ansiblefordevops.com/" },
        ],
        project: "Create infrastructure as code templates to provision and manage cloud resources",
        description:
          "Learn how to manage infrastructure using code, enabling version control and automation of infrastructure provisioning.",
      },
      {
        title: "Master Continuous Integration and Continuous Deployment (CI/CD)",
        skills: ["Jenkins", "GitLab CI", "GitHub Actions"],
        resources: [
          {
            title: "Jenkins Essential Training (LinkedIn Learning)",
            url: "https://www.linkedin.com/learning/jenkins-essential-training",
          },
          { title: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
        ],
        project: "Set up a complete CI/CD pipeline for a web application",
        description: "Learn how to automate the building, testing, and deployment of applications.",
      },
      {
        title: "Learn Cloud Platforms",
        skills: ["AWS", "Azure", "Google Cloud Platform"],
        resources: [
          {
            title: "AWS Certified DevOps Engineer - Professional",
            url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
          },
          {
            title: "Microsoft Azure DevOps Solutions",
            url: "https://docs.microsoft.com/en-us/learn/paths/az-400-implement-devops-development-processes/",
          },
        ],
        project: "Deploy a scalable and highly available application on a cloud platform",
        description: "Understand how to leverage cloud services for DevOps practices and application hosting.",
      },
      {
        title: "Develop Monitoring and Logging Skills",
        skills: ["Prometheus", "Grafana", "ELK Stack"],
        resources: [
          {
            title: "Monitoring and Alerting with Prometheus (O'Reilly)",
            url: "https://www.oreilly.com/library/view/monitoring-with-prometheus/9781492034142/",
          },
          { title: "ELK Stack Tutorial (Logz.io)", url: "https://logz.io/learn/complete-guide-elk-stack/" },
        ],
        project: "Set up a comprehensive monitoring and logging system for a distributed application",
        description:
          "Learn how to implement effective monitoring and logging solutions to ensure system reliability and performance.",
      },
      {
        title: "Master Configuration Management",
        skills: ["Puppet", "Chef", "Ansible"],
        resources: [
          { title: "Puppet Fundamentals", url: "https://learn.puppet.com/course/puppet-fundamentals" },
          { title: "Chef Fundamentals", url: "https://learn.chef.io/#/" },
        ],
        project: "Implement configuration management for a multi-server environment",
        description:
          "Understand how to manage and maintain consistent configurations across multiple servers and environments.",
      },
      {
        title: "Learn Security and Compliance in DevOps",
        skills: ["DevSecOps", "Compliance as Code", "Security Scanning"],
        resources: [
          {
            title: "DevSecOps Fundamentals (Linux Foundation)",
            url: "https://training.linuxfoundation.org/training/devsecops-fundamentals/",
          },
          { title: "OWASP DevSecOps Guideline", url: "https://owasp.org/www-project-devsecops-guideline/" },
        ],
        project: "Implement security scanning and compliance checks in a CI/CD pipeline",
        description: "Learn how to integrate security practices into the DevOps lifecycle.",
      },
      {
        title: "Develop Site Reliability Engineering (SRE) Skills",
        skills: ["Service Level Objectives", "Error Budgets", "Chaos Engineering"],
        resources: [
          { title: "Site Reliability Engineering (Google)", url: "https://sre.google/books/" },
          {
            title: "Chaos Engineering (Principles and Practice)",
            url: "https://www.oreilly.com/library/view/chaos-engineering/9781492043850/",
          },
        ],
        project:
          "Implement SRE practices for a production application, including setting SLOs and conducting chaos experiments",
        description:
          "Understand how to apply software engineering principles to infrastructure and operations problems.",
      },
    ],
  },
  "blockchain-developer": {
    title: "Blockchain Developer Roadmap",
    steps: [
      {
        title: "Master Programming Fundamentals",
        skills: ["JavaScript", "Python", "Solidity"],
        resources: [
          {
            title: "JavaScript: Understanding the Weird Parts (Udemy)",
            url: "https://www.udemy.com/course/understand-javascript/",
          },
          { title: "Solidity Documentation", url: "https://docs.soliditylang.org/en/v0.8.9/" },
        ],
        project: "Build a simple smart contract using Solidity",
        description:
          "Develop a strong foundation in programming, with a focus on languages commonly used in blockchain development.",
      },
      {
        title: "Understand Blockchain Fundamentals",
        skills: ["Distributed Ledger Technology", "Consensus Mechanisms", "Cryptography"],
        resources: [
          { title: "Blockchain Basics (Coursera)", url: "https://www.coursera.org/learn/blockchain-basics" },
          { title: "Mastering Bitcoin by Andreas M. Antonopoulos", url: "https://github.com/bitcoinbook/bitcoinbook" },
        ],
        project: "Implement a simple blockchain in Python",
        description: "Learn the core concepts of blockchain technology and how it works under the hood.",
      },
      {
        title: "Learn Ethereum and Smart Contracts",
        skills: ["Ethereum Virtual Machine", "Smart Contract Development", "Web3.js"],
        resources: [
          { title: "Ethereum Developer Documentation", url: "https://ethereum.org/en/developers/docs/" },
          { title: "CryptoZombies", url: "https://cryptozombies.io/" },
        ],
        project: "Develop a decentralized application (DApp) on Ethereum",
        description: "Understand how to develop smart contracts and build applications on the Ethereum blockchain.",
      },
      {
        title: "Master Decentralized Finance (DeFi) Concepts",
        skills: ["Liquidity Pools", "Yield Farming", "Tokenomics"],
        resources: [
          { title: "DeFi Developer Road Map", url: "https://github.com/OffcierCia/DeFi-Developer-Road-Map" },
          { title: "Uniswap V2 Documentation", url: "https://uniswap.org/docs/v2/" },
        ],
        project: "Implement a simple token swap protocol",
        description:
          "Learn about the rapidly growing field of decentralized finance and how to build DeFi applications.",
      },
      {
        title: "Develop Blockchain Security Skills",
        skills: ["Smart Contract Auditing", "Common Vulnerabilities", "Security Best Practices"],
        resources: [
          { title: "Smart Contract Security by OpenZeppelin", url: "https://docs.openzeppelin.com/learn/" },
          {
            title: "Ethereum Smart Contract Security Best Practices",
            url: "https://consensys.github.io/smart-contract-best-practices/",
          },
        ],
        project: "Audit a smart contract and fix identified vulnerabilities",
        description:
          "Understand the security considerations in blockchain development and how to build secure smart contracts.",
      },
      {
        title: "Learn Blockchain Scalability Solutions",
        skills: ["Layer 2 Solutions", "Sidechains", "Sharding"],
        resources: [
          {
            title: "Blockchain Scalability Solutions (Medium)",
            url: "https://medium.com/mechanism-labs/scaling-ethereum-a-comprehensive-guide-to-layer-2-solutions-2f28f16690e4",
          },
          { title: "Polygon (Matic) Documentation", url: "https://docs.polygon.technology/" },
        ],
        project: "Implement a simple Layer 2 solution for an Ethereum DApp",
        description: "Understand different approaches to scaling blockchain networks and how to implement them.",
      },
      {
        title: "Master Blockchain Interoperability",
        skills: ["Cross-Chain Communication", "Atomic Swaps", "Bridges"],
        resources: [
          { title: "Polkadot Whitepaper", url: "https://polkadot.network/PolkaDotPaper.pdf" },
          { title: "Cosmos Network Documentation", url: "https://docs.cosmos.network/" },
        ],
        project: "Develop a cross-chain token transfer mechanism",
        description: "Learn how different blockchain networks can communicate and interact with each other.",
      },
      {
        title: "Develop Skills in Blockchain Governance",
        skills: ["On-Chain Governance", "DAOs", "Voting Mechanisms"],
        resources: [
          {
            title: "A Guide to Blockchain Governance",
            url: "https://www.gemini.com/cryptopedia/blockchain-governance-guide",
          },
          { title: "What is a DAO?", url: "https://ethereum.org/en/dao/" },
        ],
        project: "Implement a simple on-chain voting mechanism for a DAO",
        description: "Understand how blockchain networks can be governed in a decentralized manner.",
      },
      {
        title: "Learn About NFTs and the Metaverse",
        skills: ["NFT Standards", "Metaverse Platforms", "Digital Identity"],
        resources: [
          { title: "NFTs: Non-Fungible Tokens", url: "https://ethereum.org/en/nft/" },
          { title: "The Metaverse Primer", url: "https://www.matthewball.vc/all/themetaverse" },
        ],
        project: "Create and deploy an NFT smart contract",
        description: "Explore the emerging world of non-fungible tokens and virtual worlds.",
      },
      {
        title: "Stay Up-to-Date with Blockchain Trends",
        skills: ["Research", "Community Engagement", "Continuous Learning"],
        resources: [
          { title: "CoinDesk", url: "https://www.coindesk.com/" },
          { title: "Blockworks", url: "https://www.blockworks.co/" },
        ],
        project: "Contribute to a blockchain open-source project",
        description:
          "Keep learning and stay engaged with the blockchain community to remain at the forefront of this rapidly evolving field.",
      },
    ],
  },
}

export default function Page() {
  const params = useParams()
  const roadmap = roadmaps[params.slug as keyof typeof roadmaps]

  if (!roadmap) {
    return <div>Roadmap not found</div>
  }

  return (
    <motion.div
      className="container mx-auto py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-5">{roadmap.title}</h1>
      {roadmap.steps.map((step, index) => (
        <motion.div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <span className="mr-2">{index + 1}.</span>
            {step.title}
          </h2>
          <p className="text-gray-600 mb-3">{step.description}</p>
          <div className="mb-3">
            <h3 className="font-semibold text-md">Skills to Learn:</h3>
            <ul className="list-disc pl-5">
              {step.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-md">Resources:</h3>
            <ul>
              {step.resources.map((resource, index) => (
                <li key={index} className="flex items-center mb-2">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    {resource.title}
                    <FaExternalLinkAlt className="ml-1 text-xs" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {step.project && (
            <div className="mt-4">
              <h3 className="font-semibold text-md">Project:</h3>
              <p className="text-gray-700">{step.project}</p>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

