import React from "react";
export function Review({review}){
    return <div className="card m-2">
        <div className="card-header">
            <b>{review.user.first_name} {review.user.last_name}</b>
            <p className="mb-0"> {new Date(review.created_at).toDateString()} </p>
        </div>
        <div className="card-body">
            <p> {review.review} </p>
        </div>
    </div>
}