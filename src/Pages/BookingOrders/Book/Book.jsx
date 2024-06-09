
const Book = ({ booking, handleDelete }) => {

    const { _id,date, title, img, price } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={img} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>
                {date}
            </td>
            <td>
                ${price}
            </td>
            <th>
                <button className="btn btn-ghost">Pending</button>
            </th>
        </tr>
    );
};

export default Book;