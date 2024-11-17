$(document).ready(()=>{
    let newFieldCount = 0;
    const newFieldButton = $("button[data-id='new-question-btn']")
    const fieldsList = $("#new_fields")

    newFieldButton.click(()=>{
        const field = `<div class="card p-2 border-1 mb-4">
             <input placeholder="question" class="form-control my-2" name="job[job_questions_attributes][${newFieldCount}][question]"/>
             <select required class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="optionSelectHandler(event,${newFieldCount})" name="job[job_questions_attributes][${newFieldCount}][field_type]">
                 <option selected value="text">Text</option>
                 <option value="text-area">Text Area</option>
                 <option value="number">Number</option>
                 <option value="select">Dropdown</option>
                 <option value="checkbox">Checkbox</option>
             </select>
             
             <input style="display: none" required name="job[job_questions_attributes][${newFieldCount}][options]" class="form-control my-2" placeholder="Enter comma separated options"/>
             
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

    function optionSelectHandler(event,index){
        const value = event.target.value;

        const optionsField = $(`input[name="job[job_questions_attributes][${index}][options]"]`)

        if(value === "select" || value === "checkbox"){
            optionsField.show()
        }else{
            optionsField.hide()
        }
    }
    window.optionSelectHandler = optionSelectHandler
});

