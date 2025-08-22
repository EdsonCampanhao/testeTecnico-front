
interface errorMessageProps {
    message: string;
}
export default function ErrorMessage({ message }: errorMessageProps) {


    return (
        <div
            style={{
                padding: "10px 15px",
                backgroundColor: "#f8d7da",
                color: "#842029",
                border: "1px solid #f5c2c7",
                borderRadius: "5px",
                fontSize: "14px",
                margin: "10px 0"
            }}
        >
            {message}
        </div>
    );
}