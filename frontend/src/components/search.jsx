import React, { useState } from 'react'
import axios from 'axios'
import { Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs'
export const search = () => {
    const [cep, setCep] = useState();
    const [response, setResponse] = useState('');

    function callYourAPI(cep) {
        const url = import.meta.env.VITE_BACKEND_URL;
        axios.get(url, {
            params: {
                cep: cep
            }
        }).then(res => {
            console.log(res.data);
            setResponse(res.data);
        });
    };

    function HandleChange(event) {
        setCep(event.target.value);
    };

    return (
        <div className="maincontainer">
            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon1">CEP</InputGroup.Text>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={cep}
                    onChange={HandleChange}
                />
                <Button
                    onClick={() => callYourAPI(cep)}
                    className="searchbutton"

                >
                   <BsSearch/>
                </Button>
            </InputGroup>
            <ListGroup className="lista">
                <ListGroup.Item>Cep: {response.cep}</ListGroup.Item>
                <ListGroup.Item>Bairro: {response.bairro}</ListGroup.Item>
                <ListGroup.Item>Complemento: {response.complemento}</ListGroup.Item>
                <ListGroup.Item>DDD: {response.ddd}</ListGroup.Item>
                <ListGroup.Item>Gia: {response.gia}</ListGroup.Item>
                <ListGroup.Item>IBGE: {response.ibge}</ListGroup.Item>
                <ListGroup.Item>Localidade: {response.localidade}</ListGroup.Item>
                <ListGroup.Item>Logradoro: {response.logradoro}</ListGroup.Item>
                <ListGroup.Item>Siafi: {response.siafi}</ListGroup.Item>
                <ListGroup.Item>UF: {response.uf}</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default search
