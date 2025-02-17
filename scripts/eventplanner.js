document.addEventListener('DOMContentLoaded', () => {
    // Tab Navigation
    const navLinks = document.querySelectorAll('.nav-links li');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tab = link.dataset.tab;
            
            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(t => t.classList.remove('active'));
            
            link.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });

    // Event Modal
    const modal = document.getElementById('eventModal');
    const newEventBtn = document.getElementById('newEventBtn');
    const cancelEventBtn = document.getElementById('cancelEventBtn');
    const eventForm = document.getElementById('eventForm');

    newEventBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    cancelEventBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        eventForm.reset();
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            eventForm.reset();
        }
    });

    // Handle event form submission
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const eventData = {
            name: document.getElementById('eventName').value,
            date: document.getElementById('eventDate').value,
            time: document.getElementById('eventTime').value,
            location: document.getElementById('eventLocation').value,
            description: document.getElementById('eventDescription').value
        };

        // Add event card to grid
        addEventCard(eventData);

        // Close modal and reset form
        modal.classList.remove('active');
        eventForm.reset();
    });

    // Function to add event card
    function addEventCard(event) {
        const eventsGrid = document.querySelector('.events-grid');
        const card = document.createElement('div');
        card.className = 'event-card';
        
        const date = new Date(`${event.date}T${event.time}`);
        
        card.innerHTML = `
            <div class="event-card" style="background-color: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: var(--shadow);">
                <h3 style="margin-bottom: 1rem; color: var(--primary-color);">${event.name}</h3>
                <div style="margin-bottom: 0.5rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 0.5rem;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    ${date.toLocaleDateString()}
                </div>
                <div style="margin-bottom: 0.5rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 0.5rem;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div style="margin-bottom: 1rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 0.5rem;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    ${event.location}
                </div>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">${event.description}</p>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn-secondary" style="font-size: 0.875rem;">Edit</button>
                    <button class="btn-secondary" style="font-size: 0.875rem;">Manage Guests</button>
                </div>
            </div>
        `;
        
        eventsGrid.appendChild(card);
    }

    // Todo List
    const todoInput = document.getElementById('newTodo');
    const addTodoBtn = document.getElementById('addTodo');
    const todoList = document.getElementById('todoList');

    addTodoBtn.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(text) {
        const todoItem = document.createElement('div');
        todoItem.style.display = 'flex';
        todoItem.style.alignItems = 'center';
        todoItem.style.padding = '0.5rem';
        todoItem.style.borderBottom = '1px solid var(--border-color)';
        
        todoItem.innerHTML = `
            <input type="checkbox" style="margin-right: 0.5rem;">
            <span style="flex: 1;">${text}</span>
            <button class="btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.875rem;">Delete</button>
        `;
        
        todoList.appendChild(todoItem);
    }

    // Add some sample todos
    ['Book venue', 'Send invitations', 'Order catering', 'Arrange decorations'].forEach(todo => {
        addTodoItem(todo);
    });
});