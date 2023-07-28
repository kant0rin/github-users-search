import {render, screen} from "@testing-library/react";
import Modal, {MODAL_TEST_IDS} from './Modal.tsx'
import React from 'react';
import '@testing-library/jest-dom/extend-expect';


describe('Modal component tests', () => {
  test('Modal render container', function () {
    render(<Modal isActive={true}/>)
    const container = screen.getByTestId(MODAL_TEST_IDS.CONTAINER)
    expect(container).toBeInTheDocument()
  });

  test('Modal shows user login', function () {
    render(<Modal isActive={true} currentUser='Hello'/>)
    const login = screen.getByTestId(MODAL_TEST_IDS.LOGIN)
    expect(login).toHaveTextContent('Hello')
  })
})
