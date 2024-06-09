import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const BookingOrders = () => {

    const {users} = useContext(AuthContext);
    const [bookOrders, setBookOrders] = useState([]);

    const url = `http://localhost:5000/orders?email=${users.email}`
    console.log(url);

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookOrders(data))
    })

    return (
        <div>
            
        </div>
    );
};

export default BookingOrders;