import React from 'react'
import { render, fireEvent} from "@testing-library/react";
import PdfDownload from "../PdfDownload";

document.createElement = jest.fn()
const createObjectURLMock = jest.fn()
URL.createObjectURL = createObjectURLMock()
const revokeObjectURLMock = jest.fn()
URL.revokeObjectURL = revokeObjectURLMock()

