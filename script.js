document.addEventListener("DOMContentLoaded", function() {
    // Dummy tutor data (you can fetch this dynamically via AJAX or from a backend)
    const tutors = [
        {
            imgSrc: "https://mychoicetutor.com/images/tutors/profilepics/%2F1702560488.png",
            name: "Development Team",
            subjects: "French",
            rate: "$0/h",
            description: "Expertise in Business Studies"
        },
        {
            imgSrc: "https://mychoicetutor.com/images/tutors/profilepics/%2F1691564127.png",
            name: "Jenni",
            subjects: "Computer",
            rate: "$0/h",
            description: "Expertise in Business Studies"
        },
        {
            imgSrc: "https://mychoicetutor.com/images/tutors/profilepics/%2F",
            name: "khan A",
            subjects: "Maths",
            rate: "$0.5/h",
            description: "123"
        },
        {
            imgSrc: "https://mychoicetutor.com/images/tutors/profilepics/%2F1717670483.png",
            name: "khan A",
            subjects: "Maths",
            rate: "$0/h",
            description: "123"
        },
        {
            imgSrc: "https://mychoicetutor.com/images/tutors/profilepics/%2F1703078631.png",
            name: "Kirti Kumari",
            subjects: "Computer, Science",
            rate: "$0/h",
            description: "Expertise in Business Studies"
        },
        {
            imgSrc: "https://mychoicetutor.com/images/tutors/profilepics/%2F",
            name: "Krishna",
            subjects: "Social Science",
            rate: "$0/h",
            description: "Expertise in Business Studies"
        },
        {
            imgSrc: "https://mychoicetutor.com/images/tutors/profilepics/%2F",
            name: "Mohammed Nasar",
            subjects: "Test",
            rate: "$0/h",
            description: "Test"
        },
        {
            imgSrc: "https://mychoicetutor.com/images/tutors/profilepics/%2F",
            name: "New Tutor",
            subjects: "English, Maths",
            rate: "$0/h",
            description: ""
        }
    ];

    const tutorListContainer = document.getElementById("tutorList");

    // Generate tutor cards
    tutors.forEach(tutor => {
        const tutorCard = document.createElement("div");
        tutorCard.classList.add("col-lg-3", "col-md-3", "col-sm-12", "col-xs-12", "tutorCol");

        tutorCard.innerHTML = `
            <div class="tutorDetails">
                <div class="tutorImg">
                    <img src="${tutor.imgSrc}" alt="">
                </div>
                <div class="star">
                    <span><i class="fa fa-star"></i> (0)</span>
                    <span>${tutor.rate}</span>
                </div>
                <a href="tutor-details/${generateRandomId()}" style="color: black">
                    <span class="name">${tutor.name}<p>${tutor.subjects}</p></span>
                </a>
                <span class="desc-tutor">${tutor.description}</span>
            </div>
        `;

        tutorListContainer.appendChild(tutorCard);
    });

    function generateRandomId() {
        return Math.floor(Math.random() * 100) + 1; // Generate a random number (for demo purpose)
    }
});
