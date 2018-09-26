/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class ContactPopover extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <div id="Popover1" onClick={this.toggle}>
          Contact Me
        </div>
        <Popover placement="bottom-start" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          {<PopoverHeader>Contact Me</PopoverHeader>}
          <PopoverBody>650-793-2625<br/><a href="mailto:vancesereda@gmail.com">vancesereda@gmail.com</a></PopoverBody>
        </Popover>
      </div>
    );
  }
}
