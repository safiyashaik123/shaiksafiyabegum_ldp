import "./Heading.css";

interface IHeadingProps {
    title: string;
}

function Heading({ title }: IHeadingProps) {
    return (
        <h1 className="heading">{title}</h1>
    );
}

export default Heading;