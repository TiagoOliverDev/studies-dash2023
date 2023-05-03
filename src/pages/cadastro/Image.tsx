export default function Image(props: any) {
    return (
        <div
            style={{
                height: "100%",
                width: "100%"
            }}>

            <img
                src={props.path}
                alt="Imagem"
                style={{
                    height: "100%",
                    borderRadius: "15px 0 0 15px",
                }}
            />
        </div>
    );
}