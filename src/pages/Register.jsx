import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FAD961;
    background-image: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    outline: none;
`;
const Aggrement = styled.span`
    font-size: 20px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;
const Register = () => {
    return (
        <Container>
         <Wrapper>
             <Title>REGISTER FORM</Title>
             <Form>
                 <Input placeholder="name" />
                 <Input placeholder="last name" />
                 <Input placeholder="username" />
                 <Input placeholder="email" />
                 <Input placeholder="password" />
                 <Input placeholder="confirm password" />
                 <Aggrement>By creating an account, I consent to the processing of my personal 
                     data in accordance with the <b>PRIVACY POLICY</b>
                 </Aggrement>
                 <Button>REGISTER</Button>
             </Form>
        </Wrapper>   
        </Container>
    )
}

export default Register
