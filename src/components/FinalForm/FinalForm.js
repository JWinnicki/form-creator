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

    const titleStyle = {
        color: formTitleData.titleColor,
        fontSize: formTitleData.fontSize,
        fontWeight: formTitleData.fontWeight,
        fontStyle: formTitleData.fontStyle
    }

    return (
        <form className='FinalForm' style={backgroundStyle}>
            <h1 className='FinalForm-title' style={titleStyle}>{formTitleData ? formTitleData.title : ''}</h1>
        </form>
    );
}

export default FinalForm;