function buildATS() {
    // Reading all user input nodes
    var nameVal = document.getElementById("nameIn").value;
    var titleVal = document.getElementById("titleIn").value;
    var emailVal = document.getElementById("emailIn").value;
    var phoneVal = document.getElementById("phoneIn").value;
    var locVal = document.getElementById("locIn").value;
    var linkVal = document.getElementById("linkIn").value;
    var summaryVal = document.getElementById("summaryIn").value;
    var skillsVal = document.getElementById("skillsIn").value;
    var companyVal = document.getElementById("companyIn").value;
    var roleVal = document.getElementById("roleIn").value;
    var expDatesVal = document.getElementById("expDatesIn").value;
    var expPointsRaw = document.getElementById("expPointsIn").value;
    var degreeVal = document.getElementById("degreeIn").value;
    var eduNameVal = document.getElementById("eduNameIn").value;
    var eduDatesVal = document.getElementById("eduDatesIn").value;

    // Mapping into standard text boxes
    document.getElementById("viewName").innerText = nameVal || "Abhay Gupta";
    document.getElementById("viewTitle").innerText = titleVal || "Software Engineer";
    document.getElementById("viewEmail").innerText = emailVal || "abhay.gupta@email.com";
    document.getElementById("viewPhone").innerText = phoneVal || "+91 99999 88888";
    document.getElementById("viewLoc").innerText = locVal || "Delhi, India";
    document.getElementById("viewLink").innerText = linkVal || "://linkedin.com";
    document.getElementById("viewSummary").innerText = summaryVal || "Results-driven Software Engineer...";
    document.getElementById("viewSkills").innerText = skillsVal || "Java, Python, SQL, Git, AWS";
    document.getElementById("viewCompany").innerText = companyVal || "Tech Innovators Lab";
    document.getElementById("viewRole").innerText = roleVal || "Associate Developer";
    document.getElementById("viewExpDates").innerText = expDatesVal || "June 2024 - Present";
    document.getElementById("viewDegree").innerText = degreeVal || "Bachelor of Technology in CS";
    document.getElementById("viewEduName").innerText = eduNameVal || "ABC University";
    document.getElementById("viewEduDates").innerText = eduDatesVal || "2020 - 2024";

    // Dynamic Experience Bullets Parser for ATS Software
    var pointsWrapper = document.getElementById("viewExpPoints");
    
    if(expPointsRaw.trim() !== "") {
        // Line-by-line paragraph splitting strategy
        var lines = expPointsRaw.split('\n');
        var listHtml = "<ul>";
        
        for(var i = 0; i < lines.length; i++) {
            var cleanLine = lines[i].replace(/[•\-\*]/, "").trim(); // purane pre-typed bullet signs ko remove karne ke liye
            if(cleanLine !== "") {
                listHtml += "<li>" + cleanLine + "</li>";
            }
        }
        listHtml += "</ul>";
        pointsWrapper.innerHTML = listHtml;
    } else {
        pointsWrapper.innerHTML = "<ul><li>Developed responsive features using React.</li><li>Optimized SQL database queries.</li></ul>";
    }
}
