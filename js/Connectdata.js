const mentorsData = [
    // Existing mentors
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        title: "Career Development Specialist",
        qualifications: ["Ph.D. in Psychology", "Certified Career Counselor"],
        expertise: ["Career Transition", "Professional Development", "Leadership"],
        location: "New York, NY",
        email: "sarah.j@careerguide.com",
        phone: "(555) 123-4567",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 2,
        name: "Michael Chen",
        title: "Tech Industry Advisor",
        qualifications: ["MS in Computer Science", "MBA"],
        expertise: ["Software Development", "Tech Startups", "Product Management"],
        location: "San Francisco, CA",
        email: "michael.c@careerguide.com",
        phone: "(555) 234-5678",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        title: "Academic Counselor",
        qualifications: ["Ed.D. in Education", "Licensed Counselor"],
        expertise: ["Higher Education", "Research", "Academic Planning"],
        location: "Boston, MA",
        email: "emily.r@careerguide.com",
        phone: "(555) 345-6789",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 4,
        name: "James Wilson",
        title: "Business Strategy Consultant",
        qualifications: ["MBA", "Certified Management Consultant"],
        expertise: ["Strategic Planning", "Business Development", "Marketing"],
        location: "Chicago, IL",
        email: "james.w@careerguide.com",
        phone: "(555) 456-7890",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 5,
        name: "Lisa Thompson",
        title: "Creative Industries Mentor",
        qualifications: ["MFA in Design", "Innovation Leadership Certificate"],
        expertise: ["Design Thinking", "Creative Direction", "Digital Media"],
        location: "Los Angeles, CA",
        email: "lisa.t@careerguide.com",
        phone: "(555) 567-8901",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 6,
        name: "Dr. Robert Kim",
        title: "Healthcare Career Specialist",
        qualifications: ["MD", "Healthcare Management MBA"],
        expertise: ["Healthcare Administration", "Medical Careers", "Biotech"],
        location: "Seattle, WA",
        email: "robert.k@careerguide.com",
        phone: "(555) 678-9012",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 7,
        name: "Aisha Khan",
        title: "Digital Marketing Strategist",
        qualifications: ["MBA in Marketing", "Digital Marketing Certified Professional"],
        expertise: ["Marketing", "Digital Media", "Business Development"],
        location: "London, UK",
        email: "aisha.k@careerguide.com",
        phone: "(44) 20 1234 5678",
        image: "https://www.google.com/imgres?q=Digital%20Marketing%20Strategist%20indian&imgurl=https%3A%2F%2Fwww.roihunt.in%2Fwp-content%2Fuploads%2F2023%2F05%2Fcheerful-curly-business-girl-wearing-glasses-removebg-preview.png&imgrefurl=https%3A%2F%2Fwww.roihunt.in%2Fdigital-marketing-consultant-india%2F&docid=11yCLRuQduo5CM&tbnid=yg6FOwInNpB6gM&vet=12ahUKEwicntmzypuMAxVQdfUHHbB3OkoQM3oECGAQAA..i&w=612&h=408&hcb=2&itg=1&ved=2ahUKEwicntmzypuMAxVQdfUHHbB3OkoQM3oECGAQAA"
    },
    {
        id: 8,
        name: "Carlos Gomez",
        title: "Startup and Innovation Coach",
        qualifications: ["Entrepreneurship Diploma", "Certified Innovation Manager"],
        expertise: ["Tech Startups", "Product Management", "Strategic Planning"],
        location: "Madrid, Spain",
        email: "carlos.g@careerguide.com",
        phone: "(34) 91 234 5678",
        image: "https://images.unsplash.com/photo-1615814548481-9b2c25138148?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 9,
        name: "Dr. Priya Sharma",
        title: "Educational Leadership Consultant",
        qualifications: ["Ph.D. in Educational Administration", "Certified Leadership Coach"],
        expertise: ["Higher Education", "Leadership", "Academic Planning"],
        location: "Mumbai, India",
        email: "priya.s@careerguide.com",
        phone: "(91) 98201 23456",
        image: "https://www.google.com/imgres?q=priya%20sharmaa%20educarion%20specilist&imgurl=https%3A%2F%2Fvanitystardom.com%2Fwp-content%2Fuploads%2F2022%2F09%2F1649420147135-1.jpg&imgrefurl=https%3A%2F%2Fvanitystardom.com%2Finspiration-mom-and-entrepreneur-priya-sharma%2F&docid=uCs0KEKtlWVayM&tbnid=QQxHx6SN_zJcdM&vet=12ahUKEwiEsoHoypuMAxV3jq8BHTK4G4MQM3oECG4QAA..i&w=800&h=800&hcb=2&ved=2ahUKEwiEsoHoypuMAxV3jq8BHTK4G4MQM3oECG4QAA"
    },
    {
        id: 10,
        name: "Arjun Patel",
        title: "Software Development and AI Specialist",
        qualifications: ["MS in Computer Science", "AI Certification"],
        expertise: ["Software Development", "Research", "Tech Startups"],
        location: "Bangalore, India",
        email: "arjun.p@careerguide.com",
        phone: "(91) 99876 54321",
        image: "https://images.unsplash.com/photo-1542744166-8e07e997f76d?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 11,
        name: "Meera Nair",
        title: "Healthcare and Biotech Advisor",
        qualifications: ["MBBS", "Biotechnology MBA"],
        expertise: ["Medical Careers", "Biotech", "Healthcare Administration"],
        location: "Chennai, India",
        email: "meera.n@careerguide.com",
        phone: "(91) 98765 43210",
        image: "https://images.unsplash.com/photo-1582750433449-648ed12bb4d3?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 12,
        name: "Vikram Singh",
        title: "Design Thinking and Innovation Mentor",
        qualifications: ["Design Thinking Certification", "Innovation Management Diploma"],
        expertise: ["Design Thinking", "Product Management", "Creative Direction"],
        location: "New Delhi, India",
        email: "vikram.s@careerguide.com",
        phone: "(91) 99112 23344",
        image: "https://images.unsplash.com/photo-1600880292203-7901323f5f64?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 13,
        name: "Kenji Tanaka",
        title: "International Business Development Expert",
        qualifications: ["MBA in International Business", "Certified Global Business Leader"],
        expertise: ["Business Development", "Marketing", "Strategic Planning"],
        location: "Tokyo, Japan",
        email: "kenji.t@careerguide.com",
        phone: "(81) 3 1234 5678",
        image: "https://images.unsplash.com/photo-1596495578076-0c3a2be70d43?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 14,
        name: "Sofia Silva",
        title: "Environmental Sustainability Consultant",
        qualifications: ["MS in Environmental Science", "Sustainability Leadership Certificate"],
        expertise: ["Environmental Sustainability", "Research", "Project Management"],
        location: "Rio de Janeiro, Brazil",
        email: "sofia.s@careerguide.com",
        phone: "(55) 21 1234 5678",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 15,
        name: "David Dubois",
        title: "Finance and Investment Advisor",
        qualifications: ["CFA", "MBA in Finance"],
        expertise: ["Financial Planning", "Investment Management", "Wealth Management"],
        location: "Paris, France",
        email: "david.d@careerguide.com",
        phone: "(33) 1 12 34 56 78",
        image: "https://images.unsplash.com/photo-1508243529272-e17c3ddee916?auto=format&fit=crop&q=80&w=400"
    },

    // Additional Indian mentors with various expertise fields
    {
        id: 16,
        name: "Rajesh Kumar",
        title: "Financial Planning Expert",
        qualifications: ["MBA in Finance", "Certified Financial Planner"],
        expertise: ["Financial Planning", "Business Development", "Strategic Planning"],
        location: "Hyderabad, India",
        email: "rajesh.k@careerguide.com",
        phone: "(91) 90123 45678",
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 17,
        name: "Anjali Desai",
        title: "Digital Marketing and Media Specialist",
        qualifications: ["MA in Mass Communication", "Digital Marketing Certification"],
        expertise: ["Digital Media", "Marketing", "Creative Direction"],
        location: "Pune, India",
        email: "anjali.d@careerguide.com",
        phone: "(91) 95678 12345",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 18,
        name: "Dr. Sanjay Gupta",
        title: "Research and Academic Advisor",
        qualifications: ["Ph.D. in Economics", "Research Methodology Certification"],
        expertise: ["Research", "Academic Planning", "Higher Education"],
        location: "Kolkata, India",
        email: "sanjay.g@careerguide.com",
        phone: "(91) 98765 12345",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 19,
        name: "Neha Sharma",
        title: "Career Transition Coach",
        qualifications: ["MBA in HR", "ICF Certified Coach"],
        expertise: ["Career Transition", "Professional Development", "Leadership"],
        location: "Ahmedabad, India",
        email: "neha.s@careerguide.com",
        phone: "(91) 97531 24680",
        image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 20,
        name: "Karthik Rajan",
        title: "Product Management Expert",
        qualifications: ["MS in Engineering", "Product Management Certification"],
        expertise: ["Product Management", "Tech Startups", "Design Thinking"],
        location: "Coimbatore, India",
        email: "karthik.r@careerguide.com",
        phone: "(91) 86420 13579",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 21,
        name: "Sunita Jain",
        title: "Healthcare Administration Consultant",
        qualifications: ["Master's in Hospital Administration", "Healthcare Management Certification"],
        expertise: ["Healthcare Administration", "Medical Careers", "Leadership"],
        location: "Jaipur, India",
        email: "sunita.j@careerguide.com",
        phone: "(91) 93210 87654",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 22,
        name: "Varun Mehta",
        title: "Business Strategy and Development Advisor",
        qualifications: ["MBA in Strategy", "PMP Certification"],
        expertise: ["Business Development", "Strategic Planning", "Marketing"],
        location: "Lucknow, India",
        email: "varun.m@careerguide.com",
        phone: "(91) 98765 43211",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 23,
        name: "Dr. Lakshmi Rao",
        title: "Biotech and Research Specialist",
        qualifications: ["Ph.D. in Biotechnology", "Research Fellowship"],
        expertise: ["Biotech", "Research", "Academic Planning"],
        location: "Mysore, India",
        email: "lakshmi.r@careerguide.com",
        phone: "(91) 87654 32109",
        image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 24,
        name: "Rahul Verma",
        title: "Software and Tech Startups Mentor",
        qualifications: ["B.Tech in Computer Science", "Startup Accelerator Mentor"],
        expertise: ["Software Development", "Tech Startups", "Digital Media"],
        location: "Gurgaon, India",
        email: "rahul.v@careerguide.com",
        phone: "(91) 98123 45678",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 25,
        name: "Amita Singh",
        title: "Professional Development Coach",
        qualifications: ["MA in Psychology", "Executive Coaching Certification"],
        expertise: ["Professional Development", "Leadership", "Career Transition"],
        location: "Chandigarh, India",
        email: "amita.s@careerguide.com",
        phone: "(91) 99876 12345",
        image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 26,
        name: "Dr.V.Muralidhar",
        title: "Software and Tech Startups Mentor",
        qualifications: ["B.Tech in Computer Science", "Startup Accelerator Mentor"],
        expertise: ["Software Development", "Tech Startups", "Digital Media"],
        location: "Guntur, India",
        email: "vmdharxfr@gmail.com ",
        phone: "(91) 98123 45678",
        image: "{{ url_for('static', filename='assets/Muralibabai.jpeg') }}"
    }
];