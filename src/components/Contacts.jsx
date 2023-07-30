const Contacts = ({ contacts }) => {
    return(
        contacts.map(({ b, id }) => (
            <p key={id}>{b }</p>
    ))
    
)
}

export default Contacts;

//  const { contacts } = this.state;

//     return (<div><form name="contact_form" onSubmit={this.handleSubmit}>
//         <label>Name
//           <input
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
//   onChange = {this.handleInput}          
//           /></label>
//         <button type="submit">Add contact</button>
//     </form>
//       <h2>Contsacts</h2>
//       <Contacts contacts={contacts } /> : 
      
//     </div>