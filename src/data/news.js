export function getImage(category) {

  const images = {
    Sports: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1505842465776-3acb7e06d6c5?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=60"
    ],

    Business: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=60"
    ],

    Tech: [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60"
    ],

    World: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60"
    ]
  };

  const categoryImages = images[category] || images["World"];

  const randomIndex = categoryImages.length > 0 ? (categoryImages.length + (categoryImages.length * 7)) % categoryImages.length : 0;

  return categoryImages[randomIndex];
}
export const news = [

  {
    id: 1,
    title: "India Wins Cricket Match in Thrilling Finish",
    category: "Sports",
    image: "/images/cricket.jpg",
    content: "India secured a thrilling victory in the final over..."
  },

  {
    id: 2,
    title: "Stock Market Sees Strong Growth Today",
    category: "Business",
    image: "/images/business.jpg",
    content: "Markets surged as investors showed strong confidence..."
  },

  {
    id: 3,
    title: "New AI Technology Changing the World",
    category: "Tech",
    image: "/images/tech.jpg",
    content: "AI continues to evolve rapidly, impacting industries..."
  },

  {
    id: 4,
    title: "Global Leaders Meet to Discuss Climate Change",
    category: "World",
    image: "/images/world.jpg",
    content: "World leaders gathered to address climate concerns..."
  },

  {
    id: 5,
    title: "Football Championship Ends with Dramatic Finale",
    category: "Sports",
    image: "/images/football.jpg",
    content: "The final match kept fans on the edge of their seats..."
  },

  {
    id: 6,
    title: "Startups Raise Record Funding in 2026",
    category: "Business",
    image: "/images/startup.jpg",
    content: "New startups are attracting investors globally..."
  },

  {
    id: 7,
    title: "New Smartphone Launch Breaks Records",
    category: "Tech",
    image: "/images/mobile.jpg",
    content: "The latest smartphone features cutting-edge technology..."
  },

  {
    id: 8,
    title: "International Conflicts Show Signs of Resolution",
    category: "World",
    image: "/images/conflict.jpg",
    content: "Diplomatic talks are helping reduce tensions..."
  },

  {
    id: 9,
    title: "Olympics Preparation Begins for 2028",
    category: "Sports",
    image: "/images/olympics.jpg",
    content: "Athletes worldwide begin training for the next Olympics..."
  },

  {
    id: 10,
    title: "Banking Sector Sees Major Reforms",
    category: "Business",
    image: "/images/bank.jpg",
    content: "Government introduces new reforms in banking..."
  },

  {
    id: 11,
    title: "Tech Companies Invest Heavily in AI Research",
    category: "Tech",
    image: "/images/ai.jpg",
    content: "Major companies are investing billions into AI..."
  },

  {
    id: 12,
    title: "World Economy Shows Signs of Recovery",
    category: "World",
    image: "/images/economy.jpg",
    content: "Global markets are stabilizing after recent challenges..."
  },

  {
    id: 13,
    title: "Young Cricketers Shine in Domestic League",
    category: "Sports",
    image: "/images/cricket2.jpg",
    content: "New talents are emerging in domestic cricket..."
  },

  {
    id: 14,
    title: "E-commerce Growth Reaches New High",
    category: "Business",
    image: "/images/ecommerce.jpg",
    content: "Online shopping continues to expand rapidly..."
  },

  {
    id: 15,
    title: "Breakthrough in Quantum Computing Announced",
    category: "Tech",
    image: "/images/quantum.jpg",
    content: "Scientists achieved new milestone in computing..."
  },

  {
    id: 16,
    title: "Global Summit Focuses on Peace Talks",
    category: "World",
    image: "/images/summit.jpg",
    content: "Nations are coming together to resolve conflicts..."
  },

  {
    id: 17,
    title: "Tennis Star Wins Grand Slam Title",
    category: "Sports",
    image: "/images/tennis.jpg",
    content: "An incredible performance leads to victory..."
  },

  {
    id: 18,
    title: "New Tax Policies Announced by Government",
    category: "Business",
    image: "/images/tax.jpg",
    content: "Government aims to boost economy with reforms..."
  },

  {
    id: 19,
    title: "Cybersecurity Threats Increasing Globally",
    category: "Tech",
    image: "/images/cyber.jpg",
    content: "Experts warn about rising cyber attacks..."
  },

  {
    id: 20,
    title: "International Trade Agreements Signed",
    category: "World",
    image: "/images/trade.jpg",
    content: "Countries agree on new trade partnerships..."
  }

];