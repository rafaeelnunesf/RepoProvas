import { useLocation } from "react-router-dom";
import { Input } from "../index";
export default function SearchBar() {
  let location = useLocation().pathname;
  let label =
    location === "subjects" ? "Search by subject" : "Search by instructor";

  return <Input label={label} inputType={"text"} />;
}
