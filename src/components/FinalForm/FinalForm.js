import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './FinalForm.scss';

const FinalForm = props => {

    const { formTitleData, formBackgroundData, formFieldsData, formButtonStyle } = props.formData;

    const formik = useFormik({
        initialValues: {
        },
        validationSchema: Yup.object({
        }),
        onSubmit: () => {}
    });

    const backgroundStyle = {
        backgroundColor: formBackgroundData.backgroundColor,
        height: formBackgroundData.backgroundHeight,
        width: formBackgroundData.backgroundWidth
    };

    return (
        <form style={backgroundStyle}>
            <h1>{formTitleData ? formTitleData.title : ''}</h1>
        </form>
    );
}

export default FinalForm;