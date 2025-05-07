import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Playlist from './components/Playlist/Playlist'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Track from './components/Track/Track'
import TrackList from './components/TrackList/TrackList'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Playlist />
    <SearchBar />
    <SearchResults />
    <Track />
    <TrackList />
  </StrictMode>,
)
