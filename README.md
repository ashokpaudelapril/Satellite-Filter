# Satellite Pass Filter

### Overview
This project is a **Satellite Pass Filter** tool created to support CubeSat operations by filtering satellite pass data based on specific days or dates. It’s particularly useful for users working with High Definition Software Defined Radio (SDR), which may provide satellite data files but lack options to filter passes by date. This application addresses that gap, making it easier to focus on relevant satellite passes quickly.

### Features
- **Upload satellite pass data file** in `.txt` format.
- **Filter satellite passes** by a specific day or date.
- View results in a structured table format with details such as start time, end time, duration, peak azimuth, and elevation.
- Option to **reset the data** for a new search.

### Technologies Used
- **HTML/CSS** for the frontend structure and styling.
- **JavaScript** to handle file processing, filtering, and display of results.

### Requirements
- A modern web browser with JavaScript enabled.
- Satellite data file in plain text format, where each line represents a satellite pass entry with fields separated by spaces.

### Installation
1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/satellite-pass-filter.git
   ```
2. Open the index.html file in your web browser to launch the application.

### Usage
1. Upload a Data File: Click on the "Upload Satellite Data File" button and select a .txt file containing satellite pass data.
2. Filter by Day or Date:
   - Enter a day (e.g., "Monday") or date (in YYYY-MM-DD format) in the respective fields.
3. Click Filter: Click on "Filter Satellite Passes" to view results that match the selected criteria.
4. Reset: Click the "Reset Satellite Passes" button to clear the current data and start a new filter search.
   
### Example Data Format
Ensure the satellite data file is structured with space-separated fields in the following format:

  ```plaintext
     SAT1 2023/10/21 06:00 06:05 5m 180° 45°
     SAT2 2023/10/22 07:00 07:10 10m 190° 50°
  ```

### Contributing
Feel free to fork the repository and submit pull requests to suggest enhancements or add new features.

### License
This project is licensed under the MIT License.
