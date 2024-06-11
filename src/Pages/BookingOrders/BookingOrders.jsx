import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingBanner from "../SharedPage/BookingBanner/BookingBanner";
import Book from "./Book/Book";

const BookingOrders = () => {

    const { users } = useContext(AuthContext);
    const [bookOrders, setBookOrders] = useState([]);

    const url = `http://localhost:5000/orders?customerEmail=${users?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookOrders(data))
    })

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('Delete Successfully');
                const remaining = bookOrders.filter(booking => booking._id !== id);
                setBookOrders(remaining);
            }
        })
    }

    const handleUpdateConfirm = id =>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookOrders.filter(book => book._id !== id);
                const updatedOrder = bookOrders.find(book => book._id === id);
                updatedOrder.status = 'confirm';
                const newBookingOrder = [updatedOrder, ...remaining];
                setBookOrders(newBookingOrder);
            }
        })
    }

    return (
        <div>
            <BookingBanner></BookingBanner>
            <p className="text-center text-4xl font-bold mt-4">Booking Orders: {bookOrders.length}</p>
            <div className="overflow-x-auto w-full mt-6">
                <table className="table w-full">
                    {/* head */}
                    <thead className="text-2xl font-bold">
                        <tr>
                            <th>
                                
                            </th>
                            <th className="text">Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookOrders.map(booking => <Book
                                key={booking._id}
                                booking={booking}
                                handleDelete = {handleDelete}
                                handleUpdateConfirm={handleUpdateConfirm}
                            ></Book>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingOrders;