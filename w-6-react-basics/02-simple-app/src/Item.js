import { FaInstagram } from "react-icons/fa6";

function Item({ item }) {
    return (
        <div
            style={{
                margin: "10px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
            }}
        >
            <h3>{item.name}</h3>
            <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: "150px", height: "150px" }}
            />
            <div>
                <a
                    href='https://www.instagram.com/errormakesclever'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaInstagram size={30} color='#E1306C' />
                </a>
            </div>
        </div>
    );
}

export default Item;
