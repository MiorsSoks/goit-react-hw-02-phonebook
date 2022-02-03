import PropTypes from "prop-types";
import {ButtonFilter, ListItem} from './ContactList.styled'
export default function ContactList({ filterContacts, deleteContact }) {
    return (
        <ul>
            {filterContacts.map(({id, name, number}) => <ListItem key={id}>{name} {number}<ButtonFilter type="button" id={id} onClick={deleteContact}>Delete</ButtonFilter></ListItem>)}
          </ul>
    )
}

ContactList.propTypes = {
    filterContacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
};