import styled from "styled-components";


export const Caja = styled.div `
display: flex;
flex-direction: column;
display: ${props => props.visible ? "flex" : "none"};
margin-right: 30px;
`;

export const PopUp = styled.div `
z-index:100;
position: absolute;
    left: 36vw;
    top: 22vh;
    background-color: rgb(29, 30, 31);
    padding: 10px 10px 60px 40px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const FondoPopUp = styled.div `
background-color: rgb(0 0 0 / 85%);;
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
display: ${props => props.visible ? "block" : "none"}
`

export const BtnForm = styled.button `
font-size: 1rem;
background-color: #484848ff;
color: white;
border: none;
border-radius: 5px;
margin-top: 20px;
padding: 10px;
cursor: pointer;
&:hover {
    background-color: yellow;
    color:#484848ff
}
`

export const InputForm = styled.input `
font-size: 1rem;
border:none;
border-radius: 5px;
width: 300px;
padding: 10px;
&:hover {
    color:black;
}
`

export const Titulo = styled.p `
font-size: 1.6em;
color: yellow;
text-align: center;
font-weight: 400;
&:hover {
    color:yellow;
}
`

export const LogoImg = styled.img `
width: 200px;
margin: 10px 30px 20px 0px;
`

export const Form = styled.form `
display: flex;
flex-direction: column;
align-items: center;
`

export const BtnCerrar = styled.button `
background-color: transparent;
border: none;
font-size: 2rem;
color: #484848;
&:hover {
    color: white;
}
`