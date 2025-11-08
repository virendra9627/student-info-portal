// Sample student data for all years and branches
const studentData = {
    "first-year": {
        cse: [
            { id: 1, name: "Aarav Patel", age: 18, class: "CSE-I", rollNo: "CSE001", photo: "CS" },
            { id: 2, name: "Aditi Sharma", age: 17, class: "CSE-I", rollNo: "CSE002", photo: "CS" },
            { id: 3, name: "Arjun Singh", age: 19, class: "CSE-I", rollNo: "CSE003", photo: "CS" },
            { id: 4, name: "Diya Verma", age: 18, class: "CSE-I", rollNo: "CSE004", photo: "CS" },
            { id: 5, name: "Ishaan Gupta", age: 17, class: "CSE-I", rollNo: "CSE005", photo: "CS" },
            { id: 6, name: "Kiara Reddy", age: 18, class: "CSE-I", rollNo: "CSE006", photo: "CS" },
            { id: 7, name: "Rohan Mehta", age: 19, class: "CSE-I", rollNo: "CSE007", photo: "CS" },
            { id: 8, name: "Saanvi Joshi", age: 17, class: "CSE-I", rollNo: "CSE008", photo: "CS" },
            { id: 9, name: "Vihaan Kumar", age: 18, class: "CSE-I", rollNo: "CSE009", photo: "CS" },
            { id: 10, name: "Zara Khan", age: 18, class: "CSE-I", rollNo: "CSE010", photo: "CS" },
            { id: 11, name: "Dev Malhotra", age: 19, class: "CSE-I", rollNo: "CSE011", photo: "CS" },
            { id: 12, name: "Eshaan Nair", age: 17, class: "CSE-I", rollNo: "CSE012", photo: "CS" },
            { id: 13, name: "Gayatri Pillai", age: 18, class: "CSE-I", rollNo: "CSE013", photo: "CS" },
            { id: 14, name: "Harsh Dubey", age: 19, class: "CSE-I", rollNo: "CSE014", photo: "CS" },
            { id: 15, name: "Ira Deshmukh", age: 17, class: "CSE-I", rollNo: "CSE015", photo: "CS" },
            { id: 16, name: "Kabir Choudhary", age: 18, class: "CSE-I", rollNo: "CSE016", photo: "CS" },
            { id: 17, name: "Lavanya Rastogi", age: 18, class: "CSE-I", rollNo: "CSE017", photo: "CS" },
            { id: 18, name: "Manav Thakur", age: 19, class: "CSE-I", rollNo: "CSE018", photo: "CS" },
            { id: 19, name: "Navya Bhatia", age: 17, class: "CSE-I", rollNo: "CSE019", photo: "CS" },
            { id: 20, name: "Omkar Shah", age: 18, class: "CSE-I", rollNo: "CSE020", photo: "CS" }
        ],
        ee: [
            { id: 21, name: "Abhay Mishra", age: 18, class: "EE-I", rollNo: "EE001", photo: "EE" },
            { id: 22, name: "Bhavya Tiwari", age: 17, class: "EE-I", rollNo: "EE002", photo: "EE" },
            { id: 23, name: "Chirag Agrawal", age: 19, class: "EE-I", rollNo: "EE003", photo: "EE" },
            { id: 24, name: "Dhruvi Jain", age: 18, class: "EE-I", rollNo: "EE004", photo: "EE" },
            { id: 25, name: "Ekansh Saxena", age: 17, class: "EE-I", rollNo: "EE005", photo: "EE" },
            { id: 26, name: "Falguni Upadhyay", age: 18, class: "EE-I", rollNo: "EE006", photo: "EE" },
            { id: 27, name: "Gaurav Trivedi", age: 19, class: "EE-I", rollNo: "EE007", photo: "EE" },
            { id: 28, name: "Himani Dave", age: 17, class: "EE-I", rollNo: "EE008", photo: "EE" },
            { id: 29, name: "Ishan Bhardwaj", age: 18, class: "EE-I", rollNo: "EE009", photo: "EE" },
            { id: 30, name: "Jiya Rawat", age: 18, class: "EE-I", rollNo: "EE010", photo: "EE" },
            { id: 31, name: "Karan Sharma", age: 19, class: "EE-I", rollNo: "EE011", photo: "EE" },
            { id: 32, name: "Lakshya Mittal", age: 17, class: "EE-I", rollNo: "EE012", photo: "EE" },
            { id: 33, name: "Mahika Soni", age: 18, class: "EE-I", rollNo: "EE013", photo: "EE" },
            { id: 34, name: "Nishant Khanna", age: 19, class: "EE-I", rollNo: "EE014", photo: "EE" },
            { id: 35, name: "Ojasvi Bansal", age: 17, class: "EE-I", rollNo: "EE015", photo: "EE" },
            { id: 36, name: "Pranav Kaul", age: 18, class: "EE-I", rollNo: "EE016", photo: "EE" },
            { id: 37, name: "Riddhi Chopra", age: 18, class: "EE-I", rollNo: "EE017", photo: "EE" },
            { id: 38, name: "Samarth Goel", age: 19, class: "EE-I", rollNo: "EE018", photo: "EE" },
            { id: 39, name: "Tanvi Roy", age: 17, class: "EE-I", rollNo: "EE019", photo: "EE" },
            { id: 40, name: "Utkarsh Sinha", age: 18, class: "EE-I", rollNo: "EE020", photo: "EE" }
        ]
    },
    "second-year": {
        cse: [
            { id: 41, name: "Aryan Desai", age: 19, class: "CSE-II", rollNo: "CSE201", photo: "CS" },
            { id: 42, name: "Bhavna Rao", age: 18, class: "CSE-II", rollNo: "CSE202", photo: "CS" },
            { id: 43, name: "Chetan Naidu", age: 20, class: "CSE-II", rollNo: "CSE203", photo: "CS" },
            { id: 44, name: "Divya Pillai", age: 19, class: "CSE-II", rollNo: "CSE204", photo: "CS" },
            { id: 45, name: "Eshan Bhatnagar", age: 18, class: "CSE-II", rollNo: "CSE205", photo: "CS" },
            { id: 46, name: "Farah Sheikh", age: 19, class: "CSE-II", rollNo: "CSE206", photo: "CS" },
            { id: 47, name: "Gautam Shetty", age: 20, class: "CSE-II", rollNo: "CSE207", photo: "CS" },
            { id: 48, name: "Heena Contractor", age: 18, class: "CSE-II", rollNo: "CSE208", photo: "CS" },
            { id: 49, name: "Iqbal Merchant", age: 19, class: "CSE-II", rollNo: "CSE209", photo: "CS" },
            { id: 50, name: "Juhi Parekh", age: 18, class: "CSE-II", rollNo: "CSE210", photo: "CS" },
            { id: 51, name: "Kunal Shah", age: 20, class: "CSE-II", rollNo: "CSE211", photo: "CS" },
            { id: 52, name: "Leela Menon", age: 19, class: "CSE-II", rollNo: "CSE212", photo: "CS" },
            { id: 53, name: "Manish Iyer", age: 18, class: "CSE-II", rollNo: "CSE213", photo: "CS" },
            { id: 54, name: "Naina Dutt", age: 19, class: "CSE-II", rollNo: "CSE214", photo: "CS" },
            { id: 55, name: "Omkar Kurian", age: 20, class: "CSE-II", rollNo: "CSE215", photo: "CS" },
            { id: 56, name: "Payal Nair", age: 18, class: "CSE-II", rollNo: "CSE216", photo: "CS" },
            { id: 57, name: "Rahul Warrier", age: 19, class: "CSE-II", rollNo: "CSE217", photo: "CS" },
            { id: 58, name: "Shreya Bhandari", age: 18, class: "CSE-II", rollNo: "CSE218", photo: "CS" },
            { id: 59, name: "Tarun Pillai", age: 20, class: "CSE-II", rollNo: "CSE219", photo: "CS" },
            { id: 60, name: "Urvi Shenoy", age: 19, class: "CSE-II", rollNo: "CSE220", photo: "CS" },
            { id: 61, name: "Varun Prakash", age: 18, class: "CSE-II", rollNo: "CSE221", photo: "CS" },
            { id: 62, name: "Wafa Hussain", age: 19, class: "CSE-II", rollNo: "CSE222", photo: "CS" },
            { id: 63, name: "Xavier D'Cruz", age: 20, class: "CSE-II", rollNo: "CSE223", photo: "CS" }
        ],
        ee: [
            { id: 64, name: "Yash Pal", age: 19, class: "EE-II", rollNo: "EE201", photo: "EE" },
            { id: 65, name: "Zara Ansari", age: 18, class: "EE-II", rollNo: "EE202", photo: "EE" },
            { id: 66, name: "Ajay Malhotra", age: 20, class: "EE-II", rollNo: "EE203", photo: "EE" },
            { id: 67, name: "Bindu Kapoor", age: 19, class: "EE-II", rollNo: "EE204", photo: "EE" },
            { id: 68, name: "Chandan Bose", age: 18, class: "EE-II", rollNo: "EE205", photo: "EE" },
            { id: 69, name: "Deepa Nair", age: 19, class: "EE-II", rollNo: "EE206", photo: "EE" },
            { id: 70, name: "Ezhil Selvan", age: 20, class: "EE-II", rollNo: "EE207", photo: "EE" },
            { id: 71, name: "Feroz Ahmed", age: 18, class: "EE-II", rollNo: "EE208", photo: "EE" },
            { id: 72, name: "Geeta Krishnan", age: 19, class: "EE-II", rollNo: "EE209", photo: "EE" },
            { id: 73, name: "Harish Iyer", age: 18, class: "EE-II", rollNo: "EE210", photo: "EE" }
        ]
    },
    "third-year": {
        cse: [
            { id: 74, name: "Akash Jain", age: 21, class: "CSE-III", rollNo: "CSE301", photo: "CS" },
            { id: 75, name: "Bina Roy", age: 20, class: "CSE-III", rollNo: "CSE302", photo: "CS" },
            { id: 76, name: "Chetan Reddy", age: 22, class: "CSE-III", rollNo: "CSE303", photo: "CS" },
            { id: 77, name: "Divya Pillai", age: 21, class: "CSE-III", rollNo: "CSE304", photo: "CS" },
            { id: 78, name: "Eshaan Bhatia", age: 20, class: "CSE-III", rollNo: "CSE305", photo: "CS" },
            { id: 79, name: "Fatima Sheikh", age: 21, class: "CSE-III", rollNo: "CSE306", photo: "CS" },
            { id: 80, name: "Girish Nair", age: 22, class: "CSE-III", rollNo: "CSE307", photo: "CS" },
            { id: 81, name: "Hema Warrier", age: 20, class: "CSE-III", rollNo: "CSE308", photo: "CS" },
            { id: 82, name: "Irfan Contractor", age: 21, class: "CSE-III", rollNo: "CSE309", photo: "CS" },
            { id: 83, name: "Jaya Dutt", age: 20, class: "CSE-III", rollNo: "CSE310", photo: "CS" },
            { id: 84, name: "Kiran Kurian", age: 22, class: "CSE-III", rollNo: "CSE311", photo: "CS" },
            { id: 85, name: "Lata Menon", age: 21, class: "CSE-III", rollNo: "CSE312", photo: "CS" },
            { id: 86, name: "Mohan Iyer", age: 20, class: "CSE-III", rollNo: "CSE313", photo: "CS" },
            { id: 87, name: "Neeta Shenoy", age: 21, class: "CSE-III", rollNo: "CSE314", photo: "CS" },
            { id: 88, name: "Omkar Prakash", age: 22, class: "CSE-III", rollNo: "CSE315", photo: "CS" },
            { id: 89, name: "Priya Hussain", age: 20, class: "CSE-III", rollNo: "CSE316", photo: "CS" },
            { id: 90, name: "Raj D'Cruz", age: 21, class: "CSE-III", rollNo: "CSE317", photo: "CS" },
            { id: 91, name: "Sita Pal", age: 20, class: "CSE-III", rollNo: "CSE318", photo: "CS" },
            { id: 92, name: "Tarun Ansari", age: 22, class: "CSE-III", rollNo: "CSE319", photo: "CS" },
            { id: 93, name: "Usha Malhotra", age: 21, class: "CSE-III", rollNo: "CSE320", photo: "CS" },
            { id: 94, name: "Vikram Kapoor", age: 20, class: "CSE-III", rollNo: "CSE321", photo: "CS" },
            { id: 95, name: "Wanda Bose", age: 21, class: "CSE-III", rollNo: "CSE322", photo: "CS" },
            { id: 96, name: "Xavier Nair", age: 22, class: "CSE-III", rollNo: "CSE323", photo: "CS" },
            { id: 97, name: "Yasmin Selvan", age: 20, class: "CSE-III", rollNo: "CSE324", photo: "CS" },
            { id: 98, name: "Zubin Ahmed", age: 21, class: "CSE-III", rollNo: "CSE325", photo: "CS" },
            // Adding the new student information
            { id: 99, name: "Virendra Singh Rawat", age: 21, class: "CSE-III", rollNo: "2301505005", photo: "nomal college.jpg", email: "virendrasinghrawaat@gmail.com", contact: "8287643838", gender: "Male", regNo: "230150121" }
        ],
        ee: [
            { id: 100, name: "Amit Krishnan", age: 21, class: "EE-III", rollNo: "EE301", photo: "EE" },
            { id: 101, name: "Balaji Iyer", age: 20, class: "EE-III", rollNo: "EE302", photo: "EE" },
            { id: 102, name: "Chandra Sekhar", age: 22, class: "EE-III", rollNo: "EE303", photo: "EE" },
            { id: 103, name: "Dinesh Nair", age: 21, class: "EE-III", rollNo: "EE304", photo: "EE" },
            { id: 104, name: "Easwaran Pillai", age: 20, class: "EE-III", rollNo: "EE305", photo: "EE" },
            { id: 105, name: "Fayaz Ahmed", age: 21, class: "EE-III", rollNo: "EE306", photo: "EE" },
            { id: 106, name: "Govind Menon", age: 22, class: "EE-III", rollNo: "EE307", photo: "EE" },
            { id: 107, name: "Harini Warrier", age: 20, class: "EE-III", rollNo: "EE308", photo: "EE" },
            { id: 108, name: "Indira Contractor", age: 21, class: "EE-III", rollNo: "EE309", photo: "EE" },
            { id: 109, name: "Jayant Dutt", age: 20, class: "EE-III", rollNo: "EE310", photo: "EE" },
            { id: 110, name: "Kalyan Kurian", age: 22, class: "EE-III", rollNo: "EE311", photo: "EE" },
            { id: 111, name: "Latha Shenoy", age: 21, class: "EE-III", rollNo: "EE312", photo: "EE" },
            { id: 112, name: "Madhavan Prakash", age: 20, class: "EE-III", rollNo: "EE313", photo: "EE" },
            { id: 113, name: "Nirmala Hussain", age: 21, class: "EE-III", rollNo: "EE314", photo: "EE" },
            { id: 114, name: "Om Prakash", age: 22, class: "EE-III", rollNo: "EE315", photo: "EE" },
            { id: 115, name: "Padma D'Cruz", age: 20, class: "EE-III", rollNo: "EE316", photo: "EE" },
            { id: 116, name: "Qamar Pal", age: 21, class: "EE-III", rollNo: "EE317", photo: "EE" }
        ]
    }
};

// Function to generate student cards
function generateStudentCards(yearSection, branch) {
    const containerId = `${yearSection}-students`;
    const container = document.getElementById(containerId);
    const students = studentData[yearSection][branch];
    
    if (!container || !students) return;
    
    // Add loading effect
    container.innerHTML = '<div class="loading">Loading students...</div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        container.innerHTML = '';
        
        students.forEach((student, index) => {
            const card = document.createElement('div');
            card.className = 'student-card';
            // Add staggered animation delay
            card.style.animationDelay = `${index * 0.1}s`;
            
            // Determine what to display for the photo
            let photoDisplay;
            if (student.photo && student.photo !== "CS" && student.photo !== "EE") {
                // For actual photo files
                photoDisplay = `<img src="${student.photo}" alt="${student.name}" style="width:100%; height:100%; object-fit:cover;">`;
            } else {
                // For placeholder icons
                photoDisplay = `<i class="fas fa-user-graduate"></i>`;
            }
            
            card.innerHTML = `
                <div class="student-photo">
                    ${photoDisplay}
                </div>
                <div class="student-info">
                    <h3>${student.name}</h3>
                    <p><i class="fas fa-id-card"></i> Roll No: ${student.rollNo}</p>
                    <p><i class="fas fa-chalkboard"></i> Class: ${student.class}</p>
                    <p><i class="fas fa-calendar-alt"></i> Age: ${student.age} years</p>
                    <p><i class="fas fa-venus-mars"></i> Gender: ${student.gender || "Not specified"}</p>
                    <span class="student-badge badge-${branch}">${branch.toUpperCase()}</span>
                </div>
            `;
            
            // Add click event to show full details
            card.addEventListener('click', () => showStudentDetails(student, branch));
            
            container.appendChild(card);
        });
    }, 300);
}

// Function to show student details in a modal
function showStudentDetails(student, branch) {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'student-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2>Student Details</h2>
            </div>
            <div class="modal-body">
                <div class="student-detail-photo">
                    ${student.photo && student.photo !== "CS" && student.photo !== "EE" 
                        ? `<img src="${student.photo}" alt="${student.name}" style="width:100%; height:100%; object-fit:cover;">`
                        : `<div class="placeholder-photo"><i class="fas fa-user-graduate"></i></div>`}
                </div>
                <div class="student-detail-info">
                    <h3>${student.name}</h3>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <label><i class="fas fa-id-card"></i> Roll No:</label>
                            <span>${student.rollNo}</span>
                        </div>
                        <div class="detail-item">
                            <label><i class="fas fa-calendar-alt"></i> Age:</label>
                            <span>${student.age} years</span>
                        </div>
                        <div class="detail-item">
                            <label><i class="fas fa-chalkboard"></i> Class:</label>
                            <span>${student.class}</span>
                        </div>
                        <div class="detail-item">
                            <label><i class="fas fa-venus-mars"></i> Gender:</label>
                            <span>${student.gender || 'Not specified'}</span>
                        </div>
                        <div class="detail-item">
                            <label><i class="fas fa-graduation-cap"></i> Branch:</label>
                            <span>${branch.toUpperCase()} Engineer</span>
                        </div>
                        ${student.email ? `
                        <div class="detail-item">
                            <label><i class="fas fa-envelope"></i> Email:</label>
                            <span>${student.email}</span>
                        </div>` : ''}
                        ${student.contact ? `
                        <div class="detail-item">
                            <label><i class="fas fa-phone"></i> Contact:</label>
                            <span>${student.contact}</span>
                        </div>` : ''}
                        ${student.regNo ? `
                        <div class="detail-item">
                            <label><i class="fas fa-file-alt"></i> Registration No:</label>
                            <span>${student.regNo}</span>
                        </div>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Add event listeners for closing
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Add escape key listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.contains(modal)) {
            document.body.removeChild(modal);
        }
    });
}

// Tab switching functionality
function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const yearSection = this.closest('.year-section').id;
            const branch = this.getAttribute('data-branch');
            
            // Update active tab
            const tabsContainer = this.parentElement;
            tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Generate student cards for selected branch
            generateStudentCards(yearSection, branch);
        });
    });
}

// Smooth scrolling for navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Intersection Observer for section highlighting
function setupSectionObserver() {
    const sections = document.querySelectorAll('.year-section, .dashboard-section');
    const navLinks = document.querySelectorAll('nav a');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Add current year to footer
function updateFooterYear() {
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('footer p:first-child');
    if (footer) {
        footer.innerHTML = `&copy; ${currentYear} S.S.S.S.S. PU. GOVT. POLYTECHNIC SULT ALMORA. All Rights Reserved.`;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Generate initial student cards for first year CSE (default)
    generateStudentCards('first-year', 'cse');
    generateStudentCards('second-year', 'cse');
    generateStudentCards('third-year', 'cse');
    
    // Setup event listeners
    setupTabSwitching();
    setupNavigation();
    setupSectionObserver();
    updateFooterYear();
    
    // Add subtle background animation to body
    document.body.classList.add('animated-bg');
});