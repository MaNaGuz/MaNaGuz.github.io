let personal_info = {
    "Name:": "Manuel Guzman",
    "Job Position:": "Software Developer",
    "Residence:": "Mexico"
};

let skills = {
    "Python:": "⭐⭐⭐⭐ ✰",
    "Bash:": "⭐⭐⭐ ✰ ✰",
    "OracleSQL:": "⭐⭐⭐ ✰ ✰",
    "MongoDB:": "⭐⭐⭐ ✰ ✰",
    "Redis:": "⭐⭐⭐ ✰ ✰",
    "Kafka:": "⭐⭐⭐ ✰ ✰",
    "Azure:": "⭐⭐ ✰ ✰ ✰",
    "Anaconda Enterprise:": "⭐⭐⭐ ✰ ✰",
    "C++:": "⭐⭐⭐ ✰ ✰",
    "C:": "⭐⭐⭐ ✰ ✰",
    "Swift:": "⭐⭐⭐ ✰ ✰",
    "Javascript:": "⭐⭐⭐ ✰ ✰",
    "HTML:": "⭐⭐⭐ ✰ ✰",
    "Java:": "⭐⭐ ✰ ✰ ✰",
    "Objective-C:": "⭐⭐ ✰ ✰ ✰",
    "Matlab:": "⭐⭐ ✰ ✰ ✰",
    "assambler:": "⭐ ✰ ✰ ✰ ✰"
}

let job_experience = {
    "MERK4:": {
        period: "01/02/2013 - 01/07/2015",
        position: "iOS Developer",
        description: `
        In this position I was responsible for creating iOS apps based on company requirements. <br>
        - Created app for storing event assistants personal data in a database. <br>
        &nbsp&nbsp&nbsp <em class="remarkable">Objective-C</em><br>
        - Concept and first development stages of a marketing videogame.<br>
        &nbsp&nbsp&nbsp <em class="remarkable">Objective-C</em><br>
        `
    },
    "Distribuidora JIFE S.A. de C.V.:": {
        period: "01/04/2018 - 16/06/2018",
        position: "iOS/Android Developer",
        description: `
        In this position I was responsible for creating iOS/Android apps for the brand Fix-It which
        was a mobile app desgined for booking personal services like "cleaning", "plumbing" and
        "electrical" with a specialist.<br>
        - Created the app interface<br>
        &nbsp&nbsp&nbsp <em class="remarkable">Swift, Java</em><br>
        - Paypal integration completed<br>
        &nbsp&nbsp&nbsp <em class="remarkable">Swift, Java, PHP</em><br>
        - Fully completed a full booking path<br>
        &nbsp&nbsp&nbsp <em class="remarkable">Swift, Java, PHP</em><br>
        This app was not completed at my working time due to leaders decisions as it was more like
        a "let's see what can we add or modify next" leading to big time delays on path choosing.
        `
    },
    "APPWHERE S.A. de C.V.:": {
        period: "16/06/2018 - 16/06/2020",
        position: "Innovation Department/Software Developer",
        description: `
        In this position I was responsible for achieving company's innovative ideas like adding
        Computer Vision to a crossroad camera for counting how many cars passby, adding OCR to
        identify a mexican national id for a national bank registration.<br>
        - Created a chatbot beta version for Avis Car Rental<br>
        &nbsp&nbsp&nbsp <em class="remarkable">IBM Watson, Python</em><br>
        - Created a chatbot for "Accendo" Bank<br>
        &nbsp&nbsp&nbsp <em class="remarkable">IBM Watson, HTML, PHP</em><br>
        - Created an OCR module for "Banco del Bienestar" Bank registration iOS/android app used by<br>
        &nbsp&nbsp their employees for registering really remote or hard access people in Mexico<br>
        &nbsp&nbsp&nbsp <em class="remarkable">Swift, Java, OpenCV</em><br>
        - Created a program which analyzes an overview crossroad video using computer vision to count<br>
        &nbsp&nbsp how many cars pass by<br>
        &nbsp&nbsp&nbsp <em class="remarkable">Python, Darknet, Yolov3, OpenCV</em><br>
        - Created an AWS service to upload any overview road video for analyzing it and count<br>
        &nbsp&nbsp how many cars pass by<br>
        &nbsp&nbsp&nbsp <em class="remarkable">Python, Lambda, S3, EC2</em><br>
        - Worked on Fovissste's database data cleansing and KPI identification<br>
        &nbsp&nbsp&nbsp <em class="remarkable">Python, Oracle, Mongo, PowerBI</em><br>
        `
    },
    "New Era Tech (Actual Working Place):": {
        period: "19/10/2020 - Actual",
        position: "Python/Software Developer/DevOps",
        description: `
        Assigned to Schneider Logistics.
        In this position I'm responsible for solving the client's requests.<br>
        - Created a Module which uses client's (logistics company) in-home made model to reorganize<br>
        &nbsp&nbsp their shipments based on their lines of business.<br>
        &nbsp&nbsp&nbsp <em class="remarkable">Python</em><br>
        - Responsible for setting up and deploying applications in Kubernetes with XLR<br>
        and deploying Python apps to Linux servers and Anaconda Enterprise
        &nbsp&nbsp&nbsp <em class="remarkable">Kubernetes, Azure, Linux</em><br>
        `
    }
};

function insert_paired_complex_table(paired_data, element, col_distr_1, col_distr_2, keys){
    Object.keys(paired_data).forEach(key => {
        $(element).append(`
        <div class="row">
            <div class="col-lg-${col_distr_1[0]}">
                <h2 class="key">${key}</h2>
            </div>
            <div class="col-lg-${col_distr_1[1]}">
                <h2 class="value">${paired_data[key][keys[0]]}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-${col_distr_2[0]}">
                <h2 class="key sub_key">${paired_data[key][keys[1]]}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-${col_distr_2[1]}">
                <p class="sub_value">${paired_data[key][keys[2]]}</p>
            </div>
        </div>
        `);
    });
}

function insert_paired_table(paired_data, element, left, right){
    Object.keys(paired_data).forEach(key => {
        $(element).append(`
        <div class="row">
            <div class="col-lg-${left}">
                <h2 class="key">${key}</h2>
            </div>
            <div class="col-lg-${right}">
                <h2 class="key value">${paired_data[key]}</h2>
            </div>
        </div>
        `);
    });
}

insert_paired_table(personal_info, '#personal_info', 3, 9);
insert_paired_table(skills, '#skills', 3, 9);
insert_paired_complex_table(job_experience, "#job_experience", [7, 5], [3, 9], ["period", "position", "description"]);
