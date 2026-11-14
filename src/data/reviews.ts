export interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  source: string;
  service?: string;
}

export const googleRating = {
  score: 5.0,
  scoreDisplay: "5.0",
  reviewCount: 2,
  source: "Google Reviews",
  googleMapsUrl: "https://maps.app.goo.gl/U9aDCbFHWBc2hbot8",
};

export const reviews: Review[] = [
  {
    name: "Jose Centeno",
    date: "2 years ago",
    rating: 5,
    text: "Excellent customer service, Quality Appliances and fair prices, will recommend friends and family.",
    source: "Google Review",
  },
  {
    name: "O rey",
    date: "3 years ago",
    rating: 5,
    text: "Called, scheduled for a repair. Came in time and has reasonable prices.",
    source: "Google Review",
  },
  {
    name: "Eli G.",
    date: "May 2025",
    rating: 5,
    text: "Junior was great at the repair. Very honest. Gave me great tips about appliance repair and shopping for new appliances. Will keep Prestige as my number 1 contact for repairs.",
    source: "Verified Customer Review",
  },
  {
    name: "Edward L.",
    date: "July 2024",
    rating: 5,
    text: "Highly recommended!",
    service: "Refrigerator, Freezer & Ice Maker Repair",
    source: "Verified Customer Review",
  },
  {
    name: "Terry C.",
    date: "February 2023",
    rating: 5,
    text: "Prompt, very friendly, very professional and diagnosed the problem with my washing machine and was able to repair it right away. I would highly recommend Prestige Appliance Company for sure!",
    source: "Verified Customer Review",
  },
  {
    name: "Maria B.",
    date: "January 2023",
    rating: 5,
    text: "On time and efficient.",
    service: "Refrigerator, Freezer & Ice Maker Repair",
    source: "Verified Customer Review",
  },
];
