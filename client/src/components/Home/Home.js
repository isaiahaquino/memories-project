import React, { useEffect, useState } from 'react'
import { Container, Grid, Grow, Paper, AppBar, TextField, Button } from '@material-ui/core'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation} from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'

import { getPosts } from '../../actions/posts'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import Pagination from '../Pagination'
import { getPostsBySearch } from '../../actions/posts'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Home() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)
  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])
  const query = useQuery()
  const history = useHistory()
  const page = query.get('page') || 1
  const searchQuery = query.get('searchQuery')

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search: search, tags: tags.join(',') }))
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
    } else {
      history.push('/')
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      searchPost()
    }
  }

  const handleAdd = (tag) => setTags([ ...tags, tag])

  const handleDelete = (tag) => setTags(tags.filter((t) => t !== tag))



  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3} >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position='static' color='inherit'>
              <TextField name='search' variant='outlined' label='Search Memories' fullWidth onKeyUp={handleKeyUp} value={search} onChange={(e) => setSearch(e.target.value)} />
              <ChipInput 
                style={{ margin: '10px 0'}}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchPost} className={classes.searchButton} color='primary' variant='contained'>Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {(!searchQuery && !tags.length) && 
              <Paper elevation={6} className={classes.pagination}>
                <Pagination page={page} />
              </Paper>
            }
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}