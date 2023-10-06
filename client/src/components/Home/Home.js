import React, { useEffect, useState } from 'react'
import { Container, Grid, Grow, Paper, AppBar, TextField, Button } from '@material-ui/core'
import useStyles from '../../styles'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation} from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'

import { getPosts } from '../../actions/posts'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import Pagination from '../Pagination'

export default function Home() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, currentId])

  return (
    <Grow in>
      <Container>
        <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3} >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}