import "./Button.css";

interface IButtonProps {
    title: string;
}

function Button({ title }: IButtonProps) {
    return (
        <button className="button">
            {title}
        </button>
    );
}

export default Button;