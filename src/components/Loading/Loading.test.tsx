import {render, screen} from "@testing-library/react";
import {LOADING_TESTING_IDS} from './Loading.tsx'
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Loading from "./Loading.tsx";

describe('Testing loader', () => {
  it('If loading is true, should show loader', () => {
    render(<Loading isLoading={true}/>)
    expect(screen.getByTestId(LOADING_TESTING_IDS.CONTAINER)).toBeInTheDocument()

  })

  it('If loading is false, shouldnt show loader', () => {
    render(<Loading isLoading={false}/>)
    expect(screen.getByTestId(LOADING_TESTING_IDS.CONTAINER)).not.toBeInTheDocument()

  })
})
