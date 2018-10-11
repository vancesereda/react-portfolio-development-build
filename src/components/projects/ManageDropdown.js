import React, { Component } from 'react';
import { Dropdown, DropdownToggle, Input, DropdownMenu } from 'reactstrap';
import cities from './usaCities';

class ManageDropdown extends Component {

    constructor(props) {
        super(props)    
        this.state = {
            value: '',
            dropdownOpen: false,
            locationSearch: null,
            placeholder: this.props.cityStateDefault
        },

        this.inputRef = React.createRef();   
        document.addEventListener("mousedown", this.handleRefClick, false); 

    }

    // methods 

    onClick = (event) => {

        // Click manager: 
        // clear placeholder value ( first click event)
        // or, send text value to handleLocationChange() (second click event)
        const { value, isClear } = this.state;
        if (value === '') {
            this.handlePlaceholder(true);
        } else if (value.length > 5 && !isClear) {
            // console.log('onClick Send happened')
            this.handleClick(event.target.textContent)
            this.toggle();
        }

    }

    handleRefClick = (e) => {
        if (this.inputRef.current === e.target) {
          return;
        }
        this.handleRefClickOutside();
      }
      
    handleRefClickOutside = () => {
        const { locationSearch } = this.state;
         if (locationSearch) {
            this.setState({placeholder: locationSearch})
         } else {
            this.setState({placeholder: this.props.cityStateDefault})
         }
      }
    
    handleClick = (val) => {
    
        
        this.setState({value: '', locationSearch: val})
        // console.log(val, ' sent to handleLocationChange')
        this.props.handleLocationChange(val).then(res => this.handlePlaceholder(false))
        // this.handleLocationChange(event.target)
        //Do stuff in here
      }
    
    
    checkandToggleDropDown = () => {
    
        const { value, dropdownOpen, isClear } = this.state;
        if (value.length < 5 && isClear) {
            this.clearPlaceholder();
        }
        if (value.length > 5 && !dropdownOpen) {
          this.setState({dropdownOpen: true})
          
        } else if (value.length < 5 && dropdownOpen) {
    
          this.setState({dropdownOpen:false})
        }
      }
    
    
    
    handlePlaceholder = (val) => {

        const { placeholder, locationSearch } = this.state;

        if ( locationSearch && !val ) {
            this.setState({placeholder: locationSearch })
        } else if (val) {
            this.setState({placeholder: ''})
        }
        
    }

    
    toggle = () => {
        const { dropdownOpen } = this.state;
        this.setState({dropdownOpen: !dropdownOpen})
    }


    handleChange = (event) => {

        const { value } = event.target;
        this.setState({ value })
        this.checkandToggleDropDown();

    }


    



    render() {
        const { dropdownOpen, value, isClear, placeholder } = this.state;
        

        // console.log(this.props)
        //  console.log('component state: ', this.state )
        // console.log('component props: ', this.props)
        // const { dropdownOpen, inputRef, placeholder, value , handleChange} = this.props;
        // const { value, dropdownOpen, inputRef, placeholder } = this.props;
        const cityFilter = cities.filter(val => val["city"].includes(this.state.value.substr(0, 5)))
                           .map(val=>val["city"])

        const stateFilter = cities.filter(val => val["city"].includes(this.state.value.substr(0,5)))
                            .map(val=>val["state"])  

    // console.log(city)
        
        return (

            
<Dropdown isOpen={dropdownOpen}>


    <DropdownToggle tag="span"
        toggle= {this.toggle}
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
        style={{'display':'inline-block'}}
       >


    <span ref={this.inputRef}>
        <Input placeholder={this.state.placeholder}
        className="transparent-input"
        onClick={this.onClick}
        onChange={this.handleChange}
        value={this.state.value}
        />
    </span>


    </DropdownToggle>
    <DropdownMenu>

    {cityFilter.slice(0,5).map( 
        (c, i) => 
        <div key={i} onClick={this.onClick}>{c}, {stateFilter[i].substr(0,2).toUpperCase()}</div>
        )}


   
        
    </DropdownMenu>
</Dropdown>
        );
    }
}

export default ManageDropdown;


// 

//  {/*{this.state.dropdownOpen}*/
// /*{this.state.clear ? null : cityStateDefault}*/
//  /*()=>this.setState({clear:true})*/
//  /*<CitiesDropdown string={this.state.value}
//         handler={this.dropdownClickChange}
//         />*/
/*

handleChange = (e) => {
    
    const { dropdownOpen,  value } = this.props;
    //send value to update this.state.value
    this.props.handleChange(e.target.value);

    // check value in order to toggle the dropdown
    if (this.props.value.length > 5 && this.props.dropdownOpen === false ) {
        this.props.toggle();
    } else if (value.length < 5 && dropdownOpen) {
        this.props.toggle();
    }

}





*/

        