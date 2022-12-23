import { OnChange } from "../types";

const onChange: OnChange = (e, state, setState) => {
    setState({ ...state, [e.target.name]: e.target.value });
};

export default onChange;
