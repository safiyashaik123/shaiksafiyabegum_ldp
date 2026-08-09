import "./Label.css";

interface ILabelProps {
    text: string;
}

function Label({ text }: ILabelProps) {
    return (
        <label className="label">
            {text}
        </label>
    );
}

export default Label;