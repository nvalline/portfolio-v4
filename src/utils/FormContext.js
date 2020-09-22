import React, { useState } from 'react';

const FormContext = React.createContext();

const FormProvider = ({ children }) => {
    const [contactForm, setContactForm] = useState(true);

    return (
        <FormContext.Provider value={[contactForm, setContactForm]}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider };