import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

export default function Input({ name, label, handleChange, half, autoFocus, type, handleShowPassword }) {
  return (
    <Grid item xs={6} sm={half ? 6 : 12}>
      <TextField 
        name={name}
        label={label}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          )
        } : null }
      />
    </Grid>
  )
}
