
"use client"

import { useState } from "react"

// Institution logos
import udomLogo from "@/assets/images/institutions/udom-logo.png"
import atcLogo from "@/assets/images/institutions/atc-logo.png"
import uniGrazLogo from "@/assets/images/institutions/uni-graz-logo.png"

// Team member images
import drAbdallahSeniNew from "@/assets/images/team/dr-abdallah-seni-new.png"
import drIgnasiaMligo from "@/assets/images/team/dr-ignasia-mligo.png"
import drAlcuinMwalongo from "@/assets/images/team/dr-alcuin-mwalongo.png"
import drLukaMkonongwaNew from "@/assets/images/team/dr-luka-mkonongwa-new.png"
import drLabaniKanyonga from "@/assets/images/team/dr-labani-kanyonga.png"
import drNaisujakiLyimo from "@/assets/images/team/dr-naisujaki-lyimo.png"
import drNicodemusMbwambo from "@/assets/images/team/dr-nicodemus-mbwambo.png"
import graceMwakasege from "@/assets/images/team/grace-mwakasege.png"
import emmanuelKileo from "@/assets/images/team/emmanuel-kileo.jpg"
import neemaMushi from "@/assets/images/team/neema-mushi.png"
import danielMassawe from "@/assets/images/team/daniel-massawe.png"
import josephMwanga from "@/assets/images/team/joseph-mwanga.png"
import profDrHeikeWendt from "@/assets/images/team/prof-dr-heike-wendt.png"
import drAnnaAleksanyan from "@/assets/images/team/dr-anna-aleksanyan.png"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Linkedin, Facebook, ExternalLink, MapPin } from "lucide-react"

const teamMembers = [
  // University of Dodoma
  {
    "id": 1,
    "name": "Dr. Abdallah Jacob Seni",
    "role": "Project Leader",
    "institution": "University of Dodoma",
    "institutionColor": "orange",
    "image": drAbdallahSeniNew,
    "shortBio": "Senior lecturer of educational foundations and continuing education, researcher and experienced consultant.",
    "fullBio": "Dr. Abdallah Jacob Seni (PhD) is a Senior lecturer of educational foundations and continuing education, researcher and an experienced consultant with deep experience in social protection including Children's rights and education, gender, inclusive education and Competency Based Curriculum. He has published widely in these areas.\n\nAs the Project Leader for STEP-STUDY at the University of Dodoma, Dr. Seni brings extensive expertise in educational leadership and policy development. His work focuses on strengthening educational systems through evidence-based approaches and collaborative partnerships, with particular emphasis on teacher professional development and curriculum implementation.",
    "email": "abdallah.seni@udom.ac.tz",
    "linkedin": "#"
  },
  {
    "id": 2,
    "name": "Dr. Ignasia Mligo",
    "role": "Project Manager",
    "institution": "University of Dodoma",
    "institutionColor": "orange",
    "image": drIgnasiaMligo,
    "shortBio": "Managing project operations and coordinating research activities across multiple institutions.",
    "fullBio": "Dr. Ignasia Mligo brings exceptional project management skills to the STEP-STUDY team. She oversees the coordination of research activities, ensures timely delivery of project milestones, and facilitates communication between partner institutions. Her expertise in educational research methodology strengthens our collaborative efforts.",
    "email": "ignasia.mligo@udom.ac.tz"
  },
  {
    "id": 3,
    "name": "Dr. Alcuin Mwalongo",
    "role": "Field Research Officer",
    "institution": "University of Dodoma",
    "institutionColor": "orange",
    "image": drAlcuinMwalongo,
    "shortBio": "Leading field research activities and data collection in primary schools.",
    "fullBio": "Dr. Alcuin Mwalongo is currently a lecturer at The University of Dodoma, College of Education. He specialises in education technology, teaching and learning, and teaching English as a foreign language. Dr. Mwalongo holds a PhD in education technology from the University of Waikato, New Zealand, a Master of Teacher Education from the Aga Khan University, Institute for Educational Development, Karachi, and a B.A.ED from the University of Dar es Salaam.\n\nHe has been involved in several consultancy services with organisations such as The British Council, HakiElimu, Oxfam, Institute of Public Accountability (Wajibu), TCU, TEN-MET, and Twaweza. He has a wide experience in conducting qualitative, quantitative, and mixed methods research approaches. He is also a proficient user of software for both quantitative and qualitative data analysis such as SPSS, NVivo and MAXQDA.\n\nPublications:\nMwalongo, A. I. (2024). Combating gender stereotypes in schools: Gender, education level, and teaching experience of heads of school as moderating factors. Journal of Management and Policy Issues in Education, 1(1), 1-18.\n\nMwalongo, A. I. (2023). The influence of age on pre-service teachers' intention to use ICTs in their future teaching career. Journal of African Education, 4(3), 273-295.\n\nMwalongo, A. I., & Mkonongwa, L. M. (2023). Lecturers' perceptions of support for integrating information and communication technologies in teaching and learning. Technology, Knowledge and Learning, 28(3), 1199-1221.",
    "email": "alcuin.mwalongo@udom.ac.tz",
    "website": "orcid.org/0000-0003-0787-5152"
  },
  {
    "id": 4,
    "name": "Dr. Luka Mathayo Mkonongwa",
    "role": "Project Coordinator",
    "institution": "University of Dodoma",
    "institutionColor": "orange",
    "image": drLukaMkonongwaNew,
    "shortBio": "Coordinating research activities and ensuring alignment with project objectives.",
    "fullBio": "Dr. Luka Mathayo Mkonongwa formerly worked as a secondary school teacher for English Language and History subjects and later as a lecturer for Educational Psychology and Curriculum Studies in the University of Dar es Salaam and the University of Dodoma, Tanzania. He has a doctorate in education from University College Dublin, Ireland; a Master's Degree in Applied Social Psychology from the University of Dar es Salaam; a Bachelor of Arts with Education and a Diploma in Education from Morogoro Teachers' College in Tanzania.\n\nHis research centers on language studies, technology in education, inclusive education and curriculum studies. He has worked as a researcher consultant and adviser to various projects run by local and international organizations such as HakiElimu, TEN/MET, Wajibu Institute, Save the Children, ADD International, Action Aid, TACAID, The British Council, Shule Bora Project, Re-Tooling, and UNICEF.\n\nDr. Luka has been working as a national facilitator for different professional development programs for teachers run by the ministry of education, science and technology since 2007.",
    "email": "luka.mkonongwa@udom.ac.tz"
  },
  {
    "id": 5,
    "name": "Dr. Labani Kanyonga",
    "role": "Research Coordinator",
    "institution": "Arusha Technical College",
    "institutionColor": "blue",
    "image": drLabaniKanyonga,
    "shortBio": "Coordinating research activities at ATC and managing technical education initiatives.",
    "fullBio": "Dr. Kanyonga is a Lecturer at Arusha Technical College (ATC), at the Department of Applied and Social Studies has more than ten years of experience teaching at Tanzania's tertiary and higher education levels. He is a highly skilled educator and researcher with a PhD in Educational Research and Evaluation from Moi University, Kenya and Master's degree of Education in Assessment and Evaluation from Jordan University College of Education, a constituent college of the St. Augustine University of Tanzania. He teaches Research Methodology and Engineering Professional Ethics and Professional Conduct.\n\nHe has a proven track record of research skills acquired through studying and attending various workshops and conferences locally and internationally and has demonstrated proficiency in utilizing a wide range of research methods and statistical analysis techniques to conduct research for generating quality data useful for making informed decisions. Notably, he was recognized as one of the 50 best young researchers selected worldwide to participate in the Research Opportunity Week at the Technical University of Munich, Germany.\n\nHe has a strong foundation of quantitative, qualitative and mixed researches. His current research interests focus on teacher professional development particularly in areas such as assessment and evaluation in education, inquiry-based learning, gender and science learning, climate change education and development and promoting 21st century skills.\n\nCurrently, Dr. Kanyonga serves as a Project Coordinator at Arusha Technical College for the STEP STUDY which is large-scale, systematic research aimed at generating robust evidence-based insight into the professional development of primary school teachers in Tanzania, focusing on addressing systemic gaps and improving the implementation of the competence-based curriculum.\n\nPublications:\nKanyonga, L, Chumba, S.K, Kessio, D. K., Kafanabo, E. J. (2025) Students' Cognitive and Emotional Engagement in Inquiry-Based Learning: A Systematic Review. Journal of Research in Science, Mathematics and Technology Education, 8(1), 1-24.\n\nKanyonga, L. (2024). Exploring the Relationship Between Teachers' Pedagogical Content Knowledge and Students' Achievement in Science: A Systematic Review. Journal of Research in Science, Mathematics and Technology Education, 7(2), 1-22.\n\nKanyonga, L. (2023). Assessment Practices in Competence-Based Curriculum: Challenges and Opportunities. International Journal of Educational Research, 15(3), 45-62.",
    "email": "labani.kanyonga@atc.ac.tz",
    "linkedin": "https://www.linkedin.com/in/dr-labani-kanyonga-phd-b39b14208"
  },
  {
    "id": 6,
    "name": "Dr. Naisujaki S. Lyimo",
    "role": "Senior Lecturer | Acting DRCP Director | Head of Department – Applied Science & Social Studies | STEP-STUDY Project Manager",
    "institution": "Arusha Technical College",
    "institutionColor": "blue",
    "image": drNaisujakiLyimo,
    "shortBio": "Senior Lecturer specializing in Curriculum Development with focus on Competence-Based Training.",
    "fullBio": "Dr. Lyimo is a Senior Lecturer at Arusha Technical College, Tanzania, and an expert in Curriculum Development with a specialization in Competence-Based Training. She holds a Ph.D. in Education from MOI University, Kenya, and has dedicated her career to advancing technical and vocational education (TVET) in Tanzania. She is an educator, researcher and consultant.\n\nDr. Lyimo is the Acting Director of Research, Consultancy and Publication (DRCP), and Head of the Department of Applied Science and Social Studies at Arusha Technical College, where she oversees institutional research strategy, academic publishing, and consultancy activities. Additionally, she serves as the UNEVOC Centre Coordinator at ATC, representing the college in the UNESCO-UNEVOC global network of technical and vocational education and training (TVET) institutions. She worked as a team leader training programs (curriculum development) under the World Bank Project Named-East Africa Skills for Transformation and Regional Integration Project (EASTRIP).\n\nCurrently Dr. Lyimo is among the team members undertaking a STEP STUDY Tanzania, she serves as a Project Manager at ATC, collaborating with other team members to implement STEP-STUDY aimed at generating robust evidence-based insight into the professional development of primary school teachers in Tanzania, focusing on addressing systemic gaps and improving the implementation of the competence-based curriculum.",
    "email": "naisujaki.lyimo@atc.ac.tz",
    "linkedin": "#"
  },
  {
    "id": 7,
    "name": "Dr. Nicodemus Msafiri Mbwambo",
    "role": "Research Officer",
    "institution": "Arusha Technical College",
    "institutionColor": "blue",
    "image": drNicodemusMbwambo,
    "shortBio": "Research Officer focusing on educational innovation and technical training methodologies.",
    "fullBio": "Dr. Mbwambo is a Lecturer at Arusha Technical College (ATC), where he teaches and conducts research. He holds a PhD in Computer Science from Clemson University, USA, with a strong foundation in software engineering. His current research focuses on Machine Learning and Computer Education, exploring innovative ways to enhance learning outcomes and technological adoption in Tanzania.\n\nAs part of the STEP STUDY, Dr. Mbwambo serves as a Field Research Officer at ATC, collaborating closely with Dr. Laban Kanyonga and other team members to implement STEP-STUDY aimed at generating robust evidence-based insight into the professional development of primary school teachers in Tanzania, focusing on addressing systemic gaps and improving the implementation of the competence-based curriculum.",
    "email": "nicodemus.mbwambo@atc.ac.tz",
    "linkedin": "https://www.linkedin.com/in/nicodemus-msafiri-mbwambo-ph-d-1a279639"
  },
  {
    "id": 10,
    "name": "Ms. Winfrida Mbowe",
    "role": "Lecturer | Green Innovation & Sustainability Expert",
    "institution": "Arusha Technical College",
    "institutionColor": "blue",
    "image": graceMwakasege,
    "shortBio": "Lecturer specializing in Green innovation, entrepreneurship, and sustainability in TVET education.",
    "fullBio": "Winfrida is a Lecturer at Arusha Technical College, holding a Master's Degree in Business Management. She is widely recognized for her expertise and leadership in Green innovation, entrepreneurship, and sustainability initiatives within the College. Her professional work focuses on integrating sustainable and inclusive practices in Technical and Vocational Education and Training (TVET), aligning education with global green growth and equity goals.\n\nWinfrida has collaborated with international organizations, including UNESCO UNEVOC, under the project \"Piloting New Approaches and Modalities to Become More Inclusive TVET Institutions.\" As a junior researcher, Winfrida has authored and co-authored several scholarly papers in entrepreneurship education, including \"Unravelling the Relationship between Entrepreneurship Networking and Market Performance of Micro and Small Enterprises in Arusha, Tanzania,\" \"Relation between Entrepreneurship Skills and Market Performance among Micro and Small Enterprises in Arusha, Tanzania,\" and \"Entrepreneurship Mentoring Programme and Market Performance: Evidence from SIDO Supported Micro and Small Enterprises in Arusha, Tanzania.\"",
    "email": "winfrida.mbowe@atc.ac.tz"
  },
  {
    "id": 11,
    "name": "Mr. Exavery Philemon Enock",
    "role": "Lecturer | Research Assistant",
    "institution": "Arusha Technical College",
    "institutionColor": "blue",
    "image": emmanuelKileo,
    "shortBio": "Lecturer specializing in mathematics and computational sciences with focus on educational innovation.",
    "fullBio": "Mr. ENOCK teaches and conducts research at Arusha Technical College (ATC) as a lecturer. With a solid foundation in mathematics and computational skills, he possesses a master's degree in mathematics (computational option) and a master's degree in mathematical sciences. His research interests include mathematical modeling, mathematics education, computational mathematics, machine learning, mathematical statistics, data science, and mathematical biology.\n\nHe is interested in using mathematics to develop innovative scientific and technical solutions to improve learning outcomes and technological uptake in Tanzania and Africa at large. As a Research Assistant at ATC, Mr. Enock works closely with Dr. Laban Kanyonga and other team members to carry out the STEP-STUDY, which aims to produce solid evidence-based insight into the professional development of primary school teachers in Tanzania, with a particular focus on filling in systemic gaps and enhancing the execution of the competency-based curriculum.",
    "email": "exavery.enock@atc.ac.tz"
  },
  {
    "id": 12,
    "name": "Ms. Beatrice Michael",
    "role": "Assistant Lecturer | Field Research Support",
    "institution": "Arusha Technical College",
    "institutionColor": "blue",
    "image": neemaMushi,
    "shortBio": "Assistant Lecturer supporting field research in teacher professional development and CBC implementation.",
    "fullBio": "Beatrice Michael is an Assistant Lecturer at Arusha Technical College (ATC). She holds a Master's degree in Mathematical and Computer Science and Engineering from the Nelson Mandela African Institution of Science and Technology. As part of the STEP Study team, she supports field research that strengthens understanding of teacher professional development, mentoring and the implementation of Competency-Based Curriculum (CBC) in Tanzania.\n\nBeatrice is passionate about improving education systems, mentoring in teacher education, and exploring the role of finance and microfinance institutions in community development.",
    "email": "beatrice.michael@atc.ac.tz"
  },
  {
    "id": 13,
    "name": "Mr. Mgala",
    "role": "Tutorial Assistant | Field Research Officer",
    "institution": "Arusha Technical College",
    "institutionColor": "blue",
    "image": danielMassawe,
    "shortBio": "Tutorial Assistant with expertise in ICT, network engineering, and cybersecurity.",
    "fullBio": "Mr. Mgala is a Tutorial Assistant at Arusha Technical College (ATC), where he teaches and assists in conducting research. He holds a Bachelor's degree in Information and Communication Technology. He has a strong foundation in network engineering and cybersecurity.\n\nIn the STEP STUDY sought to produce evidence-based insights on the professional development of Tanzanian primary school teachers and to improve the implementation of the competency-based curriculum. As part of this initiative, Mgala holds the role of Field Research Officer at ATC.",
    "email": "mgala@atc.ac.tz"
  },
  {
    "id": 14,
    "name": "Mr. Ambrose A.K. Ghwanga",
    "role": "Assistant Lecturer | Assistant Researcher",
    "institution": "Arusha Technical College",
    "institutionColor": "blue",
    "image": josephMwanga,
    "shortBio": "Assistant Lecturer specializing in Natural Science, agriculture, conservation and climate change.",
    "fullBio": "Mr. Ambrose is an Assistant Lecturer at Arusha Technical College (ATC). Ambrose teaches and conducts research on Natural Science, especially relating to agriculture, conservation and climate change. He is a 3rd-year PhD scholar at The Nelson Mandela African Institution of Science and Technology located in Arusha, Tanzania. His PHD research focuses on Agroecology, where he works on developing a Nature-Based Botanical Pesticide for Managing Insect pests.\n\nIn the STEP STUDY project, Mr Ambrose serves as Assistant Researcher, working with the Project Team in various duties including literature and documentary reviews, development of data collection tools, data collection and analysis and other duties as he is assigned by the Project Management.",
    "email": "aghwanga@gmail.com",
    "linkedin": "https://www.linkedin.com/in/ambrose-ghwanga-433770180/?originalSubdomain=tz"
  },
  {
    "id": 8,
    "name": "Prof. Dr. Heike Wendt",
    "role": "Research Leader",
    "institution": "University of Graz",
    "institutionColor": "green",
    "image": profDrHeikeWendt,
    "shortBio": "Leading international research collaboration and comparative education studies.",
    "fullBio": "Prof. Dr. Heike Wendt leads the international research collaboration from the University of Graz, bringing extensive experience in comparative education research. Her expertise in international educational assessments and teacher professional development guides our cross-cultural research approach.",
    "email": "heike.wendt@uni-graz.at"
  },
  {
    "id": 9,
    "name": "Priv.-Doz. Dr. Anna Aleksanyan",
    "role": "Project Manager",
    "institution": "University of Graz",
    "institutionColor": "green",
    "image": drAnnaAleksanyan,
    "shortBio": "Lecturer and International Project Manager with expertise in teacher education and sustainable development.",
    "fullBio": "Dr. Anna Aleksanyan is a Lecturer and International Project Manager at the University of Graz, Austria. She works in the Department of Empirical Educational Research, Institute of Educational Research and Teacher Education. Her expertise lies in general pedagogy, teacher education, school development, classroom assessment, education for sustainable development, research on transformation in education and comparative education research.\n\nDr. Aleksanyan has extensive international experience, having held academic positions and led educational projects in Armenia, Germany, Switzerland, and Austria. She has contributed to various international research and development projects funded by the EU, UNESCO, and UNICEF, particularly in areas of teacher professional development, educational transformation, sustainability and digital solutions and equity-focused assessment.\n\nHer scholarly work includes several peer-reviewed publications and policy studies addressing education in crisis, school development, and competency-based education systems. In recognition of her contributions, Dr. Aleksanyan has received multiple awards, including national and international prizes. She is actively engaged in global academic networks such as WERA and EERA, promoting dialogue on education and equity through numerous conferences and initiatives.",
    "email": "anna.aleksanyan@uni-graz.at",
    "linkedin": "https://www.linkedin.com/in/anna-aleksanyan-5a506a249/",
    "facebook": "https://www.facebook.com/profile.php?id=100008043430353",
    "website": "www.annaaleksanyan.com"
  }
]

const institutionColors = {
  orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
}

const institutionLogos = {
  "University of Dodoma": udomLogo,
  "Arusha Technical College": atcLogo,
  "University of Graz": uniGrazLogo,
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)

  const groupedMembers = teamMembers.reduce(
    (acc, member) => {
      if (!acc[member.institution]) {
        acc[member.institution] = []
      }
      acc[member.institution].push(member)
      return acc
    },
    {} as Record<string, typeof teamMembers>
  )

  const renderInstitutionWithLogo = (institution: string) => {
    const logo = institutionLogos[institution as keyof typeof institutionLogos]
    if (!logo) return institution

    return (
      <div className="flex items-center gap-2">
        <span>{institution}</span>
        <img
          src={logo}
          alt={`${institution} logo`}
          width={40}
          height={40}
          className="object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 text-foreground">Meet Our Team</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Strengthening Teachers, Transforming Education
          </p>

          <Tabs defaultValue="dodoma" className="max-w-6xl mx-auto ">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-12">
              <TabsTrigger value="dodoma">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>University of Dodoma</span>
                  <img
                    src={udomLogo}
                    alt="University of Dodoma logo"
                    width={30}
                    height={30}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </TabsTrigger>
              <TabsTrigger value="arusha">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Arusha Technical College</span>
                  <img
                    src={atcLogo}
                    alt="Arusha Technical College logo"
                    width={30}
                    height={30}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </TabsTrigger>
              <TabsTrigger value="graz">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span>University of Graz</span>
                  <img
                    src={uniGrazLogo}
                    alt="University of Graz logo"
                    width={30}
                    height={30}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dodoma">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {groupedMembers["University of Dodoma"]?.map((member) => (
                  <Card
                    key={member.id}
                    className="cursor-pointer hover:shadow-xl transition-shadow group"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="aspect-square overflow-hidden rounded-t-xl relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <Button
                        size="sm"
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        View Profile
                      </Button>
                    </div>
                    <CardHeader>
                      <Badge className={institutionColors.orange}>{member.institution}</Badge>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-sm font-medium text-blue-600">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">{member.shortBio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="arusha">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {groupedMembers["Arusha Technical College"]?.map((member) => (
                  <Card
                    key={member.id}
                    className="cursor-pointer hover:shadow-xl transition-shadow group"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="aspect-square overflow-hidden rounded-t-xl relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <Button
                        size="sm"
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        View Profile
                      </Button>
                    </div>
                    <CardHeader>
                      <Badge className={institutionColors.blue}>{member.institution}</Badge>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-sm font-medium text-blue-600">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">{member.shortBio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="graz">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {groupedMembers["University of Graz"]?.map((member) => (
                  <Card
                    key={member.id}
                    className="cursor-pointer hover:shadow-xl transition-shadow group"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="aspect-square overflow-hidden rounded-t-xl relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <Button
                        size="sm"
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        View Profile
                      </Button>
                    </div>
                    <CardHeader>
                      <Badge className={institutionColors.green}>{member.institution}</Badge>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-sm font-medium text-blue-600">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">{member.shortBio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Collaborative Excellence</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our diverse team of researchers, educators, and innovators work together across three continents to advance
            educational outcomes through evidence-based solutions.
          </p>
        </div>
      </section>

      {/* Member Detail Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedMember.name}</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-square relative">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex flex-col gap-3">
                      <Badge
                        className={`${
                          institutionColors[selectedMember.institutionColor as keyof typeof institutionColors]
                        } text-sm flex items-center gap-2 p-3`}
                      >
                        <MapPin className="w-4 h-4" />
                        {selectedMember.institution}
                      </Badge>
                      <div className="flex justify-center p-2">
                        <img
                          src={institutionLogos[selectedMember.institution as keyof typeof institutionLogos]}
                          alt={`${selectedMember.institution} logo`}
                          width={80}
                          height={80}
                          className="object-contain hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      {selectedMember.email && (
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {selectedMember.email}
                        </a>
                      )}

                      {selectedMember.linkedin && (
                        <a
                          href={selectedMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn Profile
                        </a>
                      )}

                      {selectedMember.facebook && (
                        <a
                          href={selectedMember.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                        >
                          <Facebook className="w-4 h-4 mr-2" />
                          Facebook Profile
                        </a>
                      )}

                      {selectedMember.website && (
                        <a
                          href={`https://${selectedMember.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Personal Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-2">{selectedMember.role}</h3>
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
                    <div className="prose dark:prose-invert max-w-none">
                      {selectedMember.fullBio.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Team
