import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';


describe('pruebas en GifGridItem', () => { 
    const title = 'Un Titulo';
    const url = 'https/localhost.jpg';
    test('debe mostrar el componente correctamente', ()=>{
        const wrapper = shallow( <GifGridItem title={title} url={url} /> )
        expect(wrapper).toMatchSnapshot();
    })
 })