import "./Input.css";

interface IInputProps {
    type: string;
    placeholder: string;
}

function Input({ type, placeholder }: IInputProps) {
    return (
        <input
            className="input"
            type={type}
            placeholder={placeholder}
        />
    );
}

export default Input;