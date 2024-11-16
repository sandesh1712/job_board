$(document).ready(()=>{
    let newFieldCount = 0;
    const newFieldButton = $("button[data-id='new-question-btn']")
    const fieldsList = $("#new_fields")

    newFieldButton.click(()=>{
        const field = `<div class="card p-2 border-1 mb-4">
             <input placeholder="question" class="form-control my-2" name="job[job_questions_attributes][${newFieldCount}][question]"/>
             <input placeholder="type" class="form-control my-2" name="job[job_questions_attributes][${newFieldCount}][field_type]"/>
             <button data-id="remove-field-btn" class="btn my-2 form-control btn-sm btn-outline-danger">remove</button>
         </div>
        `
        fieldsList.append(field);

        newFieldCount++;
        const p = fieldsList.find("p")
        if(p)
          p.remove()
    });

    fieldsList.on('click', 'button[data-id="remove-field-btn"]', function() {
        $(this).closest('div').remove(); // Remove the parent div of the clicked button
        const div = fieldsList.find("div");

        newFiledCount--;
        if(div.length === 0)
            fieldsList.append(
                `<p> You can Add Custom Questions by clicking on below button</p>`
            )
    });
});