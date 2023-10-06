import React, { useEffect, useState } from 'react'
import { Container, Grid, Grow } from '@material-ui/core'
import useStyles from '../../styles'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'

import Posts from '../Posts/Posts'
import Form from '../Form/Form'

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
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}