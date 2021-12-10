import React, { useState } from 'react'
import Modal from 'react-modal';
import { StyledForm } from '../styles/Form.styled';
import Button from './Button';
import Input from './Input';
import { IForm } from './types';
import { Modal as AntModal } from 'antd';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useSelector } from 'react-redux';
import { selectMovies } from '../store/movies/moviesSlice';

const customStyles = {
    content: {
        padding: "20px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "#232323"
    },
};

const initialValues = {
    id: 0,
    title: '',
    vote_average: '',
    genres: '',
    overview: '',
    release_date: '',
    poster_path: '',
    runtime: '',
    budget: '',
    revenue: '',
    tagline: '',
    vote_count: '',
}

Modal.setAppElement('#modal');

const FormSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    genres: Yup.string()
      .required('Required'),
    overview: Yup.string()
      .required('Required'),
    poster_path: Yup.string()
      .required('Required'),
  });

function FormComponent({
    isOpen,
    modalClose,
    addMovie,
    editHandler,
    isEditable,
    movieIdForUpdate
}: IForm) {
    
    const movies = useSelector(selectMovies);
    const getValuesForUpdate = () => {
        return movies.find(item => item.id === +movieIdForUpdate)
    }
    function success() {
        AntModal.success({
            content: 'The movie has been added to database successfully ',
            title: "congratulations !"
        });
    }

    let resetHandler = () => {}
    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={modalClose}
            style={customStyles}
        >
            <StyledForm>
                <Formik
                    initialValues={isEditable ? getValuesForUpdate() : initialValues}
                    validationSchema={FormSchema}
                    onSubmit={(
                        values,
                        { setSubmitting, resetForm }
                        
                    ) => {
                        isEditable ? editHandler(values) : addMovie(values)
                        resetHandler = resetForm
                        modalClose()
                        success() 
                     }}
                >
                    {({ errors, touched, values, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="row">
                                <div style={{
                                    color: "#fff",
                                    fontSize: "40px",
                                    fontWeight: 300,
                                    lineHeight: "49px",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    marginBottom: "20px"
                                }} className="form__title">
                                    {isEditable ? "Update movie" : "Add movie"}
                                </div>
                                <button onClick={modalClose} className="modal__btn-close">X</button>
                            </div>
                            <div className="row">
                                <Input
                                    width="525px"
                                    label="Title"
                                    name="title"
                                    id="title"
                                    type="text"
                                    placeholder="Enter title"
                                    value={values.title}
                                    onchange={handleChange}
                                    marginRight="40px"
                                    isValid={true}
                                />
                                <Input
                                    width="300px"
                                    label="Release Date"
                                    name="release_date"
                                    id="release_date"
                                    type="date"
                                    placeholder="Select Date"
                                    value={values.release_date}
                                    onchange={handleChange}
                                />
                            </div>
                            <div className="row">
                                <Input
                                    width="525px"
                                    label="Movie poster_path"
                                    name="poster_path"
                                    id="poster_path"
                                    type="text"
                                    placeholder="https://"
                                    value={values.poster_path}
                                    onchange={handleChange}
                                    marginRight="40px"
                                    isValid={true}
                                />
                                <Input
                                    width="300px"
                                    label="Rating"
                                    name="vote_average"
                                    id="vote_average"
                                    type="number"
                                    placeholder="Enter your rate"
                                    value={`${values.vote_average}`}
                                    onchange={handleChange}
                                />
                            </div>
                            <div className="row">
                                <Input
                                    width="525px"
                                    label="Genres"
                                    name="genres"
                                    id="genres"
                                    type="select"
                                    placeholder="Select genres"
                                    value={values.genres[0]}
                                    onchange={handleChange}
                                    marginRight="40px"
                                    isValid={true}
                                />
                                <Input
                                    width="300px"
                                    label="Runtime"
                                    name="runtime"
                                    id="runtime"
                                    type="text"
                                    placeholder="Minutes"
                                    value={`${values.runtime}`}
                                    onchange={handleChange}
                                />
                            </div>
                            <textarea
                                name="overview"
                                id="overview"
                                placeholder="Movie overview"
                                value={values.overview}
                                onChange={handleChange}
                            />
                            <div style={{color: "white"}}>
                                <ErrorMessage name="overview" />
                            </div>
                            <div className="row mt-20 justify-right mr-40">
                                <Button type='reset' handler={resetHandler} bg="transparent" label="RESET" />
                                <Button type="submit" bg="" label={isEditable ? 'Update' : 'Submit'} />
                            </div>
                        </Form>
                    )}
                </Formik>
            </StyledForm>

        </Modal>
    )
}

export default FormComponent
