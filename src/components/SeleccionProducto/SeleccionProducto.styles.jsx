import styled from "styled-components";

export const FondoComprar = styled.div `
width: 100vw;
height: 100vh;
display: flex;
justify-content: flex-end;
align-items: flex-end;

@media (max-width: 830px) {
    flex-direction: column;
    width: 100vw;
    height: fit-content;
}
`

export const BotonColor = styled.button `
height: 50px;
`

export const CajaColores = styled.div `
margin: 40px 0px;
max-width: 30vw;

@media (max-width: 830px) {
    max-width: 100vw;
    margin: 20px 0px;
}
`

export const InputNum = styled.input `
    padding: 10px 10px;
    width: 50px;
    font-size: 1.5rem;
    border: none;
    border-radius: 10px;
`

export const ImgModelos = styled.div `
background-image: url(${props => props.foto});
background-size: cover;
background-position: center;
width: 50vw;
height: 100vh;
position: absolute;
z-index:2;
border-right: 10px solid white;
border-left: 10px solid white;
top: 0;
left: 0;
margin: auto;

img {
    margin-top: 15px;
    margin-left: 20px;
    height: 60px;
}

@media (max-width: 830px) {
    width: 100vw;
    height: 75vh;
    border: none;
    top: 90px;
    position: relative;
    border-bottom: 10px solid white;

    img {
        display: none;
    }
}
`

export const EspacioCompra = styled.div `
padding: 0px 100px 100px 0px;
text-align: end;

@media (max-width: 830px) {
    padding: 0px 30px;
    margin: 105px auto 50px auto;
}
`

export const BtnComprar = styled.button `
background: rgb(255, 239, 95);
    border: 4px solid black;
    border-radius: 50px;
    padding: 15px;
    margin-left: 20px;
 
    img {
        width:50px;
    }

    @media (max-width: 830px) {
        margin-top: 10px
    }
`