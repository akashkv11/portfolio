const allProjectDetails = {
  sayit: {
    introduction:
      "SayIt is a real-time chat application built specifically for learning Socket.io and understanding real-time communication. The app features user authentication and real-time messaging capabilities, allowing users to communicate instantly with each other. This project was developed entirely by me as a solo full-stack endeavor, handling both frontend and backend implementation.",
    tech: "React with TypeScript, NestJS, Supabase (database), Prisma ORM, Socket.io",
    role: "Full-stack developer - frontend, backend, database design, and architecture",
    github: "https://github.com/akashkv11/say-it.git",
    purpose: `The primary motivation behind building SayIt was to master Socket.io and gain deep understanding of real-time communication systems. As a learning-focused project, the goal was to implement core real-time messaging functionality from scratch and understand the underlying mechanisms that power modern chat applications. I chose the name "SayIt" to reflect the essence of communication, and included basic UI sketching in my planning process to visualize the user flow and interface design.`,
    technicalSpotlight:
      "The most technically challenging aspects were implementing secured socket connections and real-time messaging architecture. I used NestJS WebSockets with Socket.io events like emit and receive to handle real-time communication. The database structure consists of two main tables: users and messages, with the messages table containing sender and receiver columns that establish relationships with the user table.",
    flow: [
      "Homepage displays sign-in/sign-up options",
      "Authenticated users access a dashboard listing all available users",
      "Selecting a user renders the chat window component",
      "Real-time messaging occurs between users instantly",
    ],
    auth: "JWT tokens are used for user authentication, with tokens passed to the server during the socket.onconnect method. The server verifies the token before establishing any socket connection, ensuring only authenticated users can send or receive messages.",
    challenges: [
      [
        "Secured Socket Connections",
        "Implementing authentication for real-time messaging was complex. I solved this by integrating JWT token verification into the socket connection process, where tokens are validated server-side before allowing any real-time communication",
      ],
      [
        "Class-Based Architecture Adaptation",
        "Coming from a functional programming background, NestJS's class-based approach initially presented challenges, particularly with property declarations and OOP concepts. I overcame this by studying OOP paradigms fundamentals, which not only solved my immediate problem but also made NestJS development much more intuitive.",
      ],
      [
        "Complex Problem Breakdown",
        "When stuck on implementing the overall application flow, I developed a systematic approach of documenting each component and feature requirement, which made the development process much more manageable and organized",
      ],
    ],
    status:
      "SayIt currently runs locally and has fulfilled its primary educational purpose. While the core real-time messaging functionality is complete, I consider this a foundation for future enhancements. When time permits, I plan to expand it into a full-featured chat application with file sharing, group chat capabilities, and additional communication features.",
    lessons: [
      [
        "Technical Growth",
        "This project provided comprehensive understanding of real-time messaging implementation using Socket.io. The knowledge gained enables me to easily integrate real-time messaging features into any future project requiring instant communication capabilities",
      ],
      [
        "Framework Mastery",
        "Working with NestJS's class-based approach shifted my perspective on backend architecture. I now appreciate the reusability and organizational benefits of OOP paradigms, and have become comfortable working with class-based frameworks.",
      ],
      [
        "Problem-Solving Skills",
        "Developed effective strategies for breaking down complex problems into manageable components and improved debugging techniques for real-time applications. These non-technical skills have proven valuable across all subsequent development work.",
      ],
      [
        "Full-Stack Understanding",
        "Building both frontend and backend components deepened my comprehension of how modern web applications communicate, particularly in real-time scenarios where frontend and backend must maintain synchronized state.",
      ],
    ],
  },

  univote: {
    introduction:
      "Univote is a hybrid polling application that simplifies the voting process by eliminating traditional user registration. Users can create polls, share them via unique codes or links, and voters participate using only email-based OTP verification. The platform supports both anonymous and authenticated poll creation with built-in security measures to ensure vote integrity and prevent abuse.",
    tech: "Next.js, Tailwind CSS, Redis (Upstash - planned), Google OAuth2, Nodemailer, Zod validation",
    role: "Solo full-stack developer - architecture, frontend, backend, database design",
    github: "", // add repo link when available
    purpose: `The inspiration behind Univote was to dramatically simplify the voting process. Traditional polling systems often require complex sign-up procedures, but Univote reduces barriers to participation - voters only need to enter an OTP received via email. The application targets real-world scenarios like classroom polls, event feedback, and community decision-making where quick, secure participation is essential. My primary learning objective was mastering Next.js as a full-stack framework, since I had no prior experience with it.`,
    technicalSpotlight:
      "Authentication is handled with email-based OTP verification via Nodemailer + Google OAuth2. Unique poll codes are generated with collision checking, and Zod is integrated for robust input validation. Planned Redis integration will add IP tracking and rate limiting to further secure the system.",
    flow: [
      "Users create polls with questions and multiple choice options",
      "System generates unique poll codes with database collision checking",
      "Poll creators share codes/links with voters",
      "Voters access polls via shared links or entering codes",
      "Email-based OTP verification ensures one vote per email",
      "Poll creators can view results (if ownership claimed via email)",
    ],
    auth: "OTP-based authentication with Nodemailer + Google OAuth2 ensures secure voting without traditional accounts. Planned Redis support will add rate limiting and IP tracking.",
    challenges: [
      [
        "Next.js Learning Curve",
        "Understanding SSR, SSG, file-based routing, and API routes was initially difficult. I overcame this by incrementally building and testing small features until comfortable combining them.",
      ],
      [
        "Google OAuth2 + Nodemailer Integration",
        "Configuration between Google services and Nodemailer required testing multiple authentication scopes. Careful documentation review led to a stable, reliable email delivery setup.",
      ],
      [
        "Unique Code Generation",
        "Preventing poll code collisions required implementing a database check loop to ensure uniqueness before assignment.",
      ],
      [
        "Full-Stack Complexity",
        "Balancing server-side rendering with API routes in the same framework required learning execution contexts thoroughly.",
      ],
    ],
    status:
      "Univote is actively in development with OTP-based authentication and core poll creation implemented. Redis integration for rate limiting and IP tracking is planned next.",
    lessons: [
      [
        "Next.js Mastery",
        "Gained strong experience with SSR/SSG and how they improve performance and SEO when applied correctly.",
      ],
      [
        "API Design Evolution",
        "Learned to structure API routes more thoughtfully within Next.js, balancing server and client needs.",
      ],
      [
        "Security-First Thinking",
        "Rate limiting, OTP cooldowns, and abuse-prevention strategies reinforced the importance of designing security into the foundation.",
      ],
      [
        "Data Validation Benefits",
        "Zod reduced debugging time and improved reliability by catching errors early with declarative validation.",
      ],
      [
        "Project Scope Management",
        "Learned to prioritize core features over nice-to-have additions to stay aligned with project goals.",
      ],
    ],
  },
} as const;

export default allProjectDetails;
