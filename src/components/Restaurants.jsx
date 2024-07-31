// import React, { useState } from "react";
// import restaurant1 from '../assets/restaurant-1.jpg';
// import restaurant2 from '../assets/restaurant-2.jpg';
// import restaurant3 from '../assets/restaurant-3.jpg';
// import restaurant4 from '../assets/restaurant-4.jpg';
// import restaurant5 from '../assets/restaurant-5.jpg';
// import restaurant6 from '../assets/restaurant-6.jpg';
// import Carousel from './Carousel'; // Ensure this path is correct

// export const restaurantItems = [
//   {
//     img: restaurant1,
//     price: "$50/meal",
//     name: "Talisman Restaurant",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "Talisman Restaurant offers a fusion of European, Pan-Asian, and African cuisines in a charming and eclectic setting. Renowned for its ambiance and excellent service.",
//     location: "Ngong Road, Nairobi",
//     yellowbtn: "View Detail",
//   },
//   {
//     img: restaurant2,
//     price: "$40/meal",
//     name: "Carnivore",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "Carnivore is famous for its 'Beast of a Feast' all-you-can-eat meat buffet. Enjoy a variety of meats roasted over a charcoal fire and carved at your table.",
//     location: "Langata Road, Nairobi",
//     yellowbtn: "View Detail",
//   },
//   {
//     img: restaurant3,
//     price: "$35/meal",
//     name: "Artcaffe",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "Artcaffe is known for its bakery, coffee, and eclectic menu. A favorite spot for brunch, lunch, and dinner with a vibrant atmosphere.",
//     location: "Westlands, Nairobi",
//     yellowbtn: "View Detail",
//   },
//   {
//     img: restaurant4,
//     price: "$60/meal",
//     name: "Seven Seafood & Grill",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "Seven Seafood & Grill offers a fine dining experience with fresh seafood and gourmet dishes. Known for its stylish decor and exceptional service.",
//     location: "ABC Place, Nairobi",
//     yellowbtn: "View Detail",
//   },
//   {
//     img: restaurant5,
//     price: "$45/meal",
//     name: "Hashmi BBQ",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "Hashmi BBQ is famous for its grilled meats and Indian cuisine. A popular spot for both locals and tourists looking for delicious and flavorful meals.",
//     location: "Ukay Centre, Nairobi",
//     yellowbtn: "View Detail",
//   },
//   {
//     img: restaurant6,
//     price: "$55/meal",
//     name: "About Thyme",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "About Thyme offers a unique dining experience with a menu that blends international flavors. Known for its cozy ambiance and beautiful garden seating.",
//     location: "Eldama Ravine Road, Nairobi",
//     yellowbtn: "View Detail",
//   },
// ];

// export const facility = [
//   {
//     icon: <i className="fa fa-utensils text-primary me-2"></i>,
//     quantity: "Variety of dishes",
//     facility: "Cuisine",
//   },
//   {
//     icon: <i className="fa fa-wine-glass-alt text-primary me-2"></i>,
//     quantity: "Fine",
//     facility: "Dining",
//   },
//   {
//     icon: <i className="fa fa-wifi text-primary me-2"></i>,
//     facility: "Wifi",
//   },
// ];

// export default function Restaurants() {
//   const [activeRestaurant, setActiveRestaurant] = useState(null);

//   const handleViewDetail = (index) => {
//     setActiveRestaurant(activeRestaurant === index ? null : index);
//   };

//   return (
//     <>
//       <Carousel />

//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="row g-4">
//             {restaurantItems.map((item, key) => (
//               <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={key}>
//                 <div className="room-item shadow rounded overflow-hidden">
//                   <div className="position-relative">
//                     <img className="img-fluid" src={item.img} alt={item.name} />
//                     <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
//                       {item.price}
//                     </small>
//                   </div>
//                   <div className="p-4 mt-2">
//                     <div className="d-flex justify-content-between mb-3">
//                       <h5 className="mb-0">{item.name}</h5>
//                       <div className="ps-2">{item.star}</div>
//                     </div>
//                     <div className="d-flex mb-3">
//                       {facility.map((fac, index) => (
//                         <small className="border-end me-3 pe-3" key={index}>
//                           {fac.icon}
//                           {fac.quantity} {fac.facility}
//                         </small>
//                       ))}
//                     </div>
//                     <p className="text-body mb-3">{item.description}</p>
//                     {activeRestaurant === key && (
//                       <div className="mt-3">
//                         <p><strong>Location:</strong> {item.location}</p>
//                       </div>
//                     )}
//                     <div className="d-flex justify-content-between">
//                       <button className="btn btn-sm btn-primary rounded py-2 px-4" onClick={() => handleViewDetail(key)}>
//                         {item.yellowbtn}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Carousel from './Carousel';

// // Sample static images
// const staticImages = [
//   'src/assets/restaurant-1.jpg',
//   'src/assets/restaurant-2.jpg',
//   'src/assets/restaurant-3.jpg',
//   'src/assets/restaurant-4.jpg',
//   'src/assets/restaurant-5.jpg',
//   'src/assets/restaurant-6.jpg',
//   'src/assets/restaurant-1.jpg',
//   'src/assets/restaurant-2.jpg',
//   'src/assets/restaurant-3.jpg',
// ];

// const Restaurants = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch the restaurants data from the API
//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/restaurant/');
//         setRestaurants(response.data);
//       } catch (error) {
//         if (error.response) {
//           // Handle HTTP errors
//           setError(error.response.data.detail || 'An error occurred while fetching restaurants.');
//         } else {
//           // Handle network errors
//           setError('Network error. Please try again.');
//         }
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   return (
//     <>
//       <Carousel />

//       <div className="container-xxl py-5">
//         <div className="container">
//           <h1 className="mb-4">Restaurant List</h1>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <div className="row g-4">
//             {restaurants.map((restaurant, index) => (
//               <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={restaurant.id}>
//                 <div className="restaurant-item shadow rounded overflow-hidden">
//                   {/* Restaurant Image */}
//                   <div className="position-relative">
//                     <img
//                       className="img-fluid"
//                       src={staticImages[index % staticImages.length]} // Use static images in a loop
//                       alt={restaurant.name}
//                     />
//                     <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
//                       {restaurant.price}
//                     </small>
//                   </div>
//                   <div className="p-4 mt-2">
//                     <h5 className="mb-0">{restaurant.name}</h5>
//                     <p className="text-body mb-3">{restaurant.description}</p>
//                     <p><strong>Location:</strong> {restaurant.location}</p>
//                     {/* Add more restaurant details as needed */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Restaurants;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from './Carousel';
import BASE_URL from '../../config';


// Sample static images
const staticImages = [
  'src/assets/restaurant-1.jpg',
  'src/assets/restaurant-2.jpg',
  'src/assets/restaurant-3.jpg',
  'src/assets/restaurant-4.jpg',
  'src/assets/restaurant-5.jpg',
  'src/assets/restaurant-6.jpg',
  'src/assets/restaurant-1.jpg',
  'src/assets/restaurant-2.jpg',
  'src/assets/restaurant-3.jpg',
];

// Sample facility icons
export const facilities = [
  {
    icon: <i className="fa fa-utensils text-primary me-2"></i>,
    quantity: "Variety of dishes",
    facility: "Cuisine",
  },
  {
    icon: <i className="fa fa-wine-glass-alt text-primary me-2"></i>,
    quantity: "Fine dining",
    facility: "Dining",
  },
  {
    icon: <i className="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
  // Add more facilities as needed
];

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the restaurants data from the API
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/restaurant/`);
        setRestaurants(response.data);
      } catch (error) {
        if (error.response) {
          // Handle HTTP errors
          setError(error.response.data.detail || 'An error occurred while fetching restaurants.');
        } else {
          // Handle network errors
          setError('Network error. Please try again.');
        }
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <Carousel />

      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="mb-4">Restaurant List</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="row g-4">
            {restaurants.map((restaurant, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={restaurant.id}>
                <div className="restaurant-item shadow rounded overflow-hidden">
                  {/* Restaurant Image */}
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src={staticImages[index % staticImages.length]} // Use static images in a loop
                      alt={restaurant.name}
                    />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {restaurant.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <h5 className="mb-0">{restaurant.name}</h5>
                    <p className="text-body mb-3">{restaurant.description}</p>
                    <p><strong>Location:</strong> {restaurant.location}</p>
                    {/* Facility Icons */}
                    <div className="d-flex mb-3">
                      {facilities.map((fac, index) => (
                        <small className="border-end me-3 pe-3" key={index}>
                          {fac.icon} {fac.quantity ? `${fac.quantity}` : ''} {fac.facility}
                        </small>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurants;

