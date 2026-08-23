const experiments = [
  {id:1,week:1,activity:'A',title:"Generating a Story",desc:"Use a generative AI text tool to create a short story and a poem from a prompt, written in the style of a specified author.",tools:["ChatGPT", "Claude", "Gemini"],driveLink:'',pdfLink:'',pptLink:''},
  {id:2,week:1,activity:'B',title:"Reimagining Book Covers",desc:"Generate book covers for classic literature using AI, emphasizing thematic representation.",tools:["Canva AI", "Adobe Firefly"],driveLink:'',pdfLink:'',pptLink:''},
  {id:3,week:2,activity:'A',title:"Study Guides Creation",desc:"Generate comprehensive study guides based on course materials.",tools:["ChatGPT", "Claude", "Gemini", "NotebookLM"],driveLink:'',pdfLink:'',pptLink:''},
  {id:4,week:2,activity:'B',title:"Design Digital Artwork",desc:"Create digital art from textual descriptions using AI.",tools:["Adobe Firefly", "Canva AI"],driveLink:'',pdfLink:'',pptLink:''},
  {id:5,week:3,activity:'A',title:"Conceptualize Science Fiction Worlds",desc:"Generate detailed descriptions of science fiction worlds using AI and visualize the same.",tools:["ChatGPT", "Gemini", "Image generators"],driveLink:'',pdfLink:'',pptLink:''},
  {id:6,week:3,activity:'B',title:"Creating Fashion Designs",desc:"Use AI to generate fashion designs focusing on historical accuracy of traditional garments from various cultures.",tools:["Image generators", "Canva AI"],driveLink:'',pdfLink:'',pptLink:''},
  {id:7,week:4,activity:'A',title:"Summarizing Articles",desc:"Use AI to summarize a lengthy article, focusing on key points and main ideas.",tools:["ChatGPT", "Claude", "NotebookLM"],driveLink:'',pdfLink:'',pptLink:''},
  {id:8,week:4,activity:'B',title:"Create AI-Generated Movie Scenes",desc:"Use AI to generate images depicting scenes from described movie scripts, focusing on capturing the emotion and action of the narrative.",tools:["Image generators", "Canva AI"],driveLink:'',pdfLink:'',pptLink:''},
  {id:9,week:5,activity:'A',title:"Translating Languages",desc:"Use AI to translate a paragraph from one language to another.",tools:["ChatGPT", "Gemini", "Claude"],driveLink:'',pdfLink:'',pptLink:''},
  {id:10,week:5,activity:'B',title:"Brand Development Using AI",desc:"Create a complete brand identity package including logo, color scheme, and brand guidelines.",tools:["Canva AI", "ChatGPT"],driveLink:'',pdfLink:'',pptLink:''},
  {id:11,week:6,activity:'A',title:"Generate Legal Documents",desc:"Use AI to draft basic legal documents like non-disclosure agreements or lease agreements.",tools:["ChatGPT", "Claude"],driveLink:'',pdfLink:'',pptLink:''},
  {id:12,week:6,activity:'B',title:"Animation Character Design",desc:"Use AI to design characters for an animation character, focusing on unique traits and expressions.",tools:["Image generators", "Canva AI"],driveLink:'',pdfLink:'',pptLink:''},
  {id:13,week:7,activity:'A',title:"Generating Cooking Recipes",desc:"Create unique cooking recipes based on specified ingredients using AI.",tools:["ChatGPT", "Gemini", "Claude"],driveLink:'',pdfLink:'',pptLink:''},
  {id:14,week:7,activity:'B',title:"AI-Generated Character Design",desc:"Create visual aids for subjects like history, science, and literature, bringing textbook content to life.",tools:["Image generators", "Canva AI"],driveLink:'',pdfLink:'',pptLink:''},
  {id:15,week:8,activity:'A',title:"Creating a Travel Itinerary",desc:"Design a detailed travel itinerary for a 3-day trip using AI.",tools:["ChatGPT", "Gemini", "Perplexity"],driveLink:'',pdfLink:'',pptLink:''},
  {id:16,week:8,activity:'B',title:"Custom Jewelry Designs",desc:"Use AI to design personalized jewelry based on individual preferences and trends.",tools:["Image generators", "Canva AI"],driveLink:'',pdfLink:'',pptLink:''},
  {id:17,week:9,activity:'A',title:"Personal Budgeting",desc:"Generate a personalized budget plan based on income and spending habits using AI.",tools:["ChatGPT", "Claude", "Gemini"],driveLink:'',pdfLink:'',pptLink:''},
  {id:18,week:9,activity:'B',title:"Architectural Rendering",desc:"Generate 3D architectural renderings of buildings or interior spaces based on provided specifications and styles using AI.",tools:["Image generators"],driveLink:'',pdfLink:'',pptLink:''},
  {id:19,week:10,activity:'A',title:"Composing Music",desc:"Compose a musical composition, complete with lyrics, piano, and guitar notes, utilizing AI software tailored to a specified genre or mood.",tools:["AI music tools", "ChatGPT"],driveLink:'',pdfLink:'',pptLink:''},
  {id:20,week:10,activity:'B',title:"Fashion Tech Integration",desc:"Create designs that integrate technology, such as wearable tech, using AI.",tools:["Image generators", "Canva AI"],driveLink:'',pdfLink:'',pptLink:''},
  {id:21,week:11,activity:'A',title:"Generate a Novel Outline",desc:"Create a detailed script for short film including characters, plot, and setting using AI.",tools:["ChatGPT", "Claude", "Gemini"],driveLink:'',pdfLink:'',pptLink:''},
  {id:22,week:11,activity:'B',title:"AI-Generated Landscape Design",desc:"Utilize AI to design landscapes for virtual environments or architectural projects.",tools:["Image generators"],driveLink:'',pdfLink:'',pptLink:''},
  {id:23,week:12,activity:'A',title:"Generating Workout Routines",desc:"Develop personalized workout routines based on individual fitness goals, preferences, and available equipment using AI.",tools:["ChatGPT", "Gemini", "Claude"],driveLink:'',pdfLink:'',pptLink:''},
  {id:24,week:12,activity:'B',title:"Digital Costume Design",desc:"Use AI to design detailed costumes for films, theater, or video games.",tools:["Image generators", "Canva AI"],driveLink:'',pdfLink:'',pptLink:''},
  {id:25,week:13,activity:'A',title:"Crafting Gardening Plans",desc:"Generate gardening plans for a backyard or indoor garden, considering factors like climate, available space, and preferred plants.",tools:["ChatGPT", "Gemini"],driveLink:'',pdfLink:'',pptLink:''},
  {id:26,week:13,activity:'B',title:"Space Exploration Visualization",desc:"Generate visualizations of distant planets, galaxies, or cosmic phenomena based on scientific data and descriptions.",tools:["Image generators", "ChatGPT"],driveLink:'',pdfLink:'',pptLink:''},
  {id:27,week:14,activity:'A',title:"Develop Presentation Slides",desc:"Create presentation slides on a given topic using AI.",tools:["Canva", "ChatGPT", "Gemini"],driveLink:'',pdfLink:'',pptLink:''},
  {id:28,week:14,activity:'B',title:"AI-Powered Archaeological Reconstructions",desc:"Generate visual and narrative reconstructions of archaeological sites or historical events.",tools:["Image generators", "ChatGPT"],driveLink:'',pdfLink:'',pptLink:''}
];

const tools = [
  {
    "name": "ChatGPT",
    "category": "AI Assistant",
    "description": "General-purpose AI assistant for study, brainstorming, writing, explanation, and coding guidance.",
    "best": "Study, explain, brainstorm",
    "url": "https://chatgpt.com/"
  },
  {
    "name": "Claude",
    "category": "AI Assistant",
    "description": "AI assistant useful for long-form reasoning, writing, analysis, and document-based tasks.",
    "best": "Research, writing, analysis",
    "url": "https://claude.ai/"
  },
  {
    "name": "Gemini",
    "category": "AI Assistant",
    "description": "AI assistant for research, brainstorming, summarization, and multimodal workflows.",
    "best": "Study, research, multimodal tasks",
    "url": "https://gemini.google.com/"
  },
  {
    "name": "Microsoft Copilot",
    "category": "AI Assistant",
    "description": "AI assistant integrated across Microsoft experiences and useful for productivity workflows.",
    "best": "Productivity, writing, research",
    "url": "https://copilot.microsoft.com/"
  },
  {
    "name": "Perplexity",
    "category": "Research & Study",
    "description": "Research-oriented answer engine for exploring questions and sources.",
    "best": "Research, quick exploration",
    "url": "https://www.perplexity.ai/"
  },
  {
    "name": "NotebookLM",
    "category": "Research & Study",
    "description": "Study and research assistant designed around supplied source material.",
    "best": "Notes, source-grounded study",
    "url": "https://notebooklm.google/"
  },
  {
    "name": "GitHub Copilot",
    "category": "Coding",
    "description": "Coding assistant that can help explain, complete, and improve code.",
    "best": "Programming, debugging",
    "url": "https://github.com/features/copilot"
  },
  {
    "name": "Canva AI",
    "category": "Design & Presentation",
    "description": "Design-focused AI features for graphics, documents, and presentations.",
    "best": "Slides, posters, visual content",
    "url": "https://www.canva.com/"
  },
  {
    "name": "Adobe Firefly",
    "category": "Image Generation",
    "description": "Creative AI tools for image generation and design exploration.",
    "best": "Images, creative concepts",
    "url": "https://firefly.adobe.com/"
  },
  {
    "name": "Google AI Studio",
    "category": "AI Platforms",
    "description": "Browser-based environment for exploring Google AI models and prototyping.",
    "best": "AI prototyping",
    "url": "https://aistudio.google.com/"
  },
  {
    "name": "HuggingFace",
    "category": "AI Platforms",
    "description": "Platform for models, datasets, demos, and AI experimentation.",
    "best": "Models, datasets",
    "url": "https://huggingface.co/"
  },
  {
    "name": "Cursor",
    "category": "Developer Tools",
    "description": "AI-first coding environment for project development and refactoring.",
    "best": "Coding, project building",
    "url": "https://www.cursor.com/"
  },
  {
    "name": "Postman",
    "category": "API & Integration",
    "description": "Tool for building, testing, and documenting APIs.",
    "best": "API testing",
    "url": "https://www.postman.com/"
  },
  {
    "name": "Figma",
    "category": "UI / UX",
    "description": "Collaborative interface design and prototyping platform.",
    "best": "UI design, prototyping",
    "url": "https://www.figma.com/"
  },
  {
    "name": "Blackbox AI",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": "https://www.blackbox.ai/"
  },
  {
    "name": "StackOverflow AI",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": "https://stackoverflow.co/ai/"
  },
  {
    "name": "Replicate",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": "https://replicate.com/"
  },
  {
    "name": "Emergent AI",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": ""
  },
  {
    "name": "Kiro (AWS)",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": ""
  },
  {
    "name": "LangChain",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": "https://www.langchain.com/"
  },
  {
    "name": "LlamaIndex",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": "https://www.llamaindex.ai/"
  },
  {
    "name": "Haystack",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": ""
  },
  {
    "name": "Semantic Kernel",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": ""
  },
  {
    "name": "Pinecone",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": "https://www.pinecone.io/"
  },
  {
    "name": "Weaviate",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": "https://weaviate.io/"
  },
  {
    "name": "Qdrant",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": "https://qdrant.tech/"
  },
  {
    "name": "Chroma",
    "category": "AI Platforms & AI Development Tools",
    "description": "AI Platforms & AI Development Tools resource for students, developers, researchers, or project teams.",
    "best": "AI Platforms & AI Development Tools",
    "url": "https://www.trychroma.com/"
  },
  {
    "name": "Adalo",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Bubble",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": "https://bubble.io/"
  },
  {
    "name": "FlutterFlow",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": "https://flutterflow.io/"
  },
  {
    "name": "Draftbit",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Thunkable",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "AppGyver",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Bravo",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Mendix",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "OutSystems",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Appian",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Microsoft Power Apps",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": "https://www.microsoft.com/power-platform/products/power-apps"
  },
  {
    "name": "Zoho Creator",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Glide",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Builder.io",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Softr",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Noloco",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Carrd",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Dorik",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Typedream",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Unicorn Platform",
    "category": "No-Code / Low-Code App Development",
    "description": "No-Code / Low-Code App Development resource for students, developers, researchers, or project teams.",
    "best": "No-Code / Low-Code App Development",
    "url": ""
  },
  {
    "name": "Airtable",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "Backendless",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "Directus",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "Xano",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "Coda",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "Internal.io",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "Supabase",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": "https://supabase.com/"
  },
  {
    "name": "Firebase",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": "https://firebase.google.com/"
  },
  {
    "name": "Hasura",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "Nhost",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "PlanetScale",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "Neon",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "Appwrite",
    "category": "Backend & Database Platforms",
    "description": "Backend & Database Platforms resource for students, developers, researchers, or project teams.",
    "best": "Backend & Database Platforms",
    "url": ""
  },
  {
    "name": "Zapier",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": "https://zapier.com/"
  },
  {
    "name": "Make",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": "https://www.make.com/"
  },
  {
    "name": "Parabola",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": ""
  },
  {
    "name": "Retool",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": ""
  },
  {
    "name": "ToolJet",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": ""
  },
  {
    "name": "Jet Admin",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": ""
  },
  {
    "name": "n8n",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": "https://n8n.io/"
  },
  {
    "name": "Pipedream",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": ""
  },
  {
    "name": "Bardeen",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": ""
  },
  {
    "name": "Workato",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": ""
  },
  {
    "name": "Activepieces",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": ""
  },
  {
    "name": "IFTTT",
    "category": "Workflow Automation",
    "description": "Workflow Automation resource for students, developers, researchers, or project teams.",
    "best": "Workflow Automation",
    "url": ""
  },
  {
    "name": "Webflow",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": "https://webflow.com/"
  },
  {
    "name": "Wix",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": "https://www.wix.com/"
  },
  {
    "name": "Framer",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": "https://www.framer.com/"
  },
  {
    "name": "WeWeb",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": ""
  },
  {
    "name": "Plasmic",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": ""
  },
  {
    "name": "Bildr",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": ""
  },
  {
    "name": "Lovable",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": ""
  },
  {
    "name": "Carrd",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": ""
  },
  {
    "name": "Dorik",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": ""
  },
  {
    "name": "Typedream",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": ""
  },
  {
    "name": "Unicorn Platform",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": ""
  },
  {
    "name": "Builder.io",
    "category": "Website Builders & Frontend Platforms",
    "description": "Website Builders & Frontend Platforms resource for students, developers, researchers, or project teams.",
    "best": "Website Builders & Frontend Platforms",
    "url": ""
  },
  {
    "name": "Canva",
    "category": "UI / UX Design Tools",
    "description": "UI / UX Design Tools resource for students, developers, researchers, or project teams.",
    "best": "UI / UX Design Tools",
    "url": "https://www.canva.com/"
  },
  {
    "name": "Gamma",
    "category": "UI / UX Design Tools",
    "description": "UI / UX Design Tools resource for students, developers, researchers, or project teams.",
    "best": "UI / UX Design Tools",
    "url": ""
  },
  {
    "name": "Adobe XD",
    "category": "UI / UX Design Tools",
    "description": "UI / UX Design Tools resource for students, developers, researchers, or project teams.",
    "best": "UI / UX Design Tools",
    "url": ""
  },
  {
    "name": "Sketch",
    "category": "UI / UX Design Tools",
    "description": "UI / UX Design Tools resource for students, developers, researchers, or project teams.",
    "best": "UI / UX Design Tools",
    "url": ""
  },
  {
    "name": "Penpot",
    "category": "UI / UX Design Tools",
    "description": "UI / UX Design Tools resource for students, developers, researchers, or project teams.",
    "best": "UI / UX Design Tools",
    "url": ""
  },
  {
    "name": "Uizard",
    "category": "UI / UX Design Tools",
    "description": "UI / UX Design Tools resource for students, developers, researchers, or project teams.",
    "best": "UI / UX Design Tools",
    "url": ""
  },
  {
    "name": "Relume",
    "category": "UI / UX Design Tools",
    "description": "UI / UX Design Tools resource for students, developers, researchers, or project teams.",
    "best": "UI / UX Design Tools",
    "url": ""
  },
  {
    "name": "Whimsical",
    "category": "UI / UX Design Tools",
    "description": "UI / UX Design Tools resource for students, developers, researchers, or project teams.",
    "best": "UI / UX Design Tools",
    "url": ""
  },
  {
    "name": "Replit",
    "category": "Developer Platforms & IDEs",
    "description": "Developer Platforms & IDEs resource for students, developers, researchers, or project teams.",
    "best": "Developer Platforms & IDEs",
    "url": "https://replit.com/"
  },
  {
    "name": "GitHub",
    "category": "Developer Platforms & IDEs",
    "description": "Developer Platforms & IDEs resource for students, developers, researchers, or project teams.",
    "best": "Developer Platforms & IDEs",
    "url": "https://github.com/"
  },
  {
    "name": "GitLab",
    "category": "Developer Platforms & IDEs",
    "description": "Developer Platforms & IDEs resource for students, developers, researchers, or project teams.",
    "best": "Developer Platforms & IDEs",
    "url": "https://gitlab.com/"
  },
  {
    "name": "CodeSandbox",
    "category": "Developer Platforms & IDEs",
    "description": "Developer Platforms & IDEs resource for students, developers, researchers, or project teams.",
    "best": "Developer Platforms & IDEs",
    "url": ""
  },
  {
    "name": "StackBlitz",
    "category": "Developer Platforms & IDEs",
    "description": "Developer Platforms & IDEs resource for students, developers, researchers, or project teams.",
    "best": "Developer Platforms & IDEs",
    "url": ""
  },
  {
    "name": "Codespaces",
    "category": "Developer Platforms & IDEs",
    "description": "Developer Platforms & IDEs resource for students, developers, researchers, or project teams.",
    "best": "Developer Platforms & IDEs",
    "url": ""
  },
  {
    "name": "VS Code",
    "category": "Developer Platforms & IDEs",
    "description": "Developer Platforms & IDEs resource for students, developers, researchers, or project teams.",
    "best": "Developer Platforms & IDEs",
    "url": "https://code.visualstudio.com/"
  },
  {
    "name": "Vercel",
    "category": "DevOps & Deployment",
    "description": "DevOps & Deployment resource for students, developers, researchers, or project teams.",
    "best": "DevOps & Deployment",
    "url": "https://vercel.com/"
  },
  {
    "name": "Netlify",
    "category": "DevOps & Deployment",
    "description": "DevOps & Deployment resource for students, developers, researchers, or project teams.",
    "best": "DevOps & Deployment",
    "url": "https://www.netlify.com/"
  },
  {
    "name": "Render",
    "category": "DevOps & Deployment",
    "description": "DevOps & Deployment resource for students, developers, researchers, or project teams.",
    "best": "DevOps & Deployment",
    "url": "https://render.com/"
  },
  {
    "name": "Railway",
    "category": "DevOps & Deployment",
    "description": "DevOps & Deployment resource for students, developers, researchers, or project teams.",
    "best": "DevOps & Deployment",
    "url": ""
  },
  {
    "name": "Fly.io",
    "category": "DevOps & Deployment",
    "description": "DevOps & Deployment resource for students, developers, researchers, or project teams.",
    "best": "DevOps & Deployment",
    "url": ""
  },
  {
    "name": "Heroku",
    "category": "DevOps & Deployment",
    "description": "DevOps & Deployment resource for students, developers, researchers, or project teams.",
    "best": "DevOps & Deployment",
    "url": ""
  },
  {
    "name": "Docker",
    "category": "DevOps & Deployment",
    "description": "DevOps & Deployment resource for students, developers, researchers, or project teams.",
    "best": "DevOps & Deployment",
    "url": "https://www.docker.com/"
  },
  {
    "name": "Kubernetes",
    "category": "DevOps & Deployment",
    "description": "DevOps & Deployment resource for students, developers, researchers, or project teams.",
    "best": "DevOps & Deployment",
    "url": ""
  },
  {
    "name": "Terraform",
    "category": "DevOps & Deployment",
    "description": "DevOps & Deployment resource for students, developers, researchers, or project teams.",
    "best": "DevOps & Deployment",
    "url": ""
  },
  {
    "name": "Cloudflare",
    "category": "DevOps & Deployment",
    "description": "DevOps & Deployment resource for students, developers, researchers, or project teams.",
    "best": "DevOps & Deployment",
    "url": ""
  },
  {
    "name": "Tableau",
    "category": "Data Analytics & BI",
    "description": "Data Analytics & BI resource for students, developers, researchers, or project teams.",
    "best": "Data Analytics & BI",
    "url": ""
  },
  {
    "name": "Power BI",
    "category": "Data Analytics & BI",
    "description": "Data Analytics & BI resource for students, developers, researchers, or project teams.",
    "best": "Data Analytics & BI",
    "url": ""
  },
  {
    "name": "Metabase",
    "category": "Data Analytics & BI",
    "description": "Data Analytics & BI resource for students, developers, researchers, or project teams.",
    "best": "Data Analytics & BI",
    "url": ""
  },
  {
    "name": "Apache Superset",
    "category": "Data Analytics & BI",
    "description": "Data Analytics & BI resource for students, developers, researchers, or project teams.",
    "best": "Data Analytics & BI",
    "url": ""
  },
  {
    "name": "Redash",
    "category": "Data Analytics & BI",
    "description": "Data Analytics & BI resource for students, developers, researchers, or project teams.",
    "best": "Data Analytics & BI",
    "url": ""
  },
  {
    "name": "Looker Studio",
    "category": "Data Analytics & BI",
    "description": "Data Analytics & BI resource for students, developers, researchers, or project teams.",
    "best": "Data Analytics & BI",
    "url": ""
  },
  {
    "name": "Grafana",
    "category": "Data Analytics & BI",
    "description": "Data Analytics & BI resource for students, developers, researchers, or project teams.",
    "best": "Data Analytics & BI",
    "url": ""
  },
  {
    "name": "Semantic Scholar",
    "category": "Research & Academic Tools",
    "description": "Research & Academic Tools resource for students, developers, researchers, or project teams.",
    "best": "Research & Academic Tools",
    "url": "https://www.semanticscholar.org/"
  },
  {
    "name": "Connected Papers",
    "category": "Research & Academic Tools",
    "description": "Research & Academic Tools resource for students, developers, researchers, or project teams.",
    "best": "Research & Academic Tools",
    "url": ""
  },
  {
    "name": "Research Rabbit",
    "category": "Research & Academic Tools",
    "description": "Research & Academic Tools resource for students, developers, researchers, or project teams.",
    "best": "Research & Academic Tools",
    "url": ""
  },
  {
    "name": "Elicit",
    "category": "Research & Academic Tools",
    "description": "Research & Academic Tools resource for students, developers, researchers, or project teams.",
    "best": "Research & Academic Tools",
    "url": ""
  },
  {
    "name": "Scite",
    "category": "Research & Academic Tools",
    "description": "Research & Academic Tools resource for students, developers, researchers, or project teams.",
    "best": "Research & Academic Tools",
    "url": ""
  },
  {
    "name": "Zotero",
    "category": "Research & Academic Tools",
    "description": "Research & Academic Tools resource for students, developers, researchers, or project teams.",
    "best": "Research & Academic Tools",
    "url": "https://www.zotero.org/"
  },
  {
    "name": "Mendeley",
    "category": "Research & Academic Tools",
    "description": "Research & Academic Tools resource for students, developers, researchers, or project teams.",
    "best": "Research & Academic Tools",
    "url": ""
  },
  {
    "name": "Overleaf",
    "category": "Research & Academic Tools",
    "description": "Research & Academic Tools resource for students, developers, researchers, or project teams.",
    "best": "Research & Academic Tools",
    "url": ""
  },
  {
    "name": "Grammarly",
    "category": "Research & Academic Tools",
    "description": "Research & Academic Tools resource for students, developers, researchers, or project teams.",
    "best": "Research & Academic Tools",
    "url": ""
  },
  {
    "name": "Trinka AI",
    "category": "Research & Academic Tools",
    "description": "Research & Academic Tools resource for students, developers, researchers, or project teams.",
    "best": "Research & Academic Tools",
    "url": ""
  },
  {
    "name": "Kaggle",
    "category": "Dataset Platforms",
    "description": "Dataset Platforms resource for students, developers, researchers, or project teams.",
    "best": "Dataset Platforms",
    "url": "https://www.kaggle.com/"
  },
  {
    "name": "UCI ML Repository",
    "category": "Dataset Platforms",
    "description": "Dataset Platforms resource for students, developers, researchers, or project teams.",
    "best": "Dataset Platforms",
    "url": ""
  },
  {
    "name": "HuggingFace Datasets",
    "category": "Dataset Platforms",
    "description": "Dataset Platforms resource for students, developers, researchers, or project teams.",
    "best": "Dataset Platforms",
    "url": ""
  },
  {
    "name": "Google Dataset Search",
    "category": "Dataset Platforms",
    "description": "Dataset Platforms resource for students, developers, researchers, or project teams.",
    "best": "Dataset Platforms",
    "url": ""
  },
  {
    "name": "AWS Open Data",
    "category": "Dataset Platforms",
    "description": "Dataset Platforms resource for students, developers, researchers, or project teams.",
    "best": "Dataset Platforms",
    "url": ""
  },
  {
    "name": "World Bank Data",
    "category": "Dataset Platforms",
    "description": "Dataset Platforms resource for students, developers, researchers, or project teams.",
    "best": "Dataset Platforms",
    "url": ""
  },
  {
    "name": "Data.gov",
    "category": "Dataset Platforms",
    "description": "Dataset Platforms resource for students, developers, researchers, or project teams.",
    "best": "Dataset Platforms",
    "url": ""
  },
  {
    "name": "FiveThirtyEight",
    "category": "Dataset Platforms",
    "description": "Dataset Platforms resource for students, developers, researchers, or project teams.",
    "best": "Dataset Platforms",
    "url": ""
  },
  {
    "name": "Notion",
    "category": "Knowledge Management",
    "description": "Knowledge Management resource for students, developers, researchers, or project teams.",
    "best": "Knowledge Management",
    "url": "https://www.notion.so/"
  },
  {
    "name": "Obsidian",
    "category": "Knowledge Management",
    "description": "Knowledge Management resource for students, developers, researchers, or project teams.",
    "best": "Knowledge Management",
    "url": "https://obsidian.md/"
  },
  {
    "name": "Logseq",
    "category": "Knowledge Management",
    "description": "Knowledge Management resource for students, developers, researchers, or project teams.",
    "best": "Knowledge Management",
    "url": ""
  },
  {
    "name": "Roam Research",
    "category": "Knowledge Management",
    "description": "Knowledge Management resource for students, developers, researchers, or project teams.",
    "best": "Knowledge Management",
    "url": ""
  },
  {
    "name": "Readwise",
    "category": "Knowledge Management",
    "description": "Knowledge Management resource for students, developers, researchers, or project teams.",
    "best": "Knowledge Management",
    "url": ""
  },
  {
    "name": "Evernote",
    "category": "Knowledge Management",
    "description": "Knowledge Management resource for students, developers, researchers, or project teams.",
    "best": "Knowledge Management",
    "url": ""
  },
  {
    "name": "Trello",
    "category": "Project Management",
    "description": "Project Management resource for students, developers, researchers, or project teams.",
    "best": "Project Management",
    "url": "https://trello.com/"
  },
  {
    "name": "Asana",
    "category": "Project Management",
    "description": "Project Management resource for students, developers, researchers, or project teams.",
    "best": "Project Management",
    "url": "https://asana.com/"
  },
  {
    "name": "ClickUp",
    "category": "Project Management",
    "description": "Project Management resource for students, developers, researchers, or project teams.",
    "best": "Project Management",
    "url": "https://clickup.com/"
  },
  {
    "name": "Monday.com",
    "category": "Project Management",
    "description": "Project Management resource for students, developers, researchers, or project teams.",
    "best": "Project Management",
    "url": ""
  },
  {
    "name": "Linear",
    "category": "Project Management",
    "description": "Project Management resource for students, developers, researchers, or project teams.",
    "best": "Project Management",
    "url": ""
  },
  {
    "name": "Jira",
    "category": "Project Management",
    "description": "Project Management resource for students, developers, researchers, or project teams.",
    "best": "Project Management",
    "url": "https://www.atlassian.com/software/jira"
  },
  {
    "name": "Insomnia",
    "category": "API & Integration Tools",
    "description": "API & Integration Tools resource for students, developers, researchers, or project teams.",
    "best": "API & Integration Tools",
    "url": ""
  },
  {
    "name": "Swagger",
    "category": "API & Integration Tools",
    "description": "API & Integration Tools resource for students, developers, researchers, or project teams.",
    "best": "API & Integration Tools",
    "url": ""
  },
  {
    "name": "RapidAPI",
    "category": "API & Integration Tools",
    "description": "API & Integration Tools resource for students, developers, researchers, or project teams.",
    "best": "API & Integration Tools",
    "url": ""
  },
  {
    "name": "Hoppscotch",
    "category": "API & Integration Tools",
    "description": "API & Integration Tools resource for students, developers, researchers, or project teams.",
    "best": "API & Integration Tools",
    "url": ""
  },
  {
    "name": "Bettermode",
    "category": "Community & Platform Builders",
    "description": "Community & Platform Builders resource for students, developers, researchers, or project teams.",
    "best": "Community & Platform Builders",
    "url": ""
  },
  {
    "name": "Pory",
    "category": "Community & Platform Builders",
    "description": "Community & Platform Builders resource for students, developers, researchers, or project teams.",
    "best": "Community & Platform Builders",
    "url": ""
  },
  {
    "name": "Softr",
    "category": "Community & Platform Builders",
    "description": "Community & Platform Builders resource for students, developers, researchers, or project teams.",
    "best": "Community & Platform Builders",
    "url": ""
  },
  {
    "name": "Noloco",
    "category": "Community & Platform Builders",
    "description": "Community & Platform Builders resource for students, developers, researchers, or project teams.",
    "best": "Community & Platform Builders",
    "url": ""
  },
  {
    "name": "Stacker",
    "category": "Community & Platform Builders",
    "description": "Community & Platform Builders resource for students, developers, researchers, or project teams.",
    "best": "Community & Platform Builders",
    "url": ""
  },
  {
    "name": "Circle.so",
    "category": "Community & Platform Builders",
    "description": "Community & Platform Builders resource for students, developers, researchers, or project teams.",
    "best": "Community & Platform Builders",
    "url": ""
  },
  {
    "name": "Jotform",
    "category": "Form Builders",
    "description": "Form Builders resource for students, developers, researchers, or project teams.",
    "best": "Form Builders",
    "url": ""
  },
  {
    "name": "Typeform",
    "category": "Form Builders",
    "description": "Form Builders resource for students, developers, researchers, or project teams.",
    "best": "Form Builders",
    "url": ""
  },
  {
    "name": "Google Forms",
    "category": "Form Builders",
    "description": "Form Builders resource for students, developers, researchers, or project teams.",
    "best": "Form Builders",
    "url": "https://www.google.com/forms/about/"
  },
  {
    "name": "Tally",
    "category": "Form Builders",
    "description": "Form Builders resource for students, developers, researchers, or project teams.",
    "best": "Form Builders",
    "url": ""
  },
  {
    "name": "Airtable",
    "category": "Form Builders",
    "description": "Form Builders resource for students, developers, researchers, or project teams.",
    "best": "Form Builders",
    "url": ""
  }
];

const resources = [
  {
    "id": 1,
    "title": "Course Introduction PPT",
    "type": "PPT",
    "week": "General",
    "description": "Placeholder for course introduction slides.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 2,
    "title": "Course Syllabus PDF",
    "type": "PDF",
    "week": "General",
    "description": "Provided syllabus for EMA1109.",
    "link": "EMA1109-Generative-AI-Tools-Syllabus.pdf",
    "status": "live"
  },
  {
    "id": 3,
    "title": "AIML Engineer 2030 Keynote",
    "type": "PPT",
    "week": "General",
    "description": "Skills, careers, project-building roadmap, AI engineering expectations, and student guidance from the attached keynote.",
    "link": "AIML_Engineer_2030_Keynote.pptx",
    "status": "live"
  },
  {
    "id": 4,
    "title": "Prompt Engineering Notes",
    "type": "PDF",
    "week": "General",
    "description": "Placeholder for prompt engineering study material.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 5,
    "title": "Project Builder Toolkit",
    "type": "Website",
    "week": "General",
    "description": "Categorized ecosystem of platforms, websites, AI tools, development, design, research, and project resources.",
    "link": "toolkit.html",
    "status": "live"
  },
  {
    "id": 6,
    "title": "Week 01 PPT Resource",
    "type": "PPT",
    "week": 1,
    "description": "Placeholder for Week 01 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 7,
    "title": "Week 01 PDF Resource",
    "type": "PDF",
    "week": 1,
    "description": "Placeholder for Week 01 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 8,
    "title": "Week 01 Google Drive Resource",
    "type": "Google Drive",
    "week": 1,
    "description": "Placeholder for Week 01 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 9,
    "title": "Week 02 PPT Resource",
    "type": "PPT",
    "week": 2,
    "description": "Placeholder for Week 02 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 10,
    "title": "Week 02 PDF Resource",
    "type": "PDF",
    "week": 2,
    "description": "Placeholder for Week 02 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 11,
    "title": "Week 02 Google Drive Resource",
    "type": "Google Drive",
    "week": 2,
    "description": "Placeholder for Week 02 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 12,
    "title": "Week 03 PPT Resource",
    "type": "PPT",
    "week": 3,
    "description": "Placeholder for Week 03 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 13,
    "title": "Week 03 PDF Resource",
    "type": "PDF",
    "week": 3,
    "description": "Placeholder for Week 03 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 14,
    "title": "Week 03 Google Drive Resource",
    "type": "Google Drive",
    "week": 3,
    "description": "Placeholder for Week 03 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 15,
    "title": "Week 04 PPT Resource",
    "type": "PPT",
    "week": 4,
    "description": "Placeholder for Week 04 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 16,
    "title": "Week 04 PDF Resource",
    "type": "PDF",
    "week": 4,
    "description": "Placeholder for Week 04 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 17,
    "title": "Week 04 Google Drive Resource",
    "type": "Google Drive",
    "week": 4,
    "description": "Placeholder for Week 04 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 18,
    "title": "Week 05 PPT Resource",
    "type": "PPT",
    "week": 5,
    "description": "Placeholder for Week 05 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 19,
    "title": "Week 05 PDF Resource",
    "type": "PDF",
    "week": 5,
    "description": "Placeholder for Week 05 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 20,
    "title": "Week 05 Google Drive Resource",
    "type": "Google Drive",
    "week": 5,
    "description": "Placeholder for Week 05 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 21,
    "title": "Week 06 PPT Resource",
    "type": "PPT",
    "week": 6,
    "description": "Placeholder for Week 06 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 22,
    "title": "Week 06 PDF Resource",
    "type": "PDF",
    "week": 6,
    "description": "Placeholder for Week 06 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 23,
    "title": "Week 06 Google Drive Resource",
    "type": "Google Drive",
    "week": 6,
    "description": "Placeholder for Week 06 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 24,
    "title": "Week 07 PPT Resource",
    "type": "PPT",
    "week": 7,
    "description": "Placeholder for Week 07 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 25,
    "title": "Week 07 PDF Resource",
    "type": "PDF",
    "week": 7,
    "description": "Placeholder for Week 07 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 26,
    "title": "Week 07 Google Drive Resource",
    "type": "Google Drive",
    "week": 7,
    "description": "Placeholder for Week 07 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 27,
    "title": "Week 08 PPT Resource",
    "type": "PPT",
    "week": 8,
    "description": "Placeholder for Week 08 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 28,
    "title": "Week 08 PDF Resource",
    "type": "PDF",
    "week": 8,
    "description": "Placeholder for Week 08 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 29,
    "title": "Week 08 Google Drive Resource",
    "type": "Google Drive",
    "week": 8,
    "description": "Placeholder for Week 08 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 30,
    "title": "Week 09 PPT Resource",
    "type": "PPT",
    "week": 9,
    "description": "Placeholder for Week 09 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 31,
    "title": "Week 09 PDF Resource",
    "type": "PDF",
    "week": 9,
    "description": "Placeholder for Week 09 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 32,
    "title": "Week 09 Google Drive Resource",
    "type": "Google Drive",
    "week": 9,
    "description": "Placeholder for Week 09 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 33,
    "title": "Week 10 PPT Resource",
    "type": "PPT",
    "week": 10,
    "description": "Placeholder for Week 10 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 34,
    "title": "Week 10 PDF Resource",
    "type": "PDF",
    "week": 10,
    "description": "Placeholder for Week 10 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 35,
    "title": "Week 10 Google Drive Resource",
    "type": "Google Drive",
    "week": 10,
    "description": "Placeholder for Week 10 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 36,
    "title": "Week 11 PPT Resource",
    "type": "PPT",
    "week": 11,
    "description": "Placeholder for Week 11 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 37,
    "title": "Week 11 PDF Resource",
    "type": "PDF",
    "week": 11,
    "description": "Placeholder for Week 11 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 38,
    "title": "Week 11 Google Drive Resource",
    "type": "Google Drive",
    "week": 11,
    "description": "Placeholder for Week 11 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 39,
    "title": "Week 12 PPT Resource",
    "type": "PPT",
    "week": 12,
    "description": "Placeholder for Week 12 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 40,
    "title": "Week 12 PDF Resource",
    "type": "PDF",
    "week": 12,
    "description": "Placeholder for Week 12 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 41,
    "title": "Week 12 Google Drive Resource",
    "type": "Google Drive",
    "week": 12,
    "description": "Placeholder for Week 12 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 42,
    "title": "Week 13 PPT Resource",
    "type": "PPT",
    "week": 13,
    "description": "Placeholder for Week 13 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 43,
    "title": "Week 13 PDF Resource",
    "type": "PDF",
    "week": 13,
    "description": "Placeholder for Week 13 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 44,
    "title": "Week 13 Google Drive Resource",
    "type": "Google Drive",
    "week": 13,
    "description": "Placeholder for Week 13 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 45,
    "title": "Week 14 PPT Resource",
    "type": "PPT",
    "week": 14,
    "description": "Placeholder for Week 14 ppt resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 46,
    "title": "Week 14 PDF Resource",
    "type": "PDF",
    "week": 14,
    "description": "Placeholder for Week 14 pdf resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 47,
    "title": "Week 14 Google Drive Resource",
    "type": "Google Drive",
    "week": 14,
    "description": "Placeholder for Week 14 google drive resource.",
    "link": "",
    "status": "coming-soon"
  },
  {
    "id": 48,
    "title": "AIML Engineer 2030 Reference — Free/Open Toolkit",
    "type": "PPT",
    "week": "General",
    "description": "Attached keynote includes curated study, coding, research and project-building resources for first-year to final-year growth.",
    "link": "AIML_Engineer_2030_Keynote.pptx",
    "status": "live"
  }
];

const evaluationSheetUrl = "";
