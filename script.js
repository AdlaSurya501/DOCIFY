        // Function to update the current time
        function updateCurrentTime() {
            const currentTimeElement = document.getElementById('currentTime');
            const currentTime = new Date();
            const hours = currentTime.getHours().toString().padStart(2, '0');
            const minutes = currentTime.getMinutes().toString().padStart(2, '0');
            const seconds = currentTime.getSeconds().toString().padStart(2, '0');
            currentTimeElement.textContent = `Time: ${hours}:${minutes}:${seconds}`;
        }

        // Function to add a medicine reminder
        function addReminder() {
            const medicineName = document.getElementById('medicineName').value;
            const reminderTime = document.getElementById('reminderTime').value;

            // Create reminder item
            const reminderItem = document.createElement('li');
            reminderItem.classList.add('reminder-item');

            // Display the reminder information
            reminderItem.innerHTML = `
                <div>${medicineName} - ${reminderTime}</div>
                <button class="delete-btn" onclick="deleteReminder(this)">Delete</button>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Once</label>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Day</label>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Week</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Month</label>
</div>
            `;

            // Add the reminder to the list
            const remindersList = document.getElementById('reminders');
            remindersList.appendChild(reminderItem);

            // Set up the alarm for the reminder
            setupAlarm(reminderTime);

            // Clear input fields
            document.getElementById('medicineName').value = '';
            document.getElementById('reminderTime').value = '';
        }

        // Function to delete a reminder
        function deleteReminder(buttonElement) {
            const reminderItem = buttonElement.parentElement;
            const remindersList = document.getElementById('reminders');
            remindersList.removeChild(reminderItem);
        }

        // Function to set up the alarm for the reminder
        function setupAlarm(reminderTime) {
            const currentTime = new Date();
            const [hours, minutes] = reminderTime.split(':');
            const reminderDate = new Date();
            reminderDate.setHours(hours, minutes, 0, 0);

            // Calculate the time difference in milliseconds
            const timeDifference = reminderDate.getTime() - currentTime.getTime();

            // Set up the alarm
            if (timeDifference > 0) {
                setTimeout(() => {
                    // Play alarm sound
                    alert('Time to take your medicine!');

                    // Optionally, you can add more logic here to handle when the alert is closed
                    // For example, stopping the alarm sound or marking the reminder as completed
                }, timeDifference);
            }
        }

        // Update the current time every second
        setInterval(updateCurrentTime, 1000);

        // Update the current time immediately on page load
        updateCurrentTime();