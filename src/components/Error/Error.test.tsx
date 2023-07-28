import {render, screen} from "@testing-library/react";
import {ERROR_TESTING_IDS} from './Error.tsx'
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Error from "./Error.tsx";

describe('Testing error', () => {
  it('If error exist, should show error div', () => {
    render(<Error error={'error'}/>)
    expect(screen.getByTestId(ERROR_TESTING_IDS.TEXT)).toBeInTheDocument()

  })

  it('If error exist, should show error message', () => {
    render(<Error error='error'/>)
    expect(screen.getByTestId(ERROR_TESTING_IDS.TEXT)).toHaveTextContent('error')
  })
})
