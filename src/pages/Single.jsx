import React from "react";
import Edit from "..//img/edit.png";
import Delete from "..//img/delete.png";
import {Link} from 'react-router-dom';
import Menu from "../components/Menu";


const Single = () => {
    return(
        <div className="single">
            <div className="content"> 
                <img src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className="user">
                <img src="https://images.pexels.com/photos/265129/pexels-photo-265129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className="info">
                <span>John</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
                </Link> 
                <img src={Delete} alt="" />
            </div>
            </div>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptatum voluptate consectetur corrupti! Ratione, perspiciatis labore sed ea, corrupti dignissimos maiores quaerat numquam ab facilis reprehenderit ducimus ipsa animi voluptas.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum cumque laborum et ducimus minus sapiente asperiores dolorum voluptate laboriosam nobis mollitia vel voluptatibus aut amet molestias quod, hic temporibus.</p>
            </div>
            <Menu/>
        </div>
    );
};

export default Single