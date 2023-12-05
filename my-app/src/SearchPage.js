import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import {FaPaw} from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import caregiver1 from "./assets/icons/virat.webp";
import caregiver2 from "./assets/icons/sachin.png";
import caregiver3 from "./assets/icons/mike_davis.webp";
import caregiver4 from "./assets/icons/lisa.png";
import caregiver5 from "./assets/icons/peter.png";
import caregiver6 from "./assets/icons/Taylor.jpeg"
import caregiver7 from "./assets/icons/PS3.png"
import caregiver8 from "./assets/icons/david.png"
import caregiver9 from "./assets/icons/michael.png"
import caregiver10 from "./assets/icons/anderson.png"

import ListCaregiver from "./ListCaregiver";
import ProfilePage from "./ProfilePage";

const SearchPage = ({checkoutData, finalDogWalkerData}) => {
  const [services, setServices] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedWalker, setSelectedWalker] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [filteredDogWalkers, setFilteredDogWalkers] = useState(finalDogWalkerData);

  useEffect(() => {
    if (services && location && startDate && endDate && startTime && endTime && dogSize) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [services, location, startDate, endDate, startTime, endTime, dogSize]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
      .then(response => response.json())
      .then(data => {
        const city = data.address.city || data.address.town;
        const state = data.address.state;

        setLocation(`${city}, ${state}`);
      });
      
    });
  }

  const handleWalkerClick = (walker) => {
    // Set the selected walker and possibly change the route
    setSelectedWalker(walker);
    // console.log(selectedWalker);
    // If using React Router, you might do something like:
    // navigate(`/caregiver/${walker.id}`); // navigate is from useNavigate hook
  };

let details;

if (checkoutData === undefined) {
  details = <p>Don't Have any appointment Scheduled</p>;
} else {
  details = (

    <div>
      {/* {console.log(checkoutData)} */}
      <p>Walker: {checkoutData.walker}</p>
      <p>Rate: {checkoutData.rate}</p>
      <p>Services: {checkoutData.services}</p>
      <p>Location: {checkoutData.location}</p>
      <p>
        Date: {checkoutData.date}
      </p>
      <p>
        Time: {checkoutData.time}
      </p>
    </div>
  );
}

  const serviceOptions = [
    { label: "House Sitting", value: "House Sitting" },
    { label: "Dog Walking", value: "Dog Walking" },
    { label: "Vet Appointment", value: "Vet Appointment" },
    { label: "Groom Care", value: "Groom Care" },
  ];

  const sizeOptions = [
    { label: "Small (0-15 lbs)", value: "Small" },
    { label: "Medium (16-40 lbs)", value: "Medium" },
    { label: "Large (41-100 lbs)", value: "Large" },
    { label: "Extra Large (101+ lbs)", value: "Extra Large" },
  ];

  const dogWalkerData = [
    {
      id: 1,
      name: "Virat Kohli",
      age: 35,
      overallRating: 5.0,
      location: {
        city: "Chicago, Illinois",
        zipCode: 60611,
      },
      reviews: [
        {
          customerName: "Jane Smith",
          comment:
            "So happy with to have connected with Virat. He took the time for a meet and...",
          rating: 5.0,
          date: "November 5, 2023",
        },
        {
          customerName: "Bob Johnson",
          comment:
            "Prompt, friendly service. My dog always enjoys his walks with John.",
          rating: 4.5,
          date: "October 15, 2023",
        },
      ],
      hourlyPrice: 45,
      offeredServices: [
        {
          service_name: "Dog Walker",
          price: "30",
        },
        {
          service_name: "House Sitting",
          price: "25",
        },
      ],
      availabilty: [
        {
          days: "Mon, Wed, Thur",
          Time: "7am - 5pm",
        },
      ],
      imageUrl: caregiver1,
      favorite: false
    },
    {
      id: 2,
      name: "Sachin Tendulkar",
      age: 50,
      overallRating: 5,
      location: {
        city: "Chicago",
        zipCode: 60652,
      },
      reviews: [
        {
          customerName: "Emma Taylor",
          comment: "I was impressed at Sachin's service. He sent me...",
          rating: 5,
          date: "November 1, 2023",
        },
      ],
      hourlyPrice: 40,
      offeredServices: [
        {
          service_name: "House Sitting",
          price: "30",
        },
        {
          service_name: "Vet Appointment",
          price: "45",
        },
      ],
      availabilty: [
        {
          days: "Mon, Tue, Wed, Fri",
          Time: "10am - 3pm",
        },
      ],
      imageUrl: caregiver2,
      favorite: true
    },
    {
      id: 3,
      name: "Mike Davis",
      age: 45,
      overallRating: 4.2,
      location: {
        city: "Chicago, Illinois",
        zipCode: 60625,
      },
      reviews: [
        {
          customerName: "Karen Smith",
          comment:
            "Mike was nice but didn't seem very experienced with large dogs.",
          rating: 3,
          date: "October 28, 2023",
        },
        {
          customerName: "Mark Johnson",
          comment: "Happy with Mike's services overall. Will hire again.",
          rating: 4,
          date: "October 20, 2023",
        },
      ],
      hourlyPrice: 25,
      offeredServices: [
        {
          service_name: "Dog Walker",
          price: "30",
        },
        {
          service_name: "House Sitting",
          price: "20",
        },
        {
          service_name: "Vet Appointment",
          price: "35",
        },
      ],
      availabilty: [
        {
          days: "Mon, Wed, Fri",
          Time: "11am - 5pm",
        },
      ],
      imageUrl: caregiver3,
      favorite: true
    },
    {
      id: 4,
      name: "Lisa Wilson",
      age: 36,
      overallRating: 4.8,
      location: {
        city: "Chicago, Illinois",
        zipCode: 60640,
      },
      reviews: [
        {
          customerName: "David Lee",
          comment:
            "Lisa really cares about the dogs she walks. Would highly recommend her!",
          rating: 5,
          date: "November 3, 2023",
        },
      ],
      hourlyPrice: 30,
      offeredServices: [
        {
          service_name: "Dog Walker",
          price: "30",
        },
        {
          service_name: "Groom Care",
          price: "50",
        },
      ],
      availabilty: [
        {
          days: "Mon, Wed, Fri, Sat, Sun",
          Time: "7am - 7pm",
        },
      ],
      imageUrl: caregiver4,
      favorite: false
    },
    {
      id: 5,
      name: "Peter Parker",
      age: 29,
      overallRating: 4.9,
      location: {
        city: "Chicago",
        zipCode: 60605,
      },
      reviews: [
        {
          customerName: "Alice Green",
          comment:
            "Peter is the best dog walker I've ever had. Will use him for services indefinitely!",
          rating: 5,
          date: "November 2, 2023",
        },
        {
          customerName: "Fred Harris",
          comment:
            "Peter's arrival is always the highlight of my dog's day. Their tail-wagging excitement is a true testament to his exceptional care and genuine affection. Truly a remarkable experience every time.",
          rating: 5,
          date: "October 25, 2023",
        },
      ],
      hourlyPrice: 30,
      offeredServices: [
        {
          service_name: "Dog Walker",
          price: "35",
        },
        {
          service_name: "House Sitting",
          price: "25",
        },
        {
          service_name: "Vet Appointment",
          price: "40",
        },
      ],
      availabilty: [
        {
          days: "Fri, Sat, Sun",
          Time: "1am - 9pm",
        },
      ],
      imageUrl: caregiver5,
      favorite: false
    },
    {
      id: 6,
      name: "Mark Taylor",
      age: 37,
      overallRating: 3.5,
      location: {
        city: "Chicago, Illinois",
        zipCode: 60628,
      },
      reviews: [
        {
          customerName: "John Smith",
          comment:
            "Mark was friendly but didn't follow my walking route instructions properly.",
          rating: 3,
          date: "October 31, 2023",
        },
      ],
      hourlyPrice: 20,
      offeredServices: [
        {
          service_name: "Dog Walker",
          price: "30",
        },
        {
          service_name: "Vet Appointment",
          price: "25",
        },
      ],
      availabilty: [
        {
          days: "Mon, Wed, Thur, Sat, Sun",
          Time: "6am - 6pm",
        },
      ],
      imageUrl: caregiver6,
      favorite: false
    },
    {
      id: 7,
      name: "Linda Brown",
      age: 41,
      overallRating: 4.3,
      location: {
        city: "Chicago",
        zipCode: 60614,
      },
      reviews: [
        {
          customerName: "Tom Wilson",
          comment: "Linda was nice and my dog seemed happy after the walk.",
          rating: 4,
          date: "November 4, 2023",
        },
      ],
      hourlyPrice: 35,
      offeredServices: [
        {
          service_name: "Dog Walker",
          price: "30",
        },
        {
          service_name: "House Sitting",
          price: "20",
        },
        {
          service_name: "Vet Appointment",
          price: "35",
        },
        {
          service_name: "Groom Care",
          price: "40",
        },
      ],
      availabilty: [
        {
          days: "Mon, Wed, Thur, Sun",
          Time: "9am - 5pm",
        },
      ],
      imageUrl: caregiver7,
      favorite: false
    },
    {
      id: 8,
      name: "David Johnson",
      age: 31,
      overallRating: 4.7,
      location: {
        city: "Chicago",
        zipCode: 60622,
      },
      reviews: [
        {
          customerName: "Samantha Lee",
          comment:
            "David is super friendly and my pup loves him. Great walker!",
          rating: 5,
          date: "November 6, 2023",
        },
      ],
      hourlyPrice: 45,
      offeredServices: [
        {
          service_name: "Vet Appointment",
          price: "35",
        },
        {
          service_name: "Groom Care",
          price: "40",
        },
      ],
      availabilty: [
        {
          days: "Mon, Wed, Thur",
          Time: "7am - 5pm",
        },
      ],
      imageUrl:caregiver8,
      favorite: false
    },
    {
      id: 9,
      name: "Michelle Rodriguez",
      age: 29,
      overallRating: 4.6,
      location: {
        city: "Chicago, Illinois",
        zipCode: 60647,
      },
      reviews: [
        {
          customerName: "James Kim",
          comment:
            "Michelle is always on time and takes great care of my dogs.",
          rating: 5,
          date: "October 29, 2023",
        },
      ],
      hourlyPrice: 50,
      offeredServices: [
        {
          service_name: "Dog Walker",
          price: "25",
        },
        {
          service_name: "House Sitting",
          price: "20",
        },
        {
          service_name: "Groom Care",
          price: "30",
        },
      ],
      availabilty: [
        {
          days: "Wed, Thur, Fri",
          Time: "12pm - 5pm",
        },
      ],
      imageUrl:caregiver9,
        favorite: false
    },
    {
      id: 10,
      name: "Daniel Anderson",
      age: 33,
      overallRating: 4.2,
      location: {
        city: "Chicago",
        zipCode: 60659,
      },
      reviews: [
        {
          customerName: "Sarah Davis",
          comment:
            "Daniel was nice but sometimes late arriving for the walk appointment.",
          rating: 4,
          date: "November 2, 2023",
        },
      ],
      hourlyPrice: 30,
      offeredServices: [
        {
          service_name: "Dog Walker",
          price: "10",
        },
        {
          service_name: "House Sitting",
          price: "20",
        },
        {
          service_name: "Vet Appointment",
          price: "30",
        },
        {
          service_name: "Groom Care",
          price: "40",
        },
      ],
      availabilty: [
        {
          days: "Mon, Tue, Wed, Thur",
          Time: "10am - 6pm",
        },
      ],
      imageUrl: caregiver10,
      favorite: false
    }
  ];
  
  function getDay(dateStr) {
    const date = new Date(dateStr);
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
    return days[date.getDay()]; 
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      services,
      location,
      startDate,
      endDate,
      startTime,
      endTime,
      dogSize,
    };

    setFormData(formData);
    // const filtered = dogWalkerData.filter(walker => {
    //   console.log(getDay(formData.startDate));
    //   return (
    //     walker.offeredServices.some(service => service.service_name === formData.services) && 
    //     walker.location.city === formData.location
    //   );
    // });
    
    // setFilteredDogWalkers(filtered);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    if (endDate && new Date(endDate) < new Date(event.target.value)) {
      setEndDate(null); 
    }
  }
  
  const handleEndDateChange = (event) => {
    if (!startDate) {
      alert('Please select a start date first');
      return;
    }
  
    if (new Date(event.target.value) < new Date(startDate)) {
      alert('End date cannot be before start date');
      return; 
    }
  
    setEndDate(event.target.value);
  }

  return (
    <>
      {selectedWalker && (
     <ProfilePage  
       walker={selectedWalker}
       formData={formData}
       dogWalkerData={dogWalkerData}
     />
    )}
     {!selectedWalker && (  
        <>
      {!submitClicked ? (
        <div> 
        <div className="form-container">
        <h1> Search For Caregiver </h1>
        <form onSubmit={handleSubmit}>
          <label>
            Services (Pick one):
            <div>
              {serviceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setServices(option.value)}
                  className={services === option.value ? "active" : ""}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </label>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <button onClick={getLocation}><MdMyLocation /></button>
          </label>

          <div className="date-time-group">
            <label>
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </label>

            <label>
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </label>

            <label>
              Start Time:
              <input
                type="time"
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
              />
            </label>

            <label>
              End Time:
              <input
                type="time"
                value={endTime}
                onChange={(event) => setEndTime(event.target.value)}
              />
            </label>
          </div>
          <label>
            Dog Size:
            <div>
              {sizeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setDogSize(option.value)}
                  className={dogSize === option.value ? "active" : ""}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </label>

          <button type="submit" disabled={!isFormValid} onClick={() => setSubmitClicked(true)}>
            {" "}
            <FaPaw /> Submit
          </button>
        </form>
        </div>

    <h2>Favorite Caregiver </h2>
    <div class="content-container">
      <div class="cards-container">
        <div className="cards-container">
          {
            finalDogWalkerData  
              ? finalDogWalkerData.map(caregiver => {
                  if (caregiver.favorite) {
                    return (
                      <div className="card-container" onClick={() => handleWalkerClick(caregiver)}>
                        <div class="card-image">
                          <img src={caregiver.imageUrl} alt="Orlando" />
                        </div>
                        <div className="card-content">
                          <h2 className="card-title">{caregiver.name}</h2>
                          <div className="card-info">
                            <p className="card-details">
                              {caregiver.availabilty[0].days}<br/>
                              {caregiver.availabilty[0].Time}
                            </p>
                          </div>
                          <p className="card-price">${caregiver.hourlyPrice}</p>
                        </div>
                      </div>
                    )
                  } 
                })
              : dogWalkerData.map(caregiver => {
                if (caregiver.favorite) {
                  return (
                    <div className="card-container" onClick={() => handleWalkerClick(caregiver)}>
                      <div class="card-image">
                          <img src={caregiver.imageUrl} alt="Orlando" />
                      </div>
                      <div className="card-content">
                          <h2 className="card-title">{caregiver.name}</h2>
                          <div className="card-info">
                            <p className="card-details">
                              {caregiver.availabilty[0].days}<br/>
                              {caregiver.availabilty[0].Time}
                            </p>
                          </div>
                          <p className="card-price">${caregiver.hourlyPrice}</p>
                      </div>
                    </div>
                   
                  )
                }
              })
          }
        </div>
    
      </div> 

    <div class="reminder-container">
      <h3>Reminder</h3>
      {details}
    </div>
    </div>
        </div>
      ) : (
        <ListCaregiver dogWalkerData={dogWalkerData} formData={formData} />
      )}
    </>
     )}
     </>
  );
};

export default SearchPage;
