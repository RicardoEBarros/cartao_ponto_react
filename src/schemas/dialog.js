import * as yup from "yup"

const typesId = (el) => el.typeId

export const basicSchema = (formikValues) => yup.object().shape({
    typeId: yup.number().integer().positive('Informe um tipo válido').notOneOf(formikValues.map(typesId), () => 'Tipo já informado' ).required("Campo obrigatório"),
    time: yup.string().min(5).required("Campo obrigatório")
})
