import {get} from "../../helpers/api.helper";

$(document).ready(async ()=> {
    const isSignInPage = $(`#sign_in_page`);
    let result = [];
    async function autocompleteResult(query){
        return (await get(`/api/company/list?autocomplete=${query}`)).json();
    }

    const companyAutoComplete = $(`#company_autocomplete_field`)
    const companyAutoCompleteResult = $(`#company_autocomplete_result`)

    const displayResult = (results) => {
        companyAutoCompleteResult.empty();

        if(results.length > 0) {
            results.forEach((company) => {
                companyAutoCompleteResult.append(`<li onclick="autoCompleteSelectHandler(${company.id})" class="list-group-item">${company.name}</li>`);
            });
        }else{
            companyAutoCompleteResult.append(`<li class="list-group-item">No result Found...</li>`)
        }
    }

    const clearResult = ()=>{
        companyAutoCompleteResult.empty();
    }

    let debounceTimeout;

    companyAutoComplete.on("input", (event) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            companyAutocompleteHandler(event);
        }, 300); // 300ms debounce delay
    });

    const companyAutocompleteHandler = async (event)=>{
        const value =  event.target.value.trim();

      result = await  autocompleteResult(value);

      result ? displayResult(res) : clearResult()
    }

    window.autoCompleteSelectHandler = (id,name)=>{
        console.log(id);
    }
})