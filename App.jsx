import React from 'react';
import Card from './components/Card';


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://freepnglogo.com/images/all_img/1708533802microsoft-logo-transparent.png",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/amazon/amazon_PNG5.png",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Cloud Support Associate",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/571/original/netflix-logo-on-transparent-background-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$42/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.o6FS_FUlU8OR46fiVGkoyAHaHa?pid=Api&P=0&h=180",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG4.png",
    companyName: "Meta",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png",
    companyName: "Spotify",
    datePosted: "4 weeks ago",
    post: "Mobile App Developer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$22/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    companyName: "Uber",
    datePosted: "12 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://cdn.1min30.com/wp-content/uploads/2018/02/Couleur-logo-Airbnb.jpg",
    companyName: "Airbnb",
    datePosted: "8 weeks ago",
    post: "DevOps Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.7wF76mX0WOm9KvCzd5JtGwHaEK?pid=Api&P=0&h=180",
    companyName: "Salesforce",
    datePosted: "9 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$33/hr",
    location: "Ahmedabad, India"
  }
];
  
  return (
    <div className='parent'>
    {jobOpenings.map(function(elem,idx){
      return <div key = {idx}>
        <Card company = {elem.companyName} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} brandLogo = {elem.brandLogo} datePosted = {elem.datePosted} location = {elem.location}/></div>
    })}
    </div>
  )
}

export default App
