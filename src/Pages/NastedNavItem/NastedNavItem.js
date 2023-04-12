import React from 'react';
import { Link } from 'react-router-dom';
import './NastedNavItem.css'


const NastedNavItem = ({ singleTeam, handleTeam }) => {

    return (

        <div className="">
           <Link className='' onClick={()=>handleTeam(singleTeam)} to={singleTeam._id}><img src={singleTeam.img} className='w-[40px] h-[40px] rounded-full border mb-2' alt="" /></Link>
        </div>

    );
};

export default NastedNavItem;