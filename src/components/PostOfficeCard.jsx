import { memo } from "react";
import '../styles/PostOfficeCard.css'

function PostOfficeCard({postOffice}) {

    const {Name: name, BranchType: branchType, DeliveryStatus: delivery, District: district, State: state} = postOffice;
    
    // console.log(postOffice);

    return (
        <div className="post-office-card">
            <p className="name-row">Name:  <b>{name}</b></p>
            <p className="branchType-row">Branch Type: <b>{branchType}</b></p>
            <p className="delivery-status-row">Deliver Status: <b>{delivery}</b></p>
            <p className="district-row">District: <b>{district}</b></p>
            <p className="state-row">State: <b>{state}</b></p>
        </div>
    )
}

export default memo(PostOfficeCard);