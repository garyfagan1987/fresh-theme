import React from 'react';

import Input from '../src/components/atoms/input';
import InputGroup from '../src/components/atoms/input-group';
import Label from '../src/components/atoms/label';
import Button from '../src/components/atoms/button';

export default {
  title: 'Form',
};

export const input = () => (
  <div style={{padding: '20px', position: 'relative'}}>
    <InputGroup>
      <Label for="first-name">First name:</Label>
      <Input id="first-name" />
    </InputGroup>
    <InputGroup>
      <Label for="last-name">Last name:</Label>
      <Input id="last-name" />
    </InputGroup>
    <InputGroup>
      <Button>Submit</Button>
    </InputGroup>
  </div>
);