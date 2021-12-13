let personal_info = {
    "Name:": "Manuel Guzman",
    "Job Position:": "Software Developer",
    "Residence:": "Mexico"
};

let skills = {
    "Python:": "⭐⭐⭐⭐ ✰",
    "C++:": "⭐⭐⭐ ✰ ✰",
    "C:": "⭐⭐⭐ ✰ ✰",
    "Swift:": "⭐⭐⭐ ✰ ✰",
    "Javascript:": "⭐⭐⭐ ✰ ✰",
    "HTML:": "⭐⭐⭐ ✰ ✰",
    "Bash:": "⭐⭐ ✰ ✰ ✰",
    "OracleSQL:": "⭐⭐ ✰ ✰ ✰",
    "MongoDB:": "⭐⭐ ✰ ✰ ✰",
    "Java:": "⭐⭐ ✰ ✰ ✰",
    "Objective-C:": "⭐⭐ ✰ ✰ ✰",
    "Matlab:": "⭐⭐ ✰ ✰ ✰",
    "assambler:": "⭐ ✰ ✰ ✰ ✰"
}

let job_experience = {
    "MERK4:": {
        period: "01/02/2013 - 01/07/2015",
        position: "iOS Developer",
        description: "to be completed"
    },
    "Distribuidora JIFE S.A. de C.V.:": {
        period: "01/04/2018 - 16/06/2018",
        position: "iOS/Android Developer",
        description: "to be completed"
    },
    "APPWHERE S.A. de C.V.:": {
        period: "16/06/2018 - 16/06/2020",
        position: "Software Developer",
        description: "to be completed"
    },
    "Actual Secret Working Place:": {
        period: "19/10/2020 - Actual",
        position: "Python/Software Developer",
        description: "to be completed"
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