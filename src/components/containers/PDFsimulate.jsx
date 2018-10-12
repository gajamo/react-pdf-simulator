import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContainerView from './ContainerView.jsx'

class PDFsimulate extends Component {
    /*
     *Crear la función que me genernere el paginado dependiendo el
     *deprendiendo del tamaño de las etiquetas html 
     *
     * Crear la función de zoom 
     * 
    */
    render() {
        const {children} = this.props;
        return (
            <ContainerView textHTML = {children} />
        );
    }
}

PDFsimulate.propTypes = {
    children:PropTypes.array,
};

export default PDFsimulate;