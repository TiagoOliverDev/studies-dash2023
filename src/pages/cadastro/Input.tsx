import TextField from "@mui/material/TextField";

interface InputCadastroProps{
    id?: any;
    label: string;
    value: string;
    style?: {};
    type?: string;
    onChange?: () => any;
};

export default function InputCadastro(props: InputCadastroProps) {
    return (
        <div>
            <TextField
                required
                id={props.id}
                label={props.label}
                value={props.value}
                onChange={props.onChange}
                style={props.style}
                type={props.type}
            />
        </div>
    );
};