window.COMPANY_HUB_BOOTSTRAP = {
  llms: {
    "schema_version": "0.1.0",
    "models": [
      {
        "provider": "OpenAI",
        "product": "Codex",
        "category": "Coding Agent",
        "status": "Production Ready",
        "capabilities": [
          "Delegates codebase tasks with planning, edits, verification, and final reporting.",
          "Works well for terminal-heavy implementation, test running, file inspection, and repository cleanup.",
          "Can create frontend experiences, static sites, local tools, scripts, and structured documentation.",
          "Supports local workspace collaboration and automation-friendly development workflows."
        ],
        "best_for": [
          "Autonomous coding",
          "Repo maintenance",
          "Internal tools"
        ],
        "limitations": [
          "Needs project-specific secrets and private service access configured by the user.",
          "Should verify claims about current external products before dashboard publication."
        ],
        "integrations": [
          "Local filesystem",
          "Terminal",
          "Browser verification",
          "GitHub-ready workflows"
        ],
        "recommended_use_cases": [
          "Build company portal features",
          "Convert SOP notes into structured pages",
          "Create GitHub Actions automation",
          "Run implementation QA before publishing"
        ],
        "last_verified": "2026-05-29",
        "recent_updates": [
          {
            "date": "2026-05-29",
            "title": "Company hub starter role defined",
            "summary": "Codex is assigned as the primary builder for the static portal, dashboard data model, and future GitHub automation.",
            "source_type": "Internal decision",
            "review_status": "Needs Review",
            "sources": []
          }
        ]
      },
      {
        "provider": "Anthropic",
        "product": "Claude Code",
        "category": "Coding Agent",
        "status": "Needs Review",
        "capabilities": [
          "Strong pair-programming flow for architectural reasoning and codebase discussion.",
          "Useful for code explanation, editing strategy, and complex debugging sessions.",
          "Can work closely with a developer in an interactive terminal-style workflow."
        ],
        "best_for": [
          "Pair programming",
          "Architecture review",
          "Debugging"
        ],
        "limitations": [
          "May require more hands-on steering depending on workflow and permissions.",
          "Current feature claims should be checked against official Anthropic documentation before publishing."
        ],
        "integrations": [
          "Local development environments",
          "MCP-capable workflows"
        ],
        "recommended_use_cases": [
          "Reason through architecture",
          "Review implementation plans",
          "Explain complicated code",
          "Draft technical docs"
        ],
        "last_verified": "2026-05-29",
        "recent_updates": [
          {
            "date": "2026-05-29",
            "title": "Claude Code profile placeholder added",
            "summary": "Initial comparison role captured from the planning conversation. Needs official source review before external publication.",
            "source_type": "Internal planning",
            "review_status": "Needs Review",
            "sources": []
          }
        ]
      },
      {
        "provider": "Google",
        "product": "Gemini",
        "category": "Workspace AI",
        "status": "Needs Review",
        "capabilities": [
          "Useful for Google Workspace-centered workflows across Gmail, Docs, Drive, and Calendar contexts.",
          "Can support brainstorming, summarization, research preparation, and internal knowledge capture.",
          "Works well as a planning assistant when content originates inside Google tools."
        ],
        "best_for": [
          "Google Workspace",
          "Brainstorming",
          "Knowledge capture"
        ],
        "limitations": [
          "Shared chat details and product-specific claims need verification before company-wide publication.",
          "Access may depend on workspace permissions, account type, and enabled Google features."
        ],
        "integrations": [
          "Gmail",
          "Google Drive",
          "Docs",
          "Calendar"
        ],
        "recommended_use_cases": [
          "Summarize Google Workspace materials",
          "Plan operational content",
          "Draft training outlines",
          "Prepare internal Q&A"
        ],
        "last_verified": "2026-05-29",
        "recent_updates": [
          {
            "date": "2026-05-29",
            "title": "Gemini used for dashboard architecture planning",
            "summary": "Gemini recommended a JSON-backed dashboard and GitHub Actions automation flow for low-cost maintenance.",
            "source_type": "Internal Gemini chat",
            "review_status": "Needs Review",
            "sources": []
          }
        ]
      },
      {
        "provider": "Perplexity",
        "product": "Perplexity",
        "category": "Research Agent",
        "status": "Needs Review",
        "capabilities": [
          "Strong fit for citation-heavy research, current market checks, and competitive intelligence.",
          "Useful for quickly finding current source-backed information across the web.",
          "Can support dashboard verification by collecting source links for product updates."
        ],
        "best_for": [
          "Live research",
          "Source discovery",
          "Competitive analysis"
        ],
        "limitations": [
          "Research summaries still require human judgment before becoming official company guidance.",
          "Source quality varies and should be graded before dashboard updates are approved."
        ],
        "integrations": [
          "Web research",
          "Cited answers"
        ],
        "recommended_use_cases": [
          "Track AI product news",
          "Find source links for dashboard updates",
          "Research software changes",
          "Compare vendor claims"
        ],
        "last_verified": "2026-05-29",
        "recent_updates": [
          {
            "date": "2026-05-29",
            "title": "Research role added to Big Four dashboard",
            "summary": "Perplexity is represented as the real-time research and source-discovery system in the company AI stack.",
            "source_type": "Internal planning",
            "review_status": "Needs Review",
            "sources": []
          }
        ]
      }
    ]
  },
  content: {
    "schema_version": "0.1.0",
    "items": [
      {
        "category": "SOP",
        "title": "Publishing a New Company SOP",
        "summary": "Draft, review, approve, publish, and schedule review dates for new standard operating procedures.",
        "owner": "Operations",
        "review_date": "2026-06-30",
        "version": "0.1",
        "status": "Needs Review"
      },
      {
        "category": "SOP",
        "title": "Updating the LLM Capability Dashboard",
        "summary": "Use verified sources, assign confidence, mark review status, and update the JSON data file.",
        "owner": "AI Operations",
        "review_date": "2026-06-30",
        "version": "0.1",
        "status": "Needs Review"
      },
      {
        "category": "Training",
        "title": "New Staff AI Tool Orientation",
        "summary": "Intro path for when to use Codex, Claude, Gemini, and Perplexity in daily company work.",
        "owner": "Training",
        "review_date": "2026-07-15",
        "version": "0.1",
        "status": "Needs Review"
      },
      {
        "category": "Training",
        "title": "SOP Writing and Review Basics",
        "summary": "Training sequence for writing clear SOPs with owners, versioning, and review cycles.",
        "owner": "Operations",
        "review_date": "2026-07-15",
        "version": "0.1",
        "status": "Needs Review"
      },
      {
        "category": "How-To",
        "title": "Add a Newsletter Text File",
        "summary": "Place a newsletter text file in incoming_newsletters so the future automation can parse it.",
        "owner": "AI Operations",
        "review_date": "2026-06-15",
        "version": "0.1",
        "status": "Needs Review"
      },
      {
        "category": "How-To",
        "title": "Review a Draft LLM Update",
        "summary": "Check source quality, verify claims, approve or reject the proposed dashboard change.",
        "owner": "AI Operations",
        "review_date": "2026-06-15",
        "version": "0.1",
        "status": "Needs Review"
      },
      {
        "category": "FAQ",
        "title": "Which AI tool should I use first?",
        "summary": "Use Codex for build work, Claude for deep code reasoning, Gemini for Workspace-heavy planning, and Perplexity for source-backed research.",
        "owner": "AI Operations",
        "review_date": "2026-06-30",
        "version": "0.1",
        "status": "Needs Review"
      },
      {
        "category": "FAQ",
        "title": "Can the dashboard update itself?",
        "summary": "Yes, but the recommended first version is semi-automated: AI drafts updates and a human approves them.",
        "owner": "AI Operations",
        "review_date": "2026-06-30",
        "version": "0.1",
        "status": "Needs Review"
      },
      {
        "category": "Knowledge",
        "title": "Company Knowledge Governance",
        "summary": "The hub is the source of truth only when pages include owners, review dates, and approval status.",
        "owner": "Operations",
        "review_date": "2026-07-31",
        "version": "0.1",
        "status": "Needs Review"
      },
      {
        "category": "Knowledge",
        "title": "AI Stack Operating Roles",
        "summary": "Defines the working role of each major AI system in CyplexAI's internal operations.",
        "owner": "AI Operations",
        "review_date": "2026-07-31",
        "version": "0.1",
        "status": "Needs Review"
      }
    ]
  },
  team: {
    "schema_version": "0.1.0",
    "people": [
      {
        "id": "dave",
        "name": "Dave Ashby",
        "initials": "DA",
        "role": "Chief Learning Architect",
        "reports_to": null,
        "owns": [
          "Learning architecture",
          "AI methodology",
          "Final approvals"
        ],
        "tooltip": "Dave is listed publicly as Chief Learning Architect and owns learning architecture, AI methodology, and final approvals."
      },
      {
        "id": "jeff",
        "name": "Jeff Erni",
        "initials": "J",
        "role": "Business Operations & Development",
        "reports_to": "dave",
        "owns": [
          "Business operations",
          "Development",
          "Operational workflows"
        ],
        "tooltip": "Jeff is listed publicly as Business Operations & Development and owns operational workflows, business development, and implementation follow-through."
      },
      {
        "id": "steph",
        "name": "Stephanie Everett",
        "initials": "S",
        "role": "Education & Community Programs",
        "reports_to": "dave",
        "owns": [
          "Education programs",
          "Community programs",
          "Training content"
        ],
        "tooltip": "Stephanie is listed publicly as Education & Community Programs and owns education programming, community-facing programs, and training content."
      },
      {
        "id": "leslie",
        "name": "Leslie",
        "initials": "L",
        "role": "Quality Assurance & Strategy",
        "reports_to": "dave",
        "owns": [
          "Quality assurance",
          "Strategic review",
          "Team support"
        ],
        "tooltip": "Leslie supports quality assurance, strategic review, and team-facing support so important work is checked before it becomes company truth."
      }
    ],
    "ownerships": [
      {
        "area": "Company Hub",
        "owner_id": "dave",
        "description": "Overall learning architecture, what belongs in the hub, and what is ready to share."
      },
      {
        "area": "SOP Library",
        "owner_id": "jeff",
        "description": "Operational procedures, workflow clarity, and business operations documentation."
      },
      {
        "area": "Training Hub",
        "owner_id": "steph",
        "description": "Education programming, role-based training paths, onboarding materials, and learning resources."
      },
      {
        "area": "LLM Dashboard",
        "owner_id": "dave",
        "description": "AI methodology, capability tracking, source verification, and update approval."
      },
      {
        "area": "Quality Assurance",
        "owner_id": "leslie",
        "description": "Quality checks, strategic review, and making sure important resources are clear before the team relies on them."
      },
      {
        "area": "Operational Workflows",
        "owner_id": "jeff",
        "description": "Internal workflow ownership, business operations, and implementation follow-through."
      }
    ]
  }
};
