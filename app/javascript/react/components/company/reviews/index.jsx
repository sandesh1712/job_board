import React, {useEffect, useState} from 'react';
import {createRoot} from "react-dom/client";
import {Review} from "./Review";
import {AddReview} from "./AddReview";
import {get, post} from "../../../../helpers/api.helper";

function Reviews({company_id,user_id}){
    const [reviews ,setReviews] = useState([]);

    const [modalState,setModalState] =useState(false)

    const [newReviewCount,setNewReviewCount] = useState(0);

    useEffect(() => {
        async function fetchReview(){
            const reviews = await get(`/reviews/company/${company_id}`);
            const reviews_json = await reviews.json();
            setReviews(reviews_json);
        }
        fetchReview();
    }, [newReviewCount]);

    function updateReviewAddedCount(isNewReviewAdded){
        if(isNewReviewAdded){
                console.log(newReviewCount)
                setNewReviewCount(prev => prev+1);
        }
    }

    async function addReview(review){
        const data = {
            review,
            company_id,
            user_id
        }

        return await post('/reviews/create',data)
    }


    return (<div>
         <div>
            <h3> Reviews </h3>
             {
                 !user_id && <p> <a className="link-primary" href="/users/sign_in">Sign In </a> to add review. </p>
             }
             {user_id &&
             <AddReview closeModal={updateReviewAddedCount} addReview={addReview}/>}
         </div>
        <hr/>
         <div style={{height: '400px'}} className="overflow-scroll">
        { reviews.length > 0 && reviews.map( review => {
           return <Review review={review}/>
          })
        }
        </div>
    </div>)
}

document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById("reviews_container");
    const company_id = element.getAttribute("data-company-id");
    const user_id = element.getAttribute("data-user-id")??null;
    createRoot(element).render(<Reviews company_id={company_id} user_id={user_id}/>);
})
