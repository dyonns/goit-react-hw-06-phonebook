import { changeFilter } from "./contactActions";
import { createReducer } from "@reduxjs/toolkit";


const filterRreducer = createReducer("", (bilder) => {
    bilder.addCase(changeFilter, (state, { payload }) => state = payload)
})

export default filterRreducer;