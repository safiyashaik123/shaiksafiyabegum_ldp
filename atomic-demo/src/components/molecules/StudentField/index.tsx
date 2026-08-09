import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import "./StudentField.css";

interface IStudentFieldProps {
    label: string;
    type: string;
    placeholder: string;
}

function StudentField({
    label,
    type,
    placeholder,
}: IStudentFieldProps) {
    return (
        <div className="student-field">

            <Label text={label} />

            <Input
                type={type}
                placeholder={placeholder}
            />

        </div>
    );
}

export default StudentField;