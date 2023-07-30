import { Component } from "react";
import PropTypes from 'prop-types';

class ContactForm extends Component  {

    state = {
        name: '',
        number: ''
    }
    
    handleInput = (e) => {

        const {name, value} = e.target

        this.setState({
            [name]: value,
        })
    }
        
    handleSubmit = (e) => {
    e.preventDefault()
        
        this.props.addContact({ ...this.state });
        
        this.setState({ name: "", number: "" });

  }     
   
    render() {
       return (
        <div>
    <form name="contact_form" onSubmit={this.handleSubmit}>
            <label>Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleInput}
                /></label>
            <label>Number
                <input
                    type="tel"
                    name="number"
                    pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleInput}
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
      
        </div>
    )
   } 
};

export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
}