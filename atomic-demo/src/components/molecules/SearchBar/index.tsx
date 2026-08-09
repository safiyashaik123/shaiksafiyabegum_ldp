import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import "./SearchBar.css";

interface ISearchBarProps {
    placeholder: string;
    buttonTitle: string;
}

function SearchBar({
    placeholder,
    buttonTitle,
}: ISearchBarProps) {
    return (
        <div className="search-bar">

            <Input
                type="text"
                placeholder={placeholder}
            />

            <Button
                title={buttonTitle}
            />

        </div>
    );
}

export default SearchBar;