document.addEventListener("DOMContentLoaded", () => {
    const pricingContainer = document.querySelector('.pricing-container');
    const teamContainer = document.querySelector('.team-container');

    // Pricing data with links to respective HTML files
    const pricingPlans = [
        {
            name: "Basic Package",
            price: "$50/month",
            description: "For small websites with low traffic.",
            link: "/basic"  // Link to basic.ejs
        },
        {
            name: "Standard Package",
            price: "$100/month",
            description: "For medium traffic websites.",
            link: "/standard" // Link to Standard.ejs
        
        },
        {
            name: "Premium Package",
            price: "$200/month",
            description: "For high traffic and ecommerce websites.",
            link: "/premium"  // Link to premium.ejs
        
        }
    ];

    // Add pricing cards with links
    pricingPlans.forEach(plan => {
        const card = document.createElement('div');
        card.classList.add('pricing-card');
        card.innerHTML = `
            <h3>${plan.name}</h3>
            <p class="price">${plan.price}</p>
            <p>${plan.description}</p>
            <button class="buy-button" onclick="goToCheckout('${plan.name}','${plan.price}')">Buy</button>
            <a href="${plan.link}" class="pricing-link">Learn More</a>

        `;
        pricingContainer.appendChild(card);
    });

    // Team data
    const teamMembers = [
        {
            name: "Roshan Panda",
            role: "Founder & CEO",
            image: "/public/images/team1.jpg"
        },
        {
            name: "Soyam Swain",
            role: "Chief Operation Officer",
            image: "/public/images/team5.jpg"
        },
        {
            name: "Naseeb Pradhan",
            role: "Chief Finance Officer",
            image: "/public/images/team3.jpg"
        },
        {
            name: "Priyanshu Sahoo",
            role: "Chief Technology Officer",
            image: "/public/images/team4.jpg"
        },
        {
            name: "Kumar Bibhudatta",
            role: "Chief Management Officer",
            image: "/public/images/bibhu.jpeg"
        },
    ];

    // Add team members
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('team-member');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamContainer.appendChild(card);
    });
});
