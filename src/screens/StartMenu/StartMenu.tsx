interface startmenutypes {
    Onclick: () => void
}

function StartMenu({ Onclick }: startmenutypes){


    return(
        <>
        <h1>ASAP</h1>
        <button onClick={Onclick}>Tap to start</button>
        </>
    )
}
export default StartMenu


