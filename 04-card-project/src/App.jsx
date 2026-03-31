import Card from "./components/cards/card.jsx";

const arr = 
[
    {logo: "https://i.pinimg.com/1200x/0d/46/be/0d46bee0a94cf1519e4d18797905819f.jpg",
    role:"Senior UI/UX Designer",
    btn1:"Part-Time",
    btn2:"Senior Level",
    salary:120,
    location:"Mumbai, India",
    companyName: "Amazon",
    publishDate:"10 days ago"}, 
    
    {
    logo: "https://i.pinimg.com/736x/28/d8/85/28d885ad11044a3a870c5838275cdeec.jpg",
    role: "Graphic Designer",
    btn1: "Part-Time",
    btn2: "Flexible Schedule",
    salary: "150-200",
    location: "Pune, India",
    companyName: "Google",
    publishDate: "30 days ago"
  }, 
  {
    logo: "https://i.pinimg.com/736x/8d/f5/e7/8df5e76136dcba44841002494e01e050.jpg",
    role: "UX Designer",
    btn1: "Full-Time",
    btn2: "In Office",
    salary: 200,
    location: "Bangalore, India",
    companyName: "Apple",
    publishDate: "5 days ago"
  },
  {
    logo: "https://i.pinimg.com/736x/d6/e5/b3/d6e5b3e94e630f7374c8a687fafe24b9.jpg",
    role: "Senior UI/UX Designer",
    btn1: "Part-Time",
    btn2: "Remote",
    salary: "70-130",
    location: "Delhi, India",
    companyName: "Samsung",
    publishDate: "5 days ago"
  },
   {
    logo: "https://i.pinimg.com/736x/28/d8/85/28d885ad11044a3a870c5838275cdeec.jpg",
    role: "Graphic Designer",
    btn1: "Part-Time",
    btn2: "Flexible Schedule",
    salary: "150-200",
    location: "Pune, India",
    companyName: "Google",
    publishDate: "30 days ago"
  },
  {
    logo: "https://i.pinimg.com/736x/8d/f5/e7/8df5e76136dcba44841002494e01e050.jpg",
    role: "UX Designer",
    btn1: "Full-Time",
    btn2: "In Office",
    salary: 200,
    location: "Bangalore, India",
    companyName: "Apple",
    publishDate: "5 days ago"
  },
  {
    logo: "https://i.pinimg.com/736x/d6/e5/b3/d6e5b3e94e630f7374c8a687fafe24b9.jpg",
    role: "Senior UI/UX Designer",
    btn1: "Part-Time",
    btn2: "Remote",
    salary: "70-130",
    location: "Delhi, India",
    companyName: "Samsung",
    publishDate: "5 days ago"
  },

  {
    logo: "https://i.pinimg.com/1200x/37/55/df/3755df15d92e7c4f68294fcb54b25599.jpg",
    role: "Frontend Developer",
    btn1: "Full-Time",
    btn2: "Remote",
    salary: "120-180",
    location: "Hyderabad, India",
    companyName: "Microsoft",
    publishDate: "3 days ago"
  },
  {
    logo: "https://i.pinimg.com/1200x/0d/46/be/0d46bee0a94cf1519e4d18797905819f.jpg",
    role: "React Developer",
    btn1: "Full-Time",
    btn2: "Hybrid",
    salary: "140-220",
    location: "Bangalore, India",
    companyName: "Amazon",
    publishDate: "2 days ago"
  },
  {
    logo: "https://i.pinimg.com/736x/68/3c/58/683c5858fab3870b59d691d3f75dd228.jpg",
    role: "UI Designer",
    btn1: "Part-Time",
    btn2: "Remote",
    salary: "80-120",
    location: "Mumbai, India",
    companyName: "Adobe",
    publishDate: "10 days ago"
  },
  {
    logo: "https://i.pinimg.com/736x/ea/60/e2/ea60e224dd6d009926b751998e011154.jpg",
    role: "Product Designer",
    btn1: "Full-Time",
    btn2: "In Office",
    salary: "160-250",
    location: "Gurgaon, India",
    companyName: "Netflix",
    publishDate: "6 days ago"
  },
  {
    logo: "https://i.pinimg.com/1200x/94/d7/ad/94d7adb22f20801dfe0066708400d838.jpg",
    role: "Junior Frontend Developer",
    btn1: "Full-Time",
    btn2: "Remote",
    salary: "60-90",
    location: "Chennai, India",
    companyName: "Zoho",
    publishDate: "1 day ago"
  },
  {
    logo: "https://i.pinimg.com/736x/20/53/28/205328b95d9a53aa83e619c65fbfd099.jpg",
    role: "UI Engineer",
    btn1: "Full-Time",
    btn2: "Hybrid",
    salary: "130-210",
    location: "Noida, India",
    companyName: "Flipkart",
    publishDate: "4 days ago"
  },
  {
    logo: "https://i.pinimg.com/1200x/a9/31/26/a93126ff07895bd08ef3d37c658d4501.jpg",
    role: "Web Designer",
    btn1: "Part-Time",
    btn2: "Flexible Schedule",
    salary: "70-110",
    location: "Kolkata, India",
    companyName: "Tata Digital",
    publishDate: "8 days ago"
  }

]
function App() {
 return <div className="container">
    {arr.map(function(elements, idx) {
        return <div key={idx}><Card logo={elements.logo} role={elements.role} btn1={elements.btn1} btn2={elements.btn2} salary={elements.salary} location={elements.location} companyName={elements.companyName} publishDate={elements.publishDate}/></div>
    })}

    
   {/* < Card logo="https://i.pinimg.com/1200x/0d/46/be/0d46bee0a94cf1519e4d18797905819f.jpg" role="Senior UI/UX Designer" btn1="Part-Time" btn2="Senior Level" salary={120} location="Mumbai, India" companyName="Amazon" publishDate="10 days ago"/>
   < Card logo="https://i.pinimg.com/736x/28/d8/85/28d885ad11044a3a870c5838275cdeec.jpg" role="Graphic Designer" btn1="Part-Time" btn2="Flexible Schedule" salary={150-200} location="Pune, India" companyName="Google" publishDate="30 days ago"/>
   < Card logo="https://i.pinimg.com/736x/8d/f5/e7/8df5e76136dcba44841002494e01e050.jpg" role="UX Designer" btn1="Full-Time" btn2="In Office" salary={200} location="Bangalore, India" companyName="Apple" publishDate="5 days ago"/>
   < Card logo="https://i.pinimg.com/736x/d6/e5/b3/d6e5b3e94e630f7374c8a687fafe24b9.jpg" role="Senior UI/UX Designer" btn1="Part-Time" btn2="Remote" salary={70-130} location="Delhi, India" companyName="samsung" publishDate="5 days ago"/> */}

 </div>
}

export default App
