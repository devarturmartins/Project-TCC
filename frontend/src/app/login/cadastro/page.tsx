'use client'
import Link from "next/link";
import { styled } from "styled-components"

const TagCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color: #F2F2F2;
    height: 60vw;
    width: 60vw;
    padding: 5vw;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;`

const Button = styled.button`
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 50px;
  `;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color: #F2F2F2;`

const Input = styled.input`
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 50px;`

export default function Cadastro() {
    return (
        <TagCadastro>
           <div>
                Cadastro
           </div>
           <div>
                Preencha seus dados para se cadastrar
           </div>
           <div>
           <Form>
            <label>
                Nome:
                <Input type="text" name="name" />
            </label>
            <label>
                Email:
                <Input type="text" name="email" />
            </label>
            <label>
                Matricula:
                <Input type="text" name="matricula" />
            </label>
            <label>
                Senha:
                <Input type="text" name="password" />
            </label>
            <label>
                Confirmar Senha:
                <Input type="text" name="verifypassword" />
            </label>
            <Link href="/login">Já possui uma conta?</Link>
            <Button type="submit">Cadastrar</Button>
        </Form>
           </div>
        </TagCadastro>
    )
}