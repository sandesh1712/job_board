import React, {useRef, useState} from "react";
import {get} from "../../../../helpers/api.helper";
export function New(){
    const [autoCompleteResult,setAutoCompleteResult] = useState([]);
    const autocompleteInputText = useRef();
    const autocompleteInputNum = useRef();

    const resetAutoCompleteResult = ()=>{
        setAutoCompleteResult([]);
    }
    const fetchAutocompleteResult = async (query="")=>{
          if(!query || query==="") {
              resetAutoCompleteResult();
              return
          }
         const result = await get(`/api/company/list?autocomplete=${query}`);
         setAutoCompleteResult(await result.json());
    }

    let autoCompleteDelayTimeOut;
    const autocompleteChangeHandler=(e)=>{
        clearTimeout(autoCompleteDelayTimeOut);
        autoCompleteDelayTimeOut = setTimeout(()=>fetchAutocompleteResult(e.target.value.trim()),300);
    }

    const companySelectHandler = (company) =>{
        autocompleteInputText.current.value = company.name;
        autocompleteInputNum.current.value = company.id;
        resetAutoCompleteResult();
    }

    return <div className="card w-25 mx-auto mt-5">
        <div className="card-header">
            <div className="card-title">
                <h2>Sign up</h2>
            </div>
        </div>
        <div className="card-body">
            <form action="/users" method="POST">
                <div className="field">
                    <label>First Name</label><br/>
                    <input required type="text" className="form-control" autoFocus={true} autoComplete="first_name"
                           name="user[first_name]"/>
                </div>
                <div className="field">
                    <label>Last Name</label><br/>
                    <input required type="text" className="form-control" autoComplete="last_name"
                           name="user[last_name]"/>
                </div>
                <div className="field">
                    <label>Email</label><br/>
                    <input required type="text" className="form-control"  autoComplete="email"
                           name="user[email]"/>
                </div>
                <div className="field">
                    <label>Password (6 characters minimum)</label><br/>
                    <input required type="password" className="form-control"
                           name="user[password]"/>
                </div>

                <div className="field">
                    <label>Password confirmation</label><br/>
                    <input type="password" className="form-control" />
                </div>

                <div className="field">
                    <label>Company</label><br/>
                    <input onInput={autocompleteChangeHandler} type="text" className="form-control"  ref={autocompleteInputText}/>

                    {autoCompleteResult.length > 0 && <ul className="list-group position-absolute">
                        {
                            autoCompleteResult.map( (company ,index) => {
                                return <li onClick={()=>companySelectHandler(company)} key={`autocomplete_result_${index}`} className="list-group-item">{company.name}</li>
                            })
                        }
                    </ul>}

                    <input hidden type="text" ref={autocompleteInputNum} className="form-control"  name="user[company_id]"/>
                </div>

                <div className="field">
                    <label>Are you a recruiter ? </label><br/>
                    <input type="checkbox" className="form-check"/>
                </div>

                <button className="btn btn-primary">Sign Up
            </button>
        </form>
    </div>
    <div className="card-footer">
        <a href="/users/sign_in">Log in</a>
    </div>
</div>
}
