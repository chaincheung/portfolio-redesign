import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PortfolioNav } from "./PortfolioNav.jsx";
import "./portfolio.css";

export const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const [sliderIndices, setSliderIndices] = useState({});

  const projects = {
    "yellowheart-app": {
      title: "Yellowheart App",
      subtitle: "The world's first blockchain ticketing wallet",
      category: "Mobile App",
      color: "#FFD700",
      heroImage: "/images/hero/yellowheart-hero.jpg",
      description: "Yellowheart is a music streaming and ticketing platform that aims to revolutionize the way music artists and fans interact. The app allows fans to support their favorite artists directly by purchasing unique digital collectibles and exclusive content, in addition to concert tickets. This UX case study outlines the process of redesigning the Yellowheart app to enhance user engagement, improve the overall user experience, and increase user retention.",
      opportunity: "Seamlessly infuse entertainment into a ticketing experience by harnessing the power of blockchain technology.",
      objective: "To create a brand-new blockchain ticketing wallet that seamlessly combines easy ticketing with digital collectibles (NFTs).",
      finalProduct: "Through our platforms (Marketplace and Wallet app) we've successfully onboarded 27k users to the web3 space and minted a total of 70k NFTs, with nearly 10k serving as event tickets.",
      sections: [
        {
          type: "text-image",
          title: "User Personas",
          content: "After conducting extensive user interviews via our users in the Yellowheart Discord server, we narrowed it down to the three main ones: The NFT Music and/or Sports Fan, The Music NFT creator, Crypto Enthusiast. While the use cases for each persona was slightly different on the Yellowheart platform, for the app they have similar objectives and pain points.",
          image: "/images/projects/yellowheart-app/user-personas.png",
          imagePosition: "left"
        },
        {
          type: "text",
          title: "User Journey",
          content: "Nick and his 2 friends, Mike and John want to check out Scope in Miami. They hear that the tickets are going to be sold on the Yellowheart marketplace. After Nick purchases the 3 tickets, he is directed to the app store to install the Yellowheart app on his phone. He installs and syncs his mobile wallet with his desktop browser wallet easily. He's thrilled that he can instantly see the tickets that he had purchased 10 mins ago on his phone. He shares the app with Mike and John so that they are able to receive and view the tickets on their devices. Fast forward to the day of Scope in Miami. Nick meets up with Mike outside of the venue. John is running late so Nick will need to send the ticket. Nick brings up the tickets and pastes John's wallet address and sends 1 ticket. Nick brings up the ticket QR code and the attendant at the door scans his ticket and Nick and Mike enter the venue, anticipating an amazing time.",
          backgroundColor: "dark"
        },
        {
          type: "features",
          title: "MVP",
          content: "These features were required for all three personas to create their Yellowheart wallet, purchase their ticket(s), transact the tickets if needed, and finally to redeem their ticket(s) at the venue.",
          features: [
            "Ability to view NFT tickets",
            "Receive and send NFT tickets",
            "Profile",
            "Enable QR Code scan",
            "Ability to create or import wallet",
            "Sync mobile wallet with desktop wallet"
          ]
        },
        {
          type: "text-image",
          title: "Your TicketWallet ",
          content: "Before, wallets only showed cryptocurrencies. Our app started by showing both crypto and a place for your tickets, sorted by event. When you tap on a ticket, a big video appears with basic event info. You can also show a QR code, send the ticket, or learn more about the event. Having tickets as videos began with Version 0. They said they did this because videos were popular on Instagram and TikTok. People really liked the video-ticket idea. When we got new clients, we added things to make users more interested. Like changing a ticket's color when you enter, sending media, and messaging ticket holders. As we added more features, we split the wallet and assets into different pages at the bottom. This made it easier if you just wanted to get into a show.",
          image: "/images/projects/yellowheart-app/wallet.png",
          imagePosition: "right"
        },
        {
          type: "text-image",
          title: "In Sync",
          content: "Being a web3 company, we aimed for safe and decentralized methods to safeguard your things. At first, the marketplace only worked on desktops. To buy, you had to get our plugin, make or bring in a wallet, and pay with a card or crypto. Other apps from competitors had set the idea that you log in to your account everywhere and see tickets. When we launched our mobile app, we improved how new users started. We asked them to make or import a wallet and gave info about private keys. But if they used a different wallet than what they used to buy tickets, the tickets wouldn't show up on the app. This caused a lot of people to be confused and lose their tickets. The tech team found a way to match wallets by scanning QR codes and reminded these users about their other wallets.",
          image: "/images/projects/yellowheart-app/sync.png",
          imagePosition: "left"
        },
        {
          type: "text-image",
          title: "Your Media Wallet",
          content: "After releasing albums on our platform, we needed to add a way to play the media and differentiate them from the tickets. We also included a new media section to add all videos and music organized by albums. Your NFTs (tickets and collectibles) and currencies would live separately.",
          image: "/images/projects/yellowheart-app/wallet.png",
          imagePosition: "right"
        },
        {
          type: "text-image",
          title: "Through The Door",
          content: "When it's time to go to the event, our mobile app works like many other ticket apps. You tap the QR button, and a spinning QR code appears that can be scanned by our redemption app. The developers made a prototype for the first redemption app. It had a list of ticket holders and a screen where you could scan using your phone's camera. I watched how people enter events and get scanned in, observing the screen, the device, and how long it took for each person. This helped me make the redemption process better. I used colors to show if the scan worked or not – green for success and red for a problem. There was a button to confirm, so mistakes could be avoided. I worked closely with the business team to get feedback from clients. We added things like multiple profiles with different rules, basic reports, and later, printing badges for conferences. For the different profiles, the developers made it simple for ushers to scan and enabled all features for the box office role. I made plans and screens for both of these cases. People wanted reports, so we added a pie chart at the top that showed how many tickets were used and not used, and the types of tickets. We made it possible to print from our app using Bluetooth. The developers connected the printer and set up how the label would look with data like names and titles from event registration. I worked on the badge designs, using fonts the printer had, and made guides for how ushers and the box office should use them.",
          image: "/images/projects/yellowheart-app/redemption.png",
          imagePosition: "left"
        },
        {
          type: "video",
          title: "Yellowheart App Animation",
          videoUrl: "https://player.vimeo.com/video/859147669?h=67f8de8bd4"
        }
      ]
    },
    "relationshipscience-com": {
      title: "RelationshipScience",
      subtitle: "See how you connect to important decision makers",
      category: "Web Platform",
      color: "#4A90E2",
      heroImage: "/images/hero/relationshipscience-hero.png",
      description: "Relationship Science ( RelSci ) provides an unparalleled suite of tools that unlock the hidden potential of your relationships. Access verified information on over 10 million decision makers to understand who knows who, how they know each other, and how you can connect.",
      opportunity: [
        "Homepage does little to educate users on what RelSci, as a company does",
        "High churn rate on the Pro product. Cancellation surveys informed that users weren't clear on the nature of the platform",
        "Value propositions are not prominent and easy to find",
        "Did not showcase RelSci product offerings",
        "User engagement was very low. (Entry point) Users would enter the site through Google search for the target individual then exit",
        "Profile pages showed all available data, resulting more scrolling and fewer signups"
      ],
      objective: [
        "Educate visitors on what RelSci, as a company does",
        "Showcase the right amount of quality verified data while enticing the user to sign up to see more",
        "Showcase the full RelSci suite of products"
      ],
      strategy: [
        "Design focus from profile pages: upsell buttons would take the user through a RelSci Products education flow, then 30 day free trial sign up flow",
        "Implement carousels which would take them to the various product/features pages which would then take them into the education/sign up flow",
        "Provide suggestions on similar profiles to increase engagement"
      ],
      kpis: [
        "Decrease churn rate",
        "Increase number of sign-ups",
        "Increase session engagement time to above 3 minutes",
        "Increase Net Promoter Score from 6 to 7-9"
      ],
      sections: [
        {
          type: "text-image",
          title: "Current Site Audit",
          content: "Is user clear on where they are on the site? Is the Call To Action clear? Are elements actionable for the user? Are main tasks easily achieved? Is the user clear on what they are looking at?",
          image: "/images/projects/relationshipscience/audit-image.png",
          imagePosition: "right",
          annotations: [
            "Use of italics generally makes for legibility concerns, especially for navigation",
            "Large clear title for page is nice",
            "Elements feel too close to each other. Too much visual noise makes it hard for user to focus eyes on one particular element",
            "The rule of thumb is to have maximum of 3 different pt size fonts on a page. Too many font style variations will create visual clutter."
          ]
        },
        {
          type: "text-image",
          title: "User Flows",
          content: "Comprehensive user flow mapping for key user journeys including search, profile viewing, and product discovery.",
          image: "/images/projects/relationshipscience/user-flow.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "Sitemap",
          content: "Card sorting exercise with 12 internal subjects to organize information architecture.",
          image: "/images/projects/relationshipscience/sitemap.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "Homepage Wireframes",
          content: "Educates user on what RelSci offers. Allows user to easily navigate to key pages on the site.",
          image: "/images/projects/relationshipscience/homepage-wf.png",
          imagePosition: "left"
        },
        {
          type: "text-image",
          title: "Homepage Final Design",
          content: "Final implementation of the homepage with improved navigation and value proposition.",
          image: "/images/projects/relationshipscience/homepage-final.png",
          imagePosition: "right"
        },
        {
          type: "text-image",
          title: "Profile Page Wireframes",
          content: "Main entry point to relationshipscience.com. Side navigation for easy access to specific data points. Provides 3 listings per data point to entice user to unlock more listings to further conversion rate. Carousel at bottom of page to navigate the user to key pages on the site.",
          image: "/images/projects/relationshipscience/profile-wf.png",
          imagePosition: "left"
        },
        {
          type: "text-image",
          title: "Profile Page Final Design",
          content: "Final profile page design with improved data presentation and conversion optimization.",
          image: "/images/projects/relationshipscience/profile-final.png",
          imagePosition: "left"
        },
        {
          type: "stakeholder-grid",
          title: "Stakeholder Interviews",
          items: [
            { title: "WHAT? (Problems and Challenges)", content: "Offer the right amount of actionable data so as to not cannibalize the Pro & Enterprise products.", bgColor: "white", textColor: "black" },
            { title: "WHY? (Purpose)", content: "Unlock the hidden potential of your relationships in your network.", bgColor: "dark", textColor: "white" },
            { title: "WHO? (Target Market)", content: "Wide range of professionals who utilize connections to achieve business goals.", bgColor: "light", textColor: "black" },
            { title: "Short Term Goals", content: "Increase growth with the Professional product", bgColor: "dark", textColor: "white" },
            { title: "Long Term Goals", content: "Increase growth of the business with additional products", bgColor: "light", textColor: "black" },
            { title: "How To Achieve Those Goals?", content: "Providing products that are essential in end user work flows", bgColor: "light", textColor: "black" }
          ]
        },
        {
          type: "competitive-analysis",
          title: "Competitive Analysis",
          logos: [
            { src: "/images/projects/relationshipscience/linkedin-logo.png", alt: "LinkedIn" },
            { src: "/images/projects/relationshipscience/boardex-logo.png", alt: "BoardEx" },
            { src: "/images/projects/relationshipscience/relpro-logo.png", alt: "RelPro" }
          ],
          slides: [
            { src: "/images/projects/relationshipscience/comparison-chart1.png", alt: "Comparison Chart 1" },
            { src: "/images/projects/relationshipscience/comparison-chart2.png", alt: "Comparison Chart 2" },
            { src: "/images/projects/relationshipscience/linkedin-comparison.png", alt: "LinkedIn Comparison" },
            { src: "/images/projects/relationshipscience/boardex-comparison.png", alt: "BoardEx Comparison" },
            { src: "/images/projects/relationshipscience/relpro-comparison.png", alt: "RelPro Comparison" }
          ]
        },
        {
          type: "verticals-grid",
          title: "User Interviews | Vertical Profiles",
          subtitle: "Verticals ( 7 )",
          verticals: [
            { name: "Non-Profit", color: "yellow" },
            { name: "Management Consulting", color: "green" },
            { name: "B2B", color: "red" },
            { name: "Private Equity", color: "blue" },
            { name: "Legal", color: "blue" },
            { name: "Wealth Management", color: "red" },
            { name: "Educational Institutions", color: "green" }
          ],
          discoverItems: ["Daily Workflows", "Motivations", "User Behavior", "Finds Valuable", "Pain Points"]
        },
        {
          type: "text-image",
          title: "User Personas",
          content: "Detailed personas created based on user interviews across different verticals to inform design decisions.",
          image: "/images/projects/relationshipscience/user-persona-bg.png",
          imagePosition: "full"
        },
        {
          type: "info-block",
          title: "Example of informed design: Moving the Relationships Module",
          content: "This really helped in determining which modules were the most helpful. The current site had the news section before the relationships module. Through interviews, the trend was that users would scroll past the News module to the Relationships module."
        },
        {
          type: "mvp-dark",
          title: "MVP",
          features: [
            "Profile Pages",
            "Search People & Orgs",
            "News & Alerts",
            "RelSci Industry Reports (Already developed)",
            "RelSci Products",
            "About RelSci",
            "Homepage"
          ],
          objectives: ["Showcase", "Educate", "Lead to Conversion"]
        },
        {
          type: "wireframes-grid",
          title: "Wireframes",
          wireframeSets: [
            {
              name: "Homepage",
              description: ["Educates user on what RelSci offers", "Allows user to easily navigate to key pages on the site"],
              images: [
                { src: "/images/projects/relationshipscience/WF1.png", alt: "Homepage Wireframe" },
                { src: "/images/projects/relationshipscience/homepage-final.png", alt: "Homepage Final Design" }
              ]
            },
            {
              name: "Profile",
              description: [
                "Main entry point to relationshipscience.com",
                "Side navigation for easy access to specific data points",
                "Provides 3 listings per data point to entice user to unlock more listings to further conversion rate",
                "Carousel at bottom of page to navigate the user to key pages on the site"
              ],
              images: [
                { src: "/images/projects/relationshipscience/WF2.png", alt: "Profile Wireframe" },
                { src: "/images/projects/relationshipscience/profile-final.png", alt: "Profile Final Design" }
              ]
            },
            {
              name: "What Is RelSci?",
              description: [
                "Educates user on the What? and How? of RelSci",
                "Provides case studies",
                "Navigates user to product offerings"
              ],
              images: [
                { src: "/images/projects/relationshipscience/WF3.png", alt: "What is RelSci Wireframe" },
                { src: "/images/projects/relationshipscience/what-is-relsci-final.png", alt: "What is RelSci Final Design" }
              ]
            }
          ]
        },
        {
          type: "user-testing-dark",
          title: "User Testing",
          subjects: "12",
          tasks: [
            "Search for an individual",
            "Find out news on an individual",
            "Find out more about RelSci",
            "Learn more about RelSci products"
          ],
          comprehension: [
            "What is RelSci?",
            "What does RelSci provide as a service?"
          ]
        },
        {
          type: "ab-testing-grid",
          title: "A/B testing with VWO",
          tests: [
            { image: "/images/projects/relationshipscience/ab-test-1.png", caption: "Removing upsell message and center CTA button" },
            { image: "/images/projects/relationshipscience/ab-test-2.png", caption: "CTA Button Color Change" },
            { image: "/images/projects/relationshipscience/ab-test-3.png", caption: "Background image exploration" }
          ]
        },
        {
          type: "text-image",
          title: "UI Style Guide",
          content: "Comprehensive UI style guide establishing design system, typography, colors, and component patterns.",
          image: "/images/projects/relationshipscience/ui-style-guide.png",
          imagePosition: "full",
          backgroundColor: "white"
        }
      ]
    },
    "relsci-radar": {
      title: "RelSci Radar",
      subtitle: "SAS Contact Intelligence Tool",
      category: "Enterprise Tool",
      color: "#7B68EE",
      heroImage: "/images/hero/radar-hero.jpg",
      description: "RelSci Radar is a powerful Contact Intelligence Tool that enables the enterprise user to secure more warm connections, be better prepared for meetings, and expand the reach of their network.",
      opportunity: "Enterprise users needed a better way to leverage their network connections and prepare for important meetings. The existing interface had usability issues that prevented users from efficiently accessing calendar information, understanding relationship connections, and preparing meeting briefings.",
      objective: [
        "Redesign the Radar interface to improve usability and reduce visual clutter",
        "Enable users to quickly view calendar events and identify warm connection opportunities",
        "Streamline the process of preparing for meetings with relevant relationship intelligence",
        "Create a seamless experience across desktop and mobile platforms"
      ],
      requirements: [
        "Product must be integrated seamlessly onto existing RelSci platform",
        "User has the ability to view calendar events and email interactions with colleagues and connections",
        "User has the ability to view and print calendar briefings",
        "Mobile app is as essential as desktop"
      ],
      sections: [
        {
          type: "text-image",
          title: "User Research Findings",
          content: "1. Stacking tabs on another group of tabs is not only bad practice but causes visual clutter for the user.\n2. Discovery through enterprise user interviews: Seeing the number of relationships isn't all that important, especially when the number rarely changes.\n3. The Tools bar was not only heavy visually, providing too much contrast, it also takes up too much real estate, reducing space for the core content.\n4. CTAs needed to feel more actionable.\n5. My Agenda title is redundant and the primary focus should be the month/year.\n6. Having the view change as a dropdown is an extra click for the user, when there are only 2 options to show: week and month.\n7. Elements are too small for the users 45+ years of age and don't have enough breathing space.",
          image: "/images/projects/relsci-radar/month-view.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "UI Reimagined",
          content: "Redesigned dashboard with improved layout, better spacing, and more actionable CTAs.",
          image: "/images/projects/relsci-radar/dashboard-month.png",
          imagePosition: "full"
        },
        {
          type: "text",
          title: "Preparing for an Upcoming Meeting User Journey",
          content: "It's 9AM on a Tuesday morning as Andrew Jaffe sits down at his desk. On his email client, he sees that he has a meeting at 1PM with Microsoft. He needs to know who else in his company of 400 employees who have had the most recent interaction with Microsoft recently and what was discussed.\n\nHe logs onto relsci.com, and clicks into the Radar application, which displays the meeting he will be attending at 1PM. He also is able to see who all the attendees will be. He clicks on Microsoft, which opens up the RelSci company profile page. He looks at the Radar Interactions module to see who is the Last Colleague With Interaction. He identifies that it's his Chief Product Officer Leroy Smith. He clicks on the Send Email button which launches his email client with pre-filled subject line.",
          backgroundColor: "dark"
        },
        {
          type: "gif",
          title: "",
          gif: "/images/projects/relsci-radar/ezgif-maker.gif"
        },
        {
          type: "text-image",
          title: "User Flow - Print Report",
          content: "User flow for printing briefing reports with specific dates and interaction breakdowns.",
          image: "/images/projects/relsci-radar/radar-user-flow.png",
          imagePosition: "full"
        },
        {
          type: "gif",
          title: "",
          gif: "/images/projects/relsci-radar/report.gif"
        },
        {
          type: "user-testing-dark",
          title: "User Testing",
          subjects: "6",
          verticals: [
            { name: "Non-Profit", count: 2 },
            { name: "Legal", count: 1 },
            { name: "Business Development", count: 1 },
            { name: "Consulting", count: 1 },
            { name: "Private Equity", count: 1 }
          ],
          tasks: [
            "Print briefing report for specific dates",
            "Find out specific interaction breakdown with a specified contact for a specified month",
            "Find out which colleagues are in touch with a specified contact",
            "Change the interaction strength for a contact",
            "Discover the interaction dates of a specified colleague",
            "Send email to the last colleague with an interaction with specified company"
          ]
        },
      ]
    },
    "audiyo": {
      title: "Audiyo",
      subtitle: "The audio social media app",
      category: "Social Media",
      color: "#FF6B6B",
      heroImage: "/images/hero/audiyo-hero.png",
      description: "Audiyo is an innovative audio-first social media platform that brings people together through voice and sound.",
      opportunity: "When I was approached with this project, I really saw the potential in it. The way it was described to me was: Twitter, but instead of words, users express themselves with sound bytes, or Instagram, but instead of images, sound. The goal was ultimately create an engaging iOS experience in prototype form to attract possible investors.",
      objective: "Design a prototype to demonstrate the full range of features and interactions present in successful existing social channels/apps. The success of the project will be demonstrated by user base acquisition which will lead to the creation of the AUDIYO! social community.",
      sections: [
        {
          type: "text-image",
          title: "Initial User Test",
          content: "The stakeholder had some screen flows designed. I tested those screens among my user base and also performed my own analysis of the screen flows.",
          image: "/images/projects/audiyo/initial-test.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "User Personas",
          content: "I used the information I gathered from the user interviews; noticing trends in reasons for social channel usage, what engages them, usage goals, and pain points, to create personas that will use the app differently enough to demonstrate the robustness of features and functionalities.",
          image: "/images/projects/audiyo/user-persona.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "Primary Persona - Elijah",
          content: "Elijah represents the primary user persona for Audiyo - a college student who uses social media to connect with friends and share experiences through audio.",
          image: "/images/projects/audiyo/elijah-persona.png",
          imagePosition: "full"
        },
        {
          type: "text",
          title: "Elijah's User Journey",
          content: "It's a beautiful spring afternoon and Elijah is sitting on campus grounds with a small group of friends. They've laid out a blanket on the grass and they're sitting in a circle just talking about their day. There are backpacks everywhere. One of Elijah's friend is messing around on the guitar. Elijah gets a notification on his phone that 2 people are listening to his Audiyo. He taps on the notification to see who is looking at his posts. He turns to the girl that he likes to show her a cool Audiyo that he saved(saved is easier to access than seeing a whole list of likes). She laughs. Elijah asks his friend with the guitar to play something, he records an Audiyo of himself singing and posts it.",
          backgroundColor: "dark"
        },
        {
          type: "competitive-analysis-audiyo",
          title: "Competitive Analysis",
          content: "I chose 4 social media apps that I thought researching would highly benefit the direction of this project:",
          competitors: [
            {
              name: "Soundbyte",
              image: "/images/projects/audiyo/soundbyte.png",
              description: "An app that is a direct competitor of Audiyo! The premise is the same. Audiyo!, however will do it better with a more engaging experience and more appealing and effective UI design."
            },
            {
              name: "Twitter",
              image: "/images/projects/audiyo/twitter.png",
              description: "If Audiyo! was going to be a Twitter but with sound, then I had to examine the experiences that made this social channel wildly successful. The core age group that Audiyo! is trying to reach is the same as Twitter's."
            },
            {
              name: "Instagram",
              image: "/images/projects/audiyo/instagram.png",
              description: "Again I had to dissect the user experience model to understand what goes behind the experience that will attract a large user base. Same core demographic."
            },
            {
              name: "Snapchat",
              image: "/images/projects/audiyo/snapchat.png",
              description: "Another successful image/video based social channel that has a large social community. Same core demographic."
            }
          ]
        },
        {
          type: "text-image",
          title: "Competitive Element Analysis",
          content: "Analyzing the elements helped me realize what features and functionalities I needed to consider to create an awesome social channel experience. There has to be a home feed where the user can view posts, share posts, and comment. This promotes repeat app interaction which ultimately leads to a large user base acquisition. The user has to be able to find and add people, which will widen the users reach thus promote app engagement. Ability to explore and discover content to further app engagement.",
          image: "/images/projects/audiyo/competitive-element-analysis.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "Competitive Layout Analysis",
          content: "",
          image: "/images/projects/audiyo/competitive-layout-analysis.png",
          imagePosition: "full"
        },
        {
          type: "user-acquisition",
          title: "User Acquisition",
          content: "I used social media channels like Facebook and email to acquire a large user pool. I then used a survey to find out what channels they used and how much time daily was spent on these social channels. The sweet spot is the 18-24 age bracket that are on the social channels 2 hours or more on a daily basis. It would be interesting to find out what elements keep them engaged, and what motivates their use.",
          surveyImages: [
            "/images/projects/audiyo/survey1.png",
            "/images/projects/audiyo/survey2.png",
            "/images/projects/audiyo/survey3.png"
          ],
          chartImage: "/images/projects/audiyo/user-acquisition-chart.png"
        },
        {
          type: "user-flow-audiyo",
          title: "Elijah's User Flow",
          flows: [
            { image: "/images/projects/audiyo/flow1.png", description: "He taps on the Audiyo! notification." },
            { image: "/images/projects/audiyo/flow2.png", description: "After he sees who's listening to his Audiyos, he goes to his profile." },
            { image: "/images/projects/audiyo/flow3.png", description: "After checking his updated followers, he taps on his saved Audiyos." },
            { image: "/images/projects/audiyo/flow4.png", description: "He taps play on the first Audiyo! to impress his female friend." },
            { image: "/images/projects/audiyo/flow5.png", description: "His group of friends listen in and feel inspired to record their own." },
            { image: "/images/projects/audiyo/flow6.png", description: "He asks his friend with the guitar to start playing, as he taps record." },
            { image: "/images/projects/audiyo/flow7.png", description: "Elijah taps done once he's done recording." },
            { image: "/images/projects/audiyo/flow8.png", description: "He taps to add a photo" },
            { image: "/images/projects/audiyo/flow9.png", description: "He chooses to snap a photo" },
            { image: "/images/projects/audiyo/flow10.png", description: "The camera interface comes up" },
            { image: "/images/projects/audiyo/flow11.png", description: "He crops the image easily" },
            { image: "/images/projects/audiyo/flow12.png", description: "He finishes by naming the Audiyo!" },
            { image: "/images/projects/audiyo/flow13.png", description: "After he taps Done, the new Audiyo! appears on his Home feed." }
          ]
        },
        {
          type: "features-needed",
          title: "Features Needed",
          features: [
            "Create Audiyo",
            "View Profile",
            "Notifications",
            "List of friends who have listened",
            "Favorites or Saved Audiyos",
            "Select or Take picture",
            "Comment - Text or audio",
            "Share via Tumblr, etc",
            "CoLab (ability to mix/edit up to 3 Audiyos)",
            "Search",
            "Recommendations",
            "Inbox/Direct Message",
            "Sound filters"
          ]
        },
        {
          type: "text-image",
          title: "Features Prioritization Matrix",
          content: "",
          image: "/images/projects/audiyo/features-prioritization1.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "",
          content: "",
          image: "/images/projects/audiyo/features-prioritization2.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "Elijah's Screens Features",
          content: "",
          image: "/images/projects/audiyo/elijah-screens-features.png",
          imagePosition: "full"
        },
        {
          type: "wireframes-audiyo",
          title: "Wireframes",
          wireframeSets: [
            {
              name: "Activity Screen",
              iterations: [
                {
                  image: "/images/projects/audiyo/activity1.png",
                  description: "1. Favorites icon is easily accessible. 1. Stakeholder wanted to try using a fire icon. 2. Adopted Instagram's layout style so that it would be familiar to users. Wanted to make it slightly different by using icons instead of words."
                },
                {
                  image: "/images/projects/audiyo/activity2.png",
                  description: "1. Using a more familiar icon for Favorites. Users didn't know what the fire icon was. 2. Users didn't understand the icons during user testing. 3. Using a brighter more vibrant green to continue stakeholder's color palette choice. Experimented with using brown to complement the vibrant green to provide contrast."
                },
                {
                  image: "/images/projects/audiyo/activity3.png",
                  description: "1. I decided on a purple to blue gradient for the main color to give the header/footer bar some depth and character. Users did not appreciate the vibrant green at all. 2. Decided to keep the green from the previous iteration as a complementary color. 3. Made the Create button more important with design treatment and size increase. 4. Incorporating logo to represent Activity."
                }
              ]
            },
            {
              name: "Profile Screen",
              iterations: [
                {
                  image: "/images/projects/audiyo/profile1.png",
                  description: "1. Chose a landscape image orientation to accommodate for the length of the sound wave from left to right."
                },
                {
                  image: "/images/projects/audiyo/profile2.png",
                  description: "1. Recommended that the CoLab feature made sense in the profile, because users receive CoLab requests in the Inbox. 2. Simplified stat icons. 3. Removed double line between Audiyos to fit more content on the screen."
                },
                {
                  image: "/images/projects/audiyo/profile3.png",
                  description: "1. Changed to Me, to help make the app for personable. 2. Simplified CoLab icon. 3. Added an Inbox notification view."
                }
              ]
            },
            {
              name: "Favorites Screen",
              iterations: [
                {
                  image: "/images/projects/audiyo/favorites1.png",
                  description: "According to the interviews, my user pool they wanted the ability to access their favorite content with ease, so I recommended that the Favorites icon be placed at the top right in the header."
                },
                {
                  image: "/images/projects/audiyo/favorites2.png",
                  description: "The stakeholder wanted to the ability to quickly \"listen/(follow)\"."
                },
                {
                  image: "/images/projects/audiyo/favorites3.png",
                  description: "I recommend having the stats in gray to give the Feed screens some contrast between elements."
                }
              ]
            },
            {
              name: "Record Audiyo Screen",
              iterations: [
                {
                  image: "/images/projects/audiyo/record1.png",
                  description: "The first iteration of the recording process involved the user pressing the record button, the inner circle would then transition into a stop icon, then transition to a play icon. The user needed the ability to import sound files from his/her device. However, the stakeholder wanted the user to have the ability to record different sound segments."
                },
                {
                  image: "/images/projects/audiyo/record2.png",
                  description: "Through user testing I found out from users what common practices they use/are used to for recording different segments of video/sound. So here, the user holds down to record. Recording stops when they release. And hold down to record more."
                },
                {
                  image: "/images/projects/audiyo/record3.png",
                  description: "I recommended occasional on-boarding messages where deemed helpful to the user."
                }
              ]
            },
            {
              name: "Add Podcast Downloads",
              iterations: [
                {
                  image: "/images/projects/audiyo/podcast1.png",
                  description: ""
                },
                {
                  image: "/images/projects/audiyo/podcast2.png",
                  description: "Midway through the project, realizing the potential of this app to be more than just a platform to share sounds and recorded clips, I implemented the Add Podcast feature, so that familiar voices and influential personalities can be shared, adding more value to the app. Users really liked the addition of this feature and found value in it."
                }
              ]
            },
            {
              name: "Audiyo Created Screen",
              iterations: [
                {
                  image: "/images/projects/audiyo/created1.png",
                  description: "Initial thought on the design of the sound wave: that it should be colorful and vibrant, full of life. When recording is finished, the user has options to record again or put a filter on the Audiyo."
                },
                {
                  image: "/images/projects/audiyo/created2.png",
                  description: "1. Changed the Audiyo visual representation to something more organic and loose, so that when played it almost feels alive. 2. Recommended icons to replace text. 3. Implemented actions in circles to have better visual synergy with the Record button."
                },
                {
                  image: "/images/projects/audiyo/created3.png",
                  description: "Dialed back the background image to better highlight the Audiyo wave and the actionable elements."
                }
              ]
            },
            {
              name: "Sharing Flow",
              type: "sharing",
              initialFlow: [
                { image: "/images/projects/audiyo/sharing-initial1.png" },
                { image: "/images/projects/audiyo/sharing-initial2.png" },
                { image: "/images/projects/audiyo/sharing-initial3.png" },
                { image: "/images/projects/audiyo/sharing-initial4.png" }
              ],
              initialDescription: "The initial share preparation process involved a rectangular image box to accommodate the Audiyo dimensions. The categorizing method would require the user to label the Audiyo with pre-selected categories. The Tag People and Add Location would behave in the same way. It would take you to a different screen and then back to the Share To screen. The user also could choose to post to Listeners to send a CoLab to friends by toggling the secondary navigation on top.",
              finalFlow: [
                { image: "/images/projects/audiyo/sharing-final1.png" },
                { image: "/images/projects/audiyo/sharing-final2.png" },
                { image: "/images/projects/audiyo/sharing-final3.png" },
                { image: "/images/projects/audiyo/sharing-final4.png" }
              ],
              finalDescription: "I tested this flow with users and although they didn't mind the initial process, they thought this was more a modern and streamlined approach. Users also thought having channels/categories was limiting and suggested using hashtags. In this flow, the user is able to: Add People, Location, and post without leaving the screen. The Share to other social channels option pops up as an overlay after the task is done."
            }
          ]
        },
      ]
    },
    "aig-digital-payment": {
      title: "Digital Payment Engine",
      subtitle: "A streamlined payments platform",
      category: "FinTech",
      color: "#50C878",
      heroImage: "/images/hero/aig-hero.png",
      description: "Design a Digital Payments Interface that AIG can present to various levels of sale teams to utilize across the entire AIG digital ecosystem. The DPI should allow the user to add/manage credit card(s) and/or bank account as well as, set up recurring payments. The interface should be product neutral: a white label solution.",
      sections: [
        {
          type: "text-image",
          title: "Competitive Analysis",
          content: "Our team started with the research of best practices of existing payment platforms. We analyzed specific elements, features, transitions, and interactions that we thought would work on our project. The goal was to create an experience that is simple, is easy to use, and has a clean interface. Our team conducted an onsite (Charlotte, NC) white-boarding session with the dev team and stakeholders to establish sprint deliverables. We had two days to create lo-fidelity wireframes to present to stakeholders. These wireframes illustrated multiple user journeys, interactions, and transitions.",
          image: "/images/projects/aig-digital-payment/competitive-analysis.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "User Flows",
          content: "Adding Credit Card Info or Bank Account",
          image: "/images/projects/aig-digital-payment/user-flows.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "User Flows",
          content: "Make a Payment",
          image: "/images/projects/aig-digital-payment/make-payment-flow.png",
          imagePosition: "full"
        },
        {
          type: "text-image",
          title: "Enrolling in Auto-Pay Flow Research",
          content: "During the competitive research, our team realized that the ability to set up recurring payments (a requirement that wasn't on the original brief) was important for a better user experience. We took the initiative of conducting some research into the space of recurring payments, or what we call Auto-Pay. We analyzed different recurring payment/auto-pay enrollment flows belonging to various banking institutions: Chase, Citi, American Express, and Bank Of America. We chose Citi because it was best aligned with the AIG business model/user needs.",
          image: "/images/projects/aig-digital-payment/citi-autopay.png",
          imagePosition: "full"
        },
        {
          type: "iterations",
          title: "Iterations",
          iterationGroups: [
            {
              name: "Dashboard",
              iterations: [
                {
                  title: "1st Iteration",
                  points: [
                    "The user needs a view where they have an overview of their payments and payment options.",
                    "The main CTA is the alert that a payment is due. That will lead the user to the payment process.",
                    "The tools was initially a business requirement as a section where future implementations could reside."
                  ],
                  image: "/images/projects/aig-digital-payment/dashboard-1.png"
                },
                {
                  title: "2nd Iteration",
                  points: [
                    "Here we started to implement AIG design guidelines and played around with alternate layouts for the dashboard."
                  ],
                  image: "/images/projects/aig-digital-payment/dashboard-2.png"
                },
                {
                  title: "Final Iteration",
                  points: [
                    "We made a UX decision that since this was a payments engine, and therefore should be payment focused. The user should be provided an overview of all payments to each respective policy, with quick access to payment details.",
                    "The CTAs are clear and actionable."
                  ],
                  image: "/images/projects/aig-digital-payment/dashboard-final.png"
                }
              ]
            },
            {
              name: "Make a Payment",
              iterations: [
                {
                  title: "1st Iteration",
                  points: [
                    "The user needs a view where they have an overview of their payments and payment options",
                    "The main CTA is the alert that a payment is due. That will lead the user to the payment process.",
                    "The tools was initially a business requirement as a section where future implementations could reside."
                  ],
                  image: "/images/projects/aig-digital-payment/make-payment-1.png"
                },
                {
                  title: "2nd Iteration",
                  points: [
                    "Here we start to implement AIG design guidelines and making the visual design more aligned with existing products.",
                    "Initially we had Payment Date before Payment Method, but user testing showed that most users didn't recall the Payment Date after selecting the Payment Method.",
                    "Actionable and important elements would be in AIG Blue."
                  ],
                  image: "/images/projects/aig-digital-payment/make-payment-2.png"
                },
                {
                  title: "Final Iteration",
                  points: [
                    "We wanted to simplify the page more by minimizing the other titles to give the Payment Amount more focus.",
                    "Changed the payment amount color to green=color of money.",
                    "The field titles scale to the middle.",
                    "Widened the fields to 680 px to accommodate for longer field entry data.",
                    "Added a close icon so the user can exit the flow at any point."
                  ],
                  image: "/images/projects/aig-digital-payment/make-payment-final.jpg"
                }
              ]
            },
            {
              name: "Select Bank Account",
              iterations: [
                {
                  title: "1st Iteration",
                  points: [
                    "The user is clear on task at hand. The use of color and iconography increases emphasis."
                  ],
                  image: "/images/projects/aig-digital-payment/select-bank-1.png"
                },
                {
                  title: "2nd Iteration",
                  points: [
                    "Payment amount in blue for clarity.",
                    "Removed other pieces of information to enable user to concentrate on immediate task.",
                    "Made icons larger for increase in clarity."
                  ],
                  image: "/images/projects/aig-digital-payment/select-bank-2.png"
                },
                {
                  title: "Final Iteration",
                  points: [
                    "Adopted the card visual style from the Dashboard page to make the visual design language more cohesive.",
                    "Offering Checking and Savings as options saves the user a click",
                    "Made the payment due date a more important element in the flow."
                  ],
                  image: "/images/projects/aig-digital-payment/select-bank-final.jpg"
                }
              ]
            },
            {
              name: "Add Checking Account",
              iterations: [
                {
                  title: "1st Iteration",
                  points: [
                    "Use of radial buttons for Checking or Savings account.",
                    "Use of red circular indicator so the user knows where to find the routing number/account number on their check.",
                    "Bank logo populates in the field when the correct routing number is entered.",
                    "Confirmation check marks outside of form field to let user know that the information they entered is correct."
                  ],
                  image: "/images/projects/aig-digital-payment/add-checking-1.png"
                },
                {
                  title: "2nd Iteration",
                  points: [
                    "Moved away from radial selector buttons for a more contemporary button design.",
                    "Titles scale to the middle of top of form field.",
                    "Bank logo is placed on left side of form field so user can know which bank is being used right away.",
                    "Instead of using \"X\", green checkmarks communicate selection as well as, confirmation."
                  ],
                  image: "/images/projects/aig-digital-payment/add-checking-2.png"
                },
                {
                  title: "Final Iteration",
                  points: [
                    "We wanted to simplify the page more by minimizing the other titles to give the Payment Amount more focus.",
                    "Changed the payment amount color to green=color of money.",
                    "The field titles scale to the middle.",
                    "Widened the fields to 680 px to accommodate for longer field entry data.",
                    "Added a close icon so the user can exit the flow at any point."
                  ],
                  image: "/images/projects/aig-digital-payment/add-checking-final.jpg"
                }
              ]
            },
            {
              name: "Add Credit Card",
              iterations: [
                {
                  title: "1st Iteration",
                  points: [
                    "Name is already pre-filled.",
                    "Street Address utilizes Google Address Autocomplete API.",
                    "Four different card security code examples are given, because they appear on different locations depending on which company the user has.",
                    "Button is in inactive state until all fields are filled with valid data."
                  ],
                  image: "/images/projects/aig-digital-payment/add-credit-1.png"
                },
                {
                  title: "2nd Iteration",
                  points: [
                    "Use of AIG Blue to show selected state/field",
                    "Changed the term \"Expiry\" to \"Expiration\", because users didn't understand the term right away during user testing."
                  ],
                  image: "/images/projects/aig-digital-payment/add-credit-2.png"
                },
                {
                  title: "Final Iteration",
                  points: [
                    "Simplified flow in the same manner as the Add Checking Account flow.",
                    "Simplified the security code example. Moved the example into the field for visual relationship and showing only the necessary information for the user to digest easily to complete the task."
                  ],
                  image: "/images/projects/aig-digital-payment/add-credit-final.jpg"
                }
              ]
            },
            {
              name: "Enroll in Autopay",
              iterations: [
                {
                  title: "1st Iteration",
                  points: [
                    "Radial selection tool",
                    "The user comes to this page selecting \"Other Amount\" in the Payment Amount dropdown menu."
                  ],
                  image: "/images/projects/aig-digital-payment/autopay-1.png"
                },
                {
                  title: "2nd Iteration",
                  points: [
                    "Movement towards implementing brand guidelines.",
                    "All CTA buttons are green."
                  ],
                  image: "/images/projects/aig-digital-payment/autopay-2.png"
                },
                {
                  title: "Final Iteration",
                  points: [
                    "Instead of taking the user to another page, the user can enter the amount directly into the field when they select \"Other Amount\". It makes it easier for the user to complete the task."
                  ],
                  image: "/images/projects/aig-digital-payment/autopay-final.jpg"
                }
              ]
            }
          ]
        },
        {
          type: "user-testing-aig",
          title: "User Testing",
          tool: "UserZoom",
          participants: "6 Females | 3 Males",
          findings: [
            "Participants remarked that they liked the Pay Now bar on the Dashboard",
            "Most participants missed changing the date due to the order of the fields",
            "All participants missed changing the date the payment date for both flows.",
            "A participant remarked that he would like to confirm the payment amount."
          ]
        },
        {
          type: "conclusion",
          title: "Conclusion",
          points: [
            "Designed an intuitive interface for AIG Digital Payments Engine that's easy to use.",
            "User is able to quickly perform essential tasks during payment flows.",
            "Established design standards that can be implemented across all products in the AIG Digital Ecosystem"
          ]
        }
      ]
    }
  };

  const project = projects[projectSlug];

  if (!project) {
    return (
      <div className="portfolio-page">
        <PortfolioNav />
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <button onClick={() => navigate("/")} className="btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const renderSection = (section, index) => {
    switch (section.type) {
      case "text-image":
        const isFullWidth = section.imagePosition === "full" || !section.imagePosition;
        return (
          <div key={index} className={`project-section ${section.imagePosition === "left" ? "image-left" : section.imagePosition === "right" ? "image-right" : "image-full"}`}>
            {!isFullWidth ? (
              <>
                <div className="section-content">
                  <h2 className="section-title">{section.title}</h2>
                  {section.content && (
                    section.content.match(/^\d+\./) ? (
                      <ol className="section-text" style={{ paddingLeft: "1.5rem" }}>
                        {section.content.split('\n').filter(line => line.trim()).map((line, idx) => {
                          const match = line.match(/^\d+\.\s*(.+)$/);
                          return match ? <li key={idx}>{match[1]}</li> : null;
                        })}
                      </ol>
                    ) : (
                      <p className="section-text">{section.content}</p>
                    )
                  )}
                  {section.annotations && (
                    <ol className="section-annotations">
                      {section.annotations.map((annotation, idx) => (
                        <li key={idx}>{annotation}</li>
                      ))}
                    </ol>
                  )}
                </div>
                {section.image && (
                  <div className="section-image-wrapper">
                    <img src={section.image} alt={section.title} className="section-image" />
                  </div>
                )}
              </>
            ) : (
              <div 
                className={`section-content ${section.backgroundColor === "white" ? "white-background" : ""}`}
                style={section.backgroundColor === "white" ? { backgroundColor: "#ffffff", padding: "3rem", borderRadius: "8px" } : {}}
              >
                <h2 className="section-title" style={section.backgroundColor === "white" ? { color: "#000000" } : {}}>{section.title}</h2>
                {section.content && (
                  section.content.match(/^\d+\./) ? (
                    <ol className="section-text" style={{ paddingLeft: "1.5rem", ...(section.backgroundColor === "white" ? { color: "#333333" } : {}) }}>
                      {section.content.split('\n').filter(line => line.trim()).map((line, idx) => {
                        const match = line.match(/^\d+\.\s*(.+)$/);
                        return match ? <li key={idx} style={section.backgroundColor === "white" ? { color: "#333333" } : {}}>{match[1]}</li> : null;
                      })}
                    </ol>
                  ) : (
                    <p className="section-text" style={section.backgroundColor === "white" ? { color: "#333333" } : {}}>{section.content}</p>
                  )
                )}
                {section.image && (
                  <div className="section-image-wrapper">
                    <img src={section.image} alt={section.title} className="section-image" />
                  </div>
                )}
                {section.annotations && (
                  <ol className="section-annotations">
                    {section.annotations.map((annotation, idx) => (
                      <li key={idx}>{annotation}</li>
                    ))}
                  </ol>
                )}
              </div>
            )}
          </div>
        );
      case "text":
        return (
          <div key={index} className={`project-section text-only ${section.backgroundColor === "dark" ? "dark-bg" : ""}`}>
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-text">{section.content}</p>
            </div>
          </div>
        );
      case "info-block":
        return (
          <div key={index} className="project-section">
            <div className="project-info-block">
              <h3>{section.title}</h3>
              {Array.isArray(section.content) ? (
                <ul>
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          </div>
        );
      case "features":
        return (
          <div key={index} className="project-section features">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              {section.content && <p className="section-text">{section.content}</p>}
              <div className="features-grid">
                {section.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "video":
        return (
          <div key={index} className="project-section video-section">
            <div className="section-content">
              {section.title && <h2 className="section-title">{section.title}</h2>}
              {section.videoUrl && (
                <div className="video-wrapper">
                  <iframe
                    src={section.videoUrl}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={section.title || "Video"}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        );
      case "gif":
        return (
          <div key={index} className="project-section gif-section">
            <div className="section-content">
              {section.gif && (
                <div className="gif-wrapper">
                  <img src={section.gif} alt={section.title || "Animation"} className="gif-image" />
                </div>
              )}
            </div>
          </div>
        );
      case "button-links":
        return (
          <div key={index} className="project-section button-links-section">
            <div className="section-content">
              <div className="button-links-wrapper">
                {section.buttons && section.buttons.map((button, idx) => (
                  <a
                    key={idx}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button-link"
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      case "competitive-analysis-audiyo":
        return (
          <div key={index} className="project-section competitive-analysis-audiyo-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              {section.content && <p className="section-text">{section.content}</p>}
              <div className="competitive-grid-audiyo">
                {section.competitors && section.competitors.map((competitor, idx) => (
                  <div key={idx} className="competitive-item-audiyo">
                    <img src={competitor.image} alt={competitor.name} className="competitive-image-audiyo" />
                    <h3 className="competitive-name-audiyo">{competitor.name}</h3>
                    <p className="competitive-description-audiyo">{competitor.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "user-acquisition":
        return (
          <div key={index} className="project-section user-acquisition-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              {section.content && <p className="section-text">{section.content}</p>}
              {section.surveyImages && (
                <div className="survey-images-grid">
                  {section.surveyImages.map((img, idx) => (
                    <img key={idx} src={img} alt={`Survey ${idx + 1}`} className="survey-image" />
                  ))}
                </div>
              )}
              {section.chartImage && (
                <div className="chart-image-wrapper">
                  <img src={section.chartImage} alt="User Acquisition Chart" className="chart-image" />
                </div>
              )}
            </div>
          </div>
        );
      case "user-flow-audiyo":
        return (
          <div key={index} className="project-section user-flow-audiyo-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              <div className="user-flow-grid-audiyo">
                {section.flows && section.flows.map((flow, idx) => (
                  <div key={idx} className="user-flow-item-audiyo">
                    <img src={flow.image} alt={`Flow step ${idx + 1}`} className="user-flow-image-audiyo" />
                    <p className="user-flow-description-audiyo">{flow.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "features-needed":
        return (
          <div key={index} className="project-section features-needed-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              <div className="features-grid-audiyo">
                {section.features && section.features.map((feature, idx) => (
                  <div key={idx} className="feature-button-audiyo">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "wireframes-audiyo":
        return (
          <div key={index} className="project-section wireframes-audiyo-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              {section.wireframeSets && section.wireframeSets.map((set, setIdx) => (
                <div key={setIdx} className="wireframe-set-audiyo">
                  <h3 className="wireframe-set-title-audiyo">{set.name}</h3>
                  {set.type === "sharing" ? (
                    <>
                      <h4 className="wireframe-subtitle-audiyo">Initial Sharing Flow</h4>
                      <p className="wireframe-description-audiyo">{set.initialDescription}</p>
                      <div className="wireframe-images-audiyo">
                        {set.initialFlow && set.initialFlow.map((item, idx) => (
                          <img key={idx} src={item.image} alt={`Initial flow ${idx + 1}`} className="wireframe-image-audiyo" />
                        ))}
                      </div>
                      <h4 className="wireframe-subtitle-audiyo">Final Sharing Flow</h4>
                      <p className="wireframe-description-audiyo">{set.finalDescription}</p>
                      <div className="wireframe-images-audiyo">
                        {set.finalFlow && set.finalFlow.map((item, idx) => (
                          <img key={idx} src={item.image} alt={`Final flow ${idx + 1}`} className="wireframe-image-audiyo" />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="wireframe-iterations-audiyo">
                      {set.iterations && set.iterations.map((iteration, iterIdx) => (
                        <div key={iterIdx} className="wireframe-iteration-audiyo">
                          <img src={iteration.image} alt={`${set.name} iteration ${iterIdx + 1}`} className="wireframe-iteration-image-audiyo" />
                          {iteration.description && (
                            <p className="wireframe-iteration-description-audiyo">{iteration.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "stakeholder-grid":
        return (
          <div key={index} className="project-section stakeholder-grid-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              <div className="stakeholder-grid">
                {section.items && section.items.map((item, idx) => (
                  <div key={idx} className={`stakeholder-box ${item.bgColor === "dark" ? "stakeholder-dark" : item.bgColor === "light" ? "stakeholder-light" : "stakeholder-white"}`}>
                    <div className={`stakeholder-box-content ${item.textColor === "white" ? "text-white" : "text-black"}`}>
                      <strong className="stakeholder-box-title">{item.title}</strong>
                      <div className="stakeholder-box-text">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "competitive-analysis":
        const sliderKey = `competitive-${index}`;
        const currentSlide = sliderIndices[sliderKey] || 0;
        const slides = section.slides || [];
        
        const goToSlide = (newIndex) => {
          setSliderIndices(prev => ({
            ...prev,
            [sliderKey]: newIndex
          }));
        };
        
        const nextSlide = () => {
          goToSlide((currentSlide + 1) % slides.length);
        };
        
        const prevSlide = () => {
          goToSlide((currentSlide - 1 + slides.length) % slides.length);
        };
        
        return (
          <div key={index} className="project-section competitive-analysis-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              <div className="competitive-logos">
                {section.logos && section.logos.map((logo, idx) => (
                  <img key={idx} src={logo.src} alt={logo.alt} className="competitive-logo" />
                ))}
              </div>
              {slides.length > 0 && (
                <div className="competitive-slider">
                  <div className="slider-container">
                    <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
                      <img src="/images/scraped/arrow-left.png" alt="Previous" className="arrow-icon" />
                    </button>
                    <div className="slider-mask">
                      {slides.map((slide, idx) => (
                        <div
                          key={idx}
                          className={`slider-slide ${idx === currentSlide ? 'active' : ''}`}
                          style={{
                            backgroundImage: `url(${slide.src})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain'
                          }}
                        >
                        </div>
                      ))}
                    </div>
                    <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
                      <img src="/images/scraped/arrow-right.png" alt="Next" className="arrow-icon" />
                    </button>
                  </div>
                  <div className="slider-nav">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(idx)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case "verticals-grid":
        return (
          <div key={index} className="project-section verticals-grid-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              {section.subtitle && <div className="verticals-subtitle">{section.subtitle}</div>}
              <div className="verticals-grid">
                {section.verticals && section.verticals.map((vertical, idx) => (
                  <div key={idx} className={`vertical-box vertical-${vertical.color}`}>
                    <div className="vertical-box-text">{vertical.name}</div>
                  </div>
                ))}
              </div>
              {section.discoverItems && (
                <div className="verticals-discover-wrapper">
                  <div className="verticals-discover-title">Discover for each vertical:</div>
                  <div className="verticals-discover-grid">
                    {section.discoverItems.map((item, idx) => (
                      <div key={idx} className="discover-button">{item}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case "mvp-dark":
        return (
          <div key={index} className="project-section mvp-dark-section">
            <div className="section-content">
              <h2 className="section-title mvp-title">{section.title}</h2>
              {section.features && (
                <ul className="mvp-list">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="mvp-item">{feature}</li>
                  ))}
                </ul>
              )}
              <h2 className="section-title mvp-title">Objectives</h2>
              {section.objectives && (
                <ul className="mvp-list">
                  {section.objectives.map((objective, idx) => (
                    <li key={idx} className="mvp-item">{objective}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      case "wireframes-grid":
        return (
          <div key={index} className="project-section wireframes-grid-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              {section.wireframeSets && section.wireframeSets.map((set, setIdx) => (
                <div key={setIdx} className="wireframe-set">
                  <h3 className="wireframe-set-title">{set.name}</h3>
                  {set.description && (
                    <ul className="wireframe-description">
                      {set.description.map((desc, descIdx) => (
                        <li key={descIdx}>{desc}</li>
                      ))}
                    </ul>
                  )}
                  <div className="wireframe-images">
                    {set.images && set.images.map((img, imgIdx) => (
                      <img key={imgIdx} src={img.src} alt={img.alt} className="wireframe-image" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "user-testing-dark":
        return (
          <div key={index} className="project-section user-testing-dark-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              {section.subjects && <div className="user-testing-subjects">Subjects : {section.subjects}</div>}
              {section.verticals && (
                <div className="user-testing-section">
                  <h3 className="user-testing-subtitle"><strong>Verticals</strong></h3>
                  <ul className="user-testing-list">
                    {section.verticals.map((vertical, idx) => (
                      <li key={idx}><strong>{vertical.name}</strong> : {vertical.count}</li>
                    ))}
                  </ul>
                </div>
              )}
              {section.tasks && (
                <div className="user-testing-section">
                  <h3 className="user-testing-subtitle"><strong>Tasks</strong></h3>
                  <ul className="user-testing-list">
                    {section.tasks.map((task, idx) => (
                      <li key={idx}><strong>{task}</strong></li>
                    ))}
                  </ul>
                </div>
              )}
              {section.comprehension && (
                <div className="user-testing-section">
                  <h3 className="user-testing-subtitle"><strong>Comprehension</strong></h3>
                  <ul className="user-testing-list">
                    {section.comprehension.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      case "ab-testing-grid":
        return (
          <div key={index} className="project-section ab-testing-grid-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              <div className="ab-testing-grid">
                {section.tests && section.tests.map((test, idx) => (
                  <div key={idx} className="ab-test-item">
                    <img src={test.image} alt={test.caption} className="ab-test-image" />
                    <div className="ab-test-caption">{test.caption}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "background-image":
        return (
          <div key={index} className="project-section background-image-section">
            {section.title && <h2 className="section-title">{section.title}</h2>}
            <div 
              className="background-image-container"
              style={{
                backgroundImage: `url(${section.backgroundImage})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                height: "100%",
                minHeight: "600px"
              }}
            ></div>
          </div>
        );
      case "iterations":
        return (
          <div key={index} className="project-section iterations-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              {section.iterationGroups && section.iterationGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="iteration-group">
                  <h3 className="iteration-group-title">{group.name}</h3>
                  {group.iterations && group.iterations.map((iteration, iterIdx) => (
                    <div key={iterIdx} className="iteration-item">
                      <div className="iteration-content">
                        <h4 className="iteration-title">{iteration.title}</h4>
                        {iteration.points && (
                          <ul className="iteration-points">
                            {iteration.points.map((point, pointIdx) => (
                              <li key={pointIdx}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {iteration.image && (
                        <div className="iteration-image-wrapper">
                          <img src={iteration.image} alt={`${group.name} ${iteration.title}`} className="iteration-image" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case "user-testing-aig":
        return (
          <div key={index} className="project-section user-testing-aig-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              <div className="user-testing-aig-grid">
                {section.tool && (
                  <div className="user-testing-aig-item">
                    <h3 className="user-testing-aig-label">Tool</h3>
                    <div className="user-testing-aig-value">{section.tool}</div>
                  </div>
                )}
                {section.participants && (
                  <div className="user-testing-aig-item">
                    <h3 className="user-testing-aig-label">Participants</h3>
                    <div className="user-testing-aig-value">{section.participants}</div>
                  </div>
                )}
                {section.findings && (
                  <div className="user-testing-aig-item user-testing-aig-findings">
                    <h3 className="user-testing-aig-label"><strong>Findings</strong></h3>
                    <ul className="user-testing-aig-list">
                      {section.findings.map((finding, idx) => (
                        <li key={idx}><strong>{finding}</strong></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case "conclusion":
        return (
          <div key={index} className="project-section conclusion-section">
            <div className="section-content">
              <h2 className="section-title">{section.title}</h2>
              {section.points && (
                <ul className="conclusion-list">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="portfolio-page" style={{ "--project-color": project.color }} data-project={projectSlug}>
      <PortfolioNav />
      <section className="project-detail">
        <div className="project-detail-container">
          <div className="project-header">
            {project.logo && (
              <div className="project-logo-wrapper">
                <img src={project.logo} alt={project.title} className="project-logo" />
              </div>
            )}
            <span className="project-category" style={{ color: project.color }}>
              {project.category}
            </span>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>

          <div className="project-hero-image-wrapper">
            <img 
              src={project.heroImage} 
              alt={project.title}
              className={`project-hero-image-img ${projectSlug === "relsci-radar" ? "radar-hero" : ""}`}
            />
          </div>

          <div className="project-intro">
            <p className="project-description">{project.description}</p>
            
            {project.opportunity && (
              <div className="project-info-block">
                <h3>Opportunity</h3>
                {Array.isArray(project.opportunity) ? (
                  <ul>
                    {project.opportunity.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.opportunity}</p>
                )}
              </div>
            )}

            {project.objective && (
              <div className="project-info-block">
                <h3>Objective</h3>
                {Array.isArray(project.objective) ? (
                  <ul>
                    {project.objective.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.objective}</p>
                )}
              </div>
            )}

            {project.finalProduct && (
              <div className="project-info-block">
                <h3>The Final Product</h3>
                <p>{project.finalProduct}</p>
              </div>
            )}

            {project.strategy && (
              <div className="project-info-block">
                <h3>Strategy</h3>
                <ul>
                  {project.strategy.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.kpis && (
              <div className="project-info-block">
                <h3>Establish Key Performance Indicators</h3>
                <ul>
                  {project.kpis.map((item, idx) => (
                    <li key={idx}><strong>{item}</strong></li>
                  ))}
                </ul>
              </div>
            )}

            {project.requirements && (
              <div className="project-info-block">
                <h3>Brief Requirements</h3>
                <ul>
                  {project.requirements.map((item, idx) => (
                    <li key={idx}><strong>{item}</strong></li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {project.sections && project.sections.length > 0 && (
            <div className="project-sections">
              <h2 className="process-heading">Design Process</h2>
              {project.sections.map((section, index) => renderSection(section, index))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
