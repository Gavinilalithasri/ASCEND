document.addEventListener('DOMContentLoaded', () => {
    const mentorsList = document.getElementById('mentorsList');
    const searchInput = document.getElementById('searchInput');
    const expertiseFilter = document.getElementById('expertiseFilter');

    // Populate expertise filter options
    const allExpertise = new Set();
    mentorsData.forEach(mentor => {
        mentor.expertise.forEach(exp => allExpertise.add(exp));
    });

    allExpertise.forEach(exp => {
        const option = document.createElement('option');
        option.value = exp;
        option.textContent = exp;
        expertiseFilter.appendChild(option);
    });

    function createMentorCard(mentor) {
        return `
            <div class="mentor-card">
                <img src="${mentor.image}" alt="${mentor.name}" class="mentor-image">
                <div class="mentor-info">
                    <h3 class="mentor-name">${mentor.name}</h3>
                    <p class="mentor-title">${mentor.title}</p>
                    <div class="mentor-qualifications">
                        ${mentor.qualifications.map(qual =>
            `<span class="qualification-tag">${qual}</span>`
        ).join('')}
                    </div>
                    <div class="mentor-expertise">
                        <strong>Expertise:</strong><br>
                        ${mentor.expertise.map(exp =>
            `<span class="qualification-tag">${exp}</span>`
        ).join('')}
                    </div>
                    <div class="mentor-contact">
                        <div class="contact-item">
                            <i>📍</i> ${mentor.location}
                        </div>
                        <div class="contact-item">
                            <i>📧</i> ${mentor.email}
                        </div>
                        <div class="contact-item">
                            <i>📞</i> ${mentor.phone}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function filterMentors() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedExpertise = expertiseFilter.value.toLowerCase();

        const filteredMentors = mentorsData.filter(mentor => {
            const matchesSearch =
                mentor.name.toLowerCase().includes(searchTerm) ||
                mentor.title.toLowerCase().includes(searchTerm) ||
                mentor.qualifications.some(q => q.toLowerCase().includes(searchTerm));

            const matchesExpertise =
                !selectedExpertise ||
                mentor.expertise.some(e => e.toLowerCase() === selectedExpertise);

            return matchesSearch && matchesExpertise;
        });

        mentorsList.innerHTML = filteredMentors.map(createMentorCard).join('');
    }

    // Event listeners
    searchInput.addEventListener('input', filterMentors);
    expertiseFilter.addEventListener('change', filterMentors);

    // Initial render
    filterMentors();
});